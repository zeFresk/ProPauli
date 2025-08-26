#include "pauli_container.hpp"
#include <benchmark/benchmark.h>

#include "pauli.hpp"
#include <cstdint>
#include <utility>

template <typename T>
void expand(std::vector<T>& vec, std::size_t nb) {}

static void Memory_vector_int_resize64x2p16(benchmark::State& state) {
	std::vector<std::int8_t> vec;
	vec.reserve(8);

	for (auto _ : state) {
		for (std::size_t i = 1; i < (1 << 16); ++i) {
			vec.resize((++i) * 64);
			benchmark::DoNotOptimize(vec);
		}

		std::vector<std::int8_t>().swap(vec);
	}
}

static void Memory_vector_Pauli_resize64x2p16(benchmark::State& state) {
	std::vector<Pauli> vec;
	vec.reserve(8);

	for (auto _ : state) {
		for (std::size_t i = 1; i < (1 << 16); ++i) {
			vec.resize((++i) * 64);
			benchmark::DoNotOptimize(vec);
		}

		std::vector<Pauli>().swap(vec);
	}
}

static void Memory_PauliTermContainer_insert64x2p16(benchmark::State& state) {
	PauliTermContainer<coeff_t> ptc(64);

	for (auto _ : state) {
		for (std::size_t i = 1; i < (1 << 16); ++i) {
			auto nopt = ptc.create_pauliterm();
			benchmark::DoNotOptimize(ptc);
		}

		ptc = PauliTermContainer<coeff_t>(64);
	}
}



BENCHMARK(Memory_vector_int_resize64x2p16);
BENCHMARK(Memory_vector_Pauli_resize64x2p16);
BENCHMARK(Memory_PauliTermContainer_insert64x2p16);
