#include "circuit.hpp"
#include "observable.hpp"
#include "symbolic/coefficient.hpp"
#include <iostream>

void symbolic_circuit_example() {
    //! [symbolic_circuit]
    // Define the symbolic coefficient type
    using Symbolic = SymbolicCoefficient<double>;

    // Create a circuit that works with symbolic coefficients
    Circuit<Symbolic> qc{1};

    // Add an Rz gate with a symbolic angle "theta"
    qc.add_operation("Rz", 0, Variable("theta"));
    qc.add_operation("H", 0);

    // The initial observable is also symbolic
    Observable<Symbolic> initial_obs({"X"});

    // Running the simulation produces an observable with symbolic coefficients
    auto final_obs = qc.run(initial_obs);

    // The expectation value is a symbolic expression
    Symbolic expectation_value = final_obs.expectation_value();

    std::cout << "Symbolic Expectation Value: " << expectation_value.to_string() << std::endl;
    //! [symbolic_circuit]

    //! [full_evaluation]
    // Evaluate the expression by providing a value for "theta"
    double result = expectation_value.evaluate({{"theta", 3.14159 / 2.0}});
    std::cout << "Evaluated at theta = pi/2: " << result << std::endl;
    // This will be sin(theta) -> sin(pi/2) -> 1.0
    //! [full_evaluation]
}

void simplification_example() {
    //! [simplification]
    using Symbolic = SymbolicCoefficient<double>;
    Variable x("x");

    // Create a complex expression
    Symbolic expr = (Symbolic(x) * 2.0 + 3.0) - (Symbolic(x) + 1.0);
    std::cout << "Original expression: " << expr.to_string() << std::endl;

    // Simplify the expression
    Symbolic simplified_expr = expr.simplified();
    std::cout << "Simplified expression: " << simplified_expr.to_string() << std::endl;
    //! [simplification]
}

void partial_evaluation_example() {
    //! [partial_evaluation]
    using Symbolic = SymbolicCoefficient<double>;
    Variable x("x"), y("y");

    Symbolic expr = cos(Symbolic(x)) + sin(Symbolic(y));
    std::cout << "Original expression: " << expr.to_string() << std::endl;

    // Partially evaluate by substituting a value for 'x'
    Symbolic partial_expr = expr.symbolic_evaluate({{"x", 0.0}});
    std::cout << "Partially evaluated (x=0): " << partial_expr.to_string() << std::endl;

    // The new expression can be fully evaluated later
    double final_result = partial_expr.evaluate({{"y", 3.14159 / 2.0}});
    std::cout << "Final result (y=pi/2): " << final_result << std::endl;
    //! [partial_evaluation]
}
