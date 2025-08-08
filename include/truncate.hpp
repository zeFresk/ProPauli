#ifndef PP_TRUNCATE_HPP
#define PP_TRUNCATE_HPP

#include "pauli.hpp"
#include "pauli_term.hpp"

#include <cstddef>
#include <tuple>
#include <utility>

template <typename T = coeff_t>
class CoefficientPredicate {
	T threshold_;

    public:
	CoefficientPredicate(T&& threshold) : threshold_(threshold) {}

	bool operator()(PauliTerm<T> const& pt) const { return std::abs(pt.coefficient()) < threshold_; }
};

class WeightPredicate {
	std::size_t weight_threshold_;

    public:
	WeightPredicate(std::size_t&& weight_threshold) : weight_threshold_(weight_threshold) {}

	template <typename T>
	bool operator()(PauliTerm<T> const& pt) const {
		return pt.pauli_weight() >= weight_threshold_;
	}
};

template <typename P>
class PredicateTruncator {
	P pred;

    public:
	PredicateTruncator(P&& p) : pred(std::forward(p)) {}

	template <typename... Args>
	PredicateTruncator(Args&&... args) : pred{P(std::forward<Args>(args)...)} {}

	template <typename T>
	std::size_t truncate(T&& paulis) const {
		return std::erase_if(paulis, pred);
	}
};

template <typename T = coeff_t>
using CoefficientTruncator = decltype(PredicateTruncator(std::declval<CoefficientPredicate<T>>()));

using WeightTruncator = decltype(PredicateTruncator(std::declval<WeightPredicate>()));

template <typename... Ts>
class Truncators {
	std::tuple<Ts...> truncators;

	template <typename P, std::size_t... Is>
	std::size_t truncate_impl(P&& paulis, std::index_sequence<Is...>) const {
		return (std::get<Is>(truncators).truncate(paulis) + ... + 0);
	}

    public:
	Truncators(Ts&&... truncs) : truncators(std::forward<Ts>(truncs)...) {}

	template <typename T>
	std::size_t truncate(T&& paulis) const {
		return truncate_impl(std::forward<T>(paulis), std::index_sequence_for<Ts...>{});
	}
};

template <typename... Truncs>
Truncators<Truncs...> combine_truncators(Truncs&&... truncs) {
	return Truncators(std::forward<Truncs>(truncs)...);
}

#endif
