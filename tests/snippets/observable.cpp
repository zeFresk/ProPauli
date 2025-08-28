#include "observable.hpp"
#include <iostream>
#include <vector>

void observable_snippets() {
    //! [observable_from_string]
    // From a single string_view and an explicit coefficient
    auto obs_from_string = Observable<float>("ZIZ", -1.0f);
    std::cout << "Observable from string: " << obs_from_string << std::endl;
    //! [observable_from_string]

    //! [observable_from_string_list]
    // From an initializer_list of strings (coefficients default to 1.0)
    auto obs_from_string_list = Observable<double>({"XXI", "IYY", "ZZZ"});
    std::cout << "Observable from string list: " << obs_from_string_list << std::endl;
    //! [observable_from_string_list]

    //! [observable_from_pauli_terms]
    // From an initializer_list of full PauliTerm objects
    using PauliTermF = PauliTerm<float>;
    auto obs_from_pauli_terms = Observable<float>({
        PauliTermF("X", 0.5f),
        PauliTermF("Y", -0.5f)
    });
    std::cout << "Observable from PauliTerm list: " << obs_from_pauli_terms << std::endl;
    //! [observable_from_pauli_terms]
    
    //! [observable_from_iterators]
    // From a range specified by iterators (e.g., from a std::vector)
    std::vector<PauliTermF> terms = {PauliTermF("IX", 1.0), PauliTermF("YI", 1.0)};
    auto obs_from_iterators = Observable<float>(terms.begin(), terms.end());
    std::cout << "Observable from iterators: " << obs_from_iterators << std::endl;
    //! [observable_from_iterators]
}
