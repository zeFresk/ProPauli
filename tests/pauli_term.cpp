
#include "gtest/gtest.h"

#include <algorithm>
#include <cmath>
#include <cstdlib>
#include <sstream>
#include <string_view>
#include <utility>
#include <random>

#include "pauli.hpp"
#include "pauli_term.hpp"

static constexpr auto seed = 42;

std::string random_pauli_string(unsigned length) {
	static constexpr std::string_view chars = "IXYZ";
	static std::mt19937 gen{ seed };
	std::uniform_int_distribution<> dis(0, chars.size() - 1);

	std::string ret;
	ret.reserve(length);
	for (unsigned i = 0; i < length; ++i) {
		ret += chars[dis(gen)];
	}
	return ret;
}

unsigned rand_in(unsigned max) {
	std::uniform_int_distribution<> dis(0, max);
	static std::mt19937 gen{ seed + 1 };
	return dis(gen);
}

TEST(PauliTerm, construct_from_string) {
	using enum Pauli_enum;
	PauliTerm pt{ "IXYZ", 0.5 };
	PauliTerm check_against{ { I, X, Y, Z }, 0.5 };
	EXPECT_EQ(pt, check_against);
}

TEST(PauliTerm, construct_from_paulis) {
	using enum Pauli_enum;
	PauliTerm pt{ { Z, Y, X, I }, 0.5 };
}

TEST(PauliTerm, construct_from_multiply) {
	using enum Pauli_enum;
	Pauli p{ I };
	PauliTerm pt1 = -1 * p;
	PauliTerm pt2 = p * -1;
	auto pt3 = 1 * I;
}

TEST(PauliTerm, equality) {
	using enum Pauli_enum;
	for (Pauli const p : { I, X, Y, Z }) {
		coeff_t c = 1;
		auto lhs = c * p;
		auto rhs = PauliTerm(p, c);
		EXPECT_EQ(lhs, rhs);
	}
}

TEST(PauliTerm, inequality) {
	std::array<PauliTerm<coeff_t>, 6> pt_list{
		{ { "II", 1 }, { "I", 1 }, { "X", 1 }, { "Y", 1 }, { "XX", -1 }, { "XX", 1 } }
	};
	for (std::size_t i = 0; i < pt_list.size(); ++i) {
		for (std::size_t j = 0; j < pt_list.size(); ++j) {
			if (i == j)
				continue;
			EXPECT_NE(pt_list[i], pt_list[j]);
		}
	}
}

TEST(PauliTerm, apply_pauli_single) {
	using enum Pauli_enum;
	std::array<std::tuple<Pauli, Pauli_enum, coeff_t>, 16> truth_table = { {
		{ I, I, 1 },
		{ I, X, 1 },
		{ I, Y, 1 },
		{ I, Z, 1 }, // I
		{ X, I, 1 },
		{ X, X, 1 },
		{ X, Y, -1 },
		{ X, Z, -1 }, // X
		{ Y, I, 1 },
		{ Y, X, -1 },
		{ Y, Y, 1 },
		{ Y, Z, -1 }, // Y
		{ Z, I, 1 },
		{ Z, X, -1 },
		{ Z, Y, -1 },
		{ Z, Z, 1 } // Z
	} };
	for (auto const [p, gate, out_coeff] : truth_table) {
		auto pt = 1 * p;
		auto g = static_cast<Pauli_gates>(std::to_underlying(gate));
		pt.apply_pauli(g, 0);
		auto expected_pt = out_coeff * p;
		EXPECT_EQ(pt, expected_pt);
	}
}

TEST(PauliTerm, apply_clifford_single) {
	using enum Pauli_enum;
	using Clifford_Gates_1Q::H;
	std::array<std::tuple<Pauli, Clifford_Gates_1Q, Pauli, coeff_t>, 4> truth_table = {
		{ { I, H, I, 1 }, { X, H, Z, 1 }, { Y, H, Y, -1 }, { Z, H, X, 1 } }
	};
	for (auto const [p, gate, out_p, out_coeff] : truth_table) {
		auto pt_out = 1 * p;
		pt_out.apply_clifford(gate, 0);
		auto expected_pt = out_coeff * out_p;
		EXPECT_EQ(pt_out, expected_pt);
	}
}

TEST(PauliTerm, apply_cx_single) {
	// https://arxiv.org/pdf/2505.21606

	using enum Pauli_enum;
	std::array<std::tuple<PauliTerm<coeff_t>, PauliTerm<coeff_t>>, 16> truth_table = { {
		{ { "II", 1 }, { "II", 1 } },
		{ { "IX", 1 }, { "IX", 1 } },
		{ { "IY", 1 }, { "ZY", 1 } },
		{ { "IZ", 1 }, { "ZZ", 1 } }, // I
		{ { "XI", 1 }, { "XX", 1 } },
		{ { "XX", 1 }, { "XI", 1 } },
		{ { "XY", 1 }, { "YZ", 1 } },
		{ { "XZ", 1 }, { "YY", -1 } }, // X
		{ { "YI", 1 }, { "YX", 1 } },
		{ { "YX", 1 }, { "YI", 1 } },
		{ { "YY", 1 }, { "XZ", -1 } },
		{ { "YZ", 1 }, { "XY", 1 } }, // Y
		{ { "ZI", 1 }, { "ZI", 1 } },
		{ { "ZX", 1 }, { "ZX", 1 } },
		{ { "ZY", 1 }, { "IY", 1 } },
		{ { "ZZ", 1 }, { "IZ", 1 } } // Z
	} };
	for (auto const [pt_in, expected_pt] : truth_table) {
		auto pt = pt_in;
		pt.apply_cx(0, 1);
		EXPECT_EQ(pt, expected_pt);

		auto pt_reversed = -1 * pt_in;
		auto expected_reversed = -1 * expected_pt;
		pt_reversed.apply_cx(0, 1);
		EXPECT_EQ(pt_reversed, expected_reversed);
	}
}

TEST(PauliTerm, apply_rz_single) {
	using enum Pauli_enum;
	using PT = PauliTerm<coeff_t>;
	using std::numbers::pi;
	std::array<std::tuple<PT, std::pair<PT, PT>>, 2> truth_table = { { { 1 * X, { 1 * X, -1 * Y } },
									   { 1 * Y, { 1 * Y, 1 * X } } } };
	std::array<coeff_t, 10> radians = { { 0, -0, pi, -pi, pi / 2.f, -pi / 2.f, pi / 4.f, -pi / 4.f, pi / 8.f,
					      -pi / 8.f } };
	for (auto theta : radians) {
		auto cos_theta = std::cos(theta);
		auto sin_theta = std::sin(theta);

		for (auto const [pt_in, pts_out] : truth_table) {
			auto pt_out_cos = cos_theta * pts_out.first;
			auto pt_out_sin = sin_theta * pts_out.second;
			auto pt = pt_in;
			auto new_branch = pt.apply_rz(0, theta);
			EXPECT_EQ(pt, pt_out_cos);
			EXPECT_EQ(new_branch, pt_out_sin);
		}
	}
}

TEST(PauliTerm, apply_pauli_multiple) {
	using enum Pauli_enum;
	using PT = PauliTerm<coeff_t>;
	std::array<std::tuple<PT, Pauli_enum, unsigned, PT>, 16> truth_table = { {
		{ { "IXIZZY", 1 }, I, 2, { "IXIZZY", 1 } },
		{ { "IXIZZY", 1 }, X, 2, { "IXIZZY", 1 } },
		{ { "IXIZZY", 1 }, Y, 0, { "IXIZZY", 1 } },
		{ { "IXIZZY", 1 }, Z, 0, { "IXIZZY", 1 } }, // I
		{ { "XZIYIIIX", 1 }, I, 7, { "XZIYIIIX", 1 } },
		{ { "XZIYIIIX", 1 }, X, 7, { "XZIYIIIX", 1 } },
		{ { "XZIYIIIX", 1 }, Y, 0, { "XZIYIIIX", -1 } },
		{ { "XZIYIIIX", 1 }, Z, 0, { "XZIYIIIX", -1 } }, // X
		{ { "IIZYXZYIIIYZ", 1 }, I, 3, { "IIZYXZYIIIYZ", 1 } },
		{ { "IIZYXZYIIIYZ", 1 }, X, 6, { "IIZYXZYIIIYZ", -1 } },
		{ { "IIZYXZYIIIYZ", 1 }, Y, 10, { "IIZYXZYIIIYZ", 1 } },
		{ { "IIZYXZYIIIYZ", 1 }, Z, 10, { "IIZYXZYIIIYZ", -1 } }, // Y
		{ { "ZZIIXXYZIYZZIIII", 1 }, I, 0, { "ZZIIXXYZIYZZIIII", 1 } },
		{ { "ZZIIXXYZIYZZIIII", 1 }, X, 1, { "ZZIIXXYZIYZZIIII", -1 } },
		{ { "ZZIIXXYZIYZZIIII", 1 }, Y, 7, { "ZZIIXXYZIYZZIIII", -1 } },
		{ { "ZZIIXXYZIYZZIIII", 1 }, Z, 8, { "ZZIIXXYZIYZZIIII", 1 } }, // Z
	} };
	for (auto const [pt_in, gate, qubit, expected_pt] : truth_table) {
		auto pt = pt_in;
		auto g = static_cast<Pauli_gates>(std::to_underlying(gate));
		pt.apply_pauli(g, qubit);
		EXPECT_EQ(pt, expected_pt);
	}
}

TEST(PauliTerm, apply_clifford_multiple) {
	using enum Pauli_enum;
	using Clifford_Gates_1Q::H;
	using PT = PauliTerm<coeff_t>;
	std::array<std::tuple<PT, Clifford_Gates_1Q, unsigned, PT>, 4> truth_table = { {
		{ { "ZZIIXXYZIYZZIIII", 1 }, H, 2, { "ZZIIXXYZIYZZIIII", 1 } },
		{ { "ZZIIXXYZIYZZIIII", 1 }, H, 4, { "ZZIIZXYZIYZZIIII", 1 } },
		{ { "ZZIIXXYZIYZZIIII", 1 }, H, 6, { "ZZIIXXYZIYZZIIII", -1 } },
		{ { "ZZIIXXYZIYZZIIII", 1 }, H, 0, { "XZIIXXYZIYZZIIII", 1 } }, // Z
	} };
	for (auto const [pt_in, gate, qubit, expected_pt] : truth_table) {
		auto pt = pt_in;
		pt.apply_clifford(gate, qubit);
		EXPECT_EQ(pt, expected_pt);
	}
}

TEST(PauliTerm, apply_cx_multiple) {
	// https://arxiv.org/pdf/2505.21606

	using enum Pauli_enum;
	std::array<std::tuple<std::string_view, std::string_view, coeff_t>, 16> truth_table = { {
		{ "II", "II", 1 },
		{ "IX", "IX", 1 },
		{ "IY", "ZY", 1 },
		{ "IZ", "ZZ", 1 }, // I
		{ "XI", "XX", 1 },
		{ "XX", "XI", 1 },
		{ "XY", "YZ", 1 },
		{ "XZ", "YY", -1 }, // X
		{ "YI", "YX", 1 },
		{ "YX", "YI", 1 },
		{ "YY", "XZ", -1 },
		{ "YZ", "XY", 1 }, // Y
		{ "ZI", "ZI", 1 },
		{ "ZX", "ZX", 1 },
		{ "ZY", "IY", 1 },
		{ "ZZ", "IZ", 1 } // Z
	} };
	for (auto const [bs_in, expected_bs, expected_coeff] : truth_table) {
		auto rd_bs = random_pauli_string(16);
		auto expected_rd_bs = rd_bs;
		auto ctrl = rand_in(rd_bs.size() - 1);
		auto target = rand_in(rd_bs.size() - 1);
		while (target == ctrl)
			target = rand_in(rd_bs.size() - 1);
		rd_bs[ctrl] = bs_in[0];
		rd_bs[target] = bs_in[1];
		expected_rd_bs[ctrl] = expected_bs[0];
		expected_rd_bs[target] = expected_bs[1];
		auto pt = PauliTerm<coeff_t>{ rd_bs, 1 };
		auto expected_pt = PauliTerm<coeff_t>{ expected_rd_bs, expected_coeff };

		pt.apply_cx(ctrl, target);
		EXPECT_EQ(pt, expected_pt);
	}
}

TEST(PauliTerm, apply_rz_multiple) {
	using enum Pauli_enum;
	using std::numbers::pi;
	std::array<std::tuple<std::string_view, coeff_t, std::string_view, coeff_t, std::string_view>, 2> truth_table = {
		{ { "X", 1, "X", -1, "Y" }, { "Y", 1, "Y", 1, "X" } }
	};
	std::array<coeff_t, 10> radians = { { 0, -0, pi, -pi, pi / 2.f, -pi / 2.f, pi / 4.f, -pi / 4.f, pi / 8.f,
					      -pi / 8.f } };
	for (auto theta : radians) {
		auto cos_theta = std::cos(theta);
		auto sin_theta = std::sin(theta);

		for (auto const [p_in, c_cos, p_cos, c_sin, p_sin] : truth_table) {
			auto rd_bs = random_pauli_string(16);
			auto expected_cos_bs = rd_bs;
			auto expected_sin_bs = rd_bs;
			auto q = rand_in(rd_bs.size() - 1);
			rd_bs[q] = p_in[0];
			expected_cos_bs[q] = p_cos[0];
			expected_sin_bs[q] = p_sin[0];
			auto pt = PauliTerm<coeff_t>{ rd_bs, 1 };
			auto expected_cos = PauliTerm<coeff_t>{ expected_cos_bs, c_cos };
			auto expected_sin = PauliTerm<coeff_t>{ expected_sin_bs, c_sin };

			auto pt_out_cos = cos_theta * expected_cos;
			auto pt_out_sin = sin_theta * expected_sin;
			auto new_branch = pt.apply_rz(q, theta);
			EXPECT_EQ(pt, pt_out_cos);
			EXPECT_EQ(new_branch, pt_out_sin);
		}
	}
}

TEST(PauliTerm, expectation_value) {
	using PT = PauliTerm<coeff_t>;
	std::array<std::tuple<PT, coeff_t>, 6> truth_table = { {
		{ { "ZI", 1 }, 1 },
		{ { "IZ", -0.25 }, -0.25 },
		{ { "ZZZZZZZZZZZZZZZZZZX", 0.5 }, 0 },
		{ { "IIIIIIIIIIIIY", 1 }, 0 },
		{ { "X", 1 }, 0 },
		{ { "Y", 1 }, 0 },
	} };
	for (auto const [pt, expected] : truth_table) {
		EXPECT_EQ(pt.expectation_value(), expected);
	}
}

TEST(PauliTerm, serialize) {
	std::array<std::tuple<std::string_view, PauliTerm<coeff_t>>, 3> truth_table{
		{ { "-1 X", { "X", -1 } }, { "+0.25 IY", { "IY", 0.25 } }, { "-0.125 IXYZ", { "IXYZ", -0.125 } } }
	};

	for (auto const [expected_str, pt] : truth_table) {
		std::stringstream ss;
		ss << pt;
		EXPECT_EQ(ss.str(), expected_str);
	}
}

TEST(PauliTerm, phash_simple) {
	using PT = PauliTerm<coeff_t>;
	PT pt1("IIIIXYZ"), pt2("IIIIYXZ");
	EXPECT_EQ(pt1.phash(), pt1.phash());
	EXPECT_NE(pt1.phash(), pt2.phash());

	auto pt3 = pt1;
	EXPECT_EQ(pt1.phash(), pt3.phash());
	EXPECT_NE(pt2.phash(), pt3.phash());
}

TEST(PauliTerm, phash_nocollision_q1024n1024) {
	static constexpr std::size_t nb_tests = 1024;
	auto lhs = PauliTerm<coeff_t>(random_pauli_string(1024));

	for (std::size_t i = 0; i < nb_tests; ++i) {
		auto rhs = PauliTerm<coeff_t>(random_pauli_string(1024));
		if (lhs != rhs) {
			EXPECT_NE(lhs.phash(), rhs.phash());
		}
	}
}

TEST(PauliTerm, pauli_weight) {
	std::array<std::string_view, 8> truth_table{
		"I", "IIIIIIIIIII", "XXXYZZZZXXX", "IXYZIXYZ", "X", "Y", "Z", "ZZ"
	};
	for (auto ps : truth_table) {
		PauliTerm<coeff_t> pt(ps);
		auto nb_i = std::count_if(ps.cbegin(), ps.cend(), [](auto c) { return c != 'I'; });
		EXPECT_EQ(pt.pauli_weight(), nb_i);
	}
}

TEST(PauliTerm, depolarizing_noise) {
	using enum UnitalNoise;
	PauliTerm pt("IXYZXYZ");
	auto ph = pt.phash();
	constexpr coeff_t p = 0.01;

	// no effect on I
	pt.apply_unital_noise(Depolarizing, 0, p);
	EXPECT_EQ(pt.phash(), ph);
	EXPECT_FLOAT_EQ(pt.coefficient(), 1.);

	// effect compounds on all other
	for (unsigned i = 1; i < pt.size(); ++i) {
		pt.apply_unital_noise(Depolarizing, i, p);
		EXPECT_EQ(pt.phash(), ph);
		EXPECT_FLOAT_EQ(pt.coefficient(), std::pow(1 - p, i));
	}
}

TEST(PauliTerm, dephasing_noise) {
	using enum UnitalNoise;
	PauliTerm pt("IZXYXYXY");
	auto ph = pt.phash();
	constexpr coeff_t p = 0.01;

	// no effect on I
	pt.apply_unital_noise(Dephasing, 0, p);
	EXPECT_EQ(pt.phash(), ph);
	EXPECT_FLOAT_EQ(pt.coefficient(), 1.);

	// no effect on Z
	pt.apply_unital_noise(Dephasing, 1, p);
	EXPECT_EQ(pt.phash(), ph);
	EXPECT_FLOAT_EQ(pt.coefficient(), 1.);

	// effect compounds on all other
	for (unsigned i = 2; i < pt.size(); ++i) {
		pt.apply_unital_noise(Dephasing, i, p);
		EXPECT_EQ(pt.phash(), ph);
		EXPECT_FLOAT_EQ(pt.coefficient(), std::pow(1 - p, i - 1));
	}
}

TEST(PauliTerm, aplitude_damping_xy) {
	PauliTerm pt("XYXY");
	auto og_ph = pt.phash();
	static constexpr float p = 0.01;

	for (unsigned i = 0; i < pt.size(); ++i) {
		pt.apply_amplitude_damping_xy(i, p);
		EXPECT_FLOAT_EQ(pt.coefficient(), std::pow(std::sqrt(1-p), i+1));
		EXPECT_EQ(pt.phash(), og_ph);
	}
}

TEST(PauliTerm, aplitude_damping_z) {
	PauliTerm og_pt("ZZZZ");
	auto og_ph = og_pt.phash();
	static constexpr float p = 0.01;

	for (unsigned i = 0; i < og_pt.size(); ++i) {
		auto pt = og_pt;
		auto np = pt.apply_amplitude_damping_z(i, p);
		auto nc = np.coefficient();
		EXPECT_FLOAT_EQ(nc, p);
		EXPECT_FLOAT_EQ(pt.coefficient(), 1-p);
		EXPECT_EQ(pt.phash(), og_ph);
		EXPECT_EQ(np.pauli_weight(), og_pt.pauli_weight()-1);
	}
}
