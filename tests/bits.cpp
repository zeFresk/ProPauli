#include "gtest/gtest.h"

#include "container/bit_operations.hpp"
#include <cstdint>

template <typename T>
T DoNotOptimize(T const& value) {
	asm volatile("" : : "r,m"(value) : "memory");
	return value;
}

TEST(BitOperations, mask_underlying) {
	int i = 2;
	std::uint8_t ret = compute_mask<std::uint8_t>(i);
	EXPECT_EQ(ret, 3);
}

TEST(BitOperations, next_power_of_two) {
	int i = 0;
	i = DoNotOptimize(i);

	EXPECT_EQ(next_power_of_two(i), 1);
	EXPECT_EQ(next_power_of_two(i + 1), 1);
	EXPECT_EQ(next_power_of_two(i + 2), 2);
	EXPECT_EQ(next_power_of_two(i + 127), 128);
}

TEST(BitOperations, is_power_of_two) {
	int i = 0;
	i = DoNotOptimize(i);

	EXPECT_FALSE(is_power_of_two(i));
	EXPECT_TRUE(is_power_of_two(i + 1));
	EXPECT_TRUE(is_power_of_two(i + 2));
	EXPECT_FALSE(is_power_of_two(i + 3));
}

TEST(BitOperations, mask_lut) {
	std::array<std::uint8_t, 4> (*ptr)() = compute_mask_lut<std::uint8_t, 4>;
	DoNotOptimize(ptr);
	auto ret = ptr();
	EXPECT_EQ(ret[0], 3);
	EXPECT_EQ(ret[1], 12);
	EXPECT_EQ(ret[2], 48);
	EXPECT_EQ(ret[3], 192);
}

TEST(BitOperations, low_mask) {
	std::uint8_t (*ptr)() = create_low_bit_mask<std::uint8_t>;
	DoNotOptimize(ptr);
	auto ret = ptr();
	EXPECT_EQ(ret, 85);
}
