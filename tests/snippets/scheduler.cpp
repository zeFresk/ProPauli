#include "scheduler.hpp"
#include "circuit.hpp"

#include "gtest/gtest.h"

void scheduler_snippets() {
    //! [scheduling_policy]
    // Policies are passed to the Circuit constructor to control optimization.
    // This circuit will merge identical Pauli terms only after a splitting gate is applied.
    Circuit qc(4,
        std::make_unique<NeverTruncator>(),
        {},
        std::make_unique<AlwaysAfterSplittingPolicy>(), // Merge policy
        std::make_unique<NeverPolicy>()               // Truncate policy
    );
    //! [scheduling_policy]
}

TEST(documentation, scheduler) { scheduler_snippets(); }

