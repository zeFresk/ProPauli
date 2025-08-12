#include <algorithm>
#include <benchmark/benchmark.h>

#include <iterator>

#include "pauli_term.hpp"
#include "pauli.hpp"

#include "helper.hpp"

static constexpr std::size_t buffer_size = 1024 * 1024;

static void PauliTerm_init_from_string(benchmark::State& state) {
	auto rd_bs = random_pauli_string(state.range(0));
	std::vector<coeff_t> coeffs;
	coeffs.reserve(buffer_size);
	std::generate_n(std::back_inserter(coeffs), buffer_size, random_coeff);
	std::size_t j = random_in(buffer_size - 1);

	for (auto _ : state) {
		auto pt = PauliTerm{ rd_bs, coeffs[j] };

		benchmark::DoNotOptimize(pt);
		j = (j + 1) % buffer_size;
	}
}

static void PauliTerm_apply_pauli(benchmark::State& state) {
	std::vector<Pauli> random_paulis;
	random_paulis.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_paulis), buffer_size, random_pauli);
	std::vector<unsigned> random_idx;
	random_idx.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_idx), buffer_size, [=]() { return random_in(state.range(0) - 1); });
	auto rd_pt = random_pauli_term(state.range(0));
	std::size_t i = 0;

	for (auto _ : state) {
		auto pg = static_cast<Pauli_gates>(std::to_underlying(static_cast<Pauli_enum>(random_paulis[i])));
		auto qubit = random_idx[i];

		rd_pt.apply_pauli(pg, qubit);

		i = (i + 1) % buffer_size;
	}
}

static void PauliTerm_apply_clifford(benchmark::State& state) {
	std::vector<unsigned> random_idx;
	random_idx.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_idx), buffer_size, [=]() { return random_in(state.range(0) - 1); });
	auto rd_pt = random_pauli_term(state.range(0));
	std::size_t i = 0;

	for (auto _ : state) {
		auto qubit = random_idx[i];

		rd_pt.apply_clifford(Clifford_Gates_1Q::H, qubit);

		i = (i + 1) % buffer_size;
	}
}

static void PauliTerm_apply_rz(benchmark::State& state) {
	std::vector<unsigned> random_idx;
	std::vector<coeff_t> random_theta;
	random_idx.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_idx), buffer_size, [=]() { return random_in(state.range(0) - 1); });
	random_theta.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_theta), buffer_size, []() { return random_coeff() * pi; });
	auto rd_pt = random_pauli_term(state.range(0));
	for (long i = 0; i < state.range(0); ++i) {
		if (rd_pt[i] == p_i) {
			rd_pt[i] = p_x;
		} else if (rd_pt[i] == p_z) {
			rd_pt[i] = p_y;
		}
	}
	std::size_t i = 0;

	for (auto _ : state) {
		auto qubit = random_idx[i];
		auto theta = random_theta[i];

		auto path = rd_pt.apply_rz(qubit, theta);
		benchmark::DoNotOptimize(path);

		i = (i + 1) % buffer_size;
	}
}

static void PauliTerm_expectation_value_worst_case(benchmark::State& state) {
	auto rd_pt = random_pauli_term(state.range(0));
	for (long i = 0; i < state.range(0); ++i) {
		if (rd_pt[i] == p_i) {
			rd_pt[i] = p_x;
		} else if (rd_pt[i] == p_z) {
			rd_pt[i] = p_y;
		}
	}

	for (auto _ : state) {
		rd_pt[state.range(0) - 1] = (random_in(1) == 0) ? p_i : p_x;
		auto ev = rd_pt.expectation_value();
		benchmark::DoNotOptimize(ev);
	}
}

static void PauliTerm_phash(benchmark::State& state) {
	auto rd_pt = random_pauli_term(state.range(0));

	for (auto _ : state) {
		benchmark::DoNotOptimize(rd_pt.phash());
	}
}

static void PauliTerm_pauli_weight(benchmark::State& state) {
	auto rd_pt = random_pauli_term(state.range(0));

	for (auto _ : state) {
		benchmark::DoNotOptimize(rd_pt.pauli_weight());
	}
}

static void PauliTerm_apply_unital_noise(benchmark::State& state) {
	std::vector<Pauli> random_paulis;
	std::vector<UnitalNoise> random_noise;
	std::vector<unsigned> random_idx;
	random_paulis.reserve(buffer_size);
	random_noise.reserve(buffer_size);
	random_idx.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_paulis), buffer_size, random_pauli);
	std::generate_n(std::back_inserter(random_noise), buffer_size, []() {
		return static_cast<UnitalNoise>(random_in(std::to_underlying(UnitalNoise::Count) - 1));
	});
	std::generate_n(std::back_inserter(random_idx), buffer_size, [=]() { return random_in(state.range(0) - 1); });
	std::size_t i = 0;

	auto rd_pt = random_pauli_term(state.range(0));

	for (auto _ : state) {
		auto n = random_noise[i];
		auto qubit = random_idx[i];

		rd_pt.apply_unital_noise(n, qubit, 0.999999);

		i = (i + 1) % buffer_size;
	}
}

static void PauliTerm_apply_amplitude_damping_xy(benchmark::State& state) {
	static constexpr coeff_t p = 0.0001;
	std::vector<unsigned> random_idx;
	random_idx.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_idx), buffer_size, [=]() { return random_in(state.range(0) - 1); });
	auto rd_pt = random_pauli_term(state.range(0));
	for (long i = 0; i < state.range(0); ++i) {
		if (rd_pt[i] == p_i) {
			rd_pt[i] = p_x;
		} else if (rd_pt[i] == p_z) {
			rd_pt[i] = p_y;
		}
	}
	std::size_t i = 0;

	for (auto _ : state) {
		auto qubit = random_idx[i];

		rd_pt.apply_amplitude_damping_xy(qubit, p);
		benchmark::DoNotOptimize(rd_pt);

		i = (i + 1) % buffer_size;
	}
}

static void PauliTerm_apply_amplitude_damping_z(benchmark::State& state) {
	static constexpr coeff_t p = 0.0001;
	std::vector<unsigned> random_idx;
	random_idx.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_idx), buffer_size, [=]() { return random_in(state.range(0) - 1); });
	auto rd_pt = random_pauli_term(state.range(0));
	for (long i = 0; i < state.range(0); ++i) {
		if (rd_pt[i] != p_z) {
			rd_pt[i] = p_z;
		}
	}
	std::size_t i = 0;

	for (auto _ : state) {
		auto qubit = random_idx[i];

		auto path = rd_pt.apply_amplitude_damping_z(qubit, p);
		benchmark::DoNotOptimize(path);

		i = (i + 1) % buffer_size;
	}
}

BENCHMARK(PauliTerm_init_from_string)->Range(1, 1024);
BENCHMARK(PauliTerm_apply_pauli)->Range(1, 1024);
BENCHMARK(PauliTerm_apply_clifford)->Range(1, 1024);
BENCHMARK(PauliTerm_apply_rz)->Range(1, 1024);
BENCHMARK(PauliTerm_expectation_value_worst_case)->Range(1, 1024);
BENCHMARK(PauliTerm_phash)->Range(1, 1024);
BENCHMARK(PauliTerm_pauli_weight)->Range(1, 1024);
BENCHMARK(PauliTerm_apply_unital_noise)->Range(1, 1024);
BENCHMARK(PauliTerm_apply_amplitude_damping_xy)->Range(1, 1024);
BENCHMARK(PauliTerm_apply_amplitude_damping_z)->Range(1, 1024);
