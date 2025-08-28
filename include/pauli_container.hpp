#ifndef PP_PAULI_CONTAINER_HPP
#define PP_PAULI_CONTAINER_HPP

#include "pauli.hpp"
#include "pauli_term.hpp"
#include "container/bit_operations.hpp"
#include "adapter.hpp"

#include <algorithm>
#include <cstddef>
#include <iterator>
#include <string_view>
#include <vector>

template <typename T, typename Underlying = std::uint8_t>
class PauliTermContainer {
	std::vector<Underlying> raw_bits;
	std::vector<T> raw_coefficients;
	std::size_t qubits;

	// Number of pre allocated Pauli terms
	static constexpr std::size_t DEFAULT_ALLOC = 8;

	/* for packing */
	std::size_t nb_underlying_per_pt;
	static constexpr Underlying BITS_PER_PAULI = 2;
	static_assert(1 << BITS_PER_PAULI == static_cast<Underlying>(Pauli_enum::Count));
	static constexpr Underlying MASK = compute_mask<Underlying>(BITS_PER_PAULI);
	static constexpr Underlying PAULIS_PER_UNDERLYING = (sizeof(Underlying) * 8) / BITS_PER_PAULI;
	static constexpr auto MASK_LUT = compute_mask_lut<Underlying, PAULIS_PER_UNDERLYING>();

	void resize_paulis_terms(std::size_t nb_pts) {
		const auto required_size = nb_pts * nb_underlying_per_pt;
		if (raw_bits.size() < required_size) {
			raw_bits.resize(required_size);
		}
	}

	std::size_t compute_raw_bits_idx(std::size_t pt_idx, std::size_t qidx) const {
		assert(qidx < nb_qubits());
		assert(pt_idx < nb_terms());
		const auto vec_idx_more = qidx / PAULIS_PER_UNDERLYING;
		const auto vec_idx_base = pt_idx * nb_underlying_per_pt;
		const auto vec_idx = vec_idx_more + vec_idx_base;
		return vec_idx;
	}

	std::size_t compute_sub_idx(std::size_t qidx) const {
		assert(qidx < nb_qubits());
		const std::size_t sub_idx = qidx % PAULIS_PER_UNDERLYING;
		return sub_idx;
	}

	void set_pauli(std::size_t pt_idx, std::size_t qidx, Pauli p) {
		const auto vec_idx = compute_raw_bits_idx(pt_idx, qidx);
		const auto sub_idx = compute_sub_idx(qidx);
		const auto sub_mask = MASK_LUT[sub_idx];
		const Underlying p_v = static_cast<Underlying>(static_cast<Pauli_enum>(p));

		const auto masked_pv = (p_v << (sub_idx * BITS_PER_PAULI));
		raw_bits[vec_idx] = (raw_bits[vec_idx] & ~sub_mask) | masked_pv;
	}

	Pauli get_pauli(std::size_t pt_idx, std::size_t qidx) const {
		const auto vec_idx = compute_raw_bits_idx(pt_idx, qidx);
		const auto sub_idx = compute_sub_idx(qidx);
		const auto sub_mask = MASK_LUT[sub_idx];

		const auto extracted = raw_bits[vec_idx] & sub_mask;
		const auto normalized = extracted >> (sub_idx * BITS_PER_PAULI);
		return Pauli(static_cast<Pauli_enum>(normalized));
	}

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

    public:
	PauliTermContainer(std::size_t nb_qubits) {
		if (nb_qubits == 0) {
			throw std::invalid_argument("Observable with 0 qubits not allowed.");
		}
		set_qubits(nb_qubits);
		resize_paulis_terms(DEFAULT_ALLOC);
		raw_coefficients.reserve(DEFAULT_ALLOC);
	}

	template <typename It>
	PauliTermContainer(It&& begin, It&& end) {
		const std::size_t size = std::distance(begin, end);
		if (size == 0) {
			throw std::invalid_argument("Observable with 0 terms not allowed.");
		}

		set_qubits(begin->size());
		auto bcopy = begin;

		resize_paulis_terms(std::max(DEFAULT_ALLOC, size));
		raw_coefficients.reserve(size);
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

	PauliTermContainer(std::initializer_list<std::string_view> lst)
		: PauliTermContainer(AdapterIt<PauliTerm<T>, decltype(lst)::iterator>{ lst.begin() },
				     AdapterIt<PauliTerm<T>, decltype(lst)::iterator>{ lst.end() }) {}

	PauliTermContainer(PauliTermContainer const& oth) = default;
	PauliTermContainer& operator=(PauliTermContainer const& oth) = default;
	PauliTermContainer(PauliTermContainer&& oth) = default;
	PauliTermContainer& operator=(PauliTermContainer&& oth) = default;

	std::size_t nb_qubits() const { return qubits; }
	std::size_t nb_terms() const { return raw_coefficients.size(); }

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

	void copy_fast(std::size_t index_input, std::size_t index_output) {
		assert(index_input < nb_terms());
		assert(index_output < nb_terms());
		std::copy(raw_bits.begin() + (index_input * nb_underlying_per_pt),
			  raw_bits.begin() + ((index_input + 1) * nb_underlying_per_pt),
			  raw_bits.begin() + (index_output * nb_underlying_per_pt));
	}

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

	bool fast_equal_bitstring(std::size_t index_lhs, std::size_t index_rhs) const noexcept {
		assert(index_lhs < nb_terms());
		assert(index_rhs < nb_terms());
		const std::size_t lhs_start = index_lhs * nb_underlying_per_pt;
		const std::size_t lhs_end = lhs_start + nb_underlying_per_pt;
		const std::size_t rhs_start = index_rhs * nb_underlying_per_pt;
		return std::equal(raw_bits.begin() + lhs_start, raw_bits.begin() + lhs_end,
				  raw_bits.begin() + rhs_start);
	}

	std::size_t fast_pauli_weight(std::size_t index) const noexcept {
		assert(index < nb_terms());
		const auto start_idx = index * nb_underlying_per_pt;

		std::size_t ret = 0;
		for (std::size_t i = 0; i < nb_underlying_per_pt; ++i) {
			ret += count_nonzero_pairs(raw_bits[start_idx + i]);
		}
		return ret;
	}

	T get_coefficient(std::size_t pt_index) const {
		assert(pt_index < nb_terms());
		return raw_coefficients[pt_index];
	}

	void set_coefficient(std::size_t pt_index, T c) {
		assert(pt_index < nb_terms());
		raw_coefficients[pt_index] = c;
	}

	#include "container/packed_pauli_term.tpl"

	using non_owning_t = NonOwningPauliTermPacked;
	using ro_non_owning_t = ReadOnlyNonOwningPauliTermPacked;

	NonOwningPauliTermPacked operator[](std::size_t idx) {
		assert(idx < nb_terms());
		return { *this, idx };
	}

	ReadOnlyNonOwningPauliTermPacked operator[](std::size_t idx) const {
		assert(idx < nb_terms());
		return { *this, idx };
	}

	[[nodiscard]] NonOwningPauliTermPacked create_pauliterm() {
		resize_paulis_terms(nb_terms() + 1);
		raw_coefficients.push_back(T{ 0 });
		return { *this, nb_terms() - 1 };
	}

	[[nodiscard]] NonOwningPauliTermPacked duplicate_pauliterm(std::size_t idx) {
		assert(idx < nb_terms());
		auto np = create_pauliterm();
		np.fast_copy_content((*this)[idx]);
		return np;
	}

	void remove_pauliterm(std::size_t idx) {
		assert(idx < nb_terms());
		raw_coefficients[idx] = raw_coefficients[raw_coefficients.size() - 1];
		// TODO: more optimized, should be able to copy Underlying directly if two pts are not allowed to share one Underlying
		auto last = (*this)[nb_terms() - 1];
		auto to_del = (*this)[idx];
		to_del.fast_copy_content(last);
		raw_coefficients.pop_back();
	}

	#include "container/packed_iterators.tpl"

	NonOwningIterator begin() { return NonOwningIterator{ *this, 0 }; }
	NonOwningIterator end() { return NonOwningIterator{ *this, nb_terms() }; }
	ReadOnlyNonOwningIterator cbegin() const { return ReadOnlyNonOwningIterator{ *this, 0 }; }
	ReadOnlyNonOwningIterator cend() const { return ReadOnlyNonOwningIterator{ *this, nb_terms() }; }
	auto begin() const { return cbegin(); }
	auto end() const { return cend(); }

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
};

namespace std
{
template <typename T, typename Predicate>
size_t erase_if(PauliTermContainer<T>& paulis, Predicate&& predicate) {
	auto deleted = 0;
	for (std::size_t i = 0; i < paulis.nb_terms(); ++i) {
		const auto ronopt = paulis[i];
		if (predicate(ronopt)) {
			paulis.remove_pauliterm(i);
			--i;
			++deleted;
		}
	}
	return deleted;
}
} // namespace std

template <typename T>
struct GenericPauliTermHash {
	std::size_t operator()(T const& pt) const noexcept { return pt.phash(); }
};

template <typename T>
struct GenericPauliStringEqual {
	bool operator()(T const& lhs, T const& rhs) const { return lhs.equal_bitstring(rhs); }
};

#endif
