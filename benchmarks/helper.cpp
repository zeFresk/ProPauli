#include <random>

#include "helper.hpp"

static std::mt19937 gen(0);

Pauli random_pauli() {
	static std::uniform_int_distribution<> dis(0, static_cast<unsigned>(Pauli_enum::Count) - 1);
	return Pauli{ static_cast<Pauli_enum>(dis(gen)) };
}

Pauli_gates random_pauli_gate() {
	static std::uniform_int_distribution<> dis(0, static_cast<unsigned>(Pauli_gates::Count) - 1);
	return static_cast<Pauli_gates>(dis(gen));
}

Clifford_Gates_1Q random_clifford() {
	if constexpr (std::to_underlying(Clifford_Gates_1Q::Count) > 1) {
		static std::uniform_int_distribution<> dis(0, static_cast<unsigned>(Clifford_Gates_1Q::Count) - 1);
		return static_cast<Clifford_Gates_1Q>(dis(gen));
	} else {
		return static_cast<Clifford_Gates_1Q>(0);
	}
}

std::string random_pauli_string(unsigned length) {
	static constexpr std::string_view chars = "IXYZ";
	static std::uniform_int_distribution<> dis(0, chars.size() - 1);
	std::string ret;
	ret.reserve(length);
	for (unsigned i = 0; i < length; ++i) {
		ret += chars[dis(gen)];
	}
	return ret;
}

unsigned random_in(unsigned max) {
	std::uniform_int_distribution<> dis(0, max);
	return dis(gen);
}

coeff_t random_coeff() {
	std::uniform_real_distribution<coeff_t> dis(-1, 1);
	return dis(gen);
}

PauliTerm<coeff_t> random_pauli_term(unsigned length) {
	auto bs = random_pauli_string(length);
	auto coeff = random_coeff();
	return PauliTerm{ bs, coeff };
}
