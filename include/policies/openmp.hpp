#ifndef PP_INCLUDE_POLICY_OMP_HPP
#define PP_INCLUDE_POLICY_OMP_HPP

#if defined(_OPENMP)

#include "pauli.hpp"

struct OpenMPPolicy {
	template <typename PTC>
	inline static void apply_pauli(PTC& paulis, Pauli_gates g, unsigned qubit) {
		#pragma omp parallel for schedule(static)
		for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
			paulis[i].apply_pauli(g, qubit);
		}
	}

	template <typename PTC>
	inline static void apply_clifford(PTC& paulis, Clifford_Gates_1Q g, unsigned qubit) {
		#pragma omp parallel for schedule(static)
		for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
			paulis[i].apply_clifford(g, qubit);
		}
	}

	template <typename PTC, typename T>
	inline static void apply_unital_noise(PTC& paulis, UnitalNoise n, unsigned qubit, T p) {
		#pragma omp parallel for schedule(static)
		for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
			paulis[i].apply_unital_noise(n, qubit, p);
		}
	}

	template <typename PTC>
	inline static void apply_cx(PTC& paulis, unsigned qubit_control, unsigned qubit_target) {
		#pragma omp parallel for schedule(static)
		for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
			paulis[i].apply_cx(qubit_control, qubit_target);
		}
	}

	template <typename PTC, typename T>
	inline static void apply_rz(PTC& paulis, unsigned qubit, T theta) {
		const auto nb_terms = paulis.nb_terms();
		for (std::size_t i = 0; i < nb_terms; ++i) {
			auto p = paulis[i];
			if (!p.get_pauli(qubit).commutes_with(p_z)) {
				auto new_path = paulis.duplicate_pauliterm(i);
				paulis[i].apply_rz(qubit, theta, new_path);
			}
		}
	}

	template <typename PTC, typename T>
	inline static void apply_amplitude_damping(PTC& paulis, unsigned qubit, T pn) {
		const auto nb_terms = paulis.nb_terms();
		for (std::size_t i = 0; i < nb_terms; ++i) {
			auto p = paulis[i];
			if (p.get_pauli(qubit) == p_z) {
				auto new_path = paulis.duplicate_pauliterm(i); // invalidates p
				paulis[i].apply_amplitude_damping_z(qubit, pn, new_path);
			} else if (p.get_pauli(qubit) == p_x || p.get_pauli(qubit) == p_y) {
				p.apply_amplitude_damping_xy(qubit, pn);
			}
		}
	}

	template <typename PTC>
	inline static auto expectation_value(PTC const& paulis) -> decltype(paulis[0].expectation_value()) {
		decltype(paulis[0].expectation_value()) ret = 0;
		#pragma omp parallel for schedule(static) reduction(+:ret)
		for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
			ret += paulis[i].expectation_value();
		}
		return ret;
	}
};

inline constexpr OpenMPPolicy omp;

#endif

#endif
