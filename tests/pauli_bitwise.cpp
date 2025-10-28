#include "gtest/gtest.h"

// Your project's headers
#include "pauli_term_container.hpp"
#include "container/pauli_bitwise.hpp"

#include <vector>
#include <string>
#include <numeric>

// A test fixture to set up the container and provide helper methods.
class PauliTermPackedBitwiseTest : public ::testing::Test {
    protected:
	// Helper to convert a human-readable string into the packed byte format.
	PauliAxis<> pauli_string_to_axis(const std::string& pauli_str) {
		std::vector<Pauli> paulis{ pauli_str.begin(), pauli_str.end() };
		return PauliAxis<>{ paulis };
	}

	// A container to hold our test terms. Let's use 10 qubits to test across byte boundaries.
	using PTC = PauliTermContainer<float, uint8_t>;
};

// Test case 1: Trivial commutation with an all-Identity axis.
TEST_F(PauliTermPackedBitwiseTest, CommutesWithIdentity) {
	const std::string term_str = "XZYIXZYIXZ";
	const std::string axis_str = "IIIIIIIIII";

	PTC ptc{ term_str };

	auto term_view = ptc[0];
	auto axis = pauli_string_to_axis(axis_str);

	// Everything commutes with Identity. The anti-commute count should be 0 (even).
	ASSERT_TRUE(term_view.commutes_with(axis.raw_bits()));
}

// Test case 2: Commutation of a term with itself.
TEST_F(PauliTermPackedBitwiseTest, CommutesWhenIdentical) {
	const std::string term_str = "XZYIXZYIXZ";

	PTC ptc{ term_str };
	auto term_view = ptc[0];
	auto axis = pauli_string_to_axis(term_str);

	// A Pauli string always commutes with itself (0 anti-commuting sites).
	ASSERT_TRUE(term_view.commutes_with(axis.raw_bits()));
}

// Test case 3: Cases with an even or odd number of anti-commuting sites.
TEST_F(PauliTermPackedBitwiseTest, CommutationWithMixedSites) {
	// Part 1: Even number of anti-commuting sites -> COMMUTES
	const std::string term_str_even = "XYXY";
	const std::string axis_str_even = "YXYX";

	PTC ptc_even{ term_str_even };
	auto term_view_even = ptc_even[0];
	auto axis_even = pauli_string_to_axis(axis_str_even);

	// Count: X,Y (anti) | Y,X (anti) | X,Y (anti) | Y,X (anti)
	// Total anti-commuting sites = 4 (even). They should COMMUTE.
	ASSERT_TRUE(term_view_even.commutes_with(axis_even.raw_bits()));

	// Part 2: Odd number of anti-commuting sites -> ANTI-COMMUTES
	const std::string term_str_odd = "XYIIZ";
	const std::string axis_str_odd = "YZIIX";

	PTC ptc_odd{ term_str_odd };
	auto term_view_odd = ptc_odd[0];
	auto axis_odd = pauli_string_to_axis(axis_str_odd);

	// Count: X,Y (anti) | Y,Z (anti) | I,I (commute) | I,I (commute) | Z,X (anti)
	// Total anti-commuting sites = 3 (odd). They should ANTI-COMMUTE.
	ASSERT_FALSE(term_view_odd.commutes_with(axis_odd.raw_bits()));
}

// Test case 4: Simple anti-commutation with a single anti-commuting site.
TEST_F(PauliTermPackedBitwiseTest, AntiCommutesWithSingleSite) {
	const std::string term_str = "ZIIIIIIIII";
	const std::string axis_str = "XIIIIIIIII";

	PTC ptc{ term_str };
	auto term_view = ptc[0];
	auto axis = pauli_string_to_axis(axis_str);

	// Only the first site (Z and X) anti-commutes. Count is 1 (odd).
	ASSERT_FALSE(term_view.commutes_with(axis.raw_bits()));
}

// Test case 5: A longer, more complex case to test logic across byte boundaries.
TEST_F(PauliTermPackedBitwiseTest, CommutationWithComplexStrings) {
	// Part 1: An even number of anti-commuting sites -> COMMUTES
	const std::string term_str_even = "ZXIYIZXIYI"; // 10 qubits
	const std::string axis_str_even = "YIZXIYIZXI";

	PTC ptc_even{ term_str_even };
	auto term_view_even = ptc_even[0];
	auto axis_even = pauli_string_to_axis(axis_str_even);

	// Count: Z,Y(a) | X,I(c) | I,Z(c) | Y,X(a) | I,I(c) -> 2 anti-commuting sites
	// This pattern repeats. Total = 2 + 2 = 4 (even). They should COMMUTE.
	ASSERT_TRUE(term_view_even.commutes_with(axis_even.raw_bits()));

	// Part 2: An odd number of anti-commuting sites -> ANTI-COMMUTES
	const std::string term_str_odd = "XXXYYYZZZ"; // 9 qubits
	const std::string axis_str_odd = "YYYZZZXXX";

	PTC ptc_odd{ term_str_odd };
	auto term_view_odd = ptc_odd[0];
	auto axis_odd = pauli_string_to_axis(axis_str_odd);

	// Count: X,Y(a) x3 | Y,Z(a) x3 | Z,X(a) x3
	// Total anti-commuting sites = 3 + 3 + 3 = 9 (odd). They should ANTI-COMMUTE.
	ASSERT_FALSE(term_view_odd.commutes_with(axis_odd.raw_bits()));
}
