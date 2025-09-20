#include "simplify/helpers.inl"
#include "simplify/multiplication.inl"
#include "simplify/addition.inl"
#include "simplify/division.inl"

template <typename T>
ExpressionTree<T> ExpressionTree<T>::simplified() const {
	if (!root_node)
		return {};
	ExpressionTree current_tree{ *this };
	while (true) {
		ExpressionTree simplified_once{ simplify_node(current_tree.root_node) };
		if (are_trees_identical(current_tree.root_node, simplified_once.root_node)) {
			// After the main simplification loop stabilizes, run the final factoring pass.
			return ExpressionTree{ factor_node(simplified_once.root_node) };
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
						return std::make_shared<const ExpressionNode<T>>(Constant<T>{ cos(c->value) });
					case UnaryOp<T>::Op::Sin:
						return std::make_shared<const ExpressionNode<T>>(Constant<T>{ sin(c->value) });
					case UnaryOp<T>::Op::Minus:
						return std::make_shared<const ExpressionNode<T>>(Constant<T>{ -c->value });
					case UnaryOp<T>::Op::Sqrt:
						return std::make_shared<const ExpressionNode<T>>(Constant<T>{ sqrt(c->value) });
					}
				}
				if (auto const* inner_op = std::get_if<UnaryOp<T>>(&s_exp->node_type)) {
					if (n.operation == UnaryOp<T>::Op::Minus && inner_op->operation == UnaryOp<T>::Op::Minus)
						return inner_op->exp;
				}
				if (s_exp != n.exp)
					return std::make_shared<const ExpressionNode<T>>(UnaryOp<T>{ n.operation, s_exp });
			} else if constexpr (std::is_same_v<VT, BinaryOp<T>>) {
				auto s_lhs = simplify_node(n.lhs);
				auto s_rhs = simplify_node(n.rhs);

				if (n.operation == BinaryOp<T>::Op::Substract) { // canonical form: a - b => a + (-b)
					auto neg_one = std::make_shared<const ExpressionNode<T>>(Constant<T>{ -1 });
					auto neg_rhs = std::make_shared<const ExpressionNode<T>>(
						BinaryOp<T>{ BinaryOp<T>::Op::Multiply, std::move(neg_one), std::move(s_rhs) });
					auto add_node = std::make_shared<const ExpressionNode<T>>(
						BinaryOp<T>{ BinaryOp<T>::Op::Add, s_lhs, std::move(neg_rhs) });
					return simplify_node(add_node);
				}

				// NOTE: faster than if
				switch (n.operation) {
				case BinaryOp<T>::Op::Add: {
					std::vector<NodePtr<T>> s_operands = { s_lhs, s_rhs };
					return process_addition(s_operands);
				}
				case BinaryOp<T>::Op::Multiply: {
					std::vector<NodePtr<T>> s_operands = { s_lhs, s_rhs };
					return process_multiplication(s_operands);
				}
				case BinaryOp<T>::Op::Divide:
					return process_division(s_lhs, s_rhs);
				default:
					break;
				}
			} else if constexpr (std::is_same_v<VT, NaryOp<T>>) {
				std::vector<NodePtr<T>> s_operands;
				s_operands.reserve(n.operands.size());
				for (const auto& op : n.operands) {
					s_operands.push_back(simplify_node(op));
				}
				switch (n.operation) {
				case NaryOp<T>::Op::Add:
					return process_addition(s_operands);
				case NaryOp<T>::Op::Multiply:
					return process_multiplication(s_operands);
				}
			}
			return node;
		},
		node->node_type);
}
