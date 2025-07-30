#ifndef PP_PAULI_HPP
#define PP_PAULI_HPP

#include <cstdint>
#include <stdexcept>
#include <type_traits>
#include <array>
#include <utility>

using array_underlying_type = std::uint8_t;
using coeff_t = float;

enum class Pauli_enum : array_underlying_type { I, X, Y, Z, Count };
enum class Pauli_gates : array_underlying_type { I, X, Y, Z, Count };
static_assert(std::to_underlying(Pauli_enum::I) == std::to_underlying(Pauli_gates::I));
static_assert(std::to_underlying(Pauli_enum::X) == std::to_underlying(Pauli_gates::X));
static_assert(std::to_underlying(Pauli_enum::Y) == std::to_underlying(Pauli_gates::Y));
static_assert(std::to_underlying(Pauli_enum::Z) == std::to_underlying(Pauli_gates::Z));

enum class Clifford_Gates_1Q : array_underlying_type { H, Count };

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
	ret[std::to_underlying(Pauli_enum::Z)][std::to_underlying(Clifford_Gates_1Q::H)] = T{ -1 };

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

static constexpr auto clifford_gates_map = init_clifford_array_map();
static constexpr auto clifford_gates_coeff = init_clifford_array_coeff<coeff_t>();
static constexpr auto pauli_gates_coeff = init_pauli_array_coeff<coeff_t>();
static constexpr auto cx_map = init_cx_array_map();

class Pauli {
    private:
	Pauli_enum p_;

    public:
	constexpr Pauli(Pauli_enum pauli) : p_(pauli) {}
	Pauli(char c) {
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

	Pauli() = delete;
	Pauli(Pauli const&) = default;
	Pauli(Pauli&&) noexcept = default;
	Pauli& operator=(Pauli const&) = default;
	Pauli& operator=(Pauli&&) noexcept = default;

	bool operator==(Pauli p) const { return p_ == p.p_; }

	bool commutes_with(Pauli p) { return pauli_gates_coeff[std::to_underlying(p_)][std::to_underlying(p.p_)] > 0; }

	coeff_t apply_pauli(Pauli_gates g) const {
		return pauli_gates_coeff[std::to_underlying(p_)][std::to_underlying(g)];
	}

	coeff_t apply_clifford(Clifford_Gates_1Q g) {
		p_ = clifford_gates_map[std::to_underlying(p_)][std::to_underlying(g)];
		return clifford_gates_coeff[std::to_underlying(p_)][std::to_underlying(g)];
	}

	coeff_t apply_cx(Pauli& target) {
		auto res = cx_map[std::to_underlying(p_)][std::to_underlying(target.p_)];
		p_ = res.first;
		target.p_ = res.second;

		// map ?
		return (p_ == Pauli_enum::X && target.p_ == Pauli_enum::Z) ||
				       (p_ == Pauli_enum::Y && target.p_ == Pauli_enum::Y) ?
			       coeff_t{ -1 } :
			       coeff_t{ 1 };
	}
};

static constexpr auto p_i = Pauli{ Pauli_enum::I };
static constexpr auto p_x = Pauli{ Pauli_enum::X };
static constexpr auto p_y = Pauli{ Pauli_enum::Y };
static constexpr auto p_z = Pauli{ Pauli_enum::Z };

#endif
