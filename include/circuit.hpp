#ifndef PP_CIRCUIT_HPP
#define PP_CIRCUIT_HPP

#include "noise_model.hpp"
#include "observable.hpp"
#include "pauli.hpp"
#include "scheduler.hpp"
#include "truncate.hpp"

#include <algorithm>
#include <iterator>
#include <memory>
#include <ranges>
#include <string_view>
#include <unordered_map>
#include <utility>
#include <vector>

template <typename F>
struct QuantumOp {
	OperationType op_t;
	QGate gate;
	F func;

	QuantumOp(OperationType op, QGate qg, F&& f) : op_t(op), gate(qg), func(std::move(f)) {}
};

static std::unordered_map<QGate, OperationType> opt_map = {
	{ QGate::I, OperationType::BasicGate },
	{ QGate::X, OperationType::BasicGate },
	{ QGate::Y, OperationType::BasicGate },
	{ QGate::Z, OperationType::BasicGate },
	{ QGate::H, OperationType::BasicGate },
	{ QGate::Cx, OperationType::BasicGate },
	{ QGate::Rz, OperationType::SplittingGate },
	{ QGate::AmplitudeDamping, OperationType::SplittingGate },
	{ QGate::Depolarizing, OperationType::BasicGate },
	{ QGate::Dephasing, OperationType::BasicGate },
};

static constexpr std::array<std::pair<QGate, Pauli_gates>, 4> pg_map = { {
	{ QGate::I, Pauli_gates::I },
	{ QGate::X, Pauli_gates::X },
	{ QGate::Y, Pauli_gates::Y },
	{ QGate::Z, Pauli_gates::Z },
} };

static constexpr std::array<std::pair<QGate, Clifford_Gates_1Q>, 1> clifford_map = { {
	{ QGate::H, Clifford_Gates_1Q::H },
} };

static constexpr std::array<std::pair<QGate, UnitalNoise>, 2> unoise_map = { {
	{ QGate::Depolarizing, UnitalNoise::Depolarizing },
	{ QGate::Dephasing, UnitalNoise::Dephasing },
} };

template <typename T, typename Arr>
inline auto in_array(T&& v, Arr const& arr) {
	return std::find_if(std::cbegin(arr), std::cend(arr), [&](auto&& e) { return e.first == v; });
}

/**
 * @brief Represents a quantum circuit and provides a high-level simulation interface.
 * @tparam Coefficient_t The numeric type for coefficients (e.g., float, double).
 *
 * The Circuit class is the main user-facing interface for building and simulating
 * quantum circuits. It allows users to add a sequence of quantum operations and then
 * run a simulation to compute the resulting observable and its expectation value.
 *
 * This class manages the complexities of the simulation, including the application
 * of gates, noise, truncation, and merging, based on the provided policies.
 */
template <typename Coefficient_t = coeff_t>
class Circuit {
    public:
	/**
	 * @brief Constructs a new Circuit.
	 * @tparam TruncatorPtr Type convertible to a shared_ptr of Truncators, should be deduced
	 * @param nb_qubits The number of qubits in the circuit.
	 * @param truncator A shared_ptr to a truncator object that defines how to simplify the observable.
	 * @param noise_model A noise model to apply to the gates.
	 * @param merge_policy A policy defining when to merge identical Pauli terms.
	 * @param truncate_policy A policy defining when to apply the truncator.
	 *
	 * @snippet tests/snippets/circuit.cpp basic_circuit
	 * @snippet tests/snippets/circuit.cpp large_circuit_truncation
	 * @snippet tests/snippets/scheduler.cpp scheduling_policy
	 */
	template <typename TruncatorPtr = std::shared_ptr<Truncator<Coefficient_t>>>
	Circuit(unsigned nb_qubits, TruncatorPtr truncator = std::make_shared<NeverTruncator>(),
		NoiseModel<Coefficient_t> const& noise_model = {},
		std::shared_ptr<SchedulingPolicy> merge_policy = std::make_shared<AlwaysAfterSplittingPolicy>(),
		std::shared_ptr<SchedulingPolicy> truncate_policy = std::make_shared<AlwaysAfterSplittingPolicy>())
		: nb_qubits_{ nb_qubits }, merge_policy_{ std::move(merge_policy) },
		  truncate_policy_{ std::move(truncate_policy) }, truncator_{ std::move(truncator) },
		  noise_model_(noise_model) {}

	Circuit(Circuit const&) = delete;
	Circuit& operator=(Circuit const&) = delete;

	Circuit(Circuit&&) noexcept = default;
	Circuit& operator=(Circuit&&) = default;

	using O_t = Observable<Coefficient_t>;

	/**
	 * @brief Gets the number of qubits in the circuit.
	 * @return The number of qubits.
	 */
	unsigned nb_qubits() const { return nb_qubits_; }

	/**
	 * @brief Adds a quantum operation to the circuit by name.
	 * @tparam T Parameter pack for the arguments of the operation.
	 * @param op The name of the operation (e.g., "H", "CX", "Rz"). Case-insensitive.
	 * @param args The arguments for the operation, such as qubit indices or rotation angles.
	 *
	 * @note This is a convenience function that looks up the `QGate` enum from a string.
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
	 *
	 * This is the primary method for adding operations inside the library. It dispatches
	 * to the correct internal implementation based on the gate type and arguments.
	 */
	template <typename... T>
	void add_operation(QGate g, T&&... args) {
		add_operation_internal(g, std::forward<T>(args)...);

		noise_model_.apply_noise_after(*this, g, std::forward<T>(args)...);
	}

	/**
	 * @brief Runs the simulation on the circuit.
	 * @param target_observable The initial observable to be propagated backward through the circuit.
	 * @return The final, evolved observable after applying all circuit operations in reverse.
	 *
	 * The `run` method executes the simulation by applying each gate in the circuit
	 * to the observable in reverse order (Heisenberg picture). It returns the final
	 * observable, from which the expectation value can be calculated.
	 * @see Observable::expectation_value()
	 */
	Observable<Coefficient_t> run(Observable<Coefficient_t> const& target_observable) {
		auto obs = target_observable;
		SimulationState state(nb_splitting_gates());
		for (auto const& qop : std::ranges::reverse_view{ operations_ }) {
			schedule(state, obs, Timing::Before, qop.op_t);

			if (obs.size() == 0) { // maximally mixed state
				break;
			}
			qop.func(obs);

			schedule(state, obs, Timing::After, qop.op_t);

			if (qop.op_t == OperationType::BasicGate) {
				state.register_basic_gate(obs.size());
			} else if (qop.op_t == OperationType::SplittingGate) {
				state.register_splitting_gate(obs.size());
			}
		}
		if (obs.size() > 0) {
			return obs;
		} else {
			return Observable<Coefficient_t>(std::string(target_observable[0].size(), 'I'), 0.f);
		}
	}

	/**
	 * @brief Counts the number of gates in the circuit that can split an observable.
	 * @return The total number of splitting gates (e.g., Rz, AmplitudeDamping).
	 *
	 * Splitting gates are operations that can increase the number of Pauli terms in the
	 * observable, making the simulation more complex.
	 */
	std::size_t nb_splitting_gates() const {
		return std::accumulate(operations_.cbegin(), operations_.cend(), 0, [](auto&& acc, auto&& op) {
			return acc + (op.op_t == OperationType::SplittingGate ? 1 : 0);
		});
	}

	/**
	 * @brief Clears all operations from the circuit.
	 */
	void reset() { operations_.clear(); }

	/**
	 * @brief Sets a new truncator for the circuit.
	 * @param truncator A unique pointer to the new truncator.
	 * @see Truncator
	 */
	void set_truncator(std::shared_ptr<Truncator<Coefficient_t>> truncator) { truncator_ = std::move(truncator); }

	/**
	 * @brief Sets a new policy for when to merge Pauli terms.
	 * @param policy A unique pointer to the new merge policy.
	 * @see SchedulingPolicy
	 */
	void set_merge_policy(std::shared_ptr<SchedulingPolicy> policy) { merge_policy_ = std::move(policy); }

	/**
	 * @brief Sets a new policy for when to truncate the observable.
	 * @param policy A unique pointer to the new truncate policy.
	 * @see SchedulingPolicy
	 */
	void set_truncate_policy(std::shared_ptr<SchedulingPolicy> policy) { truncate_policy_ = std::move(policy); }

    private:
	using Fn = std::function<void(O_t&)>;
	std::vector<QuantumOp<Fn>> operations_;
	unsigned nb_qubits_;
	std::shared_ptr<SchedulingPolicy> merge_policy_;
	std::shared_ptr<SchedulingPolicy> truncate_policy_;
	std::shared_ptr<Truncator<Coefficient_t>> truncator_;
	NoiseModel<Coefficient_t> noise_model_;

	void register_op(QGate qg, Fn&& f) {
		auto op_t = opt_map.at(qg);
		operations_.push_back(QuantumOp{ op_t, qg, std::move(f) });
	}

	void schedule(SimulationState& state, Observable<Coefficient_t>& obs, Timing timing, OperationType op_t) {
		if (merge_policy_->should_apply(state, op_t, timing)) {
			auto before_nb = obs.size();
			auto removed = obs.merge();
			state.register_merge(CompressionResult{ before_nb, removed });
		}

		if (truncate_policy_->should_apply(state, op_t, timing)) {
			auto before_nb = obs.size();
			auto removed = obs.truncate(*truncator_);
			state.register_truncate(CompressionResult{ before_nb, removed });
		}
	}

	/**
	 * @brief Adds a single-qubit gate to the circuit.
	 * @param g The gate to add (e.g., QGate::H, QGate::X).
	 * @param qubit The index of the qubit to apply the gate to.
	 * @throw std::invalid_argument if the gate is not a single-qubit gate.
	 *
	 * @snippet tests/readme.cpp basic
	 */
	void add_operation_internal(QGate g, unsigned qubit) {
		if (in_array(g, pg_map) != std::cend(pg_map)) {
			auto it = in_array(g, pg_map);
			register_op(g, [=](O_t& obs) { obs.apply_pauli(it->second, qubit); });
			return;
		} else if (in_array(g, clifford_map) != std::cend(clifford_map)) {
			auto it = in_array(g, clifford_map);
			register_op(g, [=](O_t& obs) { obs.apply_clifford(it->second, qubit); });
			return;
		} else {
			throw std::invalid_argument("Unsupported gate type with those arguments");
		}
	}

	/**
	 * @brief Adds a single-qubit gate with a real parameter to the circuit.
	 * @tparam Real A floating-point type.
	 * @param g The gate to add (e.g., QGate::Rz).
	 * @param qubit The index of the qubit to apply the gate to.
	 * @param c The real-valued parameter (e.g., rotation angle).
	 * @throw std::invalid_argument if the gate does not support a real parameter.
	 *
	 * @snippet tests/readme.cpp basic
	 */
	template <typename Real, std::enable_if_t<std::is_floating_point_v<Real>, bool> = true>
	void add_operation_internal(QGate g, unsigned qubit, Real c) {
		switch (g) {
		case QGate::Rz:
			register_op(g, [=](O_t& obs) { obs.apply_rz(qubit, c); });
			break;
		case QGate::AmplitudeDamping:
			register_op(g, [=](O_t& obs) { obs.apply_amplitude_damping(qubit, c); });
			break;
		case QGate::Dephasing:
		case QGate::Depolarizing: {
			auto it = in_array(g, unoise_map);
			register_op(g, [=](O_t& obs) { obs.apply_unital_noise(it->second, qubit, c); });
		} break;
		default:
			throw std::invalid_argument("Unsupported gate type with those arguments");
		}
	}

	/**
	 * @brief Adds a two-qubit gate to the circuit.
	 * @tparam Integer An integral type.
	 * @param g The gate to add (e.g., QGate::Cx).
	 * @param control The index of the control qubit.
	 * @param target The index of the target qubit.
	 * @throw std::invalid_argument if the gate is not a two-qubit gate.
	 *
	 * @snippet tests/readme.cpp basic
	 */
	template <typename Integer, std::enable_if_t<std::is_integral_v<Integer>, bool> = true>
	void add_operation_internal(QGate g, unsigned control, Integer target) {
		switch (g) {
		case QGate::Cx:
			register_op(g, [=](O_t& obs) { obs.apply_cx(control, target); });
			break;
		default:
			throw std::invalid_argument("Unsupported gate type with those arguments");
		}
	}
};

#endif
