#include "gtest/gtest.h"

#include "pauli.hpp"
#include "pauli_container.hpp"
#include "non_owning_pauli_term.hpp"
#include "pauli_term.hpp"
#include <algorithm>
#include <random>
#include <sstream>

TEST(NonOwning, init_from_vector_pt) {
	std::vector<Pauli> vec{ { p_i, p_x } };
	coeff_t coeff = 1;
	NonOwningPauliTerm<coeff_t> nopt{ vec, coeff };
	EXPECT_EQ(nopt.size(), 2);
	EXPECT_EQ(nopt.coefficient(), coeff);
	EXPECT_EQ(nopt[0], p_i);
	EXPECT_EQ(nopt[1], p_x);
}

TEST(NonOwning, init_from_span_pt) {
	std::vector<Pauli> vec{ { p_i, p_x } };
	std::span sp{ vec };
	coeff_t coeff = 1;
	NonOwningPauliTerm<coeff_t> nopt{ sp, coeff };
	EXPECT_EQ(nopt.size(), 2);
	EXPECT_EQ(nopt.coefficient(), coeff);
	EXPECT_EQ(nopt[0], p_i);
	EXPECT_EQ(nopt[1], p_x);
}

TEST(NonOwning, init_from_iterators_pt) {
	std::vector<Pauli> vec{ { p_i, p_x } };
	coeff_t coeff = 1;
	NonOwningPauliTerm<coeff_t> nopt{ vec.begin(), vec.end(), coeff };
	EXPECT_EQ(nopt.size(), 2);
	EXPECT_EQ(nopt.coefficient(), coeff);
	EXPECT_EQ(nopt[0], p_i);
	EXPECT_EQ(nopt[1], p_x);
}

TEST(NonOwning, ro_init_from_vector_pt) {
	const std::vector<Pauli> vec{ { p_i, p_x } };
	const coeff_t coeff = 1;
	ReadOnlyNonOwningPauliTerm<coeff_t> nopt{ vec, coeff };
	EXPECT_EQ(nopt.size(), 2);
	EXPECT_EQ(nopt.coefficient(), coeff);
	EXPECT_EQ(nopt[0], p_i);
	EXPECT_EQ(nopt[1], p_x);
}

TEST(NonOwning, ro_init_from_span_pt) {
	const std::vector<Pauli> vec{ { p_i, p_x } };
	const std::span sp{ vec };
	const coeff_t coeff = 1;
	ReadOnlyNonOwningPauliTerm<coeff_t> nopt{ sp, coeff };
	EXPECT_EQ(nopt.size(), 2);
	EXPECT_EQ(nopt.coefficient(), coeff);
	EXPECT_EQ(nopt[0], p_i);
	EXPECT_EQ(nopt[1], p_x);
}

TEST(NonOwning, ro_init_from_iterators_pt) {
	const std::vector<Pauli> vec{ { p_i, p_x } };
	const coeff_t coeff = 1;
	ReadOnlyNonOwningPauliTerm<coeff_t> nopt{ vec.begin(), vec.end(), coeff };
	EXPECT_EQ(nopt.size(), 2);
	EXPECT_EQ(nopt.coefficient(), coeff);
	EXPECT_EQ(nopt[0], p_i);
	EXPECT_EQ(nopt[1], p_x);
}

std::vector<Pauli> random_pauli_vector(auto dis, auto gen, std::size_t n) {
	std::vector<Pauli> ret;
	ret.reserve(n);
	std::generate_n(std::back_inserter(ret), n, [&]() {
		return Pauli{ static_cast<Pauli_enum>(dis(gen) % static_cast<decltype(dis(gen))>(Pauli_enum::Count)) };
	});
	return ret;
}

class NonOwningParity : public testing::Test {
    protected:
	static constexpr std::size_t nb_qubits = 32;
	std::uniform_int_distribution<> dis;
	std::mt19937 gen;
	std::vector<Pauli> paulis;
	coeff_t coeff;
	std::vector<Pauli> buf;
	coeff_t coeff_buf;
	PauliTerm<coeff_t> pt;
	NonOwningPauliTerm<coeff_t> nopt;
	ReadOnlyNonOwningPauliTerm<coeff_t> ronopt;
	NonOwningPauliTerm<coeff_t> nopt_buf;
	NonOwningPauliTerm<coeff_t> ronopt_buf;

	NonOwningParity()
		: dis(0), gen(42), paulis(random_pauli_vector(dis, gen, nb_qubits)), coeff(1), buf(paulis),
		  coeff_buf(1), pt(paulis.begin(), paulis.end(), coeff), nopt(paulis, coeff), ronopt(paulis, coeff),
		  nopt_buf(buf, coeff_buf), ronopt_buf(buf, coeff_buf) {}

	template <typename Lhs, typename Rhs>
	void assert_same(Lhs&& lhs, Rhs&& rhs) {
		ASSERT_FLOAT_EQ(lhs.coefficient(), rhs.coefficient());
		ASSERT_EQ(lhs.phash(), rhs.phash());
		ASSERT_EQ(lhs.pauli_weight(), rhs.pauli_weight());
		ASSERT_FLOAT_EQ(lhs.expectation_value(), rhs.expectation_value());
		ASSERT_TRUE(std::equal(lhs.begin(), lhs.end(), rhs.begin(), rhs.end()));

		std::stringstream ss_lhs, ss_rhs;
		ss_lhs << lhs;
		ss_rhs << rhs;
		ASSERT_EQ(ss_lhs.str(), ss_rhs.str());
	}
};

TEST_F(NonOwningParity, apply_pauli) {
	for (std::size_t i = 0; i < nb_qubits * nb_qubits; ++i) {
		auto op = dis(gen) % static_cast<decltype(dis(gen))>(Pauli_gates::Count);
		auto pg = static_cast<Pauli_gates>(op);
		auto qubit = dis(gen) % nb_qubits;

		nopt.apply_pauli(pg, qubit);
		pt.apply_pauli(pg, qubit);

		assert_same(pt, nopt);
		assert_same(nopt, ronopt);
		assert_same(pt, ronopt);
	}
}

TEST_F(NonOwningParity, apply_clifford) {
	for (std::size_t i = 0; i < nb_qubits * nb_qubits; ++i) {
		auto op = dis(gen) % static_cast<decltype(dis(gen))>(Clifford_Gates_1Q::Count);
		auto pg = static_cast<Clifford_Gates_1Q>(op);
		auto qubit = dis(gen) % nb_qubits;

		nopt.apply_clifford(pg, qubit);
		pt.apply_clifford(pg, qubit);

		assert_same(pt, nopt);
		assert_same(nopt, ronopt);
		assert_same(pt, ronopt);
	}
}

TEST_F(NonOwningParity, apply_unital_noise) {
	for (std::size_t i = 0; i < nb_qubits * nb_qubits; ++i) {
		auto op = dis(gen) % static_cast<decltype(dis(gen))>(UnitalNoise::Count);
		auto pg = static_cast<UnitalNoise>(op);
		auto qubit = dis(gen) % nb_qubits;

		nopt.apply_unital_noise(pg, qubit, 0.01);
		pt.apply_unital_noise(pg, qubit, 0.01);

		assert_same(pt, nopt);
		assert_same(nopt, ronopt);
		assert_same(pt, ronopt);
	}
}

TEST_F(NonOwningParity, apply_cx) {
	for (std::size_t i = 0; i < nb_qubits * nb_qubits; ++i) {
		auto qubit_control = dis(gen) % nb_qubits;
		auto qubit_target = dis(gen) % nb_qubits;
		if (qubit_target == qubit_control) {
			qubit_control = (qubit_control + 1) % nb_qubits;
		}

		nopt.apply_cx(qubit_control, qubit_target);
		pt.apply_cx(qubit_control, qubit_target);

		assert_same(pt, nopt);
		assert_same(nopt, ronopt);
		assert_same(pt, ronopt);
	}
}

TEST_F(NonOwningParity, apply_rz) {
	std::uniform_real_distribution<coeff_t> dis_f{ 0, 1 };
	for (std::size_t i = 0; i < nb_qubits * nb_qubits; ++i) {
		auto qubit = dis(gen) % nb_qubits;
		auto theta = dis_f(gen);

		if (!nopt[qubit].commutes_with(p_z)) {
			nopt_buf.copy_content(nopt);
			nopt.apply_rz(qubit, theta, nopt_buf);
			auto path = pt.apply_rz(qubit, theta);

			assert_same(pt, nopt);
			assert_same(nopt, ronopt);
			assert_same(pt, ronopt);

			assert_same(path, nopt_buf);
			assert_same(nopt_buf, ronopt_buf);
			assert_same(path, ronopt_buf);
		}
	}
}

TEST_F(NonOwningParity, apply_amplitude_damping) {
	for (std::size_t i = 0; i < nb_qubits * nb_qubits; ++i) {
		auto qubit = dis(gen) % nb_qubits;

		if (nopt[qubit] == p_z) {
			nopt_buf.copy_content(nopt);
			nopt.apply_amplitude_damping_z(qubit, 0.01, nopt_buf);
			auto path = pt.apply_amplitude_damping_z(qubit, 0.01);

			assert_same(pt, nopt);
			assert_same(nopt, ronopt);
			assert_same(pt, ronopt);

			assert_same(path, nopt_buf);
			assert_same(nopt_buf, ronopt_buf);
			assert_same(path, ronopt_buf);
		} else if (nopt[qubit] != p_i) {
			nopt.apply_amplitude_damping_xy(qubit, 0.01);
			pt.apply_amplitude_damping_xy(qubit, 0.01);

			assert_same(pt, nopt);
			assert_same(nopt, ronopt);
			assert_same(pt, ronopt);
		}
	}
}
