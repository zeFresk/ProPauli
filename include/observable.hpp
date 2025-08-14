#ifndef PP_OBSERVABLE_HPP
#define PP_OBSERVABLE_HPP

#include "pauli.hpp"
#include "pauli_term.hpp"

#include <algorithm>
#include <cstring>
#include <initializer_list>
#include <iostream>
#include <iterator>
#include <ostream>
#include <stdexcept>
#include <string_view>
#include <unordered_map>
#include <vector>

/**
 * @brief Represents a quantum observable as a linear combination of Pauli strings.
 * @tparam T The numeric type for the coefficients (e.g., float, double).
 *
 * An `Observable` is a sum of `PauliTerm` objects, each consisting of a Pauli
 * string and a coefficient. This class is the central data structure in the
 * Pauli back-propagation simulation. Quantum gates are applied to this object,
 * evolving it backward in the Heisenberg picture.
 */
template <typename T = coeff_t>
class Observable {
    public:
	/**
	 * @brief Constructs an observable from a single Pauli string.
	 * @param pauli_string A string representing the Pauli operators (e.g., "IXYZ").
	 * @param coeff The coefficient of this Pauli term.
	 *
	 * @snippet tests/snippets/observable.cpp observable_from_string
	 */
	Observable(std::string_view pauli_string, T coeff = T{ 1 }) : paulis_({ PauliTerm<T>(pauli_string, coeff) }) {
		check_invariant();
	}

	/**
	 * @brief Constructs an observable from a list of Pauli strings.
	 * @param pauli_string_list An initializer list of Pauli strings. Each will have a coefficient of 1.
	 *
	 * @snippet tests/snippets/observable.cpp observable_from_string_list
	 */
	Observable(std::initializer_list<std::string_view> pauli_string_list)
		: paulis_(pauli_string_list.begin(), pauli_string_list.end()) {
		check_invariant();
	}

	/**
	 * @brief Constructs an observable from a list of PauliTerm objects.
	 * @param paulis_list An initializer list of `PauliTerm` objects.
	 *
	 * @snippet tests/snippets/observable.cpp observable_from_pauli_terms
	 */
	Observable(std::initializer_list<PauliTerm<T>> paulis_list) : paulis_{ paulis_list } { check_invariant(); }

	/**
	 * @brief Constructs an observable from a range of PauliTerm objects.
	 * @tparam Iter An iterator type.
	 * @param begin An iterator to the beginning of the range.
	 * @param end An iterator to the end of the range.
	 *
	 * @snippet tests/snippets/observable.cpp observable_from_iterators
	 */
	template <typename Iter>
	Observable(Iter&& begin, Iter&& end) : paulis_{ begin, end } {
		check_invariant();
	}

	/**
	 * @brief Applies a single-qubit Pauli gate to the observable.
	 * @param g The Pauli gate to apply.
	 * @param qubit The index of the qubit to apply the gate to.
	 */
	void apply_pauli(Pauli_gates g, unsigned qubit) {
		check_qubit(qubit);
		for (auto& p : paulis_) {
			p.apply_pauli(g, qubit);
		}
	}

	/**
	 * @brief Applies a single-qubit Clifford gate to the observable.
	 * @param g The Clifford gate to apply (e.g., Hadamard).
	 * @param qubit The index of the qubit to apply the gate to.
	 */
	void apply_clifford(Clifford_Gates_1Q g, unsigned qubit) {
		check_qubit(qubit);
		for (auto& p : paulis_) {
			p.apply_clifford(g, qubit);
		}
	}

	/**
	 * @brief Applies a single-qubit unital noise channel to the observable.
	 * @param n The type of unital noise (e.g., Depolarizing, Dephasing).
	 * @param qubit The index of the qubit to apply the noise to.
	 * @param p The noise probability parameter.
	 */
	void apply_unital_noise(UnitalNoise n, unsigned qubit, T p) {
		check_qubit(qubit);
		for (auto& pi : paulis_) {
			pi.apply_unital_noise(n, qubit, p);
		}
	}

	/**
	 * @brief Applies a CNOT (CX) gate to the observable.
	 * @param qubit_control The index of the control qubit.
	 * @param qubit_target The index of the target qubit.
	 */
	void apply_cx(unsigned qubit_control, unsigned qubit_target) {
		check_qubit(qubit_control);
		check_qubit(qubit_target);
		if (qubit_control == qubit_target) {
			throw std::invalid_argument("cx gate target must be != from control.");
		}

		for (auto& p : paulis_) {
			p.apply_cx(qubit_control, qubit_target);
		}
	}

	/**
	 * @brief Applies a single-qubit Rz rotation gate to the observable.
	 * @param qubit The index of the qubit to apply the rotation to.
	 * @param theta The rotation angle in radians.
	 *
	 * @note This is a "splitting" operation. Applying an Rz gate to a Pauli term
	 * containing an X or Y operator on the target qubit will result in two
	 * output Pauli terms, potentially doubling the size of the observable.
	 */
	void apply_rz(unsigned qubit, T theta) {
		check_qubit(qubit);
		// paulis_.reserve(paulis_.size() * 2);
		const auto nb_terms = paulis_.size();
		for (std::size_t i = 0; i < nb_terms;
		     ++i) { // no range based loop (insert at the end -> use after free)
			auto& p = paulis_[i];
			if (!p[qubit].commutes_with(p_z)) {
				auto new_path = p.apply_rz(qubit, theta);
				paulis_.push_back(std::move(new_path));
			}
		}
	}

	/**
	 * @brief Applies an amplitude damping noise channel.
	 * @param qubit The index of the qubit to apply the channel to.
	 * @param pn The noise probability parameter.
	 *
	 * @note This can be a "splitting" operation. If the Pauli term has a Z operator
	 * on the target qubit, the term will be split into two. If it has X or Y, the
	 * coefficient is simply scaled. If it has I, there is no effect.
	 */
	void apply_amplitude_damping(unsigned qubit, T pn) {
		check_qubit(qubit);
		// paulis_.reserve(paulis_.size() * 2);
		const auto nb_terms = paulis_.size();
		for (std::size_t i = 0; i < nb_terms; ++i) {
			auto& p = paulis_[i];
			if (p[qubit] == p_z) {
				auto new_path = p.apply_amplitude_damping_z(qubit, pn);
				paulis_.push_back(std::move(new_path));
			} else if (p[qubit] == p_x || p[qubit] == p_y) {
				p.apply_amplitude_damping_xy(qubit, pn);
			}
		}
	}

	/**
	 * @brief Calculates the expectation value of the observable.
	 * @return The expectation value.
	 *
	 * The expectation value is calculated by summing the coefficients of all Pauli terms
	 * that commute with Z on all qubits (i.e., contain only I and Z operators).
	 */
	T expectation_value() const {
		T ret = 0;
		for (auto const& pt : paulis_) {
			ret += pt.expectation_value();
		}
		return ret;
	}

	/** @brief Accesses a specific PauliTerm in the observable. */
	PauliTerm<T>& operator[](std::size_t idx) { return paulis_[idx]; }
	/** @brief Accesses a specific PauliTerm in the observable (const version). */
	PauliTerm<T> const& operator[](std::size_t idx) const { return paulis_[idx]; }
	/** @brief Returns an iterator to the beginning of the PauliTerm vector. */
	decltype(auto) begin() { return paulis_.begin(); }
	/** @brief Returns a const iterator to the beginning of the PauliTerm vector. */
	decltype(auto) begin() const { return paulis_.begin(); }
	/** @brief Returns a const iterator to the beginning of the PauliTerm vector. */
	decltype(auto) cbegin() const { return paulis_.cbegin(); }
	/** @brief Returns an iterator to the end of the PauliTerm vector. */
	decltype(auto) end() { return paulis_.end(); }
	/** @brief Returns a const iterator to the end of the PauliTerm vector. */
	decltype(auto) end() const { return paulis_.end(); }
	/** @brief Returns a const iterator to the end of the PauliTerm vector. */
	decltype(auto) cend() const { return paulis_.cend(); }
	/** @brief Gets the number of Pauli terms in the observable. */
	std::size_t size() const { return paulis_.size(); }
	/* @brief Get the number of qubits of this Observable */
	std::size_t nb_qubits() const { return paulis_[0].size(); }

	/**
	 * @brief Merges Pauli terms with identical Pauli strings.
	 * @return The number of terms after the merge.
	 *
	 * This function iterates through all Pauli terms in the observable. If two or more
	 * terms have the same Pauli string, their coefficients are added together, and they are
	 * replaced by a single term. This is a crucial optimization for reducing the complexity of the simulation.
	 */
	std::size_t merge() {
		// associate pauli string hash with new Pauli Term
		std::unordered_map<PauliTerm<T>, PauliTerm<T>, std::hash<PauliTerm<T>>, PauliStringEqual<T>> hmap;
		hmap.reserve(paulis_.size());

		// if new pauli string, copy pauli term, else merge
		for (auto const& p : paulis_) {
			auto [it, is_new] = hmap.emplace(p, p);
			if (!is_new) { // element already exists
				it->second.add_coeff(p.coefficient());
			}
		}

		std::vector<PauliTerm<T>> new_pts;
		new_pts.reserve(hmap.size());
		for (auto&& [ph, pt] : hmap) {
			new_pts.push_back(std::move(pt));
		}
		paulis_ = std::move(new_pts);
		return new_pts.size();
	}

	/**
	 * @brief Truncates the observable based on a given truncation strategy.
	 * @tparam Truncator The type of the truncator object.
	 * @param truncator The truncator object that defines the truncation logic.
	 * @return The number of Pauli terms removed.
	 * @see Truncator
	 */
	template <typename Truncator>
	std::size_t truncate(Truncator&& truncator) {
		auto ret = truncator.truncate(paulis_);
		if (paulis_.size() == 0) {
			const auto warn_env = std::getenv("WARN_EMPTY_TREE");
			if (warn_env == nullptr || strcmp(warn_env, "0") != 0) {
				std::cerr
					<< "[ProPauli] Warning: truncation lead to empty tree. Disable this warning by setting `WARN_EMPTY_TREE=0`, if this is intended."
					<< std::endl;
			}
		}
		return ret;
	}

	friend bool operator==(Observable const& lhs, Observable const& rhs) {
		return lhs.size() == rhs.size() && std::equal(lhs.cbegin(), lhs.cend(), rhs.cbegin());
	}

    private:
	std::vector<PauliTerm<T>> paulis_;

	void check_invariant() const {
		if (paulis_.size() == 0) {
			throw std::invalid_argument("Can't have empty observable (no terms)");
		}
		const auto nb_qubits = paulis_[0].size();
		if (nb_qubits == 0) {
			throw std::invalid_argument("0 qubit observable not allowed.");
		}
		if (!std::all_of(paulis_.cbegin(), paulis_.cend(),
				 [=](auto const& pt) { return pt.size() == nb_qubits; })) {
			throw std::invalid_argument("Can't have observable with mismatching number of qubits.");
		}
	}

	void check_qubit(unsigned qubit) const {
		if (qubit < 0 || qubit >= nb_qubits()) {
			throw std::invalid_argument("Qubit index out of range.");
		}
	}
};

template <typename T>
std::ostream& operator<<(std::ostream& os, Observable<T> const& obs) {
	bool first = true;
	for (auto const& pt : obs) {
		if (!first) {
			os << " ";
		}
		os << pt;

		first = false;
	}
	return os;
}

#endif
