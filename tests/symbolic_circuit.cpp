#include "gtest/gtest.h"

#include "pauli.hpp"
#include "symbolic/coefficient.hpp"
#include "observable.hpp"
#include "circuit.hpp"

using c_t = SymbolicCoefficient<coeff_t>;
using So_t = Observable<c_t>;
using Sc_t = Circuit<c_t>;

TEST(SymbolicCircuit, init) { Sc_t sqc{ 4 }; }
TEST(SymbolicCircuit, init_truncator) { Sc_t sqc{ 4, std::make_shared<NeverTruncator<c_t>>() }; }
TEST(SymbolicCircuit, init_truncator_noise_model) { Sc_t sqc{ 4, std::make_shared<NeverTruncator<c_t>>(), {} }; }
TEST(SymbolicCircuit, init_truncator_noise_model_policies) {
	Sc_t sqc{ 4,
		  std::make_shared<NeverTruncator<c_t>>(),
		  {},
		  std::make_shared<NeverPolicy>(),
		  std::make_shared<AlwaysBeforeSplittingPolicy>() };
}

TEST(SymbolicCircuit, simple_run) {
	Sc_t qc{ 1 };
	qc.add_operation("I", 0);
	auto res = qc.run({ "I" });
	EXPECT_FLOAT_EQ(res.expectation_value().evaluate(), 1.f);
}

TEST(SymbolicCircuit, run_paulis) {
	Sc_t qc{ 2 };

	// Paulis
	qc.add_operation("I", 0);
	qc.add_operation("X", 1);
	qc.add_operation("Y", 0);
	qc.add_operation("Z", 1);

	auto res = qc.run({ "II" });
	EXPECT_FLOAT_EQ(res.expectation_value().evaluate(), 1.f);
}

TEST(SymbolicCircuit, run_clifford) {
	Sc_t qc{ 2 };

	qc.add_operation("H", 0);
	qc.add_operation("H", 1);

	auto res = qc.run({ "ZZ" });
	EXPECT_FLOAT_EQ(res.expectation_value().evaluate(), 0.f);
}

TEST(SymbolicCircuit, run_cx) {
	Sc_t qc{ 2 };

	qc.add_operation("cx", 0, 1);

	auto res = qc.run({ "ZZ" });
	EXPECT_FLOAT_EQ(res.expectation_value().evaluate(), 1.f);
}

TEST(SymbolicCircuit, run_rz_const) {
	Sc_t qc{ 2 };

	qc.add_operation("H", 0);
	qc.add_operation("H", 1);

	qc.add_operation("rz", 0, 3.14159 / 3.f);
	qc.add_operation("rz", 1, 3.14159 / 4.f);

	qc.add_operation("H", 0);
	qc.add_operation("H", 1);

	auto res = qc.run({ "IZ", "ZI" });
	EXPECT_NEAR(res.expectation_value().evaluate(), 1.207108, 1e-4f);
}

TEST(SymbolicCircuit, run_rz_var) {
	Sc_t qc{ 2 };

	qc.add_operation("H", 0);
	qc.add_operation("H", 1);

	qc.add_operation("rz", 0, Variable("a"));
	qc.add_operation("rz", 1, Variable("b"));

	qc.add_operation("H", 0);
	qc.add_operation("H", 1);

	auto res = qc.run({ "IZ", "ZI" });
	EXPECT_NEAR(res.expectation_value().evaluate({ { "a", 3.14159 / 3.f }, { "b", 3.14159 / 4.f } }), 1.207108,
		    1e-4f);
}

TEST(SymbolicCircuit, run_unital_noise_const) {
	Sc_t qc{ 2 };

	qc.add_operation("Depolarizing", 0, 0.01f);
	qc.add_operation("Dephasing", 0, 0.02f);

	auto res = qc.run({ "ZZ" });
	EXPECT_NEAR(res.expectation_value().evaluate(), 0.990f, 1e-5f);
}

TEST(SymbolicCircuit, run_unital_noise_var) {
	Sc_t qc{ 2 };

	qc.add_operation("Depolarizing", 0, Variable("p1"));
	qc.add_operation("Dephasing", 0, Variable("p2"));

	auto res = qc.run({ "ZZ" });
	EXPECT_NEAR(res.expectation_value().evaluate({ { "p1", 0.01f }, { "p2", 0.02f } }), 0.990f, 1e-5f);
}

TEST(SymbolicCircuit, run_amplitude_damping_cst) {
	Sc_t qc{ 2 };

	qc.add_operation("H", 0);
	qc.add_operation("H", 1);

	qc.add_operation("AmplitudeDamping", 0, 0.01f);
	qc.add_operation("AmplitudeDamping", 1, 0.02f);

	auto res = qc.run({ "XZ" });
	EXPECT_NEAR(res.expectation_value().evaluate(), 0.01989, 1e-5f);
}

TEST(SymbolicCircuit, run_amplitude_damping_var) {
	Sc_t qc{ 2 };

	qc.add_operation("H", 0);
	qc.add_operation("H", 1);

	qc.add_operation("AmplitudeDamping", 0, Variable("p1"));
	qc.add_operation("AmplitudeDamping", 1, Variable("p2"));

	auto res = qc.run({ "XZ" });
	EXPECT_NEAR(res.expectation_value().evaluate({ { "p1", 0.01f }, { "p2", 0.02f } }), 0.01989, 1e-5f);
}

TEST(SymbolicCircuit, noise_model_cst) {
	NoiseModel<c_t> nm;
	nm.add_amplitude_damping_on_gate(QGate::Cx, 0.1f);
	nm.add_unital_noise_on_gate(QGate::Rz, UnitalNoise::Dephasing, 0.01f);
	nm.add_unital_noise_on_gate(QGate::H, UnitalNoise::Depolarizing, 0.01f);

	Sc_t sqc{ 2, std::make_shared<NeverTruncator<c_t>>(), nm };
	sqc.add_operation("H", 0);
	sqc.add_operation("H", 1);
	sqc.add_operation("Rz", 0, 3.14159 / 5.f);
	sqc.add_operation("cx", 0, 1);

	auto res = sqc.run({ "ZZ" });
	EXPECT_NEAR(res.expectation_value().evaluate(), 0.0100, 1e-5f);
}

TEST(SymbolicCircuit, noise_model_var) {
	NoiseModel<c_t> nm;
	nm.add_amplitude_damping_on_gate(QGate::Cx, Variable("p_ad"));
	nm.add_unital_noise_on_gate(QGate::Rz, UnitalNoise::Dephasing, Variable("p_deph"));
	nm.add_unital_noise_on_gate(QGate::H, UnitalNoise::Depolarizing, Variable("p_depo"));

	Sc_t sqc{ 2, std::make_shared<NeverTruncator<c_t>>(), nm };
	sqc.add_operation("H", 0);
	sqc.add_operation("H", 1);
	sqc.add_operation("Rz", 0, 3.14159 / 5.f);
	sqc.add_operation("cx", 0, 1);

	auto res = sqc.run({ "ZZ" });
	EXPECT_NEAR(res.expectation_value().evaluate({ { "p_ad", 0.1f }, { "p_deph", 0.01f }, { "p_depo", 0.01f } }),
		    0.0100, 1e-5f);
}
