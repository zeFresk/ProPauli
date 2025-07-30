#ifndef PP_MATHS_HPP
#define PP_MATHS_HPP

#include <cmath>

template <typename T>
constexpr auto cos(T&& v) {
	return std::cos(v);
}

template <typename T>
constexpr auto sin(T&& v) {
	return std::sin(v);
}

#endif
