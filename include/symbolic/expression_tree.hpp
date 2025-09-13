#ifndef PP_INCLUDE_EXPRESSION_TREE_HPP
#define PP_INCLUDE_EXPRESSION_TREE_HPP

/**
 * @file expression_tree.hpp
 * @brief Defines the core ExpressionTree class for symbolic computation.
 *
 * This file contains the declaration of the `ExpressionTree` class, which is the
 * underlying data structure for representing and manipulating symbolic expressions.
 * It is used internally by the `SymbolicCoefficient` class.
 */

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

/**
 * @class ExpressionTree
 * @brief A tree-based data structure for representing symbolic expressions.
 * @tparam T The underlying numeric type for constants (e.g., float, double).
 *
 * `ExpressionTree` is the core engine for symbolic manipulation. It represents
 * a mathematical expression as a tree of nodes, where leaf nodes are constants
 * or variables, and internal nodes are operators or functions. This structure
 * allows for recursive operations like evaluation, simplification, and substitution.
 */
template <typename T>
class ExpressionTree {
	NodePtr<T> root_node;

    public:
	/**
	 * @brief Default constructor, creates an empty tree.
	 */
	ExpressionTree() = default;
	/**
	 * @brief Constructs an expression tree from a root node.
	 * @param root A shared pointer to the root node of the tree.
	 */
	explicit ExpressionTree(NodePtr<T> root) : root_node(std::move(root)) {}

	/**
	 * @brief Gets the root node of the expression tree.
	 * @return A shared pointer to the root node.
	 */
	NodePtr<T> get_root() const { return root_node; }

	/**
	 * @brief Evaluates the expression tree to a numeric value.
	 * @param variables A map of variable names to their numeric values.
	 * @return The result of the evaluation.
	 */
	T evaluate(std::unordered_map<std::string, T> const& variables = {}) const;

	/**
	 * @brief Performs algebraic simplification of the expression tree.
	 * @return A new, simplified `ExpressionTree`.
	 */
	[[nodiscard]] ExpressionTree simplified() const;

	/**
	 * @brief Substitutes variables in the tree with constant values.
	 * @param variables A map of variable names to their numeric values.
	 * @return A new `ExpressionTree` with variables replaced by constants.
	 */
	[[nodiscard]] ExpressionTree substitute(std::unordered_map<std::string, T> const& variables) const;

	/**
	 * @brief Symbolically evaluates the tree by substituting variables and simplifying.
	 * @param variables A map of variable names to their numeric values.
	 * @return A new, partially evaluated and simplified `ExpressionTree`.
	 */
	[[nodiscard]] ExpressionTree symbolic_evaluate(std::unordered_map<std::string, T> const& variables) const;

	/**
	 * @brief Converts the expression tree to a string.
	 * @param formatter The format specifier for numeric constants.
	 * @return A string representation of the expression.
	 */
	std::string to_string(std::string_view formatter = "{:.3g}") const;

	friend std::ostream& operator<<(std::ostream& os, ExpressionTree const& tree) { return os << tree.to_string(); }

    private:
	/**
	 * @brief Recursively evaluates a node and its children.
	 */
	T evaluate_node(NodePtr<T> const& node, std::unordered_map<std::string, T> const& variables) const;
	/**
	 * @brief Recursively substitutes variables in a subtree.
	 */
	NodePtr<T> substitute_node(NodePtr<T> const& node, std::unordered_map<std::string, T> const& variables) const;
	/**
	 * @brief Recursively converts a subtree to its string representation.
	 */
	std::string to_string_node(NodePtr<T> const& node, std::string_view fmt, bool is_root) const;
	/**
	 * @brief Checks if two subtrees are structurally and functionally identical.
	 */
	bool are_trees_identical(NodePtr<T> const& a, NodePtr<T> const& b) const;
	/**
	 * @brief Compares two nodes for sorting purposes during simplification.
	 */
	int compare_nodes(NodePtr<T> const& a, NodePtr<T> const& b) const;

	/**
	 * @brief Recursively simplifies a node and its children.
	 */
	NodePtr<T> simplify_node(NodePtr<T> const& node) const;

	/**
	 * @brief Flattens nested associative operations (e.g., (a+b)+c -> a+b+c).
	 */
	void flatten_operands(NodePtr<T> const& node, typename NaryOp<T>::Op op, std::vector<NodePtr<T>>& operands) const;
	/**
	 * @brief Processes a list of addition operands, combining constants and like terms.
	 */
	NodePtr<T> process_addition(std::vector<NodePtr<T>>& operands) const;
	/**
	 * @brief Processes a list of multiplication operands, combining constants and expanding where necessary.
	 */
	NodePtr<T> process_multiplication(std::vector<NodePtr<T>>& operands, bool expand = true) const;
	/**
	 * @brief Extracts a numeric coefficient from a node (e.g., 2*x -> {2, x}).
	 */
	std::pair<T, NodePtr<T>> extract_coefficient(NodePtr<T> const& node) const;

	/**
	 * @brief Factors common terms from an addition node.
	 */
	NodePtr<T> factor_node(NodePtr<T> const& node) const;
	/**
	 * @brief Helper function to factor an n-ary addition node.
	 */
	NodePtr<T> factor_addition_node(const NaryOp<T>& add_node) const;
	/**
	 * @brief Gets the list of factors for a multiplicative node.
	 */
	std::vector<NodePtr<T>> get_multiplicative_factors(NodePtr<T> const& node) const;
	/**
	 * @brief Reconstructs a multiplication node from a list of factors.
	 */
	NodePtr<T> build_from_factors(const std::vector<NodePtr<T>>& factors) const;

	/**
	 * @struct NodePtrComparator
	 * @brief Functor for comparing nodes to establish a canonical order.
	 */
	struct NodePtrComparator {
		const ExpressionTree<T>* tree_instance;
		bool operator()(const NodePtr<T>& a, const NodePtr<T>& b) const { return tree_instance->compare_nodes(a, b) < 0; }
	};
};

#include "expression_tree/evaluate.inl"
#include "expression_tree/to_string.inl"
#include "expression_tree/compare.inl"
#include "expression_tree/simplify.inl"
#include "expression_tree/factor.inl"
#include "expression_tree/substitute.inl"

#endif // PP_INCLUDE_EXPRESSION_TREE_HPP
