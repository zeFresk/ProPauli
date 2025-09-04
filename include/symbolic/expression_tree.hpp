#ifndef PP_INCLUDE_EXPRESSION_TREE_HPP
#define PP_INCLUDE_EXPRESSION_TREE_HPP

#include "maths.hpp"

#include <algorithm>
#include <cassert>
#include <iterator>
#include <ostream>
#include <stdexcept>
#include <string>
#include <string_view>
#include <type_traits>
#include <unordered_map>
#include <variant>
#include <vector>
#include <format>

template <typename T>
struct ExpressionNode;

using NodeId = std::size_t;

template <typename T>
struct Constant {
	T value;
};

struct BinaryOp {
	enum class Op { Add, Substract, Multiply, Divide };
	Op operation;
	NodeId lhs, rhs;
};

struct UnaryOp {
	enum class Op { Cos, Sin, Minus };
	Op operation;
	NodeId exp;
};

struct Variable {
	std::string name;
};

template <typename T>
using ExpressionNodeType = std::variant<Constant<T>, BinaryOp, UnaryOp, Variable>;

template <typename T>
class ExpressionTree {
	std::vector<ExpressionNodeType<T>> nodes;
	NodeId root_id;

    public:
	template <typename N>
	NodeId add_node(N&& n) {
		nodes.push_back(n);
		return nodes.size() - 1;
	}

	void update_root(NodeId new_root) {
		assert(new_root < nodes.size());
		root_id = new_root;
	}

	NodeId import_nodes(ExpressionTree const& other) {
		auto reindex_offset = nodes.size();
		auto future_root_id = nodes.size() + other.get_root();
		std::copy(other.nodes.begin(), other.nodes.end(), std::back_inserter(nodes));

		// reindex
		auto visitor = [&](auto& node) {
			using VisitedType = std::remove_cvref_t<decltype(node)>;
			if constexpr (std::is_same_v<VisitedType, UnaryOp>) {
				node.exp += reindex_offset;
			} else if constexpr (std::is_same_v<VisitedType, BinaryOp>) {
				node.lhs += reindex_offset;
				node.rhs += reindex_offset;
			}
		};
		std::for_each(nodes.begin() + reindex_offset, nodes.end(),
			      [&](auto& node) { std::visit(visitor, node); });

		return future_root_id;
	}

	NodeId get_root() const { return root_id; }

	T evaluate(std::unordered_map<std::string, T> const& variables = {}) const {
		assert(!nodes.empty());
		return evaluate_node_at(root_id, variables);
	}

	[[nodiscard]] ExpressionTree symbolic_evaluate(std::unordered_map<std::string, T> const& variables) const {
		auto out = *this;
		out.bind_vars(variables);
		return out.simplified();
	}

	[[nodiscard]] ExpressionTree simplified() const {
		assert(!nodes.empty());

		ExpressionTree out_tree;
		NodeId out_root = simplify(root_id, out_tree);
		out_tree.update_root(out_root);
		return out_tree;
	}

	friend std::ostream& operator<<(std::ostream& os, ExpressionTree const& tree) {
		os << tree.to_string();
		return os;
	}

	std::string to_string(std::string_view formatter = "{:.3}") const {
		assert(nodes.size() > 0);
		return to_string(root_id, formatter);
	}

    private:
	T evaluate_node_at(NodeId node_id, std::unordered_map<std::string, T> const& variables) const {
		auto const& node = nodes[node_id];

		auto visitor = [&](auto const& node) -> T {
			using VisitedType = std::remove_cvref_t<decltype(node)>;
			if constexpr (std::is_same_v<VisitedType, Constant<T>>) {
				return node.value;
			} else if constexpr (std::is_same_v<VisitedType, UnaryOp>) {
				auto v = evaluate_node_at(node.exp, variables);
				switch (node.operation) {
				case UnaryOp::Op::Cos:
					return cos(v);
				case UnaryOp::Op::Sin:
					return sin(v);
				case UnaryOp::Op::Minus:
					return -v;
				default:
					throw std::invalid_argument("Invalid UnaryOp.operation");
				}
			} else if constexpr (std::is_same_v<VisitedType, BinaryOp>) {
				auto lhs = evaluate_node_at(node.lhs, variables);
				auto rhs = evaluate_node_at(node.rhs, variables);
				switch (node.operation) {
				case BinaryOp::Op::Add:
					return lhs + rhs;
				case BinaryOp::Op::Substract:
					return lhs - rhs;
				case BinaryOp::Op::Multiply:
					return lhs * rhs;
				case BinaryOp::Op::Divide:
					return lhs / rhs;
				default:
					throw std::invalid_argument("Invalid BinaryOp.operation");
				}
			} else if constexpr (std::is_same_v<VisitedType, Variable>) {
				auto itv = variables.find(node.name);
				if (itv == variables.end()) {
					throw std::invalid_argument(
						"Unbound variable: " + node.name +
						". Use symbolic_evaluate for partial evaluation with unbound variables.");
				}
				return itv->second;
			}
		};

		return std::visit(visitor, node);
	}

	[[nodiscard]] NodeId simplify(NodeId node_id, ExpressionTree& out_tree) const {
		auto const& node = nodes[node_id];

		auto visitor = [&](auto const& node) -> T {
			// TODO: split logic into multiple functions (this is too big...)
			using VisitedType = std::remove_cvref_t<decltype(node)>;
			if constexpr (std::is_same_v<VisitedType, Constant<T>> ||
				      std::is_same_v<VisitedType, Variable>) {
				return out_tree.add_node(node);
			} else if constexpr (std::is_same_v<VisitedType, UnaryOp>) {
				NodeId exp_node = simplify(node.exp, out_tree);
				auto constant = std::get_if<Constant<T>>(&out_tree.nodes[exp_node]);
				if (constant) {
					switch (node.operation) {
					case UnaryOp::Op::Cos:
						return out_tree.add_node(Constant<T>{ cos(constant->value) });
					case UnaryOp::Op::Sin:
						return out_tree.add_node(Constant<T>{ sin(constant->value) });
					case UnaryOp::Op::Minus:
						return out_tree.add_node(Constant<T>{ -constant->value });
					default:
						throw std::invalid_argument("Invalid UnaryOp.operation");
					}
				} else {
					auto inside_unaryop = std::get_if<UnaryOp>(&out_tree.nodes[exp_node]);
					if (inside_unaryop && node.operation == UnaryOp::Op::Minus &&
					    inside_unaryop->operation == UnaryOp::Op::Minus) {
						return inside_unaryop->exp; // -- cancel
					} else {
						return out_tree.add_node(UnaryOp{ node.operation, exp_node });
					}
				}
			} else if constexpr (std::is_same_v<VisitedType, BinaryOp>) {
				auto lhs_id = simplify(node.lhs, out_tree);
				auto rhs_id = simplify(node.rhs, out_tree);
				auto lhs_c = std::get_if<Constant<T>>(&out_tree.nodes[lhs_id]);
				auto rhs_c = std::get_if<Constant<T>>(&out_tree.nodes[rhs_id]);
				// constant simplification
				if (lhs_c && rhs_c) {
					switch (node.operation) {
					case BinaryOp::Op::Add:
						return out_tree.add_node(Constant<T>{ lhs_c->value + rhs_c->value });
					case BinaryOp::Op::Substract:
						return out_tree.add_node(Constant<T>{ lhs_c->value - rhs_c->value });
					case BinaryOp::Op::Multiply:
						return out_tree.add_node(Constant<T>{ lhs_c->value * rhs_c->value });
					case BinaryOp::Op::Divide:
						return out_tree.add_node(Constant<T>{ lhs_c->value / rhs_c->value });
					default:
						throw std::invalid_argument("Invalid BinaryOp.operation");
					}
				}
				// identity detection
				switch (node.operation) {
				case BinaryOp::Op::Add:
				case BinaryOp::Op::Substract:
					if (lhs_c && lhs_c->value == 0) { // 0 + x | 0 - x => x
						return rhs_id;
					}
					if (rhs_c && rhs_c->value == 0) { // x + 0 | x - 0 => x
						return lhs_id;
					}
					break;
				case BinaryOp::Op::Multiply:
					if (lhs_c && lhs_c->value == 1) { // 1 * x => x
						return rhs_id;
					}
					if (rhs_c && rhs_c->value == 1) { // x * 1 => x
						return lhs_id;
					}
					if ((lhs_c && lhs_c->value == 0) || (rhs_c && rhs_c->value == 0)) {
						return out_tree.add_node(Constant<T>{ 0 });
					}
					break;
				case BinaryOp::Op::Divide:
					if (lhs_c && lhs_c->value == 0) { // 0 / x => 0
						return out_tree.add_node(Constant<T>{ 0 });
					}

					if (rhs_c && rhs_c->value == 1) { // x / 1 => x
						return lhs_id;
					}
				}
				// associativity
				if (node.operation == BinaryOp::Op::Add || node.operation == BinaryOp::Op::Multiply) {
					if (!lhs_c && rhs_c) {
						// virtually swap associative operands (constant on the left)
						std::swap(lhs_id, rhs_id);
						std::swap(lhs_c, rhs_c);
					}
					if (lhs_c) {
						auto right_binop = std::get_if<BinaryOp>(&out_tree.nodes[rhs_id]);
						if (right_binop &&
						    right_binop->operation == node.operation) { // + + or * *
							// try simplifying based on content of right binop
							auto right_binop_rhs = std::get_if<Constant<T>>(
								&out_tree.nodes[right_binop->lhs]);
							auto rbrr = right_binop->rhs; // may be invalidated
							if (node.operation == BinaryOp::Op::Add) {
								auto n = out_tree.add_node(Constant<T>{
									right_binop_rhs->value + lhs_c->value });
								return out_tree.add_node(
									BinaryOp{ node.operation, n, rbrr });
							} else if (node.operation == BinaryOp::Op::Multiply) {
								auto n = out_tree.add_node(Constant<T>{
									right_binop_rhs->value * lhs_c->value });
								return out_tree.add_node(
									BinaryOp{ node.operation, n, rbrr });
							}
						}
					}
				}
				// TODO: simplify using arithmetic rules.
				return out_tree.add_node(BinaryOp{ node.operation, lhs_id, rhs_id });
			}
		};

		return std::visit(visitor, node);
	}

	std::string to_string(NodeId node_id, std::string_view fmt) const {
		auto const& node = nodes[node_id];

		auto visitor = [&](auto const& node) {
			using VisitedType = std::remove_cvref_t<decltype(node)>;
			if constexpr (std::is_same_v<VisitedType, Constant<T>>) {
				return std::vformat(fmt, std::make_format_args(node.value));
			} else if constexpr (std::is_same_v<VisitedType, UnaryOp>) {
				auto v = to_string(node.exp, fmt);
				bool need_par = !(v.size() > 0 && v[0] == '(' && v[v.size() - 1] == ')');
				switch (node.operation) {
				case UnaryOp::Op::Cos:
					return need_par ? "cos(" + v + ")" : "cos" + v;
				case UnaryOp::Op::Sin:
					return need_par ? "sin(" + v + ")" : "sin" + v;
				case UnaryOp::Op::Minus:
					return "-" + v;
				default:
					throw std::invalid_argument("Invalid UnaryOp.operation");
				}
			} else if constexpr (std::is_same_v<VisitedType, BinaryOp>) {
				auto lhs = to_string(node.lhs, fmt);
				auto rhs = to_string(node.rhs, fmt);
				std::string ret;
				switch (node.operation) {
				case BinaryOp::Op::Add:
					ret = lhs + " + " + rhs;
					break;
				case BinaryOp::Op::Substract:
					ret = lhs + " - " + rhs;
					break;
				case BinaryOp::Op::Multiply:
					ret = lhs + " * " + rhs;
					break;
				case BinaryOp::Op::Divide:
					ret = lhs + " / " + rhs;
					break;
				default:
					throw std::invalid_argument("Invalid BinaryOp.operation");
				}
				return node_id == get_root() ? ret : ("(" + ret + ")");
			} else if constexpr (std::is_same_v<VisitedType, Variable>) {
				return node.name;
			}
		};

		return std::visit(visitor, node);
	}

	void bind_vars(std::unordered_map<std::string, T> const& variables) {
		for (auto& node : nodes) {
			auto var = std::get_if<Variable>(&node);
			if (var) {
				auto itv = variables.find(var->name);
				if (itv != variables.end()) {
					node = Constant<T>{ itv->second };
				}
			}
		}
	}
};

// need operator+-*/ and .cos / .sin for a wrapper class of ExpressionNode

#endif
