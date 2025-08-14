#include "circuit.hpp"

#include "gtest/gtest.h"
#include "scheduler.hpp"

TEST(SimulationState, InitialState) {
	SimulationState state(5); // 5 splitting gates
	EXPECT_EQ(state.get_nb_gates_applied(), 0);
	EXPECT_EQ(state.get_nb_splitting_gates_applied(), 0);
	EXPECT_EQ(state.get_nb_splitting_gates_left(), 5);
	EXPECT_TRUE(state.get_terms_history().empty());
	EXPECT_TRUE(state.get_merge_history().empty());
	EXPECT_TRUE(state.get_truncate_history().empty());
}

TEST(SimulationState, RegisterBasicGate) {
	SimulationState state(5);
	state.register_basic_gate(10); // 10 terms in observable
	EXPECT_EQ(state.get_nb_gates_applied(), 1);
	EXPECT_EQ(state.get_nb_splitting_gates_applied(), 0);
	ASSERT_EQ(state.get_terms_history().size(), 1);
	EXPECT_EQ(state.get_terms_history()[0].first, OperationType::BasicGate);
	EXPECT_EQ(state.get_terms_history()[0].second, 10);
}

TEST(SimulationState, RegisterSplittingGate) {
	SimulationState state(5);
	state.register_splitting_gate(20); // 20 terms after split
	EXPECT_EQ(state.get_nb_gates_applied(), 1);
	EXPECT_EQ(state.get_nb_splitting_gates_applied(), 1);
	ASSERT_EQ(state.get_terms_history().size(), 1);
	EXPECT_EQ(state.get_terms_history()[0].first, OperationType::SplittingGate);
	EXPECT_EQ(state.get_terms_history()[0].second, 20);
}

TEST(SimulationState, RegisterMerge) {
	SimulationState state(5);
	CompressionResult result{ 20, 5 }; // 20 terms before, 5 removed
	state.register_merge(result);
	ASSERT_EQ(state.get_terms_history().size(), 1);
	EXPECT_EQ(state.get_terms_history()[0].first, OperationType::Merge);
	EXPECT_EQ(state.get_terms_history()[0].second, 15); // 15 terms after
	ASSERT_EQ(state.get_merge_history().size(), 1);
	EXPECT_EQ(state.get_merge_history()[0].second.nb_terms_before, 20);
}

TEST(SimulationState, RegisterTruncate) {
	SimulationState state(5);
	CompressionResult result{ 15, 10 }; // 15 terms before, 10 removed
	state.register_truncate(result);
	ASSERT_EQ(state.get_terms_history().size(), 1);
	EXPECT_EQ(state.get_terms_history()[0].first, OperationType::Truncate);
	EXPECT_EQ(state.get_terms_history()[0].second, 5); // 5 terms after
	ASSERT_EQ(state.get_truncate_history().size(), 1);
	EXPECT_EQ(state.get_truncate_history()[0].second.nb_terms_before, 15);
}

class AllGettersPolicy : public SchedulingPolicy {
    public:
	mutable int times_applied = 0;

	bool should_apply(SimulationState const& state, OperationType op_type, Timing timing) override {
		// We only want to apply this policy *before* a splitting gate.
		if (op_type != OperationType::SplittingGate || timing != Timing::Before) {
			return false;
		}

		auto const& ht = state.get_terms_history();
		[[maybe_unused]] auto const& htrunc = state.get_truncate_history();
		[[maybe_unused]] auto const& hmerge = state.get_merge_history();

		bool conditions_met =
			// 1. Have at least 3 gates been applied in total?
			state.get_nb_gates_applied() >= 3 &&
			// 2. Has at least one splitting gate already been applied?
			state.get_nb_splitting_gates_applied() >= 1 &&
			// 3. Are there still splitting gates left to apply in the circuit?
			state.get_nb_splitting_gates_left() > 0 &&
			// 4. Does the observable currently have more than 2 terms?
			!ht.empty() && ht.back().second > 2;

		if (conditions_met) {
			times_applied++;
			return true;
		}

		return false;
	}
};

TEST(Circuit, AllGettersPolicy_TriggersCorrectly) {
	auto policy = std::make_shared<AllGettersPolicy>();
	Circuit qc(2, std::make_shared<NeverTruncator>(), {}, policy, std::make_shared<NeverPolicy>());

	qc.add_operation("H", 0);
	qc.add_operation("Rz", 0, 0.1f); // Gate 6 (splitting gate 3)
	qc.add_operation("H", 0); // Gate 5
	qc.add_operation("Rz", 0, 0.1f); // Gate 4 (splitting gate 2)
	qc.add_operation("CX", 0, 1); // Gate 3
	qc.add_operation("Rz", 1, 0.2f); // Gate 2 (Splitting Gate 1)
	qc.add_operation("H", 1); // Gate 1
	qc.add_operation("Rz", 1, 0.2f); // Gate 2 (Splitting Gate 1)
	qc.add_operation("H", 0); // Gate 1

	Observable obs("XX");

	// Run the circuit.
	qc.run(obs);

	EXPECT_EQ(policy->times_applied, 2);
}

TEST(Circuit, AllGettersPolicy_DoesNotTrigger) {
	auto policy = std::make_shared<AllGettersPolicy>();
	Circuit qc(2, std::make_shared<NeverTruncator>(), {}, policy, std::make_shared<NeverPolicy>());

	// This circuit is too short to meet the ">= 3 gates applied" condition.
	qc.add_operation("Rz", 0, 0.1f); // Policy is checked here, but state.get_nb_gates_applied() is 0.
	qc.add_operation("H", 0);

	Observable obs("XX");

	qc.run(obs);

	EXPECT_EQ(policy->times_applied, 0);
}
