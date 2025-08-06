#include <benchmark/benchmark.h>

#include <iterator>
#include <utility>
#include <vector>
#include <algorithm>

#include "pauli.hpp"

#include "helper.hpp"

static constexpr std::size_t buffer_size = 1024 * 1024;

static void pauli_empty_benchmark(benchmark::State& state) {
	std::vector<Pauli> random_paulis;
	random_paulis.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_paulis), buffer_size, random_pauli);
	std::size_t i = random_in(buffer_size - 1);
	std::size_t j = random_in(buffer_size - 1);

	for (auto _ : state) {
		// state.PauseTiming();
		auto p1 = random_paulis[i];
		auto p2 = random_paulis[j];
		// state.ResumeTiming();
		benchmark::DoNotOptimize(p1);
		benchmark::DoNotOptimize(p2);

		i = (i + 1) % buffer_size;
		j = (j + 1) % buffer_size;
	}
}

static void pauli_commutes(benchmark::State& state) {
	std::vector<Pauli> random_paulis;
	random_paulis.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_paulis), buffer_size, random_pauli);
	std::size_t i = random_in(buffer_size - 1);
	std::size_t j = random_in(buffer_size - 1);

	for (auto _ : state) {
		// state.PauseTiming();
		auto p1 = random_paulis[i];
		auto p2 = random_paulis[j];
		// state.ResumeTiming();
		benchmark::DoNotOptimize(p1.commutes_with(p2));
		i = (i + 1) % buffer_size;
		j = (j + 1) % buffer_size;
	}
}

static void pauli_apply_pauli(benchmark::State& state) {
	std::vector<Pauli> random_paulis;
	random_paulis.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_paulis), buffer_size, random_pauli);
	std::size_t i = random_in(buffer_size - 1);
	std::size_t j = random_in(buffer_size - 1);

	for (auto _ : state) {
		// state.PauseTiming();
		auto p = random_paulis[i];
		auto pg = static_cast<Pauli_gates>(std::to_underlying(static_cast<Pauli_enum>(random_paulis[j])));
		// state.ResumeTiming();
		auto ret = p.apply_pauli(pg);
		benchmark::DoNotOptimize(ret);

		i = (i + 1) % buffer_size;
		j = (j + 1) % buffer_size;
	}
}

static void pauli_apply_clifford(benchmark::State& state) {
	std::vector<Pauli> random_paulis;
	random_paulis.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_paulis), buffer_size, random_pauli);
	std::vector<Clifford_Gates_1Q> random_cliffords;
	random_cliffords.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_cliffords), buffer_size, random_clifford);
	std::size_t i = random_in(buffer_size - 1);
	std::size_t j = random_in(buffer_size - 1);

	for (auto _ : state) {
		// state.PauseTiming();
		auto p = random_paulis[i];
		auto cg = random_cliffords[j];
		// state.ResumeTiming();
		auto ret = p.apply_clifford(cg);
		benchmark::DoNotOptimize(ret);

		i = (i + 1) % buffer_size;
		j = (j + 1) % buffer_size;
	}
}

static void pauli_apply_cx(benchmark::State& state) {
	std::vector<Pauli> random_paulis;
	random_paulis.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_paulis), buffer_size, random_pauli);
	std::size_t i = random_in(buffer_size - 1);
	std::size_t j = random_in(buffer_size - 1);

	for (auto _ : state) {
		// state.PauseTiming();
		auto p_ctrl = random_paulis[i];
		auto p_target = random_paulis[j];
		// state.ResumeTiming();
		auto ret = p_ctrl.apply_cx(p_target);
		benchmark::DoNotOptimize(ret);

		i = (i + 1) % buffer_size;
		j = (j + 1) % buffer_size;
	}
}

static void pauli_equality(benchmark::State& state) {
	std::vector<Pauli> random_paulis;
	random_paulis.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_paulis), buffer_size, random_pauli);
	std::size_t i = random_in(buffer_size - 1);
	std::size_t j = random_in(buffer_size - 1);

	for (auto _ : state) {
		// state.PauseTiming();
		auto p_lhs = random_paulis[i];
		auto p_rhs = random_paulis[j];
		// state.ResumeTiming();
		benchmark::DoNotOptimize(p_lhs == p_rhs);

		i = (i + 1) % buffer_size;
		j = (j + 1) % buffer_size;
	}
}

static void pauli_weight(benchmark::State& state) {
	std::vector<Pauli> random_paulis;
	random_paulis.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_paulis), buffer_size, random_pauli);
	std::size_t i = random_in(buffer_size - 1);

	for (auto _ : state) {
		benchmark::DoNotOptimize(random_paulis[i].weight());

		i = (i + 1) % buffer_size;
	}
}

static void pauli_apply_unital_noise(benchmark::State& state) {
	std::vector<Pauli> random_paulis;
	std::vector<UnitalNoise> random_noise;
	random_paulis.reserve(buffer_size);
	random_noise.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_paulis), buffer_size, random_pauli);
	std::generate_n(std::back_inserter(random_noise), buffer_size, []() {
		return static_cast<UnitalNoise>(random_in(std::to_underlying(UnitalNoise::Count) - 1));
	});
	std::size_t i = 0;

	for (auto _ : state) {
		auto p = random_paulis[i];
		auto n = random_noise[i];

		auto ret = p.apply_unital_noise(n, 0.99);
		benchmark::DoNotOptimize(ret);

		i = (i + 1) % buffer_size;
	}
}

BENCHMARK(pauli_empty_benchmark);
BENCHMARK(pauli_commutes);
BENCHMARK(pauli_apply_pauli);
BENCHMARK(pauli_apply_clifford);
BENCHMARK(pauli_apply_cx);
BENCHMARK(pauli_equality);
BENCHMARK(pauli_weight);
BENCHMARK(pauli_apply_unital_noise);
