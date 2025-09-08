#include "circuit.hpp"

#include "helper.hpp"
#include "pauli.hpp"
#include "truncate.hpp"
#include <benchmark/benchmark.h>
#include <cmath>
#include <string_view>

static constexpr std::size_t buffer_size = 1024 * 1024;
static constexpr std::array<std::string_view, 4> paulis_strings = { "I", "X", "Y", "Z" };

static void Circuit_init(benchmark::State& state) {
	for (auto _ : state) {
		Circuit qc{ static_cast<unsigned>(state.range(0)) };
		benchmark::DoNotOptimize(qc);
	}
}

static void Circuit_add_pauli_string(benchmark::State& state) {
	std::vector<std::string> random_paulis;
	random_paulis.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_paulis), buffer_size,
			[&]() { return std::string{ paulis_strings[random_in(paulis_strings.size() - 1)] }; });

	std::size_t i = 0;
	auto qc = Circuit{ 1 };

	for (auto _ : state) {
		if (i >= buffer_size) {
			qc.reset();
			i = 0;
		}
		qc.add_operation(random_paulis[i++], 0);
	}
}

static void Circuit_add_random_string(benchmark::State& state) {
	std::vector<std::size_t> random_num;
	random_num.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_num), buffer_size, []() { return random_in(9); });

	std::size_t i = 0;
	auto qc = Circuit{ 2 };

	for (auto _ : state) {
		if (i >= buffer_size) {
			qc = Circuit{ 2 };
			i = 0;
		}
		switch (random_num[i]) {
		case 0:
			qc.add_operation("I", 0);
			break;
		case 1:
			qc.add_operation("X", 0);
			break;
		case 2:
			qc.add_operation("Y", 0);
			break;
		case 3:
			qc.add_operation("Z", 0);
			break;
		case 4:
			qc.add_operation("H", 0);
			break;
		case 5:
			qc.add_operation("CX", 0u, 1u);
			break;
		case 6:
			qc.add_operation("RZ", 0, 0.5f);
			break;
		case 7:
			qc.add_operation("AMPLITUDEDAMPING", 0, 0.5f);
			break;
		case 8:
			qc.add_operation("DEPOLARIZING", 0, 0.5f);
			break;
		case 9:
			qc.add_operation("DEPHASING", 0, 0.5f);
			break;
		}
	}
}

static void Circuit_run_paulis(benchmark::State& state) {
	const unsigned nb_gates = state.range(1);
	std::vector<std::size_t> random_num;
	random_num.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_num), buffer_size, [&]() { return random_in(state.range(0) - 1); });

	auto qc = Circuit{ static_cast<unsigned>(state.range(0)) };

	for (unsigned i = 0; i < nb_gates; ++i) {
		switch (random_num[i] % 4) {
		case 0:
			qc.add_operation("I", random_num[i]);
			break;
		case 1:
			qc.add_operation("X", random_num[i]);
			break;
		case 2:
			qc.add_operation("Y", random_num[i]);
			break;
		case 3:
			qc.add_operation("Z", random_num[i]);
			break;
		}
	}

	auto target_obs = Observable{ random_pauli_string(state.range(0)) };

	for (auto _ : state) {
		auto res = qc.run(target_obs);
		benchmark::DoNotOptimize(res);
	}

	state.SetItemsProcessed(state.iterations() * nb_gates);
	state.counters["GateSpeed"] = benchmark::Counter(state.iterations() * nb_gates,
							 benchmark::Counter::kIsRate | benchmark::Counter::kInvert);
}

class Circuit_ZZ_feature_map : public benchmark::Fixture {
    public:
	Circuit<> qc;
	unsigned nb_qubits;
	Circuit_ZZ_feature_map() : qc{ 0 } {}
	void SetUp(benchmark::State const& state) override {
		nb_qubits = state.range(0);
		qc = Circuit(nb_qubits);

		// H
		for (unsigned i = 0; i < nb_qubits; ++i)
			qc.add_operation("H", i);

		// Rz
		for (unsigned i = 0; i < nb_qubits; ++i)
			qc.add_operation("Rz", i, static_cast<coeff_t>(random_coeff() * pi));

		// non optimal cx - rz - cx
		for (unsigned i = 0; i < nb_qubits - 1; ++i) {
			qc.add_operation("Cx", i, i + 1);
			qc.add_operation("Rz", i + 1, static_cast<coeff_t>(random_coeff() * pi));
			qc.add_operation("Cx", i, i + 1);
		}
	}
	void TearDown([[maybe_unused]] benchmark::State const& state) override {}
	~Circuit_ZZ_feature_map() override {}
};

BENCHMARK_DEFINE_F(Circuit_ZZ_feature_map, GlobalObservable)(benchmark::State& state) {
	auto obs = Observable{ std::string(state.range(0), 'Z') };

	for (auto _ : state) {
		auto res = this->qc.run(obs);
		benchmark::DoNotOptimize(res);
	}
}

BENCHMARK_DEFINE_F(Circuit_ZZ_feature_map, ZLocal)(benchmark::State& state) {
	auto obs = Observable{ std::string(state.range(0) - 1, 'Z') + "I" };

	for (auto _ : state) {
		auto res = this->qc.run(obs);
		benchmark::DoNotOptimize(res);
	}
}

void r_y(auto& qc, unsigned qubit, coeff_t theta) {
	qc.add_operation("Rz", qubit, pi / 2.f);
	qc.add_operation("H", qubit);
	qc.add_operation("Rz", qubit, theta);
	qc.add_operation("H", qubit);
	qc.add_operation("Rz", qubit, -pi / 2.f);
}

class Circuit_Efficient_SU2 : public benchmark::Fixture {
    public:
	Circuit<> qc;
	unsigned nb_qubits;
	Circuit_Efficient_SU2() : qc{ 0 } {}
	void SetUp(benchmark::State const& state) override {
		nb_qubits = state.range(0);
		qc = Circuit(nb_qubits);

		// Ry
		for (unsigned i = 0; i < nb_qubits; ++i)
			r_y(qc, i, random_coeff() * pi);

		// Rz
		for (unsigned i = 0; i < nb_qubits; ++i)
			qc.add_operation("Rz", i, static_cast<coeff_t>(random_coeff() * pi));

		// cx full
		for (unsigned i = 0; i < nb_qubits - 1; ++i) {
			for (unsigned j = 0; j < nb_qubits - 1; ++j) {
				if (i < j) {
					qc.add_operation("Cx", i, j);
				}
			}
		}

		// Ry
		for (unsigned i = 0; i < nb_qubits; ++i)
			r_y(qc, i, random_coeff() * pi);

		// Rz
		for (unsigned i = 0; i < nb_qubits; ++i)
			qc.add_operation("Rz", i, static_cast<coeff_t>(random_coeff() * pi));
	}
	void TearDown([[maybe_unused]] benchmark::State const& state) override {}
	~Circuit_Efficient_SU2() override {}
};

BENCHMARK_DEFINE_F(Circuit_Efficient_SU2, GlobalObservable)(benchmark::State& state) {
	auto obs = Observable{ std::string(state.range(0), 'Z') };

	for (auto _ : state) {
		auto res = this->qc.run(obs);
		benchmark::DoNotOptimize(res);
	}
}

BENCHMARK_DEFINE_F(Circuit_Efficient_SU2, withCoefficientTruncation01)(benchmark::State& state) {
	auto obs = Observable{ std::string(state.range(0), 'Z') };

	qc.set_truncator(std::make_shared<CoefficientTruncator<>>(0.01f));
	qc.set_truncator(std::make_shared<CoefficientTruncator<>>(0.01f));

	for (auto _ : state) {
		auto res = this->qc.run(obs);
		benchmark::DoNotOptimize(res);
	}
}

BENCHMARK_DEFINE_F(Circuit_Efficient_SU2, withWeightTruncation4)(benchmark::State& state) {
	auto obs = Observable{ std::string(state.range(0), 'Z') };

	qc.set_truncator(std::make_shared<WeightTruncator<>>(4));

	for (auto _ : state) {
		auto res = this->qc.run(obs);
		benchmark::DoNotOptimize(res);
	}
}

BENCHMARK_DEFINE_F(Circuit_Efficient_SU2, withMultiTruncation6001)(benchmark::State& state) {
	auto obs = Observable{ std::string(state.range(0), 'Z') };

	qc.set_truncator(combine_truncators(CoefficientTruncator<>{ 0.001f }, WeightTruncator<>{ 6 }));

	for (auto _ : state) {
		auto res = this->qc.run(obs);
		benchmark::DoNotOptimize(res);
	}
}

BENCHMARK(Circuit_init)->Range(1024, 1024);
BENCHMARK(Circuit_add_pauli_string);
BENCHMARK(Circuit_add_random_string);
BENCHMARK(Circuit_run_paulis)->Ranges({ { 512, 512 }, { 1, 1024 } });
BENCHMARK_REGISTER_F(Circuit_ZZ_feature_map, GlobalObservable)->RangeMultiplier(2)->Range(2, 8);
BENCHMARK_REGISTER_F(Circuit_ZZ_feature_map, ZLocal)->RangeMultiplier(2)->Range(2, 8);
BENCHMARK_REGISTER_F(Circuit_Efficient_SU2, GlobalObservable)->RangeMultiplier(2)->Range(2, 8);
BENCHMARK_REGISTER_F(Circuit_Efficient_SU2, withCoefficientTruncation01)->RangeMultiplier(2)->Range(2, 8);
BENCHMARK_REGISTER_F(Circuit_Efficient_SU2, withWeightTruncation4)->RangeMultiplier(2)->Range(2, 8);
BENCHMARK_REGISTER_F(Circuit_Efficient_SU2, withMultiTruncation6001)->RangeMultiplier(2)->Range(2, 64);
