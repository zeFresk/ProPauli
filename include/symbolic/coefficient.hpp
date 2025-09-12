#ifndef PP_INCLUDE_SYMBOLIC_COEFFICIENT_HPP
#define PP_INCLUDE_SYMBOLIC_COEFFICIENT_HPP

#include "symbolic/expression_tree.hpp"
#include <ostream>

template <typename T>
class SymbolicCoefficient {
	ExpressionTree<T> et;

	// Private constructor for internal use by friends and operators
	SymbolicCoefficient(ExpressionTree<T> tree) : et(std::move(tree)) {}

    public:
	// --- Constructors ---
	SymbolicCoefficient(T const v)
		: et(ExpressionTree<T>(std::make_shared<const ExpressionNode<T>>(Constant<T>{ v }))) {}

	SymbolicCoefficient(Variable const& var)
		: et(ExpressionTree<T>(std::make_shared<const ExpressionNode<T>>(var))) {}

	SymbolicCoefficient(SymbolicCoefficient const&) = default;
	SymbolicCoefficient& operator=(SymbolicCoefficient const&) = default;
	SymbolicCoefficient(SymbolicCoefficient&&) = default;
	SymbolicCoefficient& operator=(SymbolicCoefficient&&) = default;

	using Underlying_t = T;

	// --- Public API ---
	std::string to_string(std::string_view format_string = "{:.3g}") const { return et.to_string(format_string); }
	T evaluate(std::unordered_map<std::string, T> const& variables = {}) const { return et.evaluate(variables); }
	[[nodiscard]] SymbolicCoefficient substitute(std::unordered_map<std::string, T> const& variables) const {
		return SymbolicCoefficient(et.substitute(variables));
	}

	// FIX: Added the missing symbolic_evaluate method
	[[nodiscard]] SymbolicCoefficient symbolic_evaluate(std::unordered_map<std::string, T> const& variables) const {
		return SymbolicCoefficient(et.symbolic_evaluate(variables));
	}

	[[nodiscard]] SymbolicCoefficient simplified() const { return SymbolicCoefficient(et.simplified()); }

	// --- Operator Overloads ---
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

	SymbolicCoefficient& operator*=(SymbolicCoefficient const& v) {
		auto new_root = std::make_shared<const ExpressionNode<T>>(
			BinaryOp<T>{ BinaryOp<T>::Op::Multiply, et.get_root(), v.et.get_root() });
		et = ExpressionTree<T>(new_root);
		return *this;
	}

	SymbolicCoefficient& operator+=(SymbolicCoefficient const& v) {
		auto new_root = std::make_shared<const ExpressionNode<T>>(
			BinaryOp<T>{ BinaryOp<T>::Op::Add, et.get_root(), v.et.get_root() });
		et = ExpressionTree<T>(new_root);
		return *this;
	}

	SymbolicCoefficient& operator/=(SymbolicCoefficient const& v) {
		auto new_root = std::make_shared<const ExpressionNode<T>>(
			BinaryOp<T>{ BinaryOp<T>::Op::Divide, et.get_root(), v.et.get_root() });
		et = ExpressionTree<T>(new_root);
		return *this;
	}

	SymbolicCoefficient& operator-=(SymbolicCoefficient const& v) {
		auto new_root = std::make_shared<const ExpressionNode<T>>(
			BinaryOp<T>{ BinaryOp<T>::Op::Substract, et.get_root(), v.et.get_root() });
		et = ExpressionTree<T>(new_root);
		return *this;
	}

	SymbolicCoefficient operator-() const {
		auto new_root =
			std::make_shared<const ExpressionNode<T>>(UnaryOp<T>{ UnaryOp<T>::Op::Minus, et.get_root() });
		return SymbolicCoefficient(ExpressionTree<T>(new_root));
	}

	SymbolicCoefficient cos() const {
		auto new_root =
			std::make_shared<const ExpressionNode<T>>(UnaryOp<T>{ UnaryOp<T>::Op::Cos, et.get_root() });
		return SymbolicCoefficient(ExpressionTree<T>(new_root));
	}

	SymbolicCoefficient sin() const {
		auto new_root =
			std::make_shared<const ExpressionNode<T>>(UnaryOp<T>{ UnaryOp<T>::Op::Sin, et.get_root() });
		return SymbolicCoefficient(ExpressionTree<T>(new_root));
	}

	SymbolicCoefficient sqrt() const {
		auto new_root =
			std::make_shared<const ExpressionNode<T>>(UnaryOp<T>{ UnaryOp<T>::Op::Sqrt, et.get_root() });
		return SymbolicCoefficient(ExpressionTree<T>(new_root));
	}

	friend SymbolicCoefficient operator+(SymbolicCoefficient lhs, SymbolicCoefficient const& rhs) {
		return lhs += rhs;
	}
	friend SymbolicCoefficient operator+(SymbolicCoefficient lhs, T v) {
		if (v == T{ 0 }) {
			return lhs;
		} else {
			return lhs += v;
		}
	}
	friend SymbolicCoefficient operator+(T v, SymbolicCoefficient const& rhs) {
		return rhs + v;
	}
	friend SymbolicCoefficient operator*(SymbolicCoefficient lhs, SymbolicCoefficient const& rhs) {
		return lhs *= rhs;
	}
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
	friend SymbolicCoefficient operator/(SymbolicCoefficient lhs, SymbolicCoefficient const& rhs) {
		return lhs /= rhs;
	}
	friend SymbolicCoefficient operator-(SymbolicCoefficient lhs, SymbolicCoefficient const& rhs) {
		return lhs -= rhs;
	}

	friend SymbolicCoefficient cos(SymbolicCoefficient x) { return x.cos(); }
	friend SymbolicCoefficient sin(SymbolicCoefficient x) { return x.sin(); }
	friend SymbolicCoefficient sqrt(SymbolicCoefficient x) { return x.sqrt(); }

	friend std::ostream& operator<<(std::ostream& os, SymbolicCoefficient const& sc) { return os << sc.et; }
};

template <typename T>
concept Evaluable = requires(T t) {
	t.evaluate();
};

template <typename T>
concept Symbolic = Evaluable<T> || std::is_same_v<Variable, T>;

#endif // PP_INCLUDE_SYMBOLIC_COEFFICIENT_HPP
