#ifndef PP_INCLUDE_EXPRESSION_TREE_HPP
#define PP_INCLUDE_EXPRESSION_TREE_HPP

#include "maths.hpp"

#include <algorithm>
#include <cassert>
#include <functional>
#include <iostream>
#include <iterator>
#include <map>
#include <memory>
#include <numeric>
#include <ostream>
#include <stdexcept>
#include <string>
#include <string_view>
#include <type_traits>
#include <unordered_map>
#include <variant>
#include <vector>
#include <format>

// --- 1. CORE DATA STRUCTURES ---

template <typename T>
struct ExpressionNode;
template <typename T>
class ExpressionTree;

template <typename T>
using NodePtr = std::shared_ptr<const ExpressionNode<T>>;

template <typename T>
struct Constant {
	T value;
};
struct Variable {
	std::string name;
};

template <typename T>
struct UnaryOp {
	enum class Op { Cos, Sin, Minus, Sqrt } operation;
	NodePtr<T> exp;
};

template <typename T>
struct BinaryOp {
	enum class Op { Add, Multiply, Substract, Divide } operation;
	NodePtr<T> lhs, rhs;
};

template <typename T>
struct NaryOp {
	enum class Op { Add, Multiply } operation;
	std::vector<NodePtr<T>> operands;
};

template <typename T>
using ExpressionNodeType = std::variant<Constant<T>, Variable, UnaryOp<T>, BinaryOp<T>, NaryOp<T>>;

template <typename T>
struct ExpressionNode {
	ExpressionNodeType<T> node_type;
	template <typename NodeType>
	ExpressionNode(NodeType&& nt) : node_type(std::forward<NodeType>(nt)) {}
};

template <typename T>
struct NodePtrHasher {
	// Combines a seed with a new hash value. Inspired by boost::hash_combine.
	void hash_combine(std::size_t& seed, std::size_t value) const {
		seed ^= value + 0x9e3779b9 + (seed << 6) + (seed >> 2);
	}

	std::size_t operator()(const NodePtr<T>& node) const {
		if (!node)
			return 0;

		return std::visit(
			[&](auto const& n) -> std::size_t {
				using VT = std::remove_cvref_t<decltype(n)>;
				size_t seed = typeid(VT).hash_code();

				if constexpr (std::is_same_v<VT, Constant<T>>) {
					hash_combine(seed, std::hash<T>{}(n.value));
				} else if constexpr (std::is_same_v<VT, Variable>) {
					hash_combine(seed, std::hash<std::string>{}(n.name));
				} else if constexpr (std::is_same_v<VT, UnaryOp<T>>) {
					hash_combine(seed, static_cast<size_t>(n.operation));
					hash_combine(seed, (*this)(n.exp));
				} else if constexpr (std::is_same_v<VT, BinaryOp<T>>) {
					hash_combine(seed, static_cast<size_t>(n.operation));
					hash_combine(seed, (*this)(n.lhs));
					hash_combine(seed, (*this)(n.rhs));
				} else if constexpr (std::is_same_v<VT, NaryOp<T>>) {
					hash_combine(seed, static_cast<size_t>(n.operation));
					for (const auto& op : n.operands) {
						hash_combine(seed, (*this)(op));
					}
				}
				return seed;
			},
			node->node_type);
	}
};

// --- 2. THE EXPRESSION TREE CLASS ---

template <typename T>
class ExpressionTree {
	NodePtr<T> root_node;

	// --- Private Helper Struct for Map Keys ---
	struct NodePtrComparator {
		const ExpressionTree<T>* tree_instance;
		bool operator()(const NodePtr<T>& a, const NodePtr<T>& b) const {
			return tree_instance->compare_nodes(a, b) < 0;
		}
	};

    public:
	ExpressionTree() = default;
	explicit ExpressionTree(NodePtr<T> root) : root_node(std::move(root)) {}
	NodePtr<T> get_root() const { return root_node; }

	T evaluate(std::unordered_map<std::string, T> const& variables = {}) const;
	[[nodiscard]] ExpressionTree simplified() const;
	[[nodiscard]] ExpressionTree substitute(std::unordered_map<std::string, T> const& variables) const;
	[[nodiscard]] ExpressionTree symbolic_evaluate(std::unordered_map<std::string, T> const& variables) const;
	std::string to_string(std::string_view formatter = "{:.3g}") const;
	friend std::ostream& operator<<(std::ostream& os, ExpressionTree const& tree) { return os << tree.to_string(); }

    private:
	T evaluate_node(NodePtr<T> const& node, std::unordered_map<std::string, T> const& variables) const;
	NodePtr<T> substitute_node(NodePtr<T> const& node, std::unordered_map<std::string, T> const& variables) const;
	std::string to_string_node(NodePtr<T> const& node, std::string_view fmt, bool is_root) const;
	bool are_trees_identical(NodePtr<T> const& a, NodePtr<T> const& b) const;
	int compare_nodes(NodePtr<T> const& a, NodePtr<T> const& b) const;

	NodePtr<T> simplify_node(NodePtr<T> const& node) const;
	void flatten_operands(NodePtr<T> const& node, typename NaryOp<T>::Op op,
			      std::vector<NodePtr<T>>& operands) const;
	NodePtr<T> process_addition(std::vector<NodePtr<T>>& operands) const;
	NodePtr<T> process_multiplication(std::vector<NodePtr<T>>& operands, bool expand = true) const;
	std::pair<T, NodePtr<T>> extract_coefficient(NodePtr<T> const& node) const;

	NodePtr<T> factor_node(NodePtr<T> const& node) const;
	NodePtr<T> factor_addition_node(const NaryOp<T>& add_node) const;
	std::vector<NodePtr<T>> get_multiplicative_factors(NodePtr<T> const& node) const;
	NodePtr<T> build_from_factors(const std::vector<NodePtr<T>>& factors) const;
};

// --- 3. PUBLIC METHOD IMPLEMENTATIONS ---
template <typename T>
T ExpressionTree<T>::evaluate(std::unordered_map<std::string, T> const& variables) const {
	if (!root_node)
		return T{};
	return evaluate_node(root_node, variables);
}
template <typename T>
ExpressionTree<T> ExpressionTree<T>::substitute(std::unordered_map<std::string, T> const& variables) const {
	if (!root_node)
		return {};
	return ExpressionTree(substitute_node(root_node, variables));
}
template <typename T>
ExpressionTree<T> ExpressionTree<T>::symbolic_evaluate(std::unordered_map<std::string, T> const& variables) const {
	return substitute(variables).simplified();
}
template <typename T>
std::string ExpressionTree<T>::to_string(std::string_view formatter) const {
	if (!root_node)
		return "";
	return to_string_node(root_node, formatter, true);
}
template <typename T>
ExpressionTree<T> ExpressionTree<T>::simplified() const {
	if (!root_node)
		return {};
	ExpressionTree current_tree(*this);
	while (true) {
		ExpressionTree simplified_once(simplify_node(current_tree.root_node));
		if (are_trees_identical(current_tree.root_node, simplified_once.root_node)) {
			// After the main simplification loop stabilizes, run the final factoring pass.
			return ExpressionTree(factor_node(simplified_once.root_node));
		}
		current_tree = simplified_once;
	}
}

// --- 4. PRIVATE HELPER IMPLEMENTATIONS ---

template <typename T>
T ExpressionTree<T>::evaluate_node(NodePtr<T> const& node, std::unordered_map<std::string, T> const& variables) const {
	return std::visit(
		[&](auto const& n) -> T {
			using VisitedType = std::remove_cvref_t<decltype(n)>;
			if constexpr (std::is_same_v<VisitedType, Constant<T>>) {
				return n.value;
			} else if constexpr (std::is_same_v<VisitedType, Variable>) {
				auto it = variables.find(n.name);
				// FIX: Throw std::invalid_argument as expected by tests
				if (it == variables.end())
					throw std::invalid_argument("Unbound variable: " + n.name);
				return it->second;
			} else if constexpr (std::is_same_v<VisitedType, UnaryOp<T>>) {
				auto v = evaluate_node(n.exp, variables);
				switch (n.operation) {
				case UnaryOp<T>::Op::Cos:
					return cos(v);
				case UnaryOp<T>::Op::Sin:
					return sin(v);
				case UnaryOp<T>::Op::Minus:
					return -v;
				case UnaryOp<T>::Op::Sqrt:
					return sqrt(v);
				}
			} else if constexpr (std::is_same_v<VisitedType, BinaryOp<T>>) {
				auto lhs_v = evaluate_node(n.lhs, variables);
				auto rhs_v = evaluate_node(n.rhs, variables);
				switch (n.operation) {
				case BinaryOp<T>::Op::Add:
					return lhs_v + rhs_v;
				case BinaryOp<T>::Op::Multiply:
					return lhs_v * rhs_v;
				case BinaryOp<T>::Op::Substract:
					return lhs_v - rhs_v;
				case BinaryOp<T>::Op::Divide:
					return lhs_v / rhs_v;
				}
			} else if constexpr (std::is_same_v<VisitedType, NaryOp<T>>) {
				if (n.operation == NaryOp<T>::Op::Add) {
					return std::accumulate(n.operands.begin(), n.operands.end(), T{},
							       [&](T acc, const NodePtr<T>& op) {
								       return acc + evaluate_node(op, variables);
							       });
				} else {
					return std::accumulate(n.operands.begin(), n.operands.end(), T{ 1 },
							       [&](T acc, const NodePtr<T>& op) {
								       return acc * evaluate_node(op, variables);
							       });
				}
			}
			throw std::logic_error("Unhandled node type in evaluate");
		},
		node->node_type);
}

template <typename T>
NodePtr<T> ExpressionTree<T>::substitute_node(NodePtr<T> const& node,
					      std::unordered_map<std::string, T> const& variables) const {
	if (!node)
		return nullptr;
	if (auto const* var = std::get_if<Variable>(&node->node_type)) {
		auto it = variables.find(var->name);
		if (it != variables.end())
			return std::make_shared<const ExpressionNode<T>>(Constant<T>{ it->second });
	}
	return std::visit(
		[&](auto const& n) -> NodePtr<T> {
			using VT = std::remove_cvref_t<decltype(n)>;
			if constexpr (std::is_same_v<VT, UnaryOp<T>>) {
				auto new_exp = substitute_node(n.exp, variables);
				if (new_exp != n.exp)
					return std::make_shared<const ExpressionNode<T>>(
						UnaryOp<T>{ n.operation, new_exp });
			} else if constexpr (std::is_same_v<VT, BinaryOp<T>>) {
				auto new_lhs = substitute_node(n.lhs, variables);
				auto new_rhs = substitute_node(n.rhs, variables);
				if (new_lhs != n.lhs || new_rhs != n.rhs)
					return std::make_shared<const ExpressionNode<T>>(
						BinaryOp<T>{ n.operation, new_lhs, new_rhs });
			} else if constexpr (std::is_same_v<VT, NaryOp<T>>) {
				std::vector<NodePtr<T>> new_ops;
				bool changed = false;
				new_ops.reserve(n.operands.size());
				for (const auto& op : n.operands) {
					auto new_op = substitute_node(op, variables);
					if (new_op != op)
						changed = true;
					new_ops.push_back(new_op);
				}
				if (changed)
					return std::make_shared<const ExpressionNode<T>>(
						NaryOp<T>{ n.operation, new_ops });
			}
			return node;
		},
		node->node_type);
}

template <typename T>
std::string ExpressionTree<T>::to_string_node(NodePtr<T> const& node, std::string_view fmt, bool is_root) const {
	return std::visit(
		[&](auto const& n) -> std::string {
			using VT = std::remove_cvref_t<decltype(n)>;
			if constexpr (std::is_same_v<VT, Constant<T>>) {
				return std::vformat(fmt, std::make_format_args(n.value));
			} else if constexpr (std::is_same_v<VT, Variable>) {
				return n.name;
			} else if constexpr (std::is_same_v<VT, UnaryOp<T>>) {
				if (n.operation == UnaryOp<T>::Op::Minus) {
					bool is_simple = std::get_if<Constant<T>>(&n.exp->node_type) ||
							 std::get_if<Variable>(&n.exp->node_type);
					auto v_str = to_string_node(n.exp, fmt, true);
					return is_simple ? "-" + v_str : "-(" + v_str + ")";
				} else {
					auto v_str = to_string_node(n.exp, fmt, true);
					switch (n.operation) {
					case UnaryOp<T>::Op::Cos:
						return "cos(" + v_str + ")";
					case UnaryOp<T>::Op::Sin:
						return "sin(" + v_str + ")";
					case UnaryOp<T>::Op::Sqrt:
						return "sqrt(" + v_str + ")";
					default:
						break;
					}
				}
			} else if constexpr (std::is_same_v<VT, BinaryOp<T>>) {
				std::string lhs_str = to_string_node(n.lhs, fmt, false);
				std::string rhs_str = to_string_node(n.rhs, fmt, false);
				char op_char = ' ';
				switch (n.operation) {
				case BinaryOp<T>::Op::Add:
					op_char = '+';
					break;
				case BinaryOp<T>::Op::Multiply:
					op_char = '*';
					break;
				case BinaryOp<T>::Op::Substract:
					op_char = '-';
					break;
				case BinaryOp<T>::Op::Divide:
					op_char = '/';
					break;
				}
				std::string res = lhs_str + " " + op_char + " " + rhs_str;
				return is_root ? res : "(" + res + ")";
			} else if constexpr (std::is_same_v<VT, NaryOp<T>>) {
				// --- REVISED N-ARY PRINTING LOGIC ---
				if (n.operands.empty()) {
					return "";
				}

				// Multiplication is simple: just join with "*"
				if (n.operation == NaryOp<T>::Op::Multiply) {
					std::string res;
					for (size_t i = 0; i < n.operands.size(); ++i) {
						if (i > 0)
							res += " * ";
						res += to_string_node(n.operands[i], fmt, false);
					}
					return is_root ? res : "(" + res + ")";
				}

				// Addition requires special handling for negative terms to print " - "
				if (n.operation == NaryOp<T>::Op::Add) {
					std::string res = to_string_node(n.operands[0], fmt, false);
					for (size_t i = 1; i < n.operands.size(); ++i) {
						const auto& operand = n.operands[i];
						auto [coeff, term] = extract_coefficient(operand);

						// Check if the term is negative
						if (term != nullptr && coeff < 0) {
							res += " - ";
							T positive_coeff = -coeff;
							if (positive_coeff == 1) {
								res += to_string_node(term, fmt, false);
							} else {
								// Reconstruct the positive term for printing, e.g., "2 * x"
								auto coeff_node =
									std::make_shared<const ExpressionNode<T>>(
										Constant<T>{ positive_coeff });
								std::vector<NodePtr<T>> mul_ops = { coeff_node, term };
								res += to_string_node(process_multiplication(mul_ops),
										      fmt, false);
							}
						} else if (term == nullptr && coeff < 0) { // Negative constant term
							res += " - " +
							       to_string_node(std::make_shared<const ExpressionNode<T>>(
										      Constant<T>{ -coeff }),
									      fmt, false);
						} else { // Positive term
							res += " + " + to_string_node(operand, fmt, false);
						}
					}
					return is_root ? res : "(" + res + ")";
				}
			}
			throw std::logic_error("Unhandled node type in to_string");
		},
		node->node_type);
}
// --- 5. SIMPLIFICATION ENGINE IMPLEMENTATION ---

template <typename T>
NodePtr<T> ExpressionTree<T>::simplify_node(NodePtr<T> const& node) const {
	return std::visit(
		[&](auto const& n) -> NodePtr<T> {
			using VT = std::remove_cvref_t<decltype(n)>;
			if constexpr (std::is_same_v<VT, Constant<T>> || std::is_same_v<VT, Variable>) {
				return node;
			} else if constexpr (std::is_same_v<VT, UnaryOp<T>>) {
				// This is already bottom-up: simplify child, then process parent.
				auto s_exp = simplify_node(n.exp);
				if (auto const* c = std::get_if<Constant<T>>(&s_exp->node_type)) {
					switch (n.operation) {
					case UnaryOp<T>::Op::Cos:
						return std::make_shared<const ExpressionNode<T>>(
							Constant<T>{ cos(c->value) });
					case UnaryOp<T>::Op::Sin:
						return std::make_shared<const ExpressionNode<T>>(
							Constant<T>{ sin(c->value) });
					case UnaryOp<T>::Op::Minus:
						return std::make_shared<const ExpressionNode<T>>(
							Constant<T>{ -c->value });
					case UnaryOp<T>::Op::Sqrt:
						return std::make_shared<const ExpressionNode<T>>(
							Constant<T>{ sqrt(c->value) });
					}
				}
				if (auto const* inner_op = std::get_if<UnaryOp<T>>(&s_exp->node_type)) {
					if (n.operation == UnaryOp<T>::Op::Minus &&
					    inner_op->operation == UnaryOp<T>::Op::Minus)
						return inner_op->exp;
				}
				if (s_exp != n.exp)
					return std::make_shared<const ExpressionNode<T>>(
						UnaryOp<T>{ n.operation, s_exp });
			} else if constexpr (std::is_same_v<VT, BinaryOp<T>>) {
				// --- RESTRUCTURED to be BOTTOM-UP ---
				// 1. Simplify children FIRST.
				auto s_lhs = simplify_node(n.lhs);
				auto s_rhs = simplify_node(n.rhs);

				// 2. Perform operations on the now-simplified children.
				if (n.operation == BinaryOp<T>::Op::Substract) {
					auto neg_one = std::make_shared<const ExpressionNode<T>>(Constant<T>{ -1 });
					auto neg_rhs = std::make_shared<const ExpressionNode<T>>(
						BinaryOp<T>{ BinaryOp<T>::Op::Multiply, neg_one, s_rhs });
					auto add_node = std::make_shared<const ExpressionNode<T>>(
						BinaryOp<T>{ BinaryOp<T>::Op::Add, s_lhs, neg_rhs });
					return simplify_node(add_node);
				}

				if (n.operation == BinaryOp<T>::Op::Add || n.operation == BinaryOp<T>::Op::Multiply) {
					std::vector<NodePtr<T>> s_operands = { s_lhs, s_rhs };
					auto op = (n.operation == BinaryOp<T>::Op::Add) ? NaryOp<T>::Op::Add :
											  NaryOp<T>::Op::Multiply;
					return (op == NaryOp<T>::Op::Add) ? process_addition(s_operands) :
									    process_multiplication(s_operands);
				}

				// Division logic using simplified children
				if (auto const* c_lhs = std::get_if<Constant<T>>(&s_lhs->node_type)) {
					if (c_lhs->value == 0)
						return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 0 });
				}
				if (auto const* c_rhs = std::get_if<Constant<T>>(&s_rhs->node_type)) {
					if (c_rhs->value == 1)
						return s_lhs;
				}
				if (are_trees_identical(s_lhs, s_rhs))
					return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 1 });

				// 3. Rebuild node only if something changed.
				if (s_lhs != n.lhs || s_rhs != n.rhs)
					return std::make_shared<const ExpressionNode<T>>(
						BinaryOp<T>{ n.operation, s_lhs, s_rhs });

			} else if constexpr (std::is_same_v<VT, NaryOp<T>>) {
				// This logic is already correctly bottom-up.
				std::vector<NodePtr<T>> s_operands;
				s_operands.reserve(n.operands.size());
				for (const auto& op : n.operands) {
					s_operands.push_back(simplify_node(op));
				}
				return (n.operation == NaryOp<T>::Op::Add) ? process_addition(s_operands) :
									     process_multiplication(s_operands);
			}
			return node;
		},
		node->node_type);
}

template <typename T>
void ExpressionTree<T>::flatten_operands(NodePtr<T> const& node, typename NaryOp<T>::Op op,
					 std::vector<NodePtr<T>>& operands) const {
	auto const* nary_node = std::get_if<NaryOp<T>>(&node->node_type);
	auto const* bin_node = std::get_if<BinaryOp<T>>(&node->node_type);
	auto matches = [&](auto o) { return o == op; };
	bool is_match =
		(nary_node && matches(nary_node->operation)) ||
		(bin_node && ((op == NaryOp<T>::Op::Add && bin_node->operation == BinaryOp<T>::Op::Add) ||
			      (op == NaryOp<T>::Op::Multiply && bin_node->operation == BinaryOp<T>::Op::Multiply)));
	if (is_match) {
		if (nary_node) {
			for (const auto& child : nary_node->operands)
				flatten_operands(child, op, operands);
		} else {
			flatten_operands(bin_node->lhs, op, operands);
			flatten_operands(bin_node->rhs, op, operands);
		}
	} else {
		// The critical optimization: Do not simplify here.
		// The new bottom-up approach in `simplify_node` ensures that `node` is already simplified.
		operands.push_back(node);
	}
}

template <typename T>
std::pair<T, NodePtr<T>> ExpressionTree<T>::extract_coefficient(NodePtr<T> const& node) const {
	if (auto const* c = std::get_if<Constant<T>>(&node->node_type)) {
		return { c->value, nullptr };
	}
	if (auto const* uop = std::get_if<UnaryOp<T>>(&node->node_type)) {
		if (uop->operation == UnaryOp<T>::Op::Minus) {
			auto [coeff, term] = extract_coefficient(uop->exp);
			return { -coeff, term };
		}
	}
	if (auto const* mop = std::get_if<NaryOp<T>>(&node->node_type)) {
		if (mop->operation == NaryOp<T>::Op::Multiply && !mop->operands.empty()) {
			// --- OPTIMIZATION ---
			// Exploit the canonical form from process_multiplication.
			// The constant term, if it exists and isn't 1, is always first.
			if (auto const* c = std::get_if<Constant<T>>(&mop->operands[0]->node_type)) {
				if (mop->operands.size() == 1) {
					return { c->value, nullptr };
				}
				// Rebuild a node from the remaining terms.
				std::vector<NodePtr<T>> remaining_terms(mop->operands.begin() + 1, mop->operands.end());
				NodePtr<T> term_node =
					(remaining_terms.size() == 1) ?
						remaining_terms[0] :
						std::make_shared<ExpressionNode<T>>(NaryOp<T>{
							NaryOp<T>::Op::Multiply, std::move(remaining_terms) });
				return { c->value, term_node };
			}
		}
	}
	// Default case: coefficient is 1, term is the node itself.
	return { 1, node };
}
template <typename T>
NodePtr<T> ExpressionTree<T>::process_addition(std::vector<NodePtr<T>>& operands_in) const {
	// --- IMPLEMENTATION 1: "SORT AND SWEEP" ---

	std::vector<NodePtr<T>> flat_operands;
	for (const auto& op : operands_in) {
		flatten_operands(op, NaryOp<T>::Op::Add, flat_operands);
	}

	T constant_term = 0;
	// Vector to store the non-constant parts of the expression for sorting.
	std::vector<std::pair<T, NodePtr<T>>> symbolic_terms;

	for (const auto& operand : flat_operands) {
		auto [coeff, term] = extract_coefficient(operand);
		if (term == nullptr) {
			// This is a pure constant term
			constant_term += coeff;
		} else {
			symbolic_terms.push_back({ coeff, term });
		}
	}

	// Sort the symbolic terms based on the expression tree structure.
	// All identical terms (like 'x' or 'sin(y)') will be grouped together.
	std::sort(symbolic_terms.begin(), symbolic_terms.end(),
		  [&](const auto& a, const auto& b) { return compare_nodes(a.second, b.second) < 0; });

	std::vector<NodePtr<T>> new_operands;
	// Sweep through the sorted terms to merge coefficients.
	if (!symbolic_terms.empty()) {
		auto it = symbolic_terms.begin();
		NodePtr<T> current_term = it->second;
		T accumulated_coeff = it->first;

		for (++it; it != symbolic_terms.end(); ++it) {
			if (are_trees_identical(current_term, it->second)) {
				// The term is the same as the previous one, accumulate coefficient.
				accumulated_coeff += it->first;
			} else {
				// A new term has been found. Finalize and store the previous one.
				if (accumulated_coeff != 0) {
					if (accumulated_coeff == 1) {
						new_operands.push_back(current_term);
					} else {
						auto coeff_node = std::make_shared<const ExpressionNode<T>>(
							Constant<T>{ accumulated_coeff });
						std::vector<NodePtr<T>> mul_ops = { coeff_node, current_term };
						new_operands.push_back(process_multiplication(mul_ops));
					}
				}
				// Start the next group.
				current_term = it->second;
				accumulated_coeff = it->first;
			}
		}

		// Don't forget to add the very last accumulated term after the loop finishes.
		if (accumulated_coeff != 0) {
			if (accumulated_coeff == 1) {
				new_operands.push_back(current_term);
			} else {
				auto coeff_node =
					std::make_shared<const ExpressionNode<T>>(Constant<T>{ accumulated_coeff });
				std::vector<NodePtr<T>> mul_ops = { coeff_node, current_term };
				new_operands.push_back(process_multiplication(mul_ops));
			}
		}
	}

	// Add the constant term back if it's non-zero.
	if (constant_term != 0) {
		new_operands.push_back(std::make_shared<const ExpressionNode<T>>(Constant<T>{ constant_term }));
	}

	if (new_operands.empty())
		return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 0 });
	if (new_operands.size() == 1)
		return new_operands[0];

	// Sort final operands for a canonical representation.
	std::sort(new_operands.begin(), new_operands.end(), NodePtrComparator{ this });

	return std::make_shared<const ExpressionNode<T>>(NaryOp<T>{ NaryOp<T>::Op::Add, new_operands });
}
template <typename T>
NodePtr<T> ExpressionTree<T>::process_multiplication(std::vector<NodePtr<T>>& operands_in, bool expand) const {
	// --- MULTIPLICATION REFACTOR ---
	// This function now flattens its own inputs. This is critical for simplifying
	// expressions like `a * (3 * x)` into `3 * a * x`.
	std::vector<NodePtr<T>> flat_operands;
	for (const auto& op : operands_in) {
		flatten_operands(op, NaryOp<T>::Op::Multiply, flat_operands);
	}

	T const_prod = 1;
	flat_operands.erase(std::remove_if(flat_operands.begin(), flat_operands.end(),
					   [&](NodePtr<T>& op) {
						   if (auto const* c = std::get_if<Constant<T>>(&op->node_type)) {
							   const_prod *= c->value;
							   return true;
						   }
						   return false;
					   }),
			    flat_operands.end());

	if (const_prod == 0)
		return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 0 });

	// Conditionally apply the Distributive Law: a * (b + c) -> a*b + a*c
	if (expand) {
		for (size_t i = 0; i < flat_operands.size(); ++i) {
			if (auto add_node = std::get_if<NaryOp<T>>(&flat_operands[i]->node_type);
			    add_node && add_node->operation == NaryOp<T>::Op::Add) {
				std::vector<NodePtr<T>> other_factors;
				if (const_prod != 1)
					other_factors.push_back(
						std::make_shared<const ExpressionNode<T>>(Constant<T>{ const_prod }));
				for (size_t j = 0; j < flat_operands.size(); ++j)
					if (i != j)
						other_factors.push_back(flat_operands[j]);

				// If other_factors is empty, it means we had 1 * (b+c), so the result is just (b+c)
				if (other_factors.empty())
					return flat_operands[i];

				auto a_node = process_multiplication(other_factors, expand);
				std::vector<NodePtr<T>> new_add_terms;
				new_add_terms.reserve(add_node->operands.size());
				for (const auto& term : add_node->operands) {
					std::vector<NodePtr<T>> mul_ops = { a_node, term };
					new_add_terms.push_back(process_multiplication(mul_ops, expand));
				}
				return process_addition(new_add_terms);
			}
		}
	}

	std::sort(flat_operands.begin(), flat_operands.end(),
		  [&](const NodePtr<T>& a, const NodePtr<T>& b) { return compare_nodes(a, b) < 0; });

	if (const_prod != 1) {
		flat_operands.insert(flat_operands.begin(),
				     std::make_shared<const ExpressionNode<T>>(Constant<T>{ const_prod }));
	}

	if (flat_operands.empty())
		return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 1 });
	if (flat_operands.size() == 1)
		return flat_operands[0];

	return std::make_shared<const ExpressionNode<T>>(NaryOp<T>{ NaryOp<T>::Op::Multiply, flat_operands });
}
// --- 6. COMPARISON HELPER IMPLEMENTATIONS ---
template <typename T>
bool ExpressionTree<T>::are_trees_identical(NodePtr<T> const& a, NodePtr<T> const& b) const {
	if (!a && !b)
		return true;
	if (!a || !b)
		return false;
	if (a.get() == b.get())
		return true;
	if (a->node_type.index() != b->node_type.index())
		return false;
	return std::visit(
		[&](auto const& n1) -> bool {
			auto const& n2 = std::get<std::decay_t<decltype(n1)>>(b->node_type);
			using VT = std::decay_t<decltype(n1)>;
			if constexpr (std::is_same_v<VT, Constant<T>>) {
				return n1.value == n2.value;
			} else if constexpr (std::is_same_v<VT, Variable>) {
				return n1.name == n2.name;
			} else if constexpr (std::is_same_v<VT, UnaryOp<T>>) {
				return n1.operation == n2.operation && are_trees_identical(n1.exp, n2.exp);
			} else if constexpr (std::is_same_v<VT, BinaryOp<T>>) {
				return n1.operation == n2.operation && are_trees_identical(n1.lhs, n2.lhs) &&
				       are_trees_identical(n1.rhs, n2.rhs);
			} else if constexpr (std::is_same_v<VT, NaryOp<T>>) {
				if (n1.operation != n2.operation || n1.operands.size() != n2.operands.size())
					return false;
				for (size_t i = 0; i < n1.operands.size(); ++i) {
					if (!are_trees_identical(n1.operands[i], n2.operands[i]))
						return false;
				}
				return true;
			}
			return false;
		},
		a->node_type);
}

template <typename T>
int ExpressionTree<T>::compare_nodes(NodePtr<T> const& a, NodePtr<T> const& b) const {
	if (a.get() == b.get())
		return 0;
	if (a->node_type.index() != b->node_type.index())
		return a->node_type.index() < b->node_type.index() ? -1 : 1;
	return std::visit(
		[&](auto const& n1) -> int {
			auto const& n2 = std::get<std::decay_t<decltype(n1)>>(b->node_type);
			using VT = std::decay_t<decltype(n1)>;
			if constexpr (std::is_same_v<VT, Constant<T>>) {
				return n1.value < n2.value ? -1 : (n1.value > n2.value ? 1 : 0);
			} else if constexpr (std::is_same_v<VT, Variable>) {
				return n1.name.compare(n2.name);
			} else if constexpr (std::is_same_v<VT, UnaryOp<T>>) {
				if (n1.operation != n2.operation)
					return static_cast<int>(n1.operation) < static_cast<int>(n2.operation) ? -1 : 1;
				return compare_nodes(n1.exp, n2.exp);
			} else if constexpr (std::is_same_v<VT, BinaryOp<T>>) {
				if (n1.operation != n2.operation)
					return static_cast<int>(n1.operation) < static_cast<int>(n2.operation) ? -1 : 1;
				if (int cmp = compare_nodes(n1.lhs, n2.lhs); cmp != 0)
					return cmp;
				return compare_nodes(n1.rhs, n2.rhs);
			} else if constexpr (std::is_same_v<VT, NaryOp<T>>) {
				if (n1.operation != n2.operation)
					return static_cast<int>(n1.operation) < static_cast<int>(n2.operation) ? -1 : 1;
				if (n1.operands.size() != n2.operands.size())
					return n1.operands.size() < n2.operands.size() ? -1 : 1;
				for (size_t i = 0; i < n1.operands.size(); ++i) {
					if (int cmp = compare_nodes(n1.operands[i], n2.operands[i]); cmp != 0)
						return cmp;
				}
				return 0;
			}
			return 0;
		},
		a->node_type);
}

// --- 6. FACTORING ENGINE IMPLEMENTATION ---

template <typename T>
std::vector<NodePtr<T>> ExpressionTree<T>::get_multiplicative_factors(NodePtr<T> const& node) const {
	if (auto const* nary = std::get_if<NaryOp<T>>(&node->node_type);
	    nary && nary->operation == NaryOp<T>::Op::Multiply) {
		return nary->operands;
	}
	return { node };
}

template <typename T>
NodePtr<T> ExpressionTree<T>::build_from_factors(const std::vector<NodePtr<T>>& factors) const {
	if (factors.empty()) {
		return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 1 });
	}
	if (factors.size() == 1) {
		return factors[0];
	}
	// The process_multiplication function is perfect for re-combining and re-simplifying factors.
	auto mutable_factors = factors;
	// Call process_multiplication with expansion disabled to build the factored term correctly.
	return process_multiplication(mutable_factors, false);
}

template <typename T>
NodePtr<T> ExpressionTree<T>::factor_addition_node(const NaryOp<T>& add_node) const {
	auto current_operands = add_node.operands;

	while (true) {
		if (current_operands.size() <= 1) {
			break; // Nothing to factor
		}

		std::map<NodePtr<T>, std::vector<NodePtr<T>>, NodePtrComparator> factor_to_terms(
			NodePtrComparator{ this });
		std::map<NodePtr<T>, std::vector<NodePtr<T>>, NodePtrComparator> term_to_factors_cache(
			NodePtrComparator{ this });

		// 1. Deconstruct all terms and map factors to the terms they appear in
		for (const auto& term : current_operands) {
			auto factors = get_multiplicative_factors(term);
			term_to_factors_cache[term] = factors;
			for (const auto& factor : factors) {
				factor_to_terms[factor].push_back(term);
			}
		}

		// 2. Find the best factor to pull out (most common, and appears in > 1 term)
		NodePtr<T> best_factor = nullptr;
		size_t max_count = 1;

		for (const auto& [factor, terms] : factor_to_terms) {
			if (terms.size() > max_count) {
				max_count = terms.size();
				best_factor = factor;
			}
		}

		if (!best_factor) {
			break; // No common factors found, exit loop
		}

		// 3. Partition terms into those with the factor and those without
		std::vector<NodePtr<T>> terms_with_factor;
		std::vector<NodePtr<T>> terms_without_factor;
		for (const auto& term : current_operands) {
			bool has_factor = false;
			for (const auto& factor : term_to_factors_cache.at(term)) {
				if (are_trees_identical(factor, best_factor)) {
					has_factor = true;
					break;
				}
			}
			if (has_factor) {
				terms_with_factor.push_back(term);
			} else {
				terms_without_factor.push_back(term);
			}
		}

		// 4. Build the new factored term: F * (T1/F + T2/F + ...)
		std::vector<NodePtr<T>> inner_sum_operands;
		for (const auto& term : terms_with_factor) {
			auto original_factors = term_to_factors_cache.at(term);
			std::vector<NodePtr<T>> remaining_factors;
			bool removed = false;
			for (const auto& f : original_factors) {
				if (!removed && are_trees_identical(f, best_factor)) {
					removed = true; // Remove only one instance of the factor
				} else {
					remaining_factors.push_back(f);
				}
			}
			inner_sum_operands.push_back(build_from_factors(remaining_factors));
		}

		// The inner sum itself needs to be simplified and factored recursively
		auto inner_sum = process_addition(inner_sum_operands);
		auto factored_inner_sum = factor_node(inner_sum);

		// Rebuild the outer multiplication: BestFactor * FactoredInnerSum
		auto new_factored_term = build_from_factors({ best_factor, factored_inner_sum });

		// 5. Update the list of operands for the next iteration
		current_operands = terms_without_factor;
		current_operands.push_back(new_factored_term);
	}

	// Rebuild and return the final node
	if (current_operands.empty())
		return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 0 });
	if (current_operands.size() == 1)
		return current_operands[0];

	std::sort(current_operands.begin(), current_operands.end(), NodePtrComparator{ this });
	return std::make_shared<const ExpressionNode<T>>(NaryOp<T>{ NaryOp<T>::Op::Add, current_operands });
}

template <typename T>
NodePtr<T> ExpressionTree<T>::factor_node(NodePtr<T> const& node) const {
	if (!node)
		return nullptr;

	return std::visit(
		[&](auto const& n) -> NodePtr<T> {
			using VT = std::remove_cvref_t<decltype(n)>;
			if constexpr (std::is_same_v<VT, Constant<T>> || std::is_same_v<VT, Variable>) {
				return node; // Base case: constants and variables cannot be factored.
			} else if constexpr (std::is_same_v<VT, UnaryOp<T>>) {
				auto factored_exp = factor_node(n.exp);
				if (factored_exp != n.exp)
					return std::make_shared<const ExpressionNode<T>>(
						UnaryOp<T>{ n.operation, factored_exp });
			} else if constexpr (std::is_same_v<VT, BinaryOp<T>>) {
				auto factored_lhs = factor_node(n.lhs);
				auto factored_rhs = factor_node(n.rhs);
				if (factored_lhs != n.lhs || factored_rhs != n.rhs)
					return std::make_shared<const ExpressionNode<T>>(
						BinaryOp<T>{ n.operation, factored_lhs, factored_rhs });
			} else if constexpr (std::is_same_v<VT, NaryOp<T>>) {
				if (n.operation == NaryOp<T>::Op::Add) {
					// This is the main target for factorization
					return factor_addition_node(n);
				} else { // Multiply
					bool changed = false;
					std::vector<NodePtr<T>> factored_ops;
					factored_ops.reserve(n.operands.size());
					for (const auto& op : n.operands) {
						auto factored_op = factor_node(op);
						if (factored_op != op)
							changed = true;
						factored_ops.push_back(factored_op);
					}
					if (changed) {
						// Rebuild to re-simplify/flatten any new structures
						return build_from_factors(factored_ops);
					}
				}
			}
			return node; // Return original node if no changes were made
		},
		node->node_type);
}

#endif // PP_INCLUDE_EXPRESSION_TREE_HPP
