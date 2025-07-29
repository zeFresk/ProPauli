#include "circuit.hpp"

#include "gtest/gtest.h"

TEST(Circuits, init) {
	Circuit qc{4};
	EXPECT_EQ(qc.nb_qubits(), 4);
}
