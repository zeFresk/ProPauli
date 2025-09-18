#ifndef PP_TRUNCATE_HPP
#define PP_TRUNCATE_HPP

/**
 * @file truncate.hpp
 * @brief Provides a flexible framework for defining and applying truncation strategies.
 *
 * This file defines the components for truncating an observable (a `PauliTermContainer`)
 * to manage simulation complexity. The framework is built on three core concepts:
 * 1.  **Predicates**: Simple callable objects that determine if a single Pauli term
 * should be removed based on a specific criterion (e.g., small coefficient, high weight).
 * 2.  **Truncators**: Classes that apply a truncation strategy to an entire container of
 * Pauli terms, often by using a predicate. They all derive from a common `Truncator` interface.
 * 3.  **Combiners**: Utilities to chain multiple truncators together, either at compile-time for
 * maximum performance or at runtime for greater flexibility.
 */

#include "pauli.hpp"
#include "pauli_term_container.hpp"

#include <algorithm>
#include <cstddef>
#include <memory>
#include <tuple>
#include <type_traits>
#include <utility>

/**
 * @brief A predicate that returns true if a PauliTerm's coefficient magnitude is below a threshold.
 * @tparam T The numeric type for the coefficient.
 */
template <typename T = coeff_t>
class CoefficientPredicate {
	T threshold_;

    public:
	/**
	 * @brief Constructs the predicate with a given threshold.
	 * @param threshold Terms with coefficient magnitude smaller than this will be marked for removal.
	 */
	CoefficientPredicate(T threshold) : threshold_(threshold) {}

	/**
	 * @brief Evaluates the predicate for a given Pauli term.
	 * @param pt The Pauli term to check.
	 * @return `true` if `abs(pt.coefficient()) < threshold_`.
	 */
	template <typename GenericPauliTerm>
	bool operator()(GenericPauliTerm const& pt) const {
		return std::abs(pt.coefficient()) < threshold_;
	}
};

/**
 * @brief A predicate that returns true if a PauliTerm's weight is at or above a threshold.
 *
 * Pauli weight is the number of non-Identity operators in the term's Pauli string.
 */
class WeightPredicate {
	std::size_t weight_threshold_;

    public:
	/**
	 * @brief Constructs the predicate with a given weight threshold.
	 * @param weight_threshold Terms with a Pauli weight greater than or equal to this will be removed.
	 */
	WeightPredicate(std::size_t weight_threshold) : weight_threshold_(weight_threshold) {}

	/**
	 * @brief Evaluates the predicate for a given Pauli term.
	 * @param pt The Pauli term to check.
	 * @return `true` if `pt.pauli_weight() >= weight_threshold_`.
	 */
	template <typename GenericPauliTerm>
	bool operator()(GenericPauliTerm const& pt) const {
		return pt.pauli_weight() >= weight_threshold_;
	}
};

/**
 * @brief A predicate that always returns false, effectively never marking a term for removal.
 *
 * This is useful as a default or placeholder when no truncation is desired.
 */
class NeverPredicate {
    public:
	NeverPredicate() = default;

	/**
	 * @brief Evaluates the predicate.
	 * @return Always `false`.
	 */
	template <typename GenericPauliTerm>
	bool operator()(GenericPauliTerm const&) const {
		return false;
	}
};

/**
 * @brief An abstract base class (interface) for defining truncation strategies.
 * @tparam T The numeric type of the PauliTerm coefficients.
 *
 * A truncator is responsible for removing Pauli terms from an observable to
 * manage the simulation's complexity. All specific truncation strategies should
 * inherit from this class.
 */
template <typename T>
class Truncator {
    public:
	virtual ~Truncator() = default;

	/**
	 * @brief Applies the truncation strategy to a container of Pauli terms in place.
	 * @param paulis The container of Pauli terms to truncate.
	 * @return The number of terms removed.
	 */
	virtual std::size_t truncate(PauliTermContainer<T>& paulis) = 0;

	using Coefficient_t = T;
};

/**
 * @brief A generic truncator that removes Pauli terms based on a given predicate.
 * @tparam P The type of the predicate.
 * @tparam T The numeric type of the PauliTerm coefficients.
 *
 * This class implements the Strategy pattern by wrapping a predicate (a callable that returns `bool`)
 * and using it with `std::erase_if` to filter the list of Pauli terms. This is the primary
 * mechanism for implementing different truncation strategies.
 */
template <typename P, typename T = coeff_t>
class PredicateTruncator : public Truncator<T> {
	P pred;

    public:
	PredicateTruncator(P&& p) : pred(std::forward<P>(p)) {}
	~PredicateTruncator() override = default;

	PredicateTruncator(PredicateTruncator const&) = default;
	PredicateTruncator(PredicateTruncator&&) noexcept = default;
	template <typename... Args, std::enable_if_t<std::is_constructible_v<P, Args...>, bool> = true>
	PredicateTruncator(Args&&... args) : pred{ P(std::forward<Args>(args)...) } {}

	std::size_t truncate(PauliTermContainer<T>& paulis) override { return std::erase_if(paulis, pred); }
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
template <typename T = coeff_t>
using WeightTruncator = decltype(PredicateTruncator<WeightPredicate, T>(std::declval<WeightPredicate>()));

/**
 * @brief A truncator that never removes any terms.
 * @snippet tests/snippets/truncate.cpp never_truncator
 */
template <typename T = coeff_t>
using NeverTruncator = decltype(PredicateTruncator<NeverPredicate, T>(NeverPredicate{}));

/**
 * @brief A class that combines multiple truncators into one at **compile time**.
 * @tparam T The coefficient type.
 * @tparam Ts A parameter pack of truncator types.
 *
 * This class applies a sequence of truncators efficiently by storing them in a `std::tuple`
 * and expanding the calls using a fold expression. This avoids the overhead of virtual
 * function calls and is the preferred method for combining a fixed set of truncators.
 */
template <typename T = coeff_t, typename... Ts>
class Truncators : public Truncator<T> {
	std::tuple<Ts...> truncators;

	template <typename P, std::size_t... Is>
	std::size_t truncate_impl(P&& paulis, std::index_sequence<Is...>) {
		return (std::get<Is>(truncators).truncate(paulis) + ... + 0);
	}

    public:
	Truncators(Ts&&... truncs) : truncators(std::forward<Ts>(truncs)...) {}
	~Truncators() override = default;

	std::size_t truncate(PauliTermContainer<T>& paulis) override { return truncate_impl(paulis, std::index_sequence_for<Ts...>{}); }
};

template <typename T>
constexpr bool are_same_coeff_t() {
	return true;
}

template <typename Lhs, typename Rhs, typename... LeftOver>
constexpr bool are_same_coeff_t() {
	return std::is_same_v<typename Lhs::Coefficient_t, typename Rhs::Coefficient_t> && are_same_coeff_t<Rhs, LeftOver...>();
}

/**
 * @brief A helper function to create a compile-time truncator combination.
 * @relates Truncators
 * @return A `Truncators` object containing the provided truncators.
 */
template <typename... Truncs>
auto combine_truncators_raw(Truncs&&... truncs) {
	static_assert(are_same_coeff_t<Truncs...>(), "All underlying PauliTerm coefficients must be of the same type.");
	using nth_t = typename std::tuple_element_t<0, std::tuple<Truncs...>>;
	using c_t = typename nth_t::Coefficient_t;
	return Truncators<c_t, Truncs...>(std::forward<Truncs>(truncs)...);
}

/**
 * @brief A helper function to combine multiple truncators and return a shared_ptr.
 * @relates Truncators
 * @return A `std::shared_ptr<Truncator<T>>` pointing to a `Truncators` object.
 * @snippet tests/snippets/truncate.cpp combine_truncators
 */
template <typename... Truncs>
auto combine_truncators(Truncs&&... truncs) {
	return std::make_shared<decltype(combine_truncators_raw(std::forward<Truncs>(truncs)...))>(std::forward<Truncs>(truncs)...);
}

/**
 * @brief A class for combining multiple truncators at **runtime**.
 * @tparam T The coefficient type, typically `float` or `double`.
 *
 * This class holds a collection of `std::shared_ptr<Truncator<T>>` objects and applies them
 * sequentially. It provides a flexible way to create complex truncation strategies
 * dynamically, as the set of truncators can be modified at runtime.
 *
 * @warning This class introduces overhead due to `std::vector` storage and virtual function calls
 * for each truncator. For performance-critical code where the truncation strategy is fixed,
 * prefer using `combine_truncators`.
 * @snippet tests/snippets/truncate.cpp runtime_multi_truncator
 */
template <typename T = coeff_t>
class RuntimeMultiTruncators : public Truncator<T> {
	std::vector<std::shared_ptr<Truncator<T>>> truncs;

    public:
	RuntimeMultiTruncators(std::initializer_list<std::shared_ptr<Truncator<T>>> lst) : truncs{ lst } {}
	RuntimeMultiTruncators(std::vector<std::shared_ptr<Truncator<T>>> const& lst) : truncs{ lst } {}
	template <typename Iter>
	RuntimeMultiTruncators(Iter&& begin, Iter&& end) : truncs(begin, end) {}
	~RuntimeMultiTruncators() override = default;

	std::size_t truncate(PauliTermContainer<T>& paulis) override {
		std::size_t ret = 0;
		for (const auto& trunc : truncs) {
			ret += trunc->truncate(paulis);
		}
		return ret;
	}
};

/**
 * @brief A truncator that keeps only the N Pauli terms with the largest coefficients norm.
 * @tparam T The numeric type for the coefficient.
 *
 * This truncator ensures that after truncation, the observable contains at most `N` terms.
 * It identifies the `N` terms with the largest coefficients norms and removes all others.
 *
 * @note The selection uses an efficient heap-based selection algorithm to find the removal
 * threshold without performing a full sort of the terms.
 *
 */
template <typename T = coeff_t>
class KeepNTruncator : public Truncator<T> {
	std::size_t nb_terms;
	// std::vector<T> heap;

    public:
	/**
	 * @brief Constructs the truncator to keep a maximum number of terms.
	 * @param max_n The maximum number of terms to keep.
	 * @throws std::invalid_argument if max_n is 0.
	 */
	KeepNTruncator(std::size_t max_n) : nb_terms(max_n) {
		if (nb_terms == 0) {
			throw std::invalid_argument("Must keep at least one term.");
		}
	}
	~KeepNTruncator() override = default;

	KeepNTruncator(KeepNTruncator const&) = default;
	KeepNTruncator(KeepNTruncator&&) noexcept = default;

	std::size_t truncate(PauliTermContainer<T>& paulis) override {
		if (paulis.nb_terms() <= nb_terms) {
			return 0;
		}

		const auto initial_size = paulis.nb_terms();

		// The goal is to find the N-th largest element.
		// std::nth_element will place this element at the specified iterator position.
		auto nth_it = paulis.begin() + nb_terms;

		// Partition the container. We use a custom comparator on the absolute value
		// of the coefficients. Note the '>' to find the N-th *largest*.
		std::nth_element(paulis.begin(), nth_it, paulis.end(),
				 [](auto const& a, auto const& b) { return std::abs(a.coefficient()) > std::abs(b.coefficient()); });

		// After partitioning, the N largest elements are in the range [begin(), nth_it).
		// All elements from nth_it to the end can be safely removed.
		paulis.erase_to_end(nb_terms);

		assert(paulis.nb_terms() == nb_terms);

		return initial_size - paulis.nb_terms();
	}
};

#endif
