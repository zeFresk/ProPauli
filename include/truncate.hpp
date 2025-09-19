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
#include <vector>
#include <cmath>
#include <stdexcept>
#include <cassert>

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
 * @note Amortized O(n) complexity. Inspired from the code from the STL, but tweaked to work with proxy iterators.
 *
 */
template <typename T = coeff_t>
class KeepNTruncator : public Truncator<T> {
	// A cutoff for switching to the more efficient insertion sort on small partitions.
	// A value between 8 and 24 is typical.
	static constexpr std::size_t INSERTION_SORT_CUTOFF = 16;

	std::size_t nb_terms;

    public:
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

		// We need to ensure the N largest elements are in the first N positions.
		// This means we need to find the element that belongs at index `nb_terms - 1`.
		selection_by_swap(paulis, 0, paulis.nb_terms() - 1, nb_terms - 1,
				  [](auto const& a, auto const& b) { return std::abs(a.coefficient()) > std::abs(b.coefficient()); });

		paulis.erase_to_end(nb_terms);

		assert(paulis.nb_terms() == nb_terms);
		return initial_size - paulis.nb_terms();
	}

    private:
	/**
	 * @brief The main Quickselect routine with a cutoff for small partitions.
	 */
	template <typename Compare>
	void selection_by_swap(PauliTermContainer<T>& paulis, std::size_t left, std::size_t right, std::size_t k, Compare comp) {
		while (right - left > INSERTION_SORT_CUTOFF) {
			std::size_t pivot_index = partition(paulis, left, right, comp);

			if (pivot_index == k) {
				return;
			} else if (pivot_index < k) {
				left = pivot_index + 1;
			} else { // pivot_index > k
				right = pivot_index - 1;
			}
		}

		// For the small remaining partition, finish with a full (but swap-based) sort.
		insertion_sort_by_swap(paulis, left, right, comp);
	}

	/**
	 * @brief A robust partitioning scheme using a median-of-three pivot.
	 */
	template <typename Compare>
	std::size_t partition(PauliTermContainer<T>& paulis, std::size_t left, std::size_t right, Compare comp) {
		// --- Median-of-Three Pivot Selection ---
		std::size_t mid = left + (right - left) / 2;
		// Sort the elements at left, mid, and right using swaps.
		if (comp(paulis[mid], paulis[left])) {
			paulis.swap_fast(left, mid);
		}
		if (comp(paulis[right], paulis[left])) {
			paulis.swap_fast(left, right);
		}
		if (comp(paulis[right], paulis[mid])) {
			paulis.swap_fast(mid, right);
		}
		// The median is now at paulis[mid]. Swap it into the pivot position (right-1)
		// to simplify the partitioning loop.
		paulis.swap_fast(mid, right - 1);
		auto pivot_proxy = paulis[right - 1];
		// --- End of Pivot Selection ---

		std::size_t i = left;
		std::size_t j = right - 1;

		// Hoare-style partitioning loop
		while (true) {
			while (comp(paulis[++i], pivot_proxy))
				;
			while (comp(pivot_proxy, paulis[--j]))
				;
			if (i >= j)
				break;
			paulis.swap_fast(i, j);
		}
		// Swap the pivot back to its final place.
		paulis.swap_fast(i, right - 1);
		return i;
	}

	/**
	 * @brief A classic insertion sort that uses only swaps, making it safe for proxies.
	 */
	template <typename Compare>
	void insertion_sort_by_swap(PauliTermContainer<T>& paulis, std::size_t left, std::size_t right, Compare comp) {
		for (std::size_t i = left + 1; i <= right; ++i) {
			std::size_t j = i;
			// "Bubble" the current element leftwards until it's in its sorted place.
			while (j > left && comp(paulis[j], paulis[j - 1])) {
				paulis.swap_fast(j, j - 1);
				--j;
			}
		}
	}
};

#endif
