#ifndef PP_NOISE_MODEL_HPP
#define PP_NOISE_MODEL_HPP

#include "pauli.hpp"
#include <cassert>
#include <stdexcept>
#include <type_traits>
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
		auto it = noise_map.find(g);
		if (it != noise_map.end()) {
			auto const& nm = it->second;
			if (nm.depolarizing_strength > 0) {
				qc.add_operation(QGate::Depolarizing, qubit, nm.depolarizing_strength);
			}
			if (nm.dephasing_strength > 0) {
				qc.add_operation(QGate::Dephasing, qubit, nm.dephasing_strength);
			}
			if (nm.amplitude_damping_strength > 0) {
				qc.add_operation(QGate::AmplitudeDamping, qubit, nm.amplitude_damping_strength);
			}
		}
	}

	template <typename C, typename Integer, std::enable_if_t<std::is_integral_v<Integer>, bool> = true>
	void apply_noise_after(C& qc, QGate cg, unsigned qubit1, Integer qubit2) const {
		assert(cg == QGate::Cx);
		if (cg == QGate::AmplitudeDamping || cg == QGate::Dephasing || cg == QGate::Depolarizing) {
			throw std::invalid_argument("Can't add more noise to noise!");
		}
		apply_noise_after(qc, cg, qubit1);
		apply_noise_after(qc, cg, qubit2);
	}

	template <typename C, typename Real, std::enable_if_t<std::is_floating_point_v<Real>, bool> = true>
	void apply_noise_after(C& qc, QGate cg, unsigned qubit, [[maybe_unused]] Real theta) {
		assert(cg == QGate::Rz || cg == QGate::Depolarizing || cg == QGate::Dephasing || cg == QGate::AmplitudeDamping);
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
