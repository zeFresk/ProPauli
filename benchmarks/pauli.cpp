#include <algorithm>
#include <benchmark/benchmark.h>

#include <random>
#include <utility>

#include "pauli.hpp"

static std::uniform_int_distribution<> dis(0, static_cast<unsigned>(Pauli_enum::Count) - 1);
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

static void pauli_commutes(benchmark::State& state) {
	for (auto _ : state) {
		// state.PauseTiming();
		auto p1 = random_pauli();
		auto p2 = random_pauli();
		// state.ResumeTiming();
		benchmark::DoNotOptimize(p1.commutes_with(p2));
	}
}

static void pauli_apply_pauli(benchmark::State& state) {
	for (auto _ : state) {
		// state.PauseTiming();
		auto p = random_pauli();
		auto pg = random_pauli_gate();
		// state.ResumeTiming();
		auto ret = p.apply_pauli(pg);
		benchmark::DoNotOptimize(ret);
	}
}

static void pauli_apply_clifford(benchmark::State& state) {
	for (auto _ : state) {
		// state.PauseTiming();
		auto p = random_pauli();
		auto cg = random_clifford();
		// state.ResumeTiming();
		auto ret = p.apply_clifford(cg);
		benchmark::DoNotOptimize(ret);
	}
}

static void pauli_apply_cx(benchmark::State& state) {
	for (auto _ : state) {
		// state.PauseTiming();
		auto p_ctrl = random_pauli();
		auto p_target = random_pauli();
		// state.ResumeTiming();
		auto ret = p_ctrl.apply_cx(p_target);
		benchmark::DoNotOptimize(ret);
	}
}

static void pauli_equality(benchmark::State& state) {
	for (auto _ : state) {
		// state.PauseTiming();
		auto p_lhs = random_pauli();
		auto p_rhs = random_pauli();
		// state.ResumeTiming();
		benchmark::DoNotOptimize(p_lhs == p_rhs);
	}
}

BENCHMARK(pauli_commutes);
BENCHMARK(pauli_apply_pauli);
BENCHMARK(pauli_apply_clifford);
BENCHMARK(pauli_apply_cx);
BENCHMARK(pauli_equality);
