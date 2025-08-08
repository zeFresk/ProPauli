#ifndef PP_OBSERVABLE_HPP
#define PP_OBSERVABLE_HPP

#include "pauli.hpp"
#include "pauli_term.hpp"

#include <algorithm>
#include <initializer_list>
#include <ostream>
#include <string_view>
#include <unordered_map>
#include <vector>

template <typename T = coeff_t>
class Observable {
    public:
	Observable(std::string_view pauli_string, T coeff = T{ 1 }) : paulis_({ PauliTerm<T>(pauli_string, coeff) }) {}

	Observable(std::initializer_list<std::string_view> pauli_string_list)
		: paulis_(pauli_string_list.begin(), pauli_string_list.end()) {}

	Observable(std::initializer_list<PauliTerm<T>> paulis_list) : paulis_{ paulis_list } {}

	template <typename Iter>
	Observable(Iter&& begin, Iter&& end) : paulis_{ begin, end } {}

	void apply_pauli(Pauli_gates g, unsigned qubit) {
		for (auto& p : paulis_) {
			p.apply_pauli(g, qubit);
		}
	}

	void apply_clifford(Clifford_Gates_1Q g, unsigned qubit) {
		for (auto& p : paulis_) {
			p.apply_clifford(g, qubit);
		}
	}

	void apply_unital_noise(UnitalNoise n, unsigned qubit, T p) {
		for (auto& pi : paulis_) {
			pi.apply_unital_noise(n, qubit, p);
		}
	}

	void apply_cx(unsigned qubit_control, unsigned qubit_target) {
		for (auto& p : paulis_) {
			p.apply_cx(qubit_control, qubit_target);
		}
	}

	void apply_rz(unsigned qubit, T theta) {
		//paulis_.reserve(paulis_.size() * 2);
		const auto nb_terms = paulis_.size();
		for (std::size_t i = 0; i < nb_terms;
		     ++i) { // no range based loop (insert at the end -> use after free)
			auto& p = paulis_[i];
			if (!p[qubit].commutes_with(p_z)) {
				auto new_path = p.apply_rz(qubit, theta);
				paulis_.push_back(std::move(new_path));
			}
		}
	}

	void apply_amplitude_damping(unsigned qubit, T pn) {
		//paulis_.reserve(paulis_.size() * 2);
		const auto nb_terms = paulis_.size();
		for (std::size_t i = 0; i < nb_terms; ++i) {
			auto& p = paulis_[i];
			if (p[qubit] == p_z) {
				auto new_path = p.apply_amplitude_damping_z(qubit, pn);
				paulis_.push_back(std::move(new_path));
			} else if (p[qubit] == p_x || p[qubit] == p_y) {
				p.apply_amplitude_damping_xy(qubit, pn);
			}
		}
	}

	T expectation_value() const {
		T ret = 0;
		for (auto const& pt : paulis_) {
			ret += pt.expectation_value();
		}
		return ret;
	}

	PauliTerm<T>& operator[](std::size_t idx) { return paulis_[idx]; }
	PauliTerm<T> const& operator[](std::size_t idx) const { return paulis_[idx]; }
	decltype(auto) begin() { return paulis_.begin(); }
	decltype(auto) begin() const { return paulis_.begin(); }
	decltype(auto) cbegin() const { return paulis_.cbegin(); }
	decltype(auto) end() { return paulis_.end(); }
	decltype(auto) end() const { return paulis_.end(); }
	decltype(auto) cend() const { return paulis_.cend(); }
	std::size_t size() const { return paulis_.size(); }

	std::size_t merge() {
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
		return new_pts.size();
	}

	template <typename Truncator>
	std::size_t truncate(Truncator&& truncator) {
		return truncator.truncate(paulis_);
	}

    private:
	std::vector<PauliTerm<T>> paulis_;
};

template <typename T>
std::ostream& operator<<(std::ostream& os, Observable<T> const& obs) {
	bool first = true;
	for (auto const& pt : obs) {
		if (!first) {
			os << " ";
		}
		os << pt;

		first = false;
	}
	return os;
}

#endif
