template <typename T>
T ExpressionTree<T>::evaluate(std::unordered_map<std::string, T> const& variables) const {
	if (!root_node)
		return T{};
	return evaluate_node(root_node, variables);
}

template <typename T>
ExpressionTree<T> ExpressionTree<T>::symbolic_evaluate(std::unordered_map<std::string, T> const& variables) const {
	return substitute(variables).simplified();
}

template <typename T>
T ExpressionTree<T>::evaluate_node(NodePtr<T> const& node, std::unordered_map<std::string, T> const& variables) const {
	return std::visit(
		[&](auto const& n) -> T {
			using VisitedType = std::remove_cvref_t<decltype(n)>;
			if constexpr (std::is_same_v<VisitedType, Constant<T>>) {
				return n.value;
			} else if constexpr (std::is_same_v<VisitedType, Variable>) {
				auto it = variables.find(n.name);
				if (it == variables.end())
					throw std::invalid_argument("Unbound variable: " + n.name);
				return it->second;
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
				case BinaryOp<T>::Op::Multiply:
					return lhs_v * rhs_v;
				case BinaryOp<T>::Op::Substract:
					return lhs_v - rhs_v;
				case BinaryOp<T>::Op::Divide:
					return lhs_v / rhs_v;
				}
			} else if constexpr (std::is_same_v<VisitedType, NaryOp<T>>) {
				if (n.operation == NaryOp<T>::Op::Add) {
					return std::accumulate(n.operands.begin(), n.operands.end(), T{},
							       [&](T acc, const NodePtr<T>& op) {
								       return acc + evaluate_node(op, variables);
							       });
				} else {
					return std::accumulate(n.operands.begin(), n.operands.end(), T{ 1 },
							       [&](T acc, const NodePtr<T>& op) {
								       return acc * evaluate_node(op, variables);
							       });
				}
			}
			throw std::logic_error("Unhandled node type in evaluate");
		},
		node->node_type);
}
