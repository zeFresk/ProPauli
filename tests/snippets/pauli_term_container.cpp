#include "pauli_term_container.hpp"
#include <iostream>
#include <string_view>

void pauli_term_container_snippets() {
    //! [pauli_term_container_usage]
    // Construct a container from string representations of Pauli terms.
    // The coefficients are implicitly 1.0f.
    PauliTermContainer<float> observable = {"+IX", "-ZY", "+XI"};

    std::cout << "Observable has " << observable.nb_terms() << " terms on "
              << observable.nb_qubits() << " qubits." << std::endl;

    // Access the second term ("-ZY") using a non-owning read-only view.
    auto term_view = observable[1];
    
    // Print the term using the view.
    std::cout << "Second term is: " << term_view << std::endl;
    std::cout << "Its coefficient is: " << term_view.coefficient() << std::endl;
    std::cout << "Its Pauli weight is: " << term_view.pauli_weight() << std::endl;

    // Modify the first term ("+IX") through a mutable view.
    // Let's change its coefficient.
    observable[0].set_coefficient(0.5f);

    std::cout << "Modified observable:" << std::endl;
    for (const auto& term : observable) {
        std::cout << "  " << term << std::endl;
    }
    //! [pauli_term_container_usage]
}
