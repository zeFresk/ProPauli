#ifndef PP_INCLUDE_POLICIES_HPP
#define PP_INCLUDE_POLICIES_HPP

#include "policies/sequential.hpp"
#include "policies/openmp.hpp"

#include <tuple>
#include <variant>

using DefaultExecutionPolicy = SequentialPolicy;

#if defined(_OPENMP)
static constexpr auto available_policies = std::make_tuple(omp, seq);
using runtime_policy = std::variant<SequentialPolicy, OpenMPPolicy>;
#else
static constexpr auto available_policies = std::make_tuple(seq);
using runtime_policy = std::variant<SequentialPolicy>;
#endif

#endif
