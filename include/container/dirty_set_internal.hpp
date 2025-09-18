#ifndef DIRTY_SET_INTERNAL_HPP
#define DIRTY_SET_INTERNAL_HPP

#include <cstdint>

// Include platform-specific headers for SIMD and other intrinsics
#if defined(__SSE2__)
	#include <immintrin.h>
#endif

#if defined(__GNUC__) || defined(__clang__)
// For __builtin_ctz on GCC/Clang
#else
	#include <intrin.h> // For _BitScanForward on MSVC
	#pragma intrinsic(_BitScanForward)
#endif

// --- Portable Prefetch Macro ---
#if defined(__SSE__)
	#define DIRTY_SET_PREFETCH(addr) _mm_prefetch(reinterpret_cast<const char*>(addr), _MM_HINT_T0)
#else
	#define DIRTY_SET_PREFETCH(addr) // Expands to nothing on non-SSE platforms
#endif

namespace DirtySetDetail
{

// --- Portable Bit-Scanning Helper ---
static inline size_t count_trailing_zeros(uint32_t mask) {
#if defined(__GNUC__) || defined(__clang__)
	return __builtin_ctz(mask);
#else
	unsigned long index;
	_BitScanForward(&index, mask);
	return index;
#endif
}

// --- BitMask Helper Struct ---
// A wrapper around a bitmask returned by a group search.
// Provides a clean, portable way to iterate over set bits.
struct BitMask {
	uint32_t mask;
	BitMask(uint32_t m) : mask(m) {}

	inline bool any() const { return mask != 0; }

	inline size_t lowest_set_bit_idx() const { return count_trailing_zeros(mask); }

	inline void clear_lowest_bit() { mask &= (mask - 1); }
};

// --- SIMD Dispatch via Policy Structs ---
// This is the core of the portability and extensibility refactoring.
// We define a policy for each implementation (SSE2, Scalar, and future AVX2/NEON).
// The main DirtySet class will select the best available policy at compile time.

struct ProbePolicyScalar {
	// Represents a group of 16 control bytes using portable C++.
	struct Group {
		const int8_t* ctrl;
		explicit Group(const int8_t* c) : ctrl(c) {}

		inline BitMask match(int8_t h2) const {
			uint32_t mask = 0;
			for (size_t i = 0; i < 16; ++i) {
				if (ctrl[i] == h2) {
					mask |= (1 << i);
				}
			}
			return BitMask(mask);
		}

		inline BitMask match_empty() const { return match(-128); } // K_EMPTY
		inline BitMask match_deleted() const { return match(-127); } // K_DELETED
	};
};

#if defined(__SSE2__)
struct ProbePolicySSE2 {
	// Represents a group of 16 control bytes using SSE2 intrinsics.
	struct Group {
		__m128i ctrl;
		explicit Group(const int8_t* c) { ctrl = _mm_loadu_si128(reinterpret_cast<const __m128i*>(c)); }

		inline BitMask match(int8_t h2) const { return BitMask(_mm_movemask_epi8(_mm_cmpeq_epi8(ctrl, _mm_set1_epi8(h2)))); }

		inline BitMask match_empty() const {
			return match(-128); // K_EMPTY
		}

		inline BitMask match_deleted() const {
			return match(-127); // K_DELETED
		}
	};
};
#endif

} // namespace DirtySetDetail

#endif // DIRTY_SET_INTERNAL_HPP
