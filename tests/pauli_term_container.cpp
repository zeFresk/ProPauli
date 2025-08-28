#include "gtest/gtest.h"

#include "pauli.hpp"
#include "pauli_term_container.hpp"
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

TEST(PauliTermContainer, init_sv1) {
	PauliTermContainer<coeff_t> ptc{ "XYZX" };
	EXPECT_EQ(ptc.nb_terms(), 1);
	EXPECT_EQ(ptc.nb_qubits(), 4);
	auto nopt = ptc[0];
	EXPECT_EQ(nopt.size(), ptc.nb_qubits());
	EXPECT_EQ(nopt, PauliTerm<coeff_t>{ "XYZX" });
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

TEST(PauliTermContainer, init_initializer_list2_pt) {
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

TEST(PauliTermContainer, init_initializer_list2_sv) {
	std::initializer_list<std::string_view> svl = { "II", "XX" };
	PauliTermContainer<coeff_t> ptc{ svl };
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
	new_term.set_pauli(0, p_z);
	new_term.set_pauli(1, p_y);

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
	new_term.set_pauli(0, p_z);
	new_term.set_pauli(1, p_y);

	EXPECT_EQ(ptc[0], PauliTerm{ "II" });
	EXPECT_EQ(ptc[1], PauliTerm{ "XX" });
	EXPECT_EQ(ptc[2], PauliTerm("ZY", 0.5f));
}

TEST(PauliTermContainer, duplicate_from) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" } };
	EXPECT_EQ(ptc.nb_terms(), 2);
	EXPECT_EQ(ptc.nb_qubits(), 2);

	auto new_term = ptc.duplicate_pauliterm(0);
	EXPECT_EQ(new_term.size(), 2);
	EXPECT_EQ(ptc.nb_terms(), 3);

	EXPECT_EQ(ptc[0], PauliTerm{ "II" });
	EXPECT_EQ(ptc[1], PauliTerm{ "XX" });
	EXPECT_EQ(ptc[2], PauliTerm{ "II" });
	EXPECT_EQ(new_term, ptc[0]);
}

TEST(PauliTermContainer, create_remove_non_empty) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" } };
	EXPECT_EQ(ptc.nb_terms(), 2);
	EXPECT_EQ(ptc.nb_qubits(), 2);

	auto new_term = ptc.create_pauliterm();
	EXPECT_EQ(new_term.size(), 2);
	EXPECT_EQ(ptc.nb_terms(), 3);

	new_term.set_coefficient(0.5f);
	new_term.set_pauli(0, p_z);
	new_term.set_pauli(1, p_y);

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
	new_term.set_pauli(0, p_z);
	new_term.set_pauli(1, p_y);

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
	nopt.set_pauli(0, p_x);
	nopt.set_pauli(1, p_x);

	nopt.set_coefficient(1.f);

	ASSERT_EQ(ptc[0], PauliTerm("XX", 1.f));
}

TEST(PauliTermContainer, erase_if) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" }, PauliTerm{ "XI" } };
	ASSERT_EQ(ptc.nb_terms(), 3);
	auto deleted = std::erase_if(ptc, [](auto const& p) { return p.get_pauli(0) == p.get_pauli(1); });
	EXPECT_EQ(deleted, 2);
	EXPECT_EQ(ptc.nb_terms(), 1);
	EXPECT_EQ(ptc[0], PauliTerm{ "XI" });
}

TEST(PauliTermContainer, erase_if_create_after) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" }, PauliTerm{ "XI" } };
	ASSERT_EQ(ptc.nb_terms(), 3);
	auto deleted = std::erase_if(ptc, [](auto const& p) { return p.get_pauli(0) == p.get_pauli(1); });
	EXPECT_EQ(deleted, 2);
	EXPECT_EQ(ptc.nb_terms(), 1);
	EXPECT_EQ(ptc[0], PauliTerm{ "XI" });

	auto nopt = ptc.create_pauliterm();
	nopt.set_pauli(0, p_z);
	nopt.set_pauli(1, p_x);
	nopt.set_coefficient(1.f);
	EXPECT_EQ(ptc[1], PauliTerm{ "ZX" });
}

TEST(PauliTermContainer, iterator_for_range) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" }, PauliTerm{ "ZZ" } };
	for (const auto& ronopt : ptc) {
		EXPECT_EQ(ronopt.get_pauli(0), ronopt.get_pauli(1));
	}
	for (auto nopt : ptc) {
		nopt.set_pauli(0, p_y);
	}
	for (const auto& ronopt : ptc) {
		EXPECT_NE(ronopt.get_pauli(0), ronopt.get_pauli(1));
		EXPECT_EQ(ronopt.get_pauli(0), p_y);
	}
}

TEST(PauliTermContainer, iterator_distance) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" }, PauliTerm{ "ZZ" } };
	EXPECT_EQ(std::distance(ptc.begin(), ptc.end()), 3);
}

TEST(PauliTermContainer, iterator_distance_const) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" }, PauliTerm{ "ZZ" } };
	EXPECT_EQ(std::distance(ptc.cbegin(), ptc.cend()), 3);
}

TEST(PauliTermContainer, iterator_distance_after_remove) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" }, PauliTerm{ "ZZ" } };
	for (std::size_t i = 0; i < 3; ++i) {
		EXPECT_EQ(std::distance(ptc.begin(), ptc.end()), 3 - i);
		EXPECT_EQ(ptc.nb_terms(), 3 - i);
		ptc.remove_pauliterm(0);
	}
}

TEST(PauliTermContainer, iterator_distance_const_after_remove) {
	PauliTermContainer<coeff_t> ptc{ PauliTerm{ "II" }, PauliTerm{ "XX" }, PauliTerm{ "ZZ" } };
	for (std::size_t i = 0; i < 3; ++i) {
		EXPECT_EQ(std::distance(ptc.begin(), ptc.end()), 3 - i);
		EXPECT_EQ(ptc.nb_terms(), 3 - i);
		ptc.remove_pauliterm(0);
	}
}
