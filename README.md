# ProPauli: A fast and efficient Quantum Circuit simulator based on Pauli back-propagation

[![Build and tests (MacOS + Linux)](https://github.com/zeFresk/ProPauli/actions/workflows/cmake-multi-platform.yml/badge.svg)](https://github.com/zeFresk/ProPauli/actions/workflows/cmake-multi-platform.yml)
[![Documentation](https://img.shields.io/badge/Documentation-View-blue)](https://zefresk.github.io/ProPauli/)
[![Coverage Status](https://coveralls.io/repos/github/zeFresk/ProPauli/badge.svg?branch=main)](https://coveralls.io/github/zeFresk/ProPauli?branch=main)
[![Latest benchmarks](https://img.shields.io/badge/Benchmarks-View-blue)](https://zefresk.github.io/ProPauli/dev/bench)


ProPauli is a modern and efficient C++ library for the simulation of Quantum circuits. It relies on evolving Quantum observables backward in the Heisenberg picture, an approach that can be significantly more efficient for certain classes of quantum algorithms, particularly those where the initial state is simple and the observable is complex. The simulation complexity depends on the complexity of the evolved observable rather than the state. This is especially advantageous for noisy circuits, where Pauli back-propagation allows for efficient classical simulation.

**For a full guide, tutorials, and a complete API reference, please see the [official documentation](https://zefresk.github.io/ProPauli/).**

-----

## Features

  * **High performance**: ProPauli is designed for speed. Our benchmarks show that it can simulate billions of Clifford gates per second, even on large observables.
  * **Easy to use**: ProPauli provides a high-level `Circuit` interface that makes it easy to build and run quantum circuits.
  * **Rich feature set**: ProPauli supports a variety of features, including truncation, merging, and easy to use noise models (depolarizing, dephasing, and amplitude damping channels).
  * **Cross-platform**: ProPauli is compatible with Linux and macOS, and most likely Windows (untested with MSVC compiler).
  * **Low-level interface**: For maximum performance and control, ProPauli provides a low-level `Observable` interface.

-----

## Installation

To install ProPauli, you will need:

  * A C++23 compatible compiler (**Clang** is preferred)
  * **CMake 3.14** or later

Once you have these dependencies, you can build ProPauli as follows:

```bash
git clone https://github.com/zefresk/ProPauli.git
cd ProPauli
cmake -S . -B build -D CMAKE_BUILD_TYPE=Release
cmake --build build --config Release
```

This will build the ProPauli library without tests or benchmarks.

-----

## Examples

### 1\. Basic Circuit

Here is an example of a simple 2-qubit circuit, calculating the expectation value of the "ZZ" observable.

```cpp
Circuit qc{ 2 };
qc.add_operation("H", 0);
qc.add_operation("Rz", 0, 1.57f);
qc.add_operation("CX", 0u, 1u);

auto result = qc.run(Observable{ "ZZ" });
std::cout << "Expectation value: " << result.expectation_value() << std::endl;
```

### 2\. Large Circuit with Truncation

This example demonstrates a 64-qubit circuit using both `CoefficientTruncator` and `WeightTruncator` to manage the complexity of the state.

```cpp
Circuit qc{ 64,
            combine_truncators(
                CoefficientTruncator<>{ 0.001f }, // remove terms with coefficient below 0.001
                WeightTruncator{ 6 } // remove terms with pauli weight > 6
            )
};

// Apply a layer of Hadamard gates
for (unsigned i = 0; i < 63; ++i)
    qc.add_operation("H", i);

// Apply a layer of Rz gates
for (unsigned i = 0; i < 63; ++i)
    qc.add_operation("Rz", i, 0.785f);

// Entangling layer
for (unsigned i = 0; i < 62; ++i) {
    qc.add_operation("CX", i, i + 1);
}

auto result = qc.run(Observable{ std::string(64, 'I') });
std::cout << "Expectation value: " << result.expectation_value() << std::endl;
```

### 3\. Custom Truncator

Users can define their own truncation logic by inheriting from the `Truncator` class.

```cpp
// A custom truncator that removes Pauli terms with a specific weight
class MyCustomWeightTruncator : public Truncator<coeff_t> {
public:
    MyCustomWeightTruncator(std::size_t weight_to_remove) : weight_to_remove_(weight_to_remove) {}
    ~MyCustomWeightTruncator() override {}

    std::size_t truncate(std::vector<PauliTerm<coeff_t>>& paulis) const override {
        return std::erase_if(paulis, [this](const auto& pt) {
            return pt.pauli_weight() == weight_to_remove_;
        });
    }
private:
    std::size_t weight_to_remove_;
};

Circuit qc{ 4, std::make_shared<MyCustomWeightTruncator>(2) };

// NOTE: The same effect can be achieved using a lambda with PredicateTruncator
// auto predicate = [](const auto& pt) { return pt.pauli_weight() == 2; };
// Circuit qc{ 4, std::make_shared<PredicateTruncator<decltype(predicate)>>(predicate) };

qc.add_operation("H", 0);
qc.add_operation("H", 1);
qc.add_operation("Rz", 0, 1.57f);
qc.add_operation("CX", 0u, 1u);

auto result = qc.run(Observable{ "XXXX" });
std::cout << "Expectation value: " << result.expectation_value() << std::endl;
```

### 4\. Noise Model

This example shows how to apply amplitude damping noise to all CX gates.

```cpp
NoiseModel<coeff_t> nm;
nm.add_amplitude_damping_on_gate(QGate::Cx, 0.01);

Circuit qc{ 4, std::make_shared<NeverTruncator>(), nm };

qc.add_operation("H", 0);
qc.add_operation("Rz", 0, 1.57f);
qc.add_operation("CX", 0, 1);
qc.add_operation("CX", 2, 3);


auto result = qc.run(Observable{ "ZZZZ" });
std::cout << "Expectation value: " << result.expectation_value() << std::endl;
```

### 5\. Low-Level Observable Usage

For fine-grained control and maximum performance, you can directly manipulate the `Observable` object.

```cpp
Observable obs{ "ZZ" };

// Apply a CNOT gate to the observable
obs.apply_cx(0, 1);

// Apply a Hadamard gate to the first qubit
obs.apply_clifford(Clifford_Gates_1Q::H, 0);

// Apply an Rz gate
obs.apply_rz(0, 1.57f);

std::cout << "Final observable: " << obs << std::endl;
std::cout << "Expectation value: " << obs.expectation_value() << std::endl;
```

-----

## References

This work is based on and implements ideas from the following articles:

  * _Pauli Propagation: A Computational Framework for Simulating Quantum Systems_, by Manuel S. Rudolph, Tyson Jones, Yanting Teng, Armando Angrisani, Zoë Holmes [https://arxiv.org/abs/2505.21606](https://arxiv.org/abs/2505.21606)

  * _Efficient simulation of parametrized quantum circuits under non-unital noise through Pauli backpropagation_, by Victor Martinez, Armando Angrisani, Ekaterina Pankovets, Omar Fawzi, Daniel Stilck França [https://arxiv.org/abs/2501.13050](https://arxiv.org/abs/2501.13050)
