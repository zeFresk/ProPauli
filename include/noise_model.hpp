#ifndef PP_NOISE_MODEL_HPP
#define PP_NOISE_MODEL_HPP

#include "pauli.hpp"
#include <cassert>
#include <stdexcept>
#include <unordered_map>

template <typename T>
struct Noise {
	T depolarizing_strength = 0;
	T dephasing_strength = 0;
	T amplitude_damping_strength = 0;
};

template <typename T>
class NoiseModel {
    private:
	std::unordered_map<QGate, Noise<T>> noise_map;

    public:
	NoiseModel() {}
	template <typename C>
	void apply_noise_after(C& qc, QGate g, unsigned qubit) const {
		auto const& nm = noise_map[g];
		if (nm.depolarizing_strength > 0) {
			qc.add_operation(QGate::Depolarizing, nm.depolarizing_strength, qubit);
		}
		if (nm.dephasing_strength > 0) {
			qc.add_operation(QGate::Dephasing, nm.dephasing_strength, qubit);
		}
		if (nm.amplitude_damping_strength > 0) {
			qc.add_operation(QGate::AmplitudeDamping, nm.amplitude_damping_strength, qubit);
		}
	}

	template <typename C>
	void apply_noise_after(C& qc, QGate cg, unsigned qubit1, unsigned qubit2) const {
		assert(cg == QGate::Cx);
		if (cg == QGate::AmplitudeDamping || cg == QGate::Dephasing || cg == QGate::Depolarizing) {
			throw std::invalid_argument("Can't add more noise to noise!");
		}
		apply_noise_after(qc, cg, qubit1);
		apply_noise_after(qc, cg, qubit2);
	}

	template <typename C>
	void apply_noise_after(C& qc, QGate cg, unsigned qubit, [[maybe_unused]] T theta) {
		assert(cg == QGate::Rz);
		apply_noise_after(qc, cg, qubit);
	}

	void add_unital_noise_on_gate(QGate g, UnitalNoise un, T n) {
		auto& nm = noise_map[g];
		switch (un) {
		case UnitalNoise::Dephasing:
			nm.dephasing_strength = n;
			break;
		case UnitalNoise::Depolarizing:
			nm.depolarizing_strength = n;
			break;
		default:
			break;
		}
	}

	void add_amplitude_on_gate(QGate g, T n) {
		auto& nm = noise_map[g];
		nm.amplitude_damping_strength = n;
	}
};

#endif
