#ifndef PP_QUANTUM_OP_HPP
#define PP_QUANTUM_OP_HPP

#include "observable.hpp"
#include "pauli.hpp"
#include "policy.hpp"
#include "symbolic/coefficient.hpp"
#include "operation_type.hpp"

#include <iterator>
#include <stdexcept>
#include <unordered_map>
#include <cassert>

/**
 * @var pg_map
 * @brief Maps single-qubit Pauli QGate enums to their library-internal Pauli_gates representation.
 */
static constexpr std::array<std::pair<QGate, Pauli_gates>, 4> pg_map = { {
	{ QGate::I, Pauli_gates::I },
	{ QGate::X, Pauli_gates::X },
	{ QGate::Y, Pauli_gates::Y },
	{ QGate::Z, Pauli_gates::Z },
} };

/**
 * @var clifford_map
 * @brief Maps single-qubit Clifford QGate enums to their library-internal Clifford_Gates_1Q representation.
 */
static constexpr std::array<std::pair<QGate, Clifford_Gates_1Q>, 1> clifford_map = { {
	{ QGate::H, Clifford_Gates_1Q::H },
} };

/**
 * @var unoise_map
 * @brief Maps unital noise channel QGate enums to their library-internal UnitalNoise representation.
 */
static constexpr std::array<std::pair<QGate, UnitalNoise>, 2> unoise_map = { {
	{ QGate::Depolarizing, UnitalNoise::Depolarizing },
	{ QGate::Dephasing, UnitalNoise::Dephasing },
} };

/**
 * @brief A helper function to find a value in a map-like array of pairs.
 * @tparam T The type of the value to search for (the key).
 * @tparam Arr The type of the array-like container of pairs.
 * @param v The value to find in the `first` element of the pairs.
 * @param arr The container to search within.
 * @return An iterator to the first element in `arr` where `e.first == v`, or `std::cend(arr)` if not found.
 */
template <typename T, typename Arr>
inline bool in_array(T&& v, Arr const& arr) {
	return std::find_if(std::cbegin(arr), std::cend(arr), [&](auto&& e) { return e.first == v; }) != std::cend(arr);
}

/**
 * @struct QuantumOp
 * @brief Internal representation of a single quantum operation in a circuit.
 * @tparam F The callable type representing the gate's action on an observable.
 *
 * This struct bundles an operation's type, its gate identifier, and the
 * function that implements its transformation on an `Observable` object.
 */
template <typename T>
class QuantumOp {
    private:
	QGate gate; /**< The specific gate or noise channel identifier. */
	unsigned qubit0;
	unsigned qubit1;
	PauliAxis<> axis;
	T parameter;

    public:
	using ObservableType = Observable<T>;

	QuantumOp(QGate qg, unsigned qubit) : gate(qg), qubit0(qubit) {
		if (qg != QGate::H && !in_array(qg, pg_map)) {
			throw std::invalid_argument("missing parameters for non-Pauli or H gate.");
		}
	}

	template <typename Real>
	QuantumOp(QGate qg, unsigned qubit, Real&& v)
		requires(std::is_floating_point_v<std::remove_cvref_t<Real>> || Symbolic<std::remove_cvref_t<Real>>)
		: gate(qg), qubit0(qubit), parameter(std::move(v)) {
		if (qg != QGate::Rz && !in_array(qg, unoise_map) && qg != QGate::AmplitudeDamping) {
			throw std::invalid_argument("bad parameters for non parametric gate.");
		}
	}

	template <typename Integer, std::enable_if_t<std::is_integral_v<Integer>, bool> = true>
	QuantumOp(QGate qg, unsigned control, Integer target) : gate(qg), qubit0(control), qubit1(target) {
		if (qg != QGate::Cx) {
			throw std::invalid_argument("bad parameters for cx");
		}
	}

	template <typename Real>
	QuantumOp(QGate qg, std::vector<Pauli> const& pauli_axis, Real&& v)
		requires(std::is_floating_point_v<std::remove_cvref_t<Real>> || Symbolic<std::remove_cvref_t<Real>>)
		: gate(qg), axis(pauli_axis.begin(), pauli_axis.end()), parameter(std::move(v)) {}

	template <typename ExecutionPolicy = DefaultExecutionPolicy>
	[[gnu::always_inline]] inline void operator()(ObservableType& obs, ExecutionPolicy&& policy = ExecutionPolicy{}) const {
		switch (gate) {
		case QGate::Rz:
			return obs.apply_rz(qubit0, parameter, policy);
		case QGate::Rp:
			return obs.apply_rp(axis, parameter, policy);
		case QGate::Cx:
			return obs.apply_cx(qubit0, qubit1, policy);
		case QGate::AmplitudeDamping:
			return obs.apply_amplitude_damping(qubit0, parameter, policy);
		case QGate::Dephasing:
			return obs.apply_unital_noise(UnitalNoise::Dephasing, qubit0, parameter, policy);
		case QGate::Depolarizing:
			return obs.apply_unital_noise(UnitalNoise::Depolarizing, qubit0, parameter, policy);
		case QGate::H:
			return obs.apply_clifford(Clifford_Gates_1Q::H, qubit0);
		case QGate::I:
			return;
		case QGate::X:
			return obs.apply_pauli(Pauli_gates::X, qubit0);
		case QGate::Y:
			return obs.apply_pauli(Pauli_gates::Y, qubit0);
		case QGate::Z:
			return obs.apply_pauli(Pauli_gates::Z, qubit0);
		case QGate::Count:
			return;
		}
	}

	void operator()(ObservableType& obs, RuntimePolicy const& runtime_policy) const {
		return std::visit([this, &obs](auto const& policy) { return (*this)(obs, policy); }, runtime_policy);
	}

	QGate get_gate() const { return gate; }

	[[gnu::always_inline]] inline OperationType operation_type() const {
		return (gate == QGate::Rz || gate == QGate::Rp || gate == QGate::AmplitudeDamping) ? OperationType::SplittingGate :
												     OperationType::BasicGate;

		// static constexpr std::array<OperationType, 2> arr_map{OperationType::BasicGate, OperationType::SplittingGate};
		// return arr_map[gate == QGate::Rz || gate == QGate::AmplitudeDamping]; // branchless
	}
};

#endif
