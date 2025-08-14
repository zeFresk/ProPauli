window.BENCHMARK_DATA = {
  "lastUpdate": 1755205358975,
  "repoUrl": "https://github.com/zeFresk/ProPauli",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "8807862+zeFresk@users.noreply.github.com",
            "name": "zeFresk",
            "username": "zeFresk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b8bdb1b636eb006509562a62f03a71e68a5fa9ab",
          "message": "fix benchmarks no triggering",
          "timestamp": "2025-08-12T18:17:07+02:00",
          "tree_id": "1c38262099141c9c74657ce664b8352f52e0494d",
          "url": "https://github.com/zeFresk/ProPauli/commit/b8bdb1b636eb006509562a62f03a71e68a5fa9ab"
        },
        "date": 1755015771274,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 55.210667903736336,
            "unit": "ns/iter",
            "extra": "iterations: 12785061\ncpu: 55.207611758755014 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 40.69835406836789,
            "unit": "ns/iter",
            "extra": "iterations: 13847659\ncpu: 40.689832266955726 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 74.7349698999983,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 74.71763229999996 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 62.68275764631542,
            "unit": "ns/iter",
            "extra": "iterations: 11190224\ncpu: 62.66348493113272 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 191.95470294370244,
            "unit": "ns/iter",
            "extra": "iterations: 3648736\ncpu: 191.93780174833154 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 944.9183725116311,
            "unit": "ns/iter",
            "extra": "iterations: 738930\ncpu: 944.8214932402259 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 6834.152208294124,
            "unit": "ns/iter",
            "extra": "iterations: 102432\ncpu: 6832.273781630742 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 13473.509251593227,
            "unit": "ns/iter",
            "extra": "iterations: 51937\ncpu: 13469.27352369217 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 24222.988196357084,
            "unit": "ns/iter",
            "extra": "iterations: 43207\ncpu: 24218.633462170495 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 1330794.7636138496,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 1330490.724009901 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 735279554.4999999,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 735151699.4374999 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 23212.753942848412,
            "unit": "ns/iter",
            "extra": "iterations: 42799\ncpu: 23200.357695273273 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 1333445.0111386364,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 1333306.3378712854 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 726841929.882352,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 726753624.4705883 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 93827.31322916746,
            "unit": "ns/iter",
            "extra": "iterations: 9600\ncpu: 93817.4940625003 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 5827955.970000289,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5827629.600000037 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 2552087706.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2551767408.0000033 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 89248.23478875618,
            "unit": "ns/iter",
            "extra": "iterations: 9894\ncpu: 89237.53244390534 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 5487204.434782654,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5486729.130434779 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 38243105.74999856,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 38239718.29999984 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 93488.83638064016,
            "unit": "ns/iter",
            "extra": "iterations: 9626\ncpu: 93478.49750675257 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 20973.58601701512,
            "unit": "ns/iter",
            "extra": "iterations: 38318\ncpu: 20972.789133044498 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 50569.98967455335,
            "unit": "ns/iter",
            "extra": "iterations: 15302\ncpu: 50565.35746961171 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 93536.29579779845,
            "unit": "ns/iter",
            "extra": "iterations: 9733\ncpu: 93529.28911949036 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 5554315.150000093,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5553567.119999982 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 48065.50909197154,
            "unit": "ns/iter",
            "extra": "iterations: 17158\ncpu: 48062.00512880294 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 105696.04754098292,
            "unit": "ns/iter",
            "extra": "iterations: 7320\ncpu: 105683.66338797784 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 243755.72127593803,
            "unit": "ns/iter",
            "extra": "iterations: 3229\ncpu: 243742.43852585743 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 539064.9390000135,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538950.0859999999 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 16.200491987941547,
            "unit": "ns/iter",
            "extra": "iterations: 43249434\ncpu: 16.199373221855424 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 25.86118092284974,
            "unit": "ns/iter",
            "extra": "iterations: 28927004\ncpu: 25.85933437835462 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 114.02000227935433,
            "unit": "ns/iter",
            "extra": "iterations: 6247388\ncpu: 114.00976776214371 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 2546.22114923803,
            "unit": "ns/iter",
            "extra": "iterations: 277523\ncpu: 2546.0685708932215 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 6708.397182560451,
            "unit": "ns/iter",
            "extra": "iterations: 104705\ncpu: 6707.685124874694 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 3.745238000722929,
            "unit": "ns/iter",
            "extra": "iterations: 186944117\ncpu: 3.745014361698269 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 3.744938091511893,
            "unit": "ns/iter",
            "extra": "iterations: 186999479\ncpu: 3.7443508492341917 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 3.7453561226440097,
            "unit": "ns/iter",
            "extra": "iterations: 186961279\ncpu: 3.7450350882547974 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 3.746999224336579,
            "unit": "ns/iter",
            "extra": "iterations: 186825862\ncpu: 3.746519371070851 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 3.7449365514943476,
            "unit": "ns/iter",
            "extra": "iterations: 186845141\ncpu: 3.744418293435828 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 3.740215894096852,
            "unit": "ns/iter",
            "extra": "iterations: 187101920\ncpu: 3.7400095573577823 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 3.868057606722138,
            "unit": "ns/iter",
            "extra": "iterations: 181190938\ncpu: 3.8675678305721823 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 3.7669719837496842,
            "unit": "ns/iter",
            "extra": "iterations: 185701259\ncpu: 3.766731893831713 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 3.746622370438778,
            "unit": "ns/iter",
            "extra": "iterations: 186857747\ncpu: 3.7460888522861056 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 3.7438652875586698,
            "unit": "ns/iter",
            "extra": "iterations: 186980443\ncpu: 3.743253154020982 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.054502635869301,
            "unit": "ns/iter",
            "extra": "iterations: 172694822\ncpu: 4.054049240688868 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.055186089225251,
            "unit": "ns/iter",
            "extra": "iterations: 172718490\ncpu: 4.054627880315515 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.0559564485391215,
            "unit": "ns/iter",
            "extra": "iterations: 172591225\ncpu: 4.055248961817125 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.056003494910017,
            "unit": "ns/iter",
            "extra": "iterations: 172536625\ncpu: 4.055759737968711 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.073041322004908,
            "unit": "ns/iter",
            "extra": "iterations: 172564812\ncpu: 4.064242778533608 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 74.21741970836305,
            "unit": "ns/iter",
            "extra": "iterations: 9418447\ncpu: 74.20526589999407 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 79.2238829304258,
            "unit": "ns/iter",
            "extra": "iterations: 9044468\ncpu: 79.2131196660765 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 79.62909797331335,
            "unit": "ns/iter",
            "extra": "iterations: 8771470\ncpu: 79.6169410600506 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 88.5014433247024,
            "unit": "ns/iter",
            "extra": "iterations: 7836421\ncpu: 88.49564131380906 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 95.7029991386498,
            "unit": "ns/iter",
            "extra": "iterations: 7116710\ncpu: 95.69166384467029 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 74.01293247398992,
            "unit": "ns/iter",
            "extra": "iterations: 9483027\ncpu: 74.00542495555423 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 80.289704972992,
            "unit": "ns/iter",
            "extra": "iterations: 8781230\ncpu: 80.28259480733422 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 79.92530376178505,
            "unit": "ns/iter",
            "extra": "iterations: 8748138\ncpu: 79.92220950332383 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 89.85470057680467,
            "unit": "ns/iter",
            "extra": "iterations: 7689067\ncpu: 89.84102362484334 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 98.57788271812062,
            "unit": "ns/iter",
            "extra": "iterations: 7030873\ncpu: 98.56241294644205 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 10017.98811652766,
            "unit": "ns/iter",
            "extra": "iterations: 69340\ncpu: 10016.513354485263 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 10594.554187564225,
            "unit": "ns/iter",
            "extra": "iterations: 66196\ncpu: 10593.992053900472 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 9905.537697788537,
            "unit": "ns/iter",
            "extra": "iterations: 69898\ncpu: 9903.879810581167 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 11085.058350323605,
            "unit": "ns/iter",
            "extra": "iterations: 63273\ncpu: 11083.64417682109 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 17547.22040846848,
            "unit": "ns/iter",
            "extra": "iterations: 40003\ncpu: 17546.437267205 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 2514393.942446283,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 2513977.593525156 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 2526150.2681159885,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 2525878.6485507074 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 2272252.817589544,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 2272061.6775244134 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 3943338.7941177418,
            "unit": "ns/iter",
            "extra": "iterations: 170\ncpu: 3943256.4823529758 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 40189683.666666396,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 40183830.55555574 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 104765.47727611386,
            "unit": "ns/iter",
            "extra": "iterations: 6711\ncpu: 104763.43436149538 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 105156.01243258378,
            "unit": "ns/iter",
            "extra": "iterations: 6676\ncpu: 105146.03565008983 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 127578.5899872224,
            "unit": "ns/iter",
            "extra": "iterations: 5473\ncpu: 127563.82020829631 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 151823.97771046334,
            "unit": "ns/iter",
            "extra": "iterations: 4621\ncpu: 151803.4152780802 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 174556.31576305712,
            "unit": "ns/iter",
            "extra": "iterations: 3984\ncpu: 174530.92143574503 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 194.8965899252269,
            "unit": "ns/iter",
            "extra": "iterations: 3586285\ncpu: 194.86704960704319 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 217.70769710343257,
            "unit": "ns/iter",
            "extra": "iterations: 3236841\ncpu: 217.63952940536916 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 227.37893522642074,
            "unit": "ns/iter",
            "extra": "iterations: 3022126\ncpu: 227.31602256159724 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 526.4811429999554,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 526.4244439999999 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 752.7520968391649,
            "unit": "ns/iter",
            "extra": "iterations: 960851\ncpu: 752.7512913032241 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 334.34628724993576,
            "unit": "ns/iter",
            "extra": "iterations: 2129163\ncpu: 334.33083610790027 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 381.89353994932463,
            "unit": "ns/iter",
            "extra": "iterations: 1741395\ncpu: 381.88033789002867 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 441.63717054151067,
            "unit": "ns/iter",
            "extra": "iterations: 1567155\ncpu: 441.53944440722177 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 907.2783498252672,
            "unit": "ns/iter",
            "extra": "iterations: 717015\ncpu: 907.2784934764229 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 1345.6555585025021,
            "unit": "ns/iter",
            "extra": "iterations: 478807\ncpu: 1345.553137276605 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 1112.1752636138292,
            "unit": "ns/iter",
            "extra": "iterations: 629235\ncpu: 1112.086327047924 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 1529.9301012984488,
            "unit": "ns/iter",
            "extra": "iterations: 485102\ncpu: 1529.6731532749934 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 1892.9230142855743,
            "unit": "ns/iter",
            "extra": "iterations: 395437\ncpu: 1892.7528632879712 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 5823.702233979911,
            "unit": "ns/iter",
            "extra": "iterations: 129276\ncpu: 5823.452264921583 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 8913.140846275663,
            "unit": "ns/iter",
            "extra": "iterations: 58468\ncpu: 8912.313778477213 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 21545.220772042398,
            "unit": "ns/iter",
            "extra": "iterations: 32563\ncpu: 21544.773669502043 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 27053.784596763093,
            "unit": "ns/iter",
            "extra": "iterations: 21476\ncpu: 27052.3169119006 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 54008.01892843172,
            "unit": "ns/iter",
            "extra": "iterations: 12785\ncpu: 54004.09683222528 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 171235.81489488826,
            "unit": "ns/iter",
            "extra": "iterations: 5089\ncpu: 171222.26979759985 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 372536.8011664725,
            "unit": "ns/iter",
            "extra": "iterations: 1886\ncpu: 372530.0159066727 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/16",
            "value": 5344190.999999927,
            "unit": "ns/iter",
            "extra": "iterations: 130\ncpu: 5343896.130769438 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/16",
            "value": 6149377.88495567,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 6148412.2566372985 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/16",
            "value": 20446581.893939752,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 20414874.924242098 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/16",
            "value": 121234119.54545107,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 121226744.36363664 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/16",
            "value": 135543366.2000223,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 135526437.40000007 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 48.56735155161525,
            "unit": "ns/iter",
            "extra": "iterations: 14391955\ncpu: 48.56442700105752 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 53.694604510202154,
            "unit": "ns/iter",
            "extra": "iterations: 13028326\ncpu: 53.68975146922284 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 51.71792157330573,
            "unit": "ns/iter",
            "extra": "iterations: 13111148\ncpu: 51.71510938630119 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 58.74639156389792,
            "unit": "ns/iter",
            "extra": "iterations: 11900377\ncpu: 58.74245446173596 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 66.16918621794274,
            "unit": "ns/iter",
            "extra": "iterations: 10574502\ncpu: 66.16636121492918 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 76.9118575592003,
            "unit": "ns/iter",
            "extra": "iterations: 9077568\ncpu: 76.90692936698518 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 87.90280122524642,
            "unit": "ns/iter",
            "extra": "iterations: 7962837\ncpu: 87.89391833589059 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 86.57217669609129,
            "unit": "ns/iter",
            "extra": "iterations: 8307439\ncpu: 86.5681178038123 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 99.15807153511514,
            "unit": "ns/iter",
            "extra": "iterations: 7100570\ncpu: 99.14696355363027 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 115.99441943288429,
            "unit": "ns/iter",
            "extra": "iterations: 6053865\ncpu: 115.9893788513588 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 294.4165368691295,
            "unit": "ns/iter",
            "extra": "iterations: 2433919\ncpu: 294.39877867751017 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 334.6376248868238,
            "unit": "ns/iter",
            "extra": "iterations: 2108009\ncpu: 334.63740429950366 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 309.2576390131003,
            "unit": "ns/iter",
            "extra": "iterations: 2264265\ncpu: 309.23771599172625 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 514.3706549999588,
            "unit": "ns/iter",
            "extra": "iterations: 1332336\ncpu: 514.326958815197 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 772.9414984288869,
            "unit": "ns/iter",
            "extra": "iterations: 993187\ncpu: 772.8029807075592 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 8909.047866942325,
            "unit": "ns/iter",
            "extra": "iterations: 75877\ncpu: 8907.96888385161 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 10081.463140483133,
            "unit": "ns/iter",
            "extra": "iterations: 73753\ncpu: 10080.734126069814 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 9457.68960118933,
            "unit": "ns/iter",
            "extra": "iterations: 75374\ncpu: 9456.710032637387 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 10550.029433418464,
            "unit": "ns/iter",
            "extra": "iterations: 66557\ncpu: 10549.116456571113 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 19548.31120223263,
            "unit": "ns/iter",
            "extra": "iterations: 34386\ncpu: 19545.357354736916 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/16",
            "value": 2236057.1003235052,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2235729.339805836 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/16",
            "value": 2415289.715277898,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 2415060.7430555797 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/16",
            "value": 2059917.8037383633,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2059720.140186965 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/16",
            "value": 4400268.622641661,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 4399788.641509354 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/16",
            "value": 39367146.22221871,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 39365272.88888985 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 50.451995784259395,
            "unit": "ns/iter",
            "extra": "iterations: 13868032\ncpu: 50.44837803950876 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 59.81006124916887,
            "unit": "ns/iter",
            "extra": "iterations: 11671831\ncpu: 59.80591965390848 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 60.75820446876994,
            "unit": "ns/iter",
            "extra": "iterations: 11537889\ncpu: 60.746291544318794 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 134.17061182044742,
            "unit": "ns/iter",
            "extra": "iterations: 5148553\ncpu: 134.16244855593143 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 211.990131498057,
            "unit": "ns/iter",
            "extra": "iterations: 3213051\ncpu: 211.98122563258448 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 81.56307486096212,
            "unit": "ns/iter",
            "extra": "iterations: 8570768\ncpu: 81.54411424973777 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 103.80104658741782,
            "unit": "ns/iter",
            "extra": "iterations: 6748218\ncpu: 103.77943436326338 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 105.99539701529496,
            "unit": "ns/iter",
            "extra": "iterations: 6682186\ncpu: 105.97309727684896 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 252.28321878089292,
            "unit": "ns/iter",
            "extra": "iterations: 2800464\ncpu: 252.2320786840996 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 408.63274863894844,
            "unit": "ns/iter",
            "extra": "iterations: 1703283\ncpu: 408.5574734204501 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 294.895862655574,
            "unit": "ns/iter",
            "extra": "iterations: 2370216\ncpu: 294.8383484880711 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 371.10334861482573,
            "unit": "ns/iter",
            "extra": "iterations: 1888124\ncpu: 371.04755302088 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 409.3518827620408,
            "unit": "ns/iter",
            "extra": "iterations: 1711050\ncpu: 409.35110253936614 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 1154.730985708456,
            "unit": "ns/iter",
            "extra": "iterations: 612250\ncpu: 1154.6587929766977 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 1888.7371929944072,
            "unit": "ns/iter",
            "extra": "iterations: 376337\ncpu: 1888.3617582113288 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 9098.923750992393,
            "unit": "ns/iter",
            "extra": "iterations: 76801\ncpu: 9098.086808765496 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 10374.409780227532,
            "unit": "ns/iter",
            "extra": "iterations: 67524\ncpu: 10373.097239499793 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 10946.214802859873,
            "unit": "ns/iter",
            "extra": "iterations: 63812\ncpu: 10945.621466182061 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 20022.3383697813,
            "unit": "ns/iter",
            "extra": "iterations: 35210\ncpu: 20020.469696109823 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 38002.99989300501,
            "unit": "ns/iter",
            "extra": "iterations: 18693\ncpu: 38001.78719306672 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/16",
            "value": 2269449.7000000617,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2269189.3225806057 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/16",
            "value": 2573621.95955872,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 2573380.7757352707 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/16",
            "value": 2358705.17966089,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 2358437.6135592633 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/16",
            "value": 7113051.989473494,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 7112821.010526349 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/16",
            "value": 44742197.43750041,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 44736250.4375004 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.577532024579694,
            "unit": "ns/iter",
            "extra": "iterations: 152834091\ncpu: 4.57707193743838 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.574829933218513,
            "unit": "ns/iter",
            "extra": "iterations: 152904346\ncpu: 4.574382764764436 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.5760349626895245,
            "unit": "ns/iter",
            "extra": "iterations: 152920730\ncpu: 4.575565340291148 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.578933509608897,
            "unit": "ns/iter",
            "extra": "iterations: 152990258\ncpu: 4.578612325759901 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.57894041275902,
            "unit": "ns/iter",
            "extra": "iterations: 152961336\ncpu: 4.578414626294963 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 8.879771817533406,
            "unit": "ns/iter",
            "extra": "iterations: 119351326\ncpu: 8.879305706247251 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 8.892090703957285,
            "unit": "ns/iter",
            "extra": "iterations: 120154625\ncpu: 8.891646967397154 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 8.88020676740117,
            "unit": "ns/iter",
            "extra": "iterations: 120139441\ncpu: 8.879381742753518 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 8.8822995104427,
            "unit": "ns/iter",
            "extra": "iterations: 120256849\ncpu: 8.881564259179854 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 8.88554212083489,
            "unit": "ns/iter",
            "extra": "iterations: 120255155\ncpu: 8.884692502371475 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 59.86402791068974,
            "unit": "ns/iter",
            "extra": "iterations: 11683839\ncpu: 59.86043482797014 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 64.51252752359252,
            "unit": "ns/iter",
            "extra": "iterations: 10854779\ncpu: 64.5041860364 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 62.695887961269165,
            "unit": "ns/iter",
            "extra": "iterations: 11169423\ncpu: 62.69581114440752 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 71.02286617489483,
            "unit": "ns/iter",
            "extra": "iterations: 9813316\ncpu: 71.01704316869228 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 84.79224773910683,
            "unit": "ns/iter",
            "extra": "iterations: 8344843\ncpu: 84.78158055220503 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.6254160845631876,
            "unit": "ns/iter",
            "extra": "iterations: 1119063085\ncpu: 0.6253567769148525 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.06665289711512,
            "unit": "ns/iter",
            "extra": "iterations: 656617850\ncpu: 1.0665517119280101 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7263307110101118,
            "unit": "ns/iter",
            "extra": "iterations: 960325826\ncpu: 0.7263209122525374 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.8664865775356002,
            "unit": "ns/iter",
            "extra": "iterations: 804389836\ncpu: 0.8664127949025836 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.591804463814239,
            "unit": "ns/iter",
            "extra": "iterations: 106992902\ncpu: 6.591090266903922 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.8477841796619477,
            "unit": "ns/iter",
            "extra": "iterations: 825626211\ncpu: 0.8476520157376607 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.8221227971451684,
            "unit": "ns/iter",
            "extra": "iterations: 850888397\ncpu: 0.8220357163949162 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.6762308059447077,
            "unit": "ns/iter",
            "extra": "iterations: 1035384441\ncpu: 0.6761377844579601 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 17.52565692274795,
            "unit": "ns/iter",
            "extra": "iterations: 40025026\ncpu: 17.524782769660153 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 27.11723392461483,
            "unit": "ns/iter",
            "extra": "iterations: 25849028\ncpu: 27.11527551442099 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 108.78933579650534,
            "unit": "ns/iter",
            "extra": "iterations: 6356049\ncpu: 108.77216837063713 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 2585.5148942634146,
            "unit": "ns/iter",
            "extra": "iterations: 276583\ncpu: 2585.2154904676736 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 6486.188026603425,
            "unit": "ns/iter",
            "extra": "iterations: 109309\ncpu: 6485.390736352828 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.9395089894073176,
            "unit": "ns/iter",
            "extra": "iterations: 746247526\ncpu: 0.9394178212659415 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.9382366963220892,
            "unit": "ns/iter",
            "extra": "iterations: 745580195\ncpu: 0.9381675018875859 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 0.9397734406600257,
            "unit": "ns/iter",
            "extra": "iterations: 744780683\ncpu: 0.9396832020145008 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.9398226373709121,
            "unit": "ns/iter",
            "extra": "iterations: 742862466\ncpu: 0.9397795042184738 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.9403219621519199,
            "unit": "ns/iter",
            "extra": "iterations: 745107021\ncpu: 0.9402106546517067 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.280527928279267,
            "unit": "ns/iter",
            "extra": "iterations: 212263454\ncpu: 3.2802331389556345 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.1896304606094104,
            "unit": "ns/iter",
            "extra": "iterations: 589610027\ncpu: 1.1895033528661287 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.0108106300178965,
            "unit": "ns/iter",
            "extra": "iterations: 694060012\ncpu: 1.010809801559356 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.9485649041047962,
            "unit": "ns/iter",
            "extra": "iterations: 738381981\ncpu: 0.9484700886816484 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.9440353657762789,
            "unit": "ns/iter",
            "extra": "iterations: 741652377\ncpu: 0.9439676332352662 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 24.818914813305277,
            "unit": "ns/iter",
            "extra": "iterations: 28188827\ncpu: 24.817727002261915 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 29.858789497676863,
            "unit": "ns/iter",
            "extra": "iterations: 24556318\ncpu: 29.856478116955323 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 30.154113014364167,
            "unit": "ns/iter",
            "extra": "iterations: 23051512\ncpu: 30.15089804087411 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.3316898267319,
            "unit": "ns/iter",
            "extra": "iterations: 19224545\ncpu: 36.328127609782385 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 42.0747242100065,
            "unit": "ns/iter",
            "extra": "iterations: 16441405\ncpu: 42.07024344938814 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 15.650826190593522,
            "unit": "ns/iter",
            "extra": "iterations: 44774475\ncpu: 15.649809830266195 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 7.860091174440689,
            "unit": "ns/iter",
            "extra": "iterations: 89149108\ncpu: 7.859446613868555 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 7.857012877754625,
            "unit": "ns/iter",
            "extra": "iterations: 88899810\ncpu: 7.857022225357047 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 7.857429150239151,
            "unit": "ns/iter",
            "extra": "iterations: 88992715\ncpu: 7.85694820076007 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 7.861845417661636,
            "unit": "ns/iter",
            "extra": "iterations: 89196361\ncpu: 7.861334062720446 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.2438438805965444,
            "unit": "ns/iter",
            "extra": "iterations: 561711652\ncpu: 1.2438001161492833 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 4.381659452954738,
            "unit": "ns/iter",
            "extra": "iterations: 159601379\ncpu: 4.381297206711472 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.19237020047471,
            "unit": "ns/iter",
            "extra": "iterations: 85636195\ncpu: 8.19207517335407 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 57.51167398423718,
            "unit": "ns/iter",
            "extra": "iterations: 12182773\ncpu: 57.50650192694262 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 115.87925568814977,
            "unit": "ns/iter",
            "extra": "iterations: 6035481\ncpu: 115.87931417562524 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.9338084613661802,
            "unit": "ns/iter",
            "extra": "iterations: 750892199\ncpu: 0.9337424146018901 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.338154465560108,
            "unit": "ns/iter",
            "extra": "iterations: 209420378\ncpu: 3.3379964580142136 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.402791224491121,
            "unit": "ns/iter",
            "extra": "iterations: 108910337\ncpu: 6.402334628713685 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.147630004060495,
            "unit": "ns/iter",
            "extra": "iterations: 18341888\ncpu: 38.145791098495835 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 72.4288666046716,
            "unit": "ns/iter",
            "extra": "iterations: 9661545\ncpu: 72.42506058813743 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.2501655575056052,
            "unit": "ns/iter",
            "extra": "iterations: 560229811\ncpu: 1.2491081378745283 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.2481398239745958,
            "unit": "ns/iter",
            "extra": "iterations: 560296303\ncpu: 1.2480713744777616 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.2486129462983586,
            "unit": "ns/iter",
            "extra": "iterations: 560561930\ncpu: 1.2484870297916602 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.249023361090734,
            "unit": "ns/iter",
            "extra": "iterations: 560011223\ncpu: 1.2488992903629639 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.2484853468476234,
            "unit": "ns/iter",
            "extra": "iterations: 560173627\ncpu: 1.2484603242487213 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.474725303945091,
            "unit": "ns/iter",
            "extra": "iterations: 156599173\ncpu: 4.474434312625617 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.475094866956471,
            "unit": "ns/iter",
            "extra": "iterations: 156604845\ncpu: 4.474842831331274 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.474712959121026,
            "unit": "ns/iter",
            "extra": "iterations: 156598078\ncpu: 4.474396243867069 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.475197206312701,
            "unit": "ns/iter",
            "extra": "iterations: 156511724\ncpu: 4.474906998021458 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.475595623225467,
            "unit": "ns/iter",
            "extra": "iterations: 156584433\ncpu: 4.475594499230776 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.1001996782383,
            "unit": "ns/iter",
            "extra": "iterations: 46616497\ncpu: 15.099029899222316 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.784726382147717,
            "unit": "ns/iter",
            "extra": "iterations: 39525619\ncpu: 17.784407626861395 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.818583202957512,
            "unit": "ns/iter",
            "extra": "iterations: 39677412\ncpu: 17.816401609057188 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 27.20921834465943,
            "unit": "ns/iter",
            "extra": "iterations: 26187565\ncpu: 27.209202421072533 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 41.023962199784386,
            "unit": "ns/iter",
            "extra": "iterations: 17735350\ncpu: 41.0187289791273 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8807862+zeFresk@users.noreply.github.com",
            "name": "zeFresk",
            "username": "zeFresk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fc1867b87532d9cbaa1de0fbfa19015c1389011",
          "message": "Better README",
          "timestamp": "2025-08-12T19:52:06+02:00",
          "tree_id": "a78e0b6fef8804639974a95ceacc7b37ffaabce5",
          "url": "https://github.com/zeFresk/ProPauli/commit/5fc1867b87532d9cbaa1de0fbfa19015c1389011"
        },
        "date": 1755021460619,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 54.79139089092889,
            "unit": "ns/iter",
            "extra": "iterations: 12759764\ncpu: 54.78853206062432 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 40.65311512719904,
            "unit": "ns/iter",
            "extra": "iterations: 13807189\ncpu: 40.65001623429649 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 74.16861020000027,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 74.16159389999999 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 62.564978527893075,
            "unit": "ns/iter",
            "extra": "iterations: 11183579\ncpu: 62.561641313572345 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 191.9919400941241,
            "unit": "ns/iter",
            "extra": "iterations: 3645452\ncpu: 191.98039886411902 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 946.5211662824829,
            "unit": "ns/iter",
            "extra": "iterations: 740541\ncpu: 946.4569942785068 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 6826.540724555598,
            "unit": "ns/iter",
            "extra": "iterations: 102518\ncpu: 6825.4286369222955 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 13466.507723975927,
            "unit": "ns/iter",
            "extra": "iterations: 51981\ncpu: 13466.176295184774 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 24441.009758710792,
            "unit": "ns/iter",
            "extra": "iterations: 42936\ncpu: 24437.366033165643 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 1336366.027329201,
            "unit": "ns/iter",
            "extra": "iterations: 805\ncpu: 1336200.0124223602 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 716375604.3529407,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 716265558.9411764 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 23272.72501760133,
            "unit": "ns/iter",
            "extra": "iterations: 42610\ncpu: 23270.834029570553 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 1336698.2180917042,
            "unit": "ns/iter",
            "extra": "iterations: 807\ncpu: 1336573.6641883499 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 725794702.9411758,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 725705700.529412 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 93177.31845946713,
            "unit": "ns/iter",
            "extra": "iterations: 9659\ncpu: 93166.12144114345 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 5848935.849999748,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5848756.8500000015 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 2550564085.000019,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2550345436.0000005 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 89750.0256566281,
            "unit": "ns/iter",
            "extra": "iterations: 9861\ncpu: 89742.71128688773 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 5484991.521739077,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5484830.596273317 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 38240891.75000012,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 38238854.54999996 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 94185.03707194483,
            "unit": "ns/iter",
            "extra": "iterations: 9549\ncpu: 94178.84040213643 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 20939.809412009985,
            "unit": "ns/iter",
            "extra": "iterations: 38334\ncpu: 20937.370037042703 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 50520.11830283923,
            "unit": "ns/iter",
            "extra": "iterations: 15249\ncpu: 50517.00937766426 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 92598.72038736074,
            "unit": "ns/iter",
            "extra": "iterations: 9810\ncpu: 92597.22660550503 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 5535874.999999919,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5535635.509999963 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 47943.90444302001,
            "unit": "ns/iter",
            "extra": "iterations: 17173\ncpu: 47937.783147964816 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 105889.13952211085,
            "unit": "ns/iter",
            "extra": "iterations: 7282\ncpu: 105881.50659159555 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 244931.96250388058,
            "unit": "ns/iter",
            "extra": "iterations: 3227\ncpu: 244906.51471955358 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 525867.4750000125,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525805.2550000016 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 17.09867642306544,
            "unit": "ns/iter",
            "extra": "iterations: 40030616\ncpu: 17.08107079841077 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 25.253272099624773,
            "unit": "ns/iter",
            "extra": "iterations: 29502922\ncpu: 25.251871221433486 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 116.38971713623407,
            "unit": "ns/iter",
            "extra": "iterations: 6340296\ncpu: 116.37705116606583 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 2543.8351998670787,
            "unit": "ns/iter",
            "extra": "iterations: 276984\ncpu: 2543.6577852872333 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 6328.583445877108,
            "unit": "ns/iter",
            "extra": "iterations: 108106\ncpu: 6328.298216565229 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 3.742934212428262,
            "unit": "ns/iter",
            "extra": "iterations: 186924987\ncpu: 3.7425793000055005 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 3.7435884782225295,
            "unit": "ns/iter",
            "extra": "iterations: 186932649\ncpu: 3.743366178906496 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 3.744216857083828,
            "unit": "ns/iter",
            "extra": "iterations: 186985047\ncpu: 3.744231606926332 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 3.7422505708686344,
            "unit": "ns/iter",
            "extra": "iterations: 187095588\ncpu: 3.741788406041905 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 3.743329171598902,
            "unit": "ns/iter",
            "extra": "iterations: 187051019\ncpu: 3.743241666061152 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 3.739989181092245,
            "unit": "ns/iter",
            "extra": "iterations: 187203741\ncpu: 3.739838046292008 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 3.8649237926377515,
            "unit": "ns/iter",
            "extra": "iterations: 181453466\ncpu: 3.8646036279075515 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 3.768417134549219,
            "unit": "ns/iter",
            "extra": "iterations: 185740702\ncpu: 3.7682271384976285 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 3.7449268741218846,
            "unit": "ns/iter",
            "extra": "iterations: 186925482\ncpu: 3.7445120617637238 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 3.7426039746427757,
            "unit": "ns/iter",
            "extra": "iterations: 187032958\ncpu: 3.7424232685236447 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.053164903154749,
            "unit": "ns/iter",
            "extra": "iterations: 172721541\ncpu: 4.053059091222433 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.052470773560267,
            "unit": "ns/iter",
            "extra": "iterations: 172725622\ncpu: 4.051933765796524 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.051895805816721,
            "unit": "ns/iter",
            "extra": "iterations: 172555621\ncpu: 4.0517738683227424 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.053668803342881,
            "unit": "ns/iter",
            "extra": "iterations: 172726061\ncpu: 4.053588989098771 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.054208892396086,
            "unit": "ns/iter",
            "extra": "iterations: 172717364\ncpu: 4.053634728932013 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 74.1967133525228,
            "unit": "ns/iter",
            "extra": "iterations: 9452185\ncpu: 74.19226813694434 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 79.39875879012295,
            "unit": "ns/iter",
            "extra": "iterations: 9046657\ncpu: 79.3944399572132 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 79.53252957796163,
            "unit": "ns/iter",
            "extra": "iterations: 8780947\ncpu: 79.53292816822656 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 88.48879084415506,
            "unit": "ns/iter",
            "extra": "iterations: 7960992\ncpu: 88.47917206800325 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 97.44379189872936,
            "unit": "ns/iter",
            "extra": "iterations: 7070769\ncpu: 97.43198964638668 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 73.68555710654708,
            "unit": "ns/iter",
            "extra": "iterations: 9489262\ncpu: 73.6809526388872 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 80.03608707098246,
            "unit": "ns/iter",
            "extra": "iterations: 8785889\ncpu: 80.03276037291147 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 80.00951553260717,
            "unit": "ns/iter",
            "extra": "iterations: 8734561\ncpu: 80.00691700475835 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 88.81206348224954,
            "unit": "ns/iter",
            "extra": "iterations: 7763430\ncpu: 88.8023136680553 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 99.00063393434779,
            "unit": "ns/iter",
            "extra": "iterations: 7014922\ncpu: 98.99312365839656 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 10023.27705031008,
            "unit": "ns/iter",
            "extra": "iterations: 69648\ncpu: 10022.99767401791 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 10589.68775697692,
            "unit": "ns/iter",
            "extra": "iterations: 66397\ncpu: 10588.718375830234 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 10090.82305891238,
            "unit": "ns/iter",
            "extra": "iterations: 68763\ncpu: 10089.498044006215 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 11102.572579863421,
            "unit": "ns/iter",
            "extra": "iterations: 61918\ncpu: 11101.872944862698 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 17356.135612042934,
            "unit": "ns/iter",
            "extra": "iterations: 40520\ncpu: 17355.622161895426 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 2473221.9575972473,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 2472848.1731448933 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 2476609.575971698,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 2476463.643109496 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 2249214.4230769146,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2249111.032051259 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 3675428.308900542,
            "unit": "ns/iter",
            "extra": "iterations: 191\ncpu: 3674728.015706768 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 39116359.44444451,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 39110816.11111121 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 103767.9944866614,
            "unit": "ns/iter",
            "extra": "iterations: 6711\ncpu: 103739.35821785232 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 104195.89994061568,
            "unit": "ns/iter",
            "extra": "iterations: 6736\ncpu: 104189.05522565354 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 106371.49378033963,
            "unit": "ns/iter",
            "extra": "iterations: 6592\ncpu: 106359.27002427186 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 149263.6185610889,
            "unit": "ns/iter",
            "extra": "iterations: 4698\ncpu: 149256.79459344185 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 174476.37720181092,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 174451.7310015116 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 197.50106140071682,
            "unit": "ns/iter",
            "extra": "iterations: 3550968\ncpu: 197.44362100700351 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 218.52952243094714,
            "unit": "ns/iter",
            "extra": "iterations: 3231763\ncpu: 218.44106544941528 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 226.6740610392478,
            "unit": "ns/iter",
            "extra": "iterations: 3013012\ncpu: 226.66636574962442 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 524.3638160000046,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 524.3409739999976 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 762.5855352227239,
            "unit": "ns/iter",
            "extra": "iterations: 955051\ncpu: 762.5540102046988 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 331.6778340292153,
            "unit": "ns/iter",
            "extra": "iterations: 2105033\ncpu: 331.6649092912038 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 382.8027457883619,
            "unit": "ns/iter",
            "extra": "iterations: 1741722\ncpu: 382.7967522945705 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 440.87343038411393,
            "unit": "ns/iter",
            "extra": "iterations: 1577456\ncpu: 440.84685721821023 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 913.1919474707331,
            "unit": "ns/iter",
            "extra": "iterations: 701171\ncpu: 913.1446950886485 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 1375.4191008180687,
            "unit": "ns/iter",
            "extra": "iterations: 467069\ncpu: 1375.424046554136 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 1114.8771273727134,
            "unit": "ns/iter",
            "extra": "iterations: 628651\ncpu: 1114.808494697379 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 1532.5619906760564,
            "unit": "ns/iter",
            "extra": "iterations: 485202\ncpu: 1532.495772894587 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 1909.8336948681097,
            "unit": "ns/iter",
            "extra": "iterations: 393692\ncpu: 1909.6284836877642 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 5770.865591523286,
            "unit": "ns/iter",
            "extra": "iterations: 128541\ncpu: 5770.542021611722 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 8965.673157021436,
            "unit": "ns/iter",
            "extra": "iterations: 59062\ncpu: 8965.441806914636 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 21617.915407761586,
            "unit": "ns/iter",
            "extra": "iterations: 32237\ncpu: 21616.700344324476 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 27054.872783708914,
            "unit": "ns/iter",
            "extra": "iterations: 21263\ncpu: 27053.236561161833 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 54671.5956318756,
            "unit": "ns/iter",
            "extra": "iterations: 12637\ncpu: 54665.95267864225 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 171403.43100410938,
            "unit": "ns/iter",
            "extra": "iterations: 5109\ncpu: 171396.4711293826 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 368110.35606454336,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 368074.1098386219 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/16",
            "value": 5325808.458015448,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 5325507.709923749 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/16",
            "value": 6116528.324561318,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 6116093.000000077 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/16",
            "value": 19139836.92537316,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 19137975.313432816 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/16",
            "value": 114893872.99999976,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 114880385.99999972 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/16",
            "value": 131187981.59999868,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 131168982.60000198 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 48.57197552214888,
            "unit": "ns/iter",
            "extra": "iterations: 14408454\ncpu: 48.569453946967556 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 53.594508199810775,
            "unit": "ns/iter",
            "extra": "iterations: 13080119\ncpu: 53.59070150661489 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 51.69160024181094,
            "unit": "ns/iter",
            "extra": "iterations: 13551152\ncpu: 51.68849984119333 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 58.536368776364185,
            "unit": "ns/iter",
            "extra": "iterations: 11917228\ncpu: 58.53425947712157 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 66.46063017649105,
            "unit": "ns/iter",
            "extra": "iterations: 10566405\ncpu: 66.45352189320813 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 76.92054148250892,
            "unit": "ns/iter",
            "extra": "iterations: 9050043\ncpu: 76.91728039303267 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 87.79810195386048,
            "unit": "ns/iter",
            "extra": "iterations: 7974411\ncpu: 87.79273578951457 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 85.32657941984384,
            "unit": "ns/iter",
            "extra": "iterations: 8420402\ncpu: 85.32276119358487 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 100.28813182209835,
            "unit": "ns/iter",
            "extra": "iterations: 7128213\ncpu: 100.28297639253935 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 118.17626151141134,
            "unit": "ns/iter",
            "extra": "iterations: 5931397\ncpu: 118.16118563636662 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 292.34784838719463,
            "unit": "ns/iter",
            "extra": "iterations: 2470240\ncpu: 292.33113948442707 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 331.4646519061656,
            "unit": "ns/iter",
            "extra": "iterations: 2123594\ncpu: 331.43537229808805 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 306.18177874922884,
            "unit": "ns/iter",
            "extra": "iterations: 2296209\ncpu: 306.1687307209495 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 528.8844572987381,
            "unit": "ns/iter",
            "extra": "iterations: 1288978\ncpu: 528.815947207785 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 742.4060481678323,
            "unit": "ns/iter",
            "extra": "iterations: 1024211\ncpu: 742.3562000408072 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 9376.960655875537,
            "unit": "ns/iter",
            "extra": "iterations: 71294\ncpu: 9376.472424047037 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 10759.238729794655,
            "unit": "ns/iter",
            "extra": "iterations: 71516\ncpu: 10758.84692935836 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 9364.576402858807,
            "unit": "ns/iter",
            "extra": "iterations: 75560\ncpu: 9364.36922975122 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 10334.308743854732,
            "unit": "ns/iter",
            "extra": "iterations: 67739\ncpu: 10333.495194791602 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 18566.56447021352,
            "unit": "ns/iter",
            "extra": "iterations: 38289\ncpu: 18566.158896810623 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/16",
            "value": 2226553.1661238656,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 2226301.325732898 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/16",
            "value": 2431882.5640139324,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 2431809.7508650315 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/16",
            "value": 2045698.0731707849,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2045390.9146341307 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/16",
            "value": 4339477.223602683,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 4339390.788819896 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/16",
            "value": 38429729.83333147,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 38423888.777777575 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 50.42449263739844,
            "unit": "ns/iter",
            "extra": "iterations: 13897605\ncpu: 50.42242595037088 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 59.7382546239372,
            "unit": "ns/iter",
            "extra": "iterations: 11649478\ncpu: 59.734288094281716 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 60.69938383230755,
            "unit": "ns/iter",
            "extra": "iterations: 11535983\ncpu: 60.690920661029594 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 135.04340378484338,
            "unit": "ns/iter",
            "extra": "iterations: 5173535\ncpu: 135.04385859958515 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 212.21642027925114,
            "unit": "ns/iter",
            "extra": "iterations: 3307934\ncpu: 212.2087825815205 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 80.62440184148679,
            "unit": "ns/iter",
            "extra": "iterations: 8691885\ncpu: 80.61101038497313 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 99.85931946583926,
            "unit": "ns/iter",
            "extra": "iterations: 7013138\ncpu: 99.8418080465542 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 104.59582466180791,
            "unit": "ns/iter",
            "extra": "iterations: 6690955\ncpu: 104.5933371245198 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 249.97968324494815,
            "unit": "ns/iter",
            "extra": "iterations: 2797051\ncpu: 249.96928336308972 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 404.82572022410676,
            "unit": "ns/iter",
            "extra": "iterations: 1708982\ncpu: 404.80991607869413 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 294.151035689151,
            "unit": "ns/iter",
            "extra": "iterations: 2376968\ncpu: 294.1237799583345 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 369.9392878660892,
            "unit": "ns/iter",
            "extra": "iterations: 1893773\ncpu: 369.9215940875689 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 413.40956665723206,
            "unit": "ns/iter",
            "extra": "iterations: 1707932\ncpu: 413.3753837974811 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 1141.4162654306772,
            "unit": "ns/iter",
            "extra": "iterations: 611444\ncpu: 1141.3507974564916 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 1903.3584328957038,
            "unit": "ns/iter",
            "extra": "iterations: 366102\ncpu: 1903.1596549595797 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 9269.169612616979,
            "unit": "ns/iter",
            "extra": "iterations: 75584\ncpu: 9269.00011907293 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 10564.502265645466,
            "unit": "ns/iter",
            "extra": "iterations: 66427\ncpu: 10564.100666897633 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 11038.443610318272,
            "unit": "ns/iter",
            "extra": "iterations: 63806\ncpu: 11037.136460521204 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 19817.12489377481,
            "unit": "ns/iter",
            "extra": "iterations: 35302\ncpu: 19816.30358053343 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 36635.31988609489,
            "unit": "ns/iter",
            "extra": "iterations: 18963\ncpu: 36631.75499657256 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/16",
            "value": 2273913.576051725,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2273784.3592233164 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/16",
            "value": 2574483.553505456,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 2574188.8339482984 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/16",
            "value": 2347935.983221499,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 2347776.781879278 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/16",
            "value": 6923229.742573884,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 6921423.57425721 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/16",
            "value": 43952045.81249956,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 43948361.68749983 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.582362774907076,
            "unit": "ns/iter",
            "extra": "iterations: 152962112\ncpu: 4.582117688071685 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.576509347827764,
            "unit": "ns/iter",
            "extra": "iterations: 152945213\ncpu: 4.575707158614886 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.582719903200109,
            "unit": "ns/iter",
            "extra": "iterations: 152723994\ncpu: 4.5815394272623555 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.583431936844721,
            "unit": "ns/iter",
            "extra": "iterations: 152845301\ncpu: 4.583079698341542 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.579116989111219,
            "unit": "ns/iter",
            "extra": "iterations: 152981896\ncpu: 4.578889373942673 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 8.882218420499811,
            "unit": "ns/iter",
            "extra": "iterations: 120201071\ncpu: 8.881850786504177 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 8.889791445199092,
            "unit": "ns/iter",
            "extra": "iterations: 120281815\ncpu: 8.88903855499679 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 8.877906089166265,
            "unit": "ns/iter",
            "extra": "iterations: 120179425\ncpu: 8.877812870214568 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 8.87543715086047,
            "unit": "ns/iter",
            "extra": "iterations: 120217080\ncpu: 8.874863280658577 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 8.884272624674276,
            "unit": "ns/iter",
            "extra": "iterations: 120269642\ncpu: 8.88392185452762 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 60.094560122356334,
            "unit": "ns/iter",
            "extra": "iterations: 11716440\ncpu: 60.09116062558401 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 64.45820780319946,
            "unit": "ns/iter",
            "extra": "iterations: 10869900\ncpu: 64.45651238741885 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 62.78662483793386,
            "unit": "ns/iter",
            "extra": "iterations: 11184657\ncpu: 62.78140044884508 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 71.69424897722071,
            "unit": "ns/iter",
            "extra": "iterations: 9732095\ncpu: 71.69368630289578 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 83.94327289398107,
            "unit": "ns/iter",
            "extra": "iterations: 8489557\ncpu: 83.93644521145218 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.6235464437752837,
            "unit": "ns/iter",
            "extra": "iterations: 1123780145\ncpu: 0.6235130520124857 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.0662833479111677,
            "unit": "ns/iter",
            "extra": "iterations: 656672277\ncpu: 1.0662399518352461 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7242408259783031,
            "unit": "ns/iter",
            "extra": "iterations: 961698674\ncpu: 0.7242086371016558 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.863073266416298,
            "unit": "ns/iter",
            "extra": "iterations: 797632326\ncpu: 0.863059283783328 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.585119314740484,
            "unit": "ns/iter",
            "extra": "iterations: 107065271\ncpu: 6.584271318007544 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.8480358868481955,
            "unit": "ns/iter",
            "extra": "iterations: 826277523\ncpu: 0.8479729043773144 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.8218331853995791,
            "unit": "ns/iter",
            "extra": "iterations: 851364483\ncpu: 0.8217117356538716 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.6785383748757877,
            "unit": "ns/iter",
            "extra": "iterations: 1029281924\ncpu: 0.6784844392157018 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 16.77387642231701,
            "unit": "ns/iter",
            "extra": "iterations: 42319793\ncpu: 16.7720651894488 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 28.14683341709379,
            "unit": "ns/iter",
            "extra": "iterations: 26846668\ncpu: 28.14269945901701 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 113.80312811926207,
            "unit": "ns/iter",
            "extra": "iterations: 6151300\ncpu: 113.7877695771657 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 2450.304760589812,
            "unit": "ns/iter",
            "extra": "iterations: 267971\ncpu: 2450.2271253231966 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 6487.357256163306,
            "unit": "ns/iter",
            "extra": "iterations: 114103\ncpu: 6487.1274462546935 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.9376982652127089,
            "unit": "ns/iter",
            "extra": "iterations: 746588360\ncpu: 0.9376257272481412 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.9376763891075447,
            "unit": "ns/iter",
            "extra": "iterations: 746740767\ncpu: 0.937646667950018 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 0.9376894669911493,
            "unit": "ns/iter",
            "extra": "iterations: 746889005\ncpu: 0.9376591211166793 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.9388810604236468,
            "unit": "ns/iter",
            "extra": "iterations: 746274417\ncpu: 0.9388406905552499 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.9383750397397141,
            "unit": "ns/iter",
            "extra": "iterations: 746429171\ncpu: 0.9383299383405114 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.2939230049532164,
            "unit": "ns/iter",
            "extra": "iterations: 213426404\ncpu: 3.29374795632123 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.1887493805732774,
            "unit": "ns/iter",
            "extra": "iterations: 589559201\ncpu: 1.1886994619222544 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.0127443586870992,
            "unit": "ns/iter",
            "extra": "iterations: 691120457\ncpu: 1.012688880659219 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.9484096047561007,
            "unit": "ns/iter",
            "extra": "iterations: 738441406\ncpu: 0.9484049517125601 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.9448045707197346,
            "unit": "ns/iter",
            "extra": "iterations: 741016775\ncpu: 0.9447154580272651 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 24.80026482584469,
            "unit": "ns/iter",
            "extra": "iterations: 28194378\ncpu: 24.797372298831938 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 29.877994292330914,
            "unit": "ns/iter",
            "extra": "iterations: 24279610\ncpu: 29.875045068681697 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 29.974234776085098,
            "unit": "ns/iter",
            "extra": "iterations: 23155902\ncpu: 29.972139716258695 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.834021957541694,
            "unit": "ns/iter",
            "extra": "iterations: 19192858\ncpu: 36.83018777088843 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 42.47651452407246,
            "unit": "ns/iter",
            "extra": "iterations: 16821588\ncpu: 42.47328551858388 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 15.729422550832286,
            "unit": "ns/iter",
            "extra": "iterations: 44701216\ncpu: 15.729060815706129 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 7.8585172345092555,
            "unit": "ns/iter",
            "extra": "iterations: 89012255\ncpu: 7.858435459252398 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 7.869107692987134,
            "unit": "ns/iter",
            "extra": "iterations: 88932866\ncpu: 7.868621089980367 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 7.862463008352154,
            "unit": "ns/iter",
            "extra": "iterations: 89096125\ncpu: 7.862328434598036 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 7.865229952231343,
            "unit": "ns/iter",
            "extra": "iterations: 85247792\ncpu: 7.864753928172097 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.2453619750642568,
            "unit": "ns/iter",
            "extra": "iterations: 561590825\ncpu: 1.2453506305057787 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 4.381181295997347,
            "unit": "ns/iter",
            "extra": "iterations: 159590501\ncpu: 4.380584706604847 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.181856570535318,
            "unit": "ns/iter",
            "extra": "iterations: 85576754\ncpu: 8.181195362936906 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 57.5117348191339,
            "unit": "ns/iter",
            "extra": "iterations: 12158645\ncpu: 57.50822719143558 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 115.8391723892091,
            "unit": "ns/iter",
            "extra": "iterations: 6047867\ncpu: 115.82822621595332 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.9331982811629184,
            "unit": "ns/iter",
            "extra": "iterations: 751320518\ncpu: 0.9331306375955849 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.3733000350192603,
            "unit": "ns/iter",
            "extra": "iterations: 207689793\ncpu: 3.3729136944154763 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.405148358603681,
            "unit": "ns/iter",
            "extra": "iterations: 109326184\ncpu: 6.404581632520902 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.13754488622715,
            "unit": "ns/iter",
            "extra": "iterations: 18343321\ncpu: 38.13256367263134 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 72.42703615048642,
            "unit": "ns/iter",
            "extra": "iterations: 9657906\ncpu: 72.41918734765201 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.248284907431184,
            "unit": "ns/iter",
            "extra": "iterations: 560656910\ncpu: 1.2480854431991313 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.2475102728202738,
            "unit": "ns/iter",
            "extra": "iterations: 560998816\ncpu: 1.24741259881732 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.2474902972092612,
            "unit": "ns/iter",
            "extra": "iterations: 560747175\ncpu: 1.2472753019219103 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.2488066480390878,
            "unit": "ns/iter",
            "extra": "iterations: 561079859\ncpu: 1.248683799216566 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.2493867318852783,
            "unit": "ns/iter",
            "extra": "iterations: 560727016\ncpu: 1.2492030542719255 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.234090340458076,
            "unit": "ns/iter",
            "extra": "iterations: 165428650\ncpu: 4.234100816273509 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.2352212306890875,
            "unit": "ns/iter",
            "extra": "iterations: 165401171\ncpu: 4.2350138923743845 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.23551530763739,
            "unit": "ns/iter",
            "extra": "iterations: 165463024\ncpu: 4.235263172755782 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.235699229751355,
            "unit": "ns/iter",
            "extra": "iterations: 165438012\ncpu: 4.235609057004498 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.235438765802108,
            "unit": "ns/iter",
            "extra": "iterations: 165384676\ncpu: 4.234896442279841 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.102439536961734,
            "unit": "ns/iter",
            "extra": "iterations: 46584865\ncpu: 15.102471865057773 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.75940096723516,
            "unit": "ns/iter",
            "extra": "iterations: 39535400\ncpu: 17.757511799551768 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.70250607558979,
            "unit": "ns/iter",
            "extra": "iterations: 39795727\ncpu: 17.70235734102869 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 28.059725507271537,
            "unit": "ns/iter",
            "extra": "iterations: 25774599\ncpu: 28.057797252246747 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 40.78101700178443,
            "unit": "ns/iter",
            "extra": "iterations: 17608504\ncpu: 40.780513381490955 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8807862+zeFresk@users.noreply.github.com",
            "name": "zeFresk",
            "username": "zeFresk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53d5b6686a5b5f98200520e2ae95049e8ae8b606",
          "message": "Add documentation\n\nAdd documentation",
          "timestamp": "2025-08-13T14:11:21+02:00",
          "tree_id": "8d8c1908ec8b9999e9e598fffb4ab3f4820f2f82",
          "url": "https://github.com/zeFresk/ProPauli/commit/53d5b6686a5b5f98200520e2ae95049e8ae8b606"
        },
        "date": 1755087413193,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 54.80355896851154,
            "unit": "ns/iter",
            "extra": "iterations: 12786570\ncpu: 54.7984852857334 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 41.104591150918154,
            "unit": "ns/iter",
            "extra": "iterations: 13041218\ncpu: 41.10364346336362 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 75.59253449999801,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 75.57969450000002 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 62.66223580233565,
            "unit": "ns/iter",
            "extra": "iterations: 11183672\ncpu: 62.66089295179616 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 192.00785540953794,
            "unit": "ns/iter",
            "extra": "iterations: 3644113\ncpu: 191.98488713165602 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 944.8079184299539,
            "unit": "ns/iter",
            "extra": "iterations: 739389\ncpu: 944.7204732556202 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 6816.057671890669,
            "unit": "ns/iter",
            "extra": "iterations: 102667\ncpu: 6815.763331937234 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 13464.414053638096,
            "unit": "ns/iter",
            "extra": "iterations: 52015\ncpu: 13463.14961068922 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 24305.742432016217,
            "unit": "ns/iter",
            "extra": "iterations: 38980\ncpu: 24281.51621344277 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 1335110.9304347935,
            "unit": "ns/iter",
            "extra": "iterations: 805\ncpu: 1334997.2881987575 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 714321108.3529413,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 714246597.235294 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 23529.44063136965,
            "unit": "ns/iter",
            "extra": "iterations: 42194\ncpu: 23491.115822154847 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 1345411.1629072826,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 1345331.6766917293 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 724459675.9411764,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 724403905.7647059 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 94962.25794274858,
            "unit": "ns/iter",
            "extra": "iterations: 9537\ncpu: 94959.20006291283 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 5837472.149999883,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5837105.829999984 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 2533379629.000024,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2533205654.999996 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 90188.8013367612,
            "unit": "ns/iter",
            "extra": "iterations: 9725\ncpu: 90187.68298200567 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 5428280.0925926445,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 5427584.851851858 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 38181775.249999814,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 38179679.550000146 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 95109.15290001167,
            "unit": "ns/iter",
            "extra": "iterations: 9431\ncpu: 95102.6353515005 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 20902.175939373392,
            "unit": "ns/iter",
            "extra": "iterations: 37871\ncpu: 20901.36003802383 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 50816.59754224347,
            "unit": "ns/iter",
            "extra": "iterations: 14973\ncpu: 50815.21391838636 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 94518.84572627202,
            "unit": "ns/iter",
            "extra": "iterations: 9535\ncpu: 94510.93623492382 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 5547941.140000034,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5547793.389999995 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 48024.06515151482,
            "unit": "ns/iter",
            "extra": "iterations: 17160\ncpu: 48021.43752913758 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 104658.75564933076,
            "unit": "ns/iter",
            "extra": "iterations: 7346\ncpu: 104653.03335148402 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 244380.8090624966,
            "unit": "ns/iter",
            "extra": "iterations: 3200\ncpu: 244364.77468749997 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 536391.3200000069,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536362.8319999947 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 16.502790183448653,
            "unit": "ns/iter",
            "extra": "iterations: 40162413\ncpu: 16.501304764731284 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 26.16784317993423,
            "unit": "ns/iter",
            "extra": "iterations: 27069393\ncpu: 26.165915467702025 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 114.14716184489706,
            "unit": "ns/iter",
            "extra": "iterations: 6105815\ncpu: 114.14653424645124 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 2586.445231305661,
            "unit": "ns/iter",
            "extra": "iterations: 274226\ncpu: 2586.407408487887 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 6249.934185339098,
            "unit": "ns/iter",
            "extra": "iterations: 108137\ncpu: 6249.353005909147 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 3.744989047243774,
            "unit": "ns/iter",
            "extra": "iterations: 187070263\ncpu: 3.7447761593193647 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 3.743508125680721,
            "unit": "ns/iter",
            "extra": "iterations: 186932955\ncpu: 3.7434219717973285 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 3.744295870212447,
            "unit": "ns/iter",
            "extra": "iterations: 186971333\ncpu: 3.7439410564613427 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 3.744926537929229,
            "unit": "ns/iter",
            "extra": "iterations: 186975331\ncpu: 3.744752145939548 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 3.7462711942360563,
            "unit": "ns/iter",
            "extra": "iterations: 186943634\ncpu: 3.7459676428457134 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 3.7407110546384965,
            "unit": "ns/iter",
            "extra": "iterations: 187174505\ncpu: 3.7404451957813354 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 3.861264351411932,
            "unit": "ns/iter",
            "extra": "iterations: 181192363\ncpu: 3.861173194148358 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 3.7645112532172167,
            "unit": "ns/iter",
            "extra": "iterations: 185953357\ncpu: 3.764271935139143 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 3.7442316792561856,
            "unit": "ns/iter",
            "extra": "iterations: 186993936\ncpu: 3.744052299107726 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 3.741618207472411,
            "unit": "ns/iter",
            "extra": "iterations: 187138550\ncpu: 3.7413308909361516 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.053171373146369,
            "unit": "ns/iter",
            "extra": "iterations: 172740395\ncpu: 4.052995647022826 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.051627121029325,
            "unit": "ns/iter",
            "extra": "iterations: 172773841\ncpu: 4.051546929491499 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.054500161524792,
            "unit": "ns/iter",
            "extra": "iterations: 172759910\ncpu: 4.054226834223259 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.052401467015274,
            "unit": "ns/iter",
            "extra": "iterations: 172715031\ncpu: 4.052065561103316 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.053207155438489,
            "unit": "ns/iter",
            "extra": "iterations: 172708857\ncpu: 4.052956577669897 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 74.06189137559551,
            "unit": "ns/iter",
            "extra": "iterations: 9415803\ncpu: 74.05809031900878 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 79.79918207446018,
            "unit": "ns/iter",
            "extra": "iterations: 9066840\ncpu: 79.7936960396346 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 79.42557743730364,
            "unit": "ns/iter",
            "extra": "iterations: 8777533\ncpu: 79.42007475221105 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 88.78697979980637,
            "unit": "ns/iter",
            "extra": "iterations: 7846162\ncpu: 88.78161233479483 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 100.21936862859246,
            "unit": "ns/iter",
            "extra": "iterations: 6966771\ncpu: 100.21627752656144 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 73.66937872874875,
            "unit": "ns/iter",
            "extra": "iterations: 9473849\ncpu: 73.66510517530935 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 80.19201579049705,
            "unit": "ns/iter",
            "extra": "iterations: 8776924\ncpu: 80.18676634319677 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 80.77832413537561,
            "unit": "ns/iter",
            "extra": "iterations: 8637607\ncpu: 80.77247969258124 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 90.56176083491842,
            "unit": "ns/iter",
            "extra": "iterations: 7783444\ncpu: 90.55996792679552 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 99.48760852067329,
            "unit": "ns/iter",
            "extra": "iterations: 7003159\ncpu: 99.48330946077344 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 10004.477078510725,
            "unit": "ns/iter",
            "extra": "iterations: 69978\ncpu: 10003.311097773452 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 10525.98459364809,
            "unit": "ns/iter",
            "extra": "iterations: 66531\ncpu: 10525.588086756654 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 10145.60930584712,
            "unit": "ns/iter",
            "extra": "iterations: 68688\ncpu: 10145.564479967228 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 11122.493112075148,
            "unit": "ns/iter",
            "extra": "iterations: 63154\ncpu: 11121.700604870559 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 17141.965315933714,
            "unit": "ns/iter",
            "extra": "iterations: 40768\ncpu: 17140.56119996109 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 2487463.276595737,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 2487452.6170213195 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 2498392.2214285517,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 2498185.953571408 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 2339641.8133334387,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 2339321.343333343 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 3535342.3165827338,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 3534966.135678435 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 38658940.61110946,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 38653686.11111108 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 104441.35791529051,
            "unit": "ns/iter",
            "extra": "iterations: 6658\ncpu: 104401.63277260406 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 104766.0206958629,
            "unit": "ns/iter",
            "extra": "iterations: 6668\ncpu: 104757.66196760745 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 127076.61709971902,
            "unit": "ns/iter",
            "extra": "iterations: 5696\ncpu: 127070.55582865093 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 150079.35620564412,
            "unit": "ns/iter",
            "extra": "iterations: 4649\ncpu: 150053.11292751183 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 171309.82092154582,
            "unit": "ns/iter",
            "extra": "iterations: 4015\ncpu: 171298.04831880622 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 194.98680111784162,
            "unit": "ns/iter",
            "extra": "iterations: 3595456\ncpu: 194.96829247806238 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 217.76755157584049,
            "unit": "ns/iter",
            "extra": "iterations: 3242216\ncpu: 217.765110961144 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 228.68470740852862,
            "unit": "ns/iter",
            "extra": "iterations: 3007914\ncpu: 228.66808758494795 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 527.7175730000181,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 527.612817000005 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 764.7640344483982,
            "unit": "ns/iter",
            "extra": "iterations: 954936\ncpu: 764.5652514932883 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 331.92437665832574,
            "unit": "ns/iter",
            "extra": "iterations: 2125640\ncpu: 331.8469830262863 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 384.207543403716,
            "unit": "ns/iter",
            "extra": "iterations: 1763501\ncpu: 384.1681144496063 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 441.6937153670794,
            "unit": "ns/iter",
            "extra": "iterations: 1575812\ncpu: 441.66020502445747 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 943.4529720791094,
            "unit": "ns/iter",
            "extra": "iterations: 701445\ncpu: 943.3875884780782 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 1366.060427885318,
            "unit": "ns/iter",
            "extra": "iterations: 466854\ncpu: 1365.9630762508248 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 1112.3542610581492,
            "unit": "ns/iter",
            "extra": "iterations: 629691\ncpu: 1112.297214030374 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 1532.0451529573713,
            "unit": "ns/iter",
            "extra": "iterations: 486214\ncpu: 1531.8809166334352 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 1919.1202584851767,
            "unit": "ns/iter",
            "extra": "iterations: 387798\ncpu: 1919.0138964099694 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 5761.37755492327,
            "unit": "ns/iter",
            "extra": "iterations: 130728\ncpu: 5760.4681476041005 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 9001.233144049847,
            "unit": "ns/iter",
            "extra": "iterations: 58466\ncpu: 9000.851007423047 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 21596.762732805284,
            "unit": "ns/iter",
            "extra": "iterations: 32377\ncpu: 21595.434413317846 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 27189.744917169868,
            "unit": "ns/iter",
            "extra": "iterations: 21248\ncpu: 27187.18538215354 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 54211.40593274231,
            "unit": "ns/iter",
            "extra": "iterations: 12608\ncpu: 54209.62182741183 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 171708.02240566254,
            "unit": "ns/iter",
            "extra": "iterations: 5088\ncpu: 171683.68730346087 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 371011.6417830428,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 370999.8517722783 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/16",
            "value": 5341044.70992399,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 5340277.41984733 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/16",
            "value": 6145420.999999623,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 6145263.649122811 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/16",
            "value": 24688117.676923692,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 24684330.461538523 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/16",
            "value": 126486266.89999673,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 126466752.30000141 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/16",
            "value": 141564225.59999555,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 141551541.59999484 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 48.556871980586294,
            "unit": "ns/iter",
            "extra": "iterations: 14426445\ncpu: 48.55470443342097 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 53.53992857612762,
            "unit": "ns/iter",
            "extra": "iterations: 13094782\ncpu: 53.53930412892539 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 51.684121978593,
            "unit": "ns/iter",
            "extra": "iterations: 13519323\ncpu: 51.68031853370326 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 59.05282167452478,
            "unit": "ns/iter",
            "extra": "iterations: 11902046\ncpu: 59.04731211759823 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 66.37488092589605,
            "unit": "ns/iter",
            "extra": "iterations: 10491366\ncpu: 66.37162682152139 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 78.03695108581766,
            "unit": "ns/iter",
            "extra": "iterations: 9102493\ncpu: 78.02959134382165 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 86.88500818706082,
            "unit": "ns/iter",
            "extra": "iterations: 8063948\ncpu: 86.88194938757078 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 85.31782129366366,
            "unit": "ns/iter",
            "extra": "iterations: 8429259\ncpu: 85.30554239702495 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 98.14790320063096,
            "unit": "ns/iter",
            "extra": "iterations: 6578431\ncpu: 98.13891534318822 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 116.76393141416266,
            "unit": "ns/iter",
            "extra": "iterations: 5857302\ncpu: 116.75385578548192 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 294.0902766325676,
            "unit": "ns/iter",
            "extra": "iterations: 2431637\ncpu: 294.0700943438534 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 337.1135076321935,
            "unit": "ns/iter",
            "extra": "iterations: 2102863\ncpu: 337.0708576830734 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 308.79342862961096,
            "unit": "ns/iter",
            "extra": "iterations: 2264307\ncpu: 308.77639604524035 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 547.0928378310726,
            "unit": "ns/iter",
            "extra": "iterations: 1300095\ncpu: 546.9528542145167 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 726.3508241040978,
            "unit": "ns/iter",
            "extra": "iterations: 992047\ncpu: 726.2378828825614 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 9143.208409244544,
            "unit": "ns/iter",
            "extra": "iterations: 76844\ncpu: 9142.862344490331 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 10062.83099351302,
            "unit": "ns/iter",
            "extra": "iterations: 72299\ncpu: 10061.82688557245 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 9440.742982574617,
            "unit": "ns/iter",
            "extra": "iterations: 74030\ncpu: 9440.230149939332 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 10164.819876324436,
            "unit": "ns/iter",
            "extra": "iterations: 68081\ncpu: 10163.811606762205 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 19127.604795092822,
            "unit": "ns/iter",
            "extra": "iterations: 35870\ncpu: 19123.191413437347 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/16",
            "value": 2215347.6346154287,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2214921.615384596 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/16",
            "value": 2407791.416666743,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 2407292.7777777486 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/16",
            "value": 2107676.789968705,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2107532.043887185 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/16",
            "value": 4475365.405228494,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 4474970.405228901 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/16",
            "value": 39141180.94444221,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 39135773.83333215 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 50.43607440511132,
            "unit": "ns/iter",
            "extra": "iterations: 13897970\ncpu: 50.4311545499073 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 59.80679487365244,
            "unit": "ns/iter",
            "extra": "iterations: 11717510\ncpu: 59.803582757771835 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 60.709823324767704,
            "unit": "ns/iter",
            "extra": "iterations: 11491537\ncpu: 60.704861499380506 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 134.23209622652456,
            "unit": "ns/iter",
            "extra": "iterations: 5212700\ncpu: 134.20313158247916 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 226.57658626402366,
            "unit": "ns/iter",
            "extra": "iterations: 3103298\ncpu: 226.5237563392224 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 80.67827187756242,
            "unit": "ns/iter",
            "extra": "iterations: 8647466\ncpu: 80.66153529831497 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 99.97676252871348,
            "unit": "ns/iter",
            "extra": "iterations: 7004893\ncpu: 99.95475948026349 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 104.7428846689127,
            "unit": "ns/iter",
            "extra": "iterations: 6686653\ncpu: 104.72161707807973 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 249.55721106448976,
            "unit": "ns/iter",
            "extra": "iterations: 2713365\ncpu: 249.51810464128823 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 413.7232774891418,
            "unit": "ns/iter",
            "extra": "iterations: 1730947\ncpu: 413.64182150002205 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 295.02184346803966,
            "unit": "ns/iter",
            "extra": "iterations: 2380025\ncpu: 294.9789552630715 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 370.4336133217942,
            "unit": "ns/iter",
            "extra": "iterations: 1890078\ncpu: 370.37582364324516 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 408.8788191051421,
            "unit": "ns/iter",
            "extra": "iterations: 1707959\ncpu: 408.8231362696665 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 1156.0709160205367,
            "unit": "ns/iter",
            "extra": "iterations: 606351\ncpu: 1155.9063050939058 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 1914.232696780054,
            "unit": "ns/iter",
            "extra": "iterations: 366348\ncpu: 1914.138731479363 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 9228.290683050436,
            "unit": "ns/iter",
            "extra": "iterations: 76334\ncpu: 9227.118977126842 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 10483.31572562508,
            "unit": "ns/iter",
            "extra": "iterations: 66770\ncpu: 10482.955429084861 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 10932.239811667656,
            "unit": "ns/iter",
            "extra": "iterations: 64142\ncpu: 10931.263477908047 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 19657.177963243645,
            "unit": "ns/iter",
            "extra": "iterations: 35586\ncpu: 19656.33007362496 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 37605.925421739965,
            "unit": "ns/iter",
            "extra": "iterations: 18732\ncpu: 37602.4626841758 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/16",
            "value": 2265979.7313914713,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 2265822.0841423324 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/16",
            "value": 2587044.7956203846,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 2586752.5291970526 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/16",
            "value": 2426031.847750859,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 2425901.622837321 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/16",
            "value": 7079975.979797606,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 7079194.151515367 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/16",
            "value": 43842264.81250053,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 43841389.312500924 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.592885159758453,
            "unit": "ns/iter",
            "extra": "iterations: 152965065\ncpu: 4.592504752637478 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.575005125127662,
            "unit": "ns/iter",
            "extra": "iterations: 152932776\ncpu: 4.574879148208171 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.577966924586783,
            "unit": "ns/iter",
            "extra": "iterations: 153011422\ncpu: 4.577713120004808 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.579097367344557,
            "unit": "ns/iter",
            "extra": "iterations: 152948466\ncpu: 4.57865279930303 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.579035932989793,
            "unit": "ns/iter",
            "extra": "iterations: 153053365\ncpu: 4.5788133831621725 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 8.875277431677755,
            "unit": "ns/iter",
            "extra": "iterations: 120198062\ncpu: 8.87438824096862 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 8.886546151692237,
            "unit": "ns/iter",
            "extra": "iterations: 120311688\ncpu: 8.88572640590002 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 8.883190106115082,
            "unit": "ns/iter",
            "extra": "iterations: 120350379\ncpu: 8.882551612072481 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 8.878170068951668,
            "unit": "ns/iter",
            "extra": "iterations: 119728074\ncpu: 8.877197214414446 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 8.880793660700641,
            "unit": "ns/iter",
            "extra": "iterations: 120291908\ncpu: 8.880290592780456 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 59.817785933755175,
            "unit": "ns/iter",
            "extra": "iterations: 11701303\ncpu: 59.810604425848986 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 64.49336934299603,
            "unit": "ns/iter",
            "extra": "iterations: 10874488\ncpu: 64.48898044671138 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 62.89926256209372,
            "unit": "ns/iter",
            "extra": "iterations: 10661101\ncpu: 62.894017043831504 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 70.95514945833636,
            "unit": "ns/iter",
            "extra": "iterations: 9815110\ncpu: 70.95354112180159 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 82.77038353502203,
            "unit": "ns/iter",
            "extra": "iterations: 8312383\ncpu: 82.76796401224311 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.623412365328743,
            "unit": "ns/iter",
            "extra": "iterations: 1101871880\ncpu: 0.6233186393684671 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.0662095103161977,
            "unit": "ns/iter",
            "extra": "iterations: 655710604\ncpu: 1.066145087078706 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7236617907501606,
            "unit": "ns/iter",
            "extra": "iterations: 959007065\ncpu: 0.723548701906579 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.8832943953674721,
            "unit": "ns/iter",
            "extra": "iterations: 794898568\ncpu: 0.8828060752022856 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.592523541720631,
            "unit": "ns/iter",
            "extra": "iterations: 107128746\ncpu: 6.59197132765824 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.8507452185911913,
            "unit": "ns/iter",
            "extra": "iterations: 824724661\ncpu: 0.8505994329663937 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.8218202306045116,
            "unit": "ns/iter",
            "extra": "iterations: 851736168\ncpu: 0.8217296943529779 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.6799339102600597,
            "unit": "ns/iter",
            "extra": "iterations: 1027123424\ncpu: 0.6798066529149694 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 16.507254772475182,
            "unit": "ns/iter",
            "extra": "iterations: 43221066\ncpu: 16.504252926107633 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 25.824979367787762,
            "unit": "ns/iter",
            "extra": "iterations: 25822487\ncpu: 25.822065086139887 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 108.88901387869173,
            "unit": "ns/iter",
            "extra": "iterations: 6221841\ncpu: 108.8845086205169 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 2619.8426934183403,
            "unit": "ns/iter",
            "extra": "iterations: 265952\ncpu: 2619.649301377633 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 6433.597816945513,
            "unit": "ns/iter",
            "extra": "iterations: 110579\ncpu: 6433.026840539234 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.9367326310850723,
            "unit": "ns/iter",
            "extra": "iterations: 746918938\ncpu: 0.9366604170906699 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.9377189403400689,
            "unit": "ns/iter",
            "extra": "iterations: 746644040\ncpu: 0.9375563809496116 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 0.9374561367223905,
            "unit": "ns/iter",
            "extra": "iterations: 746729424\ncpu: 0.9373853426726724 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.9379174809789471,
            "unit": "ns/iter",
            "extra": "iterations: 746476524\ncpu: 0.9378116812686064 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.9381467733794028,
            "unit": "ns/iter",
            "extra": "iterations: 745834268\ncpu: 0.9380935122171313 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.2865782425993175,
            "unit": "ns/iter",
            "extra": "iterations: 212926796\ncpu: 3.2861265944187905 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.1886528502684153,
            "unit": "ns/iter",
            "extra": "iterations: 588650327\ncpu: 1.1885633811938696 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.012630861291329,
            "unit": "ns/iter",
            "extra": "iterations: 692285886\ncpu: 1.0124469416093056 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.9475152336887096,
            "unit": "ns/iter",
            "extra": "iterations: 739038996\ncpu: 0.9474221925902472 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.9436727037746792,
            "unit": "ns/iter",
            "extra": "iterations: 742507555\ncpu: 0.9436348496144055 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 24.795341333491702,
            "unit": "ns/iter",
            "extra": "iterations: 28219191\ncpu: 24.79378335119507 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 29.988908492567493,
            "unit": "ns/iter",
            "extra": "iterations: 24418322\ncpu: 29.985946741140307 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 29.985845422311556,
            "unit": "ns/iter",
            "extra": "iterations: 23168971\ncpu: 29.98465024622826 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.224274899538074,
            "unit": "ns/iter",
            "extra": "iterations: 19328632\ncpu: 36.22247120230669 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 41.9589878297473,
            "unit": "ns/iter",
            "extra": "iterations: 16675416\ncpu: 41.95714133908272 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 15.638768521298214,
            "unit": "ns/iter",
            "extra": "iterations: 44737956\ncpu: 15.637245630980324 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 7.8529025838728455,
            "unit": "ns/iter",
            "extra": "iterations: 89222383\ncpu: 7.852388856280541 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 7.85815350581633,
            "unit": "ns/iter",
            "extra": "iterations: 88689291\ncpu: 7.857585725879938 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 7.860550181944213,
            "unit": "ns/iter",
            "extra": "iterations: 89087402\ncpu: 7.859685188709232 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 7.880428230313087,
            "unit": "ns/iter",
            "extra": "iterations: 89095888\ncpu: 7.880178241222534 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.2437205506503535,
            "unit": "ns/iter",
            "extra": "iterations: 561949592\ncpu: 1.2435888715797743 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 4.430267734012463,
            "unit": "ns/iter",
            "extra": "iterations: 159262507\ncpu: 4.429929487421602 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.184836300755746,
            "unit": "ns/iter",
            "extra": "iterations: 85578801\ncpu: 8.183717963050368 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 57.48902876928636,
            "unit": "ns/iter",
            "extra": "iterations: 12181359\ncpu: 57.48319460907626 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 116.26618185398354,
            "unit": "ns/iter",
            "extra": "iterations: 6033533\ncpu: 116.25002597980078 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.9339964768140295,
            "unit": "ns/iter",
            "extra": "iterations: 750404321\ncpu: 0.9338891213553937 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.3943986469933947,
            "unit": "ns/iter",
            "extra": "iterations: 208349054\ncpu: 3.394204650432419 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.406757144623455,
            "unit": "ns/iter",
            "extra": "iterations: 109263519\ncpu: 6.405576677426989 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.163067007738164,
            "unit": "ns/iter",
            "extra": "iterations: 18346090\ncpu: 38.16054499896164 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 72.47726656353507,
            "unit": "ns/iter",
            "extra": "iterations: 9664289\ncpu: 72.4648270555667 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.2479239106770583,
            "unit": "ns/iter",
            "extra": "iterations: 561210198\ncpu: 1.247836285754739 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.248380483902417,
            "unit": "ns/iter",
            "extra": "iterations: 560419252\ncpu: 1.248159326261013 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.2482325791356146,
            "unit": "ns/iter",
            "extra": "iterations: 560844771\ncpu: 1.2481389881764535 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.2486430214204602,
            "unit": "ns/iter",
            "extra": "iterations: 560629336\ncpu: 1.2485396982508314 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.2486225157342608,
            "unit": "ns/iter",
            "extra": "iterations: 560595514\ncpu: 1.2485427898019115 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.234374234531542,
            "unit": "ns/iter",
            "extra": "iterations: 165462390\ncpu: 4.234230461677718 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.23548478936893,
            "unit": "ns/iter",
            "extra": "iterations: 165431237\ncpu: 4.235046976043446 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.234307828834941,
            "unit": "ns/iter",
            "extra": "iterations: 165452551\ncpu: 4.234188332339464 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.235111640694527,
            "unit": "ns/iter",
            "extra": "iterations: 165422341\ncpu: 4.23475398041913 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.235097898232532,
            "unit": "ns/iter",
            "extra": "iterations: 165499004\ncpu: 4.23486207203993 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.090966020875703,
            "unit": "ns/iter",
            "extra": "iterations: 46631456\ncpu: 15.090514587406071 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.76644643635732,
            "unit": "ns/iter",
            "extra": "iterations: 39523927\ncpu: 17.76600364128784 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.71153828886154,
            "unit": "ns/iter",
            "extra": "iterations: 39758625\ncpu: 17.709862048801753 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 27.036828286882045,
            "unit": "ns/iter",
            "extra": "iterations: 26093394\ncpu: 27.03611343162084 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 39.90200723982174,
            "unit": "ns/iter",
            "extra": "iterations: 17490486\ncpu: 39.90114677202217 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8807862+zeFresk@users.noreply.github.com",
            "name": "zeFresk",
            "username": "zeFresk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b56f9c7f9259976b71d6b4fb484542f68eabee71",
          "message": "Preapare for pyrauli release\n\n*  unique_ptr -> shared_ptr for Python compatibility\n* combine_truncators now returns a shared_ptr (avoid having user use the wrong function)",
          "timestamp": "2025-08-14T16:02:52+02:00",
          "tree_id": "89b1a479452c8c7249706f170fc850c60db77d5f",
          "url": "https://github.com/zeFresk/ProPauli/commit/b56f9c7f9259976b71d6b4fb484542f68eabee71"
        },
        "date": 1755180502272,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 64.2647285074683,
            "unit": "ns/iter",
            "extra": "iterations: 10793575\ncpu: 64.24187843230811 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 40.44259752203433,
            "unit": "ns/iter",
            "extra": "iterations: 13966357\ncpu: 40.439785335574626 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 79.65947740000274,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 79.65285899999999 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 63.54717264985723,
            "unit": "ns/iter",
            "extra": "iterations: 11027481\ncpu: 63.5399549543545 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 199.55668236084014,
            "unit": "ns/iter",
            "extra": "iterations: 3510219\ncpu: 199.509774176483 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 1023.0713313371479,
            "unit": "ns/iter",
            "extra": "iterations: 684650\ncpu: 1022.9990929672097 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 7478.41934652867,
            "unit": "ns/iter",
            "extra": "iterations: 93164\ncpu: 7478.352700613974 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 14802.947879915584,
            "unit": "ns/iter",
            "extra": "iterations: 47333\ncpu: 14796.83351995437 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 24282.11568912158,
            "unit": "ns/iter",
            "extra": "iterations: 42692\ncpu: 24276.65862456666 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 1334169.6847960262,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1332633.3609394305 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 716047110.0000002,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 715954805.7058824 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 23339.111962827803,
            "unit": "ns/iter",
            "extra": "iterations: 42398\ncpu: 23336.755507335307 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 1332035.3711467786,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 1331958.831072749 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 715013077.2941184,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 714949953.0588233 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 93528.85344289515,
            "unit": "ns/iter",
            "extra": "iterations: 9614\ncpu: 93525.09954233402 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 5817886.629999975,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5817634.670000018 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 2537634661.0000267,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 2537398043.9999995 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 89474.70763443955,
            "unit": "ns/iter",
            "extra": "iterations: 9837\ncpu: 89468.50432042278 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 5394865.738853362,
            "unit": "ns/iter",
            "extra": "iterations: 157\ncpu: 5394404.878980885 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 38046247.349998906,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 38043788.95000014 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 93166.65587805146,
            "unit": "ns/iter",
            "extra": "iterations: 9578\ncpu: 93162.29432031723 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 20915.79477175181,
            "unit": "ns/iter",
            "extra": "iterations: 38445\ncpu: 20915.61261542458 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 52234.50380021812,
            "unit": "ns/iter",
            "extra": "iterations: 14736\ncpu: 52232.19937567888 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 94272.73309720003,
            "unit": "ns/iter",
            "extra": "iterations: 9599\ncpu: 94267.04396291231 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 5554419.950000238,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5554146.460000026 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 48473.28885948115,
            "unit": "ns/iter",
            "extra": "iterations: 16624\ncpu: 48470.68762030799 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 109591.09112676147,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 109581.55788732467 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 257503.92324911573,
            "unit": "ns/iter",
            "extra": "iterations: 3127\ncpu: 257495.38759194012 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 540489.8769999704,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540441.3099999984 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 17.122897912720855,
            "unit": "ns/iter",
            "extra": "iterations: 40897505\ncpu: 17.121925237248487 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 22.742654318120294,
            "unit": "ns/iter",
            "extra": "iterations: 23418248\ncpu: 22.742459213857494 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 111.02810054928477,
            "unit": "ns/iter",
            "extra": "iterations: 5867928\ncpu: 111.02366286702981 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 2601.7694702930353,
            "unit": "ns/iter",
            "extra": "iterations: 278116\ncpu: 2601.682858950942 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 6374.655598777248,
            "unit": "ns/iter",
            "extra": "iterations: 107970\ncpu: 6374.160887283513 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 3.74004757171168,
            "unit": "ns/iter",
            "extra": "iterations: 187186453\ncpu: 3.7399808788513416 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 3.7407979899122354,
            "unit": "ns/iter",
            "extra": "iterations: 187144872\ncpu: 3.7405690656594897 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 3.740485973840034,
            "unit": "ns/iter",
            "extra": "iterations: 187118179\ncpu: 3.7402945600491657 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 3.74010195512345,
            "unit": "ns/iter",
            "extra": "iterations: 187133901\ncpu: 3.740070800960859 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 3.7414593514194427,
            "unit": "ns/iter",
            "extra": "iterations: 187170065\ncpu: 3.740919932896311 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 3.738300085684652,
            "unit": "ns/iter",
            "extra": "iterations: 187194341\ncpu: 3.7382699619108792 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 3.8600567563450623,
            "unit": "ns/iter",
            "extra": "iterations: 181310125\ncpu: 3.8599275523085383 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 3.7645903630283892,
            "unit": "ns/iter",
            "extra": "iterations: 185927639\ncpu: 3.764381668935122 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 3.74241188558003,
            "unit": "ns/iter",
            "extra": "iterations: 187037803\ncpu: 3.7422304516697076 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 3.7411067061053584,
            "unit": "ns/iter",
            "extra": "iterations: 187162318\ncpu: 3.740793689037365 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.050140579422275,
            "unit": "ns/iter",
            "extra": "iterations: 172792359\ncpu: 4.050107013123138 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.051143239543242,
            "unit": "ns/iter",
            "extra": "iterations: 172814395\ncpu: 4.051024898707041 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.051181308274879,
            "unit": "ns/iter",
            "extra": "iterations: 172823855\ncpu: 4.05090072779598 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.050947703164994,
            "unit": "ns/iter",
            "extra": "iterations: 172779997\ncpu: 4.050914713235016 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.1402328772198,
            "unit": "ns/iter",
            "extra": "iterations: 172807800\ncpu: 4.140056305328791 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 73.17597709790762,
            "unit": "ns/iter",
            "extra": "iterations: 9540088\ncpu: 73.16695370105666 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 79.66783469205397,
            "unit": "ns/iter",
            "extra": "iterations: 9056310\ncpu: 79.65784298461487 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 79.63923156395606,
            "unit": "ns/iter",
            "extra": "iterations: 8752947\ncpu: 79.63523530989052 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 89.98932768922042,
            "unit": "ns/iter",
            "extra": "iterations: 7811804\ncpu: 89.98353926954573 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 100.80071026749327,
            "unit": "ns/iter",
            "extra": "iterations: 6932881\ncpu: 100.79331867949273 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 74.78686663533853,
            "unit": "ns/iter",
            "extra": "iterations: 9529226\ncpu: 74.77854780650672 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 80.65633501230552,
            "unit": "ns/iter",
            "extra": "iterations: 8740646\ncpu: 80.64883602424912 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 80.68084339450692,
            "unit": "ns/iter",
            "extra": "iterations: 8738876\ncpu: 80.67367508132719 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 90.29559266232155,
            "unit": "ns/iter",
            "extra": "iterations: 7768454\ncpu: 90.28844143249242 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 100.8451979767231,
            "unit": "ns/iter",
            "extra": "iterations: 7020270\ncpu: 100.83460322751111 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 9779.355644397343,
            "unit": "ns/iter",
            "extra": "iterations: 71788\ncpu: 9778.445910179875 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 10493.674712729979,
            "unit": "ns/iter",
            "extra": "iterations: 66575\ncpu: 10493.282072850101 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 9948.141451149268,
            "unit": "ns/iter",
            "extra": "iterations: 69600\ncpu: 9947.48742816096 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 11020.518396804744,
            "unit": "ns/iter",
            "extra": "iterations: 63598\ncpu: 11018.960910720505 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 17477.920049844488,
            "unit": "ns/iter",
            "extra": "iterations: 40125\ncpu: 17434.54046105913 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 2510004.8345324476,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 2509922.8129495983 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 2480818.4432624094,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 2480528.950354579 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 2256370.218649562,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2256222.6109324843 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 3506812.325000226,
            "unit": "ns/iter",
            "extra": "iterations: 200\ncpu: 3506431.3400000203 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 39215591.33333593,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 39203840.555554986 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 124356.94531529023,
            "unit": "ns/iter",
            "extra": "iterations: 5614\ncpu: 124353.12486640514 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 104155.84465586767,
            "unit": "ns/iter",
            "extra": "iterations: 6727\ncpu: 104142.21792775398 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 109866.7563735028,
            "unit": "ns/iter",
            "extra": "iterations: 6629\ncpu: 109859.31860009085 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 150114.81556937398,
            "unit": "ns/iter",
            "extra": "iterations: 4663\ncpu: 150101.2331117302 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 170115.1887120789,
            "unit": "ns/iter",
            "extra": "iterations: 4022\ncpu: 170106.63053207015 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 194.2575120085248,
            "unit": "ns/iter",
            "extra": "iterations: 3624297\ncpu: 194.1979476295661 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 218.8467746095194,
            "unit": "ns/iter",
            "extra": "iterations: 3237701\ncpu: 218.79406714826246 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 227.1853543347018,
            "unit": "ns/iter",
            "extra": "iterations: 2992312\ncpu: 227.12001154959628 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 673.206404407186,
            "unit": "ns/iter",
            "extra": "iterations: 1346885\ncpu: 673.1760514075128 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 984.1078423909315,
            "unit": "ns/iter",
            "extra": "iterations: 748815\ncpu: 984.0252238536863 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 331.00574614118995,
            "unit": "ns/iter",
            "extra": "iterations: 2117421\ncpu: 330.98533357325164 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 386.36051577936456,
            "unit": "ns/iter",
            "extra": "iterations: 1749818\ncpu: 386.2672449363316 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 450.66001560385,
            "unit": "ns/iter",
            "extra": "iterations: 1536797\ncpu: 450.55581836767965 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 959.4021123711784,
            "unit": "ns/iter",
            "extra": "iterations: 635305\ncpu: 959.1616121390432 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 1368.3339337691284,
            "unit": "ns/iter",
            "extra": "iterations: 426357\ncpu: 1368.022990123306 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 1116.939125627034,
            "unit": "ns/iter",
            "extra": "iterations: 620376\ncpu: 1116.898208505809 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 1551.6935769262031,
            "unit": "ns/iter",
            "extra": "iterations: 479817\ncpu: 1551.498998576538 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 1964.6774692696065,
            "unit": "ns/iter",
            "extra": "iterations: 392282\ncpu: 1964.5619809219104 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 6787.7691820928885,
            "unit": "ns/iter",
            "extra": "iterations: 118522\ncpu: 6786.995199203564 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 14225.422113008324,
            "unit": "ns/iter",
            "extra": "iterations: 69588\ncpu: 14224.268020348394 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 21687.15180224624,
            "unit": "ns/iter",
            "extra": "iterations: 32404\ncpu: 21685.346778175553 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 30517.5168750222,
            "unit": "ns/iter",
            "extra": "iterations: 26637\ncpu: 30514.745729624803 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 65972.59165584543,
            "unit": "ns/iter",
            "extra": "iterations: 13087\ncpu: 65965.92557499676 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 243987.87137027408,
            "unit": "ns/iter",
            "extra": "iterations: 4167\ncpu: 243964.9721622318 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 356746.46773430734,
            "unit": "ns/iter",
            "extra": "iterations: 2123\ncpu: 356727.18181818846 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/16",
            "value": 5375111.862595111,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 5374320.541984824 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/16",
            "value": 6294018.765765736,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 6293253.045044935 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/16",
            "value": 22964302.626865536,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 22961583.552238837 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/16",
            "value": 69605607.05882765,
            "unit": "ns/iter",
            "extra": "iterations: 17\ncpu: 69595446.0000006 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/16",
            "value": 185484101.8333294,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 185453580.0000008 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 48.88198127722658,
            "unit": "ns/iter",
            "extra": "iterations: 14335056\ncpu: 48.87584024785219 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 54.03700649824314,
            "unit": "ns/iter",
            "extra": "iterations: 13135693\ncpu: 54.034076161797955 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 51.33372939299587,
            "unit": "ns/iter",
            "extra": "iterations: 13646092\ncpu: 51.330999160786 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 58.51159986527768,
            "unit": "ns/iter",
            "extra": "iterations: 11914147\ncpu: 58.505651978274635 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 66.04400734448507,
            "unit": "ns/iter",
            "extra": "iterations: 10596254\ncpu: 66.03989655212074 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 77.84447532276913,
            "unit": "ns/iter",
            "extra": "iterations: 9001639\ncpu: 77.83772088616159 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 87.55620708972282,
            "unit": "ns/iter",
            "extra": "iterations: 7995317\ncpu: 87.55132885913066 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 82.82018657259744,
            "unit": "ns/iter",
            "extra": "iterations: 8441433\ncpu: 82.81947330506627 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 100.2103958288917,
            "unit": "ns/iter",
            "extra": "iterations: 7118682\ncpu: 100.20349244425054 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 118.35505434575323,
            "unit": "ns/iter",
            "extra": "iterations: 5959713\ncpu: 118.35381569548733 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 290.0946813922597,
            "unit": "ns/iter",
            "extra": "iterations: 2415839\ncpu: 290.0715229781465 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 323.04069349867143,
            "unit": "ns/iter",
            "extra": "iterations: 2170617\ncpu: 323.02194583383414 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 305.4455759535399,
            "unit": "ns/iter",
            "extra": "iterations: 2293692\ncpu: 305.40415190879526 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 566.9198666915545,
            "unit": "ns/iter",
            "extra": "iterations: 1295042\ncpu: 566.9140190047796 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 730.9456828288676,
            "unit": "ns/iter",
            "extra": "iterations: 940697\ncpu: 730.9006577038147 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 9162.203505810894,
            "unit": "ns/iter",
            "extra": "iterations: 74676\ncpu: 9161.813675076166 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 9956.531569015102,
            "unit": "ns/iter",
            "extra": "iterations: 67297\ncpu: 9956.445042126692 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 9365.310809162307,
            "unit": "ns/iter",
            "extra": "iterations: 73817\ncpu: 9364.495400788466 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 10202.148233057706,
            "unit": "ns/iter",
            "extra": "iterations: 66301\ncpu: 10201.788917210826 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 18432.810406367847,
            "unit": "ns/iter",
            "extra": "iterations: 37823\ncpu: 18431.583269439176 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/16",
            "value": 2324213.347540789,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 2324137.711475375 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/16",
            "value": 2435653.749999902,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 2435529.274305558 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/16",
            "value": 2349536.75999994,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 2349310.9599999688 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/16",
            "value": 4406455.387097154,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 4405434.800000032 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/16",
            "value": 9398461.207791872,
            "unit": "ns/iter",
            "extra": "iterations: 77\ncpu: 9397859.662337614 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 50.766194940293666,
            "unit": "ns/iter",
            "extra": "iterations: 13813234\ncpu: 50.76161114768586 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 59.42887277065274,
            "unit": "ns/iter",
            "extra": "iterations: 11791061\ncpu: 59.42617123259901 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 60.43794457178675,
            "unit": "ns/iter",
            "extra": "iterations: 11543833\ncpu: 60.4369375405904 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 139.04801203043647,
            "unit": "ns/iter",
            "extra": "iterations: 5031239\ncpu: 139.03921797393738 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 215.73135982303796,
            "unit": "ns/iter",
            "extra": "iterations: 3284773\ncpu: 215.72505253787648 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 84.31200407482746,
            "unit": "ns/iter",
            "extra": "iterations: 8261453\ncpu: 84.30578156166895 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 102.65196651648203,
            "unit": "ns/iter",
            "extra": "iterations: 6766076\ncpu: 102.6473846879646 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 104.25411173360816,
            "unit": "ns/iter",
            "extra": "iterations: 6700580\ncpu: 104.25031340570658 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 257.9595971223738,
            "unit": "ns/iter",
            "extra": "iterations: 2719039\ncpu: 257.9318770344949 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 417.51044853282013,
            "unit": "ns/iter",
            "extra": "iterations: 1682820\ncpu: 417.4883386220634 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 306.1452851895227,
            "unit": "ns/iter",
            "extra": "iterations: 2261724\ncpu: 306.1080494348532 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 376.56000152694594,
            "unit": "ns/iter",
            "extra": "iterations: 1859961\ncpu: 376.54354150435887 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 403.33119839333,
            "unit": "ns/iter",
            "extra": "iterations: 1736817\ncpu: 403.315820837766 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 1146.388766856593,
            "unit": "ns/iter",
            "extra": "iterations: 611405\ncpu: 1146.336933783676 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 1929.6376163597658,
            "unit": "ns/iter",
            "extra": "iterations: 362991\ncpu: 1929.5479502246947 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 9257.936274639413,
            "unit": "ns/iter",
            "extra": "iterations: 75386\ncpu: 9257.857427108303 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 10411.312656818181,
            "unit": "ns/iter",
            "extra": "iterations: 67355\ncpu: 10410.1962140895 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 10806.432092664518,
            "unit": "ns/iter",
            "extra": "iterations: 64750\ncpu: 10805.930594594347 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 19751.958364080023,
            "unit": "ns/iter",
            "extra": "iterations: 35234\ncpu: 19750.770534143565 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 37453.56578046691,
            "unit": "ns/iter",
            "extra": "iterations: 18995\ncpu: 37452.64090550109 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/16",
            "value": 2306982.6052630865,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 2306739.8947367896 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/16",
            "value": 2592648.3962962264,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 2592522.337037011 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/16",
            "value": 2707668.0386099485,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 2707483.579150548 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/16",
            "value": 6953475.9800001215,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6953335.139999978 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/16",
            "value": 14585356.479166478,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 14584449.500000337 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.5755618449499496,
            "unit": "ns/iter",
            "extra": "iterations: 153027272\ncpu: 4.575488302503305 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.582464579315074,
            "unit": "ns/iter",
            "extra": "iterations: 149374369\ncpu: 4.582055780935144 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.571950209129603,
            "unit": "ns/iter",
            "extra": "iterations: 152784476\ncpu: 4.57185049350157 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.577459439145614,
            "unit": "ns/iter",
            "extra": "iterations: 152548316\ncpu: 4.577166423784218 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.5756269014436555,
            "unit": "ns/iter",
            "extra": "iterations: 153062935\ncpu: 4.575240478695937 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 7.798618914777317,
            "unit": "ns/iter",
            "extra": "iterations: 120312054\ncpu: 7.7985557789580024 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 7.79491661218799,
            "unit": "ns/iter",
            "extra": "iterations: 120287183\ncpu: 7.794315193165655 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 8.625075771567612,
            "unit": "ns/iter",
            "extra": "iterations: 120374968\ncpu: 8.624708577284853 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 9.01747746788745,
            "unit": "ns/iter",
            "extra": "iterations: 120250600\ncpu: 9.01661498570484 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 9.034406231499142,
            "unit": "ns/iter",
            "extra": "iterations: 120363458\ncpu: 9.03382120344211 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 59.79357202910543,
            "unit": "ns/iter",
            "extra": "iterations: 10934337\ncpu: 59.79006756422325 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 64.1786264395571,
            "unit": "ns/iter",
            "extra": "iterations: 10880293\ncpu: 64.17630012353374 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 62.242429913705585,
            "unit": "ns/iter",
            "extra": "iterations: 11220810\ncpu: 62.23610550396866 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 70.70132291015534,
            "unit": "ns/iter",
            "extra": "iterations: 9643890\ncpu: 70.69422847004451 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 80.96858106090157,
            "unit": "ns/iter",
            "extra": "iterations: 8687117\ncpu: 80.95870148865201 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.6238054518571521,
            "unit": "ns/iter",
            "extra": "iterations: 1121197277\ncpu: 0.6237792798349883 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.0655319783095814,
            "unit": "ns/iter",
            "extra": "iterations: 657033621\ncpu: 1.0654916896559017 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7221213362821521,
            "unit": "ns/iter",
            "extra": "iterations: 968814109\ncpu: 0.7220865504550771 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.8749544778315677,
            "unit": "ns/iter",
            "extra": "iterations: 807922301\ncpu: 0.8749466713879113 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.597520910378476,
            "unit": "ns/iter",
            "extra": "iterations: 106075794\ncpu: 6.59703340990323 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.9310109042348941,
            "unit": "ns/iter",
            "extra": "iterations: 752898765\ncpu: 0.9309746071903805 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.6388902100077948,
            "unit": "ns/iter",
            "extra": "iterations: 1095451904\ncpu: 0.6388556151525938 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.6280162314282,
            "unit": "ns/iter",
            "extra": "iterations: 1116724406\ncpu: 0.6280014014487473 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 17.113112091641472,
            "unit": "ns/iter",
            "extra": "iterations: 43994209\ncpu: 17.111564819815296 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 26.764657097757443,
            "unit": "ns/iter",
            "extra": "iterations: 25866410\ncpu: 26.762455439313243 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 117.63870787578296,
            "unit": "ns/iter",
            "extra": "iterations: 5958746\ncpu: 117.55499613509234 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 2716.358598048236,
            "unit": "ns/iter",
            "extra": "iterations: 256471\ncpu: 2716.3328095574184 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 6661.174249607324,
            "unit": "ns/iter",
            "extra": "iterations: 109676\ncpu: 6660.811991684624 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.9363297107983954,
            "unit": "ns/iter",
            "extra": "iterations: 747517792\ncpu: 0.9362932635053623 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.9367281773196406,
            "unit": "ns/iter",
            "extra": "iterations: 747628328\ncpu: 0.9366940748130949 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 0.9396714637397362,
            "unit": "ns/iter",
            "extra": "iterations: 747721788\ncpu: 0.939652955518805 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.9367990324406918,
            "unit": "ns/iter",
            "extra": "iterations: 747313828\ncpu: 0.9366878769972355 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.9410271186619973,
            "unit": "ns/iter",
            "extra": "iterations: 700701493\ncpu: 0.9391756868998318 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.2891976733721173,
            "unit": "ns/iter",
            "extra": "iterations: 212054697\ncpu: 3.2890567050254806 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.190251068517119,
            "unit": "ns/iter",
            "extra": "iterations: 590044828\ncpu: 1.1901757352578806 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.0157052139502405,
            "unit": "ns/iter",
            "extra": "iterations: 690636182\ncpu: 1.0156362268318095 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.9475419929872059,
            "unit": "ns/iter",
            "extra": "iterations: 738329708\ncpu: 0.9475340195846428 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.9440424246523207,
            "unit": "ns/iter",
            "extra": "iterations: 741677829\ncpu: 0.9439623737222698 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 24.895272651468012,
            "unit": "ns/iter",
            "extra": "iterations: 28139918\ncpu: 24.892359032461105 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 28.866306668060755,
            "unit": "ns/iter",
            "extra": "iterations: 22640643\ncpu: 28.864938729876037 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 30.164300059248607,
            "unit": "ns/iter",
            "extra": "iterations: 23619042\ncpu: 30.16241687533422 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.592384303718056,
            "unit": "ns/iter",
            "extra": "iterations: 19247485\ncpu: 36.558535309937255 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 41.66367115436966,
            "unit": "ns/iter",
            "extra": "iterations: 16621197\ncpu: 41.662787403337106 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 15.521317824517315,
            "unit": "ns/iter",
            "extra": "iterations: 45099419\ncpu: 15.520644822497774 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 7.545043065985463,
            "unit": "ns/iter",
            "extra": "iterations: 92693457\ncpu: 7.544979372168426 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 7.549086758139352,
            "unit": "ns/iter",
            "extra": "iterations: 92706000\ncpu: 7.548532910491 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 7.545132382215288,
            "unit": "ns/iter",
            "extra": "iterations: 92880074\ncpu: 7.545006843986757 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 7.550272923179096,
            "unit": "ns/iter",
            "extra": "iterations: 92901600\ncpu: 7.550083303193994 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.2432858258551662,
            "unit": "ns/iter",
            "extra": "iterations: 563158427\ncpu: 1.2432000755623573 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 5.596510672905298,
            "unit": "ns/iter",
            "extra": "iterations: 124955382\ncpu: 5.596343717311845 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.146505370041346,
            "unit": "ns/iter",
            "extra": "iterations: 85951375\ncpu: 8.14588955674081 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 58.20053102491991,
            "unit": "ns/iter",
            "extra": "iterations: 12059321\ncpu: 58.19889204375653 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 115.52402023589343,
            "unit": "ns/iter",
            "extra": "iterations: 6059724\ncpu: 115.52170874449233 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.9373749979926823,
            "unit": "ns/iter",
            "extra": "iterations: 750447449\ncpu: 0.9373383678461921 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.386567609377895,
            "unit": "ns/iter",
            "extra": "iterations: 207648458\ncpu: 3.3865384109906578 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.463871841495685,
            "unit": "ns/iter",
            "extra": "iterations: 108421427\ncpu: 6.4632541314921115 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.95354146484424,
            "unit": "ns/iter",
            "extra": "iterations: 17948844\ncpu: 38.95273662192383 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 73.93753537404471,
            "unit": "ns/iter",
            "extra": "iterations: 9491420\ncpu: 73.93008780561885 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.24738067935846,
            "unit": "ns/iter",
            "extra": "iterations: 561379629\ncpu: 1.2473364686341124 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.2473538275661633,
            "unit": "ns/iter",
            "extra": "iterations: 561191603\ncpu: 1.2472458412746619 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.2475531484092366,
            "unit": "ns/iter",
            "extra": "iterations: 560957806\ncpu: 1.2475425433334584 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.2476242514469786,
            "unit": "ns/iter",
            "extra": "iterations: 561015600\ncpu: 1.2475177463871088 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.2475491972032995,
            "unit": "ns/iter",
            "extra": "iterations: 560869280\ncpu: 1.2474950330672634 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.231575399817158,
            "unit": "ns/iter",
            "extra": "iterations: 165614625\ncpu: 4.2313539036785555 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.23018127549393,
            "unit": "ns/iter",
            "extra": "iterations: 165640150\ncpu: 4.229958032517962 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.230263151539455,
            "unit": "ns/iter",
            "extra": "iterations: 165630192\ncpu: 4.230186082257255 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.231081248627517,
            "unit": "ns/iter",
            "extra": "iterations: 165617986\ncpu: 4.230735350205223 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.22999123701208,
            "unit": "ns/iter",
            "extra": "iterations: 165612462\ncpu: 4.229954343653081 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.337703074573508,
            "unit": "ns/iter",
            "extra": "iterations: 45758621\ncpu: 15.33658241143283 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.427529114261958,
            "unit": "ns/iter",
            "extra": "iterations: 39964090\ncpu: 17.427072204071077 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.38325215553616,
            "unit": "ns/iter",
            "extra": "iterations: 40480075\ncpu: 17.38177898632824 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 26.995286828421126,
            "unit": "ns/iter",
            "extra": "iterations: 26021968\ncpu: 26.99468306932023 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 40.130133916202674,
            "unit": "ns/iter",
            "extra": "iterations: 17945998\ncpu: 40.12912561340914 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8807862+zeFresk@users.noreply.github.com",
            "name": "zeFresk",
            "username": "zeFresk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3884502051a44c4064b723e9d68feabe5a865de6",
          "message": "Safer API\n\nAdd safeguards around Circuit, Observable and NoiseModel.\n- Improved coverage and fixed bugs",
          "timestamp": "2025-08-14T21:43:26+02:00",
          "tree_id": "e9d04ec2aa9a0c84fd004090edc5cc28ea8016c9",
          "url": "https://github.com/zeFresk/ProPauli/commit/3884502051a44c4064b723e9d68feabe5a865de6"
        },
        "date": 1755200914968,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 62.138452177531384,
            "unit": "ns/iter",
            "extra": "iterations: 11315445\ncpu: 62.13572316422377 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 41.41942877749295,
            "unit": "ns/iter",
            "extra": "iterations: 13687871\ncpu: 41.4165195595429 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 81.25943039999584,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 81.2513534 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 68.5225558678298,
            "unit": "ns/iter",
            "extra": "iterations: 10649956\ncpu: 68.51913669878076 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 196.78976698313582,
            "unit": "ns/iter",
            "extra": "iterations: 3560944\ncpu: 196.71496968219665 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 980.8757584565498,
            "unit": "ns/iter",
            "extra": "iterations: 712137\ncpu: 980.4985824356835 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 7039.553284890821,
            "unit": "ns/iter",
            "extra": "iterations: 99775\ncpu: 7037.360922074675 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 13878.80828871557,
            "unit": "ns/iter",
            "extra": "iterations: 50430\ncpu: 13874.978941106481 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 610.0171830997949,
            "unit": "ns/iter",
            "extra": "iterations: 1152295\ncpu: 609.9847955601646 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 1280.667754957157,
            "unit": "ns/iter",
            "extra": "iterations: 546729\ncpu: 1280.593943251592 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 2709.9309874341207,
            "unit": "ns/iter",
            "extra": "iterations: 258721\ncpu: 2709.851082826675 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 612.1712167052883,
            "unit": "ns/iter",
            "extra": "iterations: 1041493\ncpu: 612.0119453515282 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 1282.8398599698176,
            "unit": "ns/iter",
            "extra": "iterations: 546453\ncpu: 1282.5659224123583 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 2656.6813620609964,
            "unit": "ns/iter",
            "extra": "iterations: 259401\ncpu: 2656.5385831203434 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 12176.0373708652,
            "unit": "ns/iter",
            "extra": "iterations: 57692\ncpu: 12175.040560216325 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 504764.9913357145,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 504764.4108303258 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 286194031.5000311,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 286184615.9999999 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 10910.188752635062,
            "unit": "ns/iter",
            "extra": "iterations: 64015\ncpu: 10909.715800984126 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 122979.57667337044,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 122973.60107454675 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 4791753.378378155,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 4791364.081081101 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 12627.743507668634,
            "unit": "ns/iter",
            "extra": "iterations: 55296\ncpu: 12627.37471064813 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 388.87513394979965,
            "unit": "ns/iter",
            "extra": "iterations: 1792649\ncpu: 388.85742830861034 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 412.12301315839994,
            "unit": "ns/iter",
            "extra": "iterations: 1694209\ncpu: 412.1057136398162 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 11316.24961250293,
            "unit": "ns/iter",
            "extra": "iterations: 61936\ncpu: 11315.888982175125 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 296295.07212711306,
            "unit": "ns/iter",
            "extra": "iterations: 2454\ncpu: 296274.7599837 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 420.89307779699436,
            "unit": "ns/iter",
            "extra": "iterations: 1670682\ncpu: 420.8641973756825 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 461.09133504581166,
            "unit": "ns/iter",
            "extra": "iterations: 1517873\ncpu: 461.06031400519 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 728.3848415471227,
            "unit": "ns/iter",
            "extra": "iterations: 960507\ncpu: 728.3144245695252 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 1532.0879803955993,
            "unit": "ns/iter",
            "extra": "iterations: 457045\ncpu: 1532.079272281723 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 16.189632725368167,
            "unit": "ns/iter",
            "extra": "iterations: 43007735\ncpu: 16.188757068931917 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 25.959119715943945,
            "unit": "ns/iter",
            "extra": "iterations: 28577639\ncpu: 25.955988526553934 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 113.82893439882595,
            "unit": "ns/iter",
            "extra": "iterations: 6018124\ncpu: 113.81951186117098 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 2645.0030537767598,
            "unit": "ns/iter",
            "extra": "iterations: 263608\ncpu: 2644.7618281691075 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 6455.617988166196,
            "unit": "ns/iter",
            "extra": "iterations: 105625\ncpu: 6455.4209420118195 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 3.7402880618205705,
            "unit": "ns/iter",
            "extra": "iterations: 187118237\ncpu: 3.739961150873815 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 3.7397148408849015,
            "unit": "ns/iter",
            "extra": "iterations: 187177464\ncpu: 3.7394731985470298 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 3.7397145895621047,
            "unit": "ns/iter",
            "extra": "iterations: 187164213\ncpu: 3.739570400672718 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 3.7405148063766545,
            "unit": "ns/iter",
            "extra": "iterations: 187196943\ncpu: 3.740138486128986 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 3.7403941467522057,
            "unit": "ns/iter",
            "extra": "iterations: 187156331\ncpu: 3.740177664628393 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 3.7400770273131823,
            "unit": "ns/iter",
            "extra": "iterations: 187176722\ncpu: 3.7398473940578816 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 3.7401961343323302,
            "unit": "ns/iter",
            "extra": "iterations: 187130726\ncpu: 3.7399813807167037 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 3.7400837370518922,
            "unit": "ns/iter",
            "extra": "iterations: 187095911\ncpu: 3.74004309479536 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 3.74003926593791,
            "unit": "ns/iter",
            "extra": "iterations: 187205003\ncpu: 3.7398942804963142 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 3.73949132610695,
            "unit": "ns/iter",
            "extra": "iterations: 187193291\ncpu: 3.7393525925028825 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.049243294128425,
            "unit": "ns/iter",
            "extra": "iterations: 172693321\ncpu: 4.0490086006279515 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.049116136703147,
            "unit": "ns/iter",
            "extra": "iterations: 172861743\ncpu: 4.048976261913522 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.0502080983750135,
            "unit": "ns/iter",
            "extra": "iterations: 172865838\ncpu: 4.050077303301549 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.0491912787529145,
            "unit": "ns/iter",
            "extra": "iterations: 172843301\ncpu: 4.04885945218088 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.051065980437837,
            "unit": "ns/iter",
            "extra": "iterations: 172854157\ncpu: 4.050857110714442 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 73.95794941207177,
            "unit": "ns/iter",
            "extra": "iterations: 9444862\ncpu: 73.95207531883459 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 79.44623354210734,
            "unit": "ns/iter",
            "extra": "iterations: 8826237\ncpu: 79.44475941445894 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 80.1881109870958,
            "unit": "ns/iter",
            "extra": "iterations: 8694128\ncpu: 80.18213891030804 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 89.97057480412391,
            "unit": "ns/iter",
            "extra": "iterations: 7760696\ncpu: 89.96588153949035 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 100.67112536292895,
            "unit": "ns/iter",
            "extra": "iterations: 7252718\ncpu: 100.66528658635322 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 76.11433028163353,
            "unit": "ns/iter",
            "extra": "iterations: 9229051\ncpu: 76.10943768758011 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 83.49192869563053,
            "unit": "ns/iter",
            "extra": "iterations: 8346978\ncpu: 83.4902860652086 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 82.74900942937376,
            "unit": "ns/iter",
            "extra": "iterations: 8519332\ncpu: 82.74157516105734 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 97.67503907479654,
            "unit": "ns/iter",
            "extra": "iterations: 7397991\ncpu: 97.67101446865905 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 99.36058670012902,
            "unit": "ns/iter",
            "extra": "iterations: 6658052\ncpu: 99.35484312828997 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 9860.655246975424,
            "unit": "ns/iter",
            "extra": "iterations: 71222\ncpu: 9860.480301030648 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 10431.309140023775,
            "unit": "ns/iter",
            "extra": "iterations: 67746\ncpu: 10430.540799456689 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 10397.68517577358,
            "unit": "ns/iter",
            "extra": "iterations: 68867\ncpu: 10397.239839110194 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 11249.362030763501,
            "unit": "ns/iter",
            "extra": "iterations: 62282\ncpu: 11249.070517966706 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 17380.660228682973,
            "unit": "ns/iter",
            "extra": "iterations: 40230\ncpu: 17379.891126025246 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 2507133.58064504,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 2506986.254480251 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 2500426.1642854833,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 2500261.292857177 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 2331384.305647743,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 2331220.318936903 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 3348531.8564594327,
            "unit": "ns/iter",
            "extra": "iterations: 209\ncpu: 3348172.5837320797 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 37503390.31578757,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 37496914.73684218 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 124109.95293278186,
            "unit": "ns/iter",
            "extra": "iterations: 5609\ncpu: 124091.95988589709 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 104352.0753262038,
            "unit": "ns/iter",
            "extra": "iterations: 6744\ncpu: 104338.75726571781 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 106182.99212480496,
            "unit": "ns/iter",
            "extra": "iterations: 6603\ncpu: 106151.22247463274 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 153503.1126361659,
            "unit": "ns/iter",
            "extra": "iterations: 4590\ncpu: 153497.91503267956 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 174179.93790685918,
            "unit": "ns/iter",
            "extra": "iterations: 3994\ncpu: 174164.81246870378 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 191.9033741944193,
            "unit": "ns/iter",
            "extra": "iterations: 3646500\ncpu: 191.89650541615208 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 211.63170143186213,
            "unit": "ns/iter",
            "extra": "iterations: 3277751\ncpu: 211.62255613681708 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 251.72162262220922,
            "unit": "ns/iter",
            "extra": "iterations: 2828089\ncpu: 251.72096564146403 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 416.11163348056044,
            "unit": "ns/iter",
            "extra": "iterations: 1663999\ncpu: 416.09048623226516 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 598.6046883789828,
            "unit": "ns/iter",
            "extra": "iterations: 1315380\ncpu: 598.5854498319812 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 324.9758866078184,
            "unit": "ns/iter",
            "extra": "iterations: 2152953\ncpu: 324.9623656438414 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 377.3934989068521,
            "unit": "ns/iter",
            "extra": "iterations: 1796221\ncpu: 377.3759297992864 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 438.3161296180027,
            "unit": "ns/iter",
            "extra": "iterations: 1630113\ncpu: 438.3013355515843 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 935.4505605802998,
            "unit": "ns/iter",
            "extra": "iterations: 720771\ncpu: 935.430064472615 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 1678.9115961416455,
            "unit": "ns/iter",
            "extra": "iterations: 455229\ncpu: 1678.847127489702 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 1113.7076080223405,
            "unit": "ns/iter",
            "extra": "iterations: 629730\ncpu: 1113.6881091896596 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 1437.9974312725187,
            "unit": "ns/iter",
            "extra": "iterations: 445746\ncpu: 1437.8984937610205 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 1788.4526368043112,
            "unit": "ns/iter",
            "extra": "iterations: 370657\ncpu: 1788.3531647857383 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 5377.743499999497,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5377.580499999936 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 7987.379348740031,
            "unit": "ns/iter",
            "extra": "iterations: 73642\ncpu: 7986.792822030939 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 21608.602787026648,
            "unit": "ns/iter",
            "extra": "iterations: 32436\ncpu: 21607.260913799517 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 33084.01878145273,
            "unit": "ns/iter",
            "extra": "iterations: 22256\ncpu: 33081.8731578005 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 75789.43119999622,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 75787.98539999951 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 151776.22835249206,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 151772.44878671793 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 447844.34823703434,
            "unit": "ns/iter",
            "extra": "iterations: 2751\ncpu: 447824.888040714 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/16",
            "value": 5335967.801526388,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 5335628.587786257 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/16",
            "value": 6100961.417390586,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 6100695.678260778 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/16",
            "value": 11675285.660714963,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 11674845.625000177 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/16",
            "value": 103465568.57142071,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 103456253.00000043 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/16",
            "value": 316488067.5999939,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 316448280.199998 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 50.1509413381639,
            "unit": "ns/iter",
            "extra": "iterations: 13971706\ncpu: 50.147534739136354 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 55.07943101823659,
            "unit": "ns/iter",
            "extra": "iterations: 12702481\ncpu: 55.07739102306091 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 53.21894209476772,
            "unit": "ns/iter",
            "extra": "iterations: 13163750\ncpu: 53.21712855379319 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 60.07380010540754,
            "unit": "ns/iter",
            "extra": "iterations: 11613791\ncpu: 60.068352357985496 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 67.9274788883802,
            "unit": "ns/iter",
            "extra": "iterations: 10336135\ncpu: 67.92322613820367 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 78.65842471148325,
            "unit": "ns/iter",
            "extra": "iterations: 8913783\ncpu: 78.65594203942304 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 89.35772406310821,
            "unit": "ns/iter",
            "extra": "iterations: 7831131\ncpu: 89.35400391080317 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 84.60442517641303,
            "unit": "ns/iter",
            "extra": "iterations: 8276687\ncpu: 84.59990561440796 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 99.09881768544585,
            "unit": "ns/iter",
            "extra": "iterations: 6914319\ncpu: 99.09125092434915 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 116.67024197837435,
            "unit": "ns/iter",
            "extra": "iterations: 5958921\ncpu: 116.65842222106947 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 304.22783197874224,
            "unit": "ns/iter",
            "extra": "iterations: 2264309\ncpu: 304.2126529550462 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 325.16920194251935,
            "unit": "ns/iter",
            "extra": "iterations: 2155584\ncpu: 325.1465259530588 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 326.32584766260794,
            "unit": "ns/iter",
            "extra": "iterations: 2276171\ncpu: 326.3041107192732 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 543.9998625247456,
            "unit": "ns/iter",
            "extra": "iterations: 1294778\ncpu: 543.9650256646363 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 793.3738450611868,
            "unit": "ns/iter",
            "extra": "iterations: 887060\ncpu: 793.3566658399636 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 9583.525577226688,
            "unit": "ns/iter",
            "extra": "iterations: 74754\ncpu: 9582.82006314047 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 9578.800061419899,
            "unit": "ns/iter",
            "extra": "iterations: 71637\ncpu: 9578.33457570807 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 9135.640649149984,
            "unit": "ns/iter",
            "extra": "iterations: 77640\ncpu: 9135.170710973798 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 10305.372334278669,
            "unit": "ns/iter",
            "extra": "iterations: 70947\ncpu: 10304.771209494516 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 18570.742873998573,
            "unit": "ns/iter",
            "extra": "iterations: 37293\ncpu: 18569.490521009346 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/16",
            "value": 2198258.8466453333,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2197996.753993695 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/16",
            "value": 2339867.365771667,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 2339810.5134227625 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/16",
            "value": 2012921.1309524854,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2012723.7529762576 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/16",
            "value": 4157847.8690470755,
            "unit": "ns/iter",
            "extra": "iterations: 168\ncpu: 4157121.5833334303 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/16",
            "value": 38846875.99999855,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 38843034.99999931 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 51.43357956736378,
            "unit": "ns/iter",
            "extra": "iterations: 13624166\ncpu: 51.431830763072895 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 60.70426190526955,
            "unit": "ns/iter",
            "extra": "iterations: 11541364\ncpu: 60.70169158515345 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 124.42866140449165,
            "unit": "ns/iter",
            "extra": "iterations: 5622139\ncpu: 124.42664295564381 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 195.172624669904,
            "unit": "ns/iter",
            "extra": "iterations: 3587975\ncpu: 195.1272433615067 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 272.6428475838208,
            "unit": "ns/iter",
            "extra": "iterations: 2510718\ncpu: 272.58074104698323 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 84.27587348103519,
            "unit": "ns/iter",
            "extra": "iterations: 8312430\ncpu: 84.25815904615042 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 103.98491046056668,
            "unit": "ns/iter",
            "extra": "iterations: 6738708\ncpu: 103.96129302530967 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 169.79411074485583,
            "unit": "ns/iter",
            "extra": "iterations: 4137637\ncpu: 169.78543284488003 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 314.975533683737,
            "unit": "ns/iter",
            "extra": "iterations: 2222852\ncpu: 314.91543926452096 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 478.88144730054887,
            "unit": "ns/iter",
            "extra": "iterations: 1495529\ncpu: 478.7955278700815 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 311.7350387124791,
            "unit": "ns/iter",
            "extra": "iterations: 2322377\ncpu: 311.6856354502287 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 407.9337243250018,
            "unit": "ns/iter",
            "extra": "iterations: 1736610\ncpu: 407.88414669960747 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 484.1381264192163,
            "unit": "ns/iter",
            "extra": "iterations: 1445777\ncpu: 484.1369146140742 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 1262.6902387988325,
            "unit": "ns/iter",
            "extra": "iterations: 556745\ncpu: 1262.619429002497 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 2058.6476885137595,
            "unit": "ns/iter",
            "extra": "iterations: 336580\ncpu: 2058.5085447738743 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 9284.70406240859,
            "unit": "ns/iter",
            "extra": "iterations: 75374\ncpu: 9284.190768699786 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 10512.616895046027,
            "unit": "ns/iter",
            "extra": "iterations: 66410\ncpu: 10511.663258545395 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 10968.115283555897,
            "unit": "ns/iter",
            "extra": "iterations: 63938\ncpu: 10967.760924645889 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 19760.90472679894,
            "unit": "ns/iter",
            "extra": "iterations: 35267\ncpu: 19759.739473161582 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 36996.82694658703,
            "unit": "ns/iter",
            "extra": "iterations: 18815\ncpu: 36994.471857560246 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/16",
            "value": 2322848.582278389,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2322686.1234177127 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/16",
            "value": 2517572.684587647,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 2517502.8064515735 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/16",
            "value": 2370387.0440678685,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 2370077.586440653 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/16",
            "value": 7047395.156863492,
            "unit": "ns/iter",
            "extra": "iterations: 102\ncpu: 7047384.617647247 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/16",
            "value": 43688832.12499952,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 43683595.062500305 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.398481176104588,
            "unit": "ns/iter",
            "extra": "iterations: 160290736\ncpu: 4.398077840256497 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.3686429390318,
            "unit": "ns/iter",
            "extra": "iterations: 160040643\ncpu: 4.368329674856362 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.388916685192321,
            "unit": "ns/iter",
            "extra": "iterations: 159765452\ncpu: 4.388768999946194 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.372384859605626,
            "unit": "ns/iter",
            "extra": "iterations: 160178733\ncpu: 4.3713055153208344 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.372192381696333,
            "unit": "ns/iter",
            "extra": "iterations: 160282961\ncpu: 4.371190990163959 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 8.15071184973431,
            "unit": "ns/iter",
            "extra": "iterations: 120550793\ncpu: 8.149491326863396 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 8.104918945778948,
            "unit": "ns/iter",
            "extra": "iterations: 120791797\ncpu: 8.104003709788339 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 8.299952046655296,
            "unit": "ns/iter",
            "extra": "iterations: 120779896\ncpu: 8.298897599646935 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 8.322713546258914,
            "unit": "ns/iter",
            "extra": "iterations: 120437851\ncpu: 8.322103073725529 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 8.331362651471334,
            "unit": "ns/iter",
            "extra": "iterations: 120733000\ncpu: 8.330587295934174 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 59.79880308146093,
            "unit": "ns/iter",
            "extra": "iterations: 11699543\ncpu: 59.79572338851114 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 65.09660459264207,
            "unit": "ns/iter",
            "extra": "iterations: 10756942\ncpu: 65.08780915617231 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 63.54439711846348,
            "unit": "ns/iter",
            "extra": "iterations: 11014386\ncpu: 63.53782317053293 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 71.2142630180525,
            "unit": "ns/iter",
            "extra": "iterations: 9822269\ncpu: 71.20522946378182 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 80.71345472484438,
            "unit": "ns/iter",
            "extra": "iterations: 8647007\ncpu: 80.7052136074345 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.6235002809484733,
            "unit": "ns/iter",
            "extra": "iterations: 1122515746\ncpu: 0.6234394238956308 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.0660151874813235,
            "unit": "ns/iter",
            "extra": "iterations: 656415753\ncpu: 1.0659117697926368 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7291417992181146,
            "unit": "ns/iter",
            "extra": "iterations: 972683896\ncpu: 0.7291008362700361 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.8619129722365376,
            "unit": "ns/iter",
            "extra": "iterations: 792472463\ncpu: 0.861836095117402 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.61277467222911,
            "unit": "ns/iter",
            "extra": "iterations: 106023323\ncpu: 6.612046172142763 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.8466529172067878,
            "unit": "ns/iter",
            "extra": "iterations: 826283609\ncpu: 0.8466141799019975 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.8216328772100344,
            "unit": "ns/iter",
            "extra": "iterations: 852424133\ncpu: 0.8215915515381338 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.6765879175643782,
            "unit": "ns/iter",
            "extra": "iterations: 1036529107\ncpu: 0.6765871978547449 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 17.426455048829855,
            "unit": "ns/iter",
            "extra": "iterations: 43135116\ncpu: 17.424805742958725 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 25.200867310880344,
            "unit": "ns/iter",
            "extra": "iterations: 26795928\ncpu: 25.199175673259024 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 117.2367229938602,
            "unit": "ns/iter",
            "extra": "iterations: 6325127\ncpu: 117.22790103661188 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 2696.6191900587155,
            "unit": "ns/iter",
            "extra": "iterations: 264439\ncpu: 2696.489496632486 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 6497.48126115439,
            "unit": "ns/iter",
            "extra": "iterations: 115989\ncpu: 6497.265447585404 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.9363544501364968,
            "unit": "ns/iter",
            "extra": "iterations: 747494524\ncpu: 0.9362981567474453 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.93660016970041,
            "unit": "ns/iter",
            "extra": "iterations: 747622427\ncpu: 0.9365824522008288 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 0.9369586129756752,
            "unit": "ns/iter",
            "extra": "iterations: 747606346\ncpu: 0.9368917903754461 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.9377958318590148,
            "unit": "ns/iter",
            "extra": "iterations: 747431119\ncpu: 0.9377079602167406 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.9368732953511236,
            "unit": "ns/iter",
            "extra": "iterations: 747117583\ncpu: 0.9367720716592924 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.254076364414685,
            "unit": "ns/iter",
            "extra": "iterations: 215543536\ncpu: 3.25395045481669 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.1902397272226537,
            "unit": "ns/iter",
            "extra": "iterations: 589194537\ncpu: 1.1901164148098498 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.0117167840208696,
            "unit": "ns/iter",
            "extra": "iterations: 692492495\ncpu: 1.0116505277071532 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.9467517569640397,
            "unit": "ns/iter",
            "extra": "iterations: 738723003\ncpu: 0.9466661633115634 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.9435398424164549,
            "unit": "ns/iter",
            "extra": "iterations: 736430658\ncpu: 0.9434354605589759 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 24.819382288575575,
            "unit": "ns/iter",
            "extra": "iterations: 28182286\ncpu: 24.81699539916636 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 28.788597634641782,
            "unit": "ns/iter",
            "extra": "iterations: 22629217\ncpu: 28.78630091354959 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 30.186937862312607,
            "unit": "ns/iter",
            "extra": "iterations: 23803332\ncpu: 30.168829599150186 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.79391555695731,
            "unit": "ns/iter",
            "extra": "iterations: 19320881\ncpu: 36.79007442776539 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 42.16460383886607,
            "unit": "ns/iter",
            "extra": "iterations: 15652381\ncpu: 42.07844212327679 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 16.03014855031717,
            "unit": "ns/iter",
            "extra": "iterations: 43652414\ncpu: 16.029876194246555 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 7.909826982535022,
            "unit": "ns/iter",
            "extra": "iterations: 89042745\ncpu: 7.909363519734211 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 7.867190962570136,
            "unit": "ns/iter",
            "extra": "iterations: 89018942\ncpu: 7.866812020749501 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 7.874576333663702,
            "unit": "ns/iter",
            "extra": "iterations: 89036753\ncpu: 7.87416289765197 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 7.871483114469355,
            "unit": "ns/iter",
            "extra": "iterations: 89081944\ncpu: 7.871003746842343 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.2437239640760787,
            "unit": "ns/iter",
            "extra": "iterations: 563449850\ncpu: 1.2436643083674388 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 4.509644911765447,
            "unit": "ns/iter",
            "extra": "iterations: 155223504\ncpu: 4.509281596941673 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.12177306535041,
            "unit": "ns/iter",
            "extra": "iterations: 86213630\ncpu: 8.121763217718568 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 57.676030701104175,
            "unit": "ns/iter",
            "extra": "iterations: 12132591\ncpu: 57.67289864135433 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 115.10136141701233,
            "unit": "ns/iter",
            "extra": "iterations: 6085718\ncpu: 115.09180675147692 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.9334852616153106,
            "unit": "ns/iter",
            "extra": "iterations: 750930188\ncpu: 0.9334444255955108 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.3677668787878674,
            "unit": "ns/iter",
            "extra": "iterations: 207984711\ncpu: 3.3675682199543044 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.401309662983736,
            "unit": "ns/iter",
            "extra": "iterations: 109354698\ncpu: 6.400997367300935 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.125843612032035,
            "unit": "ns/iter",
            "extra": "iterations: 18377079\ncpu: 38.123009810211 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 72.9510929264334,
            "unit": "ns/iter",
            "extra": "iterations: 9678968\ncpu: 72.94597068613261 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.2485106855342372,
            "unit": "ns/iter",
            "extra": "iterations: 561125618\ncpu: 1.2484156105665278 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.2474655363048281,
            "unit": "ns/iter",
            "extra": "iterations: 561297545\ncpu: 1.247343257131098 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.24771284763663,
            "unit": "ns/iter",
            "extra": "iterations: 561315359\ncpu: 1.2475198830253684 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.24746278261047,
            "unit": "ns/iter",
            "extra": "iterations: 561118947\ncpu: 1.247388261868813 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.248054576035891,
            "unit": "ns/iter",
            "extra": "iterations: 561283566\ncpu: 1.2478991501418633 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.234488885955384,
            "unit": "ns/iter",
            "extra": "iterations: 165387766\ncpu: 4.234240427432914 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.2344132179162415,
            "unit": "ns/iter",
            "extra": "iterations: 165298375\ncpu: 4.234290234250614 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.233762828630684,
            "unit": "ns/iter",
            "extra": "iterations: 165464365\ncpu: 4.233491851855774 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.233813665027159,
            "unit": "ns/iter",
            "extra": "iterations: 165463507\ncpu: 4.233641506220359 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.234374094152493,
            "unit": "ns/iter",
            "extra": "iterations: 165470071\ncpu: 4.234116204615675 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.376885218275357,
            "unit": "ns/iter",
            "extra": "iterations: 45753190\ncpu: 15.375985521446509 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.839244133832622,
            "unit": "ns/iter",
            "extra": "iterations: 39276265\ncpu: 17.837543055583104 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.717810343040085,
            "unit": "ns/iter",
            "extra": "iterations: 39737640\ncpu: 17.71707245322032 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 27.49147896328993,
            "unit": "ns/iter",
            "extra": "iterations: 25642009\ncpu: 27.48952459224186 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 39.837840810426286,
            "unit": "ns/iter",
            "extra": "iterations: 17638655\ncpu: 39.83455637632277 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8807862+zeFresk@users.noreply.github.com",
            "name": "zeFresk",
            "username": "zeFresk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b9208aa1908b622513bd231331b6feaa4332646b",
          "message": "Various fixes, small safeguards and more documentation\n\nFix registering of operations not done before calling After policy.\n+ more coverage + more safeguards around 2q gates + more testing of edge cases + better documentation",
          "timestamp": "2025-08-14T22:57:33+02:00",
          "tree_id": "8e162172b3db41d536600b611f6769129309d9d5",
          "url": "https://github.com/zeFresk/ProPauli/commit/b9208aa1908b622513bd231331b6feaa4332646b"
        },
        "date": 1755205357952,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 64.4454403876431,
            "unit": "ns/iter",
            "extra": "iterations: 10896650\ncpu: 64.44218681888471 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 40.91069060473697,
            "unit": "ns/iter",
            "extra": "iterations: 13886221\ncpu: 40.90877770129109 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 82.10998349999983,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 82.107983 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 65.49229221795554,
            "unit": "ns/iter",
            "extra": "iterations: 10683683\ncpu: 65.4867838179025 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 204.45021726566182,
            "unit": "ns/iter",
            "extra": "iterations: 3424149\ncpu: 204.43461981356543 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 1058.3119137870274,
            "unit": "ns/iter",
            "extra": "iterations: 680640\ncpu: 1058.2331291137757 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 7527.072041553764,
            "unit": "ns/iter",
            "extra": "iterations: 92988\ncpu: 7526.707123499803 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 14814.495667793744,
            "unit": "ns/iter",
            "extra": "iterations: 47320\ncpu: 14813.5218512257 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 660.6990910565731,
            "unit": "ns/iter",
            "extra": "iterations: 1078725\ncpu: 660.682060766183 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 1345.3362678174212,
            "unit": "ns/iter",
            "extra": "iterations: 515366\ncpu: 1345.2784409526414 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 2775.639970294712,
            "unit": "ns/iter",
            "extra": "iterations: 251807\ncpu: 2775.3896158565876 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 654.3008796529728,
            "unit": "ns/iter",
            "extra": "iterations: 1074742\ncpu: 654.261447863767 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 1370.5177055370086,
            "unit": "ns/iter",
            "extra": "iterations: 522266\ncpu: 1369.462917363948 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 2771.9406873748067,
            "unit": "ns/iter",
            "extra": "iterations: 248598\ncpu: 2771.757411564051 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 12646.496033108622,
            "unit": "ns/iter",
            "extra": "iterations: 55333\ncpu: 12644.900565666077 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 503092.4885222394,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 503073.45839311375 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 285035961.99999493,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 285024641.99999976 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 11152.545227817585,
            "unit": "ns/iter",
            "extra": "iterations: 62550\ncpu: 11151.32727418065 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 119986.16481843672,
            "unit": "ns/iter",
            "extra": "iterations: 4599\ncpu: 119979.59012828923 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 4724395.927927835,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 4724298.59459461 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 12921.160076341394,
            "unit": "ns/iter",
            "extra": "iterations: 53968\ncpu: 12920.108990512947 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 396.2831966734527,
            "unit": "ns/iter",
            "extra": "iterations: 1755575\ncpu: 396.2665901485271 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 415.9387509121028,
            "unit": "ns/iter",
            "extra": "iterations: 1692515\ncpu: 415.9176952641492 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 11489.838632737308,
            "unit": "ns/iter",
            "extra": "iterations: 60793\ncpu: 11489.433487408041 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 293554.1616161595,
            "unit": "ns/iter",
            "extra": "iterations: 2475\ncpu: 293547.0416161618 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 425.73283944744213,
            "unit": "ns/iter",
            "extra": "iterations: 1622777\ncpu: 425.70485840013754 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 471.6090320031822,
            "unit": "ns/iter",
            "extra": "iterations: 1488352\ncpu: 471.58395124271607 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 736.0052561203609,
            "unit": "ns/iter",
            "extra": "iterations: 919880\ncpu: 735.9447177892783 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 1536.7826547347588,
            "unit": "ns/iter",
            "extra": "iterations: 454245\ncpu: 1536.7396294950972 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 16.104900821824383,
            "unit": "ns/iter",
            "extra": "iterations: 43289413\ncpu: 16.103425172339474 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 25.520460076004248,
            "unit": "ns/iter",
            "extra": "iterations: 27112216\ncpu: 25.516991159999563 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 113.50812847681263,
            "unit": "ns/iter",
            "extra": "iterations: 6235055\ncpu: 113.50545728947066 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 2651.3906814470224,
            "unit": "ns/iter",
            "extra": "iterations: 282898\ncpu: 2651.3766339811573 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 6358.607421294969,
            "unit": "ns/iter",
            "extra": "iterations: 107744\ncpu: 6358.440173002666 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 3.7381137422380033,
            "unit": "ns/iter",
            "extra": "iterations: 187283672\ncpu: 3.737826194480023 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 3.738212594558783,
            "unit": "ns/iter",
            "extra": "iterations: 187296073\ncpu: 3.7381192290134146 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 3.7382709467681443,
            "unit": "ns/iter",
            "extra": "iterations: 187328206\ncpu: 3.7380660123334803 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 3.7377311017286514,
            "unit": "ns/iter",
            "extra": "iterations: 187228262\ncpu: 3.737636051975951 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 3.7972158584747406,
            "unit": "ns/iter",
            "extra": "iterations: 187271730\ncpu: 3.7969285593719873 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 3.7367818906010277,
            "unit": "ns/iter",
            "extra": "iterations: 187265983\ncpu: 3.736351609571298 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 3.739830024868191,
            "unit": "ns/iter",
            "extra": "iterations: 187242567\ncpu: 3.7396577670289943 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 3.7551508198715062,
            "unit": "ns/iter",
            "extra": "iterations: 187206896\ncpu: 3.754857032617005 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 3.737710487201729,
            "unit": "ns/iter",
            "extra": "iterations: 187183946\ncpu: 3.737610558760205 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 3.7381536784979597,
            "unit": "ns/iter",
            "extra": "iterations: 187268111\ncpu: 3.7379020873447004 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.049058887875036,
            "unit": "ns/iter",
            "extra": "iterations: 172891567\ncpu: 4.048708217214548 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.047279021960813,
            "unit": "ns/iter",
            "extra": "iterations: 172884012\ncpu: 4.047222544789175 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.0483706182256,
            "unit": "ns/iter",
            "extra": "iterations: 172818031\ncpu: 4.048046005106971 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.048226597157691,
            "unit": "ns/iter",
            "extra": "iterations: 172937103\ncpu: 4.0477755603434655 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.0480344963984045,
            "unit": "ns/iter",
            "extra": "iterations: 172908485\ncpu: 4.047976702820577 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 73.35402572021974,
            "unit": "ns/iter",
            "extra": "iterations: 9562438\ncpu: 73.35164871134272 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 79.4322633719669,
            "unit": "ns/iter",
            "extra": "iterations: 8760659\ncpu: 79.43064237519121 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 80.1302369073116,
            "unit": "ns/iter",
            "extra": "iterations: 8750131\ncpu: 80.1215761226886 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 90.32803948864328,
            "unit": "ns/iter",
            "extra": "iterations: 7679170\ncpu: 90.31887886321097 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 100.52632380105804,
            "unit": "ns/iter",
            "extra": "iterations: 6858489\ncpu: 100.5221443090453 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 73.56203204332756,
            "unit": "ns/iter",
            "extra": "iterations: 9534403\ncpu: 73.55860959516839 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 79.9078276550372,
            "unit": "ns/iter",
            "extra": "iterations: 8730699\ncpu: 79.90711110301702 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 79.85222825223364,
            "unit": "ns/iter",
            "extra": "iterations: 8807800\ncpu: 79.84328833533905 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 95.80003514943553,
            "unit": "ns/iter",
            "extra": "iterations: 7590449\ncpu: 95.78998080350762 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 101.39042967958147,
            "unit": "ns/iter",
            "extra": "iterations: 7225547\ncpu: 101.38900404356838 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 10048.079934958394,
            "unit": "ns/iter",
            "extra": "iterations: 69494\ncpu: 10047.269663568242 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 10769.970913959127,
            "unit": "ns/iter",
            "extra": "iterations: 65736\ncpu: 10768.814591700058 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 10283.415901419723,
            "unit": "ns/iter",
            "extra": "iterations: 67843\ncpu: 10282.939979069384 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 11239.766015999976,
            "unit": "ns/iter",
            "extra": "iterations: 62500\ncpu: 11239.408784000034 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 17394.413917680136,
            "unit": "ns/iter",
            "extra": "iterations: 40136\ncpu: 17393.96604046244 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 2475447.399293306,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 2475278.4487632383 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 2501159.4714285936,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 2501095.5142857227 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 2382432.0443685506,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 2382285.0068259207 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 3427211.4460784015,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 3426595.200980401 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 37900402.94444452,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 37893647.66666618 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 103875.89687499632,
            "unit": "ns/iter",
            "extra": "iterations: 6720\ncpu: 103867.30327380907 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 103978.04718100607,
            "unit": "ns/iter",
            "extra": "iterations: 6740\ncpu: 103970.5538575675 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 105998.30974652983,
            "unit": "ns/iter",
            "extra": "iterations: 6628\ncpu: 105987.94161134554 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 148796.72284803764,
            "unit": "ns/iter",
            "extra": "iterations: 4705\ncpu: 148784.60170032078 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 173751.2845790926,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 173725.05785944784 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 191.0968179764237,
            "unit": "ns/iter",
            "extra": "iterations: 3658081\ncpu: 191.06124550003358 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 210.9749329976235,
            "unit": "ns/iter",
            "extra": "iterations: 3302868\ncpu: 210.8978393929137 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 259.74121806836524,
            "unit": "ns/iter",
            "extra": "iterations: 2734592\ncpu: 259.6711147403359 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 429.2478092275716,
            "unit": "ns/iter",
            "extra": "iterations: 1329668\ncpu: 429.22511484069463 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 660.5981378488631,
            "unit": "ns/iter",
            "extra": "iterations: 1038906\ncpu: 660.5416438060813 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 338.9205257677353,
            "unit": "ns/iter",
            "extra": "iterations: 2114698\ncpu: 338.89767144055946 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 395.10683637728704,
            "unit": "ns/iter",
            "extra": "iterations: 1800398\ncpu: 395.0345318090735 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 445.8295517412158,
            "unit": "ns/iter",
            "extra": "iterations: 1662968\ncpu: 445.748705928198 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 1006.3430826460072,
            "unit": "ns/iter",
            "extra": "iterations: 719914\ncpu: 1006.1902685598452 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 1614.9220300976356,
            "unit": "ns/iter",
            "extra": "iterations: 486085\ncpu: 1614.816009545651 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 1138.9952692478462,
            "unit": "ns/iter",
            "extra": "iterations: 617238\ncpu: 1138.8632051169839 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 1525.440623570263,
            "unit": "ns/iter",
            "extra": "iterations: 450246\ncpu: 1525.3897958005075 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 1898.8007070507106,
            "unit": "ns/iter",
            "extra": "iterations: 358673\ncpu: 1898.6301505828544 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 6762.923708391555,
            "unit": "ns/iter",
            "extra": "iterations: 139845\ncpu: 6762.5121527404945 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 8942.58202053,
            "unit": "ns/iter",
            "extra": "iterations: 85631\ncpu: 8941.58095783081 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 21632.27738646886,
            "unit": "ns/iter",
            "extra": "iterations: 32370\ncpu: 21631.19737411194 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 30501.368897235498,
            "unit": "ns/iter",
            "extra": "iterations: 23432\ncpu: 30497.847857630553 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 65761.11919860312,
            "unit": "ns/iter",
            "extra": "iterations: 10881\ncpu: 65759.10679165425 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 156220.77620881618,
            "unit": "ns/iter",
            "extra": "iterations: 4674\ncpu: 156217.30530594863 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 252872.73935821597,
            "unit": "ns/iter",
            "extra": "iterations: 3054\ncpu: 252860.89849378032 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/16",
            "value": 5344233.992366472,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 5343919.328244198 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/16",
            "value": 6131737.964912332,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 6131168.929824589 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/16",
            "value": 10169875.6093751,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 10169308.406250188 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/16",
            "value": 110638681.27272835,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 110622144.27272724 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/16",
            "value": 426553190.49999815,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 426496639.4999998 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 50.73796572967114,
            "unit": "ns/iter",
            "extra": "iterations: 13706959\ncpu: 50.73647962323415 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 54.74740640618453,
            "unit": "ns/iter",
            "extra": "iterations: 12749587\ncpu: 54.740904548515786 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 52.908795771247426,
            "unit": "ns/iter",
            "extra": "iterations: 13248355\ncpu: 52.906368601988376 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 59.71673375342728,
            "unit": "ns/iter",
            "extra": "iterations: 11758157\ncpu: 59.70824806982916 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 67.85000701644624,
            "unit": "ns/iter",
            "extra": "iterations: 10325743\ncpu: 67.83549580887343 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 80.08833072076723,
            "unit": "ns/iter",
            "extra": "iterations: 8745553\ncpu: 80.07666261927588 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 89.59673033121541,
            "unit": "ns/iter",
            "extra": "iterations: 7795652\ncpu: 89.58725941075896 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 85.08751418694872,
            "unit": "ns/iter",
            "extra": "iterations: 8092825\ncpu: 85.08320592623718 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 99.8190165347373,
            "unit": "ns/iter",
            "extra": "iterations: 7049644\ncpu: 99.79871451664795 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 116.09562031578189,
            "unit": "ns/iter",
            "extra": "iterations: 6087859\ncpu: 116.07414363571846 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 297.2271154802796,
            "unit": "ns/iter",
            "extra": "iterations: 2271470\ncpu: 297.1610560562146 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 340.8327798299017,
            "unit": "ns/iter",
            "extra": "iterations: 2108388\ncpu: 340.78864042102236 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 311.7272497439059,
            "unit": "ns/iter",
            "extra": "iterations: 2211085\ncpu: 311.6681009549616 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 557.7192812640286,
            "unit": "ns/iter",
            "extra": "iterations: 1313083\ncpu: 557.6514157901662 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 774.4158609342016,
            "unit": "ns/iter",
            "extra": "iterations: 961444\ncpu: 774.3312621431895 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 9164.488046484516,
            "unit": "ns/iter",
            "extra": "iterations: 75208\ncpu: 9163.715336134388 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 9675.409388985774,
            "unit": "ns/iter",
            "extra": "iterations: 73959\ncpu: 9675.302843467334 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 9440.760422783158,
            "unit": "ns/iter",
            "extra": "iterations: 73229\ncpu: 9440.101380600563 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 10364.179993723728,
            "unit": "ns/iter",
            "extra": "iterations: 66919\ncpu: 10363.213870499827 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 18804.16290920775,
            "unit": "ns/iter",
            "extra": "iterations: 37481\ncpu: 18801.98273792039 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/16",
            "value": 2276444.915309446,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 2276284.9804559853 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/16",
            "value": 2422303.7944251443,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 2422179.9547037696 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/16",
            "value": 2128519.2688821494,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2126358.374622311 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/16",
            "value": 4069301.8048780616,
            "unit": "ns/iter",
            "extra": "iterations: 164\ncpu: 4068731.7317073876 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/16",
            "value": 38400774.05555557,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 38397463.888889164 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 52.90936263647816,
            "unit": "ns/iter",
            "extra": "iterations: 13214782\ncpu: 52.89753391316056 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 61.694205303822265,
            "unit": "ns/iter",
            "extra": "iterations: 11342234\ncpu: 61.69152990495723 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 125.32645747843242,
            "unit": "ns/iter",
            "extra": "iterations: 5596395\ncpu: 125.32736520563789 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 194.1138752967232,
            "unit": "ns/iter",
            "extra": "iterations: 3613602\ncpu: 194.1022417521344 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 271.2203824722751,
            "unit": "ns/iter",
            "extra": "iterations: 2529752\ncpu: 271.21077797349017 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 86.174915320762,
            "unit": "ns/iter",
            "extra": "iterations: 8122416\ncpu: 86.15186097338638 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 104.66900580408702,
            "unit": "ns/iter",
            "extra": "iterations: 6692353\ncpu: 104.65897330878728 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 167.85259879533936,
            "unit": "ns/iter",
            "extra": "iterations: 4168643\ncpu: 167.82814839265544 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 318.1990486246245,
            "unit": "ns/iter",
            "extra": "iterations: 2258835\ncpu: 318.1815010835309 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 474.3765948874924,
            "unit": "ns/iter",
            "extra": "iterations: 1511627\ncpu: 474.30825924649156 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 310.44260954973555,
            "unit": "ns/iter",
            "extra": "iterations: 2258198\ncpu: 310.41476743846346 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 384.06716751113953,
            "unit": "ns/iter",
            "extra": "iterations: 1827580\ncpu: 384.0383260924142 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 464.750296014398,
            "unit": "ns/iter",
            "extra": "iterations: 1505839\ncpu: 464.7408421484622 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 1282.1214486873016,
            "unit": "ns/iter",
            "extra": "iterations: 563876\ncpu: 1282.0377955436738 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 2024.190799597439,
            "unit": "ns/iter",
            "extra": "iterations: 345724\ncpu: 2024.1773755943836 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 9408.785710444128,
            "unit": "ns/iter",
            "extra": "iterations: 74376\ncpu: 9408.12673443029 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 10580.026737077975,
            "unit": "ns/iter",
            "extra": "iterations: 66088\ncpu: 10579.128283500719 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 10941.355726237545,
            "unit": "ns/iter",
            "extra": "iterations: 64187\ncpu: 10941.17983392285 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 19589.37595886606,
            "unit": "ns/iter",
            "extra": "iterations: 35980\ncpu: 19588.664841578895 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 36381.86832363813,
            "unit": "ns/iter",
            "extra": "iterations: 18910\ncpu: 36380.31718667373 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/16",
            "value": 2293791.0695364187,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 2293694.466887442 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/16",
            "value": 2611444.366666694,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 2611363.2629629904 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/16",
            "value": 2463416.7438596687,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 2463296.3052631724 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/16",
            "value": 6805430.844659954,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 6804742.252427331 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/16",
            "value": 43687186.43750036,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 43684168.375 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.367098136055949,
            "unit": "ns/iter",
            "extra": "iterations: 160187648\ncpu: 4.366687555085361 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.368628085232495,
            "unit": "ns/iter",
            "extra": "iterations: 160337067\ncpu: 4.368415333430015 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.367230318962954,
            "unit": "ns/iter",
            "extra": "iterations: 160346962\ncpu: 4.366849451129582 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.36581807314468,
            "unit": "ns/iter",
            "extra": "iterations: 160186312\ncpu: 4.364913451531255 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.3675048631099775,
            "unit": "ns/iter",
            "extra": "iterations: 160249308\ncpu: 4.36638953224062 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 6.008165860772865,
            "unit": "ns/iter",
            "extra": "iterations: 120555570\ncpu: 6.006937265528264 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 6.023330154804091,
            "unit": "ns/iter",
            "extra": "iterations: 120039795\ncpu: 6.022293965097145 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 6.0233374845724885,
            "unit": "ns/iter",
            "extra": "iterations: 120617798\ncpu: 6.02304120988861 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 6.02658642560121,
            "unit": "ns/iter",
            "extra": "iterations: 120549413\ncpu: 6.026022125881396 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 6.00415093535589,
            "unit": "ns/iter",
            "extra": "iterations: 120571379\ncpu: 6.00363730599782 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 59.562569250041115,
            "unit": "ns/iter",
            "extra": "iterations: 11712087\ncpu: 59.55702984446655 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 64.423273458193,
            "unit": "ns/iter",
            "extra": "iterations: 10867504\ncpu: 64.42101056507713 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 62.544480550417404,
            "unit": "ns/iter",
            "extra": "iterations: 11186822\ncpu: 62.541155388010004 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 72.12080959126553,
            "unit": "ns/iter",
            "extra": "iterations: 9666211\ncpu: 72.11759861232011 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 83.28677515772137,
            "unit": "ns/iter",
            "extra": "iterations: 8477258\ncpu: 83.28559612082061 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.623444707582942,
            "unit": "ns/iter",
            "extra": "iterations: 1121465154\ncpu: 0.623411573249829 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.0652973228285727,
            "unit": "ns/iter",
            "extra": "iterations: 656923977\ncpu: 1.0652857157016267 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7342473479237147,
            "unit": "ns/iter",
            "extra": "iterations: 967548158\ncpu: 0.734179618995239 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.8719508595560882,
            "unit": "ns/iter",
            "extra": "iterations: 821407802\ncpu: 0.8719119142235867 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.542469915624866,
            "unit": "ns/iter",
            "extra": "iterations: 106336013\ncpu: 6.542310110874591 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.8519416056117746,
            "unit": "ns/iter",
            "extra": "iterations: 825520353\ncpu: 0.8518902404336116 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.8217331785743832,
            "unit": "ns/iter",
            "extra": "iterations: 852486098\ncpu: 0.8217172006011891 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.6782545801131226,
            "unit": "ns/iter",
            "extra": "iterations: 1032905339\ncpu: 0.6781887076681947 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 15.8801198536743,
            "unit": "ns/iter",
            "extra": "iterations: 44122135\ncpu: 15.878907740978281 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 26.72821835849653,
            "unit": "ns/iter",
            "extra": "iterations: 27455254\ncpu: 26.72706794116701 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 113.82630055536622,
            "unit": "ns/iter",
            "extra": "iterations: 5648337\ncpu: 113.82135449779234 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 2466.580443769077,
            "unit": "ns/iter",
            "extra": "iterations: 271177\ncpu: 2466.4752615450357 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 6475.926074283495,
            "unit": "ns/iter",
            "extra": "iterations: 114588\ncpu: 6475.449794044755 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.9367929723461352,
            "unit": "ns/iter",
            "extra": "iterations: 747669836\ncpu: 0.9367474415538757 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.939811272036138,
            "unit": "ns/iter",
            "extra": "iterations: 747511694\ncpu: 0.9397549812779156 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 0.9369125885001177,
            "unit": "ns/iter",
            "extra": "iterations: 747486430\ncpu: 0.9368948222912798 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.9374795429525784,
            "unit": "ns/iter",
            "extra": "iterations: 747019459\ncpu: 0.9374411182507294 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.9375258080225186,
            "unit": "ns/iter",
            "extra": "iterations: 746761495\ncpu: 0.937500449189585 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.2521793969461426,
            "unit": "ns/iter",
            "extra": "iterations: 215048365\ncpu: 3.2518973069150423 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.1865351620388471,
            "unit": "ns/iter",
            "extra": "iterations: 590935756\ncpu: 1.1864907985022985 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.0079924229937223,
            "unit": "ns/iter",
            "extra": "iterations: 694577227\ncpu: 1.0079782575422942 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.947704479604489,
            "unit": "ns/iter",
            "extra": "iterations: 737091948\ncpu: 0.9476621334628925 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.9442039160098898,
            "unit": "ns/iter",
            "extra": "iterations: 741272488\ncpu: 0.9441704424891758 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 24.77567424406087,
            "unit": "ns/iter",
            "extra": "iterations: 28259537\ncpu: 24.775164681572367 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 30.687599590131263,
            "unit": "ns/iter",
            "extra": "iterations: 24533681\ncpu: 30.687586302275285 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 29.950681330235973,
            "unit": "ns/iter",
            "extra": "iterations: 23007859\ncpu: 29.949892512814984 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.52358139701736,
            "unit": "ns/iter",
            "extra": "iterations: 18985474\ncpu: 36.52352751371936 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 41.795824434099465,
            "unit": "ns/iter",
            "extra": "iterations: 16457410\ncpu: 41.795116181709226 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 15.725845750416395,
            "unit": "ns/iter",
            "extra": "iterations: 44361935\ncpu: 15.724563592638589 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 8.158774025500069,
            "unit": "ns/iter",
            "extra": "iterations: 85842177\ncpu: 8.158529751639325 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 8.161473861324941,
            "unit": "ns/iter",
            "extra": "iterations: 85820150\ncpu: 8.1612329155797 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 8.168092912228204,
            "unit": "ns/iter",
            "extra": "iterations: 85809674\ncpu: 8.167777831203379 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 8.163835606451498,
            "unit": "ns/iter",
            "extra": "iterations: 85808136\ncpu: 8.16357339355331 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.2433573028116804,
            "unit": "ns/iter",
            "extra": "iterations: 563641943\ncpu: 1.2432961256752975 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 4.380282230462285,
            "unit": "ns/iter",
            "extra": "iterations: 159920441\ncpu: 4.380237007975676 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.177332596923803,
            "unit": "ns/iter",
            "extra": "iterations: 85653429\ncpu: 8.176993883105366 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 57.4491292215512,
            "unit": "ns/iter",
            "extra": "iterations: 12182318\ncpu: 57.44715201162756 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 115.76876819580629,
            "unit": "ns/iter",
            "extra": "iterations: 6032639\ncpu: 115.76387763298975 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.933540161037996,
            "unit": "ns/iter",
            "extra": "iterations: 751163391\ncpu: 0.9334882029680736 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.3784342908314855,
            "unit": "ns/iter",
            "extra": "iterations: 206473850\ncpu: 3.378359753547528 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.404361751809112,
            "unit": "ns/iter",
            "extra": "iterations: 109306953\ncpu: 6.403956791294061 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.120306134663906,
            "unit": "ns/iter",
            "extra": "iterations: 18362638\ncpu: 38.119589788788815 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 72.38161693309975,
            "unit": "ns/iter",
            "extra": "iterations: 9678842\ncpu: 72.37806144578214 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.2480069957292534,
            "unit": "ns/iter",
            "extra": "iterations: 561069169\ncpu: 1.2479966030712646 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.2475963090413784,
            "unit": "ns/iter",
            "extra": "iterations: 561017628\ncpu: 1.2475161939118307 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.247767302444893,
            "unit": "ns/iter",
            "extra": "iterations: 560967269\ncpu: 1.2477763831885826 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.2480208369434573,
            "unit": "ns/iter",
            "extra": "iterations: 560981318\ncpu: 1.2479009773370038 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.2476065565260626,
            "unit": "ns/iter",
            "extra": "iterations: 560851453\ncpu: 1.2476006119930372 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.477080375196714,
            "unit": "ns/iter",
            "extra": "iterations: 156625906\ncpu: 4.477080190042121 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.474405554407708,
            "unit": "ns/iter",
            "extra": "iterations: 156560922\ncpu: 4.474096703390591 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.479183965007048,
            "unit": "ns/iter",
            "extra": "iterations: 156445644\ncpu: 4.479034034338607 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.475226409056434,
            "unit": "ns/iter",
            "extra": "iterations: 156550054\ncpu: 4.4749027745465195 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.473950391479845,
            "unit": "ns/iter",
            "extra": "iterations: 156473887\ncpu: 4.473747616431328 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.081205648674045,
            "unit": "ns/iter",
            "extra": "iterations: 46524399\ncpu: 15.080515903064173 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.798378944810494,
            "unit": "ns/iter",
            "extra": "iterations: 39509574\ncpu: 17.79769037752709 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.713133557160788,
            "unit": "ns/iter",
            "extra": "iterations: 39677004\ncpu: 17.712438494599734 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 27.716482193037432,
            "unit": "ns/iter",
            "extra": "iterations: 25808386\ncpu: 27.716003201440085 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 40.18647058217179,
            "unit": "ns/iter",
            "extra": "iterations: 17653546\ncpu: 40.18431979614654 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}