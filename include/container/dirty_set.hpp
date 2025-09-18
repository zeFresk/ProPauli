#ifndef DIRTY_SET_HPP
#define DIRTY_SET_HPP

#include <cstddef>
#include <cstdint>
#include <cstring>
#include <functional>
#include <iterator>
#include <memory>
#include <new>
#include <stdexcept>
#include <type_traits>
#include <utility>
#include <cassert>

#include "dirty_set_internal.hpp"

template <typename Key, typename Hash = std::hash<Key>, typename KeyEqual = std::equal_to<Key>>
class DirtySet {
    private:
	// --- Compile-Time Policy Selection ---
	// Select the best available probing policy. To add AVX2, you would add
	// a new policy and an #elif defined(__AVX2__) here.
	#if defined(__SSE2__)
		using Policy = DirtySetDetail::ProbePolicySSE2;
	#else
		using Policy = DirtySetDetail::ProbePolicyScalar;
	#endif

	using Group = typename Policy::Group;
	using BitMask = DirtySetDetail::BitMask; // BitMask is policy-agnostic for now

    public:
	// --- Type Aliases ---
	using key_type = Key;
	using value_type = Key;
	using size_type = size_t;
	using difference_type = ptrdiff_t;
	using hasher = Hash;
	using key_equal = KeyEqual;
	using reference = value_type&;
	using const_reference = const value_type&;
	using pointer = value_type*;
	using const_pointer = const value_type*;

	static constexpr size_type GROUP_SIZE = 16;

	// --- Iterator ---
	template <bool IsConst>
	class BasicIterator {
	    public:
		using iterator_category = std::forward_iterator_tag;
		using value_type = Key;
		using difference_type = ptrdiff_t;
		using pointer = std::conditional_t<IsConst, const Key*, Key*>;
		using reference = std::conditional_t<IsConst, const Key&, Key&>;

		BasicIterator() noexcept = default;
		reference operator*() const { return m_keys[m_index]; }
		pointer operator->() const { return &m_keys[m_index]; }
		BasicIterator& operator++() {
			advance_to_next_full();
			return *this;
		}
		BasicIterator operator++(int) {
			BasicIterator old = *this;
			++(*this);
			return old;
		}
		operator BasicIterator<true>() const { return BasicIterator<true>(m_keys, m_ctrl, m_index, m_capacity); }
		friend bool operator==(const BasicIterator& lhs, const BasicIterator& rhs) noexcept { return lhs.m_index == rhs.m_index; }
		friend bool operator!=(const BasicIterator& lhs, const BasicIterator& rhs) noexcept { return !(lhs == rhs); }

	    private:
		friend class DirtySet;
		using KeyPtr = std::conditional_t<IsConst, const Key*, Key*>;
		using CtrlPtr = std::conditional_t<IsConst, const int8_t*, int8_t*>;

		BasicIterator(KeyPtr keys, CtrlPtr ctrl, size_type index, size_type capacity) noexcept
			: m_keys(keys), m_ctrl(ctrl), m_index(index), m_capacity(capacity) {}

		void advance_to_next_full() {
			++m_index;
			while (m_index < m_capacity && m_ctrl[m_index] < 0) { // A non-negative ctrl byte is a full slot
				++m_index;
			}
		}

		KeyPtr m_keys = nullptr;
		CtrlPtr m_ctrl = nullptr;
		size_type m_index = 0;
		size_type m_capacity = 0;
	};

	using iterator = BasicIterator<false>;
	using const_iterator = BasicIterator<true>;

	// --- Constructors, Destructor, Assignment ---
	constexpr DirtySet() noexcept = default;
	~DirtySet() { destroy_keys(); }
	DirtySet(const DirtySet& other) { copy_from(other); }

	DirtySet& operator=(const DirtySet& other) {
		if (this != &other) {
			destroy_keys();
			m_key_buffer.reset();
			m_keys = nullptr;
			m_ctrl.reset();
			m_spare_key_buffer.reset();
			m_spare_ctrl_buffer.reset();
			m_spare_capacity = 0;
			copy_from(other);
		}
		return *this;
	}

	DirtySet(DirtySet&& other) noexcept
		: m_keys(other.m_keys), m_key_buffer(std::move(other.m_key_buffer)), m_ctrl(std::move(other.m_ctrl)),
		  m_spare_key_buffer(std::move(other.m_spare_key_buffer)), m_spare_ctrl_buffer(std::move(other.m_spare_ctrl_buffer)),
		  m_spare_capacity(other.m_spare_capacity), m_size(other.m_size), m_occupied_slots(other.m_occupied_slots),
		  m_capacity(other.m_capacity), m_hasher(std::move(other.m_hasher)), m_key_equal(std::move(other.m_key_equal)) {
		other.m_keys = nullptr;
		other.m_size = 0;
		other.m_occupied_slots = 0;
		other.m_capacity = 0;
		other.m_spare_capacity = 0;
	}

	DirtySet& operator=(DirtySet&& other) noexcept {
		if (this != &other) {
			destroy_keys();
			m_keys = other.m_keys;
			m_key_buffer = std::move(other.m_key_buffer);
			m_ctrl = std::move(other.m_ctrl);
			m_spare_key_buffer = std::move(other.m_spare_key_buffer);
			m_spare_ctrl_buffer = std::move(other.m_spare_ctrl_buffer);
			m_spare_capacity = other.m_spare_capacity;
			m_size = other.m_size;
			m_occupied_slots = other.m_occupied_slots;
			m_capacity = other.m_capacity;
			m_hasher = std::move(other.m_hasher);
			m_key_equal = std::move(other.m_key_equal);
			other.m_keys = nullptr;
			other.m_size = 0;
			other.m_occupied_slots = 0;
			other.m_capacity = 0;
			other.m_spare_capacity = 0;
		}
		return *this;
	}

	// --- Iterators ---
	iterator begin() noexcept {
		size_type index = 0;
		while (index < m_capacity && m_ctrl[index] < 0) {
			index++;
		}
		return iterator(m_keys, m_ctrl.get(), index, m_capacity);
	}
	const_iterator begin() const noexcept {
		size_type index = 0;
		while (index < m_capacity && m_ctrl[index] < 0) {
			index++;
		}
		return const_iterator(m_keys, m_ctrl.get(), index, m_capacity);
	}
	const_iterator cbegin() const noexcept { return begin(); }
	iterator end() noexcept { return iterator(m_keys, m_ctrl.get(), m_capacity, m_capacity); }
	const_iterator end() const noexcept { return const_iterator(m_keys, m_ctrl.get(), m_capacity, m_capacity); }
	const_iterator cend() const noexcept { return end(); }

	// --- Capacity ---
	[[nodiscard]] bool empty() const noexcept { return m_size == 0; }
	size_type size() const noexcept { return m_size; }
	size_type capacity() const noexcept { return m_capacity; }

	void reserve(size_type capacity_hint) {
		if (capacity_hint > m_capacity) {
			rehash(next_power_of_two(capacity_hint));
		}
	}

	// --- Modifiers ---
	void clear() noexcept { destroy_keys(); }

	std::pair<iterator, bool> emplace(Key key) {
		if (m_occupied_slots + 1 > m_capacity * MAX_LOAD_FACTOR) {
			rehash(m_capacity > 0 ? m_capacity * 2 : 8);
		}
		return find_or_insert_impl(std::move(key));
	}

	template <typename Predicate>
	size_type erase_if(Predicate pred) {
		size_type removed_count = 0;
		for (size_type i = 0; i < m_capacity; ++i) {
			if (m_ctrl[i] >= 0 && pred(m_keys[i])) {
				erase_at(i);
				removed_count++;
			}
		}
		return removed_count;
	}

	void compact() {
		if (m_occupied_slots > m_size && m_capacity > 0) {
			rehash(m_capacity);
		}
	}

    private:
	// --- Private Helper Functions ---
	struct HashInfo {
		size_t h1;
		int8_t h2;
	};
	static HashInfo split_hash(size_t hash) { return { hash >> 7, static_cast<int8_t>(hash & 0x7F) }; }

	std::pair<iterator, bool> find_or_insert_impl(Key key) {
		size_t hash = m_hasher(key);
		HashInfo info = split_hash(hash);
		size_type start_index = info.h1 & (m_capacity - 1);
		size_type probe_offset = 0;
		size_type probe_step = 1;
		size_type first_tombstone_idx = m_capacity;

		while (true) {
			size_type group_index = (start_index + probe_offset) & (m_capacity - 1);
			Group group(&m_ctrl[group_index]);

			BitMask matches = group.match(info.h2);
			while (matches.any()) {
				size_type bit_pos = matches.lowest_set_bit_idx();
				size_type index = (group_index + bit_pos) & (m_capacity - 1);
				DIRTY_SET_PREFETCH(&m_keys[index]);
				if (m_key_equal(m_keys[index], key)) {
					return { iterator(m_keys, m_ctrl.get(), index, m_capacity), false };
				}
				matches.clear_lowest_bit();
			}

			BitMask empty_slots = group.match_empty();
			if (empty_slots.any()) {
				size_type insert_idx = (first_tombstone_idx != m_capacity) ?
							       first_tombstone_idx :
							       (group_index + empty_slots.lowest_set_bit_idx()) & (m_capacity - 1);

				if (m_ctrl[insert_idx] == K_EMPTY) {
					m_occupied_slots++;
				}
				new (&m_keys[insert_idx]) Key(std::move(key));
				m_ctrl[insert_idx] = info.h2;
				m_size++;
				return { iterator(m_keys, m_ctrl.get(), insert_idx, m_capacity), true };
			}

			if (first_tombstone_idx == m_capacity) {
				BitMask deleted_slots = group.match_deleted();
				if (deleted_slots.any()) {
					first_tombstone_idx = (group_index + deleted_slots.lowest_set_bit_idx()) & (m_capacity - 1);
				}
			}

			probe_offset += probe_step++;
		}
	}

	void erase_at(size_type index) {
		if constexpr (!std::is_trivially_destructible_v<Key>) {
			m_keys[index].~Key();
		}
		m_ctrl[index] = K_DELETED;
		m_size--;
	}

	void rehash(size_type new_capacity) {
		auto old_buffers = setup_rehash_buffers(new_capacity);
		reinsert_elements_from(old_buffers);
		finalize_rehash_buffers(std::move(old_buffers));
	}

	struct BufferSet {
		Key* keys_ptr;
		std::unique_ptr<unsigned char[]> key_buffer;
		std::unique_ptr<int8_t[]> ctrl_buffer;
		size_type capacity;
	};

	BufferSet setup_rehash_buffers(size_type new_capacity) {
		BufferSet old_buffers = { m_keys, std::move(m_key_buffer), std::move(m_ctrl), m_capacity };

		if (m_spare_capacity == new_capacity) {
			m_key_buffer = std::move(m_spare_key_buffer);
			m_keys = reinterpret_cast<Key*>(m_key_buffer.get());
			m_ctrl = std::move(m_spare_ctrl_buffer);
		} else {
			m_key_buffer = std::make_unique<unsigned char[]>(sizeof(Key) * new_capacity);
			m_keys = reinterpret_cast<Key*>(m_key_buffer.get());
			m_ctrl = std::make_unique<int8_t[]>(new_capacity + GROUP_SIZE);
		}

		m_capacity = new_capacity;
		std::memset(m_ctrl.get(), K_EMPTY, m_capacity);
		std::memset(m_ctrl.get() + m_capacity, K_SENTINEL, GROUP_SIZE);

		m_size = 0;
		m_occupied_slots = 0;

		return old_buffers;
	}

	void reinsert_elements_from(const BufferSet& old_buffers) {
		for (size_type i = 0; i < old_buffers.capacity; ++i) {
			if (old_buffers.ctrl_buffer[i] >= 0) {
				emplace(std::move(old_buffers.keys_ptr[i]));
				if constexpr (!std::is_trivially_destructible_v<Key>) {
					old_buffers.keys_ptr[i].~Key();
				}
			}
		}
	}

	void finalize_rehash_buffers(BufferSet&& old_buffers) {
		m_spare_key_buffer = std::move(old_buffers.key_buffer);
		m_spare_ctrl_buffer = std::move(old_buffers.ctrl_buffer);
		m_spare_capacity = old_buffers.capacity;
	}

	void destroy_keys() noexcept {
		if (!m_keys)
			return;
		if constexpr (!std::is_trivially_destructible_v<Key>) {
			for (size_type i = 0; i < m_capacity; ++i) {
				if (m_ctrl[i] >= 0) {
					m_keys[i].~Key();
				}
			}
		}
		std::memset(m_ctrl.get(), K_EMPTY, m_capacity);
		std::memset(m_ctrl.get() + m_capacity, K_SENTINEL, GROUP_SIZE);
		m_size = 0;
		m_occupied_slots = 0;
	}

	void copy_from(const DirtySet& other) {
		m_capacity = other.m_capacity;
		m_size = other.m_size;
		m_occupied_slots = other.m_occupied_slots;
		m_hasher = other.m_hasher;
		m_key_equal = other.m_key_equal;

		if (m_capacity > 0) {
			m_key_buffer = std::make_unique<unsigned char[]>(sizeof(Key) * m_capacity);
			m_keys = reinterpret_cast<Key*>(m_key_buffer.get());
			m_ctrl = std::make_unique<int8_t[]>(m_capacity + GROUP_SIZE);
			std::memcpy(m_ctrl.get(), other.m_ctrl.get(), m_capacity + GROUP_SIZE);
			for (size_type i = 0; i < m_capacity; ++i) {
				if (m_ctrl[i] >= 0) {
					new (&m_keys[i]) Key(other.m_keys[i]);
				}
			}
		}
	}

	static constexpr size_type next_power_of_two(size_type n) {
		if (n == 0)
			return 1;
		n--;
		n |= n >> 1;
		n |= n >> 2;
		n |= n >> 4;
		n |= n >> 8;
		n |= n >> 16;
		if constexpr (sizeof(size_type) > 4)
			n |= n >> 32;
		return ++n;
	}

	// --- Private Members ---
	static constexpr int8_t K_EMPTY = -128;
	static constexpr int8_t K_DELETED = -127;
	static constexpr int8_t K_SENTINEL = -1;

	Key* m_keys = nullptr;
	std::unique_ptr<unsigned char[]> m_key_buffer = nullptr;
	std::unique_ptr<int8_t[]> m_ctrl = nullptr;

	std::unique_ptr<unsigned char[]> m_spare_key_buffer = nullptr;
	std::unique_ptr<int8_t[]> m_spare_ctrl_buffer = nullptr;
	size_type m_spare_capacity = 0;

	size_type m_size = 0;
	size_type m_occupied_slots = 0;
	size_type m_capacity = 0;
	static constexpr float MAX_LOAD_FACTOR = 0.875f;

#if __has_cpp_attribute(no_unique_address)
	[[no_unique_address]] hasher m_hasher;
	[[no_unique_address]] key_equal m_key_equal;
#else
	hasher m_hasher;
	key_equal m_key_equal;
#endif
};

#endif // DIRTY_SET_HPP
