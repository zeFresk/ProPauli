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
