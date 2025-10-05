#ifndef PP_INCLUDE_POLICY_SEQ_HPP
#define PP_INCLUDE_POLICY_SEQ_HPP

#include "pauli.hpp"
#include "pauli_term_container.hpp"
#include "container/dirty_set.hpp"

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
		for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
			ret += paulis[i].expectation_value();
		}
		return ret;
	}

	template <typename ObservableType, typename QC>
	inline static std::vector<ObservableType> circuit_batched_run(QC& qc, std::vector<ObservableType> observables) {
		for (std::size_t i = 0; i < observables.size(); ++i) {
			qc.run(observables[i], SequentialPolicy{});
		}
		return observables;
	}
};

inline constexpr SequentialPolicy seq;

#endif
