#include "gtest/gtest.h"

#include "pauli.hpp"
#include "symbolic/coefficient.hpp"
#include "observable.hpp"
#include "truncate.hpp"

#include <sstream>
#include <string>

using So_t = Observable<SymbolicCoefficient<coeff_t>>;

template <typename T>
std::string to_string(T const& sot) {
	std::stringstream ss;
	ss << sot;
	return ss.str();
}

TEST(SymbolicObservable, init) { So_t so{ "IXYZ" }; }

TEST(SymbolicObservable, print_init) {
	So_t so{ "IXYZ" };
	EXPECT_EQ(to_string(so), "1 IXYZ");
}

TEST(SymbolicObservable, construct_from_string) {
	So_t obs{ "IXYZ" };
	EXPECT_EQ(to_string(obs), "1 IXYZ");
}

TEST(SymbolicObservable, construct_from_string_coeff) {
	So_t obs{ "IXYZ", SymbolicCoefficient<coeff_t>{ -1 } };
	EXPECT_EQ(to_string(obs), "-1 IXYZ");
}

TEST(SymbolicObservable, construct_from_nstrings) {
	So_t obs{ "IXYZ", "XXXX" };
	EXPECT_EQ(to_string(obs), "1 IXYZ + 1 XXXX");
}

TEST(SymbolicObservable, construct_from_pauli_terms) {
	So_t obs{ PauliTerm<SymbolicCoefficient<coeff_t>>{ "IXYZ", coeff_t{ -1 } },
		  PauliTerm<SymbolicCoefficient<coeff_t>>{ "XXXX", coeff_t{ 1 } } };
	EXPECT_EQ(to_string(obs), "-1 IXYZ + 1 XXXX");
}

TEST(SymbolicObservable, construct_from_iterators) {
	std::vector<PauliTerm<SymbolicCoefficient<coeff_t>>> pts{ { "IX" }, { "XI", -1 } };
	So_t obs{ pts.cbegin(), pts.cend() };
	So_t const obs_const{ pts.begin(), pts.end() };
	EXPECT_EQ(to_string(obs), "1 IX + -1 XI");
}

TEST(SymbolicObservable, construct_from_std_string_iterators) {
	const std::vector<std::string> pts({ "IX", "ZZ" });
	So_t obs{ pts.begin(), pts.end() };
	EXPECT_EQ(to_string(obs), "1 IX + 1 ZZ");
}

TEST(SymbolicObservable, apply_pauli) {
	using enum Pauli_gates;
	So_t obs{ "IXYZ", "ZXYI" };
	So_t obs_cpy{ "IXYZ", "ZXYI" };
	auto pt1 = obs_cpy.copy_term(0);
	auto pt2 = obs_cpy.copy_term(1);

	// I
	for (std::size_t i = 0; i < 4; ++i) {
		obs.apply_pauli(I, i);
		EXPECT_EQ(obs[0].coefficient().evaluate(), 1.f);
		EXPECT_EQ(obs.expectation_value().evaluate(), obs_cpy.expectation_value().evaluate());
	}

	// X, Y, Z
	for (auto g : { I, X, Y, Z }) {
		for (std::size_t i = 0; i < 4; ++i) {
			obs = obs_cpy;
			pt1 = obs_cpy.copy_term(0);
			pt2 = obs_cpy.copy_term(1);

			obs.apply_pauli(g, i);
			pt1.apply_pauli(g, i);
			pt2.apply_pauli(g, i);
			EXPECT_EQ(to_string(obs[0]), to_string(pt1));
			EXPECT_EQ(to_string(obs[1]), to_string(pt2));
			EXPECT_EQ(obs.expectation_value().evaluate(),
				  pt1.expectation_value().evaluate() + pt2.expectation_value().evaluate());
		}
	}
}

TEST(SymbolicObservable, apply_clifford) {
	using enum Clifford_Gates_1Q;
	So_t obs{ "IXYZ", "ZXYI" };
	So_t obs_cpy{ "IXYZ", "ZXYI" };
	auto pt1 = obs_cpy.copy_term(0);
	auto pt2 = obs_cpy.copy_term(1);

	for (std::size_t i = 0; i < 4; ++i) {
		obs = obs_cpy;
		pt1 = obs_cpy.copy_term(0);
		pt2 = obs_cpy.copy_term(1);

		obs.apply_clifford(H, i);
		pt1.apply_clifford(H, i);
		pt2.apply_clifford(H, i);
		EXPECT_EQ(to_string(obs[0]), to_string(pt1));
		EXPECT_EQ(to_string(obs[1]), to_string(pt2));
		EXPECT_EQ(obs.expectation_value().evaluate(),
			  pt1.expectation_value().evaluate() + pt2.expectation_value().evaluate());
	}
}

TEST(SymbolicObservable, apply_cx) {
	So_t obs{ "IXYZ", "ZXYI" };
	So_t obs_cpy{ "IXYZ", "ZXYI" };
	auto pt1 = obs_cpy.copy_term(0);
	auto pt2 = obs_cpy.copy_term(1);

	for (std::size_t i = 0; i < 4; ++i) {
		for (std::size_t j = 0; j < 4; ++j) {
			if (i == j)
				continue;

			obs = obs_cpy;
			pt1 = obs_cpy.copy_term(0);
			pt2 = obs_cpy.copy_term(1);

			obs.apply_cx(i, j);
			pt1.apply_cx(i, j);
			pt2.apply_cx(i, j);
			EXPECT_EQ(to_string(obs[0]), to_string(pt1));
			EXPECT_EQ(to_string(obs[1]), to_string(pt2));
			EXPECT_EQ(obs.expectation_value().evaluate(),
				  pt1.expectation_value().evaluate() + pt2.expectation_value().evaluate());
		}
	}
}

TEST(SymbolicObservable, apply_rz_constant) {
	So_t obs{ "IXYZZIXYYZXIZXIZI", "ZXYIXYZXZZZYYXXYY" };
	So_t obs_cpy = obs;
	auto pt1_cpy = obs_cpy.copy_term(0);
	auto pt2_cpy = obs_cpy.copy_term(1);

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
			std::accumulate(pts.cbegin(), pts.cend(), coeff_t{ 0. }, [](auto acc, auto const& pt) {
				return acc + pt.expectation_value().evaluate();
			});

		obs.apply_rz(i, theta);

		for (auto const& pt : pts) { // find all terms inside observable
			auto it = std::find_if(obs.begin(), obs.end(), [&](auto const& lhs) {
				return static_cast<PauliTerm<SymbolicCoefficient<coeff_t>>>(lhs).equal_bitstring(pt);
			});
			ASSERT_NE(it, obs.end());
		}
		EXPECT_EQ(obs.expectation_value().evaluate(), expected_ev);
	}
}

TEST(SymbolicObservable, apply_rz_variable) {
	So_t obs{ "IXYZZIXYYZXIZXIZI", "ZXYIXYZXZZZYYXXYY" };
	So_t obs_cpy = obs;
	auto pt1_cpy = obs_cpy.copy_term(0);
	auto pt2_cpy = obs_cpy.copy_term(1);

	const coeff_t theta = 1.41421356237;
	Variable v_theta{ "theta" };

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
			std::accumulate(pts.cbegin(), pts.cend(), coeff_t{ 0. }, [](auto acc, auto const& pt) {
				return acc + pt.expectation_value().evaluate();
			});

		obs.apply_rz(i, v_theta);

		for (auto const& pt : pts) { // find all terms inside observable
			auto it = std::find_if(obs.begin(), obs.end(), [&](auto const& lhs) {
				return static_cast<PauliTerm<SymbolicCoefficient<coeff_t>>>(lhs).equal_bitstring(pt);
			});
			ASSERT_NE(it, obs.end());
		}
		EXPECT_EQ(obs.expectation_value().evaluate({ { "theta", theta } }), expected_ev);
	}
}

TEST(SymbolicObservable, expectation_value_is_simplified) {
	EXPECT_EQ(to_string(So_t{ "ZI" }.expectation_value().simplified()), "1");
	EXPECT_EQ(to_string(So_t{ "IX" }.expectation_value().simplified()), "0");
	EXPECT_EQ(to_string(So_t{ "YZ" }.expectation_value().simplified()), "0");
	EXPECT_EQ(to_string(So_t{ { "ZI", Variable("theta") }, { "IX", 1 } }.expectation_value().simplified()),
		  "theta");
}

TEST(SymbolicObservable, merge_works) {
	So_t obs{ { "IXYZ", SymbolicCoefficient<coeff_t>{ -0.25 } }, { "IXYZ", 0.5 } };
	obs.merge();
	EXPECT_EQ(obs.size(), 1);
	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_elems_internal, 1);
	EXPECT_EQ(to_string(obs[0]), "-0.25 + 0.5 IXYZ");
}

TEST(SymbolicObservable, truncate_weight) {
	So_t obs{ { "IXYZ", SymbolicCoefficient<coeff_t>{ -0.25 } }, { "IIII", 0.001 } };
	auto nb_removed = obs.truncate(WeightTruncator<SymbolicCoefficient<coeff_t>>{ 3 });
	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_removed, 1);
	EXPECT_EQ(nb_elems_internal, 1);
	EXPECT_EQ(to_string(obs[0]), "0.001 IIII");
}

TEST(SymbolicObservable, truncate_never) {
	So_t obs{ { "IXYZ", SymbolicCoefficient<coeff_t>{ -0.25 } }, { "IIII", 0.001 } };
	auto nb_removed = obs.truncate(NeverTruncator<SymbolicCoefficient<coeff_t>>{});
	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_removed, 0);
	EXPECT_EQ(nb_elems_internal, 2);
}

TEST(SymbolicObservable, truncate_multi) {
	So_t obs{ { "IXYZ", SymbolicCoefficient<coeff_t>{ -0.25 } }, { "IIII", 0.10 } };
	auto mt = combine_truncators_raw(NeverTruncator<SymbolicCoefficient<coeff_t>>(),
					 WeightTruncator<SymbolicCoefficient<coeff_t>>(3));

	auto nb_removed = obs.truncate(mt);
	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_removed, 1);
	EXPECT_EQ(nb_elems_internal, 1);
	EXPECT_EQ(to_string(obs[0]), "0.1 IIII");
}

TEST(SymbolicObservable, depolarizing_noise_var) {
	coeff_t p = 0.5;
	Variable var_p{ "p" };

	// no effect on I
	So_t iobs{ "IIII" };
	for (unsigned i = 0; i < iobs[0].size(); ++i) {
		iobs.apply_unital_noise(UnitalNoise::Depolarizing, i, var_p);
	}
	EXPECT_FLOAT_EQ(iobs[0].coefficient().evaluate({ { "p", p } }), 1);

	// affects everything else
	So_t obs{ "XYZ" };
	for (unsigned i = 0; i < obs[0].size(); ++i) {
		obs.apply_unital_noise(UnitalNoise::Depolarizing, i, var_p);
	}
	EXPECT_FLOAT_EQ(obs[0].coefficient().evaluate({ { "p", p } }), 1.f / (1 << obs[0].size()));
}

TEST(SymbolicObservable, dephasing_noise_var) {
	coeff_t p = 0.5;
	Variable var_p{ "p" };

	// no effect on I or Z
	So_t iobs{ "IZZI" };
	for (unsigned i = 0; i < iobs[0].size(); ++i) {
		iobs.apply_unital_noise(UnitalNoise::Dephasing, i, var_p);
	}
	EXPECT_FLOAT_EQ(iobs[0].coefficient().evaluate({ { "p", p } }), 1);

	// affects everything else
	So_t obs{ "XYYX" };
	for (unsigned i = 0; i < obs[0].size(); ++i) {
		obs.apply_unital_noise(UnitalNoise::Dephasing, i, var_p);
	}
	EXPECT_FLOAT_EQ(obs[0].coefficient().evaluate({ { "p", p } }), 1.f / (1 << obs[0].size()));
}

TEST(SymbolicObservable, amplitude_damping_var) {
	static constexpr coeff_t p = 0.01;
	Variable var_p{ "p" };

	// no effect on I
	So_t iobs{ "IIII" };
	for (unsigned i = 0; i < iobs[0].size(); ++i) {
		iobs.apply_amplitude_damping(i, var_p);
	}
	EXPECT_EQ(std::distance(iobs.cbegin(), iobs.cend()), 1);
	EXPECT_FLOAT_EQ(iobs[0].coefficient().evaluate({ { "p", p } }), 1);

	// XY no split + sqrt(1-p) coeff
	So_t xyobs{ "XYXY" };
	auto xy_ph = xyobs[0].phash();
	for (unsigned i = 0; i < xyobs[0].size(); ++i) {
		xyobs.apply_amplitude_damping(i, var_p);
	}
	EXPECT_EQ(std::distance(xyobs.cbegin(), xyobs.cend()), 1);
	EXPECT_FLOAT_EQ(xyobs[0].coefficient().evaluate({ { "p", p } }), std::pow(std::sqrt(1 - p), xyobs[0].size()));
	EXPECT_EQ(xyobs[0].phash(), xy_ph);

	// Z => split + (1-p) coefficient
	So_t zobs{ "ZZZZ" };
	auto z_ph = zobs[0].phash();
	for (unsigned i = 0; i < zobs[0].size(); ++i) {
		zobs.apply_amplitude_damping(i, var_p);
	}
	auto zpt = std::find_if(zobs.cbegin(), zobs.cend(), [=](auto const& pt) { return pt.phash() == z_ph; });
	ASSERT_TRUE(zpt != zobs.cend());
	EXPECT_EQ(std::distance(zobs.cbegin(), zobs.cend()), std::pow(2, zobs[0].size()));
	EXPECT_FLOAT_EQ((*zpt).coefficient().evaluate({ { "p", p } }), std::pow(1 - p, zobs[0].size()));
}

TEST(SymbolicObservable, simplify) {
	static constexpr coeff_t p = 0.01;
	Variable var_p{ "p" };
	static constexpr coeff_t theta = 3.14159f / 3.f;
	Variable var_theta{ "theta" };

	So_t obs{ "XZ" };

	// apply AD
	for (unsigned i = 0; i < obs[0].size(); ++i) {
		obs.apply_amplitude_damping(i, var_p);
	}

	for (unsigned i = 0; i < obs[0].size(); ++i) {
		obs.apply_rz(i, var_theta);
	}

	for (unsigned i = 0; i < obs[0].size(); ++i) {
		obs.apply_amplitude_damping(i, var_p);
	}

	for (unsigned i = 0; i < obs[0].size(); ++i) {
		obs.apply_clifford(Clifford_Gates_1Q::H, i);
	}

	obs.merge();

	auto before_simplify = to_string(obs);

	obs.simplify();

	EXPECT_NE(before_simplify, to_string(obs));
	EXPECT_GT(before_simplify.size(), to_string(obs).size());

	// bind noise
	auto before_bind = to_string(obs);
	obs.simplify({ { "p", p } });
	EXPECT_NE(before_bind, to_string(obs));
	EXPECT_GT(before_bind.size(), to_string(obs).size());

	// bind theta
	auto before_theta = to_string(obs);
	obs.simplify({ { "theta", theta } });
	EXPECT_NE(before_theta, to_string(obs));
	EXPECT_GT(before_theta.size(), to_string(obs).size());

	// final ev can be computed
	coeff_t ev = obs.expectation_value().evaluate();
	EXPECT_NE(ev, 0);
}
