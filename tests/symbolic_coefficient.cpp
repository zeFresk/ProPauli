#include "gtest/gtest.h"

#include <cmath>
#include <string>
#include <symbolic/coefficient.hpp>

using Sc = SymbolicCoefficient<float>;

TEST(SymbolicCoefficient, init) { Sc x{ 1.f }; }

TEST(SymbolicCoefficient, const_str) {
	Sc x{ 1.f };
	EXPECT_EQ(x.to_string(), "1");
}

TEST(SymbolicCoefficient, const_eval) {
	Sc x{ 1.f };
	EXPECT_FLOAT_EQ(x.evaluate(), 1);
}

TEST(SymbolicCoefficient, var_str) {
	Sc x{ Variable{ "x" } };
	EXPECT_EQ(x.to_string(), "x");
}

TEST(SymbolicCoefficient, var_eval) {
	Sc x{ Variable{ "x" } };
	EXPECT_FLOAT_EQ(x.evaluate({ { { "x", 1.f } } }), 1);
}

TEST(SymbolicCoefficient, unary_sin_str) {
	Sc x{ 0.f };
	x = sin(x);
	EXPECT_EQ(x.to_string(), "sin(0)");
}

TEST(SymbolicCoefficient, unary_sin_eval) {
	Sc x{ 0.f };
	x = sin(x);
	EXPECT_FLOAT_EQ(x.evaluate(), 0);
}

TEST(SymbolicCoefficient, unary_cos_str) {
	Sc x{ 0.f };
	x = cos(x);
	EXPECT_EQ(x.to_string(), "cos(0)");
}

TEST(SymbolicCoefficient, unary_cos_eval) {
	Sc x{ 0.f };
	x = cos(x);
	EXPECT_FLOAT_EQ(x.evaluate(), 1);
}

TEST(SymbolicCoefficient, unary_min_str) {
	Sc x{ 1.f };
	x = -x;
	EXPECT_EQ(x.to_string(), "-1");
}

TEST(SymbolicCoefficient, unary_min_eval) {
	Sc x{ 1.f };
	x = -x;
	EXPECT_FLOAT_EQ(x.evaluate(), -1);
}

TEST(SymbolicCoefficient, unary_sqrt_str) {
	Sc x{ 1.f };
	x = sqrt(x);
	EXPECT_EQ(x.to_string(), "sqrt(1)");
}

TEST(SymbolicCoefficient, unary_sqrt_eval) {
	Sc x{ 1.f };
	x = sqrt(x);
	EXPECT_FLOAT_EQ(x.evaluate(), 1);
}


TEST(SymbolicCoefficient, binary_mul_eval_cst) {
	Sc x{ 2.f };
	x = x * 3.f;
	EXPECT_FLOAT_EQ(x.evaluate(), 2.f * 3.f);
}

TEST(SymbolicCoefficient, binary_mul_str_cst) {
	Sc x{ 2.f };
	x = x * 3.f;
	EXPECT_EQ(x.to_string(), "2 * 3");
}

TEST(SymbolicCoefficient, binary_mul_eval_term) {
	Sc x{ 2.f };
	Sc y{ 3.f };
	x = x * y;
	EXPECT_FLOAT_EQ(x.evaluate(), 2.f * 3.f);
}

TEST(SymbolicCoefficient, binary_mul_str_term) {
	Sc x{ 2.f };
	Sc y{ 3.f };
	x = x * y;
	EXPECT_EQ(x.to_string(), "2 * 3");
}

TEST(SymbolicCoefficient, binary_add_eval_cst) {
	Sc x{ 2.f };
	x = x + 3.f;
	EXPECT_FLOAT_EQ(x.evaluate(), 2.f + 3.f);
}

TEST(SymbolicCoefficient, binary_add_str_cst) {
	Sc x{ 2.f };
	x = x + 3.f;
	EXPECT_EQ(x.to_string(), "2 + 3");
}

TEST(SymbolicCoefficient, binary_div_eval_cst) {
	Sc x{ 2.f };
	x = x / 3.f;
	EXPECT_FLOAT_EQ(x.evaluate(), 2.f / 3.f);
}

TEST(SymbolicCoefficient, binary_div_str_cst) {
	Sc x{ 2.f };
	x = x / 3.f;
	EXPECT_EQ(x.to_string(), "2 / 3");
}

TEST(SymbolicCoefficient, binary_min_eval_cst) {
	Sc x{ 2.f };
	x = x - 3.f;
	EXPECT_FLOAT_EQ(x.evaluate(), 2.f - 3.f);
}

TEST(SymbolicCoefficient, binary_min_str_cst) {
	Sc x{ 2.f };
	x = x - 3.f;
	EXPECT_EQ(x.to_string(), "2 - 3");
}

TEST(SymbolicCoefficient, long_exp_str) {
	Sc lhs = 3.f;
	lhs = lhs * 2;
	lhs = lhs + 3;

	Sc rhs = -3;
	rhs = rhs * 2;
	rhs = rhs - 3;

	Sc res = lhs + rhs;
	EXPECT_EQ(lhs.to_string(), "(3 * 2) + 3");
	EXPECT_EQ(rhs.to_string(), "(-3 * 2) - 3");
	EXPECT_EQ(res.to_string(), "((3 * 2) + 3) + ((-3 * 2) - 3)");
}

TEST(SymbolicCoefficient, long_exp_eval) {
	Sc lhs = 3.f;
	lhs = lhs * 2;
	lhs = lhs + 3;

	Sc rhs = -3;
	rhs = rhs * 2;
	rhs = rhs - 3;

	Sc res = lhs + rhs;
	EXPECT_EQ(lhs.to_string(), "(3 * 2) + 3");
	EXPECT_EQ(rhs.to_string(), "(-3 * 2) - 3");
	EXPECT_EQ(res.to_string(), "((3 * 2) + 3) + ((-3 * 2) - 3)");
}

TEST(SymbolicCoefficient, symbolic_eval) {
	Sc x = Variable{ "x" };
	Sc y = Variable{ "y" };

	auto exp = x + y;
	exp = 2 * cos(exp);

	EXPECT_EQ(exp.to_string(), "cos(x + y) * 2");

	auto pexp = exp.symbolic_evaluate({ { { "x", 1 } } });
	EXPECT_EQ(pexp.to_string(), "2 * cos(1 + y)");
	EXPECT_EQ(pexp.evaluate({ { { "y", -1 } } }), exp.evaluate({ { { "x", 1 }, { "y", -1 } } }));
}

TEST(SymbolicCoefficient, eval_throw_if_unbound) {
	Sc x = Variable{ "x" };
	EXPECT_THROW(x.evaluate(), std::invalid_argument);
}

TEST(SymbolicCoefficient, simplify_constants) {
	Sc x = 4.f;
	x = 3 * x;
	x = 2 * x;
	x = x + 3;
	x = x - 2;
	EXPECT_EQ(x.to_string(), "(((4 * 3) * 2) + 3) - 2");
	auto sx = x.simplified();
	EXPECT_EQ(sx.to_string(), "25");
	EXPECT_FLOAT_EQ(sx.evaluate(), 25);
}

TEST(SymbolicCoefficient, simplify_minus_minus) {
	Sc x = Variable{ "x" };
	x = -x;
	x = -x;
	EXPECT_EQ(x.to_string(), "-(-x)");
	auto sx = x.simplified();
	EXPECT_EQ(sx.to_string(), "x");
}

TEST(SymbolicCoefficient, simplify_identities_plusmult) {
	Sc x = Variable{ "x" };
	x = 1 * x;
	x = x + 0;
	//EXPECT_EQ(x.to_string(), "(1 * x) + 0");
	auto sx = x.simplified();
	EXPECT_EQ(sx.to_string(), "x");
}

TEST(SymbolicCoefficient, simplify_identities_minusdiv) {
	Sc x = Variable{ "x" };
	x = x - (0 / Sc{ Variable{ "y" } });
	EXPECT_EQ(x.to_string(), "x - (0 / y)");
	auto sx = x.simplified();
	EXPECT_EQ(sx.to_string(), "x");
}

TEST(SymbolicCoefficient, simplify_associativity_basic) {
	Sc x = Variable{ "x" };
	x = 2 * x;
	x = 3 * x;
	EXPECT_EQ(x.to_string(), "(x * 2) * 3");
	auto sx = x.simplified();
	EXPECT_EQ(sx.to_string(), "6 * x");
}

TEST(SymbolicCoefficient, simplify_associativity_hard) {
	Sc x = Variable{ "x" };
	x = x * 2;
	x = 3 * x;
	x = x * 2;
	EXPECT_EQ(x.to_string(), "((x * 2) * 3) * 2");
	auto sx = x.simplified();
	EXPECT_EQ(sx.to_string(), "12 * x");
}

TEST(SymbolicCoefficient, simplify_edge_case) {
	Sc pi = 3.14159f;
	pi  = pi / 2.f;
	pi = -pi;
	pi = cos(pi);
	auto smp = pi.simplified();
	auto converted = std::stof(smp.to_string());
	EXPECT_NEAR(converted, 0.f, 1e-4f);
}

TEST(SymbolicCoefficient, simplify_edge_case2) {
	Sc pi = 3.14159f / 2.f;
	pi = -pi;
	pi = cos(pi);
	auto smp = pi.simplified();
	auto converted = std::stof(smp.to_string());
	EXPECT_NEAR(converted, 0.f, 1e-4f);
}
