#ifndef PP_PAULI_CONTAINER_HPP
#define PP_PAULI_CONTAINER_HPP

#include "pauli.hpp"
#include "pauli_term.hpp"
#include "non_owning_pauli_term.hpp"

#include <algorithm>
#include <iterator>
#include <memory>
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

template <typename T, typename Underlying = std::uint8_t>
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
	std::vector<T> raw_coefficients;
	std::size_t qubits;

	static constexpr std::size_t DEFAULT_ALLOC = 8;
	static constexpr std::size_t GROWTH_FACTOR_NUM = 5;
	static constexpr std::size_t GROWTH_FACTOR_DENUM = 2;

	static constexpr Underlying BITS_PER_PAULI = 2;
	static constexpr Underlying MASK = compute_mask<Underlying>(BITS_PER_PAULI);
	static constexpr Underlying PAULIS_PER_UNDERLYING = (sizeof(Underlying) * 8) / BITS_PER_PAULI;
	static_assert(MASK == 3);

	void resize_paulis(std::size_t nb_paulis) {
		const auto required_size = minimum_size(nb_paulis, PAULIS_PER_UNDERLYING);
		raw_bits.resize(required_size);
	}

	void set_pauli(std::size_t idx, Pauli p) {
		const auto sub_idx = idx % PAULIS_PER_UNDERLYING;
		const auto vec_idx = idx / PAULIS_PER_UNDERLYING;
		const auto sub_mask = MASK << (sub_idx * BITS_PER_PAULI);
		const Underlying p_v = static_cast<Underlying>(static_cast<Pauli_enum>(p));
		const auto masked_pv = (p_v << (sub_idx * BITS_PER_PAULI)) & sub_mask;
		raw_bits[vec_idx] &= (~sub_mask);
		raw_bits[vec_idx] |= masked_pv;
	}

	Pauli get_pauli(std::size_t idx) const {
		const auto sub_idx = idx % PAULIS_PER_UNDERLYING;
		const auto vec_idx = idx / PAULIS_PER_UNDERLYING;
		const auto sub_mask = MASK << (sub_idx * BITS_PER_PAULI);
		const auto extracted = raw_bits[vec_idx] & sub_mask;
		const auto normalized = extracted >> (sub_idx * BITS_PER_PAULI);
		return Pauli(static_cast<Pauli_enum>(normalized));
	}

    public:
	PauliTermContainer(std::size_t nb_qubits) : qubits(nb_qubits) {
		if (nb_qubits == 0) {
			throw std::invalid_argument("Observable with 0 qubits not allowed.");
		}
		resize_paulis(DEFAULT_ALLOC * nb_qubits);
		raw_coefficients.reserve(DEFAULT_ALLOC);
	}

	PauliTermContainer(std::span<PauliTerm<T>> const& sp) {
		if (sp.size() == 0) {
			throw std::invalid_argument("Observable with 0 terms not allowed.");
		}
		qubits = sp[0].size();

		resize_paulis(std::max(DEFAULT_ALLOC * nb_qubits(), sp.size() * qubits));
		raw_coefficients.reserve(DEFAULT_ALLOC);

		std::size_t i = 0;
		for (auto const& pt : sp) {
			raw_coefficients.push_back(pt.coefficient());
			if (pt.size() != nb_qubits()) {
				throw std::invalid_argument("All terms in observable must have the same size.");
			}
			for (auto const& p : pt) {
				set_pauli(i++, p);
			}
		}
	}

	PauliTermContainer(std::initializer_list<PauliTerm<T>> lst) {
		if (lst.size() == 0) {
			throw std::invalid_argument("Observable with 0 terms not allowed.");
		}

		qubits = lst.begin()->size();
		resize_paulis(std::max(DEFAULT_ALLOC * nb_qubits(), lst.size() * qubits));
		raw_coefficients.reserve(DEFAULT_ALLOC);
		std::size_t i = 0;
		for (auto const& pt : lst) {
			raw_coefficients.push_back(pt.coefficient());
			if (pt.size() != nb_qubits()) {
				throw std::invalid_argument("All terms in observable must have the same size.");
			}
			for (auto const& p : pt) {
				set_pauli(i++, p);
			}
		}
	}

	PauliTermContainer(std::initializer_list<std::string_view> lst) {
		if (lst.size() == 0) {
			throw std::invalid_argument("Observable with 0 terms not allowed.");
		}

		qubits = lst.begin()->size();
		resize_paulis(std::max(DEFAULT_ALLOC * nb_qubits(), lst.size() * qubits));
		raw_coefficients.reserve(DEFAULT_ALLOC);
		std::size_t i = 0;
		for (auto const& pt : lst) {
			if (pt.size() != nb_qubits()) {
				throw std::invalid_argument("All pauli strings should have the same number of qubits.");
			}
			for (auto const& p : pt) {
				set_pauli(i++, p);
			}
			raw_coefficients.push_back(1.f);
		}
	}

	template <typename It>
	PauliTermContainer(It&& begin, It&& end) {
		const auto size = std::distance(begin, end);
		if (size == 0) {
			throw std::invalid_argument("Observable with 0 terms not allowed.");
		}

		qubits = begin->size();
		auto bcopy = begin;

		resize_paulis(std::max(DEFAULT_ALLOC * nb_qubits(), size * qubits));
		raw_coefficients.reserve(size);
		std::size_t i = 0;
		for (; bcopy != end; ++bcopy) {
			raw_coefficients.push_back(bcopy->coefficient());
			if (bcopy->size() != nb_qubits()) {
				throw std::invalid_argument("All pauli terms should have the same number of qubits.");
			}
			for (std::size_t j = 0; j < qubits; ++j) {
				set_pauli(i++, (*bcopy)[j]);
			}
		}
	}

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
		return get_pauli(pt_index * nb_qubits() + qubit);
	}

	void set_qubit(std::size_t pt_index, std::size_t qubit, Pauli p) {
		assert(pt_index < nb_terms());
		assert(qubit < nb_qubits());
		return set_pauli(pt_index * nb_qubits() + qubit, p);
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

		std::size_t phash() const noexcept {
			std::size_t ret = 0;
			for (std::size_t i = 0; i < size(); ++i) {
				const std::size_t uv = std::to_underlying(static_cast<Pauli_enum>(get_pauli(i)));
				ret ^= uv << (i * 2 % (sizeof(std::size_t) * 8));
			}
			return ret;
		}

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

		std::size_t pauli_weight() const {
			std::size_t ret = 0;
			for (std::size_t i = 0; i < size(); ++i) {
				ret += get_pauli(i).weight();
			}
			return ret;
		}

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

		std::size_t phash() const noexcept {
			std::size_t ret = 0;
			for (std::size_t i = 0; i < this->size(); ++i) {
				const std::size_t uv = std::to_underlying(static_cast<Pauli_enum>(get_pauli(i)));
				ret ^= uv << (i * 2 % (sizeof(std::size_t) * 8));
			}
			return ret;
		}

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

		std::size_t pauli_weight() const {
			std::size_t ret = 0;
			for (std::size_t i = 0; i < size(); ++i) {
				ret += get_pauli(i).weight();
			}
			return ret;
		}

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
		resize_paulis(nb_terms() * nb_qubits() + nb_qubits());
		raw_coefficients.push_back(T{ 0 });
		return { *this, nb_terms() - 1 };
	}

	[[nodiscard]] NonOwningPauliTermPacked duplicate_pauliterm(std::size_t idx) {
		assert(idx < nb_terms());
		auto np = create_pauliterm();
		np.copy_content((*this)[idx]);
		return np;
	}

	void remove_pauliterm(std::size_t idx) {
		assert(idx < nb_terms());
		raw_coefficients[idx] = raw_coefficients[raw_coefficients.size() - 1];
		// TODO: more optimized, should be able to copy Underlying directly if two pts are not allowed to share one Underlying
		auto last = (*this)[nb_terms() - 1];
		auto to_del = (*this)[idx];
		to_del.copy_content(last);
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
