#include "truncate.hpp"
#include "observable.hpp"

#include "gtest/gtest.h"

void truncate_snippets() {
    //! [coefficient_truncator]
    // Removes terms with coefficient magnitude below a threshold
    auto coeff_trunc = CoefficientTruncator<>(0.1f);
    Observable obs_coeff({ PauliTerm("I", 0.5f), PauliTerm("X", 0.05f) });
    obs_coeff.truncate(coeff_trunc); // obs_coeff now only contains the "I" term
    //! [coefficient_truncator]

    //! [weight_truncator]
    // Removes terms with Pauli weight above a threshold
    auto weight_trunc = WeightTruncator(3);
    Observable obs_weight({ PauliTerm("IXYZ"), PauliTerm("IIII") });
    obs_weight.truncate(weight_trunc); // obs_weight now only contains the "IIII" term
    //! [weight_truncator]

    //! [never_truncator]
    // A truncator that does nothing
    auto never_trunc = NeverTruncator();
    Observable obs_never({ PauliTerm("IXYZ"), PauliTerm("IIII") });
    obs_never.truncate(never_trunc); // obs_never is unchanged
    //! [never_truncator]

    //! [combine_truncators]
    // Combine multiple truncators
    auto combined = combine_truncators(CoefficientTruncator<>(0.1f), WeightTruncator(3));
    Observable obs_combined({ PauliTerm("IXYZ", 0.5f), PauliTerm("IIII", 0.05f) });
    obs_combined.truncate(combined); // Both terms are removed
    //! [combine_truncators]
}

TEST(documentation, Truncator) { truncate_snippets(); }
