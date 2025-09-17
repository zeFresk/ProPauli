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

// SSE2 Intrinsics Header
#include <immintrin.h>

#if defined(__GNUC__) || defined(__clang__)
// Compilers like GCC and Clang provide __builtin_ctz
#else
// For MSVC, we need to include <intrin.h> for _BitScanForward
#include <intrin.h>
#pragma intrinsic(_BitScanForward)
#endif

template <typename Key, typename Hash = std::hash<Key>, typename KeyEqual = std::equal_to<Key>>
class DirtySet {
    public:
	// Enforce SSE2 support at compile time.
#if defined(__SSE2__)
	// This space is intentionally left blank.
#else
	static_assert(false, "DirtySet v3.0 requires SSE2 support. Please compile with appropriate flags (e.g., -msse2).");
#endif

	// --- Type Aliases (STL-compliant) ---
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

	// The group size is fixed by the SIMD register width. For SSE2, it's 16 bytes.
	static constexpr size_type GROUP_SIZE = 16;

	// --- Forward Iterator Implementation ---
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
			// A non-negative control byte denotes a full slot.
			while (m_index < m_capacity && m_ctrl[m_index] < 0) {
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
		if (capacity_hint == 0)
			return;
		size_type new_capacity = next_power_of_two(capacity_hint);
		if (new_capacity > m_capacity) {
			rehash(new_capacity);
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

	static inline size_t count_trailing_zeros(uint32_t mask) {
#if defined(__GNUC__) || defined(__clang__)
		return __builtin_ctz(mask);
#else
		unsigned long index;
		_BitScanForward(&index, mask);
		return index;
#endif
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

	std::pair<iterator, bool> find_or_insert_impl(Key key) {
		size_t hash = m_hasher(key);
		HashInfo info = split_hash(hash);

		size_type start_index = info.h1 & (m_capacity - 1);
		size_type probe_num = 0;

		// Keep track of the first tombstone we find. This is our preferred insertion spot.
		size_type first_tombstone_idx = m_capacity; // Use capacity as sentinel for 'not found'

		while (true) {
			size_type probe_offset = (probe_num * (probe_num + 1)) / 2;
			size_type group_index = (start_index + probe_offset) & (m_capacity - 1);

			__m128i group_ctrl = _mm_loadu_si128(reinterpret_cast<const __m128i*>(&m_ctrl[group_index]));

			// --- 1. Search for Matching H2 (for finding duplicates) ---
			__m128i h2_vector = _mm_set1_epi8(info.h2);
			uint32_t match_mask = _mm_movemask_epi8(_mm_cmpeq_epi8(group_ctrl, h2_vector));

			while (match_mask != 0) {
				size_t bit_pos = count_trailing_zeros(match_mask);
				size_type index = (group_index + bit_pos) & (m_capacity - 1);
				if (m_key_equal(m_keys[index], key)) {
					return { iterator(m_keys, m_ctrl.get(), index, m_capacity), false };
				}
				match_mask &= ~(1 << bit_pos);
			}

			// --- 2. Search for an Empty Slot (to terminate the search) ---
			// Only K_EMPTY (-128) terminates the search. Tombstones (K_DELETED) do not.
			__m128i empty_vector = _mm_set1_epi8(K_EMPTY);
			uint32_t empty_mask = _mm_movemask_epi8(_mm_cmpeq_epi8(group_ctrl, empty_vector));

			// While we are here, also find tombstones to decide where to insert.
			if (first_tombstone_idx == m_capacity) {
				__m128i deleted_vector = _mm_set1_epi8(K_DELETED);
				uint32_t deleted_mask = _mm_movemask_epi8(_mm_cmpeq_epi8(group_ctrl, deleted_vector));
				if (deleted_mask != 0) {
					size_t bit_pos = count_trailing_zeros(deleted_mask);
					first_tombstone_idx = (group_index + bit_pos) & (m_capacity - 1);
				}
			}

			if (empty_mask != 0) {
				// A truly empty slot was found, guaranteeing the key does not exist.
				// Now, we decide where to insert.
				size_type insert_idx;
				if (first_tombstone_idx != m_capacity) {
					// We found a tombstone on our search path, so we reuse it.
					insert_idx = first_tombstone_idx;
				} else {
					// No tombstones found, so insert at the empty slot we just found.
					size_t bit_pos = count_trailing_zeros(empty_mask);
					insert_idx = (group_index + bit_pos) & (m_capacity - 1);
				}

				if (m_ctrl[insert_idx] == K_EMPTY) {
					m_occupied_slots++;
				}
				new (&m_keys[insert_idx]) Key(std::move(key));
				m_ctrl[insert_idx] = info.h2;
				m_size++;
				return { iterator(m_keys, m_ctrl.get(), insert_idx, m_capacity), true };
			}

			probe_num++;
			//assert(probe_offset < m_capacity && "Hash table is full, but load factor check failed.");
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
		Key* old_keys_ptr = m_keys;
		auto old_key_buffer = std::move(m_key_buffer);
		auto old_ctrl_buffer = std::move(m_ctrl);
		size_type old_capacity = m_capacity;

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

		for (size_type i = 0; i < old_capacity; ++i) {
			if (old_ctrl_buffer[i] >= 0) {
				emplace(std::move(old_keys_ptr[i]));
				if constexpr (!std::is_trivially_destructible_v<Key>) {
					old_keys_ptr[i].~Key();
				}
			}
		}

		m_spare_key_buffer = std::move(old_key_buffer);
		m_spare_ctrl_buffer = std::move(old_ctrl_buffer);
		m_spare_capacity = old_capacity;
	}

	void destroy_keys() noexcept {
		if (!m_keys)
			return;
		for (size_type i = 0; i < m_capacity; ++i) {
			if (m_ctrl[i] >= 0) {
				if constexpr (!std::is_trivially_destructible_v<Key>) {
					m_keys[i].~Key();
				}
			}
		}
		m_size = 0;
		m_occupied_slots = 0;
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
		n++;
		return n;
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
