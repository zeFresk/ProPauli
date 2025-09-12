#include "gtest/gtest.h"
#include "symbolic/expression_tree.hpp"
#include <memory> // For std::make_shared

// Helper to create a constant node pointer
auto make_const(float val) { return std::make_shared<const ExpressionNode<float>>(Constant<float>{ val }); }

// Helper to create a variable node pointer
auto make_var(const std::string& name) { return std::make_shared<const ExpressionNode<float>>(Variable{ name }); }

TEST(ExpressionTree, init) { ExpressionTree<float> et{}; }

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
	auto root =
		std::make_shared<const ExpressionNode<float>>(BinaryOp<float>{ BinaryOp<float>::Op::Multiply, nl, nr });
	ExpressionTree<float> et(root);
	EXPECT_FLOAT_EQ(et.evaluate(), 6.f);
}

TEST(ExpressionTree, binop_eval_div) {
	auto nl = make_const(2.f);
	auto nr = make_const(3.f);
	auto root =
		std::make_shared<const ExpressionNode<float>>(BinaryOp<float>{ BinaryOp<float>::Op::Divide, nl, nr });
	ExpressionTree<float> et(root);
	EXPECT_FLOAT_EQ(et.evaluate(), 2.f / 3.f);
}

TEST(ExpressionTree, binop_eval_add) {
	auto nl = make_const(2.f);
	auto nr = make_const(3.f);
	auto root = std::make_shared<const ExpressionNode<float>>(BinaryOp<float>{ BinaryOp<float>::Op::Add, nl, nr });
	ExpressionTree<float> et(root);
	EXPECT_FLOAT_EQ(et.evaluate(), 5.f);
}

TEST(ExpressionTree, binop_eval_sub) {
	auto nl = make_const(2.f);
	auto nr = make_const(3.f);
	auto root = std::make_shared<const ExpressionNode<float>>(
		BinaryOp<float>{ BinaryOp<float>::Op::Substract, nl, nr });
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

TEST(ExpressionTree, unop_str_sin) {
	auto n = make_const(0.f);
	auto root = std::make_shared<const ExpressionNode<float>>(UnaryOp<float>{ UnaryOp<float>::Op::Sin, n });
	ExpressionTree<float> et(root);
	EXPECT_EQ(et.to_string(), "sin(0)");
}

TEST(ExpressionTree, unop_str_cos) {
	auto n = make_const(0.f);
	auto root = std::make_shared<const ExpressionNode<float>>(UnaryOp<float>{ UnaryOp<float>::Op::Cos, n });
	ExpressionTree<float> et(root);
	EXPECT_EQ(et.to_string(), "cos(0)");
}

TEST(ExpressionTree, unop_str_min) {
	auto n = make_const(1.f);
	auto root = std::make_shared<const ExpressionNode<float>>(UnaryOp<float>{ UnaryOp<float>::Op::Minus, n });
	ExpressionTree<float> et(root);
	EXPECT_EQ(et.to_string(), "-1"); // Note: New stringification is more parenthesis-safe
}

TEST(ExpressionTree, unop_str_sqrt) {
	auto n = make_const(1.f);
	auto root = std::make_shared<const ExpressionNode<float>>(UnaryOp<float>{ UnaryOp<float>::Op::Sqrt, n });
	ExpressionTree<float> et(root);
	EXPECT_EQ(et.to_string(), "sqrt(1)");
}

TEST(ExpressionTree, binop_str_mul) {
	auto nl = make_const(2.f);
	auto nr = make_const(3.f);
	auto root =
		std::make_shared<const ExpressionNode<float>>(BinaryOp<float>{ BinaryOp<float>::Op::Multiply, nl, nr });
	ExpressionTree<float> et(root);
	EXPECT_EQ(et.to_string(), "2 * 3");
}

TEST(ExpressionTree, binop_str_div) {
	auto nl = make_const(2.f);
	auto nr = make_const(3.f);
	auto root =
		std::make_shared<const ExpressionNode<float>>(BinaryOp<float>{ BinaryOp<float>::Op::Divide, nl, nr });
	ExpressionTree<float> et(root);
	EXPECT_EQ(et.to_string(), "2 / 3");
}

TEST(ExpressionTree, binop_str_add) {
	auto nl = make_const(2.f);
	auto nr = make_const(3.f);
	auto root = std::make_shared<const ExpressionNode<float>>(BinaryOp<float>{ BinaryOp<float>::Op::Add, nl, nr });
	ExpressionTree<float> et(root);
	EXPECT_EQ(et.to_string(), "2 + 3");
}

TEST(ExpressionTree, binop_str_sub) {
	auto nl = make_const(2.f);
	auto nr = make_const(3.f);
	auto root = std::make_shared<const ExpressionNode<float>>(
		BinaryOp<float>{ BinaryOp<float>::Op::Substract, nl, nr });
	ExpressionTree<float> et(root);
	EXPECT_EQ(et.to_string(), "2 - 3");
}

TEST(ExpressionTree, var_str) {
	ExpressionTree<float> et(make_var("test_var01"));
	EXPECT_EQ(et.to_string(), "test_var01");
}

// --- Replaces old `import_nodes` tests with modern composition ---

TEST(ExpressionTree, Composition_eval) {
	// Build expression for (2 * 3)
	auto two = make_const(2.f);
	auto three = make_const(3.f);
	auto mul_root = std::make_shared<const ExpressionNode<float>>(
		BinaryOp<float>{ BinaryOp<float>::Op::Multiply, two, three });
	ExpressionTree<float> lhs(mul_root);
	EXPECT_FLOAT_EQ(lhs.evaluate(), 6.f);

	// Build expression for (4)
	auto four = make_const(4.f);
	ExpressionTree<float> rhs(four);
	EXPECT_FLOAT_EQ(rhs.evaluate(), 4.f);

	// Compose them into ((2 * 3) + 4)
	auto add_root = std::make_shared<const ExpressionNode<float>>(
		BinaryOp<float>{ BinaryOp<float>::Op::Add, lhs.get_root(), rhs.get_root() });
	ExpressionTree<float> final_et(add_root);
	EXPECT_FLOAT_EQ(final_et.evaluate(), 10.f);
}

TEST(ExpressionTree, Composition_str) {
	auto two = make_const(2.f);
	auto three = make_const(3.f);
	auto mul_root = std::make_shared<const ExpressionNode<float>>(
		BinaryOp<float>{ BinaryOp<float>::Op::Multiply, two, three });
	ExpressionTree<float> lhs(mul_root);
	EXPECT_EQ(lhs.to_string(), "2 * 3");

	auto four = make_const(4.f);
	ExpressionTree<float> rhs(four);
	EXPECT_EQ(rhs.to_string(), "4");

	auto add_root = std::make_shared<const ExpressionNode<float>>(
		BinaryOp<float>{ BinaryOp<float>::Op::Add, lhs.get_root(), rhs.get_root() });
	ExpressionTree<float> final_et(add_root);
	EXPECT_EQ(final_et.to_string(), "(2 * 3) + 4");
}

// --- New tests for simplification and symbolic evaluation ---

TEST(ExpressionTree, Simplification_ConstantFolding) {
	auto two = make_const(2.f);
	auto three = make_const(3.f);
	auto mul = std::make_shared<const ExpressionNode<float>>(
		BinaryOp<float>{ BinaryOp<float>::Op::Multiply, two, three });

	auto four = make_const(4.f);
	auto add =
		std::make_shared<const ExpressionNode<float>>(BinaryOp<float>{ BinaryOp<float>::Op::Add, mul, four });

	ExpressionTree<float> et(add);
	EXPECT_EQ(et.to_string(), "(2 * 3) + 4");

	auto simplified_et = et.simplified();
	// Expects (2*3)+4 -> 6+4 -> 10
	EXPECT_EQ(simplified_et.to_string(), "10");
	EXPECT_FLOAT_EQ(simplified_et.evaluate(), 10.f);
}

TEST(ExpressionTree, Simplification_Identity) {
	auto x = make_var("x");
	auto zero = make_const(0.f);
	auto one = make_const(1.f);

	// Test x + 0 => x
	auto add_zero =
		std::make_shared<const ExpressionNode<float>>(BinaryOp<float>{ BinaryOp<float>::Op::Add, x, zero });
	EXPECT_EQ(ExpressionTree<float>(add_zero).simplified().to_string(), "x");

	// Test 1 * x => x
	auto mul_one =
		std::make_shared<const ExpressionNode<float>>(BinaryOp<float>{ BinaryOp<float>::Op::Multiply, one, x });
	EXPECT_EQ(ExpressionTree<float>(mul_one).simplified().to_string(), "x");

	// Test x * 0 => 0
	auto mul_zero = std::make_shared<const ExpressionNode<float>>(
		BinaryOp<float>{ BinaryOp<float>::Op::Multiply, x, zero });
	EXPECT_EQ(ExpressionTree<float>(mul_zero).simplified().to_string(), "0");
}

TEST(ExpressionTree, SymbolicEvaluate) {
	auto x = make_var("x");
	auto two = make_const(2.f);
	auto mul =
		std::make_shared<const ExpressionNode<float>>(BinaryOp<float>{ BinaryOp<float>::Op::Multiply, x, two });
	ExpressionTree<float> et(mul);

	std::unordered_map<std::string, float> vars = { { "x", 3.f } };
	auto evaluated_et = et.symbolic_evaluate(vars);

	// Expects (x * 2) with {x=3} => 3 * 2 => 6
	EXPECT_EQ(evaluated_et.to_string(), "6");
	EXPECT_FLOAT_EQ(evaluated_et.evaluate(), 6.f);
}

TEST(ExpressionTree, PointerSharingOnSimplification) {
	auto x = make_var("x");
	auto y = make_var("y");
	auto one = make_const(1.f);

	// Expression is (x * 1) + y
	auto mul_one =
		std::make_shared<const ExpressionNode<float>>(BinaryOp<float>{ BinaryOp<float>::Op::Multiply, x, one });
	auto root =
		std::make_shared<const ExpressionNode<float>>(BinaryOp<float>{ BinaryOp<float>::Op::Add, mul_one, y });
	ExpressionTree<float> et(root);

	auto simplified_et = et.simplified();

	// Simplified tree should be x + y
	EXPECT_EQ(simplified_et.to_string(), "x + y");

	// The 'y' node in the simplified tree should be the exact same object as the original 'y'
	auto const* simplified_add = std::get_if<BinaryOp<float>>(&simplified_et.get_root()->node_type);
	ASSERT_NE(simplified_add, nullptr);

	// Check that the shared_ptr for y points to the same control block.
	EXPECT_EQ(simplified_add->rhs.get(), y.get());
}
