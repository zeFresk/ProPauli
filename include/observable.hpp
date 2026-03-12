#ifndef PP_OBSERVABLE_HPP
#define PP_OBSERVABLE_HPP

/**
 * @file observable.hpp
 * @brief Defines the main Observable class used in the simulation.
 *
 * This file contains the `Observable` class, which represents a quantum observable
 * as a linear combination of Pauli strings. It serves as the primary data structure
 * that is evolved backward in time under the action of quantum gates in the
 * Heisenberg picture.
 */

#include "pauli.hpp"
#include "pauli_axis.hpp"
#include "pauli_term.hpp"
#include "pauli_term_container.hpp"
#include "symbolic/coefficient.hpp"
#include "merge.hpp"
#include "policy.hpp"

#include <cstring>
#include <initializer_list>
#include <iostream>
#include <ostream>
#include <stdexcept>
#include <string_view>
#include <type_traits>
#include <unordered_map>

/**
 * @brief Represents a quantum observable as a linear combination of Pauli strings.
 * @tparam T The numeric type for the coefficients (e.g., float, double).
 *
 * An `Observable` is a sum of Pauli terms. This class is the central data structure
 * in the Pauli back-propagation simulation. It is implemented using a memory-efficient
 * `PauliTermContainer` to store its terms. Quantum gates are applied to this object,
 * evolving it backward in the Heisenberg picture.
 */
template <typename T = coeff_t>
class Observable {
    public:
	/** @name Constructors
	 * Ways to construct an Observable.
	 * @{
	 */

	/**
	 * @brief Constructs an observable from a single Pauli string.
	 * @param pauli_string A string representing the Pauli operators (e.g., "IXYZ").
	 * @param coeff The coefficient of this Pauli term.
	 * @snippet tests/snippets/observable.cpp observable_from_string
	 */
	Observable(std::string_view pauli_string, typename std::enable_if_t<std::is_constructible_v<T, coeff_t>, T> coeff = T{ 1 })
		: paulis_{ PauliTerm<T>(pauli_string, coeff) }, error_truncate{ T{ 0 } } {
		check_invariant();
	}

	/**
	 * @brief Constructs an observable from a list of Pauli strings.
	 * @param pauli_string_list An initializer list of Pauli strings. Each will have a coefficient of 1.
	 * @snippet tests/snippets/observable.cpp observable_from_string_list
	 */
	Observable(std::initializer_list<std::string_view> pauli_string_list) : paulis_{ pauli_string_list }, error_truncate{ T{ 0 } } {
		check_invariant();
	}

	/**
	 * @brief Constructs an observable from a list of PauliTerm objects.
	 * @param paulis_list An initializer list of `PauliTerm` objects.
	 * @snippet tests/snippets/observable.cpp observable_from_pauli_terms
	 */
	Observable(std::initializer_list<PauliTerm<T>> paulis_list) : paulis_{ paulis_list }, error_truncate{ T{ 0 } } {
		check_invariant();
	}

	/**
	 * @brief Constructs an observable from a range of PauliTerm-like objects.
	 * @tparam Iter An iterator type.
	 * @param begin An iterator to the beginning of the range.
	 * @param end An iterator to the end of the range.
	 * @snippet tests/snippets/observable.cpp observable_from_iterators
	 */
	template <PauliTermIterator Iter>
	Observable(Iter&& begin, Iter&& end) : paulis_{ begin, end }, error_truncate{ T{ 0 } } {
		check_invariant();
	}
	/** @} */

	/** @name Gate Application
	 * Methods for applying quantum gates to the observable.
	 * @{
	 */

	/**
	 * @brief Applies a single-qubit Pauli gate to the observable.
	 * @param g The Pauli gate to apply.
	 * @param qubit The index of the qubit to apply the gate to.
	 * @pre `qubit` must be a valid index less than `nb_qubits()`.
	 */
	template <IsNotVariant ExecutionPolicy = DefaultExecutionPolicy>
	void apply_pauli(Pauli_gates g, unsigned qubit, ExecutionPolicy&& policy = ExecutionPolicy{}) {
		check_qubit(qubit);
		using Policy_t = std::remove_cvref_t<decltype(policy)>;
		Policy_t::apply_pauli(paulis_, g, qubit);
	}

	template <IsVariant DynamicPolicy>
	void apply_pauli(Pauli_gates g, unsigned qubit, DynamicPolicy&& rpol) {
		return std::visit([&, this](auto const& pol) { return this->apply_pauli(g, qubit, pol); }, rpol);
	}

	/**
	 * @brief Applies a single-qubit Clifford gate to the observable.
	 * @param g The Clifford gate to apply (e.g., Hadamard).
	 * @param qubit The index of the qubit to apply the gate to.
	 * @pre `qubit` must be a valid index less than `nb_qubits()`.
	 */
	template <IsNotVariant ExecutionPolicy = DefaultExecutionPolicy>
	void apply_clifford(Clifford_Gates_1Q g, unsigned qubit, ExecutionPolicy&& policy = ExecutionPolicy{}) {
		check_qubit(qubit);
		using Policy_t = std::remove_cvref_t<decltype(policy)>;
		Policy_t::apply_clifford(paulis_, g, qubit);
	}

	template <IsVariant DynamicPolicy>
	void apply_clifford(Clifford_Gates_1Q g, unsigned qubit, DynamicPolicy&& rpol) {
		return std::visit([&, this](auto const& pol) { return this->apply_clifford(g, qubit, pol); }, rpol);
	}

	/**
	 * @brief Applies a single-qubit unital noise channel to the observable.
	 * @param n The type of unital noise (e.g., Depolarizing, Dephasing).
	 * @param qubit The index of the qubit to apply the noise to.
	 * @param p The noise probability parameter.
	 * @pre `qubit` must be a valid index less than `nb_qubits()`.
	 */
	template <IsNotVariant ExecutionPolicy = DefaultExecutionPolicy>
	void apply_unital_noise(UnitalNoise n, unsigned qubit, T p, ExecutionPolicy&& policy = ExecutionPolicy{}) {
		check_qubit(qubit);
		using Policy_t = std::remove_cvref_t<decltype(policy)>;
		Policy_t::apply_unital_noise(paulis_, n, qubit, p);
	}

	template <IsVariant DynamicPolicy>
	void apply_unital_noise(UnitalNoise n, unsigned qubit, T p, DynamicPolicy&& rpol) {
		return std::visit([&, this](auto const& pol) { return this->apply_unital_noise(n, qubit, p, pol); }, rpol);
	}

	/**
	 * @brief Applies a CNOT (CX) gate to the observable.
	 * @param qubit_control The index of the control qubit.
	 * @param qubit_target The index of the target qubit.
	 * @pre `qubit_control` and `qubit_target` must be valid and distinct qubit indices.
	 */
	template <IsNotVariant ExecutionPolicy = DefaultExecutionPolicy>
	void apply_cx(unsigned qubit_control, unsigned qubit_target, ExecutionPolicy&& policy = ExecutionPolicy{}) {
		check_qubit(qubit_control);
		check_qubit(qubit_target);
		if (qubit_control == qubit_target) {
			throw std::invalid_argument("cx gate target must be != from control.");
		}

		using Policy_t = std::remove_cvref_t<decltype(policy)>;
		Policy_t::apply_cx(paulis_, qubit_control, qubit_target);
	}

	template <IsVariant DynamicPolicy>
	void apply_cx(unsigned qubit_control, unsigned qubit_target, DynamicPolicy&& rpol) {
		return std::visit([&, this](auto const& pol) { return this->apply_cx(qubit_control, qubit_target, pol); }, rpol);
	}

	/**
	 * @brief Applies a single-qubit Rz rotation gate to the observable.
	 * @param qubit The index of the qubit to apply the rotation to.
	 * @param theta The rotation angle in radians.
	 * @note This is a **splitting** operation. Applying an Rz gate to a Pauli term
	 * containing an X or Y operator on the target qubit will result in two
	 * output Pauli terms. This can increase the size of the observable, often
	 * necessitating a subsequent `merge()` or `truncate()` call.
	 */
	template <IsNotVariant ExecutionPolicy = DefaultExecutionPolicy>
	void apply_rz(unsigned qubit, T theta, ExecutionPolicy&& policy = ExecutionPolicy{}) {
		check_qubit(qubit);
		using Policy_t = std::remove_cvref_t<decltype(policy)>;
		Policy_t::apply_rz(paulis_, qubit, theta);
	}

	template <IsVariant DynamicPolicy>
	void apply_rz(unsigned qubit, T theta, DynamicPolicy&& rpol) {
		return std::visit([&, this](auto const& pol) { return this->apply_rz(qubit, theta, pol); }, rpol);
	}

	template <IsNotVariant ExecutionPolicy = DefaultExecutionPolicy>
	void apply_rp(PauliAxis<> const& axis, T theta, ExecutionPolicy&& policy = ExecutionPolicy{}) {
		if (axis.nb_qubits() != nb_qubits()) {
			throw std::invalid_argument{ "Rotation axis length doesn't match observable size!" };
		}
		using Policy_t = std::remove_cvref_t<decltype(policy)>;
		Policy_t::apply_rp(paulis_, axis, theta);
	}

	template <IsVariant DynamicPolicy>
	void apply_rp(PauliAxis<> const& axis, T theta, DynamicPolicy&& rpol) {
		return std::visit([&, this](auto const& pol) { return this->apply_rp(axis, theta, pol); }, rpol);
	}

	template <IsNotVariant ExecutionPolicy = DefaultExecutionPolicy>
	void apply_u3(unsigned qubit, T theta, T phi, T lambda, ExecutionPolicy&& policy = ExecutionPolicy{}) {
		check_qubit(qubit);
		using Policy_t = std::remove_cvref_t<decltype(policy)>;
		Policy_t::apply_u3(paulis_, qubit, theta, phi, lambda);
	}

	template <IsVariant DynamicPolicy>
	void apply_u3(unsigned qubit, T theta, T phi, T lambda, DynamicPolicy&& rpol) {
		return std::visit([&, this](auto const& pol) { return this->apply_u3(qubit, theta, phi, lambda, pol); }, rpol);
	}

	/**
	 * @brief Applies an amplitude damping noise channel.
	 * @param qubit The index of the qubit to apply the channel to.
	 * @param pn The noise probability parameter.
	 * @note This can be a **splitting** operation. If a term has a Z operator on the
	 * target qubit, it will be split into two. If it has X or Y, its coefficient is
	 * simply scaled. If it has I, there is no effect.
	 */
	template <IsNotVariant ExecutionPolicy = DefaultExecutionPolicy>
	void apply_amplitude_damping(unsigned qubit, T pn, ExecutionPolicy&& policy = ExecutionPolicy{}) {
		check_qubit(qubit);
		using Policy_t = std::remove_cvref_t<decltype(policy)>;
		Policy_t::apply_amplitude_damping(paulis_, qubit, pn);
	}

	template <IsVariant DynamicPolicy>
	void apply_amplitude_damping(unsigned qubit, T pn, DynamicPolicy&& rpol) {
		return std::visit([&, this](auto const& pol) { return this->apply_amplitude_damping(qubit, pn, pol); }, rpol);
	}
	/** @} */

	/**
	 * @brief Calculates the expectation value of the observable.
	 * @return The expectation value.
	 *
	 * The expectation value is the sum of coefficients of all Pauli terms composed
	 * entirely of I and Z operators. These are the terms that are diagonal in the
	 * computational basis.
	 */
	template <IsNotVariant ExecutionPolicy = DefaultExecutionPolicy>
	T expectation_value(ExecutionPolicy&& policy = ExecutionPolicy{}) const {
		using Policy_t = std::remove_cvref_t<decltype(policy)>;
		return Policy_t::expectation_value(paulis_);
	}

	template <IsVariant DynamicPolicy>
	T expectation_value(DynamicPolicy&& rpol) const {
		return std::visit([this](auto const& pol) { return this->expectation_value(pol); }, rpol);
	}

	/** @name Container Interface
	 * Methods to interact with the Observable like a container.
	 * @{
	 */

	/**
	 * @brief Accesses a specific Pauli term via a non-owning view.
	 * @return A lightweight view of the term. Modifying it modifies the observable directly.
	 */
	auto operator[](std::size_t idx) { return paulis_[idx]; }
	/** @brief Accesses a specific Pauli term via a read-only non-owning view. */
	auto operator[](std::size_t idx) const { return paulis_[idx]; }

	/** @brief Returns an iterator to the beginning of the terms. */
	decltype(auto) begin() { return paulis_.begin(); }
	/** @brief Returns a const iterator to the beginning of the terms. */
	decltype(auto) begin() const { return paulis_.begin(); }
	/** @brief Returns a const iterator to the beginning of the terms. */
	decltype(auto) cbegin() const { return paulis_.cbegin(); }
	/** @brief Returns an iterator to the end of the terms. */
	decltype(auto) end() { return paulis_.end(); }
	/** @brief Returns a const iterator to the end of the terms. */
	decltype(auto) end() const { return paulis_.end(); }
	/** @brief Returns a const iterator to the end of the terms. */
	decltype(auto) cend() const { return paulis_.cend(); }

	/** @brief Gets the number of Pauli terms in the observable. */
	std::size_t size() const { return paulis_.nb_terms(); }
	/** @brief Gets the number of qubits in the observable. */
	std::size_t nb_qubits() const { return paulis_.nb_qubits(); }

	/**
	 * @brief Creates an owning copy of a term at a specific index.
	 * @param idx The index of the term to copy.
	 * @return An owning `PauliTerm<T>` object.
	 * @note This is a potentially expensive operation as it involves constructing a new object.
	 */
	PauliTerm<T> copy_term(std::size_t idx) const {
		if (idx >= size()) {
			throw std::invalid_argument("Index out of range");
		}
		auto nopt = (*this)[idx];
		return static_cast<PauliTerm<T>>(nopt);
	}
	/** @} */

	/**
	 * @brief Merges terms with identical Pauli strings by summing their coefficients.
	 * @return The number of terms remaining after the merge.
	 *
	 * This is a crucial optimization for reducing the complexity of the simulation.
	 * It calls a high-performance, in-place merging algorithm.
	 */
	template <IsNotVariant ExecutionPolicy = DefaultExecutionPolicy>
	std::size_t merge(ExecutionPolicy&& policy = ExecutionPolicy{}) {
		using Policy_t = std::remove_cvref_t<decltype(policy)>;
		using Merger_t = Policy_t::template Merger<T>;
		std::get<Merger_t>(merger_)(paulis_);
		return paulis_.nb_terms();
	}

	template <IsVariant DynamicPolicy>
	auto merge(DynamicPolicy&& rpol) {
		return std::visit([this](auto const& pol) { return this->merge(pol); }, rpol);
	}

	/**
	 * @brief Truncates the observable based on a given truncation strategy.
	 * @tparam TruncatorImpl The type of the truncator object, which must satisfy the Truncator interface.
	 * @param truncator The truncator object that defines the truncation logic.
	 * @return The number of Pauli terms removed.
	 * @see Truncator
	 */
	template <typename TruncatorImpl>
	std::size_t truncate(TruncatorImpl&& truncator) {
		auto ret = truncator.truncate(paulis_, error_truncate);
		if (paulis_.nb_terms() == 0) {
			const auto warn_env = std::getenv("WARN_EMPTY_TREE");
			if (warn_env == nullptr || strcmp(warn_env, "0") != 0) {
				std::cerr
					<< "[ProPauli] Warning: truncation lead to empty tree. Disable this warning by setting `WARN_EMPTY_TREE=0`, if this is intended."
					<< std::endl;
			}
		}
		return ret;
	}

	T const& truncate_error() const { return error_truncate; }

	void set_truncate_error(T const& new_error) { error_truncate = new_error; }

	friend bool operator==(Observable const& lhs, Observable const& rhs) {
		return lhs.size() == rhs.size() && lhs.paulis_ == rhs.paulis_;
	}

	bool constexpr is_symbolic() const { return Symbolic<T>; }

	template <typename U = T, std::enable_if_t<std::is_same_v<U, T> && Symbolic<U>, bool> = true>
	void simplify(std::unordered_map<std::string, typename U::Underlying_t> const& variables = {}) {
		for (std::size_t i = 0; i < paulis_.nb_terms(); ++i) {
			paulis_[i].simplify(variables);
		}
	}

    private:
	PauliTermContainer<T> paulis_;
	RuntimeMerger<T> merger_;
	T error_truncate;

	void check_invariant() const {
		if (paulis_.nb_terms() == 0) {
			throw std::invalid_argument("Can't have empty observable (no terms)");
		}
		const auto nb_qubits = this->nb_qubits();
		if (nb_qubits == 0) {
			throw std::invalid_argument("0 qubit observable not allowed.");
		}
	}

	void check_qubit(unsigned qubit) const {
		if (qubit >= nb_qubits()) {
			throw std::invalid_argument("Qubit index out of range.");
		}
	}
};

/**
 * @brief Prints the observable to an output stream.
 * @relates Observable
 * @note This can be an expensive operation for large observables.
 */
template <typename T>
std::ostream& operator<<(std::ostream& os, Observable<T> const& obs) {
	bool first = true;
	for (std::size_t i = 0; i < obs.size(); ++i) {
		if (!first) {
			if constexpr (Symbolic<T>) {
				os << " + ";
			} else {
				os << " ";
			}
		}
		// copy_term is needed because the stream operator is defined for owning PauliTerm

		os << obs.copy_term(i);
		first = false;
	}
	return os;
}

#endif
