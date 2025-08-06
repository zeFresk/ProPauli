#ifndef PP_TRUNCATE_HPP
#define PP_TRUNCATE_HPP

#include "pauli.hpp"
#include "pauli_term.hpp"

template <typename T = coeff_t>
class CoefficientTruncator {
	T threshold_;

    public:
	CoefficientTruncator(T&& threshold) : threshold_(threshold) {}

	bool operator()(PauliTerm<T> const& pt) { return std::abs(pt.coefficient()) < threshold_; }
};

class WeightTruncator {
	std::size_t weight_threshold_;

    public:
	WeightTruncator(std::size_t&& weight_threshold) : weight_threshold_(weight_threshold) {}

	template <typename T>
	bool operator()(PauliTerm<T> const& pt) {
		return pt.pauli_weight() >= weight_threshold_;
	}
};

#endif
