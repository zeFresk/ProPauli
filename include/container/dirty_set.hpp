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

template <
    typename Key,
    typename Hash = std::hash<Key>,
    typename KeyEqual = std::equal_to<Key>
>
class DirtySet {
private:
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
    template<bool IsConst>
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
        operator BasicIterator<true>() const {
            return BasicIterator<true>(m_keys, m_metadata, m_index, m_capacity);
        }

        friend bool operator==(const BasicIterator& lhs, const BasicIterator& rhs) noexcept {
            return lhs.m_index == rhs.m_index;
        }
        friend bool operator!=(const BasicIterator& lhs, const BasicIterator& rhs) noexcept {
            return !(lhs == rhs);
        }

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

    ~DirtySet() {
        destroy_keys();
    }

    DirtySet(const DirtySet& other) {
        copy_from(other);
    }

    DirtySet& operator=(const DirtySet& other) {
        if (this != &other) {
            destroy_keys();
            m_keys.reset();
            m_metadata.reset();
            copy_from(other);
        }
        return *this;
    }

    DirtySet(DirtySet&& other) noexcept = default;
    DirtySet& operator=(DirtySet&& other) noexcept = default;

    // --- Iterators ---

    iterator begin() noexcept {
        size_type index = 0;
        while (index < m_capacity && m_metadata[index].psl == 0) {
            index++;
        }
        return iterator(m_keys.get(), m_metadata.get(), index, m_capacity);
    }

    const_iterator begin() const noexcept {
        size_type index = 0;
        while (index < m_capacity && m_metadata[index].psl == 0) {
            index++;
        }
        return const_iterator(m_keys.get(), m_metadata.get(), index, m_capacity);
    }
    
    const_iterator cbegin() const noexcept {
        return begin();
    }

    iterator end() noexcept {
        return iterator(m_keys.get(), m_metadata.get(), m_capacity, m_capacity);
    }

    const_iterator end() const noexcept {
        return const_iterator(m_keys.get(), m_metadata.get(), m_capacity, m_capacity);
    }
    
    const_iterator cend() const noexcept {
        return end();
    }

    // --- Capacity ---

    [[nodiscard]] bool empty() const noexcept { return m_size == 0; }
    size_type size() const noexcept { return m_size; }

    void reserve(size_type capacity_hint) {
        if (capacity_hint == 0) return;
        size_type new_capacity = next_power_of_two(capacity_hint);
        if (new_capacity * MAX_LOAD_FACTOR > m_capacity * MAX_LOAD_FACTOR) {
            rehash(new_capacity);
        }
    }
    
    // --- Modifiers ---

    void clear() noexcept {
        destroy_keys();
        // Keep allocated memory for reuse.
    }
    
    std::pair<iterator, bool> emplace(Key&& key) {
        if (m_size + 1 > m_capacity * MAX_LOAD_FACTOR) {
            rehash(m_capacity > 0 ? m_capacity * 2 : 8);
        }
        return find_or_insert_impl(std::move(key));
    }

    template <typename Predicate>
    size_type erase_if(Predicate pred) {
        size_type removed_count = 0;
        for (size_type i = 0; i < m_capacity; ++i) {
            if (m_metadata[i].psl != 0 && pred(m_keys[i])) {
                erase_at(i);
                removed_count++;
                // After backward-shifting, the element at 'i' is new
                // and must be re-evaluated.
                --i;
            }
        }
        return removed_count;
    }

private:
    // --- Private Helper Functions ---

    void copy_from(const DirtySet& other) {
        m_capacity = other.m_capacity;
        m_size = other.m_size;
        m_hasher = other.m_hasher;
        m_key_equal = other.m_key_equal;
        
        if (m_capacity > 0) {
            m_keys = std::make_unique<Key[]>(m_capacity);
            m_metadata = std::make_unique<Metadata[]>(m_capacity);

            for (size_type i = 0; i < m_capacity; ++i) {
                m_metadata[i] = other.m_metadata[i];
                if (m_metadata[i].psl != 0) {
                    new (&m_keys[i]) Key(other.m_keys[i]);
                }
            }
        }
    }

    std::pair<iterator, bool> find_or_insert_impl(Key&& key) {
        const size_t hash = m_hasher(key);
        size_type index = hash & (m_capacity - 1);
        uint32_t current_psl = 1;

        while (true) {
            Metadata& meta = m_metadata[index];

            if (meta.psl == 0) { // Found an empty slot. Insert here.
                new (&m_keys[index]) Key(std::move(key));
                meta.stored_hash = hash;
                meta.psl = current_psl;
                m_size++;
                return {iterator(m_keys.get(), m_metadata.get(), index, m_capacity), true};
            }

            // Cheap hash comparison first, then expensive key comparison.
            if (meta.stored_hash == hash && m_key_equal(m_keys[index], key)) {
                return {iterator(m_keys.get(), m_metadata.get(), index, m_capacity), false};
            }
            
            // Robin Hood Hashing: If the element in the current slot is "richer"
            // (has a smaller PSL) than the element we are trying to insert,
            // we swap them and continue trying to find a home for the displaced element.
            if (meta.psl < current_psl) {
                // Swap metadata
                std::swap(current_psl, meta.psl);
                size_t temp_hash;
                std::swap(temp_hash, meta.stored_hash);
                std::swap(hash, temp_hash);

                // Swap the key we are trying to insert with the one in the slot.
                std::swap(key, m_keys[index]);
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
        m_keys[index].~Key(); // Manually destruct the key
        m_size--;

        // Backward-shift deletion:
        // Move subsequent elements in the probe chain back one slot to fill the gap.
        while (true) {
            size_type current_index = index;
            size_type next_index = (index + 1) & (m_capacity - 1);
            
            Metadata& next_meta = m_metadata[next_index];

            // If the next slot is empty or is in its ideal location, the chain is broken.
            if (next_meta.psl <= 1) {
                m_metadata[current_index].psl = 0; // Mark current slot as empty.
                return;
            }

            // Move the next element into the current (now empty) slot.
            new (&m_keys[current_index]) Key(std::move(m_keys[next_index]));
            m_keys[next_index].~Key();

            m_metadata[current_index] = {next_meta.stored_hash, next_meta.psl - 1};

            index = next_index;
        }
    }

    void rehash(size_type new_capacity) {
        // Keep old arrays alive until we are done moving from them.
        auto old_keys = std::move(m_keys);
        auto old_metadata = std::move(m_metadata);
        size_type old_capacity = m_capacity;

        // Allocate and commit new, empty arrays.
        m_keys = std::make_unique<Key[]>(new_capacity);
        m_metadata = std::make_unique<Metadata[]>(new_capacity);
        m_capacity = new_capacity;
        m_size = 0; // Reset size, will be incremented by insert_new.

        // Iterate old elements and insert them into the new arrays.
        for (size_type i = 0; i < old_capacity; ++i) {
            if (old_metadata[i].psl != 0) {
                // No re-hashing needed! We just use the stored hash.
                insert_new(std::move(old_keys[i]), old_metadata[i].stored_hash);
                old_keys[i].~Key(); // Manually destruct the moved-from key.
            }
        }
        // old_keys and old_metadata are destructed here, freeing the old memory.
    }

    void destroy_keys() noexcept {
        if (!m_keys) return;
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
        if (n == 0) return 1;
        // Efficient bit-twiddling algorithm.
        n--;
        n |= n >> 1;
        n |= n >> 2;
        n |= n >> 4;
        n |= n >> 8;
        n |= n >> 16;
        if constexpr (sizeof(size_type) > 4) n |= n >> 32;
        n++;
        return n;
    }

    // --- Private Members ---

    // Struct-of-Arrays (SoA) Layout:
    // This layout is more cache-friendly for probing. The probing loop only needs
    // to access the small `m_metadata` array. The larger `m_keys` array is only
    // accessed when a hash match is found.
    std::unique_ptr<Key[]> m_keys = nullptr;
    std::unique_ptr<Metadata[]> m_metadata = nullptr;
    
    size_type m_size = 0;
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
