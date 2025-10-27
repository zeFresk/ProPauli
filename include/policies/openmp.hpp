#ifndef PP_INCLUDE_POLICY_OMP_HPP
#define PP_INCLUDE_POLICY_OMP_HPP

#include "container/bit_operations.hpp"
#include "pauli.hpp"
#include "pauli_axis.hpp"
#include "policies/sequential.hpp"
#include "symbolic/coefficient.hpp"
#include <cmath>
#include <cstdint>
#include <ios>
#include <iostream>

#if defined(_OPENMP)

#define POLICY_OMP_SCHEDULE schedule(static)

#include <vector>
#include <omp.h>

#include "pauli_term_container.hpp"
#include "container/dirty_set.hpp"

template <typename T>
class OpenMPMerger {
    private:
	using PTC_t = PauliTermContainer<T>;
	using nopt_t = std::remove_cvref_t<PTC_t>::non_owning_t;
	[[no_unique_address]] GenericPauliTermHash<T> hasher;

	// per thread
	std::vector<DirtySet<nopt_t, GenericPauliTermHash<nopt_t>, FastPauliStringEqual<nopt_t>>> hsets;
	std::vector<std::size_t> hashes;
	std::vector<std::size_t> masked;

	// shared
	std::vector<std::uint8_t> is_hole; // NOTE: vector<bool> can't be used in parallel!

	static constexpr std::size_t NB_BATCHES_PER_THREADS = 1;

    public:
	OpenMPMerger() : hsets(omp_get_max_threads()) {}

	// copyable and movable
	OpenMPMerger(OpenMPMerger const&) : hsets(omp_get_max_threads()) {}
	OpenMPMerger(OpenMPMerger&&) : hsets(omp_get_max_threads()) {}
	OpenMPMerger& operator=(OpenMPMerger const&) {
		const auto nb_sets = hsets.size();
		#pragma omp parallel for POLICY_OMP_SCHEDULE
		for (std::size_t i = 0; i < nb_sets; ++i) {
			hsets[i].clear();
		}
		return *this;
	}
	OpenMPMerger& operator=(OpenMPMerger&&) {
		const auto nb_sets = hsets.size();
		#pragma omp parallel for POLICY_OMP_SCHEDULE
		for (std::size_t i = 0; i < nb_sets; ++i) {
			hsets[i].clear();
		}
		return *this;
	}

	void operator()(PTC_t& paulis_) {
		static constexpr float z_score = 6.f; // z = 6 => p realloc = 3*10^-7

		const auto nb_terms = paulis_.nb_terms();

		// reset holes array
		is_hole.clear();
		is_hole.resize(nb_terms, false);

		// prepare hash array
		hashes.resize(nb_terms);
		masked.resize(nb_terms);

		#pragma omp parallel
		{
			const unsigned nb_threads = omp_get_num_threads();
			const unsigned tid = omp_get_thread_num();
			const std::uint32_t nb_batches_hint = NB_BATCHES_PER_THREADS * nb_threads;
			const std::uint32_t nb_batches =
				is_power_of_two(nb_batches_hint) ? nb_batches_hint : next_power_of_two(nb_batches_hint);
			std::uint32_t mask32 = nb_batches - 1;
			auto& hset = hsets[tid];

			// pre-compute all hashes
			#pragma omp for POLICY_OMP_SCHEDULE
			for (std::size_t i = 0; i < nb_terms; ++i) {
				hashes[i] = paulis_[i].phash();
				masked[i] = static_cast<std::uint32_t>(hashes[i] >> 32) & mask32;
			}

			// prepare so that there is a very low probability of needing a rehash.
			hset.clear();
			float mean = nb_terms / static_cast<float>(nb_threads);
			float sigma = std::sqrt(mean * (1.f - (1.f / nb_terms)));
			std::size_t required_alloc = mean + z_score * sigma;
			if (hset.capacity() < required_alloc) {
				hset.reserve(required_alloc);
			} else {
				// hset.compact();
			}

			// merge and mark for deletion (batched)
			#pragma omp for schedule(dynamic, 1)
			for (std::size_t bid = 0; bid < nb_batches; ++bid) {
				for (std::size_t i = 0; i < nb_terms; ++i) {
					auto hash = hashes[i];

					if (masked[i] != bid) {
						continue;
					}

					auto nopt = paulis_[i];
					auto c = nopt.coefficient();

					auto [it, is_new] = hset.emplace_with_hash(std::move(nopt), hash);
					if (!is_new) {
						it->add_coeff(c);
						is_hole[i] = true; // mark for removal
					}
				}
			}
		}

		// remove holes (sequentially for now)
		for (std::size_t i = 0; i < paulis_.nb_terms(); ++i) {
			if (is_hole[i]) {
				paulis_.remove_pauliterm(i);
				std::swap(is_hole[i], is_hole.back());
				is_hole.pop_back();
				--i;
			}
		}

		// parallel implementation:
		// isolate a chunk from the right with Nb holes non holes elements exactly.
		// then, each block is allocated exactly what it needs to fill its hole
		// finally, each thread fill its chunk holes using the allocated non holes elems (using move)
		// at the end, resize from the right
	}
};

struct OpenMPPolicy {
	template <typename T>
	using Merger = OpenMPMerger<T>;

	template <typename PTC>
	inline static void apply_pauli(PTC& paulis, Pauli_gates g, unsigned qubit) {
		#pragma omp parallel for POLICY_OMP_SCHEDULE
		for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
			paulis[i].apply_pauli(g, qubit);
		}
	}

	template <typename PTC>
	inline static void apply_clifford(PTC& paulis, Clifford_Gates_1Q g, unsigned qubit) {
		#pragma omp parallel for POLICY_OMP_SCHEDULE
		for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
			paulis[i].apply_clifford(g, qubit);
		}
	}

	template <typename PTC, typename T>
	inline static void apply_unital_noise(PTC& paulis, UnitalNoise n, unsigned qubit, T p) {
		#pragma omp parallel for POLICY_OMP_SCHEDULE
		for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
			paulis[i].apply_unital_noise(n, qubit, p);
		}
	}

	template <typename PTC>
	inline static void apply_cx(PTC& paulis, unsigned qubit_control, unsigned qubit_target) {
		#pragma omp parallel for POLICY_OMP_SCHEDULE
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
			#pragma omp for reduction(+ : total_to_allocate) schedule(static)
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

		std::vector<std::size_t> allocated_per_thread(omp_get_max_threads(), 0);
		std::size_t total_to_allocate = 0;

		#pragma omp parallel shared(allocated_per_thread)
		{
			auto tid = omp_get_thread_num();

			// compute number of required nb_term
			#pragma omp for reduction(+ : total_to_allocate) schedule(static)
			for (std::size_t i = 0; i < nb_terms; ++i) {
				if (paulis[i].get_pauli(qubit) == p_z) {
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
				if (p.get_pauli(qubit) == p_z) {
					const auto tmp_pt_idx = start_idx + k_idx;
					auto new_path = paulis[tmp_pt_idx];
					new_path.fast_copy_content(p);
					paulis[i].apply_amplitude_damping_z(qubit, pn, new_path);
					k_idx++;
				} else if (p.get_pauli(qubit) == p_x || p.get_pauli(qubit) == p_y) {
					p.apply_amplitude_damping_xy(qubit, pn);
				}
			}
		}
	}

	template <typename PTC, typename T>
	inline static void apply_rp(PTC& paulis, PauliAxis<> const& axis, T theta) {
		const auto nb_terms = paulis.nb_terms();

		std::vector<std::size_t> allocated_per_thread(omp_get_max_threads(), 0);
		std::size_t total_to_allocate = 0;

		#pragma omp parallel shared(allocated_per_thread)
		{
			auto tid = omp_get_thread_num();

			// compute number of required nb_term
			#pragma omp for reduction(+ : total_to_allocate) schedule(static)
			for (std::size_t i = 0; i < nb_terms; ++i) {
				if (!paulis[i].commutes_with(axis.raw_bits())) {
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
				if (!paulis[i].commutes_with(axis.raw_bits())) {
					const auto tmp_pt_idx = start_idx + k_idx;
					auto new_path = paulis[tmp_pt_idx];
					new_path.fast_copy_content(p);
					p.apply_rp(axis, theta, new_path);
					k_idx++;
				}
			}
		}
	}

	template <typename PTC>
	inline static auto expectation_value(PTC const& paulis) -> decltype(paulis[0].expectation_value()) {
		using Coeff_t = std::remove_cvref_t<decltype(paulis[0].expectation_value())>;
		Coeff_t ret{ 0 };

		// needed for openMP on GCC...
		if constexpr (Symbolic<Coeff_t>) {
			#pragma omp declare reduction(SymbolicAddition:Coeff_t : omp_out = omp_out + omp_in) initializer(omp_priv = Coeff_t{ 0 })

			#pragma omp parallel for POLICY_OMP_SCHEDULE reduction(SymbolicAddition : ret)
			for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
				ret += paulis[i].expectation_value();
			}
		} else {
			#pragma omp parallel for POLICY_OMP_SCHEDULE reduction(+ : ret)
			for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
				ret += paulis[i].expectation_value();
			}
		}
		return ret;
	}

	template <typename ObservableType, typename QC>
	inline static std::vector<ObservableType> circuit_batched_run(QC& qc, std::vector<ObservableType> observables) {
		const std::size_t nb_obs = observables.size();

		#pragma omp parallel for schedule(guided)
		for (std::size_t i = 0; i < nb_obs; ++i) {
			auto res = qc.run(std::move(observables[i]), seq);
			observables[i] = std::move(res);
		}
		return observables;
	}

	template <typename ObservableType, typename QC>
	inline static auto circuit_batched_evs(QC& qc, std::vector<ObservableType> const& observables) {
		using T = std::decay_t<decltype(observables[0].expectation_value())>;
		const std::size_t nb_obs = observables.size();
		std::vector<std::pair<T, T>> evs(nb_obs);

		#pragma omp parallel for schedule(guided)
		for (std::size_t i = 0; i < observables.size(); ++i) {
			auto res = qc.run(observables[i], seq);
			evs[i] = {res.expectation_value(), res.truncate_error()};
		}
		return evs;
	}
};

inline constexpr OpenMPPolicy par;

#endif

#endif
