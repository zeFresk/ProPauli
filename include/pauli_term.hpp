#ifndef PP_PAULI_TERM_HPP
#define PP_PAULI_TERM_HPP

/**
 * @file pauli_term.hpp
 * @brief Defines the owning PauliTerm class.
 *
 * This file contains the `PauliTerm` class, which is the fundamental data structure for
 * representing a single term in an observable. It owns the memory for its Pauli string
 * (as a `std::vector<Pauli>`) and its coefficient. It serves as the primary building block
 * for constructing `Observable` objects.
 */

#include "non_owning_pauli_term.hpp"
#include "pauli.hpp"
#include "maths.hpp"

#include <algorithm>
#include <concepts>
#include <functional>
#include <numeric>
#include <string_view>
#include <initializer_list>
#include <type_traits>
#include <utility>
#include <vector>
#include <cassert>
#include <ostream>

/**
 * @brief Represents a single term in an observable, owning its Pauli string and coefficient.
 * @tparam T The numeric type for the coefficient.
 *
 * This class stores a Pauli string (e.g., "IXYZ") and a corresponding numerical
 * coefficient. It provides methods for applying quantum gates, which modify the
 * term in-place or, for certain gates, split it into two terms.
 */
template <class T = coeff_t>
class PauliTerm {
    private:
	std::vector<Pauli> paulis_;
	T coefficient_;

    public:
	using coeff_t = T;

	/** @name Constructors
	 * @{
	 */

	/**
	 * @brief Constructs a PauliTerm from a string representation.
	 * @param pauli_string A string like "IXYZ" representing the Pauli operators.
	 * @param coefficient The coefficient of the term.
	 * @snippet tests/snippets/pauli_term.cpp pauli_term_from_string
	 */
	PauliTerm(std::string_view pauli_string,
		  typename std::enable_if_t<std::is_convertible_v<T, coeff_t>, T> coefficient = T{ 1.f })
		: paulis_(pauli_string.begin(), pauli_string.end()), coefficient_(coefficient) {
		if constexpr (std::totally_ordered_with<T, coeff_t>) {
			assert(coefficient_ >= -1 && coefficient_ <= 1 && "Invalid coefficient");
		}
	}

	/**
	 * @brief Constructs a PauliTerm from an initializer list of Pauli objects.
	 * @param pauli_list An initializer list, e.g., `{p_i, p_x, p_y, p_z}`.
	 * @param coefficient The coefficient of the term.
	 * @snippet tests/snippets/pauli_term.cpp pauli_term_from_list
	 */
	PauliTerm(std::initializer_list<Pauli> pauli_list, T coefficient = T{ 1. })
		: paulis_(pauli_list), coefficient_(coefficient) {
		if constexpr (std::totally_ordered_with<T, coeff_t>) {
			assert(coefficient_ >= -1 && coefficient_ <= 1 && "Invalid coefficient");
		}
	}

	/**
	 * @brief Constructs a single-qubit PauliTerm from a Pauli object.
	 * @param pauli The Pauli operator.
	 * @param coefficient The coefficient of the term.
	 * @snippet tests/snippets/pauli_term.cpp pauli_term_from_pauli
	 */
	PauliTerm(Pauli pauli, T coefficient = T{ 1 }) : paulis_(1, pauli), coefficient_(coefficient) {
		if constexpr (std::totally_ordered_with<T, coeff_t>) {
			assert(coefficient_ >= -1 && coefficient_ <= 1 && "Invalid coefficient");
		}
	}

	template <typename It, std::enable_if_t<!std::is_constructible_v<std::string, It>, bool> = true>
	PauliTerm(It&& begin, It&& end, T coefficient = T{ 1 }) : paulis_{ begin, end }, coefficient_(coefficient) {
		if constexpr (std::totally_ordered_with<T, coeff_t>) {
			assert(coefficient_ >= -1 && coefficient_ <= 1 && "Invalid coefficient");
		}
	}
	/** @} */

	PauliTerm(PauliTerm const&) = default;
	PauliTerm(PauliTerm&&) noexcept = default;
	PauliTerm& operator=(PauliTerm const&) = default;
	PauliTerm& operator=(PauliTerm&&) noexcept = default;

	/** @name Conversion Operators
	 * @{
	 */

	/** @brief Explicitly converts to a mutable non-owning view. */
	explicit operator NonOwningPauliTerm<T>() { return NonOwningPauliTerm<T>{ paulis_, coefficient_ }; }
	/** @brief Explicitly converts to a read-only non-owning view. */
	explicit operator ReadOnlyNonOwningPauliTerm<T>() const {
		return ReadOnlyNonOwningPauliTerm<T>{ paulis_, coefficient_ };
	}
	/** @} */

	/** @name Gate Application
	 * @{
	 */

	/**
	 * @brief Applies a Pauli gate to a specific qubit of the term.
	 * @param g The Pauli gate to apply.
	 * @param qubit The target qubit index.
	 */
	void apply_pauli(Pauli_gates g, unsigned qubit) { coefficient_ *= paulis_[qubit].apply_pauli(g); }

	/**
	 * @brief Applies a Clifford gate to a specific qubit of the term.
	 * @param g The single-qubit Clifford gate to apply.
	 * @param qubit The target qubit index.
	 */
	void apply_clifford(Clifford_Gates_1Q g, unsigned qubit) { coefficient_ *= paulis_[qubit].apply_clifford(g); }

	/**
	 * @brief Applies a unital noise channel to a specific qubit of the term.
	 * @param n The noise channel type.
	 * @param qubit The target qubit index.
	 * @param p The noise probability.
	 */
	void apply_unital_noise(UnitalNoise n, unsigned qubit, T p) {
		coefficient_ *= paulis_[qubit].apply_unital_noise(n, p);
	}

	/**
	 * @brief Applies a CNOT gate to the term.
	 * @param control The control qubit index.
	 * @param target The target qubit index.
	 * @pre Control and target qubits must be different.
	 */
	void apply_cx(unsigned control, unsigned target) {
		assert(control != target && "cx can't use same control and target");
		coefficient_ *= paulis_[control].apply_cx(paulis_[target]);
	}

	/**
	 * @brief Applies an Rz gate, potentially splitting the term.
	 * @param qubit The target qubit index.
	 * @param theta The rotation angle.
	 * @return A new `PauliTerm` representing the second term created by the split.
	 * The original term is modified to become the first term of the split.
	 * @pre The operator on the target qubit must be X or Y.
	 */
	[[nodiscard]] PauliTerm<T> apply_rz(unsigned qubit, T theta) {
		assert(paulis_[qubit] != p_i && paulis_[qubit] != p_z && "Should not happen");
		auto ret = *this;

		auto cos_teta = cos(theta);
		auto sin_theta = sin(theta);

		coefficient_ *= cos_teta;

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

	/**
	 * @brief Applies the X/Y part of the amplitude damping channel, scaling the coefficient.
	 * @param qubit The target qubit index.
	 * @param p The damping probability.
	 * @pre The operator on the target qubit must be X or Y.
	 */
	void apply_amplitude_damping_xy([[maybe_unused]] unsigned qubit, T p) {
		assert(paulis_[qubit] != p_z && paulis_[qubit] != p_i && "Should not happen");
		coefficient_ *= sqrt(1 - p);
	}

	/**
	 * @brief Applies the Z part of the amplitude damping channel, splitting the term.
	 * @param qubit The target qubit index.
	 * @param p The damping probability.
	 * @return The new `PauliTerm` created by the split. The original term is also modified.
	 * @pre The operator on the target qubit must be Z.
	 */
	[[nodiscard]] PauliTerm<T> apply_amplitude_damping_z(unsigned qubit, T p) {
		assert(paulis_[qubit] == p_z && "Should not happen");
		auto ret = *this;
		ret.coefficient_ *= p;
		ret.paulis_[qubit] = p_i;

		coefficient_ *= (1 - p);

		return ret;
	}
	/** @} */

	/**
	 * @brief Calculates the expectation value of this single term.
	 * @return The coefficient if the Pauli string contains only I and Z operators; otherwise, 0.
	 */
	T expectation_value() const {
		return (std::all_of(paulis_.cbegin(), paulis_.cend(),
				    [](auto const& p) { return p.commutes_with(p_z); })) ?
			       coefficient_ :
			       T{ 0 };
	}

	/** @name Container Interface
	 * @{
	 */
	Pauli& operator[](std::size_t idx) { return paulis_[idx]; }
	Pauli const& operator[](std::size_t idx) const { return paulis_[idx]; }
	decltype(auto) size() const { return paulis_.size(); }
	decltype(auto) begin() { return paulis_.begin(); }
	decltype(auto) begin() const { return paulis_.begin(); }
	decltype(auto) end() { return paulis_.end(); }
	decltype(auto) end() const { return paulis_.end(); }
	/** @} */

	/**
	 * @brief Computes a hash of the Pauli string part of the term, ignoring the coefficient.
	 * @return A hash value representing the Pauli string.
	 */
	std::size_t phash() const noexcept {
		std::size_t ret = 0;
		for (std::size_t i = 0; i < paulis_.size(); ++i) {
			const std::size_t uv = std::to_underlying(static_cast<Pauli_enum>(paulis_[i]));
			ret ^= uv << (i * 2 % (sizeof(std::size_t) * 8));
		}
		return ret;
	}

	/** @name Comparison
	 * @{
	 */

	/**
	 * @brief Checks for deep equality between two PauliTerm objects.
	 * @return `true` if both the Pauli strings and coefficients are identical.
	 */
	friend bool operator==(PauliTerm const& lhs, PauliTerm const& rhs) {
		return (lhs.paulis_.size() == rhs.paulis_.size()) && (lhs.coefficient_ == rhs.coefficient_) &&
		       std::equal(lhs.paulis_.begin(), lhs.paulis_.end(), rhs.paulis_.begin());
	}

	friend bool operator==(NonOwningPauliTerm<T> const& lhs, PauliTerm const& rhs) {
		return lhs == static_cast<ReadOnlyNonOwningPauliTerm<T>>(rhs);
	}
	friend bool operator==(PauliTerm const& lhs, NonOwningPauliTerm<T> const& rhs) { return rhs == lhs; }
	friend bool operator==(ReadOnlyNonOwningPauliTerm<T> const& lhs, PauliTerm const& rhs) {
		return lhs == static_cast<ReadOnlyNonOwningPauliTerm<T>>(rhs);
	}
	friend bool operator==(PauliTerm const& lhs, ReadOnlyNonOwningPauliTerm<T> const& rhs) { return rhs == lhs; }

	/**
	 * @brief Checks if two terms have the same Pauli string, ignoring the coefficient.
	 * @param oth The other term to compare with.
	 * @return `true` if the Pauli strings are identical.
	 */
	bool equal_bitstring(PauliTerm const& oth) const {
		return (paulis_.size() == oth.paulis_.size()) &&
		       std::equal(paulis_.cbegin(), paulis_.cend(), oth.paulis_.cbegin());
	}
	/** @} */

	/** @name Coefficient Manipulation
	 * @{
	 */
	PauliTerm& operator*=(T x) {
		coefficient_ *= x;
		assert(coefficient_ >= -1 && coefficient_ <= 1 && "Invalid coefficient");
		return *this;
	}

	/**
	 * @brief Adds a value to the term's coefficient.
	 * @param c The value to add.
	 * @warning The resulting coefficient should remain within a valid range.
	 */
	void add_coeff(T c) {
		coefficient_ += c;
		assert(coefficient_ >= -1.0001 && coefficient_ <= 1.0001 && "Invalid coefficient after merge");
	}

	/** @brief Gets a const reference to the coefficient. */
	T const& coefficient() const noexcept { return coefficient_; }

	/** @brief Sets the coefficient of the term. */
	void set_coefficient(T new_c) noexcept { coefficient_ = new_c; }
	/** @} */

	/**
	 * @brief Calculates the Pauli weight of the term.
	 * @return The number of non-identity Pauli operators in the string.
	 */
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

/** @relates PauliTerm */
template <typename T>
inline bool operator!=(PauliTerm<T> const& lhs, PauliTerm<T> const& rhs) {
	return !(lhs == rhs);
}

/**
 * @brief Creates a PauliTerm by multiplying a numeric value with a PauliTerm.
 * @relates PauliTerm
 */
template <typename Numeric, typename T = coeff_t>
requires std::is_convertible_v<Numeric, T> PauliTerm<T> operator*(Numeric&& x, PauliTerm<T> pt) {
	pt *= x;
	return pt;
}

/**
 * @brief Creates a PauliTerm by multiplying a PauliTerm with a numeric value.
 * @relates PauliTerm
 */
template <typename Numeric, typename T = coeff_t>
requires std::is_convertible_v<Numeric, T> PauliTerm<T> operator*(PauliTerm<T> pt, Numeric&& x) {
	return x * pt;
}

/**
 * @brief Creates a single-qubit PauliTerm from a numeric value and a Pauli object.
 * @relates PauliTerm
 */
template <typename Numeric, typename T = coeff_t>
requires std::is_convertible_v<Numeric, T> PauliTerm<T> operator*(Numeric&& x, Pauli p) {
	PauliTerm pt(p);
	return x * pt;
}

/**
 * @brief Creates a single-qubit PauliTerm from a Pauli object and a numeric value.
 * @relates PauliTerm
 */
template <typename Numeric, typename T = coeff_t>
requires std::is_convertible_v<Numeric, T> PauliTerm<T> operator*(Pauli p, Numeric&& x) {
	return x * p;
}

/**
 * @brief Creates a single-qubit PauliTerm from a numeric value and a Pauli_enum.
 * @relates PauliTerm
 */
template <typename Numeric, typename T = coeff_t>
requires std::is_convertible_v<Numeric, T> PauliTerm<T> operator*(Numeric&& x, Pauli_enum p) {
	PauliTerm pt(Pauli{ p });
	return x * pt;
}

/** @relates PauliTerm */
template <typename Numeric, typename T = coeff_t>
requires std::is_convertible_v<Numeric, T> PauliTerm<T> operator*(Pauli_enum p, Numeric&& x) {
	return x * p;
}

/**
 * @brief Specialization of `std::hash` for `PauliTerm`.
 * @relates PauliTerm
 *
 * Allows `PauliTerm` to be used as a key in `std::unordered_map` and other hash-based
 * containers. The hash is based only on the Pauli string.
 */
template <typename T>
struct std::hash<PauliTerm<T>> {
	std::size_t operator()(PauliTerm<T> const& pt) const noexcept { return pt.phash(); }
};

/**
 * @brief A comparator for `PauliTerm` that checks only the Pauli string.
 * @relates PauliTerm
 *
 * Useful for hash-based containers where terms with the same Pauli string but
 * different coefficients should be treated as equivalent for lookup purposes.
 */
template <typename T>
struct PauliStringEqual {
	bool operator()(const PauliTerm<T>& lhs, const PauliTerm<T>& rhs) const { return lhs.equal_bitstring(rhs); }
};

/**
 * @brief A concept that defines the requirements for a PauliTerm iterator.
 *
 * This concept is satisfied by any type that can be dereferenced, incremented, and
 * whose dereferenced value can be used to construct a `PauliTerm`.
 */
template <typename T>
concept PauliTermIterator = requires(T t) {
	*t;
	++t;
	PauliTerm{ *t };
};

#endif
