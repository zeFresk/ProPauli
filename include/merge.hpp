#ifndef PP_MERGE_HPP
#define PP_MERGE_HPP

/**
 * @file merge.hpp
 * @brief Provides an algorithm for merging identical Pauli terms.
 *
 * This file contains the implementation for merging Pauli terms within a `PauliTermContainer`.
 * Merging is a crucial simplification step in the simulation, where terms with identical
 * Pauli strings are combined into a single term by summing their coefficients. This reduces
 * the total number of terms and, consequently, the computational cost.
 */

#include "pauli_term_container.hpp"

#include "container/dirty_set.hpp"

#include <algorithm>
#include <type_traits>

template <typename T>
struct FastPauliStringEqual {
	bool operator()(T const& lhs, T const& rhs) const { return lhs.fast_equal_bitstring(rhs); }
};

template <typename T>
class Merger {
    private:
	using PTC_t = PauliTermContainer<T>;
	using nopt_t = std::remove_cvref_t<PTC_t>::non_owning_t;
	DirtySet<nopt_t, GenericPauliTermHash<nopt_t>, FastPauliStringEqual<nopt_t>> hset;

    public:
	Merger() {}

	// copyable and movable
	Merger(Merger const&) {}
	Merger(Merger&&) {}
	Merger& operator=(Merger const&) {
		hset.clear();
		return *this;
	}
	Merger& operator=(Merger&&) {
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
			//}
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

// debug functions
template <typename K, typename V, typename E>
bool no_duplicates(DirtySet<K, V, E> const& hs) {
	std::unordered_set<K, V, E> uhset;

	for (auto const& obj : hs) {
		auto [it, is_new] = uhset.emplace(obj);
		if (!is_new) {
			assert(false);
			return false;
		}
	}
	return true;
}

template <typename T>
bool no_duplicates(PauliTermContainer<T>& paulis_) {
	using PTC_t = PauliTermContainer<T>;
	using nopt_t = std::remove_cvref_t<PTC_t>::non_owning_t;
	std::unordered_set<nopt_t, GenericPauliTermHash<nopt_t>, GenericPauliStringEqual<nopt_t>> hset;

	for (std::size_t i = 0; i < paulis_.nb_terms(); ++i) {
		auto nopt = paulis_[i];
		auto [it, is_new] = hset.emplace(std::move(nopt));
		if (!is_new) {
			assert(false);
			return false;
		}
	}
	return true;
}

#endif
