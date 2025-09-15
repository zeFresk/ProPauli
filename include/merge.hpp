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

#include <type_traits>
#include <tsl/robin_set.h>

template <typename T>
class Merger {
    private:
	using PTC_t = PauliTermContainer<T>;
	using nopt_t = std::remove_cvref_t<PTC_t>::non_owning_t;
	tsl::robin_set<nopt_t, GenericPauliTermHash<nopt_t>, GenericPauliStringEqual<nopt_t>, std::allocator<nopt_t>, false> hset;

    public:
	Merger() {}

	// copyable and movable
	Merger(Merger const&) = default;
	Merger(Merger&&) = default;
	Merger& operator=(Merger const&) = default;
	Merger& operator=(Merger&&) = default;

	void operator()(PTC_t& paulis_) {
		prepare_merge(paulis_);

		for (std::size_t i = 0; i < paulis_.nb_terms(); ++i) {
			auto nopt = paulis_[i];
			auto c = nopt.coefficient();
			auto [it, is_new] = hset.emplace(std::move(nopt));
			if (!is_new) { // A term with this Pauli string already exists in the set.
				// Add the current coefficient to the existing term.
				const_cast<nopt_t*>(&(*it))->add_coeff(c);
				// Remove the current (duplicate) term from the container.
				paulis_.remove_pauliterm(i);
				// Decrement index to re-evaluate the new element at the current position.
				--i;
			}
		}
	}

	void prepare_merge(PTC_t const& paulis_) {
		hset.clear();
		hset.reserve(paulis_.nb_terms());
	}
};

/**
 * @brief Merges identical Pauli terms within a container in-place, without extra allocations for the terms themselves.
 * @tparam T The numeric type for the coefficients.
 * @param paulis_ The container of Pauli terms to be merged. This container is modified directly.
 *
 * This function implements a high-performance merging algorithm. It iterates through the
 * `PauliTermContainer` and uses a hash set (`tsl::robin_set`) to keep track of the unique
 * Pauli strings it has encountered.
 *
 * The hash set stores non-owning views (`non_owning_t`) of the terms, which avoids costly
 * memory allocations. When a term with a duplicate Pauli string is found, its coefficient is
 * added to the original term (whose view is already in the set), and the duplicate term is

 * removed from the container using an efficient swap-and-pop operation.
 *
 * @note This function uses `const_cast` as a targeted optimization. The elements in the
 * hash set are normally `const`. However, since we only modify the coefficient (which is not
 * part of the hash), we can safely cast away `const`-ness to update the coefficient in-place,
 * avoiding the need to remove and re-insert the element.
 *
 * @snippet tests/snippets/merge.cpp merge_inplace
 */
template <typename T>
void merge_inplace_noalloc(PauliTermContainer<T>& paulis_) {
	using nopt_t = std::remove_cvref_t<decltype(paulis_)>::non_owning_t;
	// Use tsl::robin_set for high-performance hashing.
	// The boolean template parameter `StoreHash` is set to false for better performance
	// when the hash is cheap to compute, which is the case here.
	tsl::robin_set<nopt_t, GenericPauliTermHash<nopt_t>, GenericPauliStringEqual<nopt_t>, std::allocator<nopt_t>, false> hset;

	// code was moved to Merger::operator().
}

/* ** old versions ** */

/*

#include <vector>
#include "pauli_term.hpp"
template <typename T>
void merge_hmap(std::vector<PauliTerm<T>>& paulis_) {
	// associate pauli string hash with new Pauli Term
	std::unordered_map<PauliTerm<T>, PauliTerm<T>, std::hash<PauliTerm<T>>, PauliStringEqual<T>> hmap;
	hmap.reserve(paulis_.size());

	// if new pauli string, copy pauli term, else merge
	for (auto const& p : paulis_) {
		auto [it, is_new] = hmap.emplace(p, p);
		if (!is_new) { // element already exists
			it->second.add_coeff(p.coefficient());
		}
	}

	std::vector<PauliTerm<T>> new_pts;
	new_pts.reserve(hmap.size());
	for (auto&& [ph, pt] : hmap) {
		new_pts.push_back(std::move(pt));
	}
	paulis_ = std::move(new_pts);
}

template <typename T>
void merge_inplace_n2(std::vector<PauliTerm<T>>& paulis_) {
	// regroup same coeffs + mark with 0 PT to remove - O(n^2)
	auto end = paulis_.end();
	for (auto it = paulis_.begin(); it != end; ++it) {
		for (auto rest = (it + 1); rest != end; ++rest) {
			if (it->phash() == rest->phash()) {
				rest->add_coeff(it->coefficient());
				(*it) *= T{ 0 };
				break;
			}
		}
	}
	std::erase_if(paulis_, [](auto const& pt) { return pt.coefficient() == T{ 0 }; });
}

template <typename T>
std::size_t find_bin(PauliTerm<T> const& obj, std::size_t phash, std::vector<int> bins,
		     std::vector<PauliTerm<T>> const& objs) {
	auto idx = phash % bins.size();
	while (bins[idx] != -1 && !obj.equal_bitstring(objs[bins[idx]])) { // hash match but not objects
		// std::cerr << "collision\n";
		idx = (idx + 1) % bins.size();
	}
	return idx;
}

template <typename T>
void merge_inplace_vec(std::vector<PauliTerm<T>>& paulis_) {
	std::vector<int> hashes_bin(paulis_.size(), -1);

	// O(n) if low collision rate
	for (std::size_t i = 0; i < paulis_.size(); ++i) {
		auto& p = paulis_[i];
		auto idx = find_bin(p, p.phash(), hashes_bin, paulis_);
		if (hashes_bin[idx] == -1) { // new pt
			hashes_bin[idx] = i; // hash map to this pt
		} else { // another pt like this exists
			auto& oth = paulis_[hashes_bin[idx]];
			oth.add_coeff(p.coefficient());
			p *= T{ 0 };
		}
	}
	std::erase_if(paulis_, [](auto const& pt) { return pt.coefficient() == T{ 0 }; });
}


#include <functional>
#include <unordered_set>
#include <unordered_map>

template <typename T>
void merge_inplace_move(std::vector<PauliTerm<T>>& paulis_) {
	// associate pauli string hash with new Pauli Term
	std::unordered_map<PauliTerm<T>, T, std::hash<PauliTerm<T>>, PauliStringEqual<T>> hmap;
	hmap.reserve(paulis_.size());

	// if new pauli string, copy pauli term, else merge
	for (auto const& p : paulis_) {
		auto c = p.coefficient();
		auto [it, is_new] = hmap.emplace(std::move(p), c);
		if (!is_new) { // element already exists
			it->second += c;
		}
	}

	std::vector<PauliTerm<T>> new_pts;
	new_pts.reserve(hmap.size());
	for (auto&& [ph, c] : hmap) {
		new_pts.push_back(std::move(ph));
		new_pts[new_pts.size() - 1].set_coefficient(c);
	}
	paulis_ = std::move(new_pts);
}

template <class Set>
double unordered_set_badness(Set const& set) {
	auto const lambda = set.size() / double(set.bucket_count());

	auto cost = 0.;
	for (auto const& k : set)
		cost += set.bucket_size(set.bucket(k));
	cost /= set.size();

	return std::max(0., cost / (1 + lambda) - 1);
}

// #define PROFILE_MERGE

#ifdef PROFILE_MERGE
#include <fstream>
#include <random>

static std::mt19937 gen;
static std::uniform_int_distribution dis;
#endif

template <typename T>
void merge_inplace_std(PauliTermContainer<T>& paulis_) {
	std::unordered_set<NonOwningPauliTerm<T>, std::hash<NonOwningPauliTerm<T>>, PauliStringEqualNonOwning<T>> hset;
	// hset.reserve(paulis_.nb_terms()); // not needed for tsl, according to benchmarks on SU2_8x8

	for (std::size_t i = 0; i < paulis_.nb_terms(); ++i) {
		auto nopt = paulis_[i];
		auto c = nopt.coefficient();
		auto [it, is_new] = hset.emplace(std::move(nopt));
		if (!is_new) { // element already exists
			const_cast<NonOwningPauliTerm<T>*>(&(*it))->add_coeff(c); // updating coeff doesn't change hash
			paulis_.remove_pauliterm(i);
			--i;
		}
	}
}

#ifdef PROFILE_MERGE
	static std::ofstream log{ std::string("/tmp/pp_merge_profile.") + std::to_string(dis(gen)) +
				  std::string(".log") };

	auto badness = unordered_set_badness(hset);
	log << "badness: " << badness << "\n";
#endif

*/

#endif
