window.BENCHMARK_DATA = {
  "lastUpdate": 1755021460983,
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
      }
    ]
  }
}