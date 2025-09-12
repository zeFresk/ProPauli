template <typename T>
NodePtr<T> ExpressionTree<T>::process_multiplication(std::vector<NodePtr<T>>& operands_in, bool expand) const {
	// --- MULTIPLICATION REFACTOR ---
	// This function now flattens its own inputs. This is critical for simplifying
	// expressions like `a * (3 * x)` into `3 * a * x`.
	std::vector<NodePtr<T>> flat_operands;
	for (const auto& op : operands_in) {
		flatten_operands(op, NaryOp<T>::Op::Multiply, flat_operands);
	}

	T const_prod = 1;
	flat_operands.erase(std::remove_if(flat_operands.begin(), flat_operands.end(),
					   [&](NodePtr<T>& op) {
						   if (auto const* c = std::get_if<Constant<T>>(&op->node_type)) {
							   const_prod *= c->value;
							   return true;
						   }
						   return false;
					   }),
			    flat_operands.end());

	if (const_prod == 0)
		return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 0 });

	// Conditionally apply the Distributive Law: a * (b + c) -> a*b + a*c
	if (expand) {
		for (size_t i = 0; i < flat_operands.size(); ++i) {
			if (auto add_node = std::get_if<NaryOp<T>>(&flat_operands[i]->node_type);
			    add_node && add_node->operation == NaryOp<T>::Op::Add) {
				std::vector<NodePtr<T>> other_factors;
				if (const_prod != 1)
					other_factors.push_back(
						std::make_shared<const ExpressionNode<T>>(Constant<T>{ const_prod }));
				for (size_t j = 0; j < flat_operands.size(); ++j)
					if (i != j)
						other_factors.push_back(flat_operands[j]);

				// If other_factors is empty, it means we had 1 * (b+c), so the result is just (b+c)
				if (other_factors.empty())
					return flat_operands[i];

				auto a_node = process_multiplication(other_factors, expand);
				std::vector<NodePtr<T>> new_add_terms;
				new_add_terms.reserve(add_node->operands.size());
				for (const auto& term : add_node->operands) {
					std::vector<NodePtr<T>> mul_ops = { a_node, term };
					new_add_terms.push_back(process_multiplication(mul_ops, expand));
				}
				return process_addition(new_add_terms);
			}
		}
	}

	std::sort(flat_operands.begin(), flat_operands.end(),
		  [&](const NodePtr<T>& a, const NodePtr<T>& b) { return compare_nodes(a, b) < 0; });

	if (const_prod != 1) {
		flat_operands.insert(flat_operands.begin(),
				     std::make_shared<const ExpressionNode<T>>(Constant<T>{ const_prod }));
	}

	if (flat_operands.empty())
		return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 1 });
	if (flat_operands.size() == 1)
		return flat_operands[0];

	return std::make_shared<const ExpressionNode<T>>(NaryOp<T>{ NaryOp<T>::Op::Multiply, flat_operands });
}
