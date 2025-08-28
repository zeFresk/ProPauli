#include "merge.hpp"
#include <iostream>

void merge_snippets() {
    //! [merge_inplace]
    // Create a container with several duplicate Pauli strings.
    PauliTermContainer<float> observable = {
        "+0.5XXI",
        "-0.2IZY",
        "+0.1XXI",
        "+0.8ZZZ",
        "+0.4IZY"
    };

    std::cout << "Observable before merging (" << observable.nb_terms() << " terms):" << std::endl;
    for (const auto& term : observable) {
        std::cout << "  " << term << std::endl;
    }

    // Merge the terms in-place.
    merge_inplace_noalloc(observable);

    std::cout << "\nObservable after merging (" << observable.nb_terms() << " terms):" << std::endl;
    // Note: The order of terms is not guaranteed after merging.
    // Expected terms: (+0.6 XXI), (+0.2 IZY), (+0.8 ZZZ)
    for (const auto& term : observable) {
        std::cout << "  " << term << std::endl;
    }
    //! [merge_inplace]
}
