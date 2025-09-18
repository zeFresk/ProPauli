/**
 * @brief A forward iterator for `PauliTermContainer` that yields mutable, non-owning views.
 *
 * This class, nested within `PauliTermContainer`, provides standard forward iterator
 * functionality. Its primary role is to enable range-based for loops and other
 * standard algorithms.
 *
 * Upon dereferencing, it does not return a reference to a stored element but instead
 * constructs a `NonOwningPauliTermPacked` view by value.  This view is a lightweight object
 * that provides direct, mutable access to the container's internal packed data for the
 * term at the current iterator position.
 */
class NonOwningIterator {
	/// @brief A reference to the container being iterated.
	PauliTermContainer& ptc;
	/// @brief The current index of the iterator within the container.
	std::size_t idx;

    public:
	/** @name Standard Iterator Traits
	 * @{
	 */
	using iterator_category = std::forward_iterator_tag;
	using difference_type = std::ptrdiff_t;
	using value_type = NonOwningPauliTermPacked;
	using pointer = void;
	using reference = value_type;
	/** @} */

	/**
	 * @brief Constructs the iterator.
	 * @param pt The container to iterate over.
	 * @param start_at The starting index for the iterator.
	 */
	explicit NonOwningIterator(PauliTermContainer& pt, std::size_t start_at) : ptc(pt), idx(start_at) {}

	NonOwningIterator(const NonOwningIterator& oth) = default;
	NonOwningIterator(NonOwningIterator&& oth) noexcept = default;
	NonOwningIterator& operator=(NonOwningIterator&& oth) noexcept = default;

	NonOwningIterator& operator=(NonOwningIterator const& oth) {
		assert(&ptc == &oth.ptc);
		idx = oth.idx;
		return *this;
	}

	/**
	 * @brief Dereferences the iterator to access the current term.
	 * @return A `NonOwningPauliTermPacked` view of the term at the current position.
	 */
	value_type operator*() { return NonOwningPauliTermPacked{ ptc, idx }; }

	/**
	 * @brief Dereferences the iterator for member access.
	 * @return A `NonOwningPauliTermPacked` view, allowing calls like `it->coefficient()`.
	 */
	value_type operator->() const { return NonOwningPauliTermPacked{ ptc, idx }; }

	/**
	 * @brief Advances the iterator to the next element (prefix increment).
	 * @return A reference to the incremented iterator.
	 */
	NonOwningIterator& operator++() {
		++idx;
		return *this;
	}

	/**
	 * @brief Advances the iterator to the next element (postfix increment).
	 * @return A copy of the iterator before it was incremented.
	 */
	NonOwningIterator operator++(int) {
		NonOwningIterator ret = *this;
		++(*this);
		return ret;
	}

	NonOwningIterator& operator--() {
		--idx;
		return *this;
	}

	/**
	 * @brief Advances the iterator to the next element (postfix increment).
	 * @return A copy of the iterator before it was incremented.
	 */
	NonOwningIterator operator--(int) {
		NonOwningIterator ret = *this;
		--(*this);
		return ret;
	}

	NonOwningIterator& operator+=(std::size_t x) {
		idx += x;
		return *this;
	}

	NonOwningIterator operator+(std::size_t x) {
		auto ret = *this;
		ret += x;
		return ret;
	}

	NonOwningIterator& operator-=(std::size_t x) {
		idx -= x;
		return *this;
	}

	NonOwningIterator operator-(std::size_t x) {
		auto ret = *this;
		ret -= x;
		return ret;
	}

	/**
	 * @brief Compares two iterators for equality.
	 * @return `true` if they belong to the same container and point to the same index.
	 */
	friend bool operator==(NonOwningIterator const& lhs, NonOwningIterator const& rhs) {
		return &lhs.ptc == &rhs.ptc && lhs.idx == rhs.idx;
	}
	/**
	 * @brief Compares two iterators for inequality.
	 */
	friend bool operator!=(NonOwningIterator const& lhs, NonOwningIterator const& rhs) { return !(lhs == rhs); }

	friend std::ptrdiff_t operator-(NonOwningIterator const& lhs, NonOwningIterator const& rhs) { return lhs.idx - rhs.idx; }

	friend bool operator<(NonOwningIterator const& lhs, NonOwningIterator const& rhs) { return lhs.idx < rhs.idx; }
	friend bool operator<=(NonOwningIterator const& lhs, NonOwningIterator const& rhs) { return lhs.idx <= rhs.idx; }
};

/**
 * @brief A read-only forward iterator for `PauliTermContainer`.
 *
 * This class serves as the `const_iterator` for `PauliTermContainer`.  It allows for safe
 * iteration over a `const` container.
 *
 * Dereferencing it yields a `ReadOnlyNonOwningPauliTermPacked`, a lightweight,
 * read-only view into the container's internal data, ensuring the container's
 * contents cannot be modified.
 */
class ReadOnlyNonOwningIterator {
	/// @brief A const reference to the container being iterated.
	PauliTermContainer const& ptc;
	/// @brief The current index of the iterator within the container.
	std::size_t idx;

    public:
	/** @name Standard Iterator Traits
	 * @{
	 */
	using iterator_category = std::forward_iterator_tag;
	using difference_type = std::ptrdiff_t;
	using value_type = ReadOnlyNonOwningPauliTermPacked;
	using pointer = void;
	using reference = value_type;
	/** @} */

	/**
	 * @brief Constructs the read-only iterator.
	 * @param pt The const container to iterate over.
	 * @param start_at The starting index for the iterator.
	 */
	explicit ReadOnlyNonOwningIterator(PauliTermContainer const& pt, std::size_t start_at) : ptc(pt), idx(start_at) {}

	/**
	 * @brief Dereferences the iterator to access the current term.
	 * @return A `ReadOnlyNonOwningPauliTermPacked` view of the term at the current position.
	 */
	value_type operator*() { return { ptc, idx }; }

	/**
	 * @brief Dereferences the iterator for member access.
	 * @return A `ReadOnlyNonOwningPauliTermPacked` view, allowing calls like `it->coefficient()`.
	 */
	value_type operator->() const { return { ptc, idx }; }

	/**
	 * @brief Advances the iterator to the next element (prefix increment).
	 * @return A reference to the incremented iterator.
	 */
	ReadOnlyNonOwningIterator& operator++() {
		++idx;
		return *this;
	}

	/**
	 * @brief Advances the iterator to the next element (postfix increment).
	 * @return A copy of the iterator before it was incremented.
	 */
	ReadOnlyNonOwningIterator operator++(int) {
		ReadOnlyNonOwningIterator ret = *this;
		++(*this);
		return ret;
	}

	/**
	 * @brief Compares two iterators for equality.
	 * @return `true` if they belong to the same container and point to the same index.
	 */
	friend bool operator==(ReadOnlyNonOwningIterator const& lhs, ReadOnlyNonOwningIterator const& rhs) {
		return &lhs.ptc == &rhs.ptc && lhs.idx == rhs.idx;
	}
	/**
	 * @brief Compares two iterators for inequality.
	 */
	friend bool operator!=(ReadOnlyNonOwningIterator const& lhs, ReadOnlyNonOwningIterator const& rhs) { return !(lhs == rhs); }
};
