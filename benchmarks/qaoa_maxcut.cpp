#include <benchmark/benchmark.h>

#include "circuit.hpp"
#include "observable.hpp"

#include "helper.hpp"
#include <memory>
#include <string_view>

// nx.random_regular_graph(d=3, n=32, seed=6)
class MergeMaxCutQAOAN32P3 : public benchmark::Fixture {
    public:
	static constexpr std::array<std::string_view, 3 * 16> sv_obss = {
		"ZIIZIIIIIIIIIIIIIIIIIIIIIIIIIIII", "IZIIIZIIIIIIIIIIIIIIIIIIIIIIIIII", "IIZIIZIIIIIIIIIIIIIIIIIIIIIIIIII",
		"IIIIZIZIIIIIIIIIIIIIIIIIIIIIIIII", "IIZIIIIIIZIIIIIIIIIIIIIIIIIIIIII", "IIIIIZIIIZIIIIIIIIIIIIIIIIIIIIII",
		"ZIIIIIIIIIIZIIIIIIIIIIIIIIIIIIII", "IIIIIIIZIIIIIZIIIIIIIIIIIIIIIIII", "IIIIIIIIIIIZIZIIIIIIIIIIIIIIIIII",
		"IZIIIIIIIIIIIIZIIIIIIIIIIIIIIIII", "IIIIIIIIIIZIIIZIIIIIIIIIIIIIIIII", "ZIIIIIIIIIIIIIIZIIIIIIIIIIIIIIII",
		"IIIIIIIIZIIIIIIZIIIIIIIIIIIIIIII", "IIIIIIIIIIIIIIZZIIIIIIIIIIIIIIII", "IIIIZIIIIIIIIIIIIIZIIIIIIIIIIIII",
		"IIIIIIIZIIIIIIIIIIZIIIIIIIIIIIII", "IIIIIIIIIIIIZIIIIIZIIIIIIIIIIIII", "IIZIIIIIIIIIIIIIIIIZIIIIIIIIIIII",
		"IIIIIIIIZIIIIIIIIIIZIIIIIIIIIIII", "IIIIIIIIIIIIZIIIIIIZIIIIIIIIIIII", "IIIIIIZIIIIIIIIIIIIIZIIIIIIIIIII",
		"IIIIIIIIIIIIIIIIZIIIZIIIIIIIIIII", "IIIIIIIIIIIIIIIIIZIIIZIIIIIIIIII", "IIIZIIIIIIIIIIIIIIIIIIZIIIIIIIII",
		"IIIIIIIIIIIIZIIIIIIIIIZIIIIIIIII", "IIIZIIIIIIIIIIIIIIIIIIIZIIIIIIII", "IIIIIIZIIIIIIIIIIIIIIIIZIIIIIIII",
		"IIIIIIIIIIZIIIIIIIIIIIIIZIIIIIII", "IIIIIIIIIIIIIIIIIZIIIIIIZIIIIIII", "IIIIIIIZIIIIIIIIIIIIIIIIIZIIIIII",
		"IIIIIIIIIIIIIIIIIZIIIIIIIZIIIIII", "IIIIIIIIIIIIIIIIIIIIIZIIIZIIIIII", "IIIIZIIIIIIIIIIIIIIIIIIIIIZIIIII",
		"IIIIIIIIIIIIIIIIZIIIIIIIIIZIIIII", "IZIIIIIIIIIIIIIIIIIIIIIIIIIZIIII", "IIIIIIIIIZIIIIIIIIIIIIIIIIIZIIII",
		"IIIIIIIIIIZIIIIIIIIIIIIIIIIZIIII", "IIIIIIIIIIIIIZIIIIIIIIIIIIIIZIII", "IIIIIIIIIIIIIIIIIIIIIZIIIIIIZIII",
		"IIIIIIIIIIIIIIIIIIIIZIIIIIIIIZII", "IIIIIIIIIIIIIIIIIIIIIIIIIIZIIZII", "IIIIIIIIIIIIIIIIIIIIIIIIIIIIZZII",
		"IIIIIIIIZIIIIIIIIIIIIIIIIIIIIIZI", "IIIIIIIIIIIZIIIIIIIIIIIIIIIIIIZI", "IIIIIIIIIIIIIIIIIIIIIIZIIIIIIIZI",
		"IIIIIIIIIIIIIIIIZIIIIIIIIIIIIIIZ", "IIIIIIIIIIIIIIIIIIIIIIIZIIIIIIIZ", "IIIIIIIIIIIIIIIIIIIIIIIIZIIIIIIZ"
	};
	Observable<coeff_t> obs;
	Circuit<coeff_t> qc{ 32 };

	MergeMaxCutQAOAN32P3() : obs{ sv_obss.begin(), sv_obss.end() } {}
	void SetUp([[maybe_unused]] benchmark::State const& state) override {
		qc.add_operation("H", 0);
		qc.add_operation("H", 1);
		qc.add_operation("H", 2);
		qc.add_operation("H", 3);
		qc.add_operation("H", 4);
		qc.add_operation("H", 5);
		qc.add_operation("H", 6);
		qc.add_operation("H", 7);
		qc.add_operation("H", 8);
		qc.add_operation("H", 9);
		qc.add_operation("H", 10);
		qc.add_operation("H", 11);
		qc.add_operation("H", 12);
		qc.add_operation("H", 13);
		qc.add_operation("H", 14);
		qc.add_operation("H", 15);
		qc.add_operation("H", 16);
		qc.add_operation("H", 17);
		qc.add_operation("H", 18);
		qc.add_operation("H", 19);
		qc.add_operation("H", 20);
		qc.add_operation("H", 21);
		qc.add_operation("H", 22);
		qc.add_operation("H", 23);
		qc.add_operation("H", 24);
		qc.add_operation("H", 25);
		qc.add_operation("H", 26);
		qc.add_operation("H", 27);
		qc.add_operation("H", 28);
		qc.add_operation("H", 29);
		qc.add_operation("H", 30);
		qc.add_operation("H", 31);
		rzz(qc, 0, 11, 0.422);
		rzz(qc, 0, 3, 0.422);
		rzz(qc, 0, 15, 0.422);
		rzz(qc, 1, 27, 0.422);
		rzz(qc, 1, 5, 0.422);
		rzz(qc, 1, 14, 0.422);
		rzz(qc, 2, 5, 0.422);
		rzz(qc, 2, 19, 0.422);
		rzz(qc, 2, 9, 0.422);
		rzz(qc, 3, 22, 0.422);
		rzz(qc, 3, 23, 0.422);
		rzz(qc, 4, 6, 0.422);
		rzz(qc, 4, 18, 0.422);
		rzz(qc, 4, 26, 0.422);
		rzz(qc, 5, 9, 0.422);
		rzz(qc, 6, 20, 0.422);
		rzz(qc, 6, 23, 0.422);
		rzz(qc, 7, 13, 0.422);
		rzz(qc, 7, 25, 0.422);
		rzz(qc, 7, 18, 0.422);
		rzz(qc, 8, 15, 0.422);
		rzz(qc, 8, 30, 0.422);
		rzz(qc, 8, 19, 0.422);
		rzz(qc, 9, 27, 0.422);
		rzz(qc, 10, 24, 0.422);
		rzz(qc, 10, 27, 0.422);
		rzz(qc, 10, 14, 0.422);
		rzz(qc, 11, 13, 0.422);
		rzz(qc, 11, 30, 0.422);
		rzz(qc, 12, 19, 0.422);
		rzz(qc, 12, 22, 0.422);
		rzz(qc, 12, 18, 0.422);
		rzz(qc, 13, 28, 0.422);
		rzz(qc, 14, 15, 0.422);
		rzz(qc, 16, 20, 0.422);
		rzz(qc, 16, 26, 0.422);
		rzz(qc, 16, 31, 0.422);
		rzz(qc, 17, 21, 0.422);
		rzz(qc, 17, 24, 0.422);
		rzz(qc, 17, 25, 0.422);
		rzz(qc, 20, 29, 0.422);
		rzz(qc, 21, 28, 0.422);
		rzz(qc, 21, 25, 0.422);
		rzz(qc, 22, 30, 0.422);
		rzz(qc, 23, 31, 0.422);
		rzz(qc, 24, 31, 0.422);
		rzz(qc, 26, 29, 0.422);
		rzz(qc, 28, 29, 0.422);
		rx(qc, 0, -1.218);
		rx(qc, 1, -1.218);
		rx(qc, 2, -1.218);
		rx(qc, 3, -1.218);
		rx(qc, 4, -1.218);
		rx(qc, 5, -1.218);
		rx(qc, 6, -1.218);
		rx(qc, 7, -1.218);
		rx(qc, 8, -1.218);
		rx(qc, 9, -1.218);
		rx(qc, 10, -1.218);
		rx(qc, 11, -1.218);
		rx(qc, 12, -1.218);
		rx(qc, 13, -1.218);
		rx(qc, 14, -1.218);
		rx(qc, 15, -1.218);
		rx(qc, 16, -1.218);
		rx(qc, 17, -1.218);
		rx(qc, 18, -1.218);
		rx(qc, 19, -1.218);
		rx(qc, 20, -1.218);
		rx(qc, 21, -1.218);
		rx(qc, 22, -1.218);
		rx(qc, 23, -1.218);
		rx(qc, 24, -1.218);
		rx(qc, 25, -1.218);
		rx(qc, 26, -1.218);
		rx(qc, 27, -1.218);
		rx(qc, 28, -1.218);
		rx(qc, 29, -1.218);
		rx(qc, 30, -1.218);
		rx(qc, 31, -1.218);
		rzz(qc, 0, 11, 0.798);
		rzz(qc, 0, 3, 0.798);
		rzz(qc, 0, 15, 0.798);
		rzz(qc, 1, 27, 0.798);
		rzz(qc, 1, 5, 0.798);
		rzz(qc, 1, 14, 0.798);
		rzz(qc, 2, 5, 0.798);
		rzz(qc, 2, 19, 0.798);
		rzz(qc, 2, 9, 0.798);
		rzz(qc, 3, 22, 0.798);
		rzz(qc, 3, 23, 0.798);
		rzz(qc, 4, 6, 0.798);
		rzz(qc, 4, 18, 0.798);
		rzz(qc, 4, 26, 0.798);
		rzz(qc, 5, 9, 0.798);
		rzz(qc, 6, 20, 0.798);
		rzz(qc, 6, 23, 0.798);
		rzz(qc, 7, 13, 0.798);
		rzz(qc, 7, 25, 0.798);
		rzz(qc, 7, 18, 0.798);
		rzz(qc, 8, 15, 0.798);
		rzz(qc, 8, 30, 0.798);
		rzz(qc, 8, 19, 0.798);
		rzz(qc, 9, 27, 0.798);
		rzz(qc, 10, 24, 0.798);
		rzz(qc, 10, 27, 0.798);
		rzz(qc, 10, 14, 0.798);
		rzz(qc, 11, 13, 0.798);
		rzz(qc, 11, 30, 0.798);
		rzz(qc, 12, 19, 0.798);
		rzz(qc, 12, 22, 0.798);
		rzz(qc, 12, 18, 0.798);
		rzz(qc, 13, 28, 0.798);
		rzz(qc, 14, 15, 0.798);
		rzz(qc, 16, 20, 0.798);
		rzz(qc, 16, 26, 0.798);
		rzz(qc, 16, 31, 0.798);
		rzz(qc, 17, 21, 0.798);
		rzz(qc, 17, 24, 0.798);
		rzz(qc, 17, 25, 0.798);
		rzz(qc, 20, 29, 0.798);
		rzz(qc, 21, 28, 0.798);
		rzz(qc, 21, 25, 0.798);
		rzz(qc, 22, 30, 0.798);
		rzz(qc, 23, 31, 0.798);
		rzz(qc, 24, 31, 0.798);
		rzz(qc, 26, 29, 0.798);
		rzz(qc, 28, 29, 0.798);
		rx(qc, 0, -0.918);
		rx(qc, 1, -0.918);
		rx(qc, 2, -0.918);
		rx(qc, 3, -0.918);
		rx(qc, 4, -0.918);
		rx(qc, 5, -0.918);
		rx(qc, 6, -0.918);
		rx(qc, 7, -0.918);
		rx(qc, 8, -0.918);
		rx(qc, 9, -0.918);
		rx(qc, 10, -0.918);
		rx(qc, 11, -0.918);
		rx(qc, 12, -0.918);
		rx(qc, 13, -0.918);
		rx(qc, 14, -0.918);
		rx(qc, 15, -0.918);
		rx(qc, 16, -0.918);
		rx(qc, 17, -0.918);
		rx(qc, 18, -0.918);
		rx(qc, 19, -0.918);
		rx(qc, 20, -0.918);
		rx(qc, 21, -0.918);
		rx(qc, 22, -0.918);
		rx(qc, 23, -0.918);
		rx(qc, 24, -0.918);
		rx(qc, 25, -0.918);
		rx(qc, 26, -0.918);
		rx(qc, 27, -0.918);
		rx(qc, 28, -0.918);
		rx(qc, 29, -0.918);
		rx(qc, 30, -0.918);
		rx(qc, 31, -0.918);
		rzz(qc, 0, 11, 0.937);
		rzz(qc, 0, 3, 0.937);
		rzz(qc, 0, 15, 0.937);
		rzz(qc, 1, 27, 0.937);
		rzz(qc, 1, 5, 0.937);
		rzz(qc, 1, 14, 0.937);
		rzz(qc, 2, 5, 0.937);
		rzz(qc, 2, 19, 0.937);
		rzz(qc, 2, 9, 0.937);
		rzz(qc, 3, 22, 0.937);
		rzz(qc, 3, 23, 0.937);
		rzz(qc, 4, 6, 0.937);
		rzz(qc, 4, 18, 0.937);
		rzz(qc, 4, 26, 0.937);
		rzz(qc, 5, 9, 0.937);
		rzz(qc, 6, 20, 0.937);
		rzz(qc, 6, 23, 0.937);
		rzz(qc, 7, 13, 0.937);
		rzz(qc, 7, 25, 0.937);
		rzz(qc, 7, 18, 0.937);
		rzz(qc, 8, 15, 0.937);
		rzz(qc, 8, 30, 0.937);
		rzz(qc, 8, 19, 0.937);
		rzz(qc, 9, 27, 0.937);
		rzz(qc, 10, 24, 0.937);
		rzz(qc, 10, 27, 0.937);
		rzz(qc, 10, 14, 0.937);
		rzz(qc, 11, 13, 0.937);
		rzz(qc, 11, 30, 0.937);
		rzz(qc, 12, 19, 0.937);
		rzz(qc, 12, 22, 0.937);
		rzz(qc, 12, 18, 0.937);
		rzz(qc, 13, 28, 0.937);
		rzz(qc, 14, 15, 0.937);
		rzz(qc, 16, 20, 0.937);
		rzz(qc, 16, 26, 0.937);
		rzz(qc, 16, 31, 0.937);
		rzz(qc, 17, 21, 0.937);
		rzz(qc, 17, 24, 0.937);
		rzz(qc, 17, 25, 0.937);
		rzz(qc, 20, 29, 0.937);
		rzz(qc, 21, 28, 0.937);
		rzz(qc, 21, 25, 0.937);
		rzz(qc, 22, 30, 0.937);
		rzz(qc, 23, 31, 0.937);
		rzz(qc, 24, 31, 0.937);
		rzz(qc, 26, 29, 0.937);
		rzz(qc, 28, 29, 0.937);
		rx(qc, 0, -0.47);
		rx(qc, 1, -0.47);
		rx(qc, 2, -0.47);
		rx(qc, 3, -0.47);
		rx(qc, 4, -0.47);
		rx(qc, 5, -0.47);
		rx(qc, 6, -0.47);
		rx(qc, 7, -0.47);
		rx(qc, 8, -0.47);
		rx(qc, 9, -0.47);
		rx(qc, 10, -0.47);
		rx(qc, 11, -0.47);
		rx(qc, 12, -0.47);
		rx(qc, 13, -0.47);
		rx(qc, 14, -0.47);
		rx(qc, 15, -0.47);
		rx(qc, 16, -0.47);
		rx(qc, 17, -0.47);
		rx(qc, 18, -0.47);
		rx(qc, 19, -0.47);
		rx(qc, 20, -0.47);
		rx(qc, 21, -0.47);
		rx(qc, 22, -0.47);
		rx(qc, 23, -0.47);
		rx(qc, 24, -0.47);
		rx(qc, 25, -0.47);
		rx(qc, 26, -0.47);
		rx(qc, 27, -0.47);
		rx(qc, 28, -0.47);
		rx(qc, 29, -0.47);
		rx(qc, 30, -0.47);
		rx(qc, 31, -0.47);
	}
	void TearDown([[maybe_unused]] benchmark::State const& state) override { qc = decltype(qc){ 32 }; }
	~MergeMaxCutQAOAN32P3() override {}
};

BENCHMARK_DEFINE_F(MergeMaxCutQAOAN32P3, alwayafter_merge_alwaysafter_keepn50k_run)(benchmark::State& state) {
	qc.set_merge_policy(std::make_shared<AlwaysAfterSplittingPolicy>());
	qc.set_truncate_policy(std::make_shared<AlwaysAfterSplittingPolicy>());
	qc.set_truncator(std::make_shared<KeepNTruncator<coeff_t>>(50000));

	for (auto _ : state) {
		auto res = qc.run(obs);
		benchmark::DoNotOptimize(res);
	}
}

BENCHMARK_DEFINE_F(MergeMaxCutQAOAN32P3, alwayafter_merge_alwaysafter_keepn10k_run_one_by_one)(benchmark::State& state) {
	qc.set_merge_policy(std::make_shared<AlwaysAfterSplittingPolicy>());
	qc.set_truncate_policy(std::make_shared<AlwaysAfterSplittingPolicy>());
	qc.set_truncator(std::make_shared<KeepNTruncator<coeff_t>>(10000));

	for (auto _ : state) {
		auto sum_ev = 0.f;
		for (auto sv : sv_obss) {
			auto ob = Observable(sv);
			sum_ev += qc.run(ob).expectation_value();
		}
		benchmark::DoNotOptimize(sum_ev);
	}
}

BENCHMARK_REGISTER_F(MergeMaxCutQAOAN32P3, alwayafter_merge_alwaysafter_keepn50k_run);
BENCHMARK_REGISTER_F(MergeMaxCutQAOAN32P3, alwayafter_merge_alwaysafter_keepn10k_run_one_by_one);
