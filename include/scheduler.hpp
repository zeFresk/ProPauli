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

/**
 * @brief Holds the state of the simulation at a given point in time.
 *
 * This struct tracks various metrics during a circuit simulation, such as the
 * number of gates applied, the history of observable sizes, and the results
 * of compression operations (merging and truncation). This information is used
 * by `SchedulingPolicy` objects to make intelligent decisions about when to

 * apply these potentially costly optimizations.
 */
struct SimulationState {
    private:
	std::size_t nb_gates_applied;
	std::size_t nb_splitting_gates_applied;
	std::size_t nb_splitting_gates_left;
	std::vector<std::pair<OperationType, std::size_t>> nb_terms_history;
	std::vector<std::pair<std::size_t, CompressionResult>> merge_history;
	std::vector<std::pair<std::size_t, CompressionResult>> truncate_history;

    public:
	/**
	 * @brief Constructs a SimulationState.
	 * @param splitting_gates_left The initial number of splitting gates in the circuit.
	 */
	SimulationState(std::size_t splitting_gates_left)
		: nb_gates_applied(0), nb_splitting_gates_applied(0), nb_splitting_gates_left(splitting_gates_left) {}
	SimulationState(SimulationState const&) = delete;
	SimulationState(SimulationState&&) = default;
	SimulationState& operator=(SimulationState const&) = delete;
	SimulationState& operator=(SimulationState&&) = default;

	/** @brief Registers the application of a basic (non-splitting) gate. */
	void register_basic_gate(std::size_t nb_terms) {
		nb_gates_applied++;
		nb_terms_history.emplace_back(OperationType::BasicGate, nb_terms);
	}

	/** @brief Registers the application of a splitting gate. */
	void register_splitting_gate(std::size_t nb_terms) {
		nb_gates_applied++;
		nb_splitting_gates_applied++;
		nb_terms_history.emplace_back(OperationType::SplittingGate, nb_terms);
	}

	/** @brief Registers a merge operation. */
	void register_merge(CompressionResult const& result) {
		nb_terms_history.emplace_back(OperationType::Merge, result.nb_terms_after());
		merge_history.emplace_back(nb_terms_history.size() - 1, result);
	}

	/** @brief Registers a truncate operation. */
	void register_truncate(CompressionResult const& result) {
		nb_terms_history.emplace_back(OperationType::Truncate, result.nb_terms_after());
		merge_history.emplace_back(nb_terms_history.size() - 1, result);
	}

	/** @brief Gets the total number of gates applied so far. */
	std::size_t get_nb_gates_applied() const { return nb_gates_applied; }
	/** @brief Gets the number of splitting gates applied so far. */
	std::size_t get_nb_splitting_gates_applied() const { return nb_splitting_gates_applied; }
	/** @brief Gets the number of splitting gates remaining in the circuit. */
	std::size_t get_nb_splitting_gates_left() const { return nb_splitting_gates_left; }
	/** @brief Gets the history of observable sizes after each operation. */
	decltype(nb_terms_history) const& get_terms_history() const { return nb_terms_history; }
	/** @brief Gets the history of merge operations. */
	decltype(merge_history) const& get_merge_history() const { return merge_history; }
	/** @brief Gets the history of truncate operations. */
	decltype(truncate_history) const& get_truncate_history() const { return truncate_history; }
};

/**
 * @brief An abstract base class for defining scheduling policies.
 *
 * Scheduling policies determine when to apply optimizations like merging and truncation
 * during the simulation. Users can implement their own policies by inheriting from this class.
 */
struct SchedulingPolicy {
	virtual ~SchedulingPolicy() {}

	/**
	 * @brief Determines whether an optimization should be applied.
	 * @param state The current state of the simulation.
	 * @param op_type The type of the current operation being processed.
	 * @param timing Whether the check is happening before or after the operation.
	 * @return True if the optimization should be applied, false otherwise.
	 */
	virtual bool should_apply(SimulationState const& state, OperationType op_type, Timing timing) = 0;
};

/**
 * @brief A policy that never applies an optimization.
 */
struct NeverPolicy : SchedulingPolicy {
	NeverPolicy();
	bool should_apply(SimulationState const& state, OperationType op_type, Timing timing) override;
};

/**
 * @brief A policy that applies an optimization just before every splitting gate.
 */
struct AlwaysBeforeSplittingPolicy : SchedulingPolicy {
	AlwaysBeforeSplittingPolicy();
	bool should_apply(SimulationState const& state, OperationType op_type, Timing timing) override;
};

/**
 * @brief A policy that applies an optimization just after every splitting gate.
 */
struct AlwaysAfterSplittingPolicy : SchedulingPolicy {
	AlwaysAfterSplittingPolicy();
	bool should_apply(SimulationState const& state, OperationType op_type, Timing timing) override;
};

#endif
