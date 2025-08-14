#include "noise_model.hpp"
#include "circuit.hpp"

#include "gtest/gtest.h"

void noise_model_snippets() {
	//! [noise_model_usage]
	// Create a noise model
	NoiseModel<float> nm;

	// Add 1% amplitude damping noise to every CX gate
	nm.add_amplitude_damping_on_gate(QGate::Cx, 0.01f);

	// Add 0.5% dephasing noise to every Hadamard gate
	nm.add_unital_noise_on_gate(QGate::H, UnitalNoise::Dephasing, 0.005f);
	// Add 1% depolarizing noise to every Cx gate
	nm.add_unital_noise_on_gate(QGate::Cx, UnitalNoise::Depolarizing, 0.01f);

	// Create a circuit with this noise model
	Circuit qc(4, std::make_shared<NeverTruncator>(), nm);

	qc.add_operation("H", 0);
	qc.add_operation("CX", 0, 1); // Noise will be applied automatically

	auto result = qc.run(Observable("ZZZZ"));
	//! [noise_model_usage]
}

TEST(documentation, noise_model) { noise_model_snippets(); }
