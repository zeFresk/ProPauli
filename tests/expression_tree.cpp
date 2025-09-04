#include "gtest/gtest.h"

#include "symbolic/expression_tree.hpp"

TEST(ExpressionTree, init) { ExpressionTree<float> et{}; }

TEST(ExpressionTree, const_eval) {
	ExpressionTree<float> et;
	et.add_node(Constant<float>{ 1.f });
	EXPECT_EQ(et.evaluate(), 1.f);
}

TEST(ExpressionTree, unop_eval_sin) {
	ExpressionTree<float> et;
	auto n = et.add_node(Constant<float>{ 0.f });
	auto eb = et.add_node(UnaryOp{ UnaryOp::Op::Sin, n });
	et.update_root(eb);
	EXPECT_FLOAT_EQ(et.evaluate(), 0.f);
}

TEST(ExpressionTree, unop_eval_cos) {
	ExpressionTree<float> et;
	auto n = et.add_node(Constant<float>{ 0.f });
	auto eb = et.add_node(UnaryOp{ UnaryOp::Op::Cos, n });
	et.update_root(eb);
	EXPECT_FLOAT_EQ(et.evaluate(), 1.f);
}

TEST(ExpressionTree, unop_eval_min) {
	ExpressionTree<float> et;
	auto n = et.add_node(Constant<float>{ 1.f });
	auto eb = et.add_node(UnaryOp{ UnaryOp::Op::Minus, n });
	et.update_root(eb);
	EXPECT_EQ(et.evaluate(), -1.f);
}

TEST(ExpressionTree, binop_eval_mul) {
	ExpressionTree<float> et;
	auto nl = et.add_node(Constant<float>{ 2.f });
	auto nr = et.add_node(Constant<float>{ 3.f });
	auto eb = et.add_node(BinaryOp{ BinaryOp::Op::Multiply, nl, nr });
	et.update_root(eb);
	EXPECT_FLOAT_EQ(et.evaluate(), 6.f);
}

TEST(ExpressionTree, binop_eval_div) {
	ExpressionTree<float> et;
	auto nl = et.add_node(Constant<float>{ 2.f });
	auto nr = et.add_node(Constant<float>{ 3.f });
	auto eb = et.add_node(BinaryOp{ BinaryOp::Op::Divide, nl, nr });
	et.update_root(eb);
	EXPECT_FLOAT_EQ(et.evaluate(), 2.f / 3.f);
}

TEST(ExpressionTree, binop_eval_add) {
	ExpressionTree<float> et;
	auto nl = et.add_node(Constant<float>{ 2.f });
	auto nr = et.add_node(Constant<float>{ 3.f });
	auto eb = et.add_node(BinaryOp{ BinaryOp::Op::Add, nl, nr });
	et.update_root(eb);
	EXPECT_FLOAT_EQ(et.evaluate(), 5.f);
}

TEST(ExpressionTree, binop_eval_sub) {
	ExpressionTree<float> et;
	auto nl = et.add_node(Constant<float>{ 2.f });
	auto nr = et.add_node(Constant<float>{ 3.f });
	auto eb = et.add_node(BinaryOp{ BinaryOp::Op::Substract, nl, nr });
	et.update_root(eb);
	EXPECT_FLOAT_EQ(et.evaluate(), -1.f);
}

TEST(ExpressionTree, binop_eval_var) {
	ExpressionTree<float> et;
	et.add_node(Variable{ "test_var01" });
	std::unordered_map<std::string, float> vars = { { "test_var01", -1.f } };
	EXPECT_FLOAT_EQ(et.evaluate(vars), -1.f);
}

TEST(ExpressionTree, const_str) {
	ExpressionTree<float> et;
	et.add_node(Constant<float>{ 1.f });
	EXPECT_EQ(et.to_string(), "1");
}

TEST(ExpressionTree, unop_str_sin) {
	ExpressionTree<float> et;
	auto n = et.add_node(Constant<float>{ 0.f });
	auto eb = et.add_node(UnaryOp{ UnaryOp::Op::Sin, n });
	et.update_root(eb);
	EXPECT_EQ(et.to_string(), "sin(0)");
}

TEST(ExpressionTree, unop_str_cos) {
	ExpressionTree<float> et;
	auto n = et.add_node(Constant<float>{ 0.f });
	auto eb = et.add_node(UnaryOp{ UnaryOp::Op::Cos, n });
	et.update_root(eb);
	EXPECT_EQ(et.to_string(), "cos(0)");
}

TEST(ExpressionTree, unop_str_min) {
	ExpressionTree<float> et;
	auto n = et.add_node(Constant<float>{ 1.f });
	auto eb = et.add_node(UnaryOp{ UnaryOp::Op::Minus, n });
	et.update_root(eb);
	EXPECT_EQ(et.to_string(), "-1");
}

TEST(ExpressionTree, binop_str_mul) {
	ExpressionTree<float> et;
	auto nl = et.add_node(Constant<float>{ 2.f });
	auto nr = et.add_node(Constant<float>{ 3.f });
	auto eb = et.add_node(BinaryOp{ BinaryOp::Op::Multiply, nl, nr });
	et.update_root(eb);
	EXPECT_EQ(et.to_string(), "2 * 3");
}

TEST(ExpressionTree, binop_str_div) {
	ExpressionTree<float> et;
	auto nl = et.add_node(Constant<float>{ 2.f });
	auto nr = et.add_node(Constant<float>{ 3.f });
	auto eb = et.add_node(BinaryOp{ BinaryOp::Op::Divide, nl, nr });
	et.update_root(eb);
	EXPECT_EQ(et.to_string(), "2 / 3");
}

TEST(ExpressionTree, binop_str_add) {
	ExpressionTree<float> et;
	auto nl = et.add_node(Constant<float>{ 2.f });
	auto nr = et.add_node(Constant<float>{ 3.f });
	auto eb = et.add_node(BinaryOp{ BinaryOp::Op::Add, nl, nr });
	et.update_root(eb);
	EXPECT_EQ(et.to_string(), "2 + 3");
}

TEST(ExpressionTree, binop_str_sub) {
	ExpressionTree<float> et;
	auto nl = et.add_node(Constant<float>{ 2.f });
	auto nr = et.add_node(Constant<float>{ 3.f });
	auto eb = et.add_node(BinaryOp{ BinaryOp::Op::Substract, nl, nr });
	et.update_root(eb);
	EXPECT_EQ(et.to_string(), "2 - 3");
}

TEST(ExpressionTree, binop_str_var) {
	ExpressionTree<float> et;
	et.add_node(Variable{ "test_var01" });
	EXPECT_EQ(et.to_string(), "test_var01");
}

TEST(ExpressionTree, import_nodes_eval) {
	ExpressionTree<float> lhs, rhs;
	lhs.update_root(lhs.add_node(BinaryOp{ BinaryOp::Op::Multiply, lhs.add_node(Constant<float>{ 2.f }),
					       lhs.add_node(Constant<float>{ 3.f }) }));
	EXPECT_FLOAT_EQ(lhs.evaluate(), 2.f * 3.f);

	rhs.update_root(rhs.add_node(Constant<float>{ 4.f }));
	EXPECT_FLOAT_EQ(rhs.evaluate(), 4.f);

	auto iroot = rhs.import_nodes(lhs);
	rhs.update_root(rhs.add_node(BinaryOp{ BinaryOp::Op::Add, iroot, rhs.get_root() }));
	EXPECT_FLOAT_EQ(rhs.evaluate(), (2.f * 3.f) + 4.f);
}

TEST(ExpressionTree, import_nodes_str) {
	ExpressionTree<float> lhs, rhs;
	lhs.update_root(lhs.add_node(BinaryOp{ BinaryOp::Op::Multiply, lhs.add_node(Constant<float>{ 2.f }),
					       lhs.add_node(Constant<float>{ 3.f }) }));
	EXPECT_EQ(lhs.to_string(), "2 * 3");

	rhs.update_root(rhs.add_node(Constant<float>{ 4.f }));
	EXPECT_EQ(rhs.to_string(), "4");

	auto iroot = rhs.import_nodes(lhs);
	rhs.update_root(rhs.add_node(BinaryOp{ BinaryOp::Op::Add, iroot, rhs.get_root() }));
	EXPECT_EQ(rhs.to_string(), "(2 * 3) + 4");
}
