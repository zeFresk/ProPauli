#include "circuit.hpp"
#include "observable.hpp"
#include <iostream>
#include <string>

void quickstart_snippet() {
	//! [quickstart]
	// 1. Initialize an 8-qubit circuit
	Circuit qc{ 8 };

	// 2. Build the quantum circuit
	// Apply a Hadamard gate to every qubit
	for (unsigned i = 0; i < 8; ++i) {
		qc.add_operation("H", i);
	}
	// Create a chain of CNOT gates
	for (unsigned i = 0; i < 7; ++i) {
		qc.add_operation("CX", i, i + 1);
	}

	// 3. Define the observable to measure
	// We'll measure the observable ZZZZZZZZ
	std::string z_obs_str(8, 'Z');
	Observable obs{ z_obs_str };

	// 4. Run the simulation
	auto final_obs = qc.run(obs);

	// 5. Get the expectation value
	auto exp_val = final_obs.expectation_value();
	std::cout << "Expectation value of " << z_obs_str << ": " << exp_val << std::endl;
	//! [quickstart]
}
