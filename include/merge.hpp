#ifndef PP_MERGE_HPP
#define PP_MERGE_HPP

#include "pauli_term.hpp"

#include <functional>
#include <iostream>
#include <vector>
#include <unordered_map>

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
std::size_t find_bin(PauliTerm<T> const& obj, std::size_t phash, std::vector<int> bins, std::vector<PauliTerm<T>> const& objs) {
	auto idx = phash % bins.size();
	while (bins[idx] != -1 && !obj.equal_bitstring(objs[bins[idx]])) { // hash match but not objects
		//std::cerr << "collision\n";
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
			p *= T{0};
		}
	}
	std::erase_if(paulis_, [](auto const& pt) { return pt.coefficient() == T{ 0 }; });
}

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
		new_pts[new_pts.size()-1].set_coefficient(c);
	}
	paulis_ = std::move(new_pts);
}


#endif
