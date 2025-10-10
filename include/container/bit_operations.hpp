#ifndef PP_BIT_OPERATIONS_HPP
#define PP_BIT_OPERATIONS_HPP

/**
 * @file bit_operations.hpp
 * @brief Provides a collection of constexpr helper functions for low-level bit manipulation.
 *
 * This header contains various standalone, compile-time-evaluated functions for
 * creating bitmasks and performing other bitwise operations. These utilities are the
 * fundamental building blocks for the memory-efficient bit-packing scheme used by
 * the `PauliTermContainer` class to store Pauli strings.
 */

#include <cstddef>
#include <array>
#include <concepts>
#include <bit>

template <typename T>
bool is_power_of_two(T k) {
	return (k > 0) && ((k & (k - 1)) == 0);
}

template <typename size_type>
constexpr size_type next_power_of_two(size_type n) {
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
	return ++n;
}

/**
 * @brief Creates a bitmask with a specified number of lower bits set to 1.
 * @tparam T The integer type for the mask.
 * @param nb_bits The number of low-order bits to set to 1.
 * @return An integer of type T with the `nb_bits` least significant bits set.
 * @note For example, `compute_mask<uint8_t>(3)` returns `7` (0b00000111).
 */
template <typename T>
constexpr T compute_mask(T nb_bits) {
	T ret = 0;
	for (T i = 0; i < nb_bits; ++i) {
		ret |= (T{ 1 } << i);
	}
	return ret;
}

/**
 * @brief Computes a compile-time lookup table (LUT) of bitmasks for packed objects.
 * @tparam Underlying The integer type in which objects are packed.
 * @tparam OBJS_PER_UNDERLYING The number of objects packed into one `Underlying` integer.
 * @return A `std::array` where each element is a mask for one object slot within the `Underlying` type.
 * @note This is used by `PauliTermContainer` to avoid repeated shift calculations at runtime when
 * accessing packed Pauli data.
 */
template <typename Underlying, std::size_t OBJS_PER_UNDERLYING>
constexpr std::array<Underlying, OBJS_PER_UNDERLYING> compute_mask_lut() {
	const Underlying bits_per_obj = (sizeof(Underlying) * 8) / OBJS_PER_UNDERLYING;
	const Underlying mask = compute_mask<Underlying>(bits_per_obj);
	std::array<Underlying, OBJS_PER_UNDERLYING> ret{};
	for (Underlying i = 0; i < OBJS_PER_UNDERLYING; ++i) {
		ret[i] = mask << (i * bits_per_obj);
	}
	return ret;
}

/**
 * @brief Creates a mask to select the low bit of every 2-bit pair in an integer.
 * @tparam T An unsigned integral type.
 * @return A mask of the form `...01010101`.
 */
template <std::unsigned_integral T>
constexpr T create_low_bit_mask() {
	T mask = 0;
	for (size_t i = 0; i < sizeof(T) * 8; i += 2) {
		mask |= (T(1) << i);
	}
	return mask;
}

/**
 * @brief Efficiently counts the number of non-zero 2-bit pairs in an unsigned integer.
 * @tparam T An unsigned integral type.
 * @param input The integer whose bit pairs are to be counted.
 * @return The number of 2-bit chunks in `input` that are not `00`.
 *
 * @note This function is a key optimization for calculating the Pauli weight of a term
 * directly from its packed representation. Since each Pauli operator is stored as a 2-bit
 * value and the Identity operator is `00`, counting the non-zero pairs is equivalent
 * to counting the non-Identity operators. The algorithm works by ORing the low and high
 * bits of each pair together, then using `std::popcount` on the result.
 */
template <std::unsigned_integral T>
constexpr int count_nonzero_pairs(T input) {
	static constexpr T low_bits_mask = create_low_bit_mask<T>();
	static constexpr T high_bits_mask = low_bits_mask << 1;

	const T low_bits = input & low_bits_mask;
	const T high_bits_shifted = (input & high_bits_mask) >> 1;
	const T result_bits = low_bits | high_bits_shifted;

	return std::popcount(result_bits);
}

#endif
