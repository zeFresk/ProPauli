#include "circuit.hpp"

#include "gtest/gtest.h"
#include "pauli.hpp"

TEST(Circuits, init) {
	Circuit<NeverTruncator> qc{4};
	EXPECT_EQ(qc.nb_qubits(), 4);
}
