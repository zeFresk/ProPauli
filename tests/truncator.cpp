#include "truncate.hpp"

#include "gtest/gtest.h"

#include <memory>

TEST(Truncator, CoefficientTruncator) {
	CoefficientTruncator<> ct{ 0.1f };
	std::vector<PauliTerm<coeff_t>> pts = { { "I", 0.99 }, { "Y", 0.01 } };
	auto ept = pts[0];
	auto removed = ct.truncate(pts);
	EXPECT_EQ(removed, 1);
	EXPECT_EQ(pts.size(), 1);
	EXPECT_EQ(pts[0], ept);
}

TEST(Truncator, WeightTruncator) {
	WeightTruncator wt{ 4 };
	std::vector<PauliTerm<coeff_t>> pts = { { "IIII", 0.5 }, { "YYYY", 0.5 } };
	auto ept = pts[0];
	auto removed = wt.truncate(pts);
	EXPECT_EQ(removed, 1);
	EXPECT_EQ(pts.size(), 1);
	EXPECT_EQ(pts[0], ept);
}

TEST(Truncator, MultiTruncator) {
	WeightTruncator wt{ 4 };
	CoefficientTruncator<> ct{ 0.1f };
	auto mt = combine_truncators(std::move(wt), std::move(ct));
	std::vector<PauliTerm<coeff_t>> pts = { { "IIII", 0.49 }, { "YYYY", 0.49 }, { "IIIX", 0.02 } };
	auto ept = pts[0];
	auto removed = mt.truncate(pts);
	EXPECT_EQ(removed, 2);
	EXPECT_EQ(pts.size(), 1);
	EXPECT_EQ(pts[0], ept);
}

TEST(Truncator, polymorphism) {
	std::unique_ptr<Truncator<coeff_t>> ptr = std::make_unique<WeightTruncator>(3);
	std::unique_ptr<Truncator<coeff_t>> ptr2 = std::make_unique<CoefficientTruncator<>>(0.01f);
	std::unique_ptr<Truncator<coeff_t>> ptr3 =
		combine_truncators_polymorph(WeightTruncator{ 3 }, CoefficientTruncator<>{ 0.01f });
	std::unique_ptr<Truncator<coeff_t>> ptr4 = std::make_unique<NeverTruncator>();

	std::vector<PauliTerm<coeff_t>> pts = { { "IIII", 0.49 }, { "YYYY", 0.49 }, { "IIIX", 0.02 } };
	ptr->truncate(pts);
	ptr2->truncate(pts);
	ptr3->truncate(pts);
	ptr4->truncate(pts);
}
