#include "scheduler.hpp"
template <typename T>
NodePtr<T> ExpressionTree<T>::process_division(NodePtr<T>& s_lhs, NodePtr<T>& s_rhs) const {
	// NOTE: + - * already handled, this can only be a division!
	auto const* c_lhs = std::get_if<Constant<T>>(&s_lhs->node_type);
	auto const* c_rhs = std::get_if<Constant<T>>(&s_rhs->node_type);
	if (c_lhs && c_rhs) { // constant folding
		return std::make_shared<const ExpressionNode<T>>(Constant<T>{ c_lhs->value / c_rhs->value });
	} else if (c_lhs && c_lhs->value == 0) {
		return s_lhs;
	} else if (c_rhs && c_rhs->value == 1) {
		return s_lhs;
	}

	if (are_trees_identical(s_lhs, s_rhs))
		return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 1 });

	return std::make_shared<const ExpressionNode<T>>(BinaryOp<T>{ BinaryOp<T>::Op::Divide, s_lhs, s_rhs });
}
