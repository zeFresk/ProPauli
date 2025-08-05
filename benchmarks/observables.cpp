#include <benchmark/benchmark.h>

#include "observable.hpp"

#include "helper.hpp"

static constexpr auto buffer_size = 1024 * 1024;

static void Observable_init_from_string(benchmark::State& state) {
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

static void Observable_apply_pauli(benchmark::State& state) {
	std::vector<Pauli> random_paulis;
	random_paulis.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_paulis), buffer_size, random_pauli);
	std::vector<unsigned> random_idx;
	random_idx.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_idx), buffer_size, [=]() { return random_in(state.range(0) - 1); });
	auto rd_obs = Observable({ random_pauli_term(state.range(0)) });
	std::size_t i = 0;

	for (auto _ : state) {
		auto pg = static_cast<Pauli_gates>(std::to_underlying(static_cast<Pauli_enum>(random_paulis[i])));
		auto qubit = random_idx[i];

		rd_obs.apply_pauli(pg, qubit);

		i = (i + 1) % buffer_size;
	}
}

static void Observable_apply_clifford(benchmark::State& state) {
	std::vector<unsigned> random_idx;
	random_idx.reserve(buffer_size);
	std::generate_n(std::back_inserter(random_idx), buffer_size, [=]() { return random_in(state.range(0) - 1); });
	auto rd_obs = Observable({ random_pauli_term(state.range(0)) });
	std::size_t i = 0;

	for (auto _ : state) {
		auto qubit = random_idx[i];

		rd_obs.apply_clifford(Clifford_Gates_1Q::H, qubit);

		i = (i + 1) % buffer_size;
	}
}

static void Observable_apply_rz_once(benchmark::State& state) {
	using std::numbers::pi;
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
	const auto rd_obs_copy = Observable({ rd_pt });

	std::size_t i = 0;

	for (auto _ : state) {
		auto rd_obs = rd_obs_copy;
		auto qubit = random_idx[i];
		auto theta = random_theta[i];

		rd_obs.apply_rz(qubit, theta);

		i = (i + 1) % buffer_size;
	}
}

static void Observable_apply_rz_ntimes(benchmark::State& state) {
	using std::numbers::pi;
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
	const auto rd_obs_copy = Observable({ rd_pt });

	std::size_t i = 0;
	std::size_t nb_rz = state.range(1);

	for (auto _ : state) {
		auto rd_obs = rd_obs_copy;
		for (std::size_t j = 0; j < nb_rz; ++j) {
			auto qubit = random_idx[i];
			auto theta = random_theta[i];

			rd_obs.apply_rz(qubit, theta);

			i = (i + 1) % buffer_size;
		}
	}
}

static void Observable_ev_after_nrz(benchmark::State& state) {
	using std::numbers::pi;
	auto rd_pt = random_pauli_term(state.range(0));
	for (long i = 0; i < state.range(0); ++i) {
		if (rd_pt[i] == p_i) {
			rd_pt[i] = p_x;
		} else if (rd_pt[i] == p_z) {
			rd_pt[i] = p_y;
		}
	}
	auto rd_obs_copy = Observable({ rd_pt });
	// apply rzs
	std::size_t nb_rz = state.range(1);
	for (std::size_t j = 0; j < nb_rz; ++j) {
		rd_obs_copy.apply_rz(random_in(state.range(0) - 1), pi * random_coeff());
	}

	for (auto _ : state) {
		benchmark::DoNotOptimize(rd_obs_copy);
		benchmark::DoNotOptimize(rd_obs_copy.expectation_value());
	}
}

static void Observable_merge_after_nrz(benchmark::State& state) {
	using std::numbers::pi;
	auto rd_pt = random_pauli_term(state.range(0));
	for (long i = 0; i < state.range(0); ++i) {
		if (rd_pt[i] == p_i) {
			rd_pt[i] = p_x;
		} else if (rd_pt[i] == p_z) {
			rd_pt[i] = p_y;
		}
	}
	auto rd_obs_copy = Observable({ rd_pt });
	// apply rzs
	std::size_t nb_rz = state.range(1);
	for (std::size_t j = 0; j < nb_rz; ++j) {
		rd_obs_copy.apply_rz(random_in(state.range(0) - 1), pi * random_coeff());
	}

	for (auto _ : state) {
		auto obs = rd_obs_copy;
		obs.merge();
		benchmark::DoNotOptimize(obs);
	}
}

BENCHMARK(Observable_init_from_string)->Range(1, 1024);
BENCHMARK(Observable_apply_pauli)->Range(1, 1024);
BENCHMARK(Observable_apply_clifford)->Range(1, 1024);
BENCHMARK(Observable_apply_rz_once)->Range(1, 1024);
BENCHMARK(Observable_apply_rz_ntimes)->Ranges({ { 1, 1024 }, { 1, 16 } });
BENCHMARK(Observable_ev_after_nrz)->Ranges({ { 1, 1024 }, { 16, 16 } });
BENCHMARK(Observable_merge_after_nrz)
	->ArgsProduct({ benchmark::CreateRange(1, 1024, 8), benchmark::CreateRange(1, 16, 2) });
