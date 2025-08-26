#ifndef PP_PAULI_HPP
#define PP_PAULI_HPP

#include <cstdint>
#include <stdexcept>
#include <type_traits>
#include <array>
#include <utility>
#include <ostream>

using array_underlying_type = std::uint8_t;
using coeff_t = float;

enum class Pauli_enum : array_underlying_type { I, X, Y, Z, Count };
enum class Pauli_gates : array_underlying_type { I, X, Y, Z, Count };
static_assert(std::to_underlying(Pauli_enum::I) == std::to_underlying(Pauli_gates::I));
static_assert(std::to_underlying(Pauli_enum::X) == std::to_underlying(Pauli_gates::X));
static_assert(std::to_underlying(Pauli_enum::Y) == std::to_underlying(Pauli_gates::Y));
static_assert(std::to_underlying(Pauli_enum::Z) == std::to_underlying(Pauli_gates::Z));
static_assert(std::to_underlying(Pauli_gates::Count) == std::to_underlying(Pauli_enum::Count));

enum class Clifford_Gates_1Q : array_underlying_type { H, Count };
enum class UnitalNoise : array_underlying_type { Depolarizing, Dephasing, Count };

consteval std::array<char, static_cast<std::size_t>(Pauli_enum::Count)> init_pauli_str_map() {
	std::array<char, static_cast<std::size_t>(Pauli_enum::Count)> ret;

	ret[std::to_underlying(Pauli_enum::I)] = 'I';
	ret[std::to_underlying(Pauli_enum::X)] = 'X';
	ret[std::to_underlying(Pauli_enum::Y)] = 'Y';
	ret[std::to_underlying(Pauli_enum::Z)] = 'Z';

	return ret;
}

consteval std::array<std::array<Pauli_enum, static_cast<std::size_t>(Clifford_Gates_1Q::Count)>,
		     static_cast<std::size_t>(Pauli_enum::Count)>
init_clifford_array_map() {
	std::array<std::array<Pauli_enum, static_cast<std::size_t>(Clifford_Gates_1Q::Count)>,
		   static_cast<std::size_t>(Pauli_enum::Count)>
		ret;
	// H Gate
	ret[std::to_underlying(Pauli_enum::I)][std::to_underlying(Clifford_Gates_1Q::H)] = Pauli_enum::I;
	ret[std::to_underlying(Pauli_enum::X)][std::to_underlying(Clifford_Gates_1Q::H)] = Pauli_enum::Z;
	ret[std::to_underlying(Pauli_enum::Y)][std::to_underlying(Clifford_Gates_1Q::H)] = Pauli_enum::Y;
	ret[std::to_underlying(Pauli_enum::Z)][std::to_underlying(Clifford_Gates_1Q::H)] = Pauli_enum::X;

	return ret;
}

template <typename T>
consteval std::array<std::array<T, static_cast<std::size_t>(Clifford_Gates_1Q::Count)>,
		     static_cast<std::size_t>(Pauli_enum::Count)>
init_clifford_array_coeff() {
	std::array<std::array<T, static_cast<std::size_t>(Clifford_Gates_1Q::Count)>,
		   static_cast<std::size_t>(Pauli_enum::Count)>
		ret;
	// H Gate
	ret[std::to_underlying(Pauli_enum::I)][std::to_underlying(Clifford_Gates_1Q::H)] = T{ 1 };
	ret[std::to_underlying(Pauli_enum::X)][std::to_underlying(Clifford_Gates_1Q::H)] = T{ 1 };
	ret[std::to_underlying(Pauli_enum::Y)][std::to_underlying(Clifford_Gates_1Q::H)] = T{ -1 };
	ret[std::to_underlying(Pauli_enum::Z)][std::to_underlying(Clifford_Gates_1Q::H)] = T{ 1 };

	return ret;
}

template <typename T>
consteval std::array<std::array<T, static_cast<std::size_t>(Pauli_gates::Count)>,
		     static_cast<std::size_t>(Pauli_enum::Count)>
init_pauli_array_coeff() {
	std::array<std::array<T, static_cast<std::size_t>(Pauli_gates::Count)>,
		   static_cast<std::size_t>(Pauli_enum::Count)>
		ret;
	// I Gate
	ret[std::to_underlying(Pauli_enum::I)][std::to_underlying(Pauli_gates::I)] = T{ 1 };
	ret[std::to_underlying(Pauli_enum::X)][std::to_underlying(Pauli_gates::I)] = T{ 1 };
	ret[std::to_underlying(Pauli_enum::Y)][std::to_underlying(Pauli_gates::I)] = T{ 1 };
	ret[std::to_underlying(Pauli_enum::Z)][std::to_underlying(Pauli_gates::I)] = T{ 1 };
	// X Gate
	ret[std::to_underlying(Pauli_enum::I)][std::to_underlying(Pauli_gates::X)] = T{ 1 };
	ret[std::to_underlying(Pauli_enum::X)][std::to_underlying(Pauli_gates::X)] = T{ 1 };
	ret[std::to_underlying(Pauli_enum::Y)][std::to_underlying(Pauli_gates::X)] = T{ -1 };
	ret[std::to_underlying(Pauli_enum::Z)][std::to_underlying(Pauli_gates::X)] = T{ -1 };
	// Y Gate
	ret[std::to_underlying(Pauli_enum::I)][std::to_underlying(Pauli_gates::Y)] = T{ 1 };
	ret[std::to_underlying(Pauli_enum::X)][std::to_underlying(Pauli_gates::Y)] = T{ -1 };
	ret[std::to_underlying(Pauli_enum::Y)][std::to_underlying(Pauli_gates::Y)] = T{ 1 };
	ret[std::to_underlying(Pauli_enum::Z)][std::to_underlying(Pauli_gates::Y)] = T{ -1 };
	// Z Gate
	ret[std::to_underlying(Pauli_enum::I)][std::to_underlying(Pauli_gates::Z)] = T{ 1 };
	ret[std::to_underlying(Pauli_enum::X)][std::to_underlying(Pauli_gates::Z)] = T{ -1 };
	ret[std::to_underlying(Pauli_enum::Y)][std::to_underlying(Pauli_gates::Z)] = T{ -1 };
	ret[std::to_underlying(Pauli_enum::Z)][std::to_underlying(Pauli_gates::Z)] = T{ 1 };

	return ret;
}

consteval std::array<std::array<std::pair<Pauli_enum, Pauli_enum>, static_cast<std::size_t>(Pauli_enum::Count)>,
		     static_cast<std::size_t>(Pauli_enum::Count)>
init_cx_array_map() {
	using enum Pauli_enum;
	std::array<std::array<std::pair<Pauli_enum, Pauli_enum>, static_cast<std::size_t>(Count)>,
		   static_cast<std::size_t>(Count)>
		ret;
	ret[std::to_underlying(I)][std::to_underlying(I)] = { I, I };
	ret[std::to_underlying(I)][std::to_underlying(X)] = { I, X };
	ret[std::to_underlying(I)][std::to_underlying(Y)] = { Z, Y };
	ret[std::to_underlying(I)][std::to_underlying(Z)] = { Z, Z };

	ret[std::to_underlying(X)][std::to_underlying(I)] = { X, X };
	ret[std::to_underlying(X)][std::to_underlying(X)] = { X, I };
	ret[std::to_underlying(X)][std::to_underlying(Y)] = { Y, Z };
	ret[std::to_underlying(X)][std::to_underlying(Z)] = { Y, Y };

	ret[std::to_underlying(Y)][std::to_underlying(I)] = { Y, X };
	ret[std::to_underlying(Y)][std::to_underlying(X)] = { Y, I };
	ret[std::to_underlying(Y)][std::to_underlying(Y)] = { X, Z };
	ret[std::to_underlying(Y)][std::to_underlying(Z)] = { X, Y };

	ret[std::to_underlying(Z)][std::to_underlying(I)] = { Z, I };
	ret[std::to_underlying(Z)][std::to_underlying(X)] = { Z, X };
	ret[std::to_underlying(Z)][std::to_underlying(Y)] = { I, Y };
	ret[std::to_underlying(Z)][std::to_underlying(Z)] = { I, Z };

	return ret;
}

template <typename T>
consteval std::array<std::array<T, static_cast<std::size_t>(UnitalNoise::Count)>,
		     static_cast<std::size_t>(Pauli_enum::Count)>
init_unital_noise_array_coeff() {
	std::array<std::array<T, static_cast<std::size_t>(UnitalNoise::Count)>,
		   static_cast<std::size_t>(Pauli_enum::Count)>
		ret;
	// Depolarizing
	ret[std::to_underlying(Pauli_enum::I)][std::to_underlying(UnitalNoise::Depolarizing)] = T{ 0 };
	ret[std::to_underlying(Pauli_enum::X)][std::to_underlying(UnitalNoise::Depolarizing)] = T{ 1 };
	ret[std::to_underlying(Pauli_enum::Y)][std::to_underlying(UnitalNoise::Depolarizing)] = T{ 1 };
	ret[std::to_underlying(Pauli_enum::Z)][std::to_underlying(UnitalNoise::Depolarizing)] = T{ 1 };
	// Dephasing
	ret[std::to_underlying(Pauli_enum::I)][std::to_underlying(UnitalNoise::Dephasing)] = T{ 0 };
	ret[std::to_underlying(Pauli_enum::X)][std::to_underlying(UnitalNoise::Dephasing)] = T{ 1 };
	ret[std::to_underlying(Pauli_enum::Y)][std::to_underlying(UnitalNoise::Dephasing)] = T{ 1 };
	ret[std::to_underlying(Pauli_enum::Z)][std::to_underlying(UnitalNoise::Dephasing)] = T{ 0 };

	return ret;
}

static constexpr auto pauli_char_map = init_pauli_str_map();
static constexpr auto clifford_gates_map = init_clifford_array_map();
static constexpr auto clifford_gates_coeff = init_clifford_array_coeff<coeff_t>();
static constexpr auto pauli_gates_coeff = init_pauli_array_coeff<coeff_t>();
static constexpr auto cx_map = init_cx_array_map();
static constexpr auto unital_noise_map_coeff = init_unital_noise_array_coeff<coeff_t>();

enum class QGate : array_underlying_type { I, X, Y, Z, H, Rz, Cx, AmplitudeDamping, Depolarizing, Dephasing, Count };
static_assert(std::to_underlying(QGate::Count) ==
	      (std::to_underlying(Pauli_gates::Count) + std::to_underlying(Clifford_Gates_1Q::Count) +
	       std::to_underlying(UnitalNoise::Count) + 1 + 1 + 1));

/**
 * @brief Represents a single Pauli operator (I, X, Y, or Z).
 *
 * This class is the fundamental building block for representing Pauli strings.
 * It provides methods for applying quantum gates and checking for commutation,
 * forming the core of the Heisenberg picture evolution.
 */
class Pauli {
    private:
	Pauli_enum p_;

    public:
	/**
	 * @brief Constructs a Pauli operator from its enum representation.
	 * @param pauli The enum value (e.g., Pauli_enum::I).
	 */
	constexpr Pauli(Pauli_enum pauli) : p_(pauli) {}

	/**
	 * @brief Constructs a Pauli operator from a character.
	 * @param c The character ('I', 'X', 'Y', or 'Z').
	 * @throw std::invalid_argument if the character is not a valid Pauli operator.
	 */
	constexpr Pauli(char c) {
		switch (c) {
		case 'I':
			p_ = Pauli_enum::I;
			break;
		case 'X':
			p_ = Pauli_enum::X;
			break;
		case 'Y':
			p_ = Pauli_enum::Y;
			break;
		case 'Z':
			p_ = Pauli_enum::Z;
			break;
		default:
			throw std::invalid_argument{ "Bad argument to Pauli constructor. Accepted: [I, X, Y, Z]" };
		}
	}

	/**
	 * @brief Constructs a Pauli operator from a string.
	 * @param str A string containing a single character: "I", "X", "Y", or "Z".
	 * @throw std::invalid_argument if the string is not a single valid Pauli character.
	 */
	constexpr Pauli(std::string_view str) : Pauli(str[0]) {
		if (str.size() != 1) {
			throw std::invalid_argument{ "Pauli should be a size 1 string" };
		}
	}

	Pauli() = default;
	Pauli(Pauli const&) = default;
	Pauli(Pauli&&) noexcept = default;
	Pauli& operator=(Pauli const&) = default;
	Pauli& operator=(Pauli&&) noexcept = default;

	/**
	 * @brief Implicit conversion to the underlying Pauli_enum.
	 */
	operator Pauli_enum() const { return p_; }

	/**
	 * @brief Checks for equality between two Pauli objects.
	 */
	bool operator==(Pauli p) const { return p_ == p.p_; }

	/**
	 * @brief Checks for inequality between two Pauli objects.
	 */
	bool operator!=(Pauli p) const { return !(*this == p); }

	/**
	 * @brief Checks if this Pauli operator commutes with another.
	 * @param p The other Pauli operator.
	 * @return True if they commute, false otherwise.
	 */
	bool commutes_with(Pauli p) const {
		return pauli_gates_coeff[std::to_underlying(p_)][std::to_underlying(p.p_)] > 0;
	}

	/**
	 * @brief Calculates the Pauli weight of the operator.
	 * @return 1 if the operator is X, Y, or Z; 0 if it is I.
	 */
	std::size_t weight() const noexcept { return p_ != Pauli_enum::I; }

	/**
	 * @brief Applies a Pauli gate to this operator (in the Heisenberg picture).
	 * @param g The Pauli gate to apply.
	 * @return A coefficient (+1 or -1) resulting from the application. The operator itself is not modified.
	 */
	coeff_t apply_pauli(Pauli_gates g) const {
		return pauli_gates_coeff[std::to_underlying(p_)][std::to_underlying(g)];
	}

	/**
	 * @brief Applies a unital noise channel to this operator.
	 * @param n The type of unital noise.
	 * @param p The noise probability.
	 * @return The scaling factor to be applied to the PauliTerm's coefficient.
	 */
	coeff_t apply_unital_noise(UnitalNoise n, coeff_t p) const {
		return coeff_t{ 1 } - (p * unital_noise_map_coeff[std::to_underlying(p_)][std::to_underlying(n)]);
	}

	/**
	 * @brief Applies a single-qubit Clifford gate to this operator, modifying it in place.
	 * @param g The Clifford gate to apply.
	 * @return A coefficient (+1 or -1) resulting from the application.
	 */
	coeff_t apply_clifford(Clifford_Gates_1Q g) {
		p_ = clifford_gates_map[std::to_underlying(p_)][std::to_underlying(g)];
		return clifford_gates_coeff[std::to_underlying(p_)][std::to_underlying(g)];
	}

	/**
	 * @brief Applies the control part of a CNOT gate to this operator, modifying it and the target in place.
	 * @param target The Pauli operator on the target qubit.
	 * @return A coefficient (+1 or -1) resulting from the application.
	 */
	coeff_t apply_cx(Pauli& target) {
		auto res = cx_map[std::to_underlying(p_)][std::to_underlying(target.p_)];
		p_ = res.first;
		target.p_ = res.second;

		// map ? map here (based on condition, 2 elems map) implies 2.57ns => 3.73ns
		return (p_ == Pauli_enum::X && target.p_ == Pauli_enum::Z) ||
				       (p_ == Pauli_enum::Y && target.p_ == Pauli_enum::Y) ?
			       coeff_t{ -1 } :
			       coeff_t{ 1 };
	}

	/**
	 * @brief Overloads the << operator to print a Pauli operator to an output stream.
	 */
	friend std::ostream& operator<<(std::ostream& os, Pauli const& p) {
		os << pauli_char_map[std::to_underlying(p.p_)];
		return os;
	}
};

static_assert(sizeof(Pauli) == sizeof(std::uint8_t));

static constexpr auto p_i = Pauli{ Pauli_enum::I };
static constexpr auto p_x = Pauli{ Pauli_enum::X };
static constexpr auto p_y = Pauli{ Pauli_enum::Y };
static constexpr auto p_z = Pauli{ Pauli_enum::Z };

#endif
