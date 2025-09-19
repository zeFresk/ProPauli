#include "truncate.hpp"

#include "gtest/gtest.h"

#include <memory>
#include <random>

bool is_in(PauliTermContainer<coeff_t> const& pts, PauliTerm<coeff_t> const& needle) {
	for (std::size_t i = 0; i < pts.nb_terms(); ++i) {
		auto nopt = pts[i];
		if (nopt == needle) {
			return true;
		}
	}
	return false;
}

TEST(Truncator, CoefficientTruncator) {
	CoefficientTruncator<> ct{ 0.1f };
	std::vector<PauliTerm<coeff_t>> pts_data = { { "I", 0.99 }, { "Y", 0.01 }, { "X", 0.5 } };
	PauliTermContainer<coeff_t> pts{ pts_data };
	auto ept = PauliTerm<coeff_t>{ "I", 0.99 };
	auto removed = ct.truncate(pts);
	EXPECT_EQ(removed, 1);
	EXPECT_EQ(pts.nb_terms(), 2);
	EXPECT_EQ(pts[0], ept);

	pts[0].set_coefficient(0.01f);

	auto nopt = pts.duplicate_pauliterm(0);
	nopt.set_pauli(0, p_z);
	nopt.set_coefficient(0.0f);

	removed = ct.truncate(pts);
	EXPECT_EQ(removed, 2);
	EXPECT_EQ(pts.nb_terms(), 1);
	EXPECT_EQ(pts[0], PauliTerm<coeff_t>("X", 0.5));
}

TEST(Truncator, WeightTruncator) {
	WeightTruncator<> wt{ 4 };
	std::vector<PauliTerm<coeff_t>> pts_data = { { "IIII", 0.5 }, { "YYYY", 0.5 } };
	PauliTermContainer<coeff_t> pts{ pts_data };
	auto ept = pts[0];
	auto removed = wt.truncate(pts);
	EXPECT_EQ(removed, 1);
	EXPECT_EQ(pts.nb_terms(), 1);
	EXPECT_EQ(pts[0], ept);
}

TEST(Truncator, KeepNTruncator_basic_positive) {
	static constexpr std::size_t keep_n = 2;
	KeepNTruncator nt{ keep_n };
	std::vector<PauliTerm<coeff_t>> pts_data = { { "IIII", 0.1 }, { "YYYY", 0.2 }, { "IIIX", 0.3 }, { "ZZZZ", 0.4 } };
	PauliTermContainer<coeff_t> pts{ pts_data };
	std::vector<PauliTerm<coeff_t>> expected_in = { { "IIIX", 0.3 }, { "ZZZZ", 0.4 } };
	EXPECT_EQ(pts_data.size(), pts.nb_terms());
	EXPECT_EQ(expected_in.size(), keep_n);

	auto removed = nt.truncate(pts);

	EXPECT_EQ(pts.nb_terms(), keep_n);
	EXPECT_EQ(removed, pts_data.size() - keep_n);
	for (auto const& needle : expected_in) {
		EXPECT_TRUE(is_in(pts, needle));
	}
}

TEST(Truncator, KeepNTruncator_basic_negative) {
	static constexpr std::size_t keep_n = 2;
	KeepNTruncator nt{ keep_n };
	std::vector<PauliTerm<coeff_t>> pts_data = { { "IIII", -0.1 }, { "YYYY", -0.2 }, { "IIIX", -0.3 }, { "ZZZZ", -0.4 } };
	PauliTermContainer<coeff_t> pts{ pts_data };
	std::vector<PauliTerm<coeff_t>> expected_in = { { "IIIX", -0.3 }, { "ZZZZ", -0.4 } };
	EXPECT_EQ(pts_data.size(), pts.nb_terms());
	EXPECT_EQ(expected_in.size(), keep_n);

	auto removed = nt.truncate(pts);

	EXPECT_EQ(pts.nb_terms(), keep_n);
	EXPECT_EQ(removed, pts_data.size() - keep_n);
	for (auto const& needle : expected_in) {
		EXPECT_TRUE(is_in(pts, needle));
	}
}

TEST(Truncator, KeepNTruncator_basic_mixed_signs) {
	static constexpr std::size_t keep_n = 2;
	KeepNTruncator nt{ keep_n };
	std::vector<PauliTerm<coeff_t>> pts_data = { { "IIII", -0.1 }, { "YYYY", 0.2 }, { "IIIX", 0.3 }, { "ZZZZ", -0.4 } };
	PauliTermContainer<coeff_t> pts{ pts_data };
	std::vector<PauliTerm<coeff_t>> expected_in = { { "IIIX", 0.3 }, { "ZZZZ", -0.4 } };
	EXPECT_EQ(pts_data.size(), pts.nb_terms());
	EXPECT_EQ(expected_in.size(), keep_n);

	auto removed = nt.truncate(pts);

	EXPECT_EQ(pts.nb_terms(), keep_n);
	EXPECT_EQ(removed, pts_data.size() - keep_n);
	for (auto const& needle : expected_in) {
		EXPECT_TRUE(is_in(pts, needle));
	}
}

auto keepn_test_stl(PauliTermContainer<coeff_t> const& ptc, std::vector<PauliTerm<coeff_t>> const& data, std::size_t kn) {
	std::vector<coeff_t> coeffs_only;
	coeffs_only.reserve(ptc.nb_terms());
	for (const auto& term : ptc) {
		coeffs_only.push_back(std::abs(term.coefficient()));
	}

	// 2. Perform the EXACT same nth_element and resize logic on this simple vector.
	auto nth_it_coeffs = coeffs_only.begin() + (kn);
	std::nth_element(coeffs_only.begin(), nth_it_coeffs, coeffs_only.end(), std::greater<coeff_t>{});
	coeffs_only.resize(kn); // This is equivalent to your erase_to_end(kn)

	// 3. Sort both the result and the ground truth for easy comparison.
	std::sort(coeffs_only.begin(), coeffs_only.end());

	std::vector<coeff_t> ground_truth_coeffs;
	ground_truth_coeffs.reserve(data.size());
	for (size_t i = 0; i < data.size(); ++i) {
		ground_truth_coeffs.push_back(std::abs(data[i].coefficient()));
	}
	std::sort(ground_truth_coeffs.begin(), ground_truth_coeffs.end(), [](auto l, auto r) { return l > r; });
	ground_truth_coeffs.resize(kn);
	std::reverse(ground_truth_coeffs.begin(), ground_truth_coeffs.end());

	// 4. Assert that the results are identical.
	// This proves the algorithm works correctly on standard types.
	return std::pair{ coeffs_only, ground_truth_coeffs };
}

TEST(Truncator, KeepNTruncator_edge_case) {
	static constexpr std::size_t keep_n = 2;
	KeepNTruncator nt{ keep_n };
	std::vector<PauliTerm<coeff_t>> pts_data = {
		{ "IIII", 0.5 }, { "ZYXI", 0.11 }, { "YYYY", -0.6 }, { "IXYZ", 0.1 }, { "IIIX", -0.4 }
	};
	PauliTermContainer<coeff_t> pts{ pts_data };
	std::vector<PauliTerm<coeff_t>> expected_in = { { "YYYY", -0.6 }, { "IIII", 0.5 } };
	EXPECT_EQ(pts_data.size(), pts.nb_terms());
	EXPECT_EQ(expected_in.size(), keep_n);

	auto removed = nt.truncate(pts);

	EXPECT_EQ(pts.nb_terms(), keep_n);
	EXPECT_EQ(removed, pts_data.size() - keep_n);
	for (auto const& needle : expected_in) {
		EXPECT_TRUE(is_in(pts, needle));
	}
}

// X times: Generate observable of Mx N qubits pauli term, KeepN=L a random number, ensure it is correctly done.
TEST(Truncator, KeepNTruncator_random) {
	static constexpr std::size_t nb_runs = 100;
	static constexpr std::size_t pauli_size = 8;
	static constexpr std::size_t obs_size = 5;
	static constexpr std::string_view chars = "IXYZ";
	std::mt19937 gen{ 42 };
	std::uniform_int_distribution<> dis_ps(0, chars.size() - 1);
	std::uniform_int_distribution<> dis_kn{ 2, obs_size - 1 };
	std::uniform_real_distribution<coeff_t> dis_coeff{ 0.f, 1.f };
	for (std::size_t k = 0; k < nb_runs; ++k) {
		std::vector<PauliTerm<coeff_t>> data;
		data.reserve(obs_size);
		std::generate_n(std::back_inserter(data), obs_size, [&]() {
			std::string ps(pauli_size, 'I');
			for (std::size_t i = 0; i < ps.size(); ++i)
				ps[i] = chars[dis_ps(gen)];
			return PauliTerm<coeff_t>{ ps, dis_coeff(gen) };
		});
		PauliTermContainer<coeff_t> ptc{ data };

		std::size_t kn = dis_kn(gen);
		KeepNTruncator kt{ kn };

		// check that the STL implementation is correct
		auto [coeffs_only, ground_truth_coeffs] = keepn_test_stl(ptc, data, kn);
		EXPECT_EQ(coeffs_only.size(), kn);
		EXPECT_EQ(coeffs_only, ground_truth_coeffs) << "Isolation test failed: The bug might be in the truncate logic itself!";

		kt.truncate(ptc);

		std::sort(data.begin(), data.end(),
			  [](auto const& lhs, auto const& rhs) { return abs(lhs.coefficient()) < abs(rhs.coefficient()); });
		std::reverse(data.begin(), data.end());

		bool ok = true;
		std::size_t i = 0;
		for (i = 0; ok && i < kn; ++i) {
			ok = ok && is_in(ptc, data[i]);
			EXPECT_TRUE(ok);
		}
		if (!ok) {
			std::cerr << data[i - 1] << " not found for KeepN=" << kn << "\n\nOriginal data (sorted):\n";
			for (std::size_t i = 0; i < data.size(); ++i)
				std::cerr << i << ": " << data[i] << (i < kn ? "\n" : "[deleted]\n");
			std::cerr << "\n\nResult from KeepN:\n";
			for (std::size_t i = 0; i < ptc.nb_terms(); ++i)
				std::cerr << i << ": " << ptc[i] << "\n";
		}
		ASSERT_TRUE(ok);
	}
}

TEST(Truncator, MultiTruncator) {
	WeightTruncator<> wt{ 4 };
	CoefficientTruncator<> ct{ 0.1f };
	auto mt = combine_truncators_raw(std::move(wt), std::move(ct));
	std::vector<PauliTerm<coeff_t>> pts_data = { { "IIII", 0.49 }, { "YYYY", 0.49 }, { "IIIX", 0.02 } };
	PauliTermContainer<coeff_t> pts{ pts_data };
	auto ept = pts[0];
	auto removed = mt.truncate(pts);
	EXPECT_EQ(removed, 2);
	EXPECT_EQ(pts.nb_terms(), 1);
	EXPECT_EQ(pts[0], ept);
}

TEST(Truncator, polymorphism) {
	std::shared_ptr<Truncator<coeff_t>> ptr = std::make_shared<WeightTruncator<>>(3);
	std::shared_ptr<Truncator<coeff_t>> ptr2 = std::make_shared<CoefficientTruncator<>>(0.01f);
	std::shared_ptr<Truncator<coeff_t>> ptr3 = combine_truncators(WeightTruncator<>{ 3 }, CoefficientTruncator<>{ 0.01f });
	std::shared_ptr<Truncator<coeff_t>> ptr4 = std::make_shared<NeverTruncator<>>();

	std::vector<PauliTerm<coeff_t>> pts_data = { { "IIII", 0.49 }, { "YYYY", 0.49 }, { "IIIX", 0.02 } };
	PauliTermContainer<coeff_t> pts{ pts_data };
	ptr->truncate(pts);
	ptr2->truncate(pts);
	ptr3->truncate(pts);
	ptr4->truncate(pts);
}

template <typename T = coeff_t>
class DeleteFirstTruncator : public Truncator<T> {
    public:
	DeleteFirstTruncator() {}
	~DeleteFirstTruncator() override {}

	std::size_t truncate(PauliTermContainer<T>& paulis) override {
		if (paulis.nb_terms() >= 1) {
			paulis.remove_pauliterm(0);
			return 1;
		} else {
			return 0;
		}
	}
};

TEST(Truncator, CustomTruncator) {
	DeleteFirstTruncator dft{};
	std::vector<PauliTerm<coeff_t>> pts_data = { { "IIII", 0.5 }, { "YYYY", 0.5 } };
	PauliTermContainer<coeff_t> pts{ pts_data };
	auto removed = dft.truncate(pts);
	EXPECT_EQ(removed, 1);
	EXPECT_EQ(pts.nb_terms(), 1);
	EXPECT_EQ(pts[0], PauliTerm("YYYY", 0.5f));
}

TEST(Truncator, multiple_truncators_at_runtime) {
	std::shared_ptr<Truncator<coeff_t>> mt = combine_truncators(WeightTruncator<>{ 3 }, CoefficientTruncator<>{ 0.1f });
	std::shared_ptr<Truncator<coeff_t>> dft = std::make_shared<DeleteFirstTruncator<coeff_t>>();
	auto runtime_mt = RuntimeMultiTruncators<coeff_t>{ mt, dft };

	std::vector<PauliTerm<coeff_t>> pts_data = { { "IIII", 0.49 }, { "YYYY", 0.49 }, { "IIIX", 0.02 }, { "IIIX", 0.3 } };
	PauliTermContainer<coeff_t> pts{ pts_data };
	auto removed = runtime_mt.truncate(pts);
	EXPECT_EQ(removed, 3);
	EXPECT_EQ(pts.nb_terms(), 1);
	EXPECT_EQ(pts[0], PauliTerm("IIIX", 0.3f));
}
