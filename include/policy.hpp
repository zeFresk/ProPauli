#ifndef PP_INCLUDE_POLICIES_HPP
#define PP_INCLUDE_POLICIES_HPP

#include "policies/sequential.hpp"
#include "policies/openmp.hpp"

#include <tuple>
#include <variant>

#if defined(_OPENMP)
static constexpr auto available_policies = std::make_tuple(omp, seq);
using runtime_policy = std::variant<SequentialPolicy, OpenMPPolicy>;

template <typename T>
using RuntimeMerger = std::tuple<SequentialMerger<T>, OpenMPMerger<T>>;

using DefaultExecutionPolicy = OpenMPPolicy;
//using DefaultExecutionPolicy = SequentialPolicy;
#else
static constexpr auto available_policies = std::make_tuple(seq);
using runtime_policy = std::variant<SequentialPolicy>;
using DefaultExecutionPolicy = SequentialPolicy;
#endif

#endif
