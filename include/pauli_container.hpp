#ifndef PP_PAULI_CONTAINER_HPP
#define PP_PAULI_CONTAINER_HPP

#include "pauli.hpp"
#include "pauli_term.hpp"

#include <algorithm>
#include <bit>
#include <cstddef>
#include <iostream>
#include <iterator>
#include <string_view>
#include <utility>
#include <vector>

template <typename T>
constexpr T compute_mask(T nb_bits) {
	T ret = 0;
	for (T i = 0; i < nb_bits; ++i) {
		ret |= (1 << i);
	}
	return ret;
}

template <typename T>
constexpr std::size_t minimum_size(std::size_t nb_objs, T objs_per_underlying) {
	auto rem = nb_objs % objs_per_underlying;
	auto quo = nb_objs / objs_per_underlying;
	return quo + (1 * (rem > 0));
}

template <typename T>
constexpr T compute_mask_idx(std::size_t idx, T mask, T objs_per_underlying, T bits_per_obj) {
	auto rem = idx % objs_per_underlying;
	return mask << (rem * bits_per_obj);
}

template <typename T>
constexpr std::size_t compute_idx(std::size_t idx, T objs_per_underlying) {
	return idx / objs_per_underlying;
}

template <typename T>
constexpr void set_on_mask(T& out, T mask, T masked_value) {
	out &= ~mask; // set bits to 0
	out |= masked_value;
}

template <typename Underlying, std::size_t OBJS_PER_UNDERLYING>
constexpr std::array<Underlying, OBJS_PER_UNDERLYING> compute_mask_lut() {
	const Underlying bits_per_obj = (sizeof(Underlying) * 8) / OBJS_PER_UNDERLYING;
	const Underlying mask = compute_mask<Underlying>(bits_per_obj);
	std::array<Underlying, OBJS_PER_UNDERLYING> ret;
	for (Underlying i = 0; i < OBJS_PER_UNDERLYING; ++i) {
		ret[i] = mask << (i * bits_per_obj);
	}
	return ret;
}

template <std::unsigned_integral T>
constexpr T create_low_bit_mask() {
	T mask = 0;
	for (size_t i = 0; i < sizeof(T) * 8; i += 2) {
		mask |= (T(1) << i);
	}
	return mask;
}

template <std::unsigned_integral T>
constexpr int count_nonzero_pairs(T input) {
	static constexpr T low_bits_mask = create_low_bit_mask<T>();
	static constexpr T high_bits_mask = low_bits_mask << 1;

	const T low_bits = input & low_bits_mask;
	const T high_bits_shifted = (input & high_bits_mask) >> 1;
	const T result_bits = low_bits | high_bits_shifted;

	return std::popcount(result_bits);
}

template <typename T, typename Underlying = std::uint64_t>
class PauliTermContainer {
	template <typename O, typename A = std::allocator<O>>
	class default_init_allocator : public A {
		typedef std::allocator_traits<A> a_t;

	    public:
		template <typename U>
		struct rebind {
			using other = default_init_allocator<U, typename a_t::template rebind_alloc<U>>;
		};

		using A::A;

		template <typename U>
		void construct(U* ptr) noexcept(std::is_nothrow_default_constructible<U>::value) {
			::new (static_cast<void*>(ptr)) U;
		}
		template <typename U, typename... Args>
		void construct(U* ptr, Args&&... args) {
			a_t::construct(static_cast<A&>(*this), ptr, std::forward<Args>(args)...);
		}
	};
	// std::vector<Pauli, default_init_allocator<Pauli>> raw_paulis;
	// std::vector<Pauli> raw_paulis;
	std::vector<Underlying> raw_bits;
	std::size_t nb_underlying_per_pt;
	std::vector<T> raw_coefficients;
	std::size_t qubits;

	static constexpr std::size_t DEFAULT_ALLOC = 8;
	static constexpr std::size_t GROWTH_FACTOR_NUM = 5;
	static constexpr std::size_t GROWTH_FACTOR_DENUM = 2;

	static constexpr Underlying BITS_PER_PAULI = 2;
	static constexpr Underlying MASK = compute_mask<Underlying>(BITS_PER_PAULI);
	static constexpr Underlying PAULIS_PER_UNDERLYING = (sizeof(Underlying) * 8) / BITS_PER_PAULI;
	static_assert(MASK == 3);
	static constexpr auto MASK_LUT = compute_mask_lut<Underlying, PAULIS_PER_UNDERLYING>();
	static_assert(MASK_LUT.size() == PAULIS_PER_UNDERLYING);

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

	std::size_t compute_index(std::size_t term, std::size_t qubit) const { return term * qubits + qubit; }
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

	class ReadOnlyNonOwningPauliTermPacked {
	    protected:
		std::reference_wrapper<const PauliTermContainer<T, Underlying>> ptc;
		std::size_t idx;

	    public:
		ReadOnlyNonOwningPauliTermPacked(PauliTermContainer<T, Underlying> const& ptc_, std::size_t index)
			: ptc(ptc_), idx(index) {}

		T expectation_value() const {
			for (std::size_t i = 0; i < size(); ++i) {
				if (!get_pauli(i).commutes_with(p_z)) {
					return T{ 0 };
				}
			}
			return coefficient();
		}

		Pauli get_pauli(std::size_t qidx) const { return ptc.get().get_qubit(idx, qidx); }
		decltype(auto) size() const { return ptc.get().nb_qubits(); }
		// decltype(auto) begin() const { return PackedPauliIterator{ ptc, idx }; }
		// decltype(auto) end() const { return PackedPauliIterator{ ptc, idx + 1 }; }

		explicit operator PauliTerm<T>() const {
			std::vector<Pauli> paulis;
			paulis.reserve(size());
			for (std::size_t i = 0; i < size(); ++i) {
				paulis.push_back(get_pauli(i));
			}
			return PauliTerm<T>{ paulis.begin(), paulis.end(), coefficient() };
		}

		std::size_t phash() const noexcept { return ptc.get().fast_phash(idx); }

		friend bool operator==(ReadOnlyNonOwningPauliTermPacked const& lhs,
				       ReadOnlyNonOwningPauliTermPacked const& rhs) {
			return (lhs.size() == rhs.size()) && (lhs.coefficient() == rhs.coefficient()) &&
			       lhs.equal_bitstring(rhs);
		}
		friend bool operator==(ReadOnlyNonOwningPauliTermPacked const& lhs, PauliTerm<T> const& rhs) {
			return static_cast<PauliTerm<T>>(lhs) == rhs;
		}
		friend bool operator==(PauliTerm<T> const& lhs, ReadOnlyNonOwningPauliTermPacked const& rhs) {
			return rhs == lhs;
		}

		bool equal_bitstring(ReadOnlyNonOwningPauliTermPacked const& oth) const {
			return (&ptc.get() == &oth.ptc.get()) ? ptc.get().fast_equal_bitstring(idx, oth.idx) :
								slow_equal_bitstring(oth);
		}

		bool slow_equal_bitstring(ReadOnlyNonOwningPauliTermPacked const& oth) const {
			if (oth.size() != size())
				return false;
			for (std::size_t i = 0; i < size(); ++i) {
				if (get_pauli(i) != oth.get_pauli(i)) {
					return false;
				}
			}
			return true;
		}

		T coefficient() const noexcept { return ptc.get().get_coefficient(idx); }

		std::size_t pauli_weight() const noexcept { return ptc.get().fast_pauli_weight(idx); }

		friend std::ostream& operator<<(std::ostream& os, ReadOnlyNonOwningPauliTermPacked const& pt) {
			os << std::showpos << pt.coefficient() << " ";
			for (std::size_t i = 0; i < pt.size(); ++i) {
				os << pt.get_pauli(i);
			}
			return os;
		}
	};

	class NonOwningPauliTermPacked {
		std::reference_wrapper<PauliTermContainer<T, Underlying>> ptc;
		std::size_t idx;

	    public:
		NonOwningPauliTermPacked(PauliTermContainer<T, Underlying>& ptc_, std::size_t index)
			: ptc(ptc_), idx(index) {}

		T expectation_value() const {
			for (std::size_t i = 0; i < ptc.nb_qubits(); ++i) {
				if (!get_pauli(i).commutes_with(p_z)) {
					return T{ 0 };
				}
			}
			return ptc.get_coefficient(idx);
		}

		Pauli get_pauli(std::size_t qidx) const { return ptc.get().get_qubit(idx, qidx); }
		void set_pauli(std::size_t qidx, Pauli p) { ptc.get().set_qubit(idx, qidx, p); }
		decltype(auto) size() const { return ptc.get().nb_qubits(); }
		// decltype(auto) begin() const { return PackedPauliIterator{ ptc, idx }; }
		// decltype(auto) end() const { return PackedPauliIterator{ ptc, idx + 1 }; }

		explicit operator PauliTerm<T>() const {
			std::vector<Pauli> paulis;
			paulis.reserve(size());
			for (std::size_t i = 0; i < size(); ++i) {
				paulis.push_back(get_pauli(i));
			}
			PauliTerm<T> ret{ paulis.begin(), paulis.end(), coefficient() };
			return ret;
		}

		std::size_t phash() const noexcept { return ptc.get().fast_phash(idx); }

		friend bool operator==(NonOwningPauliTermPacked const& lhs, NonOwningPauliTermPacked const& rhs) {
			return (lhs.size() == rhs.size()) && (lhs.coefficient() == rhs.coefficient()) &&
			       lhs.equal_bitstring(rhs);
		}
		friend bool operator==(PauliTerm<T> const& lhs, NonOwningPauliTermPacked const& rhs) {
			return static_cast<PauliTerm<T>>(rhs) == lhs;
		}
		friend bool operator==(NonOwningPauliTermPacked const& lhs, PauliTerm<T> const& rhs) {
			return rhs == lhs;
		}

		bool equal_bitstring(NonOwningPauliTermPacked const& oth) const {
			return (&ptc.get() == &oth.ptc.get()) ? ptc.get().fast_equal_bitstring(idx, oth.idx) :
								slow_equal_bitstring(oth);
		}

		bool slow_equal_bitstring(NonOwningPauliTermPacked const& oth) const {
			if (oth.size() != size())
				return false;
			for (std::size_t i = 0; i < size(); ++i) {
				if (get_pauli(i) != oth.get_pauli(i)) {
					return false;
				}
			}
			return true;
		}

		T coefficient() const noexcept { return ptc.get().get_coefficient(idx); }
		void set_coefficient(T coeff) { ptc.get().set_coefficient(idx, coeff); }
		void add_coeff(T coeff) { set_coefficient(coefficient() + coeff); }

		std::size_t pauli_weight() const noexcept { return ptc.get().fast_pauli_weight(idx); }

		friend std::ostream& operator<<(std::ostream& os, NonOwningPauliTermPacked const& pt) {
			os << std::showpos << pt.coefficient() << " ";
			for (std::size_t i = 0; i < pt.size(); ++i) {
				os << pt.get_pauli(i);
			}
			return os;
		}

		void copy_content(NonOwningPauliTermPacked const& nopt) {
			copy_paulis(nopt);
			set_coefficient(nopt.coefficient());
		}

		void copy_content(ReadOnlyNonOwningPauliTermPacked const& nopt) {
			copy_paulis(nopt);
			set_coefficient(nopt.coefficient());
		}

		void copy_paulis(ReadOnlyNonOwningPauliTermPacked const& ronopt) {
			assert(ronopt.size() == size());
			for (std::size_t i = 0; i < size(); ++i) {
				set_pauli(i, ronopt.get_pauli(i));
			}
		}

		void copy_paulis(NonOwningPauliTermPacked const& nopt) {
			assert(nopt.size() == size());
			for (std::size_t i = 0; i < size(); ++i) {
				set_pauli(i, nopt.get_pauli(i));
			}
		}

		void fast_copy_content(NonOwningPauliTermPacked const& nopt) {
			assert(&nopt.ptc.get() == &ptc.get());
			set_coefficient(nopt.coefficient());
			ptc.get().copy_fast(nopt.idx, idx);
		}

		operator ReadOnlyNonOwningPauliTermPacked() const { return ReadOnlyNonOwningPauliTermPacked(ptc, idx); }

		void apply_pauli(Pauli_gates g, unsigned qubit) {
			assert(qubit < size());
			set_coefficient(coefficient() * get_pauli(qubit).apply_pauli(g));
		}

		void apply_clifford(Clifford_Gates_1Q g, unsigned qubit) {
			assert(qubit < size());
			auto p = get_pauli(qubit);
			set_coefficient(coefficient() * p.apply_clifford(g));
			set_pauli(qubit, p);
		}

		void apply_unital_noise(UnitalNoise n, unsigned qubit, T p) {
			assert(qubit < size());
			auto pauli = get_pauli(qubit);
			set_coefficient(coefficient() * pauli.apply_unital_noise(n, p));
		}

		void apply_cx(unsigned control, unsigned target) {
			assert(control != target && "cx can't use same control and target");
			assert(control < size() && target < size());
			auto pctrl = get_pauli(control);
			auto ptarg = get_pauli(target);
			set_coefficient(coefficient() * pctrl.apply_cx(ptarg));
			set_pauli(control, pctrl);
			set_pauli(target, ptarg);
		}

		void apply_rz(unsigned qubit, T theta, NonOwningPauliTermPacked& output) {
			assert(qubit < size());
			assert(get_pauli(qubit) != p_i && get_pauli(qubit) != p_z && "Should not happen");

			const auto cos_teta = cos(theta);
			const auto sin_theta = sin(theta);

			set_coefficient(coefficient() * cos_teta);

			// use commutators?
			if (get_pauli(qubit) == p_x) {
				output.set_pauli(qubit, p_y);
				output.set_coefficient(output.coefficient() * -sin_theta);
			} else {
				assert(get_pauli(qubit) == p_y);
				output.set_pauli(qubit, p_x);
				output.set_coefficient(output.coefficient() * sin_theta);
			}
		}

		void apply_amplitude_damping_xy([[maybe_unused]] unsigned qubit, T p) {
			assert(qubit < size());
			assert(get_pauli(qubit) != p_z && get_pauli(qubit) != p_i && "Should not happen");

			set_coefficient(coefficient() * sqrt(1 - p));
		}

		void apply_amplitude_damping_z(unsigned qubit, T p, NonOwningPauliTermPacked& output) {
			assert(get_pauli(qubit) == p_z && "Should not happen");
			output.set_coefficient(output.coefficient() * p);
			output.set_pauli(qubit, p_i);

			set_coefficient(coefficient() * (1 - p));
		}
	};

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
