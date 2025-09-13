template <typename T>
void ExpressionTree<T>::flatten_operands(NodePtr<T> const& node, typename NaryOp<T>::Op op,
					 std::vector<NodePtr<T>>& operands) const {
	auto const* nary_node = std::get_if<NaryOp<T>>(&node->node_type);
	if (nary_node && nary_node->operation == op) {
		for (const auto& child : nary_node->operands)
			flatten_operands(child, op, operands);
		return;
	}

	auto const* bin_node = std::get_if<BinaryOp<T>>(&node->node_type);
	if (bin_node && ((op == NaryOp<T>::Op::Add && bin_node->operation == BinaryOp<T>::Op::Add) ||
			 (op == NaryOp<T>::Op::Multiply && bin_node->operation == BinaryOp<T>::Op::Multiply))) {
		flatten_operands(bin_node->lhs, op, operands);
		flatten_operands(bin_node->rhs, op, operands);
		return;
	}

	operands.push_back(node);
}

template <typename T>
std::pair<T, NodePtr<T>> ExpressionTree<T>::extract_coefficient(NodePtr<T> const& node) const {
	if (auto const* c = std::get_if<Constant<T>>(&node->node_type)) {
		return { c->value, nullptr };
	}
	if (auto const* uop = std::get_if<UnaryOp<T>>(&node->node_type)) {
		if (uop->operation == UnaryOp<T>::Op::Minus) {
			auto [coeff, term] = extract_coefficient(uop->exp);
			return { -coeff, std::move(term) };
		}
	}
	if (auto const* mop = std::get_if<NaryOp<T>>(&node->node_type)) {
		if (mop->operation == NaryOp<T>::Op::Multiply && !mop->operands.empty()) {
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
				return { c->value, std::move(term_node) };
			}
		}
	}
	// Default case: coefficient is 1, term is the node itself.
	return { 1, node };
}
