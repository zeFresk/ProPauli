#ifndef PP_INCLUDE_POLICY_SEQ_HPP
#define PP_INCLUDE_POLICY_SEQ_HPP

#include "pauli.hpp"
#include "pauli_term_container.hpp"
#include "container/dirty_set.hpp"
#include <type_traits>

template <typename T>
class SequentialMerger {
    private:
	using PTC_t = PauliTermContainer<T>;
	using nopt_t = std::remove_cvref_t<PTC_t>::non_owning_t;
	DirtySet<nopt_t, GenericPauliTermHash<nopt_t>, FastPauliStringEqual<nopt_t>> hset;

    public:
	SequentialMerger() {}

	// copyable and movable
	SequentialMerger(SequentialMerger const&) {}
	SequentialMerger(SequentialMerger&&) {}
	SequentialMerger& operator=(SequentialMerger const&) {
		hset.clear();
		return *this;
	}
	SequentialMerger& operator=(SequentialMerger&&) {
		hset.clear();
		return *this;
	}

	void operator()(PTC_t& paulis_) {
		prepare_merge(paulis_);

		for (std::size_t i = 0; i < paulis_.nb_terms(); ++i) {
			auto nopt = paulis_[i];
			auto c = nopt.coefficient();

			auto [it, is_new] = hset.emplace(std::move(nopt));
			if (!is_new) { // A term with this Pauli string already exists in the set.
				// Add the current coefficient to the existing term.
				it->add_coeff(c);
				// Remove the current (duplicate) term from the container.
				paulis_.remove_pauliterm(i);
				// Decrement index to re-evaluate the new element at the current position.
				--i;
			}
		}

		after_merge(paulis_);
	}

	void prepare_merge(PTC_t const& paulis_) {
		hset.clear();
		if (hset.capacity() < paulis_.nb_terms()) {
			hset.reserve(paulis_.nb_terms());
		} else {
			// hset.compact();
		}
	}

	void after_merge([[maybe_unused]] PTC_t& paulis_) {
		// for debug only
	}
};

struct SequentialPolicy {
	template <typename T>
	using Merger = SequentialMerger<T>;

	template <typename PTC>
	inline static void apply_pauli(PTC& paulis, Pauli_gates g, unsigned qubit) {
		for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
			paulis[i].apply_pauli(g, qubit);
		}
	}

	template <typename PTC>
	inline static void apply_clifford(PTC& paulis, Clifford_Gates_1Q g, unsigned qubit) {
		for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
			paulis[i].apply_clifford(g, qubit);
		}
	}

	template <typename PTC, typename T>
	inline static void apply_unital_noise(PTC& paulis, UnitalNoise n, unsigned qubit, T p) {
		for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
			paulis[i].apply_unital_noise(n, qubit, p);
		}
	}

	template <typename PTC>
	inline static void apply_cx(PTC& paulis, unsigned qubit_control, unsigned qubit_target) {
		for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
			paulis[i].apply_cx(qubit_control, qubit_target);
		}
	}

	template <typename PTC, typename T>
	inline static void apply_rz(PTC& paulis, unsigned qubit, T theta) {
		const auto nb_terms = paulis.nb_terms();

		// compute number of required nb_term
		std::size_t total_to_allocate = 0;
		for (std::size_t i = 0; i < nb_terms; ++i) {
			if (!paulis[i].get_pauli(qubit).commutes_with(p_z)) {
				total_to_allocate++;
			}
		}

		// pre-alloc is mandatory to not invalidate terms while allocating
		paulis._batch_allocate(total_to_allocate);

		std::size_t k_idx = 0; // allocated index
		for (std::size_t i = 0; i < nb_terms; ++i) {
			auto p = paulis[i];
			if (!paulis[i].get_pauli(qubit).commutes_with(p_z)) {
				const auto tmp_pt_idx = nb_terms + k_idx;
				auto new_path = paulis[tmp_pt_idx];
				new_path.fast_copy_content(p);
				p.apply_rz(qubit, theta, new_path);
				k_idx++;
			}
		}
	}

	template <typename PTC, typename T>
	inline static void apply_amplitude_damping(PTC& paulis, unsigned qubit, T pn) {
		const auto nb_terms = paulis.nb_terms();

		// compute number of required nb_term
		std::size_t total_to_allocate = 0;
		for (std::size_t i = 0; i < nb_terms; ++i) {
			if (paulis[i].get_pauli(qubit) == p_z) {
				total_to_allocate++;
			}
		}

		// pre-alloc is mandatory to not invalidate terms while allocating
		paulis._batch_allocate(total_to_allocate);

		std::size_t k_idx = 0; // allocated index
		for (std::size_t i = 0; i < nb_terms; ++i) {
			auto p = paulis[i];
			if (p.get_pauli(qubit) == p_z) {
				const auto tmp_pt_idx = nb_terms + k_idx;
				auto new_path = paulis[tmp_pt_idx];
				new_path.fast_copy_content(p);
				paulis[i].apply_amplitude_damping_z(qubit, pn, new_path);
				k_idx++;
			} else if (p.get_pauli(qubit) == p_x || p.get_pauli(qubit) == p_y) {
				p.apply_amplitude_damping_xy(qubit, pn);
			}
		}
	}

	template <typename PTC>
	inline static auto expectation_value(PTC const& paulis) -> decltype(paulis[0].expectation_value()) {
		decltype(paulis[0].expectation_value()) ret = 0;
		for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
			ret += paulis[i].expectation_value();
		}
		return ret;
	}

	template <typename ObservableType, typename QC>
	inline static std::vector<ObservableType> circuit_batched_run(QC& qc, std::vector<ObservableType> observables) {
		for (std::size_t i = 0; i < observables.size(); ++i) {
			auto res = qc.run(observables[i], SequentialPolicy{});
			observables[i] = std::move(res);
		}
		return observables;
	}

	template <typename ObservableType, typename QC>
	inline static auto circuit_batched_evs(QC& qc, std::vector<ObservableType> observables) {
		std::vector<std::decay_t<decltype(observables[0].expectation_value())>> evs;
		evs.reserve(observables.size());
		for (std::size_t i = 0; i < observables.size(); ++i) {
			auto ev = qc.run(observables[i], SequentialPolicy{}).expectation_value();
			evs.push_back(std::move(ev));
		}
		return evs;
	}
};

inline constexpr SequentialPolicy seq;

#endif
