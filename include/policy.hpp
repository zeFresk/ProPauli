#ifndef PP_INCLUDE_POLICIES_HPP
#define PP_INCLUDE_POLICIES_HPP

#include "policies/sequential.hpp"
#include "policies/openmp.hpp"

#include <tuple>
#include <variant>

// Helper type trait
template <typename T>
struct is_variant : std::false_type {};
template <typename... Args>
struct is_variant<std::variant<Args...>> : std::true_type {};

// Concept that checks if a type IS a std::variant
template <typename T>
concept IsVariant = is_variant<std::decay_t<T>>::value;

// Concept that checks if a type IS NOT a std::variant
template <typename T>
concept IsNotVariant = !is_variant<std::decay_t<T>>::value;


#if defined(_OPENMP)
static constexpr auto available_policies = std::make_tuple(par, seq);
using RuntimePolicy = std::variant<SequentialPolicy, OpenMPPolicy>;

template <typename T>
using RuntimeMerger = std::tuple<SequentialMerger<T>, OpenMPMerger<T>>;

// using DefaultExecutionPolicy = OpenMPPolicy;
using DefaultExecutionPolicy = SequentialPolicy;
#else
static constexpr auto available_policies = std::make_tuple(seq);
using RuntimePolicy = std::variant<SequentialPolicy>;
using DefaultExecutionPolicy = SequentialPolicy;
#endif

#endif
