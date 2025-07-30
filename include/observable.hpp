#ifndef PP_OBSERVABLE_HPP
#define PP_OBSERVABLE_HPP

#include "pauli.hpp"
#include "pauli_term.hpp"

#include <initializer_list>
#include <string_view>
#include <vector>

template <typename T>
class Observable {
    public:
	Observable(std::string_view pauli_string) : paulis_({ PauliTerm<T>(pauli_string) }) {}

	Observable(std::initializer_list<std::string_view> pauli_string_list)
		: paulis_(pauli_string_list.begin(), pauli_string_list.end()) {}

	Observable(std::initializer_list<PauliTerm<T>> paulis_list) : paulis_{ paulis_list } {}

	template <typename Iter>
	Observable(Iter&& begin, Iter&& end) : paulis_{ begin, end } {}

	void apply_pauli(Pauli_gates g, unsigned qubit) {
		for (auto& p : paulis_) {
			p.apply_pauli(g, qubit);
		}
	}

	void apply_clifford(Clifford_Gates_1Q g, unsigned qubit) {
		for (auto& p : paulis_) {
			p.apply_clifford(g, qubit);
		}
	}	

	void apply_cx(unsigned qubit_control, unsigned qubit_target) {
		for (auto& p : paulis_) {
			p.apply_cx(qubit_control, qubit_target);
		}
	}

	void apply_rz(unsigned qubit, T theta) {
		//paulis_.reserve(paulis_.size() * 2);
		for (auto& p : paulis_) {
			if (!(p[qubit] == p_i || p[qubit] == p_z)) {
				auto new_path = p.apply_rz(qubit, theta);
				paulis_.push_back(std::move(new_path));
			}
		}
	}

    private:
	std::vector<PauliTerm<T>> paulis_;
};

#endif
