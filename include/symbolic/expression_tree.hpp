#ifndef PP_INCLUDE_EXPRESSION_TREE_HPP
#define PP_INCLUDE_EXPRESSION_TREE_HPP

#include "symbolic/expression_tree/nodes.hpp"

#include "maths.hpp"

#include <algorithm>
#include <cassert>
#include <functional>
#include <iostream>
#include <iterator>
#include <map>
#include <memory>
#include <numeric>
#include <ostream>
#include <stdexcept>
#include <string>
#include <string_view>
#include <type_traits>
#include <unordered_map>
#include <variant>
#include <vector>
#include <format>

template <typename T>
class ExpressionTree {
	NodePtr<T> root_node;

    public:
	ExpressionTree() = default;
	explicit ExpressionTree(NodePtr<T> root) : root_node(std::move(root)) {}
	NodePtr<T> get_root() const { return root_node; }

	T evaluate(std::unordered_map<std::string, T> const& variables = {}) const;
	[[nodiscard]] ExpressionTree simplified() const;
	[[nodiscard]] ExpressionTree substitute(std::unordered_map<std::string, T> const& variables) const;
	[[nodiscard]] ExpressionTree symbolic_evaluate(std::unordered_map<std::string, T> const& variables) const;
	std::string to_string(std::string_view formatter = "{:.3g}") const;
	friend std::ostream& operator<<(std::ostream& os, ExpressionTree const& tree) { return os << tree.to_string(); }

    private:
	T evaluate_node(NodePtr<T> const& node, std::unordered_map<std::string, T> const& variables) const;
	NodePtr<T> substitute_node(NodePtr<T> const& node, std::unordered_map<std::string, T> const& variables) const;
	std::string to_string_node(NodePtr<T> const& node, std::string_view fmt, bool is_root) const;
	bool are_trees_identical(NodePtr<T> const& a, NodePtr<T> const& b) const;
	int compare_nodes(NodePtr<T> const& a, NodePtr<T> const& b) const;

	NodePtr<T> simplify_node(NodePtr<T> const& node) const;
	void flatten_operands(NodePtr<T> const& node, typename NaryOp<T>::Op op,
			      std::vector<NodePtr<T>>& operands) const;
	NodePtr<T> process_addition(std::vector<NodePtr<T>>& operands) const;
	NodePtr<T> process_multiplication(std::vector<NodePtr<T>>& operands, bool expand = true) const;
	std::pair<T, NodePtr<T>> extract_coefficient(NodePtr<T> const& node) const;

	NodePtr<T> factor_node(NodePtr<T> const& node) const;
	NodePtr<T> factor_addition_node(const NaryOp<T>& add_node) const;
	std::vector<NodePtr<T>> get_multiplicative_factors(NodePtr<T> const& node) const;
	NodePtr<T> build_from_factors(const std::vector<NodePtr<T>>& factors) const;

	struct NodePtrComparator {
		const ExpressionTree<T>* tree_instance;
		bool operator()(const NodePtr<T>& a, const NodePtr<T>& b) const {
			return tree_instance->compare_nodes(a, b) < 0;
		}
	};
};

#include "expression_tree/evaluate.inl"
#include "expression_tree/to_string.inl"
#include "expression_tree/compare.inl"
#include "expression_tree/simplify.inl"
#include "expression_tree/factor.inl"
#include "expression_tree/substitute.inl"

#endif // PP_INCLUDE_EXPRESSION_TREE_HPP
