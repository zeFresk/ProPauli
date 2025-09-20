#include "gtest/gtest.h"
#include "pauli.hpp"
#include "symbolic/coefficient.hpp" // Includes all necessary headers
#include <symbolic/expression_tree.hpp>
#include <cmath> // For std::isinf, std::isnan
#include <limits> // For infinity()

// A test fixture to provide common symbolic variables for our tests
class CompiledExpressionTest : public ::testing::Test {
    protected:
	using Symbolic = SymbolicCoefficient<coeff_t>;

	Symbolic a{ "a" }, b{ "b" }, c{ "c" }, d{ "d" };
	Symbolic x{ "x" }, y{ "y" }, z{ "z" };

	// Helper function to encapsulate the core test logic:
	// Compare the result of symbolic evaluation vs. compiled evaluation.
	void VerifyCompilation(const Symbolic& expr, const std::unordered_map<std::string, coeff_t>& vars, coeff_t tolerance = 1e-9) {
		auto tree = expr.get_expression_tree(); // simplified() is not called to test the compiler on raw trees

		// 1. Get the "ground truth" result from the uncompiled tree
		coeff_t expected = tree.evaluate(vars);

		// 2. Compile and evaluate the new class
		CompiledExpression<coeff_t> compiled_expr(tree);
		coeff_t actual = compiled_expr.evaluate(vars);

		// 3. Compare the results
		EXPECT_NEAR(expected, actual, tolerance);
	}
};

// --- I. Functional Tests ---

TEST_F(CompiledExpressionTest, BasicAddition) { VerifyCompilation(x + y, { { "x", 2.5 }, { "y", -1.0 } }); }

TEST_F(CompiledExpressionTest, BasicSubtraction) { VerifyCompilation(x - y, { { "x", 2.5 }, { "y", -1.0 } }); }

TEST_F(CompiledExpressionTest, BasicMultiplication) { VerifyCompilation(x * y, { { "x", 2.5 }, { "y", -1.0 } }); }

TEST_F(CompiledExpressionTest, BasicDivision) { VerifyCompilation(x / y, { { "x", 2.5 }, { "y", -1.0 } }); }

TEST_F(CompiledExpressionTest, UnaryNegation) { VerifyCompilation(-x, { { "x", 123.45 } }); }

TEST_F(CompiledExpressionTest, UnaryFunctions) {
	VerifyCompilation(sin(x) + cos(y) - sqrt(z), { { "x", 0.5 }, { "y", -0.25 }, { "z", 16.0 } });
}

TEST_F(CompiledExpressionTest, OperatorPrecedence) {
	VerifyCompilation(a + b * c, { { "a", 2 }, { "b", 3 }, { "c", 4 } }); // Should be 2 + 12 = 14
}

TEST_F(CompiledExpressionTest, ParenthesesOverridePrecedence) {
	VerifyCompilation((a + b) * c, { { "a", 2 }, { "b", 3 }, { "c", 4 } }); // Should be 5 * 4 = 20
}

TEST_F(CompiledExpressionTest, ComplexMixedExpression) {
	VerifyCompilation(a * b + c / d - sin(x), { { "a", 2 }, { "b", 3 }, { "c", 8 }, { "d", 4 }, { "x", 0 } });
}

TEST_F(CompiledExpressionTest, NaryAddition) {
	VerifyCompilation(a + b + c + d + x, { { "a", 1 }, { "b", 2 }, { "c", 3 }, { "d", 4 }, { "x", 5 } });
}

TEST_F(CompiledExpressionTest, NaryMultiplication) {
	VerifyCompilation(a * b * c * d * x, { { "a", 1 }, { "b", 2 }, { "c", 3 }, { "d", 4 }, { "x", 5 } });
}

// --- II. Tests for Compiler Optimizations ---

TEST_F(CompiledExpressionTest, ConstantDeduplication) {
	// 3.14 appears three times in the tree
	VerifyCompilation((x * 3.14) + (y * 3.14) - 3.14, { { "x", 10 }, { "y", 20 } });
}

TEST_F(CompiledExpressionTest, VariableDeduplication) {
	// x appears three times in the tree
	VerifyCompilation((x * x) / sin(x) + x, { { "x", 0.8 } });
}

TEST_F(CompiledExpressionTest, CommonSubexpressionElimination) {
	// The sub-tree (a * b + c) appears twice and should only be computed once.
	auto sub_expr = a * b + c;
	VerifyCompilation(sin(sub_expr) / sub_expr, { { "a", 2 }, { "b", 3 }, { "c", 4 } });
}

TEST_F(CompiledExpressionTest, ComplexRealisticExpression) {
	// Tests nested functions and CSE on (y/z)
	auto expr = sqrt(cos(x) * cos(x) + sin(x) * sin(x)) + (y / z) * (y / z);
	VerifyCompilation(expr, { { "x", 0.7 }, { "y", 10.0 }, { "z", 2.0 } });
}

// --- III. Edge Case Tests ---

TEST_F(CompiledExpressionTest, EmptyExpression) {
	ExpressionTree<coeff_t> empty_tree;
	CompiledExpression<coeff_t> compiled_expr(empty_tree);
	EXPECT_EQ(compiled_expr.evaluate({}), 0.0);
}

TEST_F(CompiledExpressionTest, SingleConstant) { VerifyCompilation(Symbolic(42.0), {}); }

TEST_F(CompiledExpressionTest, SingleVariable) { VerifyCompilation(x, { { "x", 123.0 } }); }

TEST_F(CompiledExpressionTest, DeeplyNestedUnary) {
	auto expr = cos(sin(sqrt(cos(sin(x)))));
	VerifyCompilation(expr, { { "x", 0.9 } });
}

// --- IV. Numerical Edge Cases ---

TEST_F(CompiledExpressionTest, DivisionByZero) {
	auto expr = Symbolic(1.0) / x;
	auto tree = expr.get_expression_tree();
	CompiledExpression<coeff_t> compiled_expr(tree);

	coeff_t result = compiled_expr.evaluate({ { "x", 0.0 } });
	EXPECT_TRUE(std::isinf(result));
}

TEST_F(CompiledExpressionTest, SqrtOfNegative) {
	auto expr = sqrt(x);
	auto tree = expr.get_expression_tree();
	CompiledExpression<coeff_t> compiled_expr(tree);

	coeff_t result = compiled_expr.evaluate({ { "x", -1.0 } });
	EXPECT_TRUE(std::isnan(result));
}

// --- V. Input Validation Edge Cases ---

TEST_F(CompiledExpressionTest, ThrowsOnMissingVariable) {
	auto expr = x + y;
	auto tree = expr.get_expression_tree();
	CompiledExpression<coeff_t> compiled_expr(tree);

	// Expect std::invalid_argument or std::out_of_range depending on map::at vs find
	EXPECT_THROW(compiled_expr.evaluate({ { "x", 1.0 } }), std::invalid_argument);
}
