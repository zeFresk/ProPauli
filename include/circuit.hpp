#ifndef PP_CIRCUIT_HPP
#define PP_CIRCUIT_HPP

/**
 * @file circuit.hpp
 * @brief Provides the main user-facing Circuit class for quantum circuit simulation.
 *
 * This file defines the core components for building and simulating quantum circuits
 * in the Heisenberg picture. It includes the `Circuit` class, which manages a sequence
 * of quantum operations, and supporting data structures and type mappings required for
 * the simulation's internal logic.
 */

#include "noise_model.hpp"
#include "observable.hpp"
#include "pauli.hpp"
#include "policy.hpp"
#include "scheduler.hpp"
#include "symbolic/coefficient.hpp"
#include "truncate.hpp"
#include "quantum_op.hpp"

#include <algorithm>
#include <iterator>
#include <memory>
#include <ranges>
#include <string_view>
#include <unordered_map>
#include <utility>
#include <vector>

/**
 * @brief Represents a quantum circuit and provides a high-level simulation interface.
 * @tparam Coefficient_t The numeric type for coefficients (e.g., float, double). Must be a floating-point type.
 *
 * The Circuit class is the main user-facing interface for building and simulating
 * quantum circuits. It allows users to add a sequence of quantum operations and then
 * run a simulation to compute the resulting observable and its expectation value.
 *
 * This class manages the complexities of the simulation, including the application
 * of gates, noise, truncation, and merging, based on the provided policies. The simulation
 * is performed in the Heisenberg picture, where the observable is evolved backward
 * through the circuit.
 */
template <typename Coefficient_t = coeff_t>
class Circuit {
    public:
	/**
	 * @brief Constructs a new Circuit.
	 * @tparam TruncatorPtr A type convertible to a shared pointer to a Truncator. This is typically auto-deduced.
	 * @param nb_qubits The number of qubits in the circuit.
	 * @param truncator A shared pointer to a truncator object that defines how to simplify the observable.
	 *        The default `NeverTruncator` performs no truncation, which is only suitable for small circuits.
	 * @param noise_model A noise model to apply to the gates. By default, an ideal (noiseless) model is used.
	 * @param merge_policy A policy defining when to merge identical Pauli terms. The default policy merges
	 *        after any gate that can increase the number of terms.
	 * @param truncate_policy A policy defining when to apply the truncator. The default policy truncates
	 *        after any gate that can increase the number of terms.
	 *
	 * @snippet tests/snippets/circuit.cpp basic_circuit
	 * @snippet tests/snippets/circuit.cpp large_circuit_truncation
	 * @snippet tests/snippets/scheduler.cpp scheduling_policy
	 */
	template <typename TruncatorPtr = std::shared_ptr<Truncator<Coefficient_t>>>
	Circuit(unsigned nb_qubits, TruncatorPtr truncator = std::make_shared<NeverTruncator<Coefficient_t>>(),
		NoiseModel<Coefficient_t> const& noise_model = {},
		std::shared_ptr<SchedulingPolicy> merge_policy = std::make_shared<AlwaysAfterSplittingPolicy>(),
		std::shared_ptr<SchedulingPolicy> truncate_policy = std::make_shared<AlwaysAfterSplittingPolicy>())
		: nb_qubits_{ nb_qubits }, nb_splitting_gates_{ 0 }, merge_policy_{ std::move(merge_policy) },
		  truncate_policy_{ std::move(truncate_policy) }, truncator_{ std::move(truncator) }, noise_model_(noise_model) {}

	Circuit(Circuit const&) = delete;
	Circuit& operator=(Circuit const&) = delete;

	Circuit(Circuit&&) noexcept = default;
	Circuit& operator=(Circuit&&) = default;

	/**
	 * @brief Type alias for the Observable used by this circuit instance.
	 */
	using O_t = Observable<Coefficient_t>;

	/**
	 * @brief Gets the number of qubits in the circuit.
	 * @return The number of qubits.
	 */
	unsigned nb_qubits() const { return nb_qubits_; }

	/**
	 * @brief Adds a quantum operation to the circuit by name.
	 * @tparam T Parameter pack for the arguments of the operation.
	 * @param op The name of the operation (e.g., "H", "CX", "Rz"). The name is case-insensitive.
	 * @param args The arguments for the operation. For single-qubit gates, this is `(unsigned qubit)`.
	 *             For two-qubit gates, `(unsigned control, unsigned target)`. For parameterized gates,
	 *             `(unsigned qubit, Real angle)`, etc.
	 * @pre Qubit indices provided in `args` must be less than `nb_qubits()`.
	 *
	 * @note This is a convenience function that looks up the `QGate` enum from a string and forwards
	 *       to the primary `add_operation` overload. It is intended for ease of use in user-facing code.
	 * @see add_operation(QGate, T&&...)
	 */
	template <typename... T>
	void add_operation(std::string op, T&&... args) {
		using enum QGate;
		static std::unordered_map<std::string, QGate> qg_map = { { "I", I },
									 { "X", X },
									 { "Y", Y },
									 { "Z", Z },
									 { "H", H },
									 { "CX", Cx },
									 { "RZ", Rz },
									 { "AMPLITUDEDAMPING", AmplitudeDamping },
									 { "DEPOLARIZING", Depolarizing },
									 { "DEPHASING", Dephasing } };

		std::transform(op.begin(), op.end(), op.begin(), [](auto c) { return std::toupper(c); });
		auto qg = qg_map.at(op);
		add_operation(qg, std::forward<T>(args)...);
	}

	/**
	 * @brief Adds a quantum operation to the circuit using its enum type.
	 * @tparam T Parameter pack for the arguments of the operation.
	 * @param g The `QGate` enum representing the operation.
	 * @param args The arguments for the operation, such as qubit indices or rotation angles.
	 * @pre Qubit indices provided in `args` must be less than `nb_qubits()`.
	 *
	 * This is the primary method for adding operations to the circuit. It dispatches
	 * to the correct internal implementation based on the gate type and arguments, and
	 * applies any noise specified by the `NoiseModel` after the ideal operation.
	 */
	template <typename... T>
	void add_operation(QGate g, T&&... args) {
		check_args(args...); // copy needed here
		QuantumOp<Coefficient_t> qop(g, std::forward<T>(args)...);
		nb_splitting_gates_ += std::to_underlying(qop.operation_type());
		operations_.push_back(std::move(qop));
		noise_model_.apply_noise_after(*this, g, std::forward<T>(args)...);
	}

	void h(unsigned qubit) { add_operation(QGate::H, qubit); }
	void cx(unsigned control, unsigned target) { add_operation(QGate::Cx, control, target); }
	void i(unsigned qubit) { add_operation(QGate::I, qubit); }
	void x(unsigned qubit) { add_operation(QGate::X, qubit); }
	void y(unsigned qubit) { add_operation(QGate::Y, qubit); }
	void z(unsigned qubit) { add_operation(QGate::Z, qubit); }
	void rz(unsigned qubit, Coefficient_t const& coeff) { add_operation(QGate::Rz, qubit, coeff); }

	/**
	 * @brief Runs the simulation on the circuit.
	 * @param target_observable The initial observable to be propagated backward through the circuit.
	 * @pre The number of qubits in `target_observable` must match `nb_qubits()`.
	 * @return The final, evolved observable after applying all circuit operations in reverse.
	 *
	 * The `run` method executes the simulation by applying each gate in the circuit
	 * to the observable in reverse order (Heisenberg picture). It returns the final
	 * observable, from which the expectation value can be calculated. If the observable
	 * becomes empty (representing the maximally mixed state, proportional to identity),
	 * the simulation may terminate early.
	 *
	 * @see Observable::expectation_value()
	 * @snippet tests/snippets/circuit.cpp basic_circuit
	 */
	template <typename ExecutionPolicy = DefaultExecutionPolicy>
	Observable<Coefficient_t> run(Observable<Coefficient_t> const& target_observable, ExecutionPolicy&& policy = ExecutionPolicy{}) {
		if (target_observable.nb_qubits() != nb_qubits()) {
			throw std::invalid_argument("Number of qubits of the circuit doesn't match observable.");
		}

		auto obs = target_observable;
		SimulationState state(nb_splitting_gates());

		for (auto const& qop : std::ranges::reverse_view{ operations_ }) {
			auto op_t = qop.operation_type();
			schedule(state, obs, Timing::Before, op_t, policy);

			if (obs.size() == 0) { // maximally mixed state
				break;
			}
			qop(obs, policy);
			if (op_t == OperationType::BasicGate) {
				state.register_basic_gate(obs.size());
			} else if (op_t == OperationType::SplittingGate) {
				state.register_splitting_gate(obs.size());
			}

			schedule(state, obs, Timing::After, op_t, policy);
		}

		if (obs.size() > 0) {
			return obs;
		} else {
			return Observable<Coefficient_t>(std::string(target_observable[0].size(), 'I'), 0.f);
		}
	}

	template <IsNotVariant ExecutionPolicy = DefaultExecutionPolicy>
	std::vector<Observable<Coefficient_t>> run(std::vector<Observable<Coefficient_t>> const& target_observables,
						   ExecutionPolicy&& policy = ExecutionPolicy{}) {
		using Policy_t = std::remove_cvref_t<decltype(policy)>;
		return Policy_t::circuit_batched_run(*this, target_observables);
	}

	template <typename Input, IsVariant DynamicPolicy>
	auto run(Input&& input, DynamicPolicy&& rpol) {
		return std::visit([input = std::forward<Input>(input),
				   this](auto const& pol) { return this->run(std::forward<Input>(input), pol); },
				  rpol);
	}

	template <typename ExecutionPolicy = DefaultExecutionPolicy>
	std::vector<Coefficient_t> expectation_value(std::vector<Observable<Coefficient_t>> const& target_observables,
								 ExecutionPolicy&& policy = ExecutionPolicy{}) {
		using Policy_t = std::remove_cvref_t<decltype(policy)>;
		return Policy_t::circuit_batched_evs(*this, target_observables);
	}

	template <typename ExecutionPolicy = DefaultExecutionPolicy>
	Coefficient_t expectation_value(Observable<Coefficient_t> const& target_observable, ExecutionPolicy&& policy = ExecutionPolicy{}) {
		return run(target_observable, std::forward<ExecutionPolicy>(policy)).expectation_value();
	}

	template <typename Input, IsVariant DynamicPolicy>
	auto expectation_value(Input&& input, DynamicPolicy&& rpol) {
		return std::visit([input = std::forward<Input>(input),
				   this](auto const& pol) { return this->expectation_value(std::forward<Input>(input), pol); },
				  rpol);
	}

	/**
	 * @brief Counts the number of gates in the circuit that can split an observable.
	 * @return The total number of splitting gates (e.g., Rz, AmplitudeDamping).
	 *
	 * Splitting gates are operations that can increase the number of Pauli terms in the
	 * observable, making the simulation more complex. This count is used to initialize
	 * the `SimulationState`.
	 */
	std::size_t nb_splitting_gates() const { return nb_splitting_gates_; }

	/**
	 * @brief Clears all operations from the circuit.
	 *
	 * Resets the circuit to an empty state, ready to be populated with new operations.
	 * The number of qubits and configured policies are not affected.
	 */
	void reset() { operations_.clear(); }

	/**
	 * @brief Sets a new truncator for the circuit.
	 * @param truncator A shared pointer to the new truncator.
	 * @see Truncator
	 */
	void set_truncator(std::shared_ptr<Truncator<Coefficient_t>> truncator) { truncator_ = std::move(truncator); }

	/**
	 * @brief Sets a new policy for when to merge Pauli terms.
	 * @param policy A shared pointer to the new merge policy.
	 * @see SchedulingPolicy
	 */
	void set_merge_policy(std::shared_ptr<SchedulingPolicy> policy) { merge_policy_ = std::move(policy); }

	/**
	 * @brief Sets a new policy for when to truncate the observable.
	 * @param policy A shared pointer to the new truncate policy.
	 * @see SchedulingPolicy
	 */
	void set_truncate_policy(std::shared_ptr<SchedulingPolicy> policy) { truncate_policy_ = std::move(policy); }

    private:
	std::vector<QuantumOp<Coefficient_t>> operations_; ///< Sequence of quantum operations in the circuit.
	unsigned nb_qubits_; ///< The number of qubits in the circuit.
	unsigned nb_splitting_gates_;
	std::shared_ptr<SchedulingPolicy> merge_policy_; ///< Policy for triggering Pauli term merging.
	std::shared_ptr<SchedulingPolicy> truncate_policy_; ///< Policy for triggering observable truncation.
	std::shared_ptr<Truncator<Coefficient_t>> truncator_; ///< The truncator used to simplify the observable.
	NoiseModel<Coefficient_t> noise_model_; ///< The noise model applied to the circuit.

	/**
	 * @brief Applies merge and truncate policies based on the current simulation state.
	 * @param state The current state of the simulation.
	 * @param obs The observable to be potentially modified.
	 * @param timing Specifies whether this is before or after a gate application.
	 * @param op_t The type of the gate that was just applied (or is about to be).
	 */
	template <typename ExecutionPolicy>
	void schedule(SimulationState& state, Observable<Coefficient_t>& obs, Timing timing, OperationType op_t, ExecutionPolicy&& policy) {
		if (merge_policy_->should_apply(state, op_t, timing)) {
			auto before_nb = obs.size();
			auto removed = obs.merge(policy);
			state.register_merge(CompressionResult{ before_nb, removed });
		}

		if (truncate_policy_->should_apply(state, op_t, timing)) {
			auto before_nb = obs.size();
			auto removed = obs.truncate(*truncator_);
			state.register_truncate(CompressionResult{ before_nb, removed });
		}
	}

	void check_args(unsigned qubit) { check_qubit(qubit); }

	template <typename Integer, std::enable_if_t<std::is_integral_v<Integer>, bool> = true>
	void check_args(unsigned control, Integer target) {
		check_qubit(control);
		check_qubit(target);
		if (control == static_cast<unsigned>(target)) {
			throw std::invalid_argument("control must be != from target for 2 qubits gates.");
		}
	}

	template <typename Real>
	void check_args(unsigned qubit, [[maybe_unused]] Real&& arg)
		requires(std::is_floating_point_v<std::remove_cvref_t<Real>> || Symbolic<std::remove_cvref_t<Real>>) {
		check_args(qubit);
	}

	/**
	 * @brief Checks if a qubit index is valid for this circuit.
	 * @param qubit The index to check.
	 * @throw std::invalid_argument if the index is out of range.
	 */
	void check_qubit(unsigned qubit) const {
		if (qubit >= nb_qubits()) {
			throw std::invalid_argument("Qubit index out of range for this circuit.");
		}
	}
};
#endif
