#ifndef PP_MERGE_HPP
#define PP_MERGE_HPP

/**
 * @file merge.hpp
 * @brief Provides an algorithm for merging identical Pauli terms.
 *
 * This file contains the implementation for merging Pauli terms within a `PauliTermContainer`.
 * Merging is a crucial simplification step in the simulation, where terms with identical
 * Pauli strings are combined into a single term by summing their coefficients. This reduces
 * the total number of terms and, consequently, the computational cost.
 */

#include "pauli_term_container.hpp"

#include <policy.hpp>

#include <algorithm>
#include <type_traits>

/*
* Merger code was moved to policies
*/

template <typename T>
using Merger = DefaultExecutionPolicy::Merger<T>;

#endif
