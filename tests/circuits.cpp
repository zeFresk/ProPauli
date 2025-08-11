#include "circuit.hpp"

#include "gtest/gtest.h"
#include "pauli.hpp"
#include "scheduler.hpp"
#include <cmath>

static constexpr coeff_t pi = M_PI;

TEST(Circuit, init) {
	Circuit qc{ 4 };
	EXPECT_EQ(qc.nb_qubits(), 4);
}

TEST(Circuit, init_with_truncator) { Circuit qc(4, std::make_unique<CoefficientTruncator<>>(0.001)); }

TEST(Circuit, init_with_truncator_noise_model) { Circuit qc{ 4, std::make_unique<CoefficientTruncator<>>(0.001), {} }; }

TEST(Circuit, init_with_truncator_noise_model_policies) {
	Circuit qc{ 4,
		    std::make_unique<CoefficientTruncator<>>(0.001),
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
	EXPECT_THROW({ qc.add_operation("II", 0); }, std::out_of_range);
}

TEST(Circuit, add_string_nocase) {
	Circuit qc{ 2 };
	qc.add_operation("i", 0);
	qc.add_operation("Rz", 0, 3.14f);
	qc.add_operation("rZ", 0, 3.14f);
	qc.add_operation("cx", 0u, 1u);
	qc.add_operation("AmPlItUdEdAmPiNg", 0, 0.01f);
}

TEST(Circuit, splitting_gates_count) {
	Circuit qc{ 2 };
	EXPECT_EQ(qc.nb_splitting_gates(), 0);
	qc.add_operation("Rz", 0, 3.14f);
	EXPECT_EQ(qc.nb_splitting_gates(), 1);
	qc.add_operation("AMPLITUDEDAMPING", 0, 0.001f);
	EXPECT_EQ(qc.nb_splitting_gates(), 2);
	qc.add_operation("I", 0);
	qc.add_operation("X", 0);
	qc.add_operation("Y", 0);
	qc.add_operation("Z", 0);
	qc.add_operation("H", 0);
	qc.add_operation("CX", 0u, 1u);
	qc.add_operation("DEPOLARIZING", 0, 0.01f);
	qc.add_operation("DEPHASING", 0, 0.01f);
	EXPECT_EQ(qc.nb_splitting_gates(), 2);
}

TEST(Circuit, simple_run) {
	Circuit qc{ 1 };
	qc.add_operation("I", 0);
	auto res = qc.run({ "I" });
	EXPECT_FLOAT_EQ(res.expectation_value(), 1.f);
}

TEST(Circuit, qc_match_observable_result_1) {
	Circuit qc{ 4,
		    std::make_unique<NeverTruncator>(),
		    {},
		    std::make_unique<NeverPolicy>(),
		    std::make_unique<NeverPolicy>() };
	Observable obs{ "IIII" };
	auto evolved_obs = obs;

	EXPECT_EQ(qc.run(obs), evolved_obs);
	for (unsigned i = 0; i < qc.nb_qubits(); ++i) {
		qc.add_operation("H", i);
		evolved_obs.apply_clifford(Clifford_Gates_1Q::H, i);
	}
	EXPECT_EQ(qc.run(obs), evolved_obs);
	for (auto [control, target] :
	     std::array<std::tuple<unsigned, unsigned>, 3>{ { { 0, 1 }, { 2, 3 }, { 1, 2 } } }) {
		qc.add_operation("cx", control, target);
		evolved_obs.apply_cx(control, target);
	}
	EXPECT_EQ(qc.run(obs), evolved_obs);
	for (unsigned i = 0; i < qc.nb_qubits(); ++i) {
		coeff_t theta = (3.14f / 2.f) - i;
		qc.add_operation("rz", 0, theta);
		evolved_obs.apply_rz(0, theta);
	}
	EXPECT_EQ(qc.run(obs), evolved_obs);
	for (unsigned i = 0; i < qc.nb_qubits(); ++i) {
		qc.add_operation("Z", i);
		evolved_obs.apply_pauli(Pauli_gates::Z, i);
	}
	EXPECT_EQ(qc.run(obs), evolved_obs);
	for (unsigned i = 0; i < qc.nb_qubits(); ++i) {
		coeff_t n = 0.0001;
		qc.add_operation("DEPOLARIZING", i, n);
		evolved_obs.apply_unital_noise(UnitalNoise::Depolarizing, i, n);
	}
	EXPECT_EQ(qc.run(obs), evolved_obs);
	for (unsigned i = 0; i < qc.nb_qubits(); ++i) {
		coeff_t n = 0.0001;
		qc.add_operation("AMPLITUDEDAMPING", i, n);
		evolved_obs.apply_amplitude_damping(i, n);
	}
	EXPECT_EQ(qc.run(obs), evolved_obs);
}

TEST(Circuit, qc_merge_works_with_scheduler) {
	Circuit qc{ 1,
		    std::make_unique<NeverTruncator>(),
		    {},
		    std::make_unique<AlwaysAfterSplittingPolicy>(),
		    std::make_unique<NeverPolicy>() };
	for (unsigned i = 0; i < 4; ++i) {
		qc.add_operation("rz", 0, 1.f);
		qc.add_operation("rz", 0, -1.f);
		EXPECT_EQ(qc.run({ "Z" }).size(), 1);
	}
}

TEST(Circuit, qc_truncate_works_with_scheduler) {
	Circuit qc{ 1,
		    std::make_unique<CoefficientTruncator<>>(0.001f),
		    {},
		    std::make_unique<AlwaysAfterSplittingPolicy>(),
		    std::make_unique<AlwaysAfterSplittingPolicy>() };
	for (unsigned i = 0; i < 4; ++i) {
		auto noise = 0.00001f;
		qc.add_operation("AMPLITUDEDAMPING", 0, noise);
		EXPECT_EQ(qc.run({ "Z" }), Observable<coeff_t>("Z", std::pow(1.f - noise, i + 1)));
	}
}

TEST(Circuit, qc_update_truncator) {
	Circuit qc{ 4,
		    std::make_unique<NeverTruncator>(),
		    {},
		    std::make_unique<AlwaysAfterSplittingPolicy>(),
		    std::make_unique<AlwaysAfterSplittingPolicy>() };

	// no truncation
	for (unsigned i = 0; i < 4; ++i) {
		auto noise = 0.00001f;
		qc.add_operation("AMPLITUDEDAMPING", i, noise);
	}
	auto res = qc.run({ "ZZZZ" });
	EXPECT_EQ(res.size(), std::pow(2, 4));

	// with truncation
	qc.set_truncator(std::make_unique<CoefficientTruncator<>>(0.01f));
}

coeff_t p1_to_ev(coeff_t p1) { return 1.f - (2.f * p1); }

TEST(Circuit, test_circuit1) {
	/* qreg q[4]; creg c[4];
	h q[0];
	h q[1];
	h q[2];
	h q[3];
	rz(pi / 2) q[0];
	rz(pi / 3) q[1];
	rz(pi / 4) q[2];
	rz(pi / 5) q[3];
	cx q[0], q[1];
	cx q[2], q[3];
	cx q[1], q[2];
	h q[0];
	h q[1];
	h q[2];
	h q[3];*/
	Circuit qc{ 4 };

	for (unsigned i = 0; i < 4; ++i)
		qc.add_operation("H", i);

	qc.add_operation("Rz", 0, pi / 2.f);
	qc.add_operation("Rz", 1, pi / 3.f);
	qc.add_operation("Rz", 2, pi / 4.f);
	qc.add_operation("Rz", 3, pi / 5.f);

	qc.add_operation("cx", 0, 1);
	qc.add_operation("cx", 2, 3);
	qc.add_operation("cx", 1, 2);

	for (unsigned i = 0; i < 4; ++i)
		qc.add_operation("H", i);

	std::array<std::tuple<std::string_view, coeff_t>, 4> truth_table = { {
		{ "ZIII", p1_to_ev(0.500000f) },
		{ "IZII", p1_to_ev(0.356999f) },
		{ "IIZI", p1_to_ev(0.213950f) },
		{ "IIIZ", p1_to_ev(0.095499f) },
		//{ "ZZZZ", 0.5f },
	} };
	for (auto const [ob, ev] : truth_table) {
		auto res = qc.run(Observable{ ob });
		EXPECT_NEAR(res.expectation_value(), ev, 1e-4f);
	}
}
