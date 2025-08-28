#include "non_owning_pauli_term.hpp"
#include <iostream>
#include <vector>

void non_owning_pauli_term_snippets() {
    //! [readonly_nonowning_pauli_term_usage]
    // The data is owned by these variables.
    std::vector<Pauli> pauli_string = {p_x, p_y, p_z};
    float coefficient = 0.707f;

    // Create a read-only view of the data.
    ReadOnlyNonOwningPauliTerm<float> term_view(pauli_string, coefficient);

    // Use the view to inspect the data without copying it.
    std::cout << "Read-only view: " << term_view << std::endl;
    std::cout << "Pauli weight: " << term_view.pauli_weight() << std::endl;
    std::cout << "Pauli at index 1: " << term_view[1] << std::endl;
    //! [readonly_nonowning_pauli_term_usage]


    //! [nonowning_pauli_term_usage]
    // The data is owned by these variables.
    std::vector<Pauli> mutable_pauli_string = {p_i, p_x, p_i};
    double mutable_coefficient = 1.0;

    // Create a mutable view of the data.
    NonOwningPauliTerm<double> mutable_term_view(mutable_pauli_string, mutable_coefficient);
    
    std::cout << "Original term: " << mutable_term_view << std::endl;

    // Apply a gate using the view. This modifies the original data.
    // Apply Pauli Z to qubit 1 (where the X is).
    mutable_term_view.apply_pauli(Pauli_gates::Z, 1);

    std::cout << "Term after applying Z gate to qubit 1: " << mutable_term_view << std::endl;

    // The original data has been changed.
    std::cout << "Original coefficient is now: " << mutable_coefficient << std::endl; // Will be -1.0
    std::cout << "Original string is now: ";
    for(const auto& p : mutable_pauli_string) {
        std::cout << p;
    }
    std::cout << std::endl; // Will be "IYI"
    //! [nonowning_pauli_term_usage]
}
