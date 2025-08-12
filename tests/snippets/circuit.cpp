#include "circuit.hpp"
#include "observable.hpp"
#include "truncate.hpp"
#include <iostream>

void basic_circuit_snippet() {
    //! [basic_circuit]
    Circuit qc{ 2 };
    qc.add_operation("H", 0);
    qc.add_operation("Rz", 0, 1.57f);
    qc.add_operation("CX", 0u, 1u);

    auto result = qc.run(Observable{ "ZZ" });
    std::cout << "Expectation value: " << result.expectation_value() << std::endl;
    //! [basic_circuit]
}

void large_circuit_snippet() {
    //! [large_circuit_truncation]
    Circuit qc{ 64,
                combine_truncators_polymorph(
                    CoefficientTruncator<>{ 0.001f }, // remove terms with coefficient below 0.001
                    WeightTruncator{ 6 } // remove terms with pauli weight > 6
                )
    };

    // Apply a layer of Hadamard gates
    for (unsigned i = 0; i < 64; ++i)
        qc.add_operation("H", i);

    // Entangling layer
    for (unsigned i = 0; i < 63; ++i) {
        qc.add_operation("CX", i, i + 1);
    }

    auto result = qc.run(Observable{ std::string(64, 'Z') });
    std::cout << "Expectation value: " << result.expectation_value() << std::endl;
    //! [large_circuit_truncation]
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


void custom_truncator_snippet() {
    //! [custom_truncator]
    // A custom truncator that removes Pauli terms with a specific weight
    auto predicate = [](const auto& pt) { return pt.pauli_weight() == 2; };
    Circuit qc{ 4, std::make_unique<PredicateTruncator<decltype(predicate)>>(predicate) };

    qc.add_operation("H", 0);
    qc.add_operation("H", 1);
    qc.add_operation("Rz", 0, 1.57f);
    qc.add_operation("CX", 0u, 1u);

    auto result = qc.run(Observable{ "XXXX" });
    std::cout << "Expectation value: " << result.expectation_value() << std::endl;
    //! [custom_truncator]
}

void noise_model_snippet() {
    //! [noise_model]
    NoiseModel<coeff_t> nm;
    nm.add_amplitude_damping_on_gate(QGate::Cx, 0.01);

    Circuit qc{ 4, std::make_unique<NeverTruncator>(), nm };

    qc.add_operation("H", 0);
    qc.add_operation("Rz", 0, 1.57f);
    qc.add_operation("CX", 0, 1);
    qc.add_operation("CX", 2, 3);


    auto result = qc.run(Observable{ "ZZZZ" });
    std::cout << "Expectation value: " << result.expectation_value() << std::endl;
    //! [noise_model]
}
