#include <benchmark/benchmark.h>

#include <iterator>
#include <random>
#include <utility>
#include <vector>
#include <algorithm>

#include "pauli.hpp"

static std::mt19937 gen(0);

Pauli random_pauli() {
	static std::uniform_int_distribution<> dis(0, static_cast<unsigned>(Pauli_enum::Count) - 1);
	return Pauli{ static_cast<Pauli_enum>(dis(gen)) };
}

Pauli_gates random_pauli_gate() {
	static std::uniform_int_distribution<> dis(0, static_cast<unsigned>(Pauli_gates::Count) - 1);
	return static_cast<Pauli_gates>(dis(gen));
}

Clifford_Gates_1Q random_clifford() {
	if constexpr (std::to_underlying(Clifford_Gates_1Q::Count) > 1) {
		static std::uniform_int_distribution<> dis(0, static_cast<unsigned>(Clifford_Gates_1Q::Count) - 1);
		return static_cast<Clifford_Gates_1Q>(dis(gen));
	} else {
		return static_cast<Clifford_Gates_1Q>(0);
	}
}

static constexpr std::size_t buffer_size = 1024 * 1024;
static std::uniform_int_distribution<> dis_buffer(0, buffer_size - 1);

static void pauli_empty_benchmark(benchmark::State& state) {
	std::vector<Pauli> random_paulis;
	random_paulis.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_paulis), buffer_size, random_pauli);
	std::size_t i = dis_buffer(gen);
	std::size_t j = dis_buffer(gen);

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
	std::size_t i = dis_buffer(gen);
	std::size_t j = dis_buffer(gen);

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
	std::size_t i = dis_buffer(gen);
	std::size_t j = dis_buffer(gen);

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
	std::size_t i = dis_buffer(gen);
	std::size_t j = dis_buffer(gen);

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
	std::size_t i = dis_buffer(gen);
	std::size_t j = dis_buffer(gen);

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
	std::size_t i = dis_buffer(gen);
	std::size_t j = dis_buffer(gen);

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

BENCHMARK(pauli_empty_benchmark);
BENCHMARK(pauli_commutes);
BENCHMARK(pauli_apply_pauli);
BENCHMARK(pauli_apply_clifford);
BENCHMARK(pauli_apply_cx);
BENCHMARK(pauli_equality);
