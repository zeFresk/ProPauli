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
#include <string_view>
#include <unordered_map>
#include <vector>

template <typename F>
struct QuantumOp {
	OperationType op_t;
	QGate gate;
	F func;
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

template <typename Truncator = NeverTruncator, typename Coefficient_t = coeff_t>
class Circuit {
    public:
	Circuit(unsigned nb_qubits, Truncator&& truncator = NeverTruncator{},
		NoiseModel<Coefficient_t> const& noise_model = {},
		std::unique_ptr<SchedulingPolicy> merge_policy = std::make_unique<AlwaysAfterSplittingPolicy>(),
		std::unique_ptr<SchedulingPolicy> truncate_policy = std::make_unique<AlwaysAfterSplittingPolicy>())
		: nb_qubits_{ nb_qubits }, merge_policy_{ std::move(merge_policy) },
		  truncate_policy_{ std::move(truncate_policy) }, truncator_{ truncator }, noise_model_(noise_model) {}

	Circuit(Circuit const&) = delete;
	Circuit& operator=(Circuit const&) = delete;

	Circuit(Circuit&&) noexcept = default;
	Circuit& operator=(Circuit&&) noexcept = default;

	unsigned nb_qubits() const { return nb_qubits_; }

	template <typename... T>
	void add_operation(std::string op, T&&... args) {
		using enum QGate;
		static std::unordered_map<std::string, QGate> qg_map = { { "I", I },
									 { "X", X },
									 { "Y", Y },
									 { "Z", Z },
									 { "H", H },
									 { "CX", Cx },
									 { "Rz", Rz },
									 { "AMPLITUDEDAMPING", AmplitudeDamping },
									 { "DEPOLARIZING", Depolarizing },
									 { "DEPHASING", Dephasing } };

		std::transform(op.begin(), op.end(), [](auto c) { return std::toupper(c); });
		auto qg = qg_map.at(op);
		add_operation(qg, std::forward<T>(args)...);
	}

	template <typename... T>
	void add_operation(QGate g, T&&... args) {
		using O_t = Observable<Coefficient_t>;
		using enum QGate;
		auto opt = opt_map.at(g);

		switch (g) {
		case Cx:
			register_op(opt, [=](O_t& obs) { obs.apply_cx(args...); });
			break;
		case Rz:
			register_op(opt, [=](O_t& obs) { obs.apply_rz(args...); });
			break;
		case AmplitudeDamping:
			register_op(opt, [=](O_t& obs) { obs.apply_amplitude_damping(args...); });
			break;
		default: // more cases?
			auto it = in_array(g, pg_map);
			if (it != std::cend(pg_map)) {
				register_op(opt, [=](O_t& obs) { obs.apply_pauli(it->second, args...); });
				return;
			}

			auto itc = in_array(g, clifford_map);
			if (itc != std::cend(clifford_map)) {
				register_op(opt, [=](O_t& obs) { obs.apply_clifford(itc->second, args...); });
				return;
			}

			auto itn = in_array(g, unoise_map);
			if (itn != std::cend(unoise_map)) {
				register_op(opt, [=](O_t& obs) { obs.apply_unital_noise(itc->second, args...); });
				return;
			}
		}
		noise_model_.apply_noise_after(*this, g, std::forward<T>(args)...);
	}

	Observable<Coefficient_t> run(Observable<Coefficient_t> const& target_observable) {
		auto obs = target_observable;
		SimulationState state(nb_splitting_gates());
		for (auto const& qop : operations_) {
			schedule(state, Timing::Before, qop.op_t);

			qop.func(obs);

			schedule(state, Timing::Before, qop.op_t);

			if (qop.op_t == OperationType::BasicGate) {
				state.register_basic_gate(obs.size());
			} else if (qop.op_t == OperationType::SplittingGate) {
				state.register_splitting_gate(obs.size());
			}
		}
		return obs;
	}

	std::size_t nb_splitting_gates() const {
		return std::accumulate(operations_.cbegin(), operations_.cend(), 0, [](auto&& acc, auto&& op) {
			return acc + (op.op_t == OperationType::SplittingGate ? 1 : 0);
		});
	}

    private:
	using Fn = decltype([]() {}); //std::function<void>;
	std::vector<QuantumOp<Fn>> operations_;
	unsigned nb_qubits_;
	std::unique_ptr<SchedulingPolicy> merge_policy_;
	std::unique_ptr<SchedulingPolicy> truncate_policy_;
	Truncator truncator_;
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
			auto removed = obs.truncate(truncator_);
			state.register_truncate(CompressionResult{ before_nb, removed });
		}
	}
};

#endif
