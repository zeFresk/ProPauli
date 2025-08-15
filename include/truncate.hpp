#ifndef PP_TRUNCATE_HPP
#define PP_TRUNCATE_HPP

#include "pauli.hpp"
#include "pauli_term.hpp"

#include <cstddef>
#include <memory>
#include <tuple>
#include <type_traits>
#include <utility>

/**
 * @brief A predicate that returns true if a PauliTerm's coefficient is below a threshold.
 */
template <typename T = coeff_t>
class CoefficientPredicate {
	T threshold_;

    public:
	CoefficientPredicate(T&& threshold) : threshold_(threshold) {}

	bool operator()(PauliTerm<T> const& pt) const { return std::abs(pt.coefficient()) < threshold_; }
};

/**
 * @brief A predicate that returns true if a PauliTerm's weight is above a threshold.
 */
class WeightPredicate {
	std::size_t weight_threshold_;

    public:
	WeightPredicate(std::size_t&& weight_threshold) : weight_threshold_(weight_threshold) {}

	template <typename T>
	bool operator()(PauliTerm<T> const& pt) const {
		return pt.pauli_weight() >= weight_threshold_;
	}
};

/**
 * @brief A predicate that always returns false.
 */
class NeverPredicate {
    public:
	NeverPredicate() = default;
	template <typename T>
	bool operator()(PauliTerm<T> const&) const {
		return false;
	}
};

/**
 * @brief An abstract base class for defining truncation strategies.
 * @tparam T The numeric type of the PauliTerm coefficients.
 *
 * A truncator is responsible for removing Pauli terms from an observable to
 * manage the simulation's complexity.
 */
template <typename T>
class Truncator {
    public:
	virtual ~Truncator() {}

	/**
	 * @brief Truncates a vector of Pauli terms in place.
	 * @param paulis The vector of PauliTerm objects to truncate.
	 * @return The number of terms removed.
	 */
	virtual std::size_t truncate(std::vector<PauliTerm<T>>& paulis) const = 0;
};

/**
 * @brief A generic truncator that removes elements from a vector of PauliTerm based on a predicate.
 * @tparam P The type of the predicate.
 * @tparam T The numeric type of the PauliTerm coefficients.
 *
 * This class wraps a predicate (a callable that returns `bool`) and uses it with
 * `std::erase_if` to filter the list of Pauli terms. This is the primary mechanism
 * for implementing different truncation strategies.
 *
 * @snippet tests/readme.cpp custom_truncator_predicate
 */
template <typename P, typename T = coeff_t>
class PredicateTruncator : public Truncator<T> {
	P pred;

    public:
	PredicateTruncator(P&& p) : pred(std::forward<P>(p)) {}
	~PredicateTruncator() override {}

	PredicateTruncator(PredicateTruncator const&) = default;
	PredicateTruncator(PredicateTruncator&&) noexcept = default;
	template <typename... Args, std::enable_if_t<std::is_constructible_v<P, Args...>, bool> = true>
	PredicateTruncator(Args&&... args) : pred{ P(std::forward<Args>(args)...) } {}

	std::size_t truncate(std::vector<PauliTerm<T>>& paulis) const override { return std::erase_if(paulis, pred); }
};

/**
 * @brief A truncator that removes Pauli terms with small coefficients.
 * @snippet tests/snippets/truncate.cpp coefficient_truncator
 */
template <typename T = coeff_t>
using CoefficientTruncator = decltype(PredicateTruncator(std::declval<CoefficientPredicate<T>>()));

/**
 * @brief A truncator that removes Pauli terms with high Pauli weight.
 * @snippet tests/snippets/truncate.cpp weight_truncator
 */
using WeightTruncator = decltype(PredicateTruncator(std::declval<WeightPredicate>()));

/**
 * @brief A truncator that never removes any terms.
 * @snippet tests/snippets/truncate.cpp never_truncator
 */
using NeverTruncator = decltype(PredicateTruncator(NeverPredicate{}));

/**
 * @brief A class that combines multiple truncators into one at compile time.
 * @tparam T The coefficient type.
 * @tparam Ts A parameter pack of truncator types.
 */
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

/**
 * @brief A helper function to combine multiple truncators.
 * @snippet tests/snippets/truncate.cpp combine_truncators
 */
template <typename... Truncs>
auto combine_truncators_raw(Truncs&&... truncs) {
	return Truncators(std::forward<Truncs>(truncs)...);
}

/**
 * @brief A helper function to combine multiple truncators and return a shared_ptr to the base class.
 */
template <typename... Truncs>
auto combine_truncators(Truncs&&... truncs) {
	return std::make_shared<decltype(combine_truncators_raw(std::forward<Truncs>(truncs)...))>(
		std::forward<Truncs>(truncs)...);
}

/**
 * @brief A class for combining multiple truncators at runtime.
 *
 * This class holds a collection of `Truncator` objects and applies them
 * sequentially to a list of Pauli terms. It provides a flexible way to
 * create complex truncation strategies dynamically.
 *
 * @tparam T The coefficient type, typically `float` or `double`.
 *
 * @warning This class introduces some overhead due to virtual function calls. 
 * For performance-critical code where the truncation strategy is fixed at compile 
 * time, prefer using `combine_truncators`.
 */
template <typename T = coeff_t>
class RuntimeMultiTruncators : public Truncator<T> {
	std::vector<std::shared_ptr<Truncator<T>>> truncs;

    public:
	RuntimeMultiTruncators(std::initializer_list<std::shared_ptr<Truncator<T>>> lst) : truncs{ lst } {}
	RuntimeMultiTruncators(std::vector<std::shared_ptr<Truncator<T>>> const& lst) : truncs{ lst } {}
	template <typename Iter>
	RuntimeMultiTruncators(Iter&& begin, Iter&& end) : truncs(begin, end) {}
	~RuntimeMultiTruncators() override {}

	std::size_t truncate(std::vector<PauliTerm<T>>& paulis) const override {
		std::size_t ret = 0;
		for (const auto& trunc : truncs) {
			ret += trunc->truncate(paulis);
		}
		return ret;
	}
};

#endif
