#include "circuit.hpp"

#include "pauli.hpp"
#include <benchmark/benchmark.h>

static void init_circuit(benchmark::State& state) {
	// benchmark
	for (auto _: state) {
		Circuit<NeverTruncator> qc{static_cast<unsigned>(state.range(0))};
		benchmark::DoNotOptimize(qc);
	}
}

BENCHMARK(init_circuit)->Range(2, 1024);

