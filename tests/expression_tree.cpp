#include "gtest/gtest.h"
#include "symbolic/expression_tree.hpp"
#include <memory> // For std::make_shared

// --- Test Helpers ---
auto make_const(float val) { return std::make_shared<const ExpressionNode<float>>(Constant<float>{ val }); }
auto make_var(const std::string& name) { return std::make_shared<const ExpressionNode<float>>(Variable{ name }); }

// Helper to construct binary operations more cleanly in tests
auto make_bin_op(NodePtr<float> lhs, BinaryOp<float>::Op op, NodePtr<float> rhs) {
	return std::make_shared<const ExpressionNode<float>>(BinaryOp<float>{ op, lhs, rhs });
}

TEST(ExpressionTree, init) { ExpressionTree<float> et{}; }

// --- Basic Evaluation and Stringification Tests (Unchanged) ---

TEST(ExpressionTree, const_eval) {
	ExpressionTree<float> et(make_const(1.f));
	EXPECT_EQ(et.evaluate(), 1.f);
}

TEST(ExpressionTree, unop_eval_sin) {
	auto n = make_const(0.f);
	auto root = std::make_shared<const ExpressionNode<float>>(UnaryOp<float>{ UnaryOp<float>::Op::Sin, n });
	ExpressionTree<float> et(root);
	EXPECT_FLOAT_EQ(et.evaluate(), 0.f);
}

TEST(ExpressionTree, unop_eval_cos) {
	auto n = make_const(0.f);
	auto root = std::make_shared<const ExpressionNode<float>>(UnaryOp<float>{ UnaryOp<float>::Op::Cos, n });
	ExpressionTree<float> et(root);
	EXPECT_FLOAT_EQ(et.evaluate(), 1.f);
}

TEST(ExpressionTree, unop_eval_min) {
	auto n = make_const(1.f);
	auto root = std::make_shared<const ExpressionNode<float>>(UnaryOp<float>{ UnaryOp<float>::Op::Minus, n });
	ExpressionTree<float> et(root);
	EXPECT_EQ(et.evaluate(), -1.f);
}

TEST(ExpressionTree, unop_eval_sqrt) {
	auto n = make_const(1.f);
	auto root = std::make_shared<const ExpressionNode<float>>(UnaryOp<float>{ UnaryOp<float>::Op::Sqrt, n });
	ExpressionTree<float> et(root);
	EXPECT_EQ(et.evaluate(), 1.f);
}

TEST(ExpressionTree, binop_eval_mul) {
	auto nl = make_const(2.f);
	auto nr = make_const(3.f);
	auto root = make_bin_op(nl, BinaryOp<float>::Op::Multiply, nr);
	ExpressionTree<float> et(root);
	EXPECT_FLOAT_EQ(et.evaluate(), 6.f);
}

TEST(ExpressionTree, binop_eval_div) {
	auto nl = make_const(2.f);
	auto nr = make_const(3.f);
	auto root = make_bin_op(nl, BinaryOp<float>::Op::Divide, nr);
	ExpressionTree<float> et(root);
	EXPECT_FLOAT_EQ(et.evaluate(), 2.f / 3.f);
}

TEST(ExpressionTree, binop_eval_add) {
	auto nl = make_const(2.f);
	auto nr = make_const(3.f);
	auto root = make_bin_op(nl, BinaryOp<float>::Op::Add, nr);
	ExpressionTree<float> et(root);
	EXPECT_FLOAT_EQ(et.evaluate(), 5.f);
}

TEST(ExpressionTree, binop_eval_sub) {
	auto nl = make_const(2.f);
	auto nr = make_const(3.f);
	auto root = make_bin_op(nl, BinaryOp<float>::Op::Substract, nr);
	ExpressionTree<float> et(root);
	EXPECT_FLOAT_EQ(et.evaluate(), -1.f);
}

TEST(ExpressionTree, var_eval) {
	ExpressionTree<float> et(make_var("test_var01"));
	std::unordered_map<std::string, float> vars = { { "test_var01", -1.f } };
	EXPECT_FLOAT_EQ(et.evaluate(vars), -1.f);
}

TEST(ExpressionTree, const_str) {
	ExpressionTree<float> et(make_const(1.f));
	EXPECT_EQ(et.to_string(), "1");
}

TEST(ExpressionTree, unop_str_min) {
	auto n = make_const(1.f);
	auto root = std::make_shared<const ExpressionNode<float>>(UnaryOp<float>{ UnaryOp<float>::Op::Minus, n });
	ExpressionTree<float> et(root);
	EXPECT_EQ(et.to_string(), "-1");
}

TEST(ExpressionTree, binop_str_add) {
	auto nl = make_const(2.f);
	auto nr = make_const(3.f);
	auto root = make_bin_op(nl, BinaryOp<float>::Op::Add, nr);
	ExpressionTree<float> et(root);
	EXPECT_EQ(et.to_string(), "2 + 3");
}

// --- Advanced Simplification Tests ---

TEST(ExpressionTreeSimplify, ConstantFolding) {
	auto root = make_bin_op(make_const(2.f), BinaryOp<float>::Op::Multiply, make_const(3.f));
	ExpressionTree<float> et(root);
	EXPECT_EQ(et.simplified().to_string(), "6");
}

TEST(ExpressionTreeSimplify, Identity_Additive) {
	auto x = make_var("x");
	auto root = make_bin_op(x, BinaryOp<float>::Op::Add, make_const(0.f));
	EXPECT_EQ(ExpressionTree<float>(root).simplified().to_string(), "x");
}

TEST(ExpressionTreeSimplify, Identity_Multiplicative) {
	auto x = make_var("x");
	auto root1 = make_bin_op(x, BinaryOp<float>::Op::Multiply, make_const(1.f));
	EXPECT_EQ(ExpressionTree<float>(root1).simplified().to_string(), "x");

	auto root0 = make_bin_op(x, BinaryOp<float>::Op::Multiply, make_const(0.f));
	EXPECT_EQ(ExpressionTree<float>(root0).simplified().to_string(), "0");
}

TEST(ExpressionTreeSimplify, Identity_Division) {
	auto x = make_var("x");
	auto root1 = make_bin_op(x, BinaryOp<float>::Op::Divide, make_const(1.f));
	EXPECT_EQ(ExpressionTree<float>(root1).simplified().to_string(), "x");

	auto root_self = make_bin_op(x, BinaryOp<float>::Op::Divide, x);
	EXPECT_EQ(ExpressionTree<float>(root_self).simplified().to_string(), "1");
}

TEST(ExpressionTreeSimplify, Identity_Unary) {
	auto x = make_var("x");
	auto neg_x = std::make_shared<const ExpressionNode<float>>(UnaryOp<float>{ UnaryOp<float>::Op::Minus, x });
	auto neg_neg_x =
		std::make_shared<const ExpressionNode<float>>(UnaryOp<float>{ UnaryOp<float>::Op::Minus, neg_x });
	EXPECT_EQ(ExpressionTree<float>(neg_neg_x).simplified().to_string(), "x");
}

TEST(ExpressionTreeSimplify, Canonical_Subtraction) {
	auto x = make_var("x");
	auto y = make_var("y");
	auto root = make_bin_op(x, BinaryOp<float>::Op::Substract, y);
	EXPECT_EQ(ExpressionTree<float>(root).simplified().to_string(), "x - y");
}

TEST(ExpressionTreeSimplify, Canonical_DeepFlattening) {
	auto a = make_var("a");
	auto b = make_var("b");
	auto c = make_var("c");
	auto d = make_var("d");
	// Build a deeply nested tree: (a + (b + c)) + d
	auto b_plus_c = make_bin_op(b, BinaryOp<float>::Op::Add, c);
	auto a_plus_bc = make_bin_op(a, BinaryOp<float>::Op::Add, b_plus_c);
	auto root = make_bin_op(a_plus_bc, BinaryOp<float>::Op::Add, d);
	// Simplification should flatten and sort it.
	EXPECT_EQ(ExpressionTree<float>(root).simplified().to_string(), "a + b + c + d");
}

TEST(ExpressionTreeSimplify, Canonical_Sorting) {
	auto x = make_var("x");
	auto y = make_var("y");
	auto root = make_bin_op(y, BinaryOp<float>::Op::Add, x);
	EXPECT_EQ(ExpressionTree<float>(root).simplified().to_string(), "x + y");
}

TEST(ExpressionTreeSimplify, Algebraic_TermCollectionBasic) {
	auto x = make_var("x");
	auto root = make_bin_op(x, BinaryOp<float>::Op::Add, x);
	EXPECT_EQ(ExpressionTree<float>(root).simplified().to_string(), "2 * x");
}

TEST(ExpressionTreeSimplify, Algebraic_TermCollectionComplex) {
	auto x = make_var("x");
	auto two_x = make_bin_op(make_const(2.f), BinaryOp<float>::Op::Multiply, x);
	auto five_x = make_bin_op(make_const(5.f), BinaryOp<float>::Op::Multiply, x);
	// 5*x - 2*x
	auto root = make_bin_op(five_x, BinaryOp<float>::Op::Substract, two_x);
	// -> 5*x + (-1 * 2 * x) -> 5*x + (-2*x) -> 3*x
	EXPECT_EQ(ExpressionTree<float>(root).simplified().to_string(), "3 * x");
}

TEST(ExpressionTreeSimplify, Interaction_ExpansionThenCollection) {
	auto a = make_var("a");
	auto x = make_var("x");
	auto two_x = make_bin_op(make_const(2.f), BinaryOp<float>::Op::Multiply, x);
	auto x_plus_2x = make_bin_op(x, BinaryOp<float>::Op::Add, two_x);
	// a * (x + 2*x)
	auto root = make_bin_op(a, BinaryOp<float>::Op::Multiply, x_plus_2x);
	// 1. Fixed-point loop 1:
	//    - Inner (x + 2x) simplifies to (3x)
	//    - Expression becomes a * (3x)
	// 2. Fixed-point loop 2:
	//    - Expression simplifies to 3*a*x
	EXPECT_EQ(ExpressionTree<float>(root).simplified().to_string(), "3 * a * x");
}

TEST(ExpressionTreeSimplify, Interaction_FullCanonicalization) {
	auto x = make_var("x");
	auto y = make_var("y");
	auto two = make_const(2.f);

	// Expression: 2*(y+x) - (x+y)
	auto y_plus_x = make_bin_op(y, BinaryOp<float>::Op::Add, x);
	auto two_times_yx = make_bin_op(two, BinaryOp<float>::Op::Multiply, y_plus_x);
	auto x_plus_y = make_bin_op(x, BinaryOp<float>::Op::Add, y);
	auto root = make_bin_op(two_times_yx, BinaryOp<float>::Op::Substract, x_plus_y);

	// 1. Canonicalize: 2*(y+x) + (-1 * (x+y))
	// 2. Sort/Flatten: 2*(x+y) + (-1 * (x+y))
	// 3. Term collection sees a common factor of (x+y), resulting in (2 - 1)*(x+y)
	// 4. Result: 1 * (x+y) -> x+y
	EXPECT_EQ(ExpressionTree<float>(root).simplified().to_string(), "x + y");
}

TEST(ExpressionTreeSimplify, PointerSharingOnSimplification) {
	auto x = make_var("x");
	auto y = make_var("y");
	auto one = make_const(1.f);

	// Expression is (x * 1) + y
	auto mul_one = make_bin_op(x, BinaryOp<float>::Op::Multiply, one);
	auto root = make_bin_op(mul_one, BinaryOp<float>::Op::Add, y);
	ExpressionTree<float> et(root);

	auto simplified_et = et.simplified();
	EXPECT_EQ(simplified_et.to_string(), "x + y");

	// Check for the correct canonical NaryOp type
	auto const* simplified_add = std::get_if<NaryOp<float>>(&simplified_et.get_root()->node_type);
	ASSERT_NE(simplified_add, nullptr);

	// Operands are canonically sorted. "x" < "y".
	ASSERT_EQ(simplified_add->operands.size(), 2);

	// Check that the shared_ptr for y still points to the same original object
	EXPECT_EQ(simplified_add->operands[1].get(), y.get());
}

TEST(ExpressionTreeFactor, SimpleCommonFactor) {
	auto a = make_var("a");
	auto x = make_var("x");
	auto y = make_var("y");
	// Expression: a*x + a*y
	auto ax = make_bin_op(a, BinaryOp<float>::Op::Multiply, x);
	auto ay = make_bin_op(a, BinaryOp<float>::Op::Multiply, y);
	auto root = make_bin_op(ax, BinaryOp<float>::Op::Add, ay);

	// Simplification expands it to (a*x) + (a*y), then factoring should pull 'a' out.
	// Canonical sort makes it a * (x + y)
	EXPECT_EQ(ExpressionTree<float>(root).simplified().to_string(), "a * (x + y)");
}

TEST(ExpressionTreeFactor, NumericCommonFactor) {
	auto x = make_var("x");
	auto y = make_var("y");
	auto two = make_const(2.f);
	// Expression: 2*x + 2*y
	auto two_x = make_bin_op(two, BinaryOp<float>::Op::Multiply, x);
	auto two_y = make_bin_op(two, BinaryOp<float>::Op::Multiply, y);
	auto root = make_bin_op(two_x, BinaryOp<float>::Op::Add, two_y);

	EXPECT_EQ(ExpressionTree<float>(root).simplified().to_string(), "2 * (x + y)");
}

TEST(ExpressionTreeFactor, NoCommonFactor) {
	auto x = make_var("x");
	auto y = make_var("y");
	// Expression: x + y
	auto root = make_bin_op(x, BinaryOp<float>::Op::Add, y);
	// Should remain unchanged after factoring attempt
	EXPECT_EQ(ExpressionTree<float>(root).simplified().to_string(), "x + y");
}

TEST(ExpressionTreeFactor, PartialFactoring) {
	auto a = make_var("a");
	auto x = make_var("x");
	auto y = make_var("y");
	auto z = make_var("z");
	// Expression: (a*x + a*y) + z
	auto ax = make_bin_op(a, BinaryOp<float>::Op::Multiply, x);
	auto ay = make_bin_op(a, BinaryOp<float>::Op::Multiply, y);
	auto ax_plus_ay = make_bin_op(ax, BinaryOp<float>::Op::Add, ay);
	auto root = make_bin_op(ax_plus_ay, BinaryOp<float>::Op::Add, z);

	// Canonical sort will be z + a*(x+y). Test expects "a * (x + y) + z" due to string output order.
	// Let's check both sorted possibilities.
	std::string result = ExpressionTree<float>(root).simplified().to_string();
	EXPECT_TRUE(result == "z + (a * (x + y))" || result == "(a * (x + y)) + z");
}

TEST(ExpressionTreeFactor, ComplexTermAsFactor) {
	auto a = make_var("a");
	auto x = make_var("x");
	auto y = make_var("y");
	auto z = make_var("z");

	// Expression: a*(y+z) + x*(y+z)
	auto y_plus_z = make_bin_op(y, BinaryOp<float>::Op::Add, z);
	auto term1 = make_bin_op(a, BinaryOp<float>::Op::Multiply, y_plus_z);
	auto term2 = make_bin_op(x, BinaryOp<float>::Op::Multiply, y_plus_z);
	auto root = make_bin_op(term1, BinaryOp<float>::Op::Add, term2);

	// 1. Expansion: (a*y + a*z) + (x*y + x*z)
	// 2. Factoring should identify (y+z) as a common factor.
	// 3. Final canonical form: (a+x)*(y+z)
	std::string result = ExpressionTree<float>(root).simplified().to_string();
	EXPECT_TRUE(result == "(a + x) * (y + z)" || result == "(y + z) * (a + x)");
}

TEST(ExpressionTreeFactor, MultiLevelRecursiveFactoring) {
	auto a = make_var("a");
	auto b = make_var("b");
	auto x = make_var("x");
	auto y = make_var("y");

	// Expression: a*x + b*x + a*y + b*y
	auto ax = make_bin_op(a, BinaryOp<float>::Op::Multiply, x);
	auto bx = make_bin_op(b, BinaryOp<float>::Op::Multiply, x);
	auto ay = make_bin_op(a, BinaryOp<float>::Op::Multiply, y);
	auto by = make_bin_op(b, BinaryOp<float>::Op::Multiply, y);
	auto ax_bx = make_bin_op(ax, BinaryOp<float>::Op::Add, bx);
	auto ay_by = make_bin_op(ay, BinaryOp<float>::Op::Add, by);
	auto root = make_bin_op(ax_bx, BinaryOp<float>::Op::Add, ay_by);

	// 1. Initial form is ((a*x + b*x) + (a*y + b*y))
	// 2. Fully expanded form is a*x + b*x + a*y + b*y
	// 3. First pass of factoring might pull out 'x': x*(a+b) + a*y + b*y
	// 4. Second pass on remainder pulls out 'y': x*(a+b) + y*(a+b)
	// 5. Final pass pulls out '(a+b)': (a+b)*(x+y)
	std::string result = ExpressionTree<float>(root).simplified().to_string();
	EXPECT_TRUE(result == "(a + b) * (x + y)" || result == "(x + y) * (a + b)");
}

TEST(ExpressionTreeFactor, FactoringInsideUnaryOp) {
	auto a = make_var("a");
	auto x = make_var("x");
	auto y = make_var("y");

	// Expression: cos(a*x + a*y)
	auto ax = make_bin_op(a, BinaryOp<float>::Op::Multiply, x);
	auto ay = make_bin_op(a, BinaryOp<float>::Op::Multiply, y);
	auto inner_sum = make_bin_op(ax, BinaryOp<float>::Op::Add, ay);
	auto root = std::make_shared<const ExpressionNode<float>>(UnaryOp<float>{ UnaryOp<float>::Op::Cos, inner_sum });

	// The factoring should happen on the argument of cos.
	EXPECT_EQ(ExpressionTree<float>(root).simplified().to_string(), "cos(a * (x + y))");
}
