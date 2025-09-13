template <typename T>
ExpressionTree<T> ExpressionTree<T>::substitute(std::unordered_map<std::string, T> const& variables) const {
	if (!root_node)
		return {};
	return ExpressionTree{ substitute_node(root_node, variables) };
}

template <typename T>
NodePtr<T> ExpressionTree<T>::substitute_node(NodePtr<T> const& node, std::unordered_map<std::string, T> const& variables) const {
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
					return std::make_shared<const ExpressionNode<T>>(UnaryOp<T>{ n.operation, std::move(new_exp) });
			} else if constexpr (std::is_same_v<VT, BinaryOp<T>>) {
				auto new_lhs = substitute_node(n.lhs, variables);
				auto new_rhs = substitute_node(n.rhs, variables);
				if (new_lhs != n.lhs || new_rhs != n.rhs)
					return std::make_shared<const ExpressionNode<T>>(
						BinaryOp<T>{ n.operation, std::move(new_lhs), std::move(new_rhs) });
			} else if constexpr (std::is_same_v<VT, NaryOp<T>>) {
				std::vector<NodePtr<T>> new_ops;
				bool changed = false;
				new_ops.reserve(n.operands.size());
				for (const auto& op : n.operands) {
					auto new_op = substitute_node(op, variables);
					if (new_op != op)
						changed = true;
					new_ops.push_back(std::move(new_op));
				}
				if (changed)
					return std::make_shared<const ExpressionNode<T>>(NaryOp<T>{ n.operation, std::move(new_ops) });
			}
			return node;
		},
		node->node_type);
}
