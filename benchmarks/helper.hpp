#ifndef PP_BENCH_HELPER_HPP
#define PP_BENCH_HELPER_HPP

#include <string>
#include <cmath>

#include "pauli.hpp"
#include "pauli_term.hpp"

static constexpr coeff_t pi = M_PI;

Pauli random_pauli();
Pauli_gates random_pauli_gate();
Clifford_Gates_1Q random_clifford();
std::string random_pauli_string(unsigned length);
unsigned random_in(unsigned max);
coeff_t random_coeff();
PauliTerm<coeff_t> random_pauli_term(unsigned length);

template <typename Qc, typename Theta>
void rzz(Qc& qc, unsigned control, unsigned target, Theta const& theta) {
	qc.add_operation("cx", control, target);
	qc.add_operation("rz", target, theta);
	qc.add_operation("cx", control, target);
}

template <typename Qc, typename Theta>
void rx(Qc& qc, unsigned q, Theta const& theta) {
	qc.add_operation("h", q);
	qc.add_operation("rz", q, theta);
	qc.add_operation("h", q);
}

#endif
