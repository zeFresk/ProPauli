#ifndef PP_SCHEDULER_HPP
#define PP_SCHEDULER_HPP

#include <cstddef>
#include <iostream>
#include <memory>
#include <vector>

enum class OperationType { BasicGate, SplittingGate, Merge, Truncate };
enum class Timing { Before, After };

struct CompressionResult {
	std::size_t nb_terms_before;
	std::size_t nb_terms_merged;
	std::size_t nb_terms_after() const noexcept { return nb_terms_before - nb_terms_merged; }
};

struct SimulationState {
    private:
	std::size_t nb_gates_applied;
	std::size_t nb_splitting_gates_applied;
	std::size_t nb_splitting_gates_left;
	std::vector<std::pair<OperationType, std::size_t>> nb_terms_history;
	std::vector<std::pair<std::size_t, CompressionResult>> merge_history;
	std::vector<std::pair<std::size_t, CompressionResult>> truncate_history;

    public:
	SimulationState(std::size_t splitting_gates_left)
		: nb_gates_applied(0), nb_splitting_gates_applied(0), nb_splitting_gates_left(splitting_gates_left) {}
	SimulationState(SimulationState const&) = delete;
	SimulationState(SimulationState&&) = default;
	SimulationState& operator=(SimulationState const&) = delete;
	SimulationState& operator=(SimulationState&&) = default;

	void register_basic_gate(std::size_t nb_terms) {
		nb_gates_applied++;
		nb_terms_history.emplace_back(OperationType::BasicGate, nb_terms);
	}

	void register_splitting_gate(std::size_t nb_terms) {
		nb_gates_applied++;
		nb_splitting_gates_applied++;
		nb_terms_history.emplace_back(OperationType::SplittingGate, nb_terms);
	}

	void register_merge(CompressionResult const& result) {
		nb_terms_history.emplace_back(OperationType::Merge, result.nb_terms_after());
		merge_history.emplace_back(nb_terms_history.size() - 1, result);
	}

	void register_truncate(CompressionResult const& result) {
		nb_terms_history.emplace_back(OperationType::Truncate, result.nb_terms_after());
		merge_history.emplace_back(nb_terms_history.size() - 1, result);
	}

	std::size_t get_nb_gates_applied() const { return nb_gates_applied; }
	std::size_t get_nb_splitting_gates_applied() const { return nb_splitting_gates_applied; }
	std::size_t get_nb_splitting_gates_left() const { return nb_splitting_gates_left; }
	decltype(nb_terms_history) const& get_terms_history() const { return nb_terms_history; }
	decltype(merge_history) const& get_merge_history() const { return merge_history; }
	decltype(truncate_history) const& get_truncate_history() const { return truncate_history; }
};

struct SchedulingPolicy {
	virtual ~SchedulingPolicy() {}
	virtual bool should_apply(SimulationState const& state, OperationType op_type, Timing timing) = 0;
};

struct NeverPolicy : SchedulingPolicy {
	NeverPolicy();
	bool should_apply(SimulationState const& state, OperationType op_type, Timing timing) override;
};

struct AlwaysBeforeSplittingPolicy : SchedulingPolicy {
	AlwaysBeforeSplittingPolicy();
	bool should_apply(SimulationState const& state, OperationType op_type, Timing timing) override;
};

struct AlwaysAfterSplittingPolicy : SchedulingPolicy {
	AlwaysAfterSplittingPolicy();
	bool should_apply(SimulationState const& state, OperationType op_type, Timing timing) override;
};

#endif
