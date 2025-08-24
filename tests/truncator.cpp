#include "truncate.hpp"

#include "gtest/gtest.h"

#include <memory>
#include <random>

TEST(Truncator, CoefficientTruncator) {
	CoefficientTruncator<> ct{ 0.1f };
	std::vector<PauliTerm<coeff_t>> pts_data = { { "I", 0.99 }, { "Y", 0.01 } };
	PauliTermContainer<coeff_t> pts{pts_data};
	auto ept = pts[0];
	auto removed = ct.truncate(pts);
	EXPECT_EQ(removed, 1);
	EXPECT_EQ(pts.nb_terms(), 1);
	EXPECT_EQ(pts[0], ept);
}

TEST(Truncator, WeightTruncator) {
	WeightTruncator wt{ 4 };
	std::vector<PauliTerm<coeff_t>> pts_data= { { "IIII", 0.5 }, { "YYYY", 0.5 } };
	PauliTermContainer<coeff_t> pts{pts_data};
	auto ept = pts[0];
	auto removed = wt.truncate(pts);
	EXPECT_EQ(removed, 1);
	EXPECT_EQ(pts.nb_terms(), 1);
	EXPECT_EQ(pts[0], ept);
}

TEST(Truncator, MultiTruncator) {
	WeightTruncator wt{ 4 };
	CoefficientTruncator<> ct{ 0.1f };
	auto mt = combine_truncators_raw(std::move(wt), std::move(ct));
	std::vector<PauliTerm<coeff_t>> pts_data = { { "IIII", 0.49 }, { "YYYY", 0.49 }, { "IIIX", 0.02 } };
	PauliTermContainer<coeff_t> pts{pts_data};
	auto ept = pts[0];
	auto removed = mt.truncate(pts);
	EXPECT_EQ(removed, 2);
	EXPECT_EQ(pts.nb_terms(), 1);
	EXPECT_EQ(pts[0], ept);
}

TEST(Truncator, polymorphism) {
	std::shared_ptr<Truncator<coeff_t>> ptr = std::make_shared<WeightTruncator>(3);
	std::shared_ptr<Truncator<coeff_t>> ptr2 = std::make_shared<CoefficientTruncator<>>(0.01f);
	std::shared_ptr<Truncator<coeff_t>> ptr3 =
		combine_truncators(WeightTruncator{ 3 }, CoefficientTruncator<>{ 0.01f });
	std::shared_ptr<Truncator<coeff_t>> ptr4 = std::make_shared<NeverTruncator>();

	std::vector<PauliTerm<coeff_t>> pts_data = { { "IIII", 0.49 }, { "YYYY", 0.49 }, { "IIIX", 0.02 } };
	PauliTermContainer<coeff_t> pts{pts_data};
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

	std::size_t truncate(PauliTermContainer<T>& paulis) const override {
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
	PauliTermContainer<coeff_t> pts{pts_data};
	auto ept = pts[1];
	auto removed = dft.truncate(pts);
	EXPECT_EQ(removed, 1);
	EXPECT_EQ(pts.nb_terms(), 1);
	EXPECT_EQ(pts[0], ept);
}

TEST(Truncator, multiple_truncators_at_runtime) {
	std::shared_ptr<Truncator<coeff_t>> mt =
		combine_truncators(WeightTruncator{ 3 }, CoefficientTruncator<>{ 0.1f });
	std::shared_ptr<Truncator<coeff_t>> dft = std::make_shared<DeleteFirstTruncator<coeff_t>>();
	auto runtime_mt = RuntimeMultiTruncators<coeff_t>{mt, dft};

	std::vector<PauliTerm<coeff_t>> pts_data = { { "IIII", 0.49 }, { "YYYY", 0.49 }, { "IIIX", 0.02 }, {"IIIX", 0.3} };
	PauliTermContainer<coeff_t> pts{pts_data};
	auto ept = pts[3];
	auto removed = runtime_mt.truncate(pts);
	EXPECT_EQ(removed, 3);
	EXPECT_EQ(pts.nb_terms(), 1);
	EXPECT_EQ(pts[0], ept);
}
