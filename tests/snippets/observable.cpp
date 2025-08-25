#include "observable.hpp"
#include "pauli_term.hpp"
#include <vector>

#include "gtest/gtest.h"

void observable_constructor_snippets() {
	//! [observable_from_string]
	// From a single Pauli string with a coefficient
	auto obs_from_string = Observable("IXYZ", -1.0f);
	//! [observable_from_string]

	//! [observable_from_string_list]
	// From an initializer_list of Pauli strings
	auto obs_from_string_list = Observable{ "IXYZ", "XXXX" };
	//! [observable_from_string_list]

	//! [observable_from_pauli_terms]
	// From an initializer_list of PauliTerm objects
	auto obs_from_pauli_terms = Observable({ PauliTerm("IXYZ", -1.0f), PauliTerm("XXXX", 1.0f) });
	//! [observable_from_pauli_terms]

	//! [observable_from_iterators]
	// From a range of iterators
	std::vector<PauliTerm<>> terms = { PauliTerm("IX"), PauliTerm("XI", -1.0f) };
	auto obs_from_iterators = Observable(terms.cbegin(), terms.cend());
	//! [observable_from_iterators]
}

TEST(documentation, observable) { observable_constructor_snippets(); }
