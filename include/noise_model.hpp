#ifndef PP_NOISE_MODEL_HPP
#define PP_NOISE_MODEL_HPP

#include "pauli.hpp"
#include "symbolic/coefficient.hpp"
#include <cassert>
#include <stdexcept>
#include <type_traits>
#include <unordered_map>

/**
 * @brief Defines the strengths of different noise channels.
 * @tparam T The numeric type for the noise strength.
 */
template <typename T>
struct Noise {
	bool depolarizing = false;
	bool dephasing = false;
	bool amplitude_damping = false;

	T depolarizing_strength = 0;
	T dephasing_strength = 0;
	T amplitude_damping_strength = 0;
};

/**
 * @brief A model for applying noise to quantum gates.
 * @tparam T The numeric type for noise parameters.
 *
 * A `NoiseModel` allows you to specify that certain types of noise should be
 * automatically applied after certain gates in a `Circuit`.
 */
template <typename T>
class NoiseModel {
    private:
	std::unordered_map<QGate, Noise<T>> noise_map;

	void avoid_loops(QGate g) {
		if (g == QGate::AmplitudeDamping || g == QGate::Depolarizing || g == QGate::Dephasing) {
			throw std::invalid_argument("Adding noise to noisy gates is forbidden.");
		}
	}

    public:
	/**
	 * @brief Constructs an empty noise model.
	 *
	 * @snippet tests/snippets/noise_model.cpp noise_model_usage
	 */
	NoiseModel() {}

	template <typename C>
	void apply_noise_after(C& qc, QGate g, unsigned qubit) const {
		auto it = noise_map.find(g);
		if (it != noise_map.end()) {
			auto const& nm = it->second;
			if (nm.depolarizing) {
				qc.add_operation(QGate::Depolarizing, qubit, nm.depolarizing_strength);
			}
			if (nm.dephasing) {
				qc.add_operation(QGate::Dephasing, qubit, nm.dephasing_strength);
			}
			if (nm.amplitude_damping) {
				qc.add_operation(QGate::AmplitudeDamping, qubit, nm.amplitude_damping_strength);
			}
		}
	}

	template <typename C, typename Integer, std::enable_if_t<std::is_integral_v<Integer>, bool> = true>
	void apply_noise_after(C& qc, QGate cg, unsigned qubit1, Integer qubit2) const {
		assert(cg == QGate::Cx);
		apply_noise_after(qc, cg, qubit1);
		apply_noise_after(qc, cg, qubit2);
	}

	template <typename C, typename Real>
	void apply_noise_after(C& qc, QGate cg, unsigned qubit, [[maybe_unused]] Real theta)
		requires(std::is_floating_point_v<Real> || Symbolic<Real>) {
		apply_noise_after(qc, cg, qubit);
	}

	/**
	 * @brief Adds a unital noise channel to be applied after a specific gate type.
	 * @param g The gate type after which the noise should be applied.
	 * @param un The type of unital noise (Depolarizing or Dephasing).
	 * @param n The strength/probability of the noise.
	 * @warning Adding noise to noisy gates (AmplitudeDamping, Depolarizing, Dephasing) is forbidden to prevent infinite loops.
	 */
	void add_unital_noise_on_gate(QGate g, UnitalNoise un, T n) {
		avoid_loops(g);
		auto& nm = noise_map[g];
		switch (un) {
		case UnitalNoise::Dephasing:
			nm.dephasing = true;
			nm.dephasing_strength = n;
			break;
		case UnitalNoise::Depolarizing:
			nm.depolarizing = true;
			nm.depolarizing_strength = n;
			break;
		default:
			break;
		}
	}

	/**
	 * @brief Adds an amplitude damping channel to be applied after a specific gate type.
	 * @param g The gate type after which the noise should be applied.
	 * @param n The strength/probability of the noise.
	 * @warning Adding noise to noisy gates (AmplitudeDamping, Depolarizing, Dephasing) is forbidden to prevent infinite loops.
	 */
	void add_amplitude_damping_on_gate(QGate g, T n) {
		avoid_loops(g);
		auto& nm = noise_map[g];
		nm.amplitude_damping = true;
		nm.amplitude_damping_strength = n;
	}
};

#endif
