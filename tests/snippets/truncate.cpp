#include "truncate.hpp"
#include <iostream>

void truncate_snippets() {
    PauliTermContainer<float> observable = {"+0.5XX", "+0.001IZ", "-0.8II", "+0.2ZZZ"};
    
    //! [coefficient_truncator]
    // Create a truncator that removes terms with coefficient magnitude < 0.1
    CoefficientTruncator<float> coeff_trunc(0.1f);
    auto removed_by_coeff = coeff_trunc.truncate(observable);
    // `observable` now contains {"+0.5XX", "-0.8II", "+0.2ZZZ"}
    std::cout << "Removed by coefficient truncator: " << removed_by_coeff << std::endl;
    //! [coefficient_truncator]
    
    //! [weight_truncator]
    // Create a truncator that removes terms with Pauli weight >= 3
    WeightTruncator weight_trunc(3);
    auto removed_by_weight = weight_trunc.truncate(observable);
    // `observable` now contains {"+0.5XX", "-0.8II"}
    std::cout << "Removed by weight truncator: " << removed_by_weight << std::endl;
    //! [weight_truncator]

    //! [never_truncator]
    // A truncator that does nothing
    NeverTruncator no_op_trunc;
    auto removed_by_never = no_op_trunc.truncate(observable);
    // `observable` is unchanged
    std::cout << "Removed by never truncator: " << removed_by_never << std::endl;
    //! [never_truncator]
    
    // Reset observable for the next examples
    observable = {"+0.5XX", "+0.001IZ", "-0.8II", "+0.2ZZZ"};

    //! [combine_truncators]
    // Combine the coefficient and weight truncators at compile time for efficiency.
    // They are applied sequentially.
    auto combined_trunc = combine_truncators(
        CoefficientTruncator<float>(0.1f), 
        WeightTruncator(3)
    );
    auto removed_by_combined = combined_trunc->truncate(observable);
    // `observable` is now {"+0.5XX", "-0.8II"}
    std::cout << "Removed by combined (compile-time) truncator: " << removed_by_combined << std::endl;
    //! [combine_truncators]

    // Reset observable
    observable = {"+0.5XX", "+0.001IZ", "-0.8II", "+0.2ZZZ"};
    
    //! [runtime_multi_truncator]
    // Create a collection of truncators at runtime.
    std::vector<std::shared_ptr<Truncator<float>>> trunc_list;
    trunc_list.push_back(std::make_shared<CoefficientTruncator<float>>(0.1f));
    trunc_list.push_back(std::make_shared<WeightTruncator>(3));

    // Create a runtime combiner from the list.
    RuntimeMultiTruncators<float> runtime_trunc(trunc_list);
    auto removed_by_runtime = runtime_trunc.truncate(observable);
    // `observable` is now {"+0.5XX", "-0.8II"}
    std::cout << "Removed by runtime truncator: " << removed_by_runtime << std::endl;
    //! [runtime_multi_truncator]
}
