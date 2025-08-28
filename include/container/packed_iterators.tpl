class NonOwningIterator {
	PauliTermContainer& ptc;
	std::size_t idx;

    public:
	using iterator_category = std::forward_iterator_tag;
	using difference_type = std::ptrdiff_t;
	using value_type = NonOwningPauliTermPacked;
	using pointer = value_type*;
	using reference = value_type&;

	explicit NonOwningIterator(PauliTermContainer& pt, std::size_t start_at) : ptc(pt), idx(start_at) {}

	value_type operator*() { return NonOwningPauliTermPacked{ ptc, idx }; }

	value_type operator->() const { return NonOwningPauliTermPacked{ ptc, idx }; }

	NonOwningIterator& operator++() {
		++idx;
		return *this;
	}

	NonOwningIterator operator++(int) {
		NonOwningIterator ret = *this;
		++(*this);
		return ret;
	}

	friend bool operator==(NonOwningIterator const& lhs, NonOwningIterator const& rhs) {
		return &lhs.ptc == &rhs.ptc && lhs.idx == rhs.idx;
	}
	friend bool operator!=(NonOwningIterator const& lhs, NonOwningIterator const& rhs) {
		return !(lhs == rhs);
	}
};

class ReadOnlyNonOwningIterator {
	PauliTermContainer const& ptc;
	std::size_t idx;

    public:
	using iterator_category = std::forward_iterator_tag;
	using difference_type = std::ptrdiff_t;
	using value_type = ReadOnlyNonOwningPauliTermPacked;
	using pointer = value_type*;
	using reference = value_type&;

	explicit ReadOnlyNonOwningIterator(PauliTermContainer const& pt, std::size_t start_at)
		: ptc(pt), idx(start_at) {}

	value_type operator*() { return { ptc, idx }; }

	value_type operator->() const { return { ptc, idx }; }

	ReadOnlyNonOwningIterator& operator++() {
		++idx;
		return *this;
		;
	}

	ReadOnlyNonOwningIterator operator++(int) {
		ReadOnlyNonOwningIterator ret = *this;
		++(*this);
		return ret;
	}

	friend bool operator==(ReadOnlyNonOwningIterator const& lhs, ReadOnlyNonOwningIterator const& rhs) {
		return &lhs.ptc == &rhs.ptc && lhs.idx == rhs.idx;
	}
	friend bool operator!=(ReadOnlyNonOwningIterator const& lhs, ReadOnlyNonOwningIterator const& rhs) {
		return !(lhs == rhs);
	}
};

