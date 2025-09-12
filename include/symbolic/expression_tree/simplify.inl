#include "simplify/helpers.inl"
#include "simplify/multiplication.inl"
#include "simplify/addition.inl"

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
