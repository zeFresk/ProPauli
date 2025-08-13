#include "observable.hpp"
#include "pauli.hpp"
#include "truncate.hpp"
#include <iostream>

void observable_guide_snippets() {
    //! [observable_manual_evolution]
    // Start with a simple Z observable on the first of two qubits
    Observable obs{"ZI"};
    std::cout << "Initial observable: " << obs << std::endl;

    // Evolve the observable backward through a CNOT gate
    // Circuit: --[CX]--
    //           |
    //           *
    obs.apply_cx(1, 0); // Note: control and target are for the forward circuit
    std::cout << "After CX(1,0):      " << obs << std::endl;

    // Evolve backward through an H gate on qubit 0
    // Circuit: --[H]--[CX]--
    //                 |
    //           ------*----
    obs.apply_clifford(Clifford_Gates_1Q::H, 0);
    std::cout << "After H(0):         " << obs << std::endl;
    //! [observable_manual_evolution]

    //! [observable_splitting]
    Observable split_obs{"X"};
    std::cout << "\nInitial observable: " << split_obs << std::endl;
    std::cout << "Size: " << split_obs.size() << std::endl;

    // Applying Rz splits the observable
    split_obs.apply_rz(0, 1.57f);
    std::cout << "After Rz(0):      " << split_obs << std::endl;
    std::cout << "Size: " << split_obs.size() << std::endl;
    //! [observable_splitting]

    //! [observable_merge_truncate]
    Observable complex_obs({PauliTerm("IXYZ", 0.5f), PauliTerm("IXYZ", 0.2f), PauliTerm("IIII", 0.01f)});
    std::cout << "\nInitial complex observable: " << complex_obs << std::endl;

    // Merge identical terms
    complex_obs.merge();
    std::cout << "After merge:              " << complex_obs << std::endl;

    // Truncate terms with small coefficients
    complex_obs.truncate(CoefficientTruncator<>(0.1f));
    std::cout << "After truncate:           " << complex_obs << std::endl;
    //! [observable_merge_truncate]
}
