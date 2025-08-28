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
		ret |= (T{1} << i);
	}
	return ret;
}

/**
 * @brief Calculates the minimum number of underlying integers required to store a number of objects.
 * @tparam T A numeric type for the calculation.
 * @param nb_objs The total number of objects to store.
 * @param objs_per_underlying The number of objects that fit into a single underlying integer.
 * @return The smallest number of underlying integers needed.
 * @note This is effectively a ceiling division: `ceil(nb_objs / objs_per_underlying)`.
 */
template <typename T>
constexpr std::size_t minimum_size(std::size_t nb_objs, T objs_per_underlying) {
	auto rem = nb_objs % objs_per_underlying;
	auto quo = nb_objs / objs_per_underlying;
	return quo + (1 * (rem > 0));
}

/**
 * @brief Computes a shifted mask for a specific object packed within an integer.
 * @tparam T The integer type of the mask.
 * @param idx The index of the object within a packed sequence.
 * @param mask The base mask for a single object (e.g., 0b11).
 * @param objs_per_underlying The number of objects that fit into a single underlying integer.
 * @param bits_per_obj The number of bits per object.
 * @return The `mask` shifted to the correct position for the object at `idx`.
 */
template <typename T>
constexpr T compute_mask_idx(std::size_t idx, T mask, T objs_per_underlying, T bits_per_obj) {
	auto rem = idx % objs_per_underlying;
	return mask << (rem * bits_per_obj);
}

/**
 * @brief Computes the index of the underlying integer that contains the object at a given index.
 * @tparam T An integer type for the calculation.
 * @param idx The absolute index of the object.
 * @param objs_per_underlying The number of objects per underlying integer.
 * @return The index into an array of underlying integers.
 */
template <typename T>
constexpr std::size_t compute_idx(std::size_t idx, T objs_per_underlying) {
	return idx / objs_per_underlying;
}

/**
 * @brief Sets a value within a field of bits defined by a mask.
 * @tparam T The integer type.
 * @param out The integer to modify.
 * @param mask The mask defining the bit field to change (e.g., 0b001100).
 * @param masked_value The new value, already shifted to align with the mask.
 */
template <typename T>
constexpr void set_on_mask(T& out, T mask, T masked_value) {
	out &= ~mask; // Set bits in the field to 0
	out |= masked_value; // Set the new value
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
