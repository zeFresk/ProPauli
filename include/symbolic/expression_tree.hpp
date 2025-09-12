#ifndef PP_INCLUDE_EXPRESSION_TREE_HPP
#define PP_INCLUDE_EXPRESSION_TREE_HPP

#include "maths.hpp"

#include <algorithm>
#include <cassert>
#include <iterator>
#include <memory>
#include <ostream>
#include <stdexcept>
#include <string>
#include <string_view>
#include <type_traits>
#include <unordered_map>
#include <variant>
#include <format>

// Forward declarations
template <typename T>
struct ExpressionNode;

template <typename T>
using NodePtr = std::shared_ptr<const ExpressionNode<T>>;

template <typename T>
struct Constant {
	T value;
};

template <typename T>
struct BinaryOp {
	enum class Op { Add, Substract, Multiply, Divide };
	Op operation;
	NodePtr<T> lhs, rhs;
};

template <typename T>
struct UnaryOp {
	enum class Op { Cos, Sin, Minus, Sqrt };
	Op operation;
	NodePtr<T> exp;
};

struct Variable {
	std::string name;
};

template <typename T>
using ExpressionNodeType = std::variant<Constant<T>, BinaryOp<T>, UnaryOp<T>, Variable>;

template <typename T>
struct ExpressionNode {
	ExpressionNodeType<T> node_type;

	template <typename NodeType>
	ExpressionNode(NodeType&& nt) : node_type(std::forward<NodeType>(nt)) {}
};

template <typename T>
class ExpressionTree {
	NodePtr<T> root_node;

    public:
	ExpressionTree() = default;
	explicit ExpressionTree(NodePtr<T> root) : root_node(std::move(root)) {}

	NodePtr<T> get_root() const { return root_node; }

	T evaluate(std::unordered_map<std::string, T> const& variables = {}) const {
		assert(root_node != nullptr);
		return evaluate_node(root_node, variables);
	}

	[[nodiscard]] ExpressionTree symbolic_evaluate(std::unordered_map<std::string, T> const& variables) const {
		return ExpressionTree(substitute(root_node, variables)).simplified();
	}

	[[nodiscard]] ExpressionTree simplified() const {
		assert(root_node != nullptr);
		return ExpressionTree(simplify(root_node));
	}

	friend std::ostream& operator<<(std::ostream& os, ExpressionTree const& tree) {
		os << tree.to_string();
		return os;
	}

	std::string to_string(std::string_view formatter = "{:g}") const {
		if (!root_node)
			return "";
		return to_string_node(root_node, formatter, true);
	}

    private:
	T evaluate_node(NodePtr<T> const& node, std::unordered_map<std::string, T> const& variables) const {
		auto visitor = [&](auto const& n) -> T {
			using VisitedType = std::remove_cvref_t<decltype(n)>;
			if constexpr (std::is_same_v<VisitedType, Constant<T>>) {
				return n.value;
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
				case BinaryOp<T>::Op::Substract:
					return lhs_v - rhs_v;
				case BinaryOp<T>::Op::Multiply:
					return lhs_v * rhs_v;
				case BinaryOp<T>::Op::Divide:
					return lhs_v / rhs_v;
				}
			} else if constexpr (std::is_same_v<VisitedType, Variable>) {
				auto itv = variables.find(n.name);
				if (itv == variables.end()) {
					throw std::invalid_argument(
						"Unbound variable: " + n.name +
						". Use symbolic_evaluate for partial evaluation with unbound variables.");
				}
				return itv->second;
			}
			throw std::logic_error("Unhandled node type in evaluate");
		};

		return std::visit(visitor, node->node_type);
	}

	[[nodiscard]] NodePtr<T> substitute(NodePtr<T> const& node,
					    std::unordered_map<std::string, T> const& variables) const {
		if (!node)
			return nullptr;

		auto const& var = std::get_if<Variable>(&node->node_type);
		if (var) {
			auto it = variables.find(var->name);
			if (it != variables.end()) {
				return std::make_shared<const ExpressionNode<T>>(Constant<T>{ it->second });
			}
		}

		// Recursively substitute children
		auto visitor = [&](auto const& n) -> NodePtr<T> {
			using VisitedType = std::remove_cvref_t<decltype(n)>;
			if constexpr (std::is_same_v<VisitedType, UnaryOp<T>>) {
				auto new_exp = substitute(n.exp, variables);
				if (new_exp != n.exp) { // If child changed, create a new node
					return std::make_shared<const ExpressionNode<T>>(
						UnaryOp<T>{ n.operation, new_exp });
				}
			} else if constexpr (std::is_same_v<VisitedType, BinaryOp<T>>) {
				auto new_lhs = substitute(n.lhs, variables);
				auto new_rhs = substitute(n.rhs, variables);
				if (new_lhs != n.lhs || new_rhs != n.rhs) { // If any child changed
					return std::make_shared<const ExpressionNode<T>>(
						BinaryOp<T>{ n.operation, new_lhs, new_rhs });
				}
			}
			// For Constant and un-substituted Variable, return original shared_ptr
			return node;
		};

		return std::visit(visitor, node->node_type);
	}

	[[nodiscard]] NodePtr<T> simplify(NodePtr<T> const& node) const {
		auto visitor = [&](auto const& n) -> NodePtr<T> {
			using VisitedType = std::remove_cvref_t<decltype(n)>;

			if constexpr (std::is_same_v<VisitedType, Constant<T>> ||
				      std::is_same_v<VisitedType, Variable>) {
				return node;
			}

			else if constexpr (std::is_same_v<VisitedType, UnaryOp<T>>) {
				auto simplified_exp = simplify(n.exp);

				if (auto const* c = std::get_if<Constant<T>>(&simplified_exp->node_type)) {
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
				if (auto const* inner_op = std::get_if<UnaryOp<T>>(&simplified_exp->node_type)) {
					if (n.operation == UnaryOp<T>::Op::Minus &&
					    inner_op->operation == UnaryOp<T>::Op::Minus) {
						return inner_op->exp;
					}
				}

				if (simplified_exp != n.exp) {
					return std::make_shared<const ExpressionNode<T>>(
						UnaryOp<T>{ n.operation, simplified_exp });
				}

			} else if constexpr (std::is_same_v<VisitedType, BinaryOp<T>>) {
				auto simplified_lhs = simplify(n.lhs);
				auto simplified_rhs = simplify(n.rhs);

				// **FIX**: For commutative ops, move constants to the left to simplify pattern matching
				if ((n.operation == BinaryOp<T>::Op::Add || n.operation == BinaryOp<T>::Op::Multiply) &&
				    !std::get_if<Constant<T>>(&simplified_lhs->node_type) &&
				    std::get_if<Constant<T>>(&simplified_rhs->node_type)) {
					std::swap(simplified_lhs, simplified_rhs);
				}

				auto const* lhs_c = std::get_if<Constant<T>>(&simplified_lhs->node_type);
				auto const* rhs_c = std::get_if<Constant<T>>(&simplified_rhs->node_type);

				if (lhs_c && rhs_c) {
					switch (n.operation) {
					case BinaryOp<T>::Op::Add:
						return std::make_shared<const ExpressionNode<T>>(
							Constant<T>{ lhs_c->value + rhs_c->value });
					case BinaryOp<T>::Op::Substract:
						return std::make_shared<const ExpressionNode<T>>(
							Constant<T>{ lhs_c->value - rhs_c->value });
					case BinaryOp<T>::Op::Multiply:
						return std::make_shared<const ExpressionNode<T>>(
							Constant<T>{ lhs_c->value * rhs_c->value });
					case BinaryOp<T>::Op::Divide:
						return std::make_shared<const ExpressionNode<T>>(
							Constant<T>{ lhs_c->value / rhs_c->value });
					}
				}

				switch (n.operation) {
				case BinaryOp<T>::Op::Add:
					if (lhs_c && lhs_c->value == 0)
						return simplified_rhs;
					if (rhs_c && rhs_c->value == 0)
						return simplified_lhs;
					break;
				case BinaryOp<T>::Op::Substract:
					if (rhs_c && rhs_c->value == 0)
						return simplified_lhs;
					break;
				case BinaryOp<T>::Op::Multiply:
					if (lhs_c && lhs_c->value == 1)
						return simplified_rhs;
					if (rhs_c && rhs_c->value == 1)
						return simplified_lhs;
					if ((lhs_c && lhs_c->value == 0) || (rhs_c && rhs_c->value == 0))
						return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 0 });
					break;
				case BinaryOp<T>::Op::Divide:
					if (lhs_c && lhs_c->value == 0)
						return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 0 });
					if (rhs_c && rhs_c->value == 1)
						return simplified_lhs;
					break;
				}

				// **FIX**: Associativity rules: C1 op (C2 op X) => (C1 op C2) op X
				if (lhs_c &&
				    (n.operation == BinaryOp<T>::Op::Add || n.operation == BinaryOp<T>::Op::Multiply)) {
					if (auto const* rhs_op = std::get_if<BinaryOp<T>>(&simplified_rhs->node_type)) {
						if (rhs_op->operation == n.operation) {
							if (auto const* rhs_lhs_c =
								    std::get_if<Constant<T>>(&rhs_op->lhs->node_type)) {
								T new_const_val =
									(n.operation == BinaryOp<T>::Op::Add) ?
										(lhs_c->value + rhs_lhs_c->value) :
										(lhs_c->value * rhs_lhs_c->value);

								auto new_const_node =
									std::make_shared<const ExpressionNode<T>>(
										Constant<T>{ new_const_val });
								auto new_op_node =
									std::make_shared<const ExpressionNode<T>>(
										BinaryOp<T>{ n.operation,
											     new_const_node,
											     rhs_op->rhs });
								return simplify(
									new_op_node); // Recursively simplify the new structure
							}
						}
					}
				}

				if (simplified_lhs != n.lhs || simplified_rhs != n.rhs) {
					return std::make_shared<const ExpressionNode<T>>(
						BinaryOp<T>{ n.operation, simplified_lhs, simplified_rhs });
				}
			}

			return node;
		};

		return std::visit(visitor, node->node_type);
	}
	std::string to_string_node(NodePtr<T> const& node, std::string_view fmt, bool is_root) const {
		auto visitor = [&](auto const& n) -> std::string {
			using VisitedType = std::remove_cvref_t<decltype(n)>;
			if constexpr (std::is_same_v<VisitedType, Constant<T>>) {
				return std::vformat(fmt, std::make_format_args(n.value));
			} else if constexpr (std::is_same_v<VisitedType, UnaryOp<T>>) {
				// Passing 'true' for is_root to the recursive call for cos, sin, and sqrt
				// prevents unnecessary parentheses around their arguments.
				bool treat_child_as_root = (n.operation != UnaryOp<T>::Op::Minus);
				auto v_str = to_string_node(n.exp, fmt, treat_child_as_root);
				switch (n.operation) {
				case UnaryOp<T>::Op::Cos:
					return "cos(" + v_str + ")";
				case UnaryOp<T>::Op::Sin:
					return "sin(" + v_str + ")";
				case UnaryOp<T>::Op::Minus:
					return (std::get_if<Constant<T>>(&n.exp->node_type) ||
						std::get_if<Variable>(&n.exp->node_type)) ?
						       "-" + v_str :
						       "-(" + v_str +
							       ")"; // Keep parens for Minus for correctness, e.g., -(a+b)
				case UnaryOp<T>::Op::Sqrt:
					return "sqrt(" + v_str + ")";
				}
			} else if constexpr (std::is_same_v<VisitedType, BinaryOp<T>>) {
				auto lhs_str = to_string_node(n.lhs, fmt, false);
				auto rhs_str = to_string_node(n.rhs, fmt, false);
				std::string ret;
				switch (n.operation) {
				case BinaryOp<T>::Op::Add:
					ret = lhs_str + " + " + rhs_str;
					break;
				case BinaryOp<T>::Op::Substract:
					ret = lhs_str + " - " + rhs_str;
					break;
				case BinaryOp<T>::Op::Multiply:
					ret = lhs_str + " * " + rhs_str;
					break;
				case BinaryOp<T>::Op::Divide:
					ret = lhs_str + " / " + rhs_str;
					break;
				}
				return is_root ? ret : ("(" + ret + ")");
			} else if constexpr (std::is_same_v<VisitedType, Variable>) {
				return n.name;
			}
			throw std::logic_error("Unhandled node type in to_string");
		};

		return std::visit(visitor, node->node_type);
	}
};

#endif
