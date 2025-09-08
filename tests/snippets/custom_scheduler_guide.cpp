#include "scheduler.hpp"
#include "circuit.hpp"
#include "observable.hpp"
#include <iostream>

//! [custom_scheduler_class]
// A custom policy that merges after every 2 splitting gates have been applied.
class MergeEveryTwoSplitsPolicy : public SchedulingPolicy {
    public:
	MergeEveryTwoSplitsPolicy() = default;
	bool should_apply(SimulationState const& state, OperationType op_type, Timing timing) override {
		// We only want to merge after a splitting gate is applied
		if (op_type != OperationType::SplittingGate || timing != Timing::After) {
			return false;
		}

		// Check if the number of applied splitting gates is a multiple of 2
		return state.get_nb_splitting_gates_applied() % 2 == 0;
	}
};
//! [custom_scheduler_class]

void custom_scheduler_example() {
	//! [custom_scheduler_usage]
	Circuit qc(4, std::make_shared<NeverTruncator<>>(), {},
		   std::make_shared<MergeEveryTwoSplitsPolicy>(), // Use our custom merge policy
		   std::make_shared<NeverPolicy>());

	// Add 4 splitting gates
	qc.add_operation("Rz", 0, 0.5f); // No merge
	qc.add_operation("Rz", 1, 0.5f); // Merge will happen here
	qc.add_operation("Rz", 2, 0.5f); // No merge
	qc.add_operation("Rz", 3, 0.5f); // Merge will happen here

	auto result = qc.run(Observable("XXXX"));
	std::cout << "Simulation with custom scheduler finished." << std::endl;
	//! [custom_scheduler_usage]
}
