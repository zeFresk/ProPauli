#ifndef PP_PAULI_BITWISE_HPP
#define PP_PAULI_BITWISE_HPP

#include <cstdint>
#include <utility>
#include <array>
#include <bit> // For std::popcount (C++20)

// This namespace assumes the 2-bit Pauli enum mapping:
// I = 0 (0b00), X = 1 (0b01), Y = 2 (0b10), Z = 3 (0b11)

namespace PauliBitwise
{

/**
 * @brief A compile-time lookup table for the phase of a Pauli product (p1 * p2).
 * The index is calculated as (p1 << 2) | p2.
 * The value is the phase encoded as a power of i: 0 for +1, 1 for +i, -1 for -i.
 */
consteval auto init_phase_lut() {
	std::array<int, 16> lut{};
	// Products with phase +i
	lut[(1 << 2) | 2] = 1; // XY = iZ
	lut[(2 << 2) | 3] = 1; // YZ = iX
	lut[(3 << 2) | 1] = 1; // ZX = iY
	// Products with phase -i
	lut[(2 << 2) | 1] = -1; // YX = -iZ
	lut[(3 << 2) | 2] = -1; // ZY = -iX
	lut[(1 << 2) | 3] = -1; // XZ = -iY
	return lut;
}

static constexpr auto PHASE_LUT = init_phase_lut();

/**
 * @brief Counts the number of anti-commuting Pauli pairs within two packed bytes.
 * This is a branchless function that processes 4 Pauli pairs simultaneously.
 * @param b1 A byte containing 4 packed Paulis.
 * @param b2 A byte containing 4 packed Paulis.
 * @return The number of pairs (from 0 to 4) that anti-commute.
 */
inline constexpr int count_anti_commuting_in_byte(uint8_t b1, uint8_t b2) {
	// A pair (p1, p2) anti-commutes if p1 != I, p2 != I, and p1 != p2.

	// 1. Create a mask where each 2-bit chunk is 00 if the Pauli is I.
	// Since I=0, the bytes themselves serve as these non-identity masks.
	const uint8_t non_identity1 = b1;
	const uint8_t non_identity2 = b2;

	// 2. Create a mask where each 2-bit chunk is non-zero if p1 != p2.
	const uint8_t different_paulis = b1 ^ b2;

	// 3. For each 2-bit chunk, we need a 1-bit "truthiness" value.
	// The expression `(p | (p >> 1)) & 0b01` converts a non-zero 2-bit Pauli `p` to `0b01`.
	// We apply this to all 4 chunks in each byte simultaneously.
	const uint8_t nz1_mask = ((non_identity1 >> 1) | non_identity1) & 0b01010101;
	const uint8_t nz2_mask = ((non_identity2 >> 1) | non_identity2) & 0b01010101;
	const uint8_t diff_mask = ((different_paulis >> 1) | different_paulis) & 0b01010101;

	// 4. The low bit of a 2-bit chunk is 1 only if all three conditions were true for that pair.
	const uint8_t anti_commute_mask = nz1_mask & nz2_mask & diff_mask;

	// 5. The number of set bits in the final mask is the number of anti-commuting pairs.
	return std::popcount(anti_commute_mask);
}

/**
 * @brief Multiplies two bytes of packed Paulis (G * P).
 * @param b_gen A byte of 4 generator Paulis (G).
 * @param b_obs A byte of 4 observable Paulis (P).
 * @return A pair containing the new byte (G*P) and the total phase power (sum of i powers).
 */
inline constexpr std::pair<uint8_t, int> multiply_bytes(uint8_t b_gen, uint8_t b_obs) {
	// The resulting Pauli string is the bitwise XOR of the two bytes.
	const uint8_t result_byte = b_gen ^ b_obs;
	int total_phase = 0;

	// Iterate through the 4 packed Paulis to look up and accumulate their product phase.
	for (int i = 0; i < 4; ++i) {
		const int shift = i * 2;
		const uint8_t p_gen = (b_gen >> shift) & 0b11;
		const uint8_t p_obs = (b_obs >> shift) & 0b11;
		total_phase += PHASE_LUT[(p_gen << 2) | p_obs];
	}

	return { result_byte, total_phase };
}

} // namespace PauliBitwise

#endif // PP_PAULI_BITWISE_HPP
