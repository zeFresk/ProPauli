#ifndef PP_INCLUDE_SYMBOLIC_COEFFICIENT_HPP
#define PP_INCLUDE_SYMBOLIC_COEFFICIENT_HPP

/**
 * @file coefficient.hpp
 * @brief Provides the user-facing SymbolicCoefficient class for symbolic computation.
 *
 * This file defines the `SymbolicCoefficient` class, which serves as a wrapper
 * around an `ExpressionTree`. It allows for the creation and manipulation of
 * symbolic expressions involving constants, variables, and mathematical operations.
 */

#include "symbolic/expression_tree.hpp"
#include <ostream>

/**
 * @class SymbolicCoefficient
 * @brief Represents a symbolic expression that can be manipulated and evaluated.
 * @tparam T The underlying numeric type for constants (e.g., float, double).
 *
 * This class provides a high-level interface for symbolic mathematics. It can
 * represent simple constants, variables, or complex expressions composed of
 * arithmetic and mathematical functions. Operations on `SymbolicCoefficient`
 * objects build up an internal `ExpressionTree`, which can then be evaluated,
 * simplified, or converted to a string.
 *
 * @snippet tests/snippets/symbolic.cpp symbolic_creation
 * @snippet tests/snippets/symbolic.cpp symbolic_operations
 * @snippet tests/snippets/symbolic.cpp symbolic_evaluation
 */
template <typename T>
class SymbolicCoefficient {
	ExpressionTree<T> et;

	// Private constructor for internal use by friends and operators
	SymbolicCoefficient(ExpressionTree<T> tree) : et(std::move(tree)) {}

    public:
	/**
	 * @brief Constructs a symbolic coefficient from a constant value.
	 * @param v The constant value.
	 */
	SymbolicCoefficient(T const v) : et(ExpressionTree<T>(std::make_shared<const ExpressionNode<T>>(Constant<T>{ v }))) {}

	/**
	 * @brief Constructs a symbolic coefficient from a variable.
	 * @param var The variable identifier.
	 */
	SymbolicCoefficient(Variable const& var) : et(ExpressionTree<T>(std::make_shared<const ExpressionNode<T>>(var))) {}

	SymbolicCoefficient(SymbolicCoefficient const&) = default;
	SymbolicCoefficient& operator=(SymbolicCoefficient const&) = default;
	SymbolicCoefficient(SymbolicCoefficient&&) = default;
	SymbolicCoefficient& operator=(SymbolicCoefficient&&) = default;

	/**
	 * @brief Type alias for the underlying numeric type.
	 */
	using Underlying_t = T;

	/**
	 * @brief Converts the symbolic expression to a string representation.
	 * @param format_string The format specifier for numeric constants.
	 * @return A string representing the expression.
	 */
	std::string to_string(std::string_view format_string = "{:.3g}") const { return et.to_string(format_string); }

	/**
	 * @brief Evaluates the expression numerically.
	 * @param variables A map of variable names to their numeric values.
	 * @return The numeric result of the evaluation.
	 * @throws std::runtime_error If a variable in the expression is not in the map.
	 */
	T evaluate(std::unordered_map<std::string, T> const& variables = {}) const { return et.evaluate(variables); }

	/**
	 * @brief Substitutes variables with constant values, returning a new expression.
	 * @param variables A map of variable names to substitute with numeric values.
	 * @return A new `SymbolicCoefficient` with the specified variables replaced.
	 */
	[[nodiscard]] SymbolicCoefficient substitute(std::unordered_map<std::string, T> const& variables) const {
		return SymbolicCoefficient(et.substitute(variables));
	}

	/**
	 * @brief Partially evaluates the expression by substituting variables and simplifying.
	 * @param variables A map of variable names to their numeric values.
	 * @return A new, potentially simplified, `SymbolicCoefficient`.
	 */
	[[nodiscard]] SymbolicCoefficient symbolic_evaluate(std::unordered_map<std::string, T> const& variables) const {
		return SymbolicCoefficient(et.symbolic_evaluate(variables));
	}

	/**
	 * @brief Simplifies the symbolic expression.
	 * @return A new `SymbolicCoefficient` representing the simplified expression.
	 */
	[[nodiscard]] SymbolicCoefficient simplified() const { return SymbolicCoefficient(et.simplified()); }

	/**
	 * @brief In-place multiplication by a scalar.
	 */
	SymbolicCoefficient& operator*=(T v) {
		if (v == T{ 1 }) {
			return *this;
		} else if (v == T{ -1 }) {
			*this = -*this;
			return *this;
		} else {
			return *this *= SymbolicCoefficient{ v };
		}
	}

	/**
	 * @brief In-place multiplication by another symbolic coefficient.
	 */
	SymbolicCoefficient& operator*=(SymbolicCoefficient const& v) {
		auto new_root =
			std::make_shared<const ExpressionNode<T>>(BinaryOp<T>{ BinaryOp<T>::Op::Multiply, et.get_root(), v.et.get_root() });
		et = ExpressionTree<T>(new_root);
		return *this;
	}

	/**
	 * @brief In-place addition of another symbolic coefficient.
	 */
	SymbolicCoefficient& operator+=(SymbolicCoefficient const& v) {
		auto new_root =
			std::make_shared<const ExpressionNode<T>>(BinaryOp<T>{ BinaryOp<T>::Op::Add, et.get_root(), v.et.get_root() });
		et = ExpressionTree<T>(new_root);
		return *this;
	}

	/**
	 * @brief In-place division by another symbolic coefficient.
	 */
	SymbolicCoefficient& operator/=(SymbolicCoefficient const& v) {
		auto new_root =
			std::make_shared<const ExpressionNode<T>>(BinaryOp<T>{ BinaryOp<T>::Op::Divide, et.get_root(), v.et.get_root() });
		et = ExpressionTree<T>(new_root);
		return *this;
	}

	/**
	 * @brief In-place subtraction of another symbolic coefficient.
	 */
	SymbolicCoefficient& operator-=(SymbolicCoefficient const& v) {
		auto new_root = std::make_shared<const ExpressionNode<T>>(
			BinaryOp<T>{ BinaryOp<T>::Op::Substract, et.get_root(), v.et.get_root() });
		et = ExpressionTree<T>(new_root);
		return *this;
	}

	/**
	 * @brief Unary minus operator.
	 * @return A new `SymbolicCoefficient` representing the negation of this one.
	 */
	SymbolicCoefficient operator-() const {
		auto new_root = std::make_shared<const ExpressionNode<T>>(UnaryOp<T>{ UnaryOp<T>::Op::Minus, et.get_root() });
		return SymbolicCoefficient(ExpressionTree<T>(new_root));
	}

	/**
	 * @brief Applies the cosine function to the expression.
	 * @return A new `SymbolicCoefficient` representing `cos(*this)`.
	 */
	SymbolicCoefficient cos() const {
		auto new_root = std::make_shared<const ExpressionNode<T>>(UnaryOp<T>{ UnaryOp<T>::Op::Cos, et.get_root() });
		return SymbolicCoefficient(ExpressionTree<T>(new_root));
	}

	/**
	 * @brief Applies the sine function to the expression.
	 * @return A new `SymbolicCoefficient` representing `sin(*this)`.
	 */
	SymbolicCoefficient sin() const {
		auto new_root = std::make_shared<const ExpressionNode<T>>(UnaryOp<T>{ UnaryOp<T>::Op::Sin, et.get_root() });
		return SymbolicCoefficient(ExpressionTree<T>(new_root));
	}

	/**
	 * @brief Applies the square root function to the expression.
	 * @return A new `SymbolicCoefficient` representing `sqrt(*this)`.
	 */
	SymbolicCoefficient sqrt() const {
		auto new_root = std::make_shared<const ExpressionNode<T>>(UnaryOp<T>{ UnaryOp<T>::Op::Sqrt, et.get_root() });
		return SymbolicCoefficient(ExpressionTree<T>(new_root));
	}

	friend SymbolicCoefficient operator+(SymbolicCoefficient lhs, SymbolicCoefficient const& rhs) { return lhs += rhs; }
	friend SymbolicCoefficient operator+(T v, SymbolicCoefficient const& rhs) { return rhs + v; }
	friend SymbolicCoefficient operator*(SymbolicCoefficient lhs, SymbolicCoefficient const& rhs) { return lhs *= rhs; }
	friend SymbolicCoefficient operator*(SymbolicCoefficient lhs, T v) {
		if (v == T{ 1 }) {
			return lhs;
		} else if (v == T{ -1 }) {
			return -lhs;
		} else {
			return lhs *= v;
		}
	}
	friend SymbolicCoefficient operator*(T v, SymbolicCoefficient const& rhs) { return rhs * v; }
	friend SymbolicCoefficient operator/(SymbolicCoefficient lhs, SymbolicCoefficient const& rhs) { return lhs /= rhs; }
	friend SymbolicCoefficient operator-(SymbolicCoefficient lhs, SymbolicCoefficient const& rhs) { return lhs -= rhs; }

	friend SymbolicCoefficient cos(SymbolicCoefficient x) { return x.cos(); }
	friend SymbolicCoefficient sin(SymbolicCoefficient x) { return x.sin(); }
	friend SymbolicCoefficient sqrt(SymbolicCoefficient x) { return x.sqrt(); }

	friend std::ostream& operator<<(std::ostream& os, SymbolicCoefficient const& sc) { return os << sc.et; }
};

/**
 * @concept Evaluable
 * @brief Specifies that a type must have an `evaluate()` method.
 */
template <typename T>
concept Evaluable = requires(T t) {
	t.evaluate();
};

/**
 * @concept Symbolic
 * @brief Specifies that a type is either a `Variable` or is `Evaluable`.
 */
template <typename T>
concept Symbolic = Evaluable<T> || std::is_same_v<Variable, T>;

#endif // PP_INCLUDE_SYMBOLIC_COEFFICIENT_HPP
