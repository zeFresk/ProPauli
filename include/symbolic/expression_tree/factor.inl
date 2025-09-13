#include <unordered_set>

template <typename T>
std::vector<NodePtr<T>> ExpressionTree<T>::get_multiplicative_factors(NodePtr<T> const& node) const {
	if (auto const* nary = std::get_if<NaryOp<T>>(&node->node_type); nary && nary->operation == NaryOp<T>::Op::Multiply) {
		return nary->operands;
	}
	return { node };
}

template <typename T>
NodePtr<T> ExpressionTree<T>::build_from_factors(const std::vector<NodePtr<T>>& factors) const {
	if (factors.empty()) {
		return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 1 });
	}
	if (factors.size() == 1) {
		return factors[0];
	}
	// The process_multiplication function is perfect for re-combining and re-simplifying factors.
	auto mutable_factors = factors;
	// Call process_multiplication with expansion disabled to build the factored term correctly.
	return process_multiplication(mutable_factors, false);
}

template <typename T>
NodePtr<T> ExpressionTree<T>::factor_addition_node(const NaryOp<T>& add_node) const {
	auto current_operands = add_node.operands;

	// The factor cache is fine, as it prevents re-calculating factors for terms
	// that survive an iteration.
	std::map<NodePtr<T>, std::vector<NodePtr<T>>, NodePtrComparator> term_to_factors_cache(NodePtrComparator{ this });
	for (const auto& term : current_operands) {
		term_to_factors_cache[term] = get_multiplicative_factors(term);
	}

	while (true) {
		if (current_operands.size() <= 1) {
			break;
		}

		// 1. Populate the map quickly, allowing duplicate terms in the vectors.
		std::map<NodePtr<T>, std::vector<NodePtr<T>>, NodePtrComparator> factor_to_terms(NodePtrComparator{ this });
		for (const auto& term : current_operands) {
			for (const auto& factor : term_to_factors_cache.at(term)) {
				factor_to_terms[factor].push_back(term);
			}
		}

		// ==================== SOLUTION 3: POST-DEDUPLICATION START ====================
		// 2. Clean up the vectors in a single batch pass to remove duplicates.
		for (auto& pair : factor_to_terms) {
			auto& terms_vec = pair.second;
			// Optimization: no need to unique a vector of size 0 or 1.
			if (terms_vec.size() > 1) {
				std::sort(terms_vec.begin(), terms_vec.end(), NodePtrComparator{ this });
				terms_vec.erase(
					std::unique(terms_vec.begin(), terms_vec.end(),
						    [this](const NodePtr<T>& a, const NodePtr<T>& b) { return are_trees_identical(a, b); }),
					terms_vec.end());
			}
		}
		// ===================== SOLUTION 3: POST-DEDUPLICATION END =====================

		NodePtr<T> best_factor = nullptr;
		size_t max_count = 1;
		std::vector<NodePtr<T>> terms_with_best_factor;

		for (const auto& [factor, terms] : factor_to_terms) {
			if (terms.size() > max_count) {
				max_count = terms.size();
				best_factor = factor;
				terms_with_best_factor = terms; // Keep the vector of terms
			}
		}

		if (!best_factor) {
			break; // No common factor found
		}

		// ==================== OPTIMIZATION BLOCK START ====================
		// The original O(N*logM) partitioning is replaced with this O(N) version.

		// Create a hash set for O(1) average-time lookups.
		std::unordered_set<NodePtr<T>> terms_with_factor_set(terms_with_best_factor.begin(), terms_with_best_factor.end());

		std::vector<NodePtr<T>> terms_without_factor;
		terms_without_factor.reserve(current_operands.size() - terms_with_best_factor.size());

		for (const auto& term : current_operands) {
			// Check for membership in O(1) instead of O(log M)
			if (terms_with_factor_set.count(term) == 0) {
				terms_without_factor.push_back(term);
			}
		}
		// ===================== OPTIMIZATION BLOCK END =====================

		std::vector<NodePtr<T>> inner_sum_operands;
		inner_sum_operands.reserve(terms_with_best_factor.size());
		for (const auto& term : terms_with_best_factor) {
			auto original_factors = term_to_factors_cache.at(term);
			std::vector<NodePtr<T>> remaining_factors;
			remaining_factors.reserve(original_factors.size() > 0 ? original_factors.size() - 1 : 0);

			// Using the original, CORRECT logic with structural comparison
			bool removed = false;
			for (const auto& f : original_factors) {
				if (!removed && are_trees_identical(f, best_factor)) {
					removed = true;
				} else {
					remaining_factors.push_back(f);
				}
			}
			inner_sum_operands.push_back(build_from_factors(remaining_factors));
		}

		auto inner_sum = process_addition(inner_sum_operands);
		auto factored_inner_sum = factor_node(inner_sum);
		auto new_factored_term = build_from_factors({ best_factor, factored_inner_sum });

		// Update state for the next iteration
		current_operands = std::move(terms_without_factor);
		current_operands.push_back(new_factored_term);

		for (const auto& term : terms_with_best_factor) {
			term_to_factors_cache.erase(term);
		}
		term_to_factors_cache[new_factored_term] = get_multiplicative_factors(new_factored_term);
	}

	if (current_operands.empty())
		return std::make_shared<const ExpressionNode<T>>(Constant<T>{ 0 });
	if (current_operands.size() == 1)
		return current_operands[0];

	std::sort(current_operands.begin(), current_operands.end(), NodePtrComparator{ this });
	return std::make_shared<const ExpressionNode<T>>(NaryOp<T>{ NaryOp<T>::Op::Add, std::move(current_operands) });
}

template <typename T>
NodePtr<T> ExpressionTree<T>::factor_node(NodePtr<T> const& node) const {
	if (!node)
		return nullptr;

	return std::visit(
		[&](auto const& n) -> NodePtr<T> {
			using VT = std::remove_cvref_t<decltype(n)>;
			if constexpr (std::is_same_v<VT, Constant<T>> || std::is_same_v<VT, Variable>) {
				return node; // Base case: constants and variables cannot be factored.
			} else if constexpr (std::is_same_v<VT, UnaryOp<T>>) {
				auto factored_exp = factor_node(n.exp);
				if (factored_exp != n.exp)
					return std::make_shared<const ExpressionNode<T>>(UnaryOp<T>{ n.operation, factored_exp });
			} else if constexpr (std::is_same_v<VT, BinaryOp<T>>) {
				auto factored_lhs = factor_node(n.lhs);
				auto factored_rhs = factor_node(n.rhs);
				if (factored_lhs != n.lhs || factored_rhs != n.rhs)
					return std::make_shared<const ExpressionNode<T>>(
						BinaryOp<T>{ n.operation, factored_lhs, factored_rhs });
			} else if constexpr (std::is_same_v<VT, NaryOp<T>>) {
				if (n.operation == NaryOp<T>::Op::Add) {
					// This is the main target for factorization
					return factor_addition_node(n);
				} else { // Multiply
					bool changed = false;
					std::vector<NodePtr<T>> factored_ops;
					factored_ops.reserve(n.operands.size());
					for (const auto& op : n.operands) {
						auto factored_op = factor_node(op);
						if (factored_op != op)
							changed = true;
						factored_ops.push_back(factored_op);
					}
					if (changed) {
						// Rebuild to re-simplify/flatten any new structures
						return build_from_factors(factored_ops);
					}
				}
			}
			return node; // Return original node if no changes were made
		},
		node->node_type);
}
