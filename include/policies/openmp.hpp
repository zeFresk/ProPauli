#ifndef PP_INCLUDE_POLICY_OMP_HPP
#define PP_INCLUDE_POLICY_OMP_HPP

#include "pauli.hpp"

#if defined(_OPENMP)

#include <vector>
#include <omp.h>

static constexpr std::size_t ALLOCATION_FACTOR = 2;

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

		std::vector<std::size_t> allocated_per_thread(omp_get_max_threads(), 0);
		std::size_t total_to_allocate = 0;

		#pragma omp parallel shared(allocated_per_thread)
		{
			auto tid = omp_get_thread_num();

			// compute number of required nb_term 
			#pragma omp for reduction(+:total_to_allocate) schedule(static)
			for (std::size_t i = 0; i < nb_terms; ++i) {
				if (!paulis[i].get_pauli(qubit).commutes_with(p_z)) {
					allocated_per_thread[tid]++;
					total_to_allocate++;
				}
			}


			// pre-alloc is mandatory to not invalidate terms while allocating 
			#pragma omp single
			paulis._batch_allocate(total_to_allocate);

			// get start_idx by computing sum of previous elements
			std::size_t start_idx = nb_terms;
			for (int k = 0; k < tid; ++k) {
				start_idx += allocated_per_thread[k];
			}
			
			std::size_t k_idx = 0; // allocated index

			#pragma omp for schedule(static)
			for (std::size_t i = 0; i < nb_terms; ++i) {
				auto p = paulis[i];
				if (!paulis[i].get_pauli(qubit).commutes_with(p_z)) {
					const auto tmp_pt_idx = start_idx + k_idx;
					auto new_path = paulis[tmp_pt_idx];
					new_path.fast_copy_content(p);
					p.apply_rz(qubit, theta, new_path);
					k_idx++;
				}
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
		decltype(paulis[0].expectation_value()) ret{0};
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
