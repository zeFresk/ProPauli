template <typename T>
NodePtr<T> ExpressionTree<T>::process_addition(std::vector<NodePtr<T>>& operands_in) const {
	// --- IMPLEMENTATION 1: "SORT AND SWEEP" ---

	std::vector<NodePtr<T>> flat_operands;
	for (const auto& op : operands_in) {
		flatten_operands(op, NaryOp<T>::Op::Add, flat_operands);
	}

	T constant_term = 0;
	// Vector to store the non-constant parts of the expression for sorting.
	std::vector<std::pair<T, NodePtr<T>>> symbolic_terms;

	for (const auto& operand : flat_operands) {
		auto [coeff, term] = extract_coefficient(operand);
		if (term == nullptr) {
			// This is a pure constant term
			constant_term += coeff;
		} else {
			symbolic_terms.push_back({ coeff, term });
		}
	}

	// Sort the symbolic terms based on the expression tree structure.
	// All identical terms (like 'x' or 'sin(y)') will be grouped together.
	std::sort(symbolic_terms.begin(), symbolic_terms.end(),
		  [&](const auto& a, const auto& b) { return compare_nodes(a.second, b.second) < 0; });

	std::vector<NodePtr<T>> new_operands;
	// Sweep through the sorted terms to merge coefficients.
	if (!symbolic_terms.empty()) {
		auto it = symbolic_terms.begin();
		NodePtr<T> current_term = it->second;
		T accumulated_coeff = it->first;

		for (++it; it != symbolic_terms.end(); ++it) {
			if (are_trees_identical(current_term, it->second)) {
				// The term is the same as the previous one, accumulate coefficient.
				accumulated_coeff += it->first;
			} else {
				// A new term has been found. Finalize and store the previous one.
				if (accumulated_coeff != 0) {
					if (accumulated_coeff == 1) {
						new_operands.push_back(current_term);
					} else {
						auto coeff_node = std::make_shared<const ExpressionNode<T>>(
							Constant<T>{ accumulated_coeff });
						std::vector<NodePtr<T>> mul_ops = { coeff_node, current_term };
						new_operands.push_back(process_multiplication(mul_ops));
					}
				}
				// Start the next group.
				current_term = it->second;
				accumulated_coeff = it->first;
			}
		}

		// Don't forget to add the very last accumulated term after the loop finishes.
		if (accumulated_coeff != 0) {
			if (accumulated_coeff == 1) {
				new_operands.push_back(current_term);
			} else {
				auto coeff_node =
					std::make_shared<const ExpressionNode<T>>(Constant<T>{ accumulated_coeff });
				std::vector<NodePtr<T>> mul_ops = { coeff_node, current_term };
				new_operands.push_back(process_multiplication(mul_ops));
			}
		}
	}

	// Add the constant term back if it's non-zero.
	if (constant_term != 0) {
		new_operands.push_back(std::make_shared<const ExpressionNode<T>>(Constant<T>{ constant_term }));
	}

	if (new_operands.empty())
		return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 0 });
	if (new_operands.size() == 1)
		return new_operands[0];

	// Sort final operands for a canonical representation.
	std::sort(new_operands.begin(), new_operands.end(), NodePtrComparator{ this });

	return std::make_shared<const ExpressionNode<T>>(NaryOp<T>{ NaryOp<T>::Op::Add, new_operands });
}
