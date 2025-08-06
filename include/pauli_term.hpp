#ifndef PP_PAULI_TERM_HPP
#define PP_PAULI_TERM_HPP

#include "pauli.hpp"
#include "maths.hpp"

#include <algorithm>
#include <cstdint>
#include <functional>
#include <numeric>
#include <string_view>
#include <initializer_list>
#include <utility>
#include <vector>
#include <cassert>
#include <ostream>

template <class T = coeff_t>
class PauliTerm {
    private:
	std::vector<Pauli> paulis_;
	T coefficient_;

    public:
	using coeff_t = T;
	PauliTerm(std::string_view pauli_string, T coefficient = T{ 1. })
		: paulis_(pauli_string.begin(), pauli_string.end()), coefficient_(coefficient) {
		assert(coefficient_ >= -1 && coefficient_ <= 1 && "Invalid coefficient");
	}

	PauliTerm(std::initializer_list<Pauli> pauli_list, T coefficient = T{ 1. })
		: paulis_(pauli_list), coefficient_(coefficient) {
		assert(coefficient_ >= -1 && coefficient_ <= 1 && "Invalid coefficient");
	}

	PauliTerm(Pauli pauli, T coefficient = T{ 1 }) : paulis_(1, pauli), coefficient_(coefficient) {
		assert(coefficient_ >= -1 && coefficient_ <= 1 && "Invalid coefficient");
	}

	PauliTerm(PauliTerm const&) = default;
	PauliTerm(PauliTerm&&) noexcept = default;
	PauliTerm& operator=(PauliTerm const&) = default;
	PauliTerm& operator=(PauliTerm&&) noexcept = default;

	void apply_pauli(Pauli_gates g, unsigned qubit) { coefficient_ *= paulis_[qubit].apply_pauli(g); }

	void apply_clifford(Clifford_Gates_1Q g, unsigned qubit) { coefficient_ *= paulis_[qubit].apply_clifford(g); }

	void apply_cx(unsigned control, unsigned target) {
		assert(control != target && "cx can't use same control and target");
		coefficient_ *= paulis_[control].apply_cx(paulis_[target]);
	}

	[[nodiscard]] PauliTerm<T> apply_rz(unsigned qubit, T theta) {
		assert(paulis_[qubit] != p_i && paulis_[qubit] != p_z && "Should not happen");
		auto ret = *this;

		auto cos_teta = cos(theta);
		auto sin_theta = sin(theta);

		coefficient_ *= cos_teta;

		// use commutators?
		if (paulis_[qubit] == p_x) {
			ret[qubit] = p_y;
			ret.coefficient_ *= -sin_theta;
		} else {
			assert(paulis_[qubit] == p_y);
			ret[qubit] = p_x;
			ret.coefficient_ *= sin_theta;
		}

		return ret;
	}

	T expectation_value() const {
		return (std::all_of(paulis_.cbegin(), paulis_.cend(),
				    [](auto const& p) { return p.commutes_with(p_z); })) ?
			       coefficient_ :
			       T{ 0 };
	}

	Pauli& operator[](std::size_t idx) { return paulis_[idx]; }
	Pauli const& operator[](std::size_t idx) const { return paulis_[idx]; }
	decltype(auto) size() const { return paulis_.size(); }

	std::size_t phash() const noexcept {
		std::size_t ret = 0;
		for (std::size_t i = 0; i < paulis_.size(); ++i) {
			const std::size_t uv = std::to_underlying(static_cast<Pauli_enum>(paulis_[i]));
			ret ^= uv << (i * 2 % (sizeof(std::size_t) * 8));
		}
		return ret;
	}

	friend bool operator==(PauliTerm const& lhs, PauliTerm const& rhs) {
		return (lhs.paulis_.size() == rhs.paulis_.size()) && (lhs.coefficient_ == rhs.coefficient_) &&
		       std::equal(lhs.paulis_.begin(), lhs.paulis_.end(), rhs.paulis_.begin());
	}

	bool equal_bitstring(PauliTerm const& oth) const {
		return (paulis_.size() == oth.paulis_.size()) &&
		       std::equal(paulis_.cbegin(), paulis_.cend(), oth.paulis_.cbegin());
	}

	PauliTerm& operator*=(T x) {
		coefficient_ *= x;
		assert(coefficient_ >= -1 && coefficient_ <= 1 && "Invalid coefficient");
		return *this;
	}

	void add_coeff(T c) {
		coefficient_ += c;
		assert(c >= -1 && c <= 1 && "Invalid coefficient after merge");
	}

	T const& coefficient() const noexcept { return coefficient_; }

	std::size_t pauli_weight() const {
		return std::accumulate(paulis_.cbegin(), paulis_.cend(), 0,
				       [](auto&& acc, auto&& p) { return acc + p.weight(); });
	}

	friend std::ostream& operator<<(std::ostream& os, PauliTerm const& pt) {
		os << std::showpos << pt.coefficient_ << " ";
		for (auto const& p : pt.paulis_) {
			os << p;
		}
		return os;
	}
};

template <typename T>
inline bool operator!=(PauliTerm<T> const& lhs, PauliTerm<T> const& rhs) {
	return !(lhs == rhs);
}

template <typename Numeric, typename T = coeff_t>
requires std::is_convertible_v<Numeric, T> PauliTerm<T> operator*(Numeric&& x, PauliTerm<T> pt) {
	pt *= x;
	return pt;
}

template <typename Numeric, typename T = coeff_t>
requires std::is_convertible_v<Numeric, T> PauliTerm<T> operator*(PauliTerm<T> pt, Numeric&& x) {
	return x * pt;
}

template <typename Numeric, typename T = coeff_t>
requires std::is_convertible_v<Numeric, T> PauliTerm<T> operator*(Numeric&& x, Pauli p) {
	PauliTerm pt(p);
	return x * pt;
}

template <typename Numeric, typename T = coeff_t>
requires std::is_convertible_v<Numeric, T> PauliTerm<T> operator*(Pauli p, Numeric&& x) {
	return x * p;
}

template <typename Numeric, typename T = coeff_t>
requires std::is_convertible_v<Numeric, T> PauliTerm<T> operator*(Numeric&& x, Pauli_enum p) {
	PauliTerm pt(Pauli{ p });
	return x * pt;
}

template <typename Numeric, typename T = coeff_t>
requires std::is_convertible_v<Numeric, T> PauliTerm<T> operator*(Pauli_enum p, Numeric&& x) {
	return x * p;
}

template <typename T>
struct std::hash<PauliTerm<T>> {
	std::size_t operator()(PauliTerm<T> const& pt) const noexcept { return pt.phash(); }
};

template <typename T>
struct PauliStringEqual {
	bool operator()(const PauliTerm<T>& lhs, const PauliTerm<T>& rhs) const { return lhs.equal_bitstring(rhs); }
};

#endif
