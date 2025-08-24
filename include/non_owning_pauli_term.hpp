#ifndef PP_NON_OWNING_PT_HPP
#define PP_NON_OWNING_PT_HPP

#include "pauli.hpp"
#include "maths.hpp"

#include <algorithm>
#include <functional>
#include <span>
#include <utility>
#include <cassert>
#include <numeric>
#include <vector>

template <typename T>
class ReadOnlyNonOwningPauliTerm {
	std::span<const Pauli> paulis_;
	T const& coefficient_;

    public:
	ReadOnlyNonOwningPauliTerm(std::vector<Pauli> const& arr, T const& coeff) : paulis_(arr), coefficient_(coeff) {}
	ReadOnlyNonOwningPauliTerm(std::span<Pauli> const& arr, T const& coeff) : paulis_(arr), coefficient_(coeff) {}

	template <typename It>
	ReadOnlyNonOwningPauliTerm(It&& begin, It&& end, T const& coeff) : paulis_(begin, end), coefficient_(coeff) {}

	ReadOnlyNonOwningPauliTerm(ReadOnlyNonOwningPauliTerm const&) = default;
	ReadOnlyNonOwningPauliTerm(ReadOnlyNonOwningPauliTerm&&) noexcept = default;
	ReadOnlyNonOwningPauliTerm& operator=(ReadOnlyNonOwningPauliTerm const&) = default;
	ReadOnlyNonOwningPauliTerm& operator=(ReadOnlyNonOwningPauliTerm&&) noexcept = default;

	/**
	 * @brief Calculates the expectation value of this single term.
	 * @return The coefficient if the Pauli string contains only I and Z operators, otherwise 0.
	 */
	T expectation_value() const {
		return (std::all_of(paulis_.cbegin(), paulis_.cend(),
				    [](auto const& p) { return p.commutes_with(p_z); })) ?
			       coefficient_ :
			       T{ 0 };
	}

	Pauli const& operator[](std::size_t idx) const { return paulis_[idx]; }
	decltype(auto) size() const { return paulis_.size(); }
	decltype(auto) begin() { return paulis_.begin(); }
	decltype(auto) begin() const { return paulis_.begin(); }
	decltype(auto) end() { return paulis_.end(); }
	decltype(auto) end() const { return paulis_.end(); }

	/**
	 * @brief Computes a hash of the Pauli string part of the term.
	 * @return A hash value.
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
	 * @brief Checks for equality between two ReadOnlyNonOwningPauliTerm objects.
	 * @return True if the Pauli strings and coefficients are identical.
	 */
	friend bool operator==(ReadOnlyNonOwningPauliTerm const& lhs, ReadOnlyNonOwningPauliTerm const& rhs) {
		return (lhs.paulis_.size() == rhs.paulis_.size()) && (lhs.coefficient_ == rhs.coefficient_) &&
		       std::equal(lhs.paulis_.begin(), lhs.paulis_.end(), rhs.paulis_.begin());
	}

	/**
	 * @brief Checks if two ReadOnlyNonOwningPauliTerm objects have the same Pauli string, ignoring the coefficient.
	 */
	bool equal_bitstring(ReadOnlyNonOwningPauliTerm const& oth) const {
		return (paulis_.size() == oth.paulis_.size()) &&
		       std::equal(paulis_.cbegin(), paulis_.cend(), oth.paulis_.cbegin());
	}

	/**
	 * @brief Gets the coefficient of the term.
	 */
	T const& coefficient() const noexcept { return coefficient_; }

	/**
	 * @brief Calculates the Pauli weight of the term (number of non-identity operators).
	 */
	std::size_t pauli_weight() const {
		return std::accumulate(paulis_.cbegin(), paulis_.cend(), 0,
				       [](auto&& acc, auto&& p) { return acc + p.weight(); });
	}

	friend std::ostream& operator<<(std::ostream& os, ReadOnlyNonOwningPauliTerm const& pt) {
		os << std::showpos << pt.coefficient_ << " ";
		for (auto const& p : pt.paulis_) {
			os << p;
		}
		return os;
	}
};

template <typename T>
class NonOwningPauliTerm {
	std::span<Pauli> paulis_;
	T& coefficient_;

    public:
	NonOwningPauliTerm(std::vector<Pauli>& arr, T& coeff) : paulis_(arr), coefficient_(coeff) {}

	template <typename It>
	NonOwningPauliTerm(It&& begin, It&& end, T& coeff) : paulis_(begin, end), coefficient_(coeff) {}

	NonOwningPauliTerm(NonOwningPauliTerm const&) = delete;
	NonOwningPauliTerm(NonOwningPauliTerm&&) noexcept = default;
	NonOwningPauliTerm& operator=(NonOwningPauliTerm const&) = delete;
	NonOwningPauliTerm& operator=(NonOwningPauliTerm&&) noexcept = default;

	void copy_content(NonOwningPauliTerm<T> const& nopt) {
		copy_paulis(nopt.paulis_.cbegin(), nopt.paulis_.cend());
		coefficient_ = nopt.coefficient_;
	}

	template <typename It>
	void copy_paulis(It&& begin, It&& end) {
		assert(std::distance(begin, end) == static_cast<decltype(std::distance(begin, end))>(size()));
		std::copy(begin, end, paulis_.begin());
	}

	operator ReadOnlyNonOwningPauliTerm<T>() const { return ReadOnlyNonOwningPauliTerm<T>(paulis_, coefficient_); }

	/**
	 * @brief Applies a Pauli gate to a specific qubit of the term.
	 */
	void apply_pauli(Pauli_gates g, unsigned qubit) { coefficient_ *= paulis_[qubit].apply_pauli(g); }

	/**
	 * @brief Applies a Clifford gate to a specific qubit of the term.
	 */
	void apply_clifford(Clifford_Gates_1Q g, unsigned qubit) { coefficient_ *= paulis_[qubit].apply_clifford(g); }

	/**
	 * @brief Applies a unital noise channel to a specific qubit of the term.
	 */
	void apply_unital_noise(UnitalNoise n, unsigned qubit, T p) {
		coefficient_ *= paulis_[qubit].apply_unital_noise(n, p);
	}

	/**
	 * @brief Applies a CNOT gate to the term.
	 * @pre Control and target qubits must be different.
	 */
	void apply_cx(unsigned control, unsigned target) {
		assert(control != target && "cx can't use same control and target");
		coefficient_ *= paulis_[control].apply_cx(paulis_[target]);
	}

	/**
	 * @brief Applies an Rz gate, potentially splitting the term.
	 * @return A new PauliTerm if the term is split, otherwise the new term is empty.
	 * @pre The operator on the target qubit must be X or Y.
	 */
	void apply_rz(unsigned qubit, T theta, NonOwningPauliTerm<T>& output) {
		assert(paulis_[qubit] != p_i && paulis_[qubit] != p_z && "Should not happen");

		auto cos_teta = cos(theta);
		auto sin_theta = sin(theta);

		coefficient_ *= cos_teta;

		// use commutators?
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
	 * @pre The operator on the target qubit must be X or Y.
	 */
	void apply_amplitude_damping_xy([[maybe_unused]] unsigned qubit, T p) {
		assert(paulis_[qubit] != p_z && paulis_[qubit] != p_i && "Should not happen");

		coefficient_ *= sqrt(1 - p);
	}

	/**
	 * @brief Applies the Z part of the amplitude damping channel, splitting the term.
	 * @return The new PauliTerm created by the split.
	 * @pre The operator on the target qubit must be Z.
	 */
	void apply_amplitude_damping_z(unsigned qubit, T p, NonOwningPauliTerm<T>& output) {
		assert(paulis_[qubit] == p_z && "Should not happen");
		output.copy_content(*this);
		output.coefficient_ *= p;
		output.paulis_[qubit] = p_i;

		coefficient_ *= (1 - p);
	}

	/**
	 * @brief Calculates the expectation value of this single term.
	 * @return The coefficient if the Pauli string contains only I and Z operators, otherwise 0.
	 */
	T expectation_value() const {
		return (std::all_of(paulis_.cbegin(), paulis_.cend(),
				    [](auto const& p) { return p.commutes_with(p_z); })) ?
			       coefficient_ :
			       T{ 0 };
	}

	Pauli& operator[](std::size_t idx) { return paulis_[idx]; }
	Pauli const& operator[](std::size_t idx) const { return paulis_[idx]; }
	decltype(auto) size() const { return paulis_.size(); }
	decltype(auto) begin() { return paulis_.begin(); }
	decltype(auto) begin() const { return paulis_.begin(); }
	decltype(auto) end() { return paulis_.end(); }
	decltype(auto) end() const { return paulis_.end(); }

	/**
	 * @brief Computes a hash of the Pauli string part of the term.
	 * @return A hash value.
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
	 * @brief Checks for equality between two NonOwningPauliTerm objects.
	 * @return True if the Pauli strings and coefficients are identical.
	 */
	friend bool operator==(NonOwningPauliTerm const& lhs, NonOwningPauliTerm const& rhs) {
		return (lhs.paulis_.size() == rhs.paulis_.size()) && (lhs.coefficient_ == rhs.coefficient_) &&
		       std::equal(lhs.paulis_.begin(), lhs.paulis_.end(), rhs.paulis_.begin());
	}

	/**
	 * @brief Checks if two NonOwningPauliTerm objects have the same Pauli string, ignoring the coefficient.
	 */
	bool equal_bitstring(NonOwningPauliTerm const& oth) const {
		return (paulis_.size() == oth.paulis_.size()) &&
		       std::equal(paulis_.cbegin(), paulis_.cend(), oth.paulis_.cbegin());
	}

	NonOwningPauliTerm& operator*=(T x) {
		coefficient_ *= x;
		assert(coefficient_ >= -1 && coefficient_ <= 1 && "Invalid coefficient");
		return *this;
	}

	/**
	 * @brief Adds a value to the term's coefficient.
	 * @warning The resulting coefficient must be between -1 and 1. This is enforced by an assertion.
	 */
	void add_coeff(T c) {
		coefficient_ += c;
		assert(c >= -1 && c <= 1 && "Invalid coefficient after merge");
	}

	/**
	 * @brief Gets the coefficient of the term.
	 */
	T const& coefficient() const noexcept { return coefficient_; }

	/**
	 * @brief Sets the coefficient of the term.
	 */
	void set_coefficient(T new_c) noexcept { coefficient_ = new_c; }

	/**
	 * @brief Calculates the Pauli weight of the term (number of non-identity operators).
	 */
	std::size_t pauli_weight() const {
		return std::accumulate(paulis_.cbegin(), paulis_.cend(), 0,
				       [](auto&& acc, auto&& p) { return acc + p.weight(); });
	}

	friend std::ostream& operator<<(std::ostream& os, NonOwningPauliTerm const& pt) {
		os << std::showpos << pt.coefficient_ << " ";
		for (auto const& p : pt.paulis_) {
			os << p;
		}
		return os;
	}
};

template <typename T>
struct std::hash<NonOwningPauliTerm<T>> {
	std::size_t operator()(NonOwningPauliTerm<T> const& pt) const noexcept { return pt.phash(); }
};

template <typename T>
struct PauliStringEqualNonOwning {
	bool operator()(const NonOwningPauliTerm<T>& lhs, const NonOwningPauliTerm<T>& rhs) const {
		return lhs.equal_bitstring(rhs);
	}
};
#endif
