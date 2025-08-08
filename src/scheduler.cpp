#include "scheduler.hpp"

AlwaysBeforeSplittingPolicy::AlwaysBeforeSplittingPolicy() {}

bool AlwaysBeforeSplittingPolicy::should_apply([[maybe_unused]] SimulationState const& state, OperationType op_type,
					       Timing timing) {
	return timing == Timing::Before && op_type == OperationType::SplittingGate;
}

AlwaysAfterSplittingPolicy::AlwaysAfterSplittingPolicy() {}

bool AlwaysAfterSplittingPolicy::should_apply([[maybe_unused]] SimulationState const& state, OperationType op_type,
					      Timing timing) {
	return timing == Timing::After && op_type == OperationType::SplittingGate;
}

NeverPolicy::NeverPolicy() {}

bool NeverPolicy::should_apply([[maybe_unused]] SimulationState const& state, [[maybe_unused]] OperationType op_type,
			       [[maybe_unused]] Timing timing) {
	return false;
}
