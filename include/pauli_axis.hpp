#ifndef PP_INCLUDE_PAULI_AXIS_HPP
#define PP_INCLUDE_PAULI_AXIS_HPP

#include "container/bit_operations.hpp"
#include "pauli.hpp"

#include <cstdint>
#include <vector>
#include <cassert>

template <typename Underlying = std::uint8_t>
class PauliAxis {
	std::vector<Underlying> paulis;
	std::size_t qubits; ///< The number of qubits for all terms in the container.
	static constexpr Underlying BITS_PER_PAULI = 2;
	static_assert(1 << BITS_PER_PAULI == static_cast<Underlying>(Pauli_enum::Count));
	static constexpr Underlying MASK = compute_mask<Underlying>(BITS_PER_PAULI);
	static constexpr Underlying PAULIS_PER_UNDERLYING = (sizeof(Underlying) * 8) / BITS_PER_PAULI;

    public:
	template <typename Iterator>
	PauliAxis(Iterator begin, Iterator end) : qubits(std::distance(begin, end)) {
		auto nb_underlying = qubits / PAULIS_PER_UNDERLYING;
		if (qubits % PAULIS_PER_UNDERLYING > 0) {
			nb_underlying++;
		}
		paulis.resize(nb_underlying, 0);

		for (std::size_t i = 0; begin != end; ++begin, ++i) {
			const std::size_t uidx = i / PAULIS_PER_UNDERLYING;
			const std::size_t midx = i % PAULIS_PER_UNDERLYING;
			const auto casted = static_cast<Underlying>(static_cast<Pauli_enum>(*begin));
			const auto mask = (casted << (midx * BITS_PER_PAULI));
			paulis[uidx] |= mask;
		}
	}

	template <typename Container>
	PauliAxis(Container&& container) : PauliAxis(container.begin(), container.end()) {}

	PauliAxis() = default;
	PauliAxis(PauliAxis const&) = default;
	PauliAxis(PauliAxis&&) noexcept = default;
	PauliAxis& operator=(PauliAxis const&) = default;
	PauliAxis& operator=(PauliAxis&&) noexcept = default;

	std::vector<Underlying> const& raw_bits() const { return paulis; }

	std::size_t nb_qubits() const { return qubits; }

	Pauli operator[](std::size_t const& idx) const {
		assert(idx < nb_qubits());
		const std::size_t uidx = idx / PAULIS_PER_UNDERLYING;
		const std::size_t midx = idx % PAULIS_PER_UNDERLYING;
		const Underlying masked = paulis[uidx] & (MASK << (midx * BITS_PER_PAULI));
		return Pauli(static_cast<Pauli_enum>(masked >> (midx * BITS_PER_PAULI)));
	}
};

#endif
