#include <vector>
#include "gtest/gtest.h"

#include "pauli_axis.hpp"
#include "pauli.hpp"

TEST(PauliAxis, init) {
	std::vector<Pauli> paulis{ p_i, p_x, p_y, p_z };
	PauliAxis<> axis{ paulis };
	PauliAxis<> axis2{ paulis.begin(), paulis.end() };
	EXPECT_EQ(axis.raw_bits(), std::vector<std::uint8_t>{ 0b11100100 });
	EXPECT_EQ(axis2.raw_bits(), std::vector<std::uint8_t>{ 0b11100100 });
}

TEST(PauliAxis, size) {
	std::vector<Pauli> paulis{ p_i, p_x, p_y, p_z };
	PauliAxis<> axis{ paulis };
	EXPECT_EQ(axis.nb_qubits(), paulis.size());
}

TEST(PauliAxis, access_pauli) {
	std::vector<Pauli> paulis{ p_i, p_x, p_y, p_z };
	PauliAxis<> axis{ paulis };
	ASSERT_EQ(axis.nb_qubits(), paulis.size());
	for (std::size_t i = 0; i < paulis.size(); ++i) {
		EXPECT_EQ(axis[i], paulis[i]);
	}
}
