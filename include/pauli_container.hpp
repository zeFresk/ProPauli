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
	std::vector<Pauli, default_init_allocator<Pauli>> raw_paulis;
	// std::vector<Pauli> raw_paulis;
	std::vector<T> raw_coefficients;
	std::size_t qubits;

    public:
	PauliTermContainer(std::size_t nb_qubits) : qubits(nb_qubits) {
		if (nb_qubits == 0) {
			throw std::invalid_argument("Observable with 0 qubits not allowed.");
		}
		raw_paulis.reserve(64 * nb_qubits);
		raw_coefficients.reserve(64);
	}

	PauliTermContainer(std::span<PauliTerm<T>> const& sp) {
		if (sp.size() == 0) {
			throw std::invalid_argument("Observable with 0 terms not allowed.");
		}
		qubits = sp[0].size();

		raw_paulis.reserve(sp.size() * qubits);
		raw_paulis.resize(sp.size() * qubits);
		raw_coefficients.reserve(sp.size());

		std::size_t i = 0;
		for (auto const& pt : sp) {
			raw_coefficients.push_back(pt.coefficient());
			if (pt.size() != nb_qubits()) {
				throw std::invalid_argument("All terms in observable must have the same size.");
			}
			for (auto const& p : pt) {
				raw_paulis[i++] = p;
			}
		}
	}

	PauliTermContainer(std::initializer_list<PauliTerm<T>> lst) {
		if (lst.size() == 0) {
			throw std::invalid_argument("Observable with 0 terms not allowed.");
		}
		
		qubits = lst.begin()->size();
		raw_paulis.reserve(lst.size() * qubits);
		raw_paulis.resize(lst.size() * qubits);
		raw_coefficients.reserve(lst.size());
		std::size_t i = 0;
		for (auto const& pt : lst) {
			raw_coefficients.push_back(pt.coefficient());
			if (pt.size() != nb_qubits()) {
				throw std::invalid_argument("All terms in observable must have the same size.");
			}
			for (auto const& p : pt) {
				raw_paulis[i++] = p;
			}
		}
	}

	PauliTermContainer(std::initializer_list<std::string_view> lst) {
		if (lst.size() == 0) {
			throw std::invalid_argument("Observable with 0 terms not allowed.");
		}

		qubits = lst.begin()->size();
		raw_paulis.reserve(lst.size() * qubits);
		raw_paulis.resize(lst.size() * qubits);
		raw_coefficients.reserve(lst.size());
		std::size_t i = 0;
		for (auto const& pt : lst) {
			if (pt.size() != nb_qubits()) {
				throw std::invalid_argument("All pauli strings should have the same number of qubits.");
			}
			for (auto const& p : pt) {
				raw_paulis[i++] = Pauli(p);
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

		raw_paulis.reserve(size * qubits);
		raw_paulis.resize(size * qubits);
		raw_coefficients.reserve(size);
		std::size_t i = 0;
		for (; bcopy != end; ++bcopy) {
			raw_coefficients.push_back(bcopy->coefficient());
			if (bcopy->size() != nb_qubits()) {
				throw std::invalid_argument("All pauli terms should have the same number of qubits.");
			}
			for (std::size_t j = 0; j < qubits; ++j) {
				raw_paulis[i++] = (*bcopy)[j];
			}
		}
	}

	PauliTermContainer(PauliTermContainer const& oth) : raw_coefficients(oth.raw_coefficients), qubits(oth.qubits) {
		raw_paulis.resize(oth.raw_paulis.size());
		for (std::size_t i = 0; i < oth.raw_paulis.size(); ++i) {
			raw_paulis[i] = oth.raw_paulis[i];
		}
		// std::copy(oth.raw_paulis.begin(), oth.raw_paulis.end(), raw_paulis.begin());
	}
	PauliTermContainer& operator=(PauliTermContainer const& oth) {
		PauliTermContainer third(oth);
		raw_paulis = std::move(third.raw_paulis);
		raw_coefficients = std::move(third.raw_coefficients);
		return *this;
	}
	PauliTermContainer(PauliTermContainer&& oth)
		: raw_paulis(std::move(oth.raw_paulis)), raw_coefficients(std::move(oth.raw_coefficients)),
		  qubits(std::move(oth.qubits)) {}
	PauliTermContainer& operator=(PauliTermContainer&& oth) {
		raw_paulis = std::move(oth.raw_paulis);
		raw_coefficients = std::move(oth.raw_coefficients);
		return *this;
	}

	std::size_t compute_index(std::size_t term, std::size_t qubit) const { return term * qubits + qubit; }
	std::size_t nb_qubits() const { return qubits; }
	std::size_t nb_terms() const { return raw_coefficients.size(); }

	NonOwningPauliTerm<T> operator[](std::size_t idx) {
		assert(idx < nb_terms());
		return { raw_paulis.begin() + compute_index(idx, 0), raw_paulis.begin() + compute_index(idx, qubits),
			 raw_coefficients[idx] };
	}

	ReadOnlyNonOwningPauliTerm<T> operator[](std::size_t idx) const {
		assert(idx < nb_terms());
		return { raw_paulis.begin() + compute_index(idx, 0), raw_paulis.begin() + compute_index(idx, qubits),
			 raw_coefficients[idx] };
	}

	void reserve(std::size_t nb_pts) {
		raw_paulis.reserve(nb_pts * nb_qubits());
		raw_coefficients.reserve(nb_pts);
	}

	[[nodiscard]] NonOwningPauliTerm<T> create_pauliterm() {
		//raw_paulis.reserve(raw_paulis.size() + qubits);
		raw_paulis.resize(raw_paulis.size() + qubits);
		raw_coefficients.push_back(T{ 0 });
		return { raw_paulis.begin() + compute_index(nb_terms() - 1, 0),
			 raw_paulis.begin() + compute_index(nb_terms() - 1, qubits),
			 raw_coefficients[raw_coefficients.size() - 1] };
	}

	void remove_pauliterm(std::size_t idx) {
		assert(idx < nb_terms());
		std::swap(raw_coefficients[idx], raw_coefficients[raw_coefficients.size() - 1]);
		std::swap_ranges(raw_paulis.begin() + compute_index(idx, 0),
				 raw_paulis.begin() + compute_index(idx, qubits),
				 raw_paulis.begin() + compute_index(nb_terms() - 1, 0));
		raw_coefficients.pop_back();
		raw_paulis.resize(raw_paulis.size() - qubits);
	}

	class NonOwningIterator {
		Pauli* ptr_paulis;
		T* ptr_coeffs;
		std::size_t qubits;

	    public:
		using iterator_category = std::forward_iterator_tag;
		using difference_type = std::ptrdiff_t;
		using value_type = NonOwningPauliTerm<T>;
		using pointer = value_type*;
		using reference = value_type&;

		explicit NonOwningIterator(Pauli* ptr_p, T* ptr_c, std::size_t nb_qubits)
			: ptr_paulis(ptr_p), ptr_coeffs(ptr_c), qubits(nb_qubits) {}

		value_type operator*() {
			return NonOwningPauliTerm<T>{ ptr_paulis + 0, ptr_paulis + qubits, *ptr_coeffs };
		}

		value_type operator->() const {
			return NonOwningPauliTerm<T>{ ptr_paulis + 0, ptr_paulis + qubits, *ptr_coeffs };
		}

		NonOwningIterator& operator++() {
			ptr_paulis += qubits;
			ptr_coeffs++;
			return *this;
		}

		NonOwningIterator operator++(int) {
			NonOwningIterator ret = *this;
			++(*this);
			return ret;
		}

		friend bool operator==(NonOwningIterator const& lhs, NonOwningIterator const& rhs) {
			return lhs.ptr_paulis == rhs.ptr_paulis && lhs.ptr_coeffs == rhs.ptr_coeffs;
		}
		friend bool operator!=(NonOwningIterator const& lhs, NonOwningIterator const& rhs) {
			return !(lhs == rhs);
		}
	};

	class ReadOnlyNonOwningIterator {
		Pauli const* ptr_paulis;
		T const* ptr_coeffs;
		std::size_t qubits;

	    public:
		using iterator_category = std::forward_iterator_tag;
		using difference_type = std::ptrdiff_t;
		using value_type = ReadOnlyNonOwningPauliTerm<T>;
		using pointer = value_type*;
		using reference = value_type&;

		explicit ReadOnlyNonOwningIterator(Pauli const* ptr_p, T const* ptr_c, std::size_t nb_qubits)
			: ptr_paulis(ptr_p), ptr_coeffs(ptr_c), qubits(nb_qubits) {}

		value_type operator*() const {
			return ReadOnlyNonOwningPauliTerm{ ptr_paulis + 0, ptr_paulis + qubits, *ptr_coeffs };
		}

		value_type operator->() const {
			return ReadOnlyNonOwningPauliTerm{ ptr_paulis + 0, ptr_paulis + qubits, *ptr_coeffs };
		}

		ReadOnlyNonOwningIterator& operator++() {
			ptr_paulis += qubits;
			ptr_coeffs++;
			return *this;
		}

		ReadOnlyNonOwningIterator operator++(int) {
			NonOwningIterator ret = *this;
			++(*this);
			return ret;
		}

		friend bool operator==(ReadOnlyNonOwningIterator const& lhs, ReadOnlyNonOwningIterator const& rhs) {
			return lhs.ptr_paulis == rhs.ptr_paulis && lhs.ptr_coeffs == rhs.ptr_coeffs;
		}
		friend bool operator!=(ReadOnlyNonOwningIterator const& lhs, ReadOnlyNonOwningIterator const& rhs) {
			return !(lhs == rhs);
		}
	};

	NonOwningIterator begin() {
		return NonOwningIterator{ std::to_address(raw_paulis.begin()),
					  std::to_address(raw_coefficients.begin()), nb_qubits() };
	}
	NonOwningIterator end() {
		return NonOwningIterator{ std::to_address(raw_paulis.end()), std::to_address(raw_coefficients.end()),
					  nb_qubits() };
	}
	ReadOnlyNonOwningIterator cbegin() const {
		return ReadOnlyNonOwningIterator{ std::to_address(raw_paulis.cbegin()),
						  std::to_address(raw_coefficients.cbegin()), nb_qubits() };
	}
	ReadOnlyNonOwningIterator cend() const {
		return ReadOnlyNonOwningIterator{ std::to_address(raw_paulis.cend()),
						  std::to_address(raw_coefficients.cend()), nb_qubits() };
	}
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
		const ReadOnlyNonOwningPauliTerm<T> ronopt = paulis[i];
		if (predicate(ronopt)) {
			paulis.remove_pauliterm(i);
			--i;
			++deleted;
		}
	}
	return deleted;
}
} // namespace std

#endif
