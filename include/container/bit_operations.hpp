#ifndef PP_BIT_OPERATIONS_HPP
#define PP_BIT_OPERATIONS_HPP

#include <cstddef>
#include <array>

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

#endif
