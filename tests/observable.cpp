
#include "gtest/gtest.h"

#include "observable.hpp"

#include "pauli.hpp"
#include "pauli_term.hpp"
#include "truncate.hpp"
#include <iterator>
#include <numeric>
#include <algorithm>
#include <stdexcept>
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

TEST(Observable, merge_simple) {
	Observable obs{ PauliTerm{ "IXYZ", coeff_t{ -0.25 } }, PauliTerm{ "IXYZ", coeff_t{ 0.5 } } };
	obs.merge();
	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_elems_internal, 1);
	EXPECT_EQ(obs[0], PauliTerm<coeff_t>("IXYZ", 0.25));
}

TEST(Observable, merge_long) {
	Observable obs{ PauliTerm{ "XXXX", coeff_t{ -0.25 } } };
	for (int i = 0; i < 8; ++i) {
		obs.apply_rz(0, 3.14 / 2);
	}

	EXPECT_GT(std::distance(obs.cbegin(), obs.cend()), 2);

	obs.merge();

	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_elems_internal, 2);
}

TEST(Observable, truncate_coeff) {
	Observable obs{ PauliTerm{ "IXYZ", coeff_t{ -0.25 } }, PauliTerm{ "IIII", coeff_t{ 0.001 } } };
	auto nb_removed = obs.truncate(CoefficientTruncator<coeff_t>{ 0.01 });
	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_removed, 1);
	EXPECT_EQ(nb_elems_internal, 1);
	EXPECT_EQ(obs[0], PauliTerm<coeff_t>("IXYZ", -0.25));
}

TEST(Observable, truncate_weight) {
	Observable obs{ PauliTerm{ "IXYZ", coeff_t{ -0.25 } }, PauliTerm{ "IIII", coeff_t{ 0.001 } } };
	auto nb_removed = obs.truncate(WeightTruncator{ 3 });
	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_removed, 1);
	EXPECT_EQ(nb_elems_internal, 1);
	EXPECT_EQ(obs[0], PauliTerm<coeff_t>("IIII", 0.001));
}

TEST(Observable, truncate_multi) {
	Observable obs{ PauliTerm{ "IXYZ", coeff_t{ -0.25 } }, PauliTerm{ "IIII", coeff_t{ 0.10 } },
			PauliTerm{ "IIXI", coeff_t{ 0.0001 } } };
	auto nb_removed = obs.truncate(combine_truncators_raw(CoefficientTruncator<>(0.01), WeightTruncator(3)));
	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_removed, 2);
	EXPECT_EQ(nb_elems_internal, 1);
	EXPECT_EQ(obs[0], PauliTerm<coeff_t>("IIII", 0.10));
}

TEST(Observable, truncate_never) {
	Observable obs{ PauliTerm{ "IXYZ", coeff_t{ -0.25 } }, PauliTerm{ "IIII", coeff_t{ 0.001 } } };
	auto nb_removed = obs.truncate(NeverTruncator{});
	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_removed, 0);
	EXPECT_EQ(nb_elems_internal, 2);
}

TEST(Observable, depolarizing_noise) {
	// no effect on I
	Observable iobs{ "IIII" };
	for (unsigned i = 0; i < iobs[0].size(); ++i) {
		iobs.apply_unital_noise(UnitalNoise::Depolarizing, i, 0.5);
	}
	EXPECT_FLOAT_EQ(iobs[0].coefficient(), 1);

	// affects everything else
	Observable obs{ "XYZ" };
	for (unsigned i = 0; i < obs[0].size(); ++i) {
		obs.apply_unital_noise(UnitalNoise::Depolarizing, i, 0.5);
	}
	EXPECT_FLOAT_EQ(obs[0].coefficient(), 1.f / (1 << obs[0].size()));
}

TEST(Observable, dephasing_noise) {
	// no effect on I or Z
	Observable iobs{ "IZZI" };
	for (unsigned i = 0; i < iobs[0].size(); ++i) {
		iobs.apply_unital_noise(UnitalNoise::Dephasing, i, 0.5);
	}
	EXPECT_FLOAT_EQ(iobs[0].coefficient(), 1);

	// affects everything else
	Observable obs{ "XYYX" };
	for (unsigned i = 0; i < obs[0].size(); ++i) {
		obs.apply_unital_noise(UnitalNoise::Dephasing, i, 0.5);
	}
	EXPECT_FLOAT_EQ(obs[0].coefficient(), 1.f / (1 << obs[0].size()));
}

TEST(Observable, amplitude_damping) {
	static constexpr coeff_t p = 0.01;
	// no effect on I
	Observable iobs{ "IIII" };
	for (unsigned i = 0; i < iobs[0].size(); ++i) {
		iobs.apply_amplitude_damping(i, p);
	}
	EXPECT_EQ(std::distance(iobs.cbegin(), iobs.cend()), 1);
	EXPECT_FLOAT_EQ(iobs[0].coefficient(), 1);

	// XY no split + sqrt(1-p) coeff
	Observable xyobs{ "XYXY" };
	auto xy_ph = xyobs[0].phash();
	for (unsigned i = 0; i < xyobs[0].size(); ++i) {
		xyobs.apply_amplitude_damping(i, p);
	}
	EXPECT_EQ(std::distance(xyobs.cbegin(), xyobs.cend()), 1);
	EXPECT_FLOAT_EQ(xyobs[0].coefficient(), std::pow(std::sqrt(1 - p), xyobs[0].size()));
	EXPECT_EQ(xyobs[0].phash(), xy_ph);

	// Z => split + (1-p) coefficient
	Observable zobs{ "ZZZZ" };
	auto z_ph = zobs[0].phash();
	for (unsigned i = 0; i < zobs[0].size(); ++i) {
		zobs.apply_amplitude_damping(i, p);
	}
	auto zpt = std::find_if(zobs.cbegin(), zobs.cend(), [=](auto const& pt) { return pt.phash() == z_ph; });
	ASSERT_TRUE(zpt != zobs.cend());
	EXPECT_EQ(std::distance(zobs.cbegin(), zobs.cend()), std::pow(2, zobs[0].size()));
	EXPECT_FLOAT_EQ(zpt->coefficient(), std::pow(1 - p, zobs[0].size()));
}

TEST(Observable, bad_init_throw) {
	EXPECT_THROW({ Observable obs(""); }, std::invalid_argument);
	EXPECT_THROW(
		{
			std::initializer_list<std::string_view> lst = {};
			Observable obs{ lst };
		},
		std::invalid_argument);
	EXPECT_THROW(
		{
			std::initializer_list<PauliTerm<coeff_t>> lst = {};
			Observable obs{ lst };
		},
		std::invalid_argument);

	std::vector<PauliTerm<coeff_t>> lst;
	EXPECT_THROW({ Observable obs(lst.begin(), lst.end()); }, std::invalid_argument);
	std::initializer_list<PauliTerm<coeff_t>> lst2 = { PauliTerm("II"), PauliTerm("IIZ") };
	EXPECT_THROW({ Observable obs{ lst2 }; }, std::invalid_argument);
}

TEST(Observable, bad_gate_target_throw) {
	Observable obs{ "II" };
	EXPECT_THROW({ obs.apply_unital_noise(UnitalNoise::Dephasing, 2, 0.1f); }, std::invalid_argument);
	EXPECT_THROW({ obs.apply_amplitude_damping(2, 0.1f); }, std::invalid_argument);
	EXPECT_THROW({ obs.apply_rz(2, 0.1f); }, std::invalid_argument);
	EXPECT_THROW({ obs.apply_cx(0, 2); }, std::invalid_argument);
	EXPECT_THROW({ obs.apply_clifford(Clifford_Gates_1Q::H, 2); }, std::invalid_argument);
	EXPECT_THROW({ obs.apply_pauli(Pauli_gates::X, 2); }, std::invalid_argument);
	EXPECT_THROW({ obs.apply_cx(2, 0); }, std::invalid_argument);
	EXPECT_THROW({ obs.apply_cx(1, 1); }, std::invalid_argument);
}
