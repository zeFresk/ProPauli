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

#endif
