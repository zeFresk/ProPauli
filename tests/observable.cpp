
#include "gtest/gtest.h"

#include "observable.hpp"

#include <numeric>
#include <algorithm>
#include <string_view>

TEST(Observable, construct_from_string) {
	Observable obs{ "IXYZ" };
	PauliTerm exp_pt{ "IXYZ", coeff_t{ 1 } };
	EXPECT_EQ(obs[0], exp_pt);
}

TEST(Observable, construct_from_string_coeff) {
	Observable obs{ "IXYZ", coeff_t{ -1 } };
	PauliTerm exp_pt{ "IXYZ", coeff_t{ -1 } };
	EXPECT_EQ(obs[0], exp_pt);
}

TEST(Observable, construct_from_nstrings) {
	Observable obs{ "IXYZ", "XXXX" };
	PauliTerm exp_pt{ "IXYZ", coeff_t{ 1 } };
	PauliTerm exp_pt2{ "XXXX", coeff_t{ 1 } };
	EXPECT_EQ(obs[0], exp_pt);
	EXPECT_EQ(obs[1], exp_pt2);
}

TEST(Observable, construct_from_pauli_terms) {
	Observable obs{ PauliTerm{ "IXYZ", coeff_t{ -1 } }, PauliTerm{ "XXXX", coeff_t{ 1 } } };
	PauliTerm exp_pt{ "IXYZ", coeff_t{ -1 } };
	PauliTerm exp_pt2{ "XXXX", coeff_t{ 1 } };
	EXPECT_EQ(obs[0], exp_pt);
	EXPECT_EQ(obs[1], exp_pt2);
}

TEST(Observable, construct_from_iterators) {
	std::vector<PauliTerm<coeff_t>> pts{ { "IX" }, { "XI", -1 } };
	Observable obs{ pts.cbegin(), pts.cend() };
	Observable const obs_const{ pts.begin(), pts.end() };
	EXPECT_EQ(obs[0], PauliTerm<coeff_t>("IX", 1));
	EXPECT_EQ(obs[1], PauliTerm<coeff_t>("XI", -1));
}

TEST(Observable, apply_pauli) {
	using enum Pauli_gates;
	Observable obs{ "IXYZ", "ZXYI" };
	Observable obs_cpy{ "IXYZ", "ZXYI" };
	auto pt1 = obs_cpy[0];
	auto pt2 = obs_cpy[1];

	// I
	for (std::size_t i = 0; i < 4; ++i) {
		obs.apply_pauli(I, i);
		EXPECT_EQ(obs[0], obs_cpy[0]);
		EXPECT_EQ(obs[1], obs_cpy[1]);
		EXPECT_EQ(obs.expectation_value(), obs_cpy.expectation_value());
	}

	// X, Y, Z
	for (auto g : { I, X, Y, Z }) {
		for (std::size_t i = 0; i < 4; ++i) {
			obs.apply_pauli(g, i);
			pt1.apply_pauli(g, i);
			pt2.apply_pauli(g, i);
			EXPECT_EQ(obs[0], pt1);
			EXPECT_EQ(obs[1], pt2);
			EXPECT_EQ(obs.expectation_value(), pt1.expectation_value() + pt2.expectation_value());
		}
	}
}

TEST(Observable, apply_clifford) {
	using enum Clifford_Gates_1Q;
	Observable obs{ "IXYZ", "ZXYI" };
	Observable obs_cpy{ "IXYZ", "ZXYI" };
	auto pt1 = obs_cpy[0];
	auto pt2 = obs_cpy[1];

	for (std::size_t i = 0; i < 4; ++i) {
		obs.apply_clifford(H, i);
		pt1.apply_clifford(H, i);
		pt2.apply_clifford(H, i);
		EXPECT_EQ(obs[0], pt1);
		EXPECT_EQ(obs[1], pt2);
		EXPECT_EQ(obs.expectation_value(), pt1.expectation_value() + pt2.expectation_value());
	}
}
TEST(Observable, apply_cx) {
	Observable obs{ "IXYZ", "ZXYI" };
	Observable obs_cpy{ "IXYZ", "ZXYI" };
	auto pt1 = obs_cpy[0];
	auto pt2 = obs_cpy[1];

	for (std::size_t i = 0; i < 4; ++i) {
		for (std::size_t j = 0; j < 4; ++j) {
			if (i == j)
				continue;
			obs.apply_cx(i, j);
			pt1.apply_cx(i, j);
			pt2.apply_cx(i, j);
			EXPECT_EQ(obs[0], pt1);
			EXPECT_EQ(obs[1], pt2);
			EXPECT_EQ(obs.expectation_value(), pt1.expectation_value() + pt2.expectation_value());
		}
	}
}
TEST(Observable, apply_rz) {
	Observable obs{ "IXYZZIXYYZXIZXIZI", "ZXYIXYZXZZZYYXXYY" };
	Observable obs_cpy = obs;
	PauliTerm<coeff_t> pt1_cpy = obs_cpy[0];
	PauliTerm<coeff_t> pt2_cpy = obs_cpy[1];

	const coeff_t theta = 1.41421356237;

	for (std::size_t i = 0; i < pt1_cpy.size(); ++i) {
		auto obs = obs_cpy;
		auto pt1 = pt1_cpy;
		auto pt2 = pt2_cpy;
		std::vector<decltype(pt1)> pts;

		if (!pt1[i].commutes_with(p_z)) {
			pts.push_back(pt1.apply_rz(i, theta));
		} else if (!pt2[i].commutes_with(p_z)) {
			pts.push_back(pt2.apply_rz(i, theta));
		}
		auto expected_ev =
			std::accumulate(pts.cbegin(), pts.cend(), coeff_t{ 0. },
					[](auto acc, auto const& pt) { return acc + pt.expectation_value(); });

		obs.apply_rz(i, theta);

		for (auto const& pt : pts) { // find all terms inside observable
			EXPECT_EQ(*std::find(obs.cbegin(), obs.cend(), pt), pt);
		}
		EXPECT_EQ(obs.expectation_value(), expected_ev);
	}
}

TEST(Observable, apply_rz_inverse) {
	Observable obs{ "IIXIIIIIIIII" };
	auto before_ev = obs.expectation_value();
	assert(!obs[0][2].commutes_with(p_z));
	obs.apply_rz(2, 0.125);
	obs.apply_rz(2, -0.125);
	auto after_ev = obs.expectation_value();
	EXPECT_EQ(before_ev, after_ev);
}

TEST(Observable, expectation_value) {
	EXPECT_EQ(Observable{ "ZI" }.expectation_value(), 1);
	EXPECT_EQ(Observable{ "IX" }.expectation_value(), 0);
	EXPECT_EQ(Observable{ "YZ" }.expectation_value(), 0);
}

TEST(Observable, serialize) {
	std::array<std::tuple<std::string_view, Observable<coeff_t>>, 2> truth_table{
		{ { { "-0.5 IXYZ +0.8 XXXX" },
		    Observable{ PauliTerm("IXYZ", coeff_t{ -0.5 }), PauliTerm("XXXX", coeff_t{ 0.8 }) } },
		  { { "+0.125 IIII -0.8 YYYY" },
		    Observable{ PauliTerm("IIII", coeff_t{ 0.125 }), PauliTerm("YYYY", coeff_t{ -0.8 }) } } }
	};

	for (auto const [expected_str, pt] : truth_table) {
		std::stringstream ss;
		ss << pt;
		EXPECT_EQ(ss.str(), expected_str);
	}
}
