
#include "gtest/gtest.h"

#include "observable.hpp"
#include "policy.hpp"

#include "pauli.hpp"
#include "pauli_term.hpp"
#include "truncate.hpp"
#include <iostream>
#include <iterator>
#include <numeric>
#include <algorithm>
#include <stdexcept>
#include <string_view>

template <typename ExecutionPolicy>
class ObservableTest : public testing::Test {
    public:
	static constexpr auto policy = ExecutionPolicy{};
	static constexpr auto rpolicy = RuntimePolicy{ policy };
};

template <typename T>
struct ToTypes;

template <typename... Args>
struct ToTypes<const std::tuple<Args...>> {
	using type = testing::Types<Args...>;
};

using tested_policies_t = ToTypes<decltype(available_policies)>::type;
TYPED_TEST_SUITE(ObservableTest, tested_policies_t);

TYPED_TEST(ObservableTest, construct_from_string) {
	Observable obs{ "IXYZ" };
	PauliTerm exp_pt{ "IXYZ", coeff_t{ 1 } };
	EXPECT_EQ(obs[0], exp_pt);
}

TYPED_TEST(ObservableTest, construct_from_string_coeff) {
	Observable obs{ "IXYZ", coeff_t{ -1 } };
	PauliTerm exp_pt{ "IXYZ", coeff_t{ -1 } };
	EXPECT_EQ(obs[0], exp_pt);
}

TYPED_TEST(ObservableTest, construct_from_nstrings) {
	Observable obs{ "IXYZ", "XXXX" };
	PauliTerm exp_pt{ "IXYZ", coeff_t{ 1 } };
	PauliTerm exp_pt2{ "XXXX", coeff_t{ 1 } };
	EXPECT_EQ(obs[0], exp_pt);
	EXPECT_EQ(obs[1], exp_pt2);
}

TYPED_TEST(ObservableTest, construct_from_pauli_terms) {
	Observable obs{ PauliTerm{ "IXYZ", coeff_t{ -1 } }, PauliTerm{ "XXXX", coeff_t{ 1 } } };
	PauliTerm exp_pt{ "IXYZ", coeff_t{ -1 } };
	PauliTerm exp_pt2{ "XXXX", coeff_t{ 1 } };
	EXPECT_EQ(obs[0], exp_pt);
	EXPECT_EQ(obs[1], exp_pt2);
}

TYPED_TEST(ObservableTest, construct_from_iterators) {
	std::vector<PauliTerm<coeff_t>> pts{ { "IX" }, { "XI", -1 } };
	Observable obs{ pts.cbegin(), pts.cend() };
	Observable const obs_const{ pts.begin(), pts.end() };
	EXPECT_EQ(obs[0], PauliTerm<coeff_t>("IX", 1));
	EXPECT_EQ(obs[1], PauliTerm<coeff_t>("XI", -1));
}

TYPED_TEST(ObservableTest, construct_from_std_string_iterators) {
	const std::vector<std::string> pts({ "IX", "ZZ" });
	Observable obs{ pts.begin(), pts.end() };
	EXPECT_EQ(obs[0], PauliTerm<coeff_t>("IX", 1));
	EXPECT_EQ(obs[1], PauliTerm<coeff_t>("ZZ", 1));
}

TYPED_TEST(ObservableTest, apply_pauli) {
	using enum Pauli_gates;
	Observable obs{ "IXYZ", "ZXYI" };
	Observable obs_cpy{ "IXYZ", "ZXYI" };
	auto pt1 = obs_cpy.copy_term(0);
	auto pt2 = obs_cpy.copy_term(1);

	// I
	for (std::size_t i = 0; i < 4; ++i) {
		obs.apply_pauli(I, i, this->rpolicy);
		EXPECT_EQ(obs[0], obs_cpy[0]);
		EXPECT_EQ(obs[1], obs_cpy[1]);
		EXPECT_EQ(obs.expectation_value(this->rpolicy), obs_cpy.expectation_value(this->rpolicy));
	}

	// X, Y, Z
	for (auto g : { I, X, Y, Z }) {
		for (std::size_t i = 0; i < 4; ++i) {
			obs.apply_pauli(g, i, this->rpolicy);
			pt1.apply_pauli(g, i);
			pt2.apply_pauli(g, i);
			EXPECT_EQ(obs[0], pt1);
			EXPECT_EQ(obs[1], pt2);
			EXPECT_EQ(obs.expectation_value(this->rpolicy), pt1.expectation_value() + pt2.expectation_value());
		}
	}
}

TYPED_TEST(ObservableTest, apply_clifford) {
	using enum Clifford_Gates_1Q;
	Observable obs{ "IXYZ", "ZXYI" };
	Observable obs_cpy{ "IXYZ", "ZXYI" };
	auto pt1 = obs_cpy.copy_term(0);
	auto pt2 = obs_cpy.copy_term(1);

	for (std::size_t i = 0; i < 4; ++i) {
		obs.apply_clifford(H, i, this->rpolicy);
		pt1.apply_clifford(H, i);
		pt2.apply_clifford(H, i);
		EXPECT_EQ(obs[0], pt1);
		EXPECT_EQ(obs[1], pt2);
		EXPECT_EQ(obs.expectation_value(this->rpolicy), pt1.expectation_value() + pt2.expectation_value());
	}
}

TYPED_TEST(ObservableTest, apply_cx) {
	Observable obs{ "IXYZ", "ZXYI" };
	Observable obs_cpy{ "IXYZ", "ZXYI" };
	auto pt1 = obs_cpy.copy_term(0);
	auto pt2 = obs_cpy.copy_term(1);

	for (std::size_t i = 0; i < 4; ++i) {
		for (std::size_t j = 0; j < 4; ++j) {
			if (i == j)
				continue;
			obs.apply_cx(i, j, this->rpolicy);
			pt1.apply_cx(i, j);
			pt2.apply_cx(i, j);
			EXPECT_EQ(obs[0], pt1);
			EXPECT_EQ(obs[1], pt2);
			EXPECT_EQ(obs.expectation_value(this->rpolicy), pt1.expectation_value() + pt2.expectation_value());
		}
	}
}

TYPED_TEST(ObservableTest, apply_rz) {
	Observable obs{ "IXYZZIXYYZXIZXIZI", "ZXYIXYZXZZZYYXXYY" };
	Observable obs_cpy = obs;
	PauliTerm<coeff_t> pt1_cpy = obs_cpy.copy_term(0);
	PauliTerm<coeff_t> pt2_cpy = obs_cpy.copy_term(1);

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
		auto expected_ev = std::accumulate(pts.cbegin(), pts.cend(), coeff_t{ 0. },
						   [](auto acc, auto const& pt) { return acc + pt.expectation_value(); });

		obs.apply_rz(i, theta, this->rpolicy);

		for (auto const& pt : pts) { // find all terms inside observable
			auto it = std::find(obs.begin(), obs.end(), pt);
			ASSERT_NE(it, obs.end());
			EXPECT_EQ(*it, pt);
		}
		EXPECT_EQ(obs.expectation_value(this->rpolicy), expected_ev);
	}
}

TYPED_TEST(ObservableTest, apply_rp_rz) {
	Observable obs{ "IXYZZIXYYZXIZXIZI", "ZXYIXYZXZZZYYXXYY" };
	Observable obs_cpy = obs;
	PauliTerm<coeff_t> pt1_cpy = obs_cpy.copy_term(0);
	PauliTerm<coeff_t> pt2_cpy = obs_cpy.copy_term(1);

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
		auto expected_ev = std::accumulate(pts.cbegin(), pts.cend(), coeff_t{ 0. },
						   [](auto acc, auto const& pt) { return acc + pt.expectation_value(); });

		std::vector<Pauli> axis(obs.nb_qubits(), p_i);
		axis[i] = p_z;
		obs.apply_rp(axis, theta, this->rpolicy);

		for (auto const& pt : pts) { // find all terms inside observable
			auto it = std::find(obs.begin(), obs.end(), pt);
			ASSERT_NE(it, obs.end());
			EXPECT_EQ(*it, pt);
		}
		EXPECT_EQ(obs.expectation_value(this->rpolicy), expected_ev);
	}
}

TYPED_TEST(ObservableTest, apply_rp_rzz) {
	Observable obs{ "IXYZZIXYYZXIZXIZI", "ZXYIXYZXZZZYYXXYY" };
	Observable obs_cpy = obs;

	const coeff_t theta = 1.41421356237;

	for (std::size_t i = 0; i < obs.size() - 1; ++i) {
		auto obs = obs_cpy;
		auto cpy = obs_cpy;

		cpy.apply_cx(i, i + 1, this->rpolicy);
		cpy.apply_rz(i + 1, theta, this->rpolicy);
		cpy.apply_cx(i, i + 1, this->rpolicy);

		std::vector<Pauli> axis(obs.nb_qubits(), p_i);
		axis[i] = p_z;
		axis[i + 1] = p_z; // Rz_iz_i+1(theta)
		obs.apply_rp(axis, theta, this->rpolicy);

		EXPECT_EQ(obs.expectation_value(), cpy.expectation_value());
		ASSERT_EQ(obs.size(), cpy.size());
		for (std::size_t j = 0; j < obs.size(); ++j) { // find all terms inside observable
			auto h = obs[j].phash();
			auto it = std::find_if(cpy.begin(), cpy.end(), [=](auto const& p) { return p.phash() == h; });
			ASSERT_NE(it, obs.end());
		}
	}
}

TYPED_TEST(ObservableTest, apply_rp_exp_ixzyx) {
	Observable obs{ "ZIII", "IZII", "IIZI", "IIIZ" };
	Observable cpy = obs;
	coeff_t theta = 2; // NOTE: Rp(theta) = exp(-iP * (theta/2))

	// transpiled circuit for exp(-iHt) with t=1 and H=XZYX (inversed)
	cpy.apply_clifford(Clifford_Gates_1Q::H, 3, this->rpolicy);
	cpy.apply_cx(3, 2, this->rpolicy);
	cpy.apply_rz(1, 1.5707963267948966, this->rpolicy);
	cpy.apply_clifford(Clifford_Gates_1Q::H, 1, this->rpolicy);
	cpy.apply_rz(1, 1.5707963267948966, this->rpolicy);
	cpy.apply_cx(2, 1, this->rpolicy);
	cpy.apply_clifford(Clifford_Gates_1Q::H, 0, this->rpolicy);
	cpy.apply_cx(1, 0, this->rpolicy);
	cpy.apply_rz(0, 2.0, this->rpolicy);
	cpy.apply_cx(1, 0, this->rpolicy);
	cpy.apply_cx(2, 1, this->rpolicy);
	cpy.apply_cx(3, 2, this->rpolicy);
	cpy.apply_clifford(Clifford_Gates_1Q::H, 3, this->rpolicy);
	cpy.apply_rz(1, -1.5707963267948966, this->rpolicy);
	cpy.apply_clifford(Clifford_Gates_1Q::H, 1, this->rpolicy);
	cpy.apply_rz(1, -1.5707963267948966, this->rpolicy);
	cpy.apply_clifford(Clifford_Gates_1Q::H, 0, this->rpolicy);
	cpy.merge(this->rpolicy);

	std::vector<Pauli> axis{ { p_x, p_z, p_y, p_x } }; // XZYX
	obs.apply_rp(axis, theta, this->rpolicy);
	obs.merge(this->rpolicy);

	EXPECT_NEAR(obs.expectation_value(), cpy.expectation_value(), 1e-6f);
	ASSERT_LE(obs.size(), cpy.size());
	for (std::size_t j = 0; j < obs.size(); ++j) { // find all terms inside observable
		auto h = obs[j].phash();
		auto it = std::find_if(cpy.begin(), cpy.end(), [=](auto const& p) { return p.phash() == h; });
		ASSERT_NE(it, obs.end());
	}
}

TYPED_TEST(ObservableTest, apply_rz_inverse) {
	Observable obs{ "IIXIIIIIIIII" };
	auto before_ev = obs.expectation_value(this->rpolicy);
	EXPECT_TRUE(!obs[0].get_pauli(2).commutes_with(p_z));
	obs.apply_rz(2, 0.125, this->rpolicy);
	obs.apply_rz(2, -0.125, this->rpolicy);
	auto after_ev = obs.expectation_value(this->rpolicy);
	EXPECT_EQ(before_ev, after_ev);
}

/* U3 test */

// 1. Rx only (via U3(theta, -pi/2, pi/2))
TYPED_TEST(ObservableTest, apply_u3_rx_only) {
    constexpr coeff_t pi = 3.14159265358979323846;
    constexpr coeff_t theta = 1.41421356237;
    
    Observable obs{ "X", "Y", "Z" };
    Observable cpy = obs;

    // U3(theta, -pi/2, pi/2) applies a pure Rx(theta)
    obs.apply_u3(0, theta, -pi / 2.0, pi / 2.0, this->rpolicy);
    obs.merge(this->rpolicy);

    // Equivalent Rx(theta) = H Rz(theta) H
    cpy.apply_clifford(Clifford_Gates_1Q::H, 0, this->rpolicy);
    cpy.apply_rz(0, theta, this->rpolicy);
    cpy.apply_clifford(Clifford_Gates_1Q::H, 0, this->rpolicy);
    cpy.merge(this->rpolicy);

    EXPECT_NEAR(obs.expectation_value(this->rpolicy), cpy.expectation_value(this->rpolicy), 1e-5f);
    ASSERT_LE(obs.size(), cpy.size());
    for (std::size_t j = 0; j < obs.size(); ++j) {
        auto h = obs[j].phash();
        auto it = std::find_if(cpy.begin(), cpy.end(), [=](auto const& p) { return p.phash() == h; });
        ASSERT_NE(it, cpy.end());
    }
}

// 2. Ry only (via decomposition)
TYPED_TEST(ObservableTest, apply_u3_ry_only) {
    constexpr coeff_t pi = 3.14159265358979323846;
    constexpr coeff_t theta = 1.41421356237;
    
    Observable obs{ "X", "Y", "Z" };
    Observable cpy = obs;

    // Pure Ry(theta)
    obs.apply_u3(0, theta, 0.0, 0.0, this->rpolicy);
    obs.merge(this->rpolicy);

    // Equivalent Ry(theta) = Rz(pi/2) H Rz(theta) H Rz(-pi/2)
    cpy.apply_rz(0, pi / 2.0, this->rpolicy);
    cpy.apply_clifford(Clifford_Gates_1Q::H, 0, this->rpolicy);
    cpy.apply_rz(0, theta, this->rpolicy);
    cpy.apply_clifford(Clifford_Gates_1Q::H, 0, this->rpolicy);
    cpy.apply_rz(0, -pi / 2.0, this->rpolicy);
    cpy.merge(this->rpolicy);

    EXPECT_NEAR(obs.expectation_value(this->rpolicy), cpy.expectation_value(this->rpolicy), 1e-5f);
    ASSERT_LE(obs.size(), cpy.size());
    for (std::size_t j = 0; j < obs.size(); ++j) {
        auto h = obs[j].phash();
        auto it = std::find_if(cpy.begin(), cpy.end(), [=](auto const& p) { return p.phash() == h; });
        ASSERT_NE(it, cpy.end());
    }
}

// 3. Rz only
TYPED_TEST(ObservableTest, apply_u3_rz_only) {
    constexpr coeff_t alpha = 0.8414709848;
    
    Observable obs{ "X", "Y", "Z" };
    Observable cpy = obs;

    // Pure Rz(alpha)
    obs.apply_u3(0, 0.0, 0.0, alpha, this->rpolicy);
    obs.merge(this->rpolicy);

    // Equivalent Rz(alpha)
    cpy.apply_rz(0, alpha, this->rpolicy);
    cpy.merge(this->rpolicy);

    EXPECT_NEAR(obs.expectation_value(this->rpolicy), cpy.expectation_value(this->rpolicy), 1e-5f);
    ASSERT_LE(obs.size(), cpy.size());
    for (std::size_t j = 0; j < obs.size(); ++j) {
        auto h = obs[j].phash();
        auto it = std::find_if(cpy.begin(), cpy.end(), [=](auto const& p) { return p.phash() == h; });
        ASSERT_NE(it, cpy.end());
    }
}

// 4. Theta only (Functionally identical to Ry, but isolates the parameter)
TYPED_TEST(ObservableTest, apply_u3_theta_only) {
    constexpr coeff_t pi = 3.14159265358979323846;
    constexpr coeff_t theta = 1.123456;
    
    Observable obs{ "X", "Y", "Z" };
    Observable cpy = obs;

    // U3(theta, 0, 0)
    obs.apply_u3(0, theta, 0.0, 0.0, this->rpolicy);
    obs.merge(this->rpolicy);

    // Equivalent Ry(theta) sequence
    cpy.apply_rz(0, pi / 2.0, this->rpolicy);
    cpy.apply_clifford(Clifford_Gates_1Q::H, 0, this->rpolicy);
    cpy.apply_rz(0, theta, this->rpolicy);
    cpy.apply_clifford(Clifford_Gates_1Q::H, 0, this->rpolicy);
    cpy.apply_rz(0, -pi / 2.0, this->rpolicy);
    cpy.merge(this->rpolicy);

    EXPECT_NEAR(obs.expectation_value(this->rpolicy), cpy.expectation_value(this->rpolicy), 1e-5f);
    ASSERT_LE(obs.size(), cpy.size());
    for (std::size_t j = 0; j < obs.size(); ++j) {
        auto h = obs[j].phash();
        auto it = std::find_if(cpy.begin(), cpy.end(), [=](auto const& p) { return p.phash() == h; });
        ASSERT_NE(it, cpy.end());
    }
}

// 5. Phi only (Isolates the Z phase before the Y rotation)
TYPED_TEST(ObservableTest, apply_u3_phi_only) {
    constexpr coeff_t phi = 0.456789;
    
    Observable obs{ "X", "Y", "Z" };
    Observable cpy = obs;

    // U3(0, phi, 0) simplifies to Rz(phi)
    obs.apply_u3(0, 0.0, phi, 0.0, this->rpolicy);
    obs.merge(this->rpolicy);

    // Equivalent
    cpy.apply_rz(0, phi, this->rpolicy);
    cpy.merge(this->rpolicy);

    EXPECT_NEAR(obs.expectation_value(this->rpolicy), cpy.expectation_value(this->rpolicy), 1e-5f);
    ASSERT_LE(obs.size(), cpy.size());
    for (std::size_t j = 0; j < obs.size(); ++j) {
        auto h = obs[j].phash();
        auto it = std::find_if(cpy.begin(), cpy.end(), [=](auto const& p) { return p.phash() == h; });
        ASSERT_NE(it, cpy.end());
    }
}

// 6. Lambda only (Isolates the Z phase after the Y rotation)
TYPED_TEST(ObservableTest, apply_u3_lambda_only) {
    constexpr coeff_t lambda = 0.789123;
    
    Observable obs{ "X", "Y", "Z" };
    Observable cpy = obs;

    // U3(0, 0, lambda) simplifies to Rz(lambda)
    obs.apply_u3(0, 0.0, 0.0, lambda, this->rpolicy);
    obs.merge(this->rpolicy);

    // Equivalent
    cpy.apply_rz(0, lambda, this->rpolicy);
    cpy.merge(this->rpolicy);

    EXPECT_NEAR(obs.expectation_value(this->rpolicy), cpy.expectation_value(this->rpolicy), 1e-5f);
    ASSERT_LE(obs.size(), cpy.size());
    for (std::size_t j = 0; j < obs.size(); ++j) {
        auto h = obs[j].phash();
        auto it = std::find_if(cpy.begin(), cpy.end(), [=](auto const& p) { return p.phash() == h; });
        ASSERT_NE(it, cpy.end());
    }
}

// 7. Full U3 (Combines all rotations)
TYPED_TEST(ObservableTest, apply_u3_full) {
    constexpr coeff_t pi = 3.14159265358979323846;
    constexpr coeff_t theta = 1.123456;
    constexpr coeff_t phi = 0.456789;
    constexpr coeff_t lambda = 0.789123;
    
    Observable obs{ "X", "Y", "Z" };
    Observable cpy = obs;

    // Full U3
    obs.apply_u3(0, theta, phi, lambda, this->rpolicy);
    obs.merge(this->rpolicy);

    // Equivalent sequence: Rz(phi) -> Ry(theta) -> Rz(lambda)
    // 1. Rz(phi)
    cpy.apply_rz(0, phi, this->rpolicy);
    
    // 2. Ry(theta)
    cpy.apply_rz(0, pi / 2.0, this->rpolicy);
    cpy.apply_clifford(Clifford_Gates_1Q::H, 0, this->rpolicy);
    cpy.apply_rz(0, theta, this->rpolicy);
    cpy.apply_clifford(Clifford_Gates_1Q::H, 0, this->rpolicy);
    cpy.apply_rz(0, -pi / 2.0, this->rpolicy);
    
    // 3. Rz(lambda)
    cpy.apply_rz(0, lambda, this->rpolicy);
    
    cpy.merge(this->rpolicy);

    EXPECT_NEAR(obs.expectation_value(this->rpolicy), cpy.expectation_value(this->rpolicy), 1e-5f);
    ASSERT_LE(obs.size(), cpy.size());
    for (std::size_t j = 0; j < obs.size(); ++j) {
        auto h = obs[j].phash();
        auto it = std::find_if(cpy.begin(), cpy.end(), [=](auto const& p) { return p.phash() == h; });
        ASSERT_NE(it, cpy.end());
    }
}

TYPED_TEST(ObservableTest, expectation_value) {
	EXPECT_EQ(Observable{ "ZI" }.expectation_value(this->rpolicy), 1);
	EXPECT_EQ(Observable{ "IX" }.expectation_value(this->rpolicy), 0);
	EXPECT_EQ(Observable{ "YZ" }.expectation_value(this->rpolicy), 0);
}

TYPED_TEST(ObservableTest, serialize) {
	std::array<std::tuple<std::string_view, Observable<coeff_t>>, 2> truth_table{
		{ { { "-0.5 IXYZ +0.8 XXXX" }, Observable{ PauliTerm("IXYZ", coeff_t{ -0.5 }), PauliTerm("XXXX", coeff_t{ 0.8 }) } },
		  { { "+0.125 IIII -0.8 YYYY" }, Observable{ PauliTerm("IIII", coeff_t{ 0.125 }), PauliTerm("YYYY", coeff_t{ -0.8 }) } } }
	};

	for (auto const& [expected_str, pt] : truth_table) {
		std::stringstream ss;
		ss << pt;
		EXPECT_EQ(ss.str(), expected_str);
	}
}

TYPED_TEST(ObservableTest, merge_simple) {
	Observable obs{ PauliTerm{ "IXYZ", coeff_t{ -0.25 } }, PauliTerm{ "IXYZ", coeff_t{ 0.5 } } };
	obs.merge(this->rpolicy);
	EXPECT_EQ(obs.size(), 1);
	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_elems_internal, 1);
	EXPECT_EQ(obs[0], PauliTerm<coeff_t>("IXYZ", 0.25));
}

TYPED_TEST(ObservableTest, merge_long) {
	Observable obs{ PauliTerm{ "XXXX", coeff_t{ -0.25 } } };
	for (int i = 0; i < 8; ++i) {
		obs.apply_rz(0, 3.14 / 2, this->rpolicy);
	}

	EXPECT_GT(std::distance(obs.cbegin(), obs.cend()), 2);

	obs.merge(this->rpolicy);

	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_elems_internal, 2);
}

TYPED_TEST(ObservableTest, merge_long_twice) {
	Observable obs{ PauliTerm{ "XXXX", coeff_t{ -0.25 } } };
	for (std::size_t i = 0; i < 2; ++i) {
		for (int i = 0; i < 8; ++i) {
			obs.apply_rz(0, 3.14 / 2, this->rpolicy);
		}

		EXPECT_GT(std::distance(obs.cbegin(), obs.cend()), 2);

		obs.merge(this->rpolicy);

		auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
		EXPECT_EQ(nb_elems_internal, 2);
	}
}

TYPED_TEST(ObservableTest, truncate_coeff) {
	Observable obs{ PauliTerm{ "IXYZ", coeff_t{ -0.25 } }, PauliTerm{ "IIII", coeff_t{ 0.001 } } };
	auto nb_removed = obs.truncate(CoefficientTruncator<coeff_t>{ 0.01 });
	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_removed, 1);
	EXPECT_EQ(nb_elems_internal, 1);
	EXPECT_EQ(obs[0], PauliTerm<coeff_t>("IXYZ", -0.25));
}

TYPED_TEST(ObservableTest, truncate_weight) {
	Observable obs{ PauliTerm{ "IXYZ", coeff_t{ -0.25 } }, PauliTerm{ "IIII", coeff_t{ 0.001 } } };
	auto nb_removed = obs.truncate(WeightTruncator<>{ 3 });
	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_removed, 1);
	EXPECT_EQ(nb_elems_internal, 1);
	EXPECT_EQ(obs[0], PauliTerm<coeff_t>("IIII", 0.001));
}

TYPED_TEST(ObservableTest, truncate_multi) {
	Observable obs{ PauliTerm{ "IXYZ", coeff_t{ -0.25 } }, PauliTerm{ "IIII", coeff_t{ 0.10 } },
			PauliTerm{ "IIXI", coeff_t{ 0.0001 } } };
	auto nb_removed = obs.truncate(combine_truncators_raw(CoefficientTruncator<>(0.01), WeightTruncator<>(3)));
	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_removed, 2);
	EXPECT_EQ(nb_elems_internal, 1);
	EXPECT_EQ(obs[0], PauliTerm<coeff_t>("IIII", 0.10));
}

TYPED_TEST(ObservableTest, truncate_never) {
	Observable obs{ PauliTerm{ "IXYZ", coeff_t{ -0.25 } }, PauliTerm{ "IIII", coeff_t{ 0.001 } } };
	auto nb_removed = obs.truncate(NeverTruncator<>{});
	auto nb_elems_internal = std::distance(obs.cbegin(), obs.cend());
	EXPECT_EQ(nb_removed, 0);
	EXPECT_EQ(nb_elems_internal, 2);
}

TYPED_TEST(ObservableTest, depolarizing_noise) {
	// no effect on I
	Observable iobs{ "IIII" };
	for (unsigned i = 0; i < iobs[0].size(); ++i) {
		iobs.apply_unital_noise(UnitalNoise::Depolarizing, i, 0.5, this->rpolicy);
	}
	EXPECT_FLOAT_EQ(iobs[0].coefficient(), 1);

	// affects everything else
	Observable obs{ "XYZ" };
	for (unsigned i = 0; i < obs[0].size(); ++i) {
		obs.apply_unital_noise(UnitalNoise::Depolarizing, i, 0.5, this->rpolicy);
	}
	EXPECT_FLOAT_EQ(obs[0].coefficient(), 1.f / (1 << obs[0].size()));
}

TYPED_TEST(ObservableTest, dephasing_noise) {
	// no effect on I or Z
	Observable iobs{ "IZZI" };
	for (unsigned i = 0; i < iobs[0].size(); ++i) {
		iobs.apply_unital_noise(UnitalNoise::Dephasing, i, 0.5, this->rpolicy);
	}
	EXPECT_FLOAT_EQ(iobs[0].coefficient(), 1);

	// affects everything else
	Observable obs{ "XYYX" };
	for (unsigned i = 0; i < obs[0].size(); ++i) {
		obs.apply_unital_noise(UnitalNoise::Dephasing, i, 0.5, this->rpolicy);
	}
	EXPECT_FLOAT_EQ(obs[0].coefficient(), 1.f / (1 << obs[0].size()));
}

TYPED_TEST(ObservableTest, amplitude_damping) {
	static constexpr coeff_t p = 0.01;
	// no effect on I
	Observable iobs{ "IIII" };
	for (unsigned i = 0; i < iobs[0].size(); ++i) {
		iobs.apply_amplitude_damping(i, p, this->rpolicy);
	}
	EXPECT_EQ(std::distance(iobs.cbegin(), iobs.cend()), 1);
	EXPECT_FLOAT_EQ(iobs[0].coefficient(), 1);

	// XY no split + sqrt(1-p) coeff
	Observable xyobs{ "XYXY" };
	auto xy_ph = xyobs[0].phash();
	for (unsigned i = 0; i < xyobs[0].size(); ++i) {
		xyobs.apply_amplitude_damping(i, p, this->rpolicy);
	}
	EXPECT_EQ(std::distance(xyobs.cbegin(), xyobs.cend()), 1);
	EXPECT_FLOAT_EQ(xyobs[0].coefficient(), std::pow(std::sqrt(1 - p), xyobs[0].size()));
	EXPECT_EQ(xyobs[0].phash(), xy_ph);

	// Z => split + (1-p) coefficient
	Observable zobs{ "ZZZZ" };
	auto z_ph = zobs[0].phash();
	for (unsigned i = 0; i < zobs[0].size(); ++i) {
		zobs.apply_amplitude_damping(i, p, this->rpolicy);
	}
	auto zpt = std::find_if(zobs.cbegin(), zobs.cend(), [=](auto const& pt) { return pt.phash() == z_ph; });
	ASSERT_TRUE(zpt != zobs.cend());
	EXPECT_EQ(std::distance(zobs.cbegin(), zobs.cend()), std::pow(2, zobs[0].size()));
	EXPECT_FLOAT_EQ((*zpt).coefficient(), std::pow(1 - p, zobs[0].size()));
}

TYPED_TEST(ObservableTest, bad_init_throw) {
	EXPECT_THROW({ Observable obs(""); }, std::invalid_argument);
	EXPECT_THROW({ Observable obs{ std::initializer_list<std::string_view>{} }; }, std::invalid_argument);
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

TYPED_TEST(ObservableTest, bad_gate_target_throw) {
	Observable obs{ "II" };
	EXPECT_THROW({ obs.apply_unital_noise(UnitalNoise::Dephasing, 2, 0.1f, this->rpolicy); }, std::invalid_argument);
	EXPECT_THROW({ obs.apply_amplitude_damping(2, 0.1f, this->rpolicy); }, std::invalid_argument);
	EXPECT_THROW({ obs.apply_rz(2, 0.1f, this->rpolicy); }, std::invalid_argument);
	EXPECT_THROW({ obs.apply_cx(0, 2, this->rpolicy); }, std::invalid_argument);
	EXPECT_THROW({ obs.apply_clifford(Clifford_Gates_1Q::H, 2, this->rpolicy); }, std::invalid_argument);
	EXPECT_THROW({ obs.apply_pauli(Pauli_gates::X, 2, this->rpolicy); }, std::invalid_argument);
	EXPECT_THROW({ obs.apply_cx(2, 0, this->rpolicy); }, std::invalid_argument);
	EXPECT_THROW({ obs.apply_cx(1, 1, this->rpolicy); }, std::invalid_argument);
}
