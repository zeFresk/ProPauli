#include "circuit.hpp"

#include "gtest/gtest.h"
#include "scheduler.hpp"
#include "truncate.hpp"
#include "observable.hpp"
#include "pauli.hpp"

#include <iostream>

TEST(Readme, basic) {
	Circuit qc{ 2 };
	qc.add_operation("H", 0);
	qc.add_operation("Rz", 0, 1.57f);
	qc.add_operation("CX", 0u, 1u);

	auto result = qc.run(Observable{ "ZZ" });
	std::cout << "Expectation value: " << result.expectation_value() << std::endl;
}

TEST(Readme, large_truncation) {
	Circuit qc{ 64, combine_truncators_polymorph(CoefficientTruncator<>{ 0.001f }, WeightTruncator{ 6 }) };

	// Apply a layer of Hadamard gates
	for (unsigned i = 0; i < 64; ++i)
		qc.add_operation("H", i);

	// Apply a layer of Rz gates
	for (unsigned i = 0; i < 64; ++i)
		qc.add_operation("Rz", i, 0.785f);

	// Entangling layer
	for (unsigned i = 0; i < 63; ++i) {
		qc.add_operation("CX", i, i + 1);
	}

	auto result = qc.run(Observable{ std::string(64, 'Z') });
	std::cout << "Expectation value: " << result.expectation_value() << std::endl;
}

class MyCustomWeightTruncator : public Truncator<coeff_t> {
    public:
	MyCustomWeightTruncator(std::size_t weight_to_remove) : weight_to_remove_(weight_to_remove) {}
	~MyCustomWeightTruncator() override {}

	std::size_t truncate(std::vector<PauliTerm<coeff_t>>& paulis) const override {
		return std::erase_if(paulis, [this](const auto& pt) { return pt.pauli_weight() == weight_to_remove_; });
	}

    private:
	std::size_t weight_to_remove_;
};

TEST(Readme, custom_truncator_class) {
	Circuit qc{ 4, std::make_unique<MyCustomWeightTruncator>(2) };

	qc.add_operation("H", 0);
	qc.add_operation("H", 1);
	qc.add_operation("Rz", 0, 1.57f);
	qc.add_operation("CX", 0u, 1u);

	auto result = qc.run(Observable{ "XXXX" });
	std::cout << "Expectation value: " << result.expectation_value() << std::endl;
}

TEST(Readme, custom_truncator_predicate) {
	auto predicate = [](const auto& pt) { return pt.pauli_weight() == 2; };
	Circuit qc{ 4, std::make_unique<PredicateTruncator<decltype(predicate)>>(predicate) };

	qc.add_operation("H", 0);
	qc.add_operation("H", 1);
	qc.add_operation("Rz", 0, 1.57f);
	qc.add_operation("CX", 0u, 1u);

	auto result = qc.run(Observable{ "XXXX" });
	std::cout << "Expectation value: " << result.expectation_value() << std::endl;
}

TEST(Readme, noise_model) {
	NoiseModel<coeff_t> nm;
	nm.add_amplitude_on_gate(QGate::Cx, 0.01);

	Circuit qc{ 4, std::make_unique<NeverTruncator>(), nm };

	qc.add_operation("H", 0);
	qc.add_operation("Rz", 0, 1.57f);
	qc.add_operation("CX", 0, 1);
	qc.add_operation("CX", 2, 3);

	auto result = qc.run(Observable{ "ZZZZ" });
	std::cout << "Expectation value: " << result.expectation_value() << std::endl;
}

TEST(Readme, low_level_observable) {
	Observable obs{ "ZZ" };

	// Apply a CNOT gate to the observable
	obs.apply_cx(0, 1);

	// Apply a Hadamard gate to the first qubit
	obs.apply_clifford(Clifford_Gates_1Q::H, 0);

	// Apply an Rz gate
	obs.apply_rz(0, 1.57f);

	std::cout << "Final observable: " << obs << std::endl;
	std::cout << "Expectation value: " << obs.expectation_value() << std::endl;
}
