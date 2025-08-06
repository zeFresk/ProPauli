#include "gtest/gtest.h"

#include <stdexcept>
#include <type_traits>
#include <utility>

#include "pauli.hpp"

TEST(Pauli, construct_from_enum_constexpr) {
	using enum Pauli_enum;
	[[maybe_unused]] constexpr Pauli i{ I };
	[[maybe_unused]] constexpr Pauli x{ X };
	[[maybe_unused]] constexpr Pauli y{ Y };
	[[maybe_unused]] constexpr Pauli z{ Z };
}

TEST(Pauli, copy_constexpr) {
	using enum Pauli_enum;
	[[maybe_unused]] constexpr Pauli in{ I };
	[[maybe_unused]] constexpr Pauli cpy{ in };
}

TEST(Pauli, move_constexpr) {
	using enum Pauli_enum;
	[[maybe_unused]] constexpr Pauli in{ I };
	[[maybe_unused]] constexpr Pauli cpy{ std::move(in) };
}

TEST(Pauli, construct_from_char_constexpr) {
	[[maybe_unused]] constexpr Pauli i{ 'I' };
	[[maybe_unused]] constexpr Pauli x{ 'X' };
	[[maybe_unused]] constexpr Pauli y{ 'Y' };
	[[maybe_unused]] constexpr Pauli z{ 'Z' };
}

TEST(Pauli, construct_from_string_constexpr) {
	[[maybe_unused]] constexpr Pauli i{ "I" };
	[[maybe_unused]] constexpr Pauli x{ "X" };
	[[maybe_unused]] constexpr Pauli y{ "Y" };
	[[maybe_unused]] constexpr Pauli z{ "Z" };
}

TEST(Pauli, construct_error_with_bad_values) {
	EXPECT_THROW({ Pauli bad{ "a" }; }, std::invalid_argument);
	EXPECT_THROW({ Pauli bad{ 'b' }; }, std::invalid_argument);
	EXPECT_THROW({ Pauli bad{ "IXYZ" }; }, std::invalid_argument);
}

TEST(Pauli, equality) {
	EXPECT_EQ(Pauli{ "I" }, Pauli{ "I" });
	EXPECT_EQ(Pauli{ "X" }, Pauli{ "X" });
	EXPECT_EQ(Pauli{ "Y" }, Pauli{ "Y" });
	EXPECT_EQ(Pauli{ "Z" }, Pauli{ "Z" });
}

TEST(Pauli, inequality) { EXPECT_TRUE(p_i != p_x); }

TEST(Pauli, commutes_id) {
	for (auto const& p : { p_i, p_x, p_y, p_z }) {
		EXPECT_TRUE(p.commutes_with(p_i));
	}
}

TEST(Pauli, commutes_itself) {
	for (auto const& p : { p_i, p_x, p_y, p_z }) {
		EXPECT_TRUE(p.commutes_with(p));
	}
}

TEST(Pauli, anti_commutes_other) {
	for (auto const& p : { p_x, p_y, p_z }) {
		for (auto const& p2 : { p_x, p_y, p_z }) {
			if (p != p2) {
				EXPECT_FALSE(p.commutes_with(p2));
			}
		}
	}
}

TEST(Pauli, apply_pauli_is_const) {
	for (std::underlying_type_t<Pauli_enum> i = 0; i < std::to_underlying(Pauli_enum::Count); ++i) {
		const auto p_const = Pauli(static_cast<Pauli_enum>(i));
		for (std::underlying_type_t<Pauli_gates> j = 0; j < std::to_underlying(Pauli_gates::Count); ++j) {
			auto gate = static_cast<Pauli_gates>(j);
			auto p = p_const;
			p.apply_pauli(gate);
			ASSERT_TRUE(p == p_const);
		}
	}
}

TEST(Pauli, apply_pauli_coeff_match_commutation) {
	static_assert(std::to_underlying(Pauli_gates::Count) == std::to_underlying(Pauli_enum::Count));
	for (std::underlying_type_t<Pauli_enum> i = 0; i < std::to_underlying(Pauli_enum::Count); ++i) {
		const auto p = Pauli(static_cast<Pauli_enum>(i));
		for (std::underlying_type_t<Pauli_gates> j = 0; j < std::to_underlying(Pauli_gates::Count); ++j) {
			auto gate = static_cast<Pauli_gates>(j);
			auto p_gate = Pauli(static_cast<Pauli_enum>(j));
			auto ret = p.apply_pauli(gate);
			if (p.commutes_with(p_gate)) {
				EXPECT_EQ(ret, decltype(ret){ 1 });
			} else {
				EXPECT_EQ(ret, decltype(ret){ -1 });
			}
		}
	}
}

TEST(Pauli, implicit_conversion) {
	Pauli p{ "I" };
	p.commutes_with(Pauli_enum::I);
}

TEST(Pauli, apply_hadamard) {
	// https://arxiv.org/pdf/2505.21606

	using enum Pauli_enum;
	std::array<std::tuple<Pauli, coeff_t, Pauli>, 4> truth_table = {
		{ { I, 1, I }, { X, 1, Z }, { Y, -1, Y }, { Z, 1, X } }
	};
	for (auto [in_pauli, out_coeff, out_pauli] : truth_table) {
		auto c = in_pauli.apply_clifford(Clifford_Gates_1Q::H);
		EXPECT_EQ(in_pauli, out_pauli);
		EXPECT_EQ(c, out_coeff);
	}
}

TEST(Pauli, apply_cx) {
	// https://arxiv.org/pdf/2505.21606

	using enum Pauli_enum;
	std::array<std::tuple<Pauli, Pauli, coeff_t, Pauli, Pauli>, 16> truth_table = { {
		{ I, I, 1, I, I },
		{ I, X, 1, I, X },
		{ I, Y, 1, Z, Y },
		{ I, Z, 1, Z, Z }, // I
		{ X, I, 1, X, X },
		{ X, X, 1, X, I },
		{ X, Y, 1, Y, Z },
		{ X, Z, -1, Y, Y }, // X
		{ Y, I, 1, Y, X },
		{ Y, X, 1, Y, I },
		{ Y, Y, -1, X, Z },
		{ Y, Z, 1, X, Y }, // Y
		{ Z, I, 1, Z, I },
		{ Z, X, 1, Z, X },
		{ Z, Y, 1, I, Y },
		{ Z, Z, 1, I, Z } // Z
	} };
	for (auto [in_ctrl, in_target, out_coeff, out_ctrl, out_target] : truth_table) {
		auto c = in_ctrl.apply_cx(in_target);
		EXPECT_EQ(in_ctrl, out_ctrl);
		EXPECT_EQ(in_target, out_target);
		EXPECT_EQ(c, out_coeff);
	}
}

TEST(Pauli, serialize) {
	using enum Pauli_enum;
	std::array<std::tuple<std::string_view, Pauli>, 4> truth_table{
		{ { "I", I }, { "X", X }, { "Y", Y }, { "Z", Z } }
	};

	for (auto const [expected_str, p] : truth_table) {
		std::stringstream ss;
		ss << p;
		EXPECT_EQ(ss.str(), expected_str);
	}
}

TEST(Pauli, weight) {
	using enum Pauli_enum;
	std::array<std::tuple<Pauli, std::size_t>, 4> truth_table{ { { I, 0 }, { X, 1 }, { Y, 1 }, { Z, 1 } } };
	for (auto [p, w]: truth_table) {
		EXPECT_EQ(p.weight(), w);
	}
}

TEST(Pauli, depolarizing_noise) {
	using enum UnitalNoise;
	EXPECT_EQ(p_i.apply_unital_noise(Depolarizing, 0.01), 1.);
	EXPECT_FLOAT_EQ(p_x.apply_unital_noise(Depolarizing, 0.01), 0.99);
	EXPECT_FLOAT_EQ(p_y.apply_unital_noise(Depolarizing, 0.01), 0.99);
	EXPECT_FLOAT_EQ(p_z.apply_unital_noise(Depolarizing, 0.01), 0.99);
}

TEST(Pauli, dephasing_noise) {
	using enum UnitalNoise;
	EXPECT_EQ(p_i.apply_unital_noise(Dephasing, 0.01), 1.);
	EXPECT_FLOAT_EQ(p_x.apply_unital_noise(Dephasing, 0.01), 0.99);
	EXPECT_FLOAT_EQ(p_y.apply_unital_noise(Dephasing, 0.01), 0.99);
	EXPECT_EQ(p_z.apply_unital_noise(Dephasing, 0.01), 1.);
}
