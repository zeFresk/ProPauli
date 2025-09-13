#include "noise_model.hpp"
#include "circuit.hpp"

#include "gtest/gtest.h"

TEST(NoiseModel, amplitude_damping_cx) {
	NoiseModel<float> nm;

	nm.add_amplitude_damping_on_gate(QGate::Cx, 0.01f);

	Circuit qc(2, std::make_shared<NeverTruncator<>>(), nm);

	qc.add_operation("H", 0);
	qc.add_operation("H", 1);
	qc.add_operation("CX", 0, 1);
	qc.add_operation("CX", 1, 0);
	qc.add_operation("H", 1);
	qc.add_operation("H", 0);

	auto result = qc.run(Observable("ZZ"));
	EXPECT_LT(result.expectation_value(), 0.99);
}

TEST(NoiseModel, depolarizing_h) {
	NoiseModel<float> nm;

	nm.add_unital_noise_on_gate(QGate::H, UnitalNoise::Depolarizing, 0.01f);

	Circuit qc(4, std::make_shared<NeverTruncator<>>(), nm);

	for (unsigned i = 0; i < 4; ++i) {
		qc.add_operation("H", i);
		qc.add_operation("H", i);
	}

	auto result = qc.run(Observable("ZZZZ"));
	EXPECT_FLOAT_EQ(result.expectation_value(), std::pow(1-0.01f, 4*2));
}

TEST(NoiseModel, dephasing_rz) {
	NoiseModel<float> nm;

	nm.add_unital_noise_on_gate(QGate::Rz, UnitalNoise::Dephasing, 0.01f);

	Circuit qc(4, std::make_shared<NeverTruncator<>>(), nm);

	for (unsigned i = 0; i < 4; ++i) {
		qc.add_operation("H", i);
		qc.add_operation("Rz", i, 0.5f);
		qc.add_operation("Rz", i, -0.5f);
		qc.add_operation("H", i);
	}

	auto result = qc.run(Observable("ZZZZ"));
	EXPECT_FLOAT_EQ(result.expectation_value(), std::pow(1-0.01f, 4*2));
}

TEST(NoiseModel, avoid_noise_infinite_loop) {
	NoiseModel<float> nm;

	for (auto g : { QGate::AmplitudeDamping, QGate::Dephasing, QGate::Depolarizing }) {
		for (auto n : { UnitalNoise::Depolarizing, UnitalNoise::Dephasing }) {
			EXPECT_THROW({ nm.add_unital_noise_on_gate(g, n, 0.01f); }, std::invalid_argument);
		}
		EXPECT_THROW({ nm.add_amplitude_damping_on_gate(g, 0.01f); }, std::invalid_argument);
	}
}
