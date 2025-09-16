#ifndef DIRTY_SET_HPP
#define DIRTY_SET_HPP

#include <cstddef>
#include <cstdint>
#include <functional>
#include <iterator>
#include <memory>
#include <new>
#include <stdexcept>
#include <type_traits>
#include <utility>
#include <cassert>

template <typename Key, typename Hash = std::hash<Key>, typename KeyEqual = std::equal_to<Key>>
class DirtySet {
    private:
	// A sentinel value for the psl field to indicate a slot is empty
	// but was previously occupied (a "tombstone").
	static constexpr uint32_t K_DELETED = UINT32_MAX;

	// --- Internal Data Structures ---

	struct Metadata {
		// Full hash is stored to speed up rehashes and equality checks.
		// Probing can first compare hashes (a cheap size_t comparison)
		// before calling the potentially expensive KeyEqual functor.
		size_t stored_hash;

		// Probe Sequence Length (PSL). A measure of how far this element is
		// from its ideal location.
		// A PSL of 0 indicates an empty/never-used slot.
		// A PSL of 1 means the element is in its ideal location.
		// A PSL > 1 means the element was displaced due to a collision.
		uint32_t psl = 0;
	};

    public:
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

		// Allow conversion from iterator to const_iterator
		operator BasicIterator<true>() const { return BasicIterator<true>(m_keys, m_metadata, m_index, m_capacity); }

		friend bool operator==(const BasicIterator& lhs, const BasicIterator& rhs) noexcept { return lhs.m_index == rhs.m_index; }
		friend bool operator!=(const BasicIterator& lhs, const BasicIterator& rhs) noexcept { return !(lhs == rhs); }

	    private:
		friend class DirtySet;
		using KeyPtr = std::conditional_t<IsConst, const Key*, Key*>;
		using MetaPtr = std::conditional_t<IsConst, const Metadata*, Metadata*>;

		BasicIterator(KeyPtr keys, MetaPtr metadata, size_type index, size_type capacity) noexcept
			: m_keys(keys), m_metadata(metadata), m_index(index), m_capacity(capacity) {}

		void advance_to_next_full() {
			++m_index;
			while (m_index < m_capacity && m_metadata[m_index].psl == 0) {
				++m_index;
			}
		}

		KeyPtr m_keys = nullptr;
		MetaPtr m_metadata = nullptr;
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
			// Operate on the unique_ptr for memory management.
			m_key_buffer.reset();
			m_keys = nullptr; // Nullify the raw pointer.
			m_metadata.reset();
			copy_from(other);
		}
		return *this;
	}

	// --- Move Constructor ---
	DirtySet(DirtySet&& other) noexcept
		: m_keys(other.m_keys), m_key_buffer(std::move(other.m_key_buffer)), m_metadata(std::move(other.m_metadata)),
		  m_size(other.m_size), m_capacity(other.m_capacity), m_hasher(std::move(other.m_hasher)),
		  m_key_equal(std::move(other.m_key_equal)) {
		// Leave the moved-from object in a valid, empty state.
		other.m_keys = nullptr;
		other.m_size = 0;
		other.m_capacity = 0;
	}

	// --- Move Assignment Operator ---
	DirtySet& operator=(DirtySet&& other) noexcept {
		if (this != &other) {
			// Destroy our own elements before overwriting
			destroy_keys();

			m_keys = other.m_keys;
			m_key_buffer = std::move(other.m_key_buffer);
			m_metadata = std::move(other.m_metadata);
			m_size = other.m_size;
			m_capacity = other.m_capacity;
			m_hasher = std::move(other.m_hasher);
			m_key_equal = std::move(other.m_key_equal);

			// Leave the moved-from object in a valid, empty state.
			other.m_keys = nullptr;
			other.m_size = 0;
			other.m_capacity = 0;
		}
		return *this;
	};

	// --- Iterators ---

	iterator begin() noexcept {
		size_type index = 0;
		while (index < m_capacity && m_metadata[index].psl == 0) {
			index++;
		}
		// Pass the raw pointer directly, no .get()
		return iterator(m_keys, m_metadata.get(), index, m_capacity);
	}

	const_iterator begin() const noexcept {
		size_type index = 0;
		while (index < m_capacity && m_metadata[index].psl == 0) {
			index++;
		}
		// Pass the raw pointer directly, no .get()
		return const_iterator(m_keys, m_metadata.get(), index, m_capacity);
	}

	const_iterator cbegin() const noexcept { return begin(); }

	iterator end() noexcept {
		// Pass the raw pointer directly, no .get()
		return iterator(m_keys, m_metadata.get(), m_capacity, m_capacity);
	}

	const_iterator end() const noexcept {
		// Pass the raw pointer directly, no .get()
		return const_iterator(m_keys, m_metadata.get(), m_capacity, m_capacity);
	}

	const_iterator cend() const noexcept { return end(); }

	// --- Capacity ---

	[[nodiscard]] bool empty() const noexcept { return m_size == 0; }
	size_type size() const noexcept { return m_size; }
	size_type capacity() const noexcept { return m_capacity;}

	void reserve(size_type capacity_hint) {
		if (capacity_hint == 0)
			return;
		size_type new_capacity = next_power_of_two(capacity_hint);
		if (new_capacity * MAX_LOAD_FACTOR > m_capacity * MAX_LOAD_FACTOR) {
			rehash(new_capacity);
		}
	}

	// --- Modifiers ---

	void clear() noexcept {
		destroy_keys();
		m_size = 0;
		m_occupied_slots = 0;
		// Keep allocated memory for reuse.
	}

	std::pair<iterator, bool> emplace(Key&& key) {
		if (m_occupied_slots + 1 > m_capacity * MAX_LOAD_FACTOR) {
			rehash(m_capacity > 0 ? m_capacity * 2 : 8);
		}
		return find_or_insert_impl(std::move(key));
	}

	template <typename Predicate>
	size_type erase_if(Predicate pred) {
		size_type removed_count = 0;
		for (size_type i = 0; i < m_capacity; ++i) {
			if (m_metadata[i].psl > 0 && m_metadata[i].psl != K_DELETED && pred(m_keys[i])) {
				erase_at(i);
				removed_count++;
			}
		}
		return removed_count;
	}

	void compact() {
		// Only trigger a rehash if there is a meaningful number of tombstones.
		// Heuristic: Rehash if the number of occupied slots is greater than the
		// number of live elements, indicating at least one tombstone exists.
		if (m_occupied_slots > m_size && m_capacity > 0) {
			// We could also rehash to a smaller capacity if m_size is very low,
			// but for simplicity, we'll rehash to the current capacity.
			rehash(m_capacity);
		}
	}

    private:
	// --- Private Helper Functions ---
	void emplace_at_index(size_type index, Key&& key, size_t hash, uint32_t psl) {
		Metadata& meta = m_metadata[index];

		// Only increment occupied count if we are filling a never-used slot.
		if (meta.psl == 0) {
			m_occupied_slots++;
		}

		// Check if we are overwriting a tombstone or inserting into a fresh slot.
		if (meta.psl == K_DELETED) {
			// Reclaiming a tombstone.
			if constexpr (std::is_trivially_move_assignable_v<Key>) {
				// For PODs, we can just move-assign over the garbage data.
				m_keys[index] = std::move(key);
			} else {
				// For complex types, the old object was already destroyed.
				// We only need to construct the new one in its place.
				new (&m_keys[index]) Key(std::move(key));
			}
		} else {
			// Inserting into a never-used (psl == 0) slot.
			// Always use placement new here.
			new (&m_keys[index]) Key(std::move(key));
		}

		meta.stored_hash = hash;
		meta.psl = psl;
		m_size++;
	}

	void copy_from(const DirtySet& other) {
		m_capacity = other.m_capacity;
		m_size = other.m_size;
		m_hasher = other.m_hasher;
		m_key_equal = other.m_key_equal;

		if (m_capacity > 0) {
			m_key_buffer = std::make_unique<unsigned char[]>(sizeof(Key) * m_capacity);
			m_keys = reinterpret_cast<Key*>(m_key_buffer.get());
			m_metadata = std::make_unique<Metadata[]>(m_capacity);

			for (size_type i = 0; i < m_capacity; ++i) {
				m_metadata[i] = other.m_metadata[i];
				if (m_metadata[i].psl != 0) {
					// Use placement new to copy-construct the key into the raw buffer.
					new (&m_keys[i]) Key(other.m_keys[i]);
				}
			}
		}
	}

	std::pair<iterator, bool> find_or_insert_impl(Key&& key) {
		size_t hash = m_hasher(key);
		size_type index = hash & (m_capacity - 1);
		uint32_t current_psl = 1;

		// Use m_capacity as the sentinel value for 'not found'. A valid index is always < m_capacity.
		size_type first_tombstone_idx = m_capacity;

		while (true) {
			Metadata& meta = m_metadata[index];

			if (meta.psl == 0) { // Found a truly empty slot. The key does not exist.
				// Decide where to insert: at the first tombstone or this new empty slot.
				size_type insert_idx = (first_tombstone_idx != m_capacity) ? first_tombstone_idx : index;
				emplace_at_index(insert_idx, std::move(key), hash, current_psl);
				return { iterator(m_keys, m_metadata.get(), insert_idx, m_capacity), true };
			}

			if (meta.psl == K_DELETED) {
				// Record the first tombstone, but keep searching for duplicates.
				if (first_tombstone_idx == m_capacity) {
					first_tombstone_idx = index;
				}
			} else if (meta.stored_hash == hash && m_key_equal(m_keys[index], key)) {
				// Found the key. Return iterator to existing element.
				return { iterator(m_keys, m_metadata.get(), index, m_capacity), false };
			} else if (meta.psl < current_psl) {
				// Robin Hood swap.
				std::swap(current_psl, meta.psl);
				std::swap(hash, meta.stored_hash);
				std::swap(key, m_keys[index]);
				// After swapping, we are now trying to insert a new key,
				// so our previous tombstone discovery is invalid for this new key.
				first_tombstone_idx = m_capacity;
			}

			current_psl++;
			index = (index + 1) & (m_capacity - 1);
		}
	}

	void insert_new(Key&& key, size_t hash) {
		size_type index = hash & (m_capacity - 1);
		uint32_t current_psl = 1;

		while (true) {
			Metadata& meta = m_metadata[index];

			if (meta.psl == 0) { // Found an empty slot. Insert here.
				new (&m_keys[index]) Key(std::move(key));
				meta.stored_hash = hash;
				meta.psl = current_psl;
				m_occupied_slots++;
				m_size++;
				return;
			}

			if (meta.psl < current_psl) {
				std::swap(current_psl, meta.psl);
				size_t temp_hash;
				std::swap(temp_hash, meta.stored_hash);
				std::swap(hash, temp_hash);
				std::swap(key, m_keys[index]);
			}

			current_psl++;
			index = (index + 1) & (m_capacity - 1);
		}
	}

	void erase_at(size_type index) {
		// For complex types with resources, we must call the destructor.
		// For trivial types (PODs, ints, etc.), this is a no-op and is compiled out.
		if constexpr (!std::is_trivially_destructible_v<Key>) {
			m_keys[index].~Key();
		}

		// Mark the slot as a tombstone. The old key data is left in place for trivial types.
		m_metadata[index].psl = K_DELETED;
		m_size--;
	}

	void rehash(size_type new_capacity) {
		// Keep old data alive until we are done moving from it.
		Key* old_keys_ptr = m_keys;
		auto old_key_buffer = std::move(m_key_buffer);
		auto old_metadata = std::move(m_metadata);
		size_type old_capacity = m_capacity;

		// Allocate and commit new, empty arrays.
		m_key_buffer = std::make_unique<unsigned char[]>(sizeof(Key) * new_capacity);
		m_keys = reinterpret_cast<Key*>(m_key_buffer.get());

		m_metadata = std::make_unique<Metadata[]>(new_capacity);
		m_capacity = new_capacity;
		m_size = 0; // Reset size, will be incremented by insert_new.
		m_occupied_slots = 0;

		// Iterate old elements and insert them into the new arrays.
		for (size_type i = 0; i < old_capacity; ++i) {
			if (old_metadata[i].psl != 0 && old_metadata[i].psl != K_DELETED) {
				insert_new(std::move(old_keys_ptr[i]), old_metadata[i].stored_hash);
				old_keys_ptr[i].~Key(); // Manually destruct the moved-from key.
			}
		}

		m_occupied_slots = m_size; // This is the simplest way to sync.
		// old_key_buffer and old_metadata are destructed here, freeing the old memory.
	}

	void destroy_keys() noexcept {
		if (!m_keys)
			return;
		for (size_type i = 0; i < m_capacity; ++i) {
			if (m_metadata[i].psl != 0) {
				m_keys[i].~Key();
				m_metadata[i].psl = 0; // Reset metadata
			}
		}
		m_size = 0;
	}

	// Finds the smallest power of two that is >= n.
	static constexpr size_type next_power_of_two(size_type n) {
		if (n == 0)
			return 1;
		// Efficient bit-twiddling algorithm.
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

	// Struct-of-Arrays (SoA) Layout:
	// This layout is more cache-friendly for probing. The probing loop only needs
	// to access the small `m_metadata` array. The larger `m_keys` array is only
	// accessed when a hash match is found.
	Key* m_keys = nullptr; // Raw, non-owning pointer toi the start of the key buffer.
	std::unique_ptr<unsigned char[]> m_key_buffer = nullptr; // Owns the raw memory.

	std::unique_ptr<Metadata[]> m_metadata = nullptr;

	size_type m_size = 0;
	size_type m_occupied_slots = 0;
	size_type m_capacity = 0;
	static constexpr float MAX_LOAD_FACTOR = 0.85f;

	// Use C++20 [[no_unique_address]] for Empty Base Optimization.
	// If the Hasher or KeyEqual are empty structs (like std::hash),
	// they will not take up any space in the DirtySet object.
#if __has_cpp_attribute(no_unique_address)
	[[no_unique_address]] hasher m_hasher;
	[[no_unique_address]] key_equal m_key_equal;
#else
	hasher m_hasher;
	key_equal m_key_equal;
#endif
};

#endif // DIRTY_SET_HPP
