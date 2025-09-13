#include "symbolic/coefficient.hpp"
#include <iostream>

void symbolic_creation() {
    //! [symbolic_creation]
    // Define a type for symbolic coefficients using double as the underlying type.
    using Symbolic = SymbolicCoefficient<double>;
    
    // Create symbolic variables 'a' and 'theta'.
    Variable a("a");
    Variable theta("theta");

    // Create symbolic coefficients from these variables.
    Symbolic sym_a(a);
    Symbolic sym_theta(theta);

    // Create a symbolic coefficient from a constant value.
    Symbolic sym_const(3.14);

    std::cout << "Symbolic variable 'a': " << sym_a.to_string() << std::endl;
    std::cout << "Symbolic variable 'theta': " << sym_theta.to_string() << std::endl;
    std::cout << "Symbolic constant: " << sym_const.to_string() << std::endl;
    //! [symbolic_creation]
}

void symbolic_operations() {
    //! [symbolic_operations]
    using Symbolic = SymbolicCoefficient<double>;
    Variable x("x"), y("y");

    // Create complex expressions using standard operators.
    Symbolic expr1 = 2.0 * Symbolic(x) + Symbolic(y);
    Symbolic expr2 = cos(Symbolic(x)) * sin(Symbolic(y));
    Symbolic expr3 = (Symbolic(x) + 1.0) * (Symbolic(x) + 1.0);

    std::cout << "Expression 1: " << expr1.to_string() << std::endl;
    std::cout << "Expression 2: " << expr2.to_string() << std::endl;
    std::cout << "Expression 3: " << expr3.to_string() << std::endl;
    //! [symbolic_operations]
}

void symbolic_evaluation() {
    //! [symbolic_evaluation]
    using Symbolic = SymbolicCoefficient<double>;
    Variable x("x");

    // Create an expression: 2*cos(x)
    Symbolic expr = 2.0 * cos(Symbolic(x));
    std::cout << "Original expression: " << expr.to_string() << std::endl;

    // Evaluate the expression by providing a value for 'x'.
    double result = expr.evaluate({{"x", 3.14159}});
    std::cout << "Result of evaluation with x=pi: " << result << std::endl;

    // Simplify a more complex expression.
    Symbolic to_simplify = (Symbolic(x) + Symbolic(x)) * 2.0;
    std::cout << "Expression to simplify: " << to_simplify.to_string() << std::endl;
    
    Symbolic simplified_expr = to_simplify.simplified();
    std::cout << "Simplified expression: " << simplified_expr.to_string() << std::endl;
    //! [symbolic_evaluation]
}
