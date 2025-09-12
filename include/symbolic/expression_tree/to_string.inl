template <typename T>
std::string ExpressionTree<T>::to_string(std::string_view formatter) const {
	if (!root_node)
		return "";
	return to_string_node(root_node, formatter, true);
}

template <typename T>
std::string ExpressionTree<T>::to_string_node(NodePtr<T> const& node, std::string_view fmt, bool is_root) const {
	return std::visit(
		[&](auto const& n) -> std::string {
			using VT = std::remove_cvref_t<decltype(n)>;
			if constexpr (std::is_same_v<VT, Constant<T>>) {
				return std::vformat(fmt, std::make_format_args(n.value));
			} else if constexpr (std::is_same_v<VT, Variable>) {
				return n.name;
			} else if constexpr (std::is_same_v<VT, UnaryOp<T>>) {
				if (n.operation == UnaryOp<T>::Op::Minus) {
					bool is_simple = std::get_if<Constant<T>>(&n.exp->node_type) ||
							 std::get_if<Variable>(&n.exp->node_type);
					auto v_str = to_string_node(n.exp, fmt, true);
					return is_simple ? "-" + v_str : "-(" + v_str + ")";
				} else {
					auto v_str = to_string_node(n.exp, fmt, true);
					switch (n.operation) {
					case UnaryOp<T>::Op::Cos:
						return "cos(" + v_str + ")";
					case UnaryOp<T>::Op::Sin:
						return "sin(" + v_str + ")";
					case UnaryOp<T>::Op::Sqrt:
						return "sqrt(" + v_str + ")";
					default:
						break;
					}
				}
			} else if constexpr (std::is_same_v<VT, BinaryOp<T>>) {
				std::string lhs_str = to_string_node(n.lhs, fmt, false);
				std::string rhs_str = to_string_node(n.rhs, fmt, false);
				char op_char = ' ';
				switch (n.operation) {
				case BinaryOp<T>::Op::Add:
					op_char = '+';
					break;
				case BinaryOp<T>::Op::Multiply:
					op_char = '*';
					break;
				case BinaryOp<T>::Op::Substract:
					op_char = '-';
					break;
				case BinaryOp<T>::Op::Divide:
					op_char = '/';
					break;
				}
				std::string res = lhs_str + " " + op_char + " " + rhs_str;
				return is_root ? res : "(" + res + ")";
			} else if constexpr (std::is_same_v<VT, NaryOp<T>>) {
				// --- REVISED N-ARY PRINTING LOGIC ---
				if (n.operands.empty()) {
					return "";
				}

				// Multiplication is simple: just join with "*"
				if (n.operation == NaryOp<T>::Op::Multiply) {
					std::string res;
					for (size_t i = 0; i < n.operands.size(); ++i) {
						if (i > 0)
							res += " * ";
						res += to_string_node(n.operands[i], fmt, false);
					}
					return is_root ? res : "(" + res + ")";
				}

				// Addition requires special handling for negative terms to print " - "
				if (n.operation == NaryOp<T>::Op::Add) {
					std::string res = to_string_node(n.operands[0], fmt, false);
					for (size_t i = 1; i < n.operands.size(); ++i) {
						const auto& operand = n.operands[i];
						auto [coeff, term] = extract_coefficient(operand);

						// Check if the term is negative
						if (term != nullptr && coeff < 0) {
							res += " - ";
							T positive_coeff = -coeff;
							if (positive_coeff == 1) {
								res += to_string_node(term, fmt, false);
							} else {
								// Reconstruct the positive term for printing, e.g., "2 * x"
								auto coeff_node =
									std::make_shared<const ExpressionNode<T>>(
										Constant<T>{ positive_coeff });
								std::vector<NodePtr<T>> mul_ops = { coeff_node, term };
								res += to_string_node(process_multiplication(mul_ops),
										      fmt, false);
							}
						} else if (term == nullptr && coeff < 0) { // Negative constant term
							res += " - " +
							       to_string_node(std::make_shared<const ExpressionNode<T>>(
										      Constant<T>{ -coeff }),
									      fmt, false);
						} else { // Positive term
							res += " + " + to_string_node(operand, fmt, false);
						}
					}
					return is_root ? res : "(" + res + ")";
				}
			}
			throw std::logic_error("Unhandled node type in to_string");
		},
		node->node_type);
}
