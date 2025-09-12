#ifndef PP_INCLUDE_ET_NODES_HPP
#define PP_INCLUDE_ET_NODES_HPP

#include <memory>
#include <variant>
#include <vector>
#include <utility>

template <typename T>
struct ExpressionNode;
template <typename T>
class ExpressionTree;

template <typename T>
using NodePtr = std::shared_ptr<const ExpressionNode<T>>;

template <typename T>
struct Constant {
	T value;
};
struct Variable {
	std::string name;
};

template <typename T>
struct UnaryOp {
	enum class Op { Cos, Sin, Minus, Sqrt } operation;
	NodePtr<T> exp;
};

template <typename T>
struct BinaryOp {
	enum class Op { Add, Multiply, Substract, Divide } operation;
	NodePtr<T> lhs, rhs;
};

template <typename T>
struct NaryOp {
	enum class Op { Add, Multiply } operation;
	std::vector<NodePtr<T>> operands;
};

template <typename T>
using ExpressionNodeType = std::variant<Constant<T>, Variable, UnaryOp<T>, BinaryOp<T>, NaryOp<T>>;

template <typename T>
struct ExpressionNode {
	ExpressionNodeType<T> node_type;
	template <typename NodeType>
	ExpressionNode(NodeType&& nt) : node_type(std::forward<NodeType>(nt)) {}
};

#endif
