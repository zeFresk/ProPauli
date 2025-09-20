#ifndef PP_INCLUDE_COMPILED_EXPRESSION_HPP
#define PP_INCLUDE_COMPILED_EXPRESSION_HPP

#include "expression_tree/nodes.hpp"
#include "maths.hpp"

#include <map>
#include <stdexcept>
#include <type_traits>
#include <unordered_map>
#include <variant>
#include <vector>

template <typename T>
class ExpressionTree;

template <typename T>
using CompiledConstant = Constant<T>;

struct CompiledVariable {
	std::size_t variable_index;
};

struct CompiledUnaryOp {
	enum class Op { Cos, Sin, Minus, Sqrt } operation;
	std::size_t node_index;
};

struct CompiledBinaryOp {
	enum class Op { Add, Multiply, Substract, Divide } operation;
	std::size_t lhs_index;
	std::size_t rhs_index;
};

template <typename T>
using CompiledNode = std::variant<CompiledConstant<T>, CompiledVariable, CompiledUnaryOp, CompiledBinaryOp>;

template <typename T>
class CompiledExpression {
    private:
	std::vector<CompiledNode<T>> nodes;
	std::vector<std::string> variables_names;

	struct Compiler;

    public:
	CompiledExpression(ExpressionTree<T> const& tree);

	T evaluate(std::unordered_map<std::string, T> const& variables) const {
		if (nodes.size() == 0) {
			return T{ 0 };
		}

		std::vector<T> variables_values;
		variables_values.reserve(variables_names.size());
		for (auto const& name : variables_names) {
			auto it = variables.find(name);
			if (it == variables.end()) {
				throw std::invalid_argument("Unbound variable in compiled expression evaluation: " + name);
			}
			variables_values.push_back(it->second);
		}

		std::vector<T> results(nodes.size()); // temporary register

		for (std::size_t i = 0; i < nodes.size(); ++i) {
			std::visit(
				[&](auto const& node) {
					using n_t = std::decay_t<decltype(node)>;
					if constexpr (std::is_same_v<CompiledConstant<T>, n_t>) {
						results[i] = node.value;
					} else if constexpr (std::is_same_v<CompiledVariable, n_t>) {
						results[i] = variables_values[node.variable_index];
					} else if constexpr (std::is_same_v<CompiledUnaryOp, n_t>) {
						switch (node.operation) {
						case CompiledUnaryOp::Op::Minus:
							results[i] = -results[node.node_index];
							break;
						case CompiledUnaryOp::Op::Sqrt:
							results[i] = sqrt(results[node.node_index]);
							break;
						case CompiledUnaryOp::Op::Cos:
							results[i] = cos(results[node.node_index]);
							break;
						case CompiledUnaryOp::Op::Sin:
							results[i] = sin(results[node.node_index]);
							break;
						}
					} else if constexpr (std::is_same_v<CompiledBinaryOp, n_t>) {
						switch (node.operation) {
						case CompiledBinaryOp::Op::Add:
							results[i] = results[node.lhs_index] + results[node.rhs_index];
							break;
						case CompiledBinaryOp::Op::Multiply:
							results[i] = results[node.lhs_index] * results[node.rhs_index];
							break;
						case CompiledBinaryOp::Op::Substract:
							results[i] = results[node.lhs_index] - results[node.rhs_index];
							break;
						case CompiledBinaryOp::Op::Divide:
							results[i] = results[node.lhs_index] / results[node.rhs_index];
							break;
						}
					}
				},
				nodes[i]);
		}

		return results.back();
	}
};

#endif
