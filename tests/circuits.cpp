#include "circuit.hpp"

#include "gtest/gtest.h"
#include "scheduler.hpp"

TEST(Circuit, init) {
	Circuit<NeverTruncator> qc{ 4 };
	EXPECT_EQ(qc.nb_qubits(), 4);
}

TEST(Circuit, init_with_truncator) { Circuit qc{ 4, CoefficientTruncator<>{ 0.001 } }; }

TEST(Circuit, init_with_truncator_noise_model) { Circuit qc{ 4, CoefficientTruncator<>{ 0.001 }, {} }; }

TEST(Circuit, init_with_truncator_noise_model_policies) {
	Circuit qc{ 4,
		    CoefficientTruncator<>{ 0.001 },
		    {},
		    std::make_unique<NeverPolicy>(),
		    std::make_unique<AlwaysBeforeSplittingPolicy>() };
}

TEST(Circuit, add_string_pauli) {
	Circuit qc{ 2 };
	qc.add_operation("I", 0);
	qc.add_operation("X", 0);
	qc.add_operation("Y", 0);
	qc.add_operation("Z", 0);
}

TEST(Circuit, add_string_clifford) {
	Circuit qc{ 2 };
	qc.add_operation("H", 0);
}

TEST(Circuit, add_string_rz) {
	Circuit qc{ 2 };
	qc.add_operation("RZ", 0, 3.14f);
}

TEST(Circuit, add_string_cx) {
	Circuit qc{ 2 };
	qc.add_operation("CX", 0u, 1u);
}

TEST(Circuit, add_string_noises) {
	Circuit qc{ 2 };
	qc.add_operation("AMPLITUDEDAMPING", 0, 0.01f);
	qc.add_operation("DEPOLARIZING", 0, 0.01f);
	qc.add_operation("DEPHASING", 0, 0.01f);
}

TEST(Circuit, add_string_badgatethrow) {
	Circuit qc{ 2 };
	EXPECT_THROW({ qc.add_operation("globi", 0); }, std::out_of_range);
}
