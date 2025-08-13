#include "pauli_term.hpp"
#include "pauli.hpp"
#include <vector>

#include "gtest/gtest.h"

void pauli_term_constructor_snippets() {
    //! [pauli_term_from_string]
    // From a string_view and a coefficient
    auto pt_from_string = PauliTerm("IXYZ", 0.5f);
    //! [pauli_term_from_string]

    //! [pauli_term_from_list]
    // From an initializer_list of Pauli objects
    using enum Pauli_enum;
    auto pt_from_list = PauliTerm({I, X, Y, Z}, -1.0f);
    //! [pauli_term_from_list]

    //! [pauli_term_from_pauli]
    // From a single Pauli object
    auto pt_from_pauli = PauliTerm(p_x, 1.0f);
    //! [pauli_term_from_pauli]
}

TEST(documentation, PauliTerm) { pauli_term_constructor_snippets(); }
