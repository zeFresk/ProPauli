#ifndef PP_PAULI_TERM_HPP
#define PP_PAULI_TERM_HPP

#include "pauli.hpp"
#include "maths.hpp"

#include <string_view>
#include <initializer_list>
#include <vector>
#include <cassert>

template <class T>
class PauliTerm {
    private:
	std::vector<Pauli> paulis_;
	T coefficient_;

    public:
	PauliTerm(std::string_view pauli_string, T coefficient = T{ 1. })
		: paulis_(pauli_string.begin(), pauli_string.end()), coefficient_(coefficient) {}

	PauliTerm(std::initializer_list<Pauli> pauli_list, T coefficient = T{ 1. })
		: paulis_(pauli_list), coefficient_(coefficient) {}


	void apply_pauli(Pauli_gates g, unsigned qubit) {
		coefficient_ *= paulis_[qubit].apply_pauli(g);
	}

	void apply_clifford(Clifford_Gates_1Q g, unsigned qubit) {
		coefficient_ *= paulis_[qubit].apply_clifford(g);
	}

	void apply_cx(unsigned control, unsigned target) {
		coefficient_ *= paulis_[control].apply_cx(paulis_[target]);
	}

	PauliTerm<T> apply_rz(unsigned qubit, T theta) {
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

	Pauli& operator[](std::size_t idx) { return paulis_[idx]; }
	Pauli const& operator[](std::size_t idx) const { return paulis_[idx]; }
};

#endif
