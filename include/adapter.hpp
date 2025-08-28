#ifndef PP_ADAPTER_HPP
#define PP_ADAPTER_HPP

/**
 * @file adapter.hpp
 * @brief Provides a generic, lazy-initializing iterator adapter.
 *
 * This file defines the `AdapterIt` class template, a forward iterator that wraps an
 * existing iterator and transforms its dereferenced value into a different type on-the-fly.
 * This is useful for creating compatible iterators over containers whose value types
 * do not match a required interface, without needing to create a new, fully populated container.
 */

#include <memory>
#include <iterator>

/**
 * @brief A forward iterator that lazily adapts an input iterator's value to a different type.
 * @tparam TOut The target type to which the underlying iterator's elements are converted.
 * @tparam ItIn The type of the underlying input iterator being adapted.
 *
 * `AdapterIt` wraps an input iterator `ItIn`. When dereferenced for the first time, it
 * constructs an object of type `TOut` from the value of the input iterator (`*it`).
 * This converted object is cached in a `std::shared_ptr`. Subsequent dereferences return
 * the cached object until the iterator is incremented, at which point the cache is cleared.
 *
 * This lazy conversion mechanism is efficient when the full sequence of converted objects
 * is not needed, or when the conversion itself is an expensive operation.
 *
 * @snippet tests/snippets/adapter.cpp adapter_it_usage
 */
template <typename TOut, typename ItIn>
class AdapterIt {
    public:
	/**
	 * @brief Constructs an AdapterIt from a given input iterator.
	 * @param it_in The input iterator to wrap.
	 */
	AdapterIt(ItIn it_in) : it(it_in), obj(nullptr) {}

	/** @name Standard Iterator Traits
	 * @{
	 */
	using iterator_category = std::forward_iterator_tag;
	using difference_type = std::ptrdiff_t;
	using value_type = TOut;
	using pointer = value_type*;
	using reference = value_type&;
	/** @} */

	/**
	 * @brief Dereferences the iterator, returning a reference to the converted object.
	 * @return A reference to the converted object of type `TOut`.
	 * @note The conversion from the input iterator's value to `TOut` happens lazily
	 * on the first call to this operator or `operator->()`.
	 */
	reference operator*() {
		init();
		return *obj;
	}

	/**
	 * @brief Dereferences the iterator, returning a pointer to the converted object.
	 * @return A pointer to the converted object of type `TOut`.
	 * @note Triggers the lazy conversion if the object has not yet been created.
	 */
	pointer operator->() {
		init();
		return obj.get();
	}

	/**
	 * @brief Advances the iterator to the next element (prefix increment).
	 * @return A reference to the incremented iterator.
	 * @note This invalidates the cached object. The next dereference will trigger a
	 * new conversion for the next element.
	 */
	AdapterIt& operator++() {
		it++;
		obj = nullptr; // Invalidate the cached object
		return *this;
	}

	/**
	 * @brief Advances the iterator to the next element (postfix increment).
	 * @return A copy of the iterator before it was incremented.
	 */
	AdapterIt operator++(int) {
		AdapterIt tmp = *this;
		++(*this);
		return tmp;
	}

	/**
	 * @brief Compares two iterators for equality.
	 * @param lhs The left-hand side iterator.
	 * @param rhs The right-hand side iterator.
	 * @return `true` if the underlying iterators are equal, `false` otherwise.
	 */
	friend bool operator==(AdapterIt const& lhs, AdapterIt const& rhs) { return lhs.it == rhs.it; }

	/**
	 * @brief Compares two iterators for inequality.
	 * @param lhs The left-hand side iterator.
	 * @param rhs The right-hand side iterator.
	 * @return `true` if the underlying iterators are not equal, `false` otherwise.
	 */
	friend bool operator!=(AdapterIt const& lhs, AdapterIt const& rhs) { return !(lhs == rhs); }

    private:
	std::remove_cvref_t<ItIn> it; ///< The underlying input iterator.
	std::shared_ptr<TOut> obj; ///< A shared pointer to the lazily-initialized, converted object.

	/**
	 * @brief Initializes the `obj` member if it hasn't been already.
	 *
	 * This function is called on the first dereference (`*` or `->`). It constructs
	 * the `TOut` object from the value of the current input iterator and stores it
	 * in the `obj` shared pointer.
	 */
	void init() {
		if (obj == nullptr) {
			obj = std::make_shared<TOut>(*it);
		}
	}
};

#endif
