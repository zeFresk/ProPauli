#ifndef PP_INCLUDE_SYMBOLIC_COEFFICIENT_HPP
#define PP_INCLUDE_SYMBOLIC_COEFFICIENT_HPP

#include "symbolic/expression_tree.hpp"
#include <ostream>

template <typename T>
class SymbolicCoefficient {
	ExpressionTree<T> et;

    public:
	SymbolicCoefficient(T const v) : et{} {
		auto n = et.add_node(Constant<T>(v));
		et.update_root(n);
	}

	SymbolicCoefficient(Variable const& var) : et{} {
		auto n = et.add_node(var);
		et.update_root(n);
	}

	SymbolicCoefficient(SymbolicCoefficient const&) = default;
	SymbolicCoefficient& operator=(SymbolicCoefficient const&) = default;
	SymbolicCoefficient(SymbolicCoefficient&&) = default;
	SymbolicCoefficient& operator=(SymbolicCoefficient&&) = default;

	using Underlying_t = T;

	/*SymbolicCoefficient& operator=(T const& new_v) {
		auto n = et.add_node(Constant<T>(std::forward(new_v)));
		et.update_root(n);
		return *this;
	}*/

	std::string to_string(std::string_view format_string = "{:.3}") const { return et.to_string(format_string); }

	T evaluate(std::unordered_map<std::string, T> const& variables = {}) const { return et.evaluate(variables); }

	[[nodiscard]] SymbolicCoefficient symbolic_evaluate(std::unordered_map<std::string, T> const& variables) const {
		SymbolicCoefficient ret{ 0.f };
		auto set = et.symbolic_evaluate(variables);
		ret.et = set;
		return ret;
	}

	[[nodiscard]] SymbolicCoefficient simplified() const {
		SymbolicCoefficient ret{ 0.f };
		auto set = et.simplified();
		ret.et = set;
		return ret;
	}

	SymbolicCoefficient& operator*=(SymbolicCoefficient const& v) {
		auto r = import_nodes(v);
		auto n = et.add_node(BinaryOp{ BinaryOp::Op::Multiply, et.get_root(), r });
		et.update_root(n);
		return *this;
	}

	SymbolicCoefficient& operator+=(SymbolicCoefficient const& v) {
		auto r = import_nodes(v);
		auto n = et.add_node(BinaryOp{ BinaryOp::Op::Add, et.get_root(), r });
		et.update_root(n);
		return *this;
	}

	SymbolicCoefficient& operator/=(SymbolicCoefficient const& v) {
		auto r = import_nodes(v);
		auto n = et.add_node(BinaryOp{ BinaryOp::Op::Divide, et.get_root(), r });
		et.update_root(n);
		return *this;
	}

	SymbolicCoefficient& operator-=(SymbolicCoefficient const& v) {
		auto r = import_nodes(v);
		auto n = et.add_node(BinaryOp{ BinaryOp::Op::Substract, et.get_root(), r });
		et.update_root(n);
		return *this;
	}

	SymbolicCoefficient operator-() const {
		auto ret = *this;
		auto n = ret.et.add_node(UnaryOp{ UnaryOp::Op::Minus, et.get_root() });
		ret.et.update_root(n);
		return ret;
	}

	SymbolicCoefficient cos() const {
		auto ret = *this;
		auto n = ret.et.add_node(UnaryOp{ UnaryOp::Op::Cos, et.get_root() });
		ret.et.update_root(n);
		return ret;
	}

	SymbolicCoefficient sin() const {
		auto ret = *this;
		auto n = ret.et.add_node(UnaryOp{ UnaryOp::Op::Sin, et.get_root() });
		ret.et.update_root(n);
		return ret;
	}

	SymbolicCoefficient sqrt() const {
		auto ret = *this;
		auto n = ret.et.add_node(UnaryOp{ UnaryOp::Op::Sqrt, et.get_root() });
		ret.et.update_root(n);
		return ret;
	}

	friend SymbolicCoefficient operator+(SymbolicCoefficient lhs, SymbolicCoefficient const& rhs) {
		lhs += rhs;
		return lhs;
	}

	friend SymbolicCoefficient operator*(SymbolicCoefficient lhs, SymbolicCoefficient const& rhs) {
		lhs *= rhs;
		return lhs;
	}

	friend SymbolicCoefficient operator/(SymbolicCoefficient lhs, SymbolicCoefficient const& rhs) {
		lhs /= rhs;
		return lhs;
	}

	friend SymbolicCoefficient operator-(SymbolicCoefficient lhs, SymbolicCoefficient const& rhs) {
		lhs -= rhs;
		return lhs;
	}

	friend SymbolicCoefficient cos(SymbolicCoefficient x) { return x.cos(); }

	friend SymbolicCoefficient sin(SymbolicCoefficient x) { return x.sin(); }

	friend SymbolicCoefficient sqrt(SymbolicCoefficient x) { return x.sqrt(); }

	friend std::ostream& operator<<(std::ostream& os, SymbolicCoefficient const& sc) {
		os << sc.et;
		return os;
	}

    private:
	NodeId import_nodes(SymbolicCoefficient const& other) {
		auto imported_root = et.import_nodes(other.et);
		return imported_root;
	}
};

template <typename T>
concept Evaluable = requires(T t) {
	t.evaluate();
};

template <typename T>
concept Symbolic = Evaluable<T> || std::is_same_v<Variable, T>;

#endif
