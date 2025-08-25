#include "gtest/gtest.h"

#include "pauli.hpp"
#include "pauli_container.hpp"
#include "non_owning_pauli_term.hpp"
#include "pauli_term.hpp"

TEST(PauliTermContainer, init_qubits) {
	PauliTermContainer<coeff_t> ptc{ 32 };
	EXPECT_EQ(ptc.nb_terms(), 0);
	EXPECT_EQ(ptc.nb_qubits(), 32);
}

TEST(PauliTermContainer, init_span_pt1) {
	std::vector<PauliTerm<coeff_t>> vec{ PauliTerm{ "II" } };
	PauliTermContainer<coeff_t> ptc{ vec };
	EXPECT_EQ(ptc.nb_terms(), 1);
	EXPECT_EQ(ptc.nb_qubits(), 2);
	auto nopt = ptc[0];
	EXPECT_EQ(nopt.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt, PauliTerm{ "II" });
}

TEST(PauliTermContainer, init_span_pt2) {
	std::vector<PauliTerm<coeff_t>> vec{ PauliTerm{ "II" }, PauliTerm{ "XX" } };
	PauliTermContainer<coeff_t> ptc{ vec };
	EXPECT_EQ(ptc.nb_terms(), 2);
	EXPECT_EQ(ptc.nb_qubits(), 2);
	auto nopt = ptc[0];
	EXPECT_EQ(nopt.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt, PauliTerm{ "II" });
	auto nopt2 = ptc[1];
	EXPECT_EQ(nopt2.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt2, PauliTerm{ "XX" });
}

TEST(PauliTermContainer, init_initializer_list2) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" } };
	EXPECT_EQ(ptc.nb_terms(), 2);
	EXPECT_EQ(ptc.nb_qubits(), 2);
	auto nopt = ptc[0];
	EXPECT_EQ(nopt.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt, PauliTerm{ "II" });
	auto nopt2 = ptc[1];
	EXPECT_EQ(nopt2.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt2, PauliTerm{ "XX" });
}

TEST(PauliTermContainer, init_iterators_const) {
	std::vector<PauliTerm<coeff_t>> vec{ PauliTerm{ "II" }, PauliTerm{ "XX" } };
	PauliTermContainer<coeff_t> ptc{ vec.cbegin(), vec.cend() };
	EXPECT_EQ(ptc.nb_terms(), 2);
	EXPECT_EQ(ptc.nb_qubits(), 2);
	auto nopt = ptc[0];
	EXPECT_EQ(nopt.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt, PauliTerm{ "II" });
	auto nopt2 = ptc[1];
	EXPECT_EQ(nopt2.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt2, PauliTerm{ "XX" });
}

TEST(PauliTermContainer, init_qubits_const) {
	const PauliTermContainer<coeff_t> ptc{ 32 };
	EXPECT_EQ(ptc.nb_terms(), 0);
	EXPECT_EQ(ptc.nb_qubits(), 32);
}

TEST(PauliTermContainer, init_span_pt1_const) {
	std::vector<PauliTerm<coeff_t>> vec{ PauliTerm{ "II" } };
	const PauliTermContainer<coeff_t> ptc{ vec };
	EXPECT_EQ(ptc.nb_terms(), 1);
	EXPECT_EQ(ptc.nb_qubits(), 2);
	auto nopt = ptc[0];
	EXPECT_EQ(nopt.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt, PauliTerm{ "II" });
}

TEST(PauliTermContainer, init_span_pt2_const) {
	std::vector<PauliTerm<coeff_t>> vec{ PauliTerm{ "II" }, PauliTerm{ "XX" } };
	const PauliTermContainer<coeff_t> ptc{ vec };
	EXPECT_EQ(ptc.nb_terms(), 2);
	EXPECT_EQ(ptc.nb_qubits(), 2);
	auto nopt = ptc[0];
	EXPECT_EQ(nopt.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt, PauliTerm{ "II" });
	auto nopt2 = ptc[1];
	EXPECT_EQ(nopt2.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt2, PauliTerm{ "XX" });
}

TEST(PauliTermContainer, init_initializer_list2_const) {
	const PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" } };
	EXPECT_EQ(ptc.nb_terms(), 2);
	EXPECT_EQ(ptc.nb_qubits(), 2);
	auto nopt = ptc[0];
	EXPECT_EQ(nopt.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt, PauliTerm{ "II" });
	auto nopt2 = ptc[1];
	EXPECT_EQ(nopt2.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt2, PauliTerm{ "XX" });
}

TEST(PauliTermContainer, init_iterators_const_const) {
	std::vector<PauliTerm<coeff_t>> vec{ PauliTerm{ "II" }, PauliTerm{ "XX" } };
	const PauliTermContainer<coeff_t> ptc{ vec.cbegin(), vec.cend() };
	EXPECT_EQ(ptc.nb_terms(), 2);
	EXPECT_EQ(ptc.nb_qubits(), 2);
	auto nopt = ptc[0];
	EXPECT_EQ(nopt.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt, PauliTerm{ "II" });
	auto nopt2 = ptc[1];
	EXPECT_EQ(nopt2.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt2, PauliTerm{ "XX" });
}

TEST(PauliTermContainer, create_empty) {
	PauliTermContainer<coeff_t> ptc{ 2 };
	EXPECT_EQ(ptc.nb_terms(), 0);
	EXPECT_EQ(ptc.nb_qubits(), 2);

	auto new_term = ptc.create_pauliterm();
	EXPECT_EQ(new_term.size(), 2);
	EXPECT_EQ(ptc.nb_terms(), 1);

	new_term.set_coefficient(0.5f);
	new_term[0] = p_z;
	new_term[1] = p_y;

	EXPECT_EQ(ptc[0], PauliTerm("ZY", 0.5f));
}

TEST(PauliTermContainer, create_non_empty) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" } };
	EXPECT_EQ(ptc.nb_terms(), 2);
	EXPECT_EQ(ptc.nb_qubits(), 2);

	auto new_term = ptc.create_pauliterm();
	EXPECT_EQ(new_term.size(), 2);
	EXPECT_EQ(ptc.nb_terms(), 3);

	new_term.set_coefficient(0.5f);
	new_term[0] = p_z;
	new_term[1] = p_y;

	EXPECT_EQ(ptc[0], PauliTerm{ "II" });
	EXPECT_EQ(ptc[1], PauliTerm{ "XX" });
	EXPECT_EQ(ptc[2], PauliTerm("ZY", 0.5f));
}

TEST(PauliTermContainer, create_remove_non_empty) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" } };
	EXPECT_EQ(ptc.nb_terms(), 2);
	EXPECT_EQ(ptc.nb_qubits(), 2);

	auto new_term = ptc.create_pauliterm();
	EXPECT_EQ(new_term.size(), 2);
	EXPECT_EQ(ptc.nb_terms(), 3);

	new_term.set_coefficient(0.5f);
	new_term[0] = p_z;
	new_term[1] = p_y;

	EXPECT_EQ(ptc[0], PauliTerm{ "II" });
	EXPECT_EQ(ptc[1], PauliTerm{ "XX" });
	EXPECT_EQ(ptc[2], PauliTerm("ZY", 0.5f));

	// remove
	ptc.remove_pauliterm(0);
	ASSERT_EQ(ptc.nb_terms(), 2);

	for (auto const& pt : { PauliTerm("XX"), PauliTerm("ZY", 0.5f) }) {
		bool found = false;
		for (std::size_t i = 0; i < ptc.nb_terms(); ++i) {
			if (ptc[i] == pt) {
				found = true;
				break;
			}
		}
		EXPECT_EQ(found, true);
	}

	// get ZY new idx
	std::size_t idx = 0;
	for (idx = 0; idx < ptc.nb_terms(); ++idx) {
		if (ptc[idx] == PauliTerm("ZY", 0.5f)) {
			break;
		}
	}
	ASSERT_NE(idx, ptc.nb_terms());

	ptc.remove_pauliterm(idx);
	ASSERT_EQ(ptc.nb_terms(), 1);
	ASSERT_EQ(ptc[0], PauliTerm("XX"));

	ptc.remove_pauliterm(0);
	ASSERT_EQ(ptc.nb_terms(), 0);
}

TEST(PauliTermContainer, create_remove_create_non_empty) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" } };
	EXPECT_EQ(ptc.nb_terms(), 2);
	EXPECT_EQ(ptc.nb_qubits(), 2);

	auto new_term = ptc.create_pauliterm();
	EXPECT_EQ(new_term.size(), 2);
	EXPECT_EQ(ptc.nb_terms(), 3);

	new_term.set_coefficient(0.5f);
	new_term[0] = p_z;
	new_term[1] = p_y;

	EXPECT_EQ(ptc[0], PauliTerm{ "II" });
	EXPECT_EQ(ptc[1], PauliTerm{ "XX" });
	EXPECT_EQ(ptc[2], PauliTerm("ZY", 0.5f));

	// remove
	ptc.remove_pauliterm(0);
	ASSERT_EQ(ptc.nb_terms(), 2);

	for (auto const& pt : { PauliTerm("XX"), PauliTerm("ZY", 0.5f) }) {
		bool found = false;
		for (std::size_t i = 0; i < ptc.nb_terms(); ++i) {
			if (ptc[i] == pt) {
				found = true;
				break;
			}
		}
		EXPECT_EQ(found, true);
	}

	// get ZY new idx
	std::size_t idx = 0;
	for (idx = 0; idx < ptc.nb_terms(); ++idx) {
		if (ptc[idx] == PauliTerm("ZY", 0.5f)) {
			break;
		}
	}
	ASSERT_NE(idx, ptc.nb_terms());

	ptc.remove_pauliterm(idx);
	ASSERT_EQ(ptc.nb_terms(), 1);
	ASSERT_EQ(ptc[0], PauliTerm("XX"));

	ptc.remove_pauliterm(0);
	ASSERT_EQ(ptc.nb_terms(), 0);

	auto nopt = ptc.create_pauliterm();
	nopt[0] = p_x;
	nopt[1] = p_x;

	nopt.set_coefficient(1.f);

	ASSERT_EQ(ptc[0], PauliTerm("XX", 1.f));
}

TEST(PauliTermContainer, erase_if) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" }, PauliTerm{ "XI" } };
	ASSERT_EQ(ptc.nb_terms(), 3);
	auto deleted = std::erase_if(ptc, [](auto const& p) { return p[0] == p[1]; });
	EXPECT_EQ(deleted, 2);
	EXPECT_EQ(ptc.nb_terms(), 1);
	EXPECT_EQ(ptc[0], PauliTerm{ "XI" });
}

TEST(PauliTermContainer, erase_if_create_after) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" }, PauliTerm{ "XI" } };
	ASSERT_EQ(ptc.nb_terms(), 3);
	auto deleted = std::erase_if(ptc, [](auto const& p) { return p[0] == p[1]; });
	EXPECT_EQ(deleted, 2);
	EXPECT_EQ(ptc.nb_terms(), 1);
	EXPECT_EQ(ptc[0], PauliTerm{ "XI" });

	auto nopt = ptc.create_pauliterm();
	nopt[0] = p_z;
	nopt[1] = p_x;
	nopt.set_coefficient(1.f);
	EXPECT_EQ(ptc[1], PauliTerm{ "ZX" });
}

TEST(PauliTermContainer, iterator_for_range) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" }, PauliTerm{ "ZZ" } };
	for (const auto& ronopt : ptc) {
		EXPECT_EQ(ronopt[0], ronopt[1]);
	}
	for (auto nopt : ptc) {
		nopt[0] = p_y;
	}
	for (const auto& ronopt : ptc) {
		EXPECT_NE(ronopt[0], ronopt[1]);
		EXPECT_EQ(ronopt[0], p_y);
	}
}
