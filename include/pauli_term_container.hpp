#ifndef PP_PAULI_CONTAINER_HPP
#define PP_PAULI_CONTAINER_HPP

/**
 * @file pauli_term_container.hpp
 * @brief Defines a memory-efficient, packed container for collections of Pauli terms.
 *
 * This file provides the `PauliTermContainer` class, a specialized container designed for
 * high-performance quantum circuit simulation. Its key feature is bit-packing: multiple
 * Pauli operators (2 bits each) are stored within larger underlying integer types. This
 * approach significantly reduces memory footprint and improves cache coherency for operations
 * over large observables.
 *
 * Access to individual terms is provided through lightweight, non-owning views, which
 * manipulate the packed data directly, avoiding costly unpacking and allocation.
 */

#include "pauli.hpp"
#include "pauli_term.hpp"
#include "container/bit_operations.hpp"
#include "adapter.hpp"
#include "symbolic/coefficient.hpp"

#include <algorithm>
#include <cassert>
#include <cstddef>
#include <iterator>
#include <string_view>
#include <vector>

/**
 * @brief A specialized container for storing Pauli terms in a memory-packed format.
 * @tparam T The numeric type for the coefficients (e.g., float, double).
 * @tparam Underlying The unsigned integer type used for packing Pauli operators.
 *
 * This container stores a collection of Pauli terms, representing an observable.
 * It separates the coefficients and the Pauli strings into two vectors. The Pauli strings
 * are bit-packed, with each `Pauli` operator using 2 bits. This makes the container
 * highly efficient for storing and processing large numbers of terms.
 *
 * @snippet tests/snippets/pauli_term_container.cpp pauli_term_container_usage
 */
template <typename T, typename Underlying = std::uint8_t>
class PauliTermContainer {
	/** @name Internal Data Layout
	 * @{
	 */
	std::vector<Underlying> raw_bits; ///< Contiguous memory for the bit-packed Pauli strings.
	std::vector<T> raw_coefficients; ///< Vector of coefficients, one for each Pauli term.
	std::vector<bool> dirty;
	std::size_t qubits; ///< The number of qubits for all terms in the container.
	/** @} */

	/** @name Packing Configuration
	 * These constants define the bit-packing strategy.
	 * @{
	 */
	static constexpr std::size_t DEFAULT_ALLOC = 8;
	std::size_t nb_underlying_per_pt;
	static constexpr Underlying BITS_PER_PAULI = 2;
	static_assert(1 << BITS_PER_PAULI == static_cast<Underlying>(Pauli_enum::Count));
	static constexpr Underlying MASK = compute_mask<Underlying>(BITS_PER_PAULI);
	static constexpr Underlying PAULIS_PER_UNDERLYING = (sizeof(Underlying) * 8) / BITS_PER_PAULI;
	static constexpr auto MASK_LUT = compute_mask_lut<Underlying, PAULIS_PER_UNDERLYING>();
	/** @} */

	/**
	 * @brief Resizes the internal `raw_bits` vector to accommodate a given number of terms.
	 */
	void resize_paulis_terms(std::size_t nb_pts) {
		const auto required_size = nb_pts * nb_underlying_per_pt;
		if (raw_bits.size() < required_size) {
			raw_bits.resize(required_size);
		}
	}

	/**
	 * @brief Computes the index in `raw_bits` for a specific qubit of a specific term.
	 */
	std::size_t compute_raw_bits_idx(std::size_t pt_idx, std::size_t qidx) const {
		assert(qidx < nb_qubits());
		assert(pt_idx < nb_terms());
		const auto vec_idx_more = qidx / PAULIS_PER_UNDERLYING;
		const auto vec_idx_base = pt_idx * nb_underlying_per_pt;
		const auto vec_idx = vec_idx_more + vec_idx_base;
		return vec_idx;
	}

	/**
	 * @brief Computes the sub-index (bit offset) within an `Underlying` value for a given qubit.
	 */
	std::size_t compute_sub_idx(std::size_t qidx) const {
		assert(qidx < nb_qubits());
		const std::size_t sub_idx = qidx % PAULIS_PER_UNDERLYING;
		return sub_idx;
	}

	/**
	 * @brief Sets a single Pauli operator in the packed representation.
	 */
	void set_pauli(std::size_t pt_idx, std::size_t qidx, Pauli p) {
		const auto vec_idx = compute_raw_bits_idx(pt_idx, qidx);
		const auto sub_idx = compute_sub_idx(qidx);
		const auto sub_mask = MASK_LUT[sub_idx];
		const Underlying p_v = static_cast<Underlying>(static_cast<Pauli_enum>(p));

		const auto masked_pv = (p_v << (sub_idx * BITS_PER_PAULI));
		raw_bits[vec_idx] = (raw_bits[vec_idx] & ~sub_mask) | masked_pv;
	}

	/**
	 * @brief Gets a single Pauli operator from the packed representation.
	 */
	Pauli get_pauli(std::size_t pt_idx, std::size_t qidx) const {
		const auto vec_idx = compute_raw_bits_idx(pt_idx, qidx);
		const auto sub_idx = compute_sub_idx(qidx);
		const auto sub_mask = MASK_LUT[sub_idx];

		const auto extracted = raw_bits[vec_idx] & sub_mask;
		const auto normalized = extracted >> (sub_idx * BITS_PER_PAULI);
		return Pauli(static_cast<Pauli_enum>(normalized));
	}

	/**
	 * @brief Calculates and sets the number of `Underlying` integers needed per Pauli term.
	 */
	void set_opti() {
		nb_underlying_per_pt = nb_qubits() / PAULIS_PER_UNDERLYING;
		if (nb_qubits() % PAULIS_PER_UNDERLYING > 0) { // align on whole Underlying
			nb_underlying_per_pt += 1;
		}
	}

	void set_qubits(std::size_t nb_qubits) {
		qubits = nb_qubits;
		set_opti();
	}

	bool is_dirty(std::size_t idx) const {
		assert(idx < nb_terms());
		//return true;
		return dirty[idx];
	}

	void set_dirty(std::size_t idx, bool v) {
		assert(idx < nb_terms());
		dirty[idx] = v;
	}

    public:
	/** @name Constructors
	 * @{
	 */

	/**
	 * @brief Constructs an empty container for a given number of qubits.
	 * @param nb_qubits The number of qubits.
	 */
	PauliTermContainer(std::size_t nb_qubits) {
		if (nb_qubits == 0) {
			throw std::invalid_argument("Observable with 0 qubits not allowed.");
		}
		set_qubits(nb_qubits);
		resize_paulis_terms(DEFAULT_ALLOC);
		raw_coefficients.reserve(DEFAULT_ALLOC);
		dirty.reserve(DEFAULT_ALLOC);
	}

	/**
	 * @brief Constructs the container from a range of `PauliTerm`-like objects.
	 * @tparam It An iterator type that dereferences to an object with `size()`, `coefficient()`, and `operator[]`.
	 */
	template <typename It, std::enable_if_t<std::is_convertible_v<decltype((*std::declval<It>()).coefficient()), T>, bool> = true>
	PauliTermContainer(It&& begin, It&& end) {
		const std::size_t size = std::distance(begin, end);
		if (size == 0) {
			throw std::invalid_argument("Observable with 0 terms not allowed.");
		}

		set_qubits(begin->size());
		auto bcopy = begin;

		resize_paulis_terms(std::max(DEFAULT_ALLOC, size));
		raw_coefficients.reserve(size);
		dirty.resize(size, true);
		std::size_t i = 0;
		for (; bcopy != end; ++bcopy, ++i) {
			raw_coefficients.push_back(bcopy->coefficient());
			if (bcopy->size() != nb_qubits()) {
				throw std::invalid_argument("All pauli terms should have the same number of qubits.");
			}
			for (std::size_t j = 0; j < qubits; ++j) {
				set_pauli(i, j, (*bcopy)[j]);
			}
		}
	}

	PauliTermContainer(std::span<PauliTerm<T>> const& sp) : PauliTermContainer(sp.begin(), sp.end()) {}
	PauliTermContainer(std::initializer_list<PauliTerm<T>> lst) : PauliTermContainer(lst.begin(), lst.end()) {}

	/**
	 * @brief Constructs the container from an initializer list of string views.
	 * @note Uses `AdapterIt` to lazily convert strings to `PauliTerm` objects during construction.
	 */
	PauliTermContainer(std::initializer_list<std::string_view> lst)
		: PauliTermContainer(AdapterIt<PauliTerm<T>, decltype(lst)::iterator>{ lst.begin() },
				     AdapterIt<PauliTerm<T>, decltype(lst)::iterator>{ lst.end() }) {}

	template <typename It, std::enable_if_t<std::is_convertible_v<decltype(*std::declval<It>()), std::string_view>, bool> = true>
	PauliTermContainer(It&& begin, It&& end)
		: PauliTermContainer(AdapterIt<PauliTerm<T>, It>{ std::forward<It>(begin) },
				     AdapterIt<PauliTerm<T>, It>{ std::forward<It>(end) }) {}
	/** @} */

	PauliTermContainer(PauliTermContainer const& oth) = default;
	PauliTermContainer& operator=(PauliTermContainer const& oth) = default;
	PauliTermContainer(PauliTermContainer&& oth) = default;
	PauliTermContainer& operator=(PauliTermContainer&& oth) = default;

	/** @name Capacity
	 * @{
	 */
	std::size_t nb_qubits() const { return qubits; }
	std::size_t nb_terms() const { return raw_coefficients.size(); }
	/** @} */

	/** @name Raw Data Access
	 * Methods for direct, indexed access to the packed data.
	 * @{
	 */
	Pauli get_qubit(std::size_t pt_index, std::size_t qubit) const {
		assert(pt_index < nb_terms());
		assert(qubit < nb_qubits());
		return get_pauli(pt_index, qubit);
	}

	void set_qubit(std::size_t pt_index, std::size_t qubit, Pauli p) {
		assert(pt_index < nb_terms());
		assert(qubit < nb_qubits());
		return set_pauli(pt_index, qubit, p);
	}

	T get_coefficient(std::size_t pt_index) const {
		assert(pt_index < nb_terms());
		return raw_coefficients[pt_index];
	}

	void set_coefficient(std::size_t pt_index, T c) {
		assert(pt_index < nb_terms());
		raw_coefficients[pt_index] = c;
	}

	std::vector<T> const& get_coefficients() const { return raw_coefficients; }

	/** @} */

	/** @name Fast Operations on Packed Data
	 * These methods operate directly on the raw packed bits for maximum performance.
	 * @{
	 */

	/**
	 * @brief Copies the packed Pauli string from one index to another.
	 * @param index_input The source term index.
	 * @param index_output The destination term index.
	 */
	void copy_fast(std::size_t index_input, std::size_t index_output) {
		assert(index_input < nb_terms());
		assert(index_output < nb_terms());
		std::copy(raw_bits.begin() + (index_input * nb_underlying_per_pt),
			  raw_bits.begin() + ((index_input + 1) * nb_underlying_per_pt),
			  raw_bits.begin() + (index_output * nb_underlying_per_pt));
	}

	/**
	 * @brief Computes a hash of a Pauli string directly from the packed data.
	 * @param index The index of the term to hash.
	 * @return A hash value for the Pauli string.
	 */
	std::size_t fast_phash(std::size_t index) const noexcept {
		assert(index < nb_terms());
		const auto start_idx = index * nb_underlying_per_pt;
		static constexpr std::size_t shift_num = sizeof(Underlying) * 8;
		static constexpr std::size_t max_shift = sizeof(std::size_t) * 8;
		std::size_t ret = 0;
		for (std::size_t i = 0; i < nb_underlying_per_pt; ++i) {
			const std::size_t uv = raw_bits[start_idx + i];
			ret ^= uv << ((i * shift_num) % max_shift);
		}
		return ret;
	}

	/**
	 * @brief Compares two Pauli strings for equality directly from the packed data.
	 * @param index_lhs The index of the first term.
	 * @param index_rhs The index of the second term.
	 * @return `true` if the Pauli strings are identical.
	 */
	bool fast_equal_bitstring(std::size_t index_lhs, std::size_t index_rhs) const noexcept {
		assert(index_lhs < nb_terms());
		assert(index_rhs < nb_terms());
		const std::size_t lhs_start = index_lhs * nb_underlying_per_pt;
		const std::size_t lhs_end = lhs_start + nb_underlying_per_pt;
		const std::size_t rhs_start = index_rhs * nb_underlying_per_pt;
		return std::equal(raw_bits.begin() + lhs_start, raw_bits.begin() + lhs_end, raw_bits.begin() + rhs_start);
	}

	/**
	 * @brief Calculates the Pauli weight of a term directly from the packed data.
	 * @param index The index of the term.
	 * @return The number of non-Identity operators in the term's Pauli string.
	 */
	std::size_t fast_pauli_weight(std::size_t index) const noexcept {
		assert(index < nb_terms());
		const auto start_idx = index * nb_underlying_per_pt;

		std::size_t ret = 0;
		for (std::size_t i = 0; i < nb_underlying_per_pt; ++i) {
			ret += count_nonzero_pairs(raw_bits[start_idx + i]);
		}
		return ret;
	}
/** @} */

// The implementation of the non-owning view classes is injected here.
#include "container/packed_pauli_term.inl"

	using non_owning_t = NonOwningPauliTermPacked;
	using ro_non_owning_t = ReadOnlyNonOwningPauliTermPacked;

	/**
	 * @brief Provides access to a Pauli term via a non-owning mutable view.
	 * @param idx The index of the term.
	 * @return A `NonOwningPauliTermPacked` view of the term at the given index.
	 * @note This is a lightweight operation that returns a view to the internal packed data.
	 */
	NonOwningPauliTermPacked operator[](std::size_t idx) {
		assert(idx < nb_terms());
		return { *this, idx };
	}

	/**
	 * @brief Provides access to a Pauli term via a non-owning read-only view.
	 * @param idx The index of the term.
	 * @return A `ReadOnlyNonOwningPauliTermPacked` view of the term at the given index.
	 */
	ReadOnlyNonOwningPauliTermPacked operator[](std::size_t idx) const {
		assert(idx < nb_terms());
		return { *this, idx };
	}

	/** @name Modifiers
	 * @{
	 */

	/**
	 * @brief Appends a new, zero-initialized Pauli term to the container.
	 * @return A non-owning view to the newly created term.
	 */
	[[nodiscard]] NonOwningPauliTermPacked create_pauliterm() {
		resize_paulis_terms(nb_terms() + 1);
		raw_coefficients.push_back(T{ 0 });
		dirty.push_back(true);
		return { *this, nb_terms() - 1 };
	}

	/**
	 * @brief Appends a copy of an existing Pauli term.
	 * @param idx The index of the term to duplicate.
	 * @return A non-owning view to the newly created duplicate term.
	 */
	[[nodiscard]] NonOwningPauliTermPacked duplicate_pauliterm(std::size_t idx) {
		assert(idx < nb_terms());
		auto np = create_pauliterm();
		np.fast_copy_content((*this)[idx]);
		np._set_dirty(true);
		return np;
	}

	/**
	 * @brief Removes a Pauli term from the container.
	 * @param idx The index of the term to remove.
	 * @note This operation uses a swap-and-pop technique. It has O(1) complexity but does not
	 * preserve the relative order of the remaining elements.
	 */
	void remove_pauliterm(std::size_t idx) {
		assert(idx < nb_terms());
		raw_coefficients[idx] = raw_coefficients.back();
		dirty[idx] = dirty.back();
		auto last = (*this)[nb_terms() - 1];
		auto to_del = (*this)[idx];
		to_del.fast_copy_content(last);
		raw_coefficients.pop_back();
		dirty.pop_back();
	}
/** @} */

// The implementation of the custom iterators is injected here.
#include "container/packed_iterators.inl"

	/** @name Iterators
	 * @{
	 */
	NonOwningIterator begin() { return NonOwningIterator{ *this, 0 }; }
	NonOwningIterator end() { return NonOwningIterator{ *this, nb_terms() }; }
	ReadOnlyNonOwningIterator cbegin() const { return ReadOnlyNonOwningIterator{ *this, 0 }; }
	ReadOnlyNonOwningIterator cend() const { return ReadOnlyNonOwningIterator{ *this, nb_terms() }; }
	auto begin() const { return cbegin(); }
	auto end() const { return cend(); }
	/** @} */

	/** @name Comparison
	 * @{
	 */

	/**
	 * @brief Checks for equality between two containers.
	 * @note This is an O(N^2) operation as it performs an unordered comparison of all terms.
	 */
	friend bool operator==(PauliTermContainer const& lhs, PauliTermContainer const& rhs) {
		if (!(lhs.nb_terms() == rhs.nb_terms() && lhs.nb_qubits() == rhs.nb_qubits())) {
			return false;
		}
		// NOTE: O(n^2) because we don't know if the terms are sorted in the same way.
		for (std::size_t i = 0; i < lhs.nb_terms(); ++i) {
			auto lhs_pt = lhs[i];
			bool found = false;
			for (std::size_t j = 0; j < rhs.nb_terms(); ++j) {
				if (lhs_pt == rhs[j]) {
					found = true;
					break;
				}
			}
			if (!found)
				return false;
		}
		return true;
	}

	friend bool operator!=(PauliTermContainer const& lhs, PauliTermContainer const& rhs) { return !(lhs == rhs); }
	/** @} */
};

namespace std
{
/**
 * @brief Erases elements from a `PauliTermContainer` that satisfy a specific criterion.
 * @relates PauliTermContainer
 * @param paulis The container from which to erase.
 * @param predicate A unary predicate that returns `true` for elements to be erased.
 * @return The number of elements erased.
 */
template <typename T, typename Predicate>
size_t erase_if(PauliTermContainer<T>& paulis, Predicate&& predicate) {
	auto deleted = 0;
	// We must iterate carefully as remove_pauliterm is a swap-and-pop.
	for (std::size_t i = 0; i < paulis.nb_terms();) {
		if (predicate(paulis[i])) {
			paulis.remove_pauliterm(i);
			++deleted;
			// After swap-and-pop, the element at `i` is new, so we don't increment.
		} else {
			++i;
		}
	}
	return deleted;
}
} // namespace std

/**
 * @brief Generic hash function object for Pauli-term-like objects.
 * @relates PauliTermContainer
 * @tparam T A type with a `phash()` method (e.g., `NonOwningPauliTermPacked`).
 */
template <typename T>
struct GenericPauliTermHash {
	std::size_t operator()(T const& pt) const noexcept { return pt.phash(); }
};

/**
 * @brief Generic equality comparator for the Pauli string part of Pauli-term-like objects.
 * @relates PauliTermContainer
 * @tparam T A type with an `equal_bitstring(const T&)` method.
 */
template <typename T>
struct GenericPauliStringEqual {
	bool operator()(T const& lhs, T const& rhs) const { return lhs.equal_bitstring(rhs); }
};

#endif
