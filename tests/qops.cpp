#include "gtest/gtest.h"

#include "pauli.hpp"
#include "policies/sequential.hpp"
#include "quantum_op.hpp"
#include <sstream>

template <typename T>
std::string to_str(T const& t) {
	std::stringstream ss;
	ss << t;
	return ss.str();
}

using types = testing::Types<coeff_t, SymbolicCoefficient<coeff_t>>;

template <typename T>
class QuantumOpTest : public ::testing::Test {
    protected:
	// These type aliases depend on the template parameter `T`.
	// They MUST be accessed using `typename TestFixture::` from within a TYPED_TEST_P body.
	using QOp = QuantumOp<T>;
	using Obs = Observable<T>;

	// A vector to hold the different observable states we need to test against.
	std::vector<Obs> observables;
	DefaultExecutionPolicy seq;

	// SetUp() is called by Google Test before each test is run.
	// This is the correct place to initialize our observables.
	void SetUp() override {
		// We assume an Observable constructor that can create a state from a string.
		// This is a reasonable assumption for such a class. The number of qubits (e.g., 2)
		// is also a necessary assumption for two-qubit observables like "XX".
		try {
			observables.push_back(Obs("II"));
			observables.push_back(Obs("XX"));
			observables.push_back(Obs("YY"));
			observables.push_back(Obs("ZZ"));
		} catch (const std::exception& e) {
			// If the observable constructor isn't what we assumed, fail gracefully.
			FAIL() << "Failed to initialize Observables in SetUp(). Assumed constructor Observable(std::string, int) is likely incorrect. Error: "
			       << e.what();
		}
	}
};

// 2. DECLARE THE TYPE-PARAMETERIZED TEST SUITE
TYPED_TEST_SUITE_P(QuantumOpTest);

// 3. DEFINE THE INDIVIDUAL TEST PATTERNS using TYPED_TEST_P

// This test only checks constructors and does not need an observable.
TYPED_TEST_P(QuantumOpTest, Construction_ValidGates) {
	using QOp = typename TestFixture::QOp;
	using Real = TypeParam;

	for (const auto gate : { QGate::I, QGate::X, QGate::Y, QGate::Z, QGate::H }) {
		EXPECT_NO_THROW(QOp(gate, 0));
	}
	for (const auto gate : { QGate::Rz, QGate::Depolarizing, QGate::Dephasing, QGate::AmplitudeDamping }) {
		EXPECT_NO_THROW(QOp(gate, 0, Real(0.1)));
	}
	EXPECT_NO_THROW(QOp(QGate::Cx, 0, 1));
}

// This test only checks constructors and does not need an observable.
TYPED_TEST_P(QuantumOpTest, Construction_InvalidGatesThrow) {
	using QOp = typename TestFixture::QOp;
	using Real = TypeParam;
	EXPECT_THROW(QOp(QGate::Rz, 0), std::invalid_argument);
	EXPECT_THROW(QOp(QGate::X, 0, Real(0.5)), std::invalid_argument);
	EXPECT_THROW(QOp(QGate::H, 0, 1), std::invalid_argument);
}

// This test only checks properties and does not need an observable.
TYPED_TEST_P(QuantumOpTest, Properties_AreCorrectForAllGates) {
	using QOp = typename TestFixture::QOp;
	using Real = TypeParam;

	struct PropertyTestCase {
		std::string name;
		QOp op;
		OperationType expected_type;
	};
	const std::vector<PropertyTestCase> test_cases = {
		{ "I", QOp(QGate::I, 0), OperationType::BasicGate },
		{ "X", QOp(QGate::X, 0), OperationType::BasicGate },
		{ "H", QOp(QGate::H, 0), OperationType::BasicGate },
		{ "Cx", QOp(QGate::Cx, 0, 1), OperationType::BasicGate },
		{ "Depolarizing", QOp(QGate::Depolarizing, 0, Real(0.1)), OperationType::BasicGate },
		{ "Rz", QOp(QGate::Rz, 0, Real(0.1)), OperationType::SplittingGate },
		{ "AmplitudeDamping", QOp(QGate::AmplitudeDamping, 0, Real(0.1)), OperationType::SplittingGate }
	};

	for (const auto& test : test_cases) {
		SCOPED_TRACE("Testing Gate Property: " + test.name);
		EXPECT_EQ(test.op.get_gate(), test.op.get_gate());
		EXPECT_EQ(test.op.operation_type(), test.expected_type);
	}
}

// This is the core application test. It is now updated to iterate through all
// initial observable states provided by the fixture.
TYPED_TEST_P(QuantumOpTest, Application_AllGatesDispatchCorrectlyOnAllObservables) {
	using QOp = typename TestFixture::QOp;
	using Obs = typename TestFixture::Obs;
	using Real = TypeParam;

	struct AppTestCase {
		std::string name;
		std::function<QOp()> op_constructor;
		std::function<void(Obs&, DefaultExecutionPolicy&)> direct_applier;
	};

	const std::vector<AppTestCase> test_cases = {
		{ "I", [] { return QOp(QGate::I, 0); }, [](auto&, auto&) { /* No-op */ } },
		{ "X", [] { return QOp(QGate::X, 0); }, [](auto& obs, auto&) { obs.apply_pauli(Pauli_gates::X, 0); } },
		{ "Y", [] { return QOp(QGate::Y, 0); }, [](auto& obs, auto&) { obs.apply_pauli(Pauli_gates::Y, 0); } },
		{ "Z", [] { return QOp(QGate::Z, 0); }, [](auto& obs, auto&) { obs.apply_pauli(Pauli_gates::Z, 0); } },
		{ "H", [] { return QOp(QGate::H, 0); }, [](auto& obs, auto&) { obs.apply_clifford(Clifford_Gates_1Q::H, 0); } },
		{ "Rz", [] { return QOp(QGate::Rz, 0, Real(0.785)); },
		  [](auto& obs, auto& policy) { obs.apply_rz(0, Real(0.785), policy); } },
		{ "Cx", [] { return QOp(QGate::Cx, 0, 1); }, [](auto& obs, auto& policy) { obs.apply_cx(0, 1, policy); } },
		{ "Depolarizing", [] { return QOp(QGate::Depolarizing, 0, Real(0.2)); },
		  [](auto& obs, auto& policy) { obs.apply_unital_noise(UnitalNoise::Depolarizing, 0, Real(0.2), policy); } },
		{ "Dephasing", [] { return QOp(QGate::Dephasing, 0, Real(0.25)); },
		  [](auto& obs, auto& policy) { obs.apply_unital_noise(UnitalNoise::Dephasing, 0, Real(0.25), policy); } },
		{ "AmplitudeDamping", [] { return QOp(QGate::AmplitudeDamping, 0, Real(0.3)); },
		  [](auto& obs, auto& policy) { obs.apply_amplitude_damping(0, Real(0.3), policy); } }
	};

	// Outer loop: iterate through each initial observable state (II, XX, YY, ZZ)
	for (const auto& initial_obs : this->observables) {
		SCOPED_TRACE("Testing with initial observable state."); // Add context for which observable is being tested

		// Inner loop: iterate through each gate type
		for (const auto& test : test_cases) {
			SCOPED_TRACE("Testing Gate Application: " + test.name);

			auto op_version = initial_obs;
			auto direct_version = initial_obs;
			auto quantum_op = test.op_constructor();

			quantum_op(op_version, this->seq);
			test.direct_applier(direct_version, this->seq);

			// A bitwise memory comparison is a robust way to check for equality
			// without needing an operator== defined on the Observable class.
			EXPECT_EQ(to_str(op_version), to_str(direct_version)) << "State mismatch for gate " << test.name;
		}
	}
}

// 4. REGISTER all the defined test patterns with the suite.
REGISTER_TYPED_TEST_SUITE_P(
	QuantumOpTest, Construction_ValidGates, Construction_InvalidGatesThrow, Properties_AreCorrectForAllGates,
	Application_AllGatesDispatchCorrectlyOnAllObservables); // 5. INSTANTIATE the test suite with the types you want to test against.
// This is where the concrete types are provided, and gtest generates the
// actual tests by combining the patterns with each type.
using Implementations = ::testing::Types<coeff_t, SymbolicCoefficient<coeff_t>>;
INSTANTIATE_TYPED_TEST_SUITE_P(Coeff_t_And_Symbolic, // A unique prefix for this instantiation
			       QuantumOpTest, Implementations);
