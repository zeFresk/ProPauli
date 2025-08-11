#ifndef PP_TRUNCATE_HPP
#define PP_TRUNCATE_HPP

#include "pauli.hpp"
#include "pauli_term.hpp"

#include <cstddef>
#include <memory>
#include <tuple>
#include <type_traits>
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

class NeverPredicate {
    public:
	NeverPredicate() = default;
	template <typename T>
	bool operator()(PauliTerm<T> const&) const {
		return false;
	}
};

template <typename T>
class Truncator {
    public:
	virtual ~Truncator() {}
	virtual std::size_t truncate(std::vector<PauliTerm<T>>& paulis) const = 0;
};

template <typename P, typename T = coeff_t>
class PredicateTruncator : public Truncator<T> {
	P pred;

    public:
	PredicateTruncator(P&& p) : pred(std::forward(p)) {}
	~PredicateTruncator() override {}

	PredicateTruncator(PredicateTruncator const&) = default;
	PredicateTruncator(PredicateTruncator&&) noexcept = default;
	template <typename... Args, std::enable_if_t<std::is_constructible_v<P, Args...>, bool> = true>
	PredicateTruncator(Args&&... args) : pred{ P(std::forward<Args>(args)...) } {}

	std::size_t truncate(std::vector<PauliTerm<T>>& paulis) const override { return std::erase_if(paulis, pred); }
};

template <typename T = coeff_t>
using CoefficientTruncator = decltype(PredicateTruncator(std::declval<CoefficientPredicate<T>>()));

using WeightTruncator = decltype(PredicateTruncator(std::declval<WeightPredicate>()));
using NeverTruncator = decltype(PredicateTruncator(NeverPredicate{}));

template <typename T = coeff_t, typename... Ts>
class Truncators : public Truncator<T> {
	std::tuple<Ts...> truncators;

	template <typename P, std::size_t... Is>
	std::size_t truncate_impl(P&& paulis, std::index_sequence<Is...>) const {
		return (std::get<Is>(truncators).truncate(paulis) + ... + 0);
	}

    public:
	Truncators(Ts&&... truncs) : truncators(std::forward<Ts>(truncs)...) {}
	~Truncators() override {}

	std::size_t truncate(std::vector<PauliTerm<T>>& paulis) const override {
		return truncate_impl(paulis, std::index_sequence_for<Ts...>{});
	}
};

template <typename... Truncs>
auto combine_truncators(Truncs&&... truncs) {
	return Truncators(std::forward<Truncs>(truncs)...);
}

template <typename... Truncs>
auto combine_truncators_polymorph(Truncs&&... truncs) {
	return std::make_unique<decltype(combine_truncators(std::forward<Truncs>(truncs)...))>(std::forward<Truncs>(truncs)...);
}

#endif
