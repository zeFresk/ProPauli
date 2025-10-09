#include <benchmark/benchmark.h>

#include "circuit.hpp"
#include "symbolic/coefficient.hpp"
#include "observable.hpp"

#include "helper.hpp"
#include <fstream>
#include <ios>

class SymbolicMaxCutQAOAN4P3 : public benchmark::Fixture {
    public:
	Observable<SymbolicCoefficient<coeff_t>> obs{ "ZZII", "ZIZI", "IZZI", "ZIIZ", "IZIZ", "IIZZ" };
	Circuit<SymbolicCoefficient<coeff_t>> qc{ 4 };
	std::unordered_map<std::string, coeff_t> variables = { { "g0", 0.5f }, { "g1", 0.75f }, { "g2", 0.875f },
							       { "b0", 0.5f }, { "b1", 0.25f }, { "b2", 0.125f } };

	SymbolicMaxCutQAOAN4P3() {}
	void SetUp([[maybe_unused]] benchmark::State const& state) override {
		// QAOA p=3 for N=4 graph of degree 3, seed = 21
		qc.add_operation("h", 0);
		qc.add_operation("h", 1);
		qc.add_operation("h", 2);
		qc.add_operation("h", 3);
		qc.add_operation("cx", 0, 1);
		qc.add_operation("rz", 1, Variable("g0"));
		qc.add_operation("cx", 0, 1);
		qc.add_operation("cx", 0, 3);
		qc.add_operation("rz", 3, Variable("g0"));
		qc.add_operation("cx", 0, 3);
		qc.add_operation("cx", 0, 2);
		qc.add_operation("rz", 2, Variable("g0"));
		qc.add_operation("cx", 0, 2);
		qc.add_operation("cx", 1, 2);
		qc.add_operation("rz", 2, Variable("g0"));
		qc.add_operation("cx", 1, 2);
		qc.add_operation("cx", 1, 3);
		qc.add_operation("rz", 3, Variable("g0"));
		qc.add_operation("cx", 1, 3);
		qc.add_operation("cx", 2, 3);
		qc.add_operation("rz", 3, Variable("g0"));
		qc.add_operation("cx", 2, 3);
		qc.add_operation("h", 0);
		qc.add_operation("rz", 0, Variable("b0"));
		qc.add_operation("h", 0);
		qc.add_operation("h", 1);
		qc.add_operation("rz", 1, Variable("b0"));
		qc.add_operation("h", 1);
		qc.add_operation("h", 2);
		qc.add_operation("rz", 2, Variable("b0"));
		qc.add_operation("h", 2);
		qc.add_operation("h", 3);
		qc.add_operation("rz", 3, Variable("b0"));
		qc.add_operation("h", 3);
		qc.add_operation("cx", 0, 1);
		qc.add_operation("rz", 1, Variable("g1"));
		qc.add_operation("cx", 0, 1);
		qc.add_operation("cx", 0, 3);
		qc.add_operation("rz", 3, Variable("g1"));
		qc.add_operation("cx", 0, 3);
		qc.add_operation("cx", 0, 2);
		qc.add_operation("rz", 2, Variable("g1"));
		qc.add_operation("cx", 0, 2);
		qc.add_operation("cx", 1, 2);
		qc.add_operation("rz", 2, Variable("g1"));
		qc.add_operation("cx", 1, 2);
		qc.add_operation("cx", 1, 3);
		qc.add_operation("rz", 3, Variable("g1"));
		qc.add_operation("cx", 1, 3);
		qc.add_operation("cx", 2, 3);
		qc.add_operation("rz", 3, Variable("g1"));
		qc.add_operation("cx", 2, 3);
		qc.add_operation("h", 0);
		qc.add_operation("rz", 0, Variable("b1"));
		qc.add_operation("h", 0);
		qc.add_operation("h", 1);
		qc.add_operation("rz", 1, Variable("b1"));
		qc.add_operation("h", 1);
		qc.add_operation("h", 2);
		qc.add_operation("rz", 2, Variable("b1"));
		qc.add_operation("h", 2);
		qc.add_operation("h", 3);
		qc.add_operation("rz", 3, Variable("b1"));
		qc.add_operation("h", 3);
		qc.add_operation("cx", 0, 1);
		qc.add_operation("rz", 1, Variable("g2"));
		qc.add_operation("cx", 0, 1);
		qc.add_operation("cx", 0, 3);
		qc.add_operation("rz", 3, Variable("g2"));
		qc.add_operation("cx", 0, 3);
		qc.add_operation("cx", 0, 2);
		qc.add_operation("rz", 2, Variable("g2"));
		qc.add_operation("cx", 0, 2);
		qc.add_operation("cx", 1, 2);
		qc.add_operation("rz", 2, Variable("g2"));
		qc.add_operation("cx", 1, 2);
		qc.add_operation("cx", 1, 3);
		qc.add_operation("rz", 3, Variable("g2"));
		qc.add_operation("cx", 1, 3);
		qc.add_operation("cx", 2, 3);
		qc.add_operation("rz", 3, Variable("g2"));
		qc.add_operation("cx", 2, 3);
		qc.add_operation("h", 0);
		qc.add_operation("rz", 0, Variable("b2"));
		qc.add_operation("h", 0);
		qc.add_operation("h", 1);
		qc.add_operation("rz", 1, Variable("b2"));
		qc.add_operation("h", 1);
		qc.add_operation("h", 2);
		qc.add_operation("rz", 2, Variable("b2"));
		qc.add_operation("h", 2);
		qc.add_operation("h", 3);
		qc.add_operation("rz", 3, Variable("b2"));
		qc.add_operation("h", 3);
	}
	void TearDown([[maybe_unused]] benchmark::State const& state) override { qc = decltype(qc){ 4 }; }
	~SymbolicMaxCutQAOAN4P3() override {}
};

BENCHMARK_DEFINE_F(SymbolicMaxCutQAOAN4P3, run)(benchmark::State& state) {
	for (auto _ : state) {
		auto res = qc.run(obs);
		benchmark::DoNotOptimize(res);
	}
}

BENCHMARK_DEFINE_F(SymbolicMaxCutQAOAN4P3, ev)(benchmark::State& state) {
	auto res = qc.run(obs);

	for (auto _ : state) {
		auto ev = res.expectation_value();
		benchmark::DoNotOptimize(ev);
	}
}

BENCHMARK_DEFINE_F(SymbolicMaxCutQAOAN4P3, ev_evaluate)(benchmark::State& state) {
	auto res = qc.run(obs);
	auto ev = res.expectation_value();

	for (auto _ : state) {
		auto eval = ev.evaluate(variables);
		benchmark::DoNotOptimize(eval);
	}
}

BENCHMARK_DEFINE_F(SymbolicMaxCutQAOAN4P3, ev_simplify)(benchmark::State& state) {
	auto res = qc.run(obs);
	auto ev = res.expectation_value();

	for (auto _ : state) {
		auto ev_simp = ev.simplified();
		benchmark::DoNotOptimize(ev_simp);
	}
}

BENCHMARK_DEFINE_F(SymbolicMaxCutQAOAN4P3, ev_optimize)(benchmark::State& state) {
	auto res = qc.run(obs);
	auto ev = res.expectation_value();

	for (auto _ : state) {
		auto ev_simp = ev.optimize();
		benchmark::DoNotOptimize(ev_simp);
	}
}

BENCHMARK_DEFINE_F(SymbolicMaxCutQAOAN4P3, ev_simplified_evaluate)(benchmark::State& state) {
	auto res = qc.run(obs);
	auto ev_simp = res.expectation_value().simplified();

	for (auto _ : state) {
		auto ev = ev_simp.evaluate(variables);
		benchmark::DoNotOptimize(ev);
	}
}

BENCHMARK_DEFINE_F(SymbolicMaxCutQAOAN4P3, ev_optimized_evaluate)(benchmark::State& state) {
	auto res = qc.run(obs);
	auto ev_simp = res.expectation_value().optimize();

	for (auto _ : state) {
		auto ev = ev_simp.evaluate(variables);
		benchmark::DoNotOptimize(ev);
	}
}

BENCHMARK_REGISTER_F(SymbolicMaxCutQAOAN4P3, run);
BENCHMARK_REGISTER_F(SymbolicMaxCutQAOAN4P3, ev);
BENCHMARK_REGISTER_F(SymbolicMaxCutQAOAN4P3, ev_evaluate);
BENCHMARK_REGISTER_F(SymbolicMaxCutQAOAN4P3, ev_simplify);
BENCHMARK_REGISTER_F(SymbolicMaxCutQAOAN4P3, ev_optimize);
BENCHMARK_REGISTER_F(SymbolicMaxCutQAOAN4P3, ev_simplified_evaluate);
BENCHMARK_REGISTER_F(SymbolicMaxCutQAOAN4P3, ev_optimized_evaluate);
