#include <algorithm>
#include <benchmark/benchmark.h>

#include <iterator>

#include "pauli_term.hpp"
#include "pauli.hpp"

#include "helper.hpp"

static constexpr std::size_t buffer_size = 1024 * 1024;

static void pauli_term_init_from_string(benchmark::State& state) {
	std::vector<std::string> strs;
	std::vector<coeff_t> coeffs;
	auto const len = state.range(0);
	auto const bfs = buffer_size / len;
	strs.reserve(bfs);
	coeffs.reserve(buffer_size);
	std::generate_n(std::back_inserter(strs), bfs, [=]() { return random_pauli_string(len); });
	std::generate_n(std::back_inserter(coeffs), buffer_size, random_coeff);
	std::size_t i = random_in(bfs-1);
	std::size_t j = random_in(buffer_size-1);

	for (auto _ : state) {
		auto pt = PauliTerm{strs[i], coeffs[j]};
		
		i = (i+1) % bfs;
		j = (j+1) % buffer_size;
	}
}

BENCHMARK(pauli_term_init_from_string)->Range(1, 1024);
