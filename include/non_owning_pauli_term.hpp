#ifndef PP_NON_OWNING_PT_HPP
#define PP_NON_OWNING_PT_HPP

/**
 * @file non_owning_pauli_term.hpp
 * @brief Provides non-owning, view-like classes for Pauli terms.
 *
 * This file defines `ReadOnlyNonOwningPauliTerm` and `NonOwningPauliTerm`. These classes
 * provide a view-like interface to a Pauli string and its associated coefficient, using
 * `std::span` and `std::reference_wrapper` to refer to data owned elsewhere.
 *
 * This non-owning approach is critical for performance, as it avoids expensive copies of
 * Pauli strings when manipulating observables within the simulation. The mutable version,
 * `NonOwningPauliTerm`, is used internally to apply gate operations directly to the
 * observable's memory.
 */

#include "pauli.hpp"
#include "maths.hpp"

#include <algorithm>
#include <functional>
#include <span>
#include <utility>
#include <cassert>
#include <numeric>
#include <vector>

/**
 * @brief A non-owning, read-only view of a Pauli term.
 * @tparam T The numeric type for the term's coefficient (e.g., float, double).
 *
 * This class provides a `const` view of a Pauli term, consisting of a Pauli string
 * (`std::span<const Pauli>`) and a coefficient (`const T&`). It does not own the
 * underlying data, so it is cheap to create and copy. The caller must ensure that the
 * data it refers to outlives this object.
 *
 * @snippet tests/snippets/non_owning_pauli_term.cpp readonly_nonowning_pauli_term_usage
 */
template <typename T>
class ReadOnlyNonOwningPauliTerm {
	std::span<const Pauli> paulis_;
	std::reference_wrapper<const T> coefficient_;

    public:
	/** @name Constructors
	 * Construct a view from various sources of Pauli data.
	 * @{
	 */
	ReadOnlyNonOwningPauliTerm(std::vector<Pauli> const& arr, T const& coeff) : paulis_(arr), coefficient_(coeff) {}
	ReadOnlyNonOwningPauliTerm(std::span<const Pauli> const& arr, T const& coeff)
		: paulis_(arr), coefficient_(coeff) {}
	template <typename It>
	ReadOnlyNonOwningPauliTerm(It&& begin, It&& end, T const& coeff) : paulis_(begin, end), coefficient_(coeff) {}
	/** @} */

	ReadOnlyNonOwningPauliTerm(ReadOnlyNonOwningPauliTerm const&) = default;
	ReadOnlyNonOwningPauliTerm(ReadOnlyNonOwningPauliTerm&&) noexcept = default;
	ReadOnlyNonOwningPauliTerm& operator=(ReadOnlyNonOwningPauliTerm const&) = default;
	ReadOnlyNonOwningPauliTerm& operator=(ReadOnlyNonOwningPauliTerm&&) noexcept = default;

	/**
	 * @brief Calculates the expectation value of this single term.
	 * @return The coefficient if the Pauli string contains only I and Z operators; otherwise, 0.
	 */
	T expectation_value() const {
		return (std::all_of(paulis_.begin(), paulis_.end(),
				    [](auto const& p) { return p.commutes_with(p_z); })) ?
			       coefficient_ :
			       T{ 0 };
	}

	/** @name Accessors
	 * Provide read-only access to the underlying Pauli string.
	 * @{
	 */
	Pauli const& operator[](std::size_t idx) const { return paulis_[idx]; }
	decltype(auto) size() const { return paulis_.size(); }
	decltype(auto) begin() const { return paulis_.begin(); }
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

	/**
	 * @brief Checks for deep equality between two Pauli terms.
	 * @return `true` if both the Pauli strings and coefficients are identical.
	 */
	friend bool operator==(ReadOnlyNonOwningPauliTerm const& lhs, ReadOnlyNonOwningPauliTerm const& rhs) {
		return (lhs.paulis_.size() == rhs.paulis_.size()) && (lhs.coefficient_ == rhs.coefficient_) &&
		       std::equal(lhs.paulis_.begin(), lhs.paulis_.end(), rhs.paulis_.begin());
	}

	/**
	 * @brief Checks if two terms have the same Pauli string, ignoring the coefficient.
	 * @param oth The other term to compare with.
	 * @return `true` if the Pauli strings are identical.
	 */
	bool equal_bitstring(ReadOnlyNonOwningPauliTerm const& oth) const {
		return (paulis_.size() == oth.paulis_.size()) &&
		       std::equal(paulis_.begin(), paulis_.end(), oth.paulis_.begin());
	}

	/**
	 * @brief Gets the coefficient of the term.
	 * @return A const reference to the coefficient.
	 */
	T const& coefficient() const noexcept { return coefficient_; }

	/**
	 * @brief Calculates the Pauli weight of the term.
	 * @return The number of non-identity Pauli operators in the string.
	 */
	std::size_t pauli_weight() const {
		return std::accumulate(paulis_.begin(), paulis_.end(), 0,
				       [](auto&& acc, auto&& p) { return acc + p.weight(); });
	}

	/**
	 * @brief Enables printing the term to an output stream.
	 */
	friend std::ostream& operator<<(std::ostream& os, ReadOnlyNonOwningPauliTerm const& pt) {
		os << std::showpos << pt.coefficient_ << " ";
		for (auto const& p : pt.paulis_) {
			os << p;
		}
		return os;
	}
};

/**
 * @brief A non-owning, mutable view of a Pauli term.
 * @tparam T The numeric type for the term's coefficient (e.g., float, double).
 *
 * This class provides a mutable view of a Pauli term, allowing for in-place modification
 * of the underlying Pauli string and coefficient data. It is used internally by the
 * simulation engine to apply quantum gates to an observable without incurring copy overhead.
 * The caller must ensure that the data it refers to outlives this object.
 *
 * @snippet tests/snippets/non_owning_pauli_term.cpp nonowning_pauli_term_usage
 */
template <typename T>
class NonOwningPauliTerm {
	std::span<Pauli> paulis_;
	std::reference_wrapper<T> coefficient_;

    public:
	/** @name Constructors
	 * Construct a mutable view from various sources of Pauli data.
	 * @{
	 */
	NonOwningPauliTerm(std::vector<Pauli>& arr, T& coeff) : paulis_(arr), coefficient_(coeff) {}
	NonOwningPauliTerm(std::span<Pauli> arr, T& coeff) : paulis_(arr), coefficient_(coeff) {}
	template <typename It>
	NonOwningPauliTerm(It&& begin, It&& end, T& coeff) : paulis_(begin, end), coefficient_(coeff) {}
	/** @} */

	NonOwningPauliTerm(NonOwningPauliTerm const&) = default;
	NonOwningPauliTerm(NonOwningPauliTerm&&) noexcept = default;
	NonOwningPauliTerm& operator=(NonOwningPauliTerm const&) = default;
	NonOwningPauliTerm& operator=(NonOwningPauliTerm&&) noexcept = default;

	/**
	 * @brief Copies the content from another non-owning term into this view's underlying data.
	 * @param nopt The source term to copy from.
	 */
	void copy_content(NonOwningPauliTerm<T> const& nopt) {
		copy_paulis(nopt.paulis_.begin(), nopt.paulis_.end());
		coefficient_.get() = nopt.coefficient_;
	}

	/**
	 * @brief Copies a Pauli string from an iterator range into this view's underlying data.
	 * @tparam It The type of the iterator.
	 * @param begin An iterator to the beginning of the source Pauli string.
	 * @param end An iterator to the end of the source Pauli string.
	 * @pre The distance between `begin` and `end` must match the size of this view's span.
	 */
	template <typename It>
	void copy_paulis(It&& begin, It&& end) {
		assert(std::distance(begin, end) == static_cast<decltype(std::distance(begin, end))>(size()));
		std::copy(begin, end, paulis_.begin());
	}

	/**
	 * @brief Implicitly converts a mutable view to a read-only view.
	 */
	operator ReadOnlyNonOwningPauliTerm<T>() const { return ReadOnlyNonOwningPauliTerm<T>(paulis_, coefficient_); }

	/** @name Gate Application
	 * Methods to apply quantum operations in-place.
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
	 *
	 * This operation modifies the current term in-place and, if a split occurs,
	 * populates the `output` term with the new term's data.
	 *
	 * @param qubit The target qubit index.
	 * @param theta The rotation angle.
	 * @param output A mutable view where the new split term will be stored.
	 * @pre The operator on the target qubit must be X or Y.
	 */
	void apply_rz(unsigned qubit, T theta, NonOwningPauliTerm<T>& output) {
		assert(paulis_[qubit] != p_i && paulis_[qubit] != p_z && "Should not happen");

		auto cos_teta = cos(theta);
		auto sin_theta = sin(theta);

		coefficient_ *= cos_teta;

		// Populate the new term created by the split
		if (paulis_[qubit] == p_x) {
			output[qubit] = p_y;
			output.coefficient_ *= -sin_theta;
		} else {
			assert(paulis_[qubit] == p_y);
			output[qubit] = p_x;
			output.coefficient_ *= sin_theta;
		}
	}

	/**
	 * @brief Applies the X/Y part of the amplitude damping channel.
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
	 * @param output A mutable view where the new split term will be stored.
	 * @pre The operator on the target qubit must be Z.
	 */
	void apply_amplitude_damping_z(unsigned qubit, T p, NonOwningPauliTerm<T>& output) {
		assert(paulis_[qubit] == p_z && "Should not happen");
		output.coefficient_ *= p;
		output.paulis_[qubit] = p_i;

		coefficient_ *= (1 - p);
	}
	/** @} */

	/**
	 * @brief Calculates the expectation value of this single term.
	 * @return The coefficient if the Pauli string contains only I and Z operators; otherwise, 0.
	 */
	T expectation_value() const {
		return (std::all_of(paulis_.begin(), paulis_.end(),
				    [](auto const& p) { return p.commutes_with(p_z); })) ?
			       coefficient_ :
			       T{ 0 };
	}

	/** @name Accessors and Mutators
	 * Provide read-write access to the underlying Pauli string and coefficient.
	 * @{
	 */
	Pauli& operator[](std::size_t idx) { return paulis_[idx]; }
	Pauli const& operator[](std::size_t idx) const { return paulis_[idx]; }
	decltype(auto) size() const { return paulis_.size(); }
	decltype(auto) begin() { return paulis_.begin(); }
	decltype(auto) begin() const { return paulis_.begin(); }
	decltype(auto) end() { return paulis_.end(); }
	decltype(auto) end() const { return paulis_.end(); }

	/**
	 * @brief Gets a const reference to the coefficient.
	 */
	T const& coefficient() const noexcept { return coefficient_; }

	/**
	 * @brief Sets the coefficient of the term.
	 * @param new_c The new coefficient value.
	 */
	void set_coefficient(T new_c) noexcept { coefficient_.get() = new_c; }

	/**
	 * @brief Adds a value to the term's coefficient.
	 * @param c The value to add to the coefficient.
	 * @warning The resulting coefficient must remain within a valid range.
	 */
	void add_coeff(T c) {
		coefficient_.get() += c;
		assert(coefficient_.get() >= -1.0001 && coefficient_.get() <= 1.0001 &&
		       "Invalid coefficient after merge");
	}
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

	/**
	 * @brief Checks for deep equality between two Pauli terms.
	 * @return `true` if both the Pauli strings and coefficients are identical.
	 */
	friend bool operator==(NonOwningPauliTerm const& lhs, NonOwningPauliTerm const& rhs) {
		return (lhs.paulis_.size() == rhs.paulis_.size()) && (lhs.coefficient_ == rhs.coefficient_) &&
		       std::equal(lhs.paulis_.begin(), lhs.paulis_.end(), rhs.paulis_.begin());
	}

	/**
	 * @brief Checks if two terms have the same Pauli string, ignoring the coefficient.
	 * @param oth The other term to compare with.
	 * @return `true` if the Pauli strings are identical.
	 */
	bool equal_bitstring(NonOwningPauliTerm const& oth) const {
		return (paulis_.size() == oth.paulis_.size()) &&
		       std::equal(paulis_.begin(), paulis_.end(), oth.paulis_.begin());
	}

	/**
	 * @brief Calculates the Pauli weight of the term.
	 * @return The number of non-identity Pauli operators in the string.
	 */
	std::size_t pauli_weight() const {
		return std::accumulate(paulis_.begin(), paulis_.end(), 0,
				       [](auto&& acc, auto&& p) { return acc + p.weight(); });
	}

	/**
	 * @brief Enables printing the term to an output stream.
	 */
	friend std::ostream& operator<<(std::ostream& os, NonOwningPauliTerm const& pt) {
		os << std::showpos << pt.coefficient_ << " ";
		for (auto const& p : pt.paulis_) {
			os << p;
		}
		return os;
	}
};

/**
 * @brief Specialization of `std::hash` for `NonOwningPauliTerm`.
 *
 * Allows `NonOwningPauliTerm` to be used as a key in `std::unordered_map` and
 * other hash-based containers. The hash is based only on the Pauli string.
 */
template <typename T>
struct std::hash<NonOwningPauliTerm<T>> {
	std::size_t operator()(NonOwningPauliTerm<T> const& pt) const noexcept { return pt.phash(); }
};

/**
 * @brief A comparator for `NonOwningPauliTerm` that checks only the Pauli string.
 *
 * Useful for hash-based containers where terms with the same Pauli string but
 * different coefficients should be treated as equivalent for lookup purposes.
 */
template <typename T>
struct PauliStringEqualNonOwning {
	bool operator()(const NonOwningPauliTerm<T>& lhs, const NonOwningPauliTerm<T>& rhs) const {
		return lhs.equal_bitstring(rhs);
	}
};
#endif
