#ifndef PP_INCLUDE_COMPILER_INL
#define PP_INCLUDE_COMPILER_INL

// --- CRITICAL INCLUDES ---
// These bring in the full definitions of both classes.
#include "symbolic/compiled_expression.hpp"

#include <map> // Needed for the compiler's caches

// --- IMPLEMENTATION OF THE COMPILER HELPER STRUCT ---
template <typename T>
struct CompiledExpression<T>::Compiler {
	CompiledExpression<T>& parent;
	ExpressionTree<T> const& source_tree;

	std::unordered_map<T, std::size_t> constant_cache;
	std::unordered_map<std::string, std::size_t> variable_cache;
	std::map<NodePtr<T>, std::size_t, typename ExpressionTree<T>::NodePtrComparator> memo;

	Compiler(CompiledExpression<T>& p, ExpressionTree<T> const& tree) : parent(p), source_tree(tree), memo({ &source_tree }) {}

	void run() {
		if (auto root = source_tree.get_root()) {
			compile_node(root);
		}
	}

	std::size_t compile_node(NodePtr<T> const& node) {
		// 1. Check CSE cache
		if (auto const it = memo.find(node); it != memo.end()) {
			return it->second;
		}

		// 2. Compile the node (post-order traversal)
		std::size_t new_node_index = std::visit(
			[&](auto const& n) -> std::size_t {
				using VT = std::decay_t<decltype(n)>;

				if constexpr (std::is_same_v<VT, Constant<T>>) {
					if (auto const it = constant_cache.find(n.value); it != constant_cache.end()) {
						return it->second;
					}
					parent.nodes.push_back(CompiledConstant<T>{ n.value });
					auto index = parent.nodes.size() - 1;
					constant_cache[n.value] = index;
					return index;
				} else if constexpr (std::is_same_v<VT, Variable>) {
					if (auto const it = variable_cache.find(n.name); it != variable_cache.end()) {
						return it->second;
					}
					auto var_index = parent.variables_names.size();
					parent.variables_names.push_back(n.name);
					parent.nodes.push_back(CompiledVariable{ var_index });
					auto index = parent.nodes.size() - 1;
					variable_cache[n.name] = index;
					return index;
				} else if constexpr (std::is_same_v<VT, UnaryOp<T>>) {
					auto child_idx = compile_node(n.exp);
					auto op_type = static_cast<typename CompiledUnaryOp::Op>(n.operation);
					parent.nodes.push_back(CompiledUnaryOp{ op_type, child_idx });
					return parent.nodes.size() - 1;
				} else if constexpr (std::is_same_v<VT, BinaryOp<T>>) {
					auto lhs_idx = compile_node(n.lhs);
					auto rhs_idx = compile_node(n.rhs);
					auto op_type = static_cast<typename CompiledBinaryOp::Op>(n.operation);
					parent.nodes.push_back(CompiledBinaryOp{ op_type, lhs_idx, rhs_idx });
					return parent.nodes.size() - 1;
				} else if constexpr (std::is_same_v<VT, NaryOp<T>>) {
					if (n.operands.empty()) {
						// Represent an empty sum as 0, empty product as 1.
						T identity_val = (n.operation == NaryOp<T>::Op::Add) ? T{ 0 } : T{ 1 };
						return compile_node(std::make_shared<const ExpressionNode<T>>(Constant<T>{ identity_val }));
					}
					if (n.operands.size() == 1) {
						return compile_node(n.operands[0]);
					}

					auto op_type = (n.operation == NaryOp<T>::Op::Add) ? CompiledBinaryOp::Op::Add :
											     CompiledBinaryOp::Op::Multiply;

					std::size_t last_op_idx = compile_node(n.operands[0]);
					for (size_t i = 1; i < n.operands.size(); ++i) {
						auto current_rhs_idx = compile_node(n.operands[i]);
						parent.nodes.push_back(CompiledBinaryOp{ op_type, last_op_idx, current_rhs_idx });
						last_op_idx = parent.nodes.size() - 1;
					}
					return last_op_idx;
				}
				// Should not be reached
				throw std::logic_error("Unsupported node type during compilation");
			},
			node->node_type);

		// 3. Cache the result for CSE
		memo[node] = new_node_index;
		return new_node_index;
	}
};

// --- IMPLEMENTATION OF THE CONSTRUCTOR ---
template <typename T>
CompiledExpression<T>::CompiledExpression(ExpressionTree<T> const& tree) {
	Compiler compiler(*this, tree);
	compiler.run();
}

// --- IMPLEMENTATION OF THE COMPILE METHOD ---
template <typename T>
CompiledExpression<T> ExpressionTree<T>::compile() const {
	// This method now simply constructs a CompiledExpression from itself.
	// All the complex logic is encapsulated in the CompiledExpression constructor.
	return CompiledExpression<T>(*this);
}

#endif // PP_INCLUDE_COMPILER_INL
