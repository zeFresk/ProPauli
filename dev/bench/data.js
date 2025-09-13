window.BENCHMARK_DATA = {
  "lastUpdate": 1757787220765,
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
      },
      {
        "commit": {
          "author": {
            "email": "8807862+zeFresk@users.noreply.github.com",
            "name": "zeFresk",
            "username": "zeFresk"
          },
          "committer": {
            "email": "8807862+zeFresk@users.noreply.github.com",
            "name": "zeFresk",
            "username": "zeFresk"
          },
          "distinct": true,
          "id": "b946f6492ffe2bd87f459998b8ffbb7e82804ca6",
          "message": "fix comparison < 0 with unsigned. + bump cmake package version",
          "timestamp": "2025-08-14T23:05:05+02:00",
          "tree_id": "09c5e23877e93b992ec2bd650b78101f3a0ef6c9",
          "url": "https://github.com/zeFresk/ProPauli/commit/b946f6492ffe2bd87f459998b8ffbb7e82804ca6"
        },
        "date": 1755205832677,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 64.0328859394542,
            "unit": "ns/iter",
            "extra": "iterations: 11067131\ncpu: 64.0140363387765 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 41.16372189992591,
            "unit": "ns/iter",
            "extra": "iterations: 13640356\ncpu: 41.15776736325648 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 82.95212579999998,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 82.91771720000001 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 65.51782276054719,
            "unit": "ns/iter",
            "extra": "iterations: 10688636\ncpu: 65.50580111437978 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 204.65720265480763,
            "unit": "ns/iter",
            "extra": "iterations: 3422016\ncpu: 204.57462530859 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 1029.636076019189,
            "unit": "ns/iter",
            "extra": "iterations: 679881\ncpu: 1029.5582741685673 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 7491.38615980659,
            "unit": "ns/iter",
            "extra": "iterations: 93438\ncpu: 7490.840557374942 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 14806.632151380114,
            "unit": "ns/iter",
            "extra": "iterations: 47351\ncpu: 14805.685413190862 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 650.3000565033358,
            "unit": "ns/iter",
            "extra": "iterations: 1047726\ncpu: 650.1891801864234 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 1365.3640662395205,
            "unit": "ns/iter",
            "extra": "iterations: 517274\ncpu: 1365.2303344069103 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 2871.8760994573327,
            "unit": "ns/iter",
            "extra": "iterations: 246940\ncpu: 2871.5756904511222 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 664.9764114433848,
            "unit": "ns/iter",
            "extra": "iterations: 1074928\ncpu: 664.9248721774851 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 1353.5894779439507,
            "unit": "ns/iter",
            "extra": "iterations: 513987\ncpu: 1353.278989546428 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 2811.90125865473,
            "unit": "ns/iter",
            "extra": "iterations: 252174\ncpu: 2811.511214478894 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 12541.842664942575,
            "unit": "ns/iter",
            "extra": "iterations: 55671\ncpu: 12541.05009789657 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 505659.16187051515,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 505614.0848920858 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 287760793.4999986,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 287722383.50000024 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 11184.489340604727,
            "unit": "ns/iter",
            "extra": "iterations: 62527\ncpu: 11183.446111279927 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 118415.77288428057,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 118406.96610535364 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 4721317.711711505,
            "unit": "ns/iter",
            "extra": "iterations: 111\ncpu: 4720808.990990973 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 12932.279439339389,
            "unit": "ns/iter",
            "extra": "iterations: 53865\ncpu: 12931.040063120752 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 401.6466364001083,
            "unit": "ns/iter",
            "extra": "iterations: 1746923\ncpu: 401.60447598434484 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 423.64960902425855,
            "unit": "ns/iter",
            "extra": "iterations: 1681690\ncpu: 423.63048778312213 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 11509.732385803632,
            "unit": "ns/iter",
            "extra": "iterations: 60860\ncpu: 11508.552563259958 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 293934.06340872525,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 293903.2019386113 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 425.50543861835024,
            "unit": "ns/iter",
            "extra": "iterations: 1637916\ncpu: 425.479331052386 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 474.31425977250893,
            "unit": "ns/iter",
            "extra": "iterations: 1470325\ncpu: 474.2662261744857 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 730.1024667752301,
            "unit": "ns/iter",
            "extra": "iterations: 951850\ncpu: 730.0415916373353 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 1537.8137824057358,
            "unit": "ns/iter",
            "extra": "iterations: 455784\ncpu: 1537.7414169869962 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 15.914624943735738,
            "unit": "ns/iter",
            "extra": "iterations: 44066255\ncpu: 15.8920363212168 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 25.54386280512463,
            "unit": "ns/iter",
            "extra": "iterations: 28283622\ncpu: 25.541658384488283 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 116.38499676011818,
            "unit": "ns/iter",
            "extra": "iterations: 6236333\ncpu: 116.37837684421257 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 2687.4811416709367,
            "unit": "ns/iter",
            "extra": "iterations: 288069\ncpu: 2687.232121470895 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 6353.766844839468,
            "unit": "ns/iter",
            "extra": "iterations: 106264\ncpu: 6353.4048972370765 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 3.741563108279489,
            "unit": "ns/iter",
            "extra": "iterations: 187191421\ncpu: 3.741309271860301 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 3.742307075508768,
            "unit": "ns/iter",
            "extra": "iterations: 187163575\ncpu: 3.742036942818601 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 3.7398955027040905,
            "unit": "ns/iter",
            "extra": "iterations: 187116038\ncpu: 3.7395030831082496 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 3.741203296519166,
            "unit": "ns/iter",
            "extra": "iterations: 187070532\ncpu: 3.7409147636357685 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 3.7429310232702813,
            "unit": "ns/iter",
            "extra": "iterations: 187138330\ncpu: 3.7426729414545874 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 3.740814643764923,
            "unit": "ns/iter",
            "extra": "iterations: 187133624\ncpu: 3.740408997797207 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 3.7434678511035844,
            "unit": "ns/iter",
            "extra": "iterations: 187139067\ncpu: 3.743034729354504 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 3.7417536866505796,
            "unit": "ns/iter",
            "extra": "iterations: 187034337\ncpu: 3.741242283228444 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 3.74033760056919,
            "unit": "ns/iter",
            "extra": "iterations: 187087303\ncpu: 3.7400238379618678 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 3.740689364642575,
            "unit": "ns/iter",
            "extra": "iterations: 187158656\ncpu: 3.7406017331092714 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.053006900146437,
            "unit": "ns/iter",
            "extra": "iterations: 172842271\ncpu: 4.052466818143104 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.051481508279875,
            "unit": "ns/iter",
            "extra": "iterations: 172755700\ncpu: 4.050999139246924 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.050928543915992,
            "unit": "ns/iter",
            "extra": "iterations: 172856660\ncpu: 4.050761764111342 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.05253524042682,
            "unit": "ns/iter",
            "extra": "iterations: 172734643\ncpu: 4.052204339809236 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.051220712138767,
            "unit": "ns/iter",
            "extra": "iterations: 172737817\ncpu: 4.050996690550974 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 73.60642801476511,
            "unit": "ns/iter",
            "extra": "iterations: 9550507\ncpu: 73.59210793730628 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 79.71399041171203,
            "unit": "ns/iter",
            "extra": "iterations: 8810334\ncpu: 79.7102401566161 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 81.6717822851549,
            "unit": "ns/iter",
            "extra": "iterations: 8536928\ncpu: 81.6619614221882 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 93.92724309559732,
            "unit": "ns/iter",
            "extra": "iterations: 7442895\ncpu: 93.91699318611907 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 101.88992013112171,
            "unit": "ns/iter",
            "extra": "iterations: 6403496\ncpu: 101.87707948907911 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 73.74997635199678,
            "unit": "ns/iter",
            "extra": "iterations: 9535690\ncpu: 73.74199465376861 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 79.7710204154804,
            "unit": "ns/iter",
            "extra": "iterations: 8705846\ncpu: 79.76649150467388 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 81.80249329157434,
            "unit": "ns/iter",
            "extra": "iterations: 8634289\ncpu: 81.79393809959322 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 100.5377305312021,
            "unit": "ns/iter",
            "extra": "iterations: 7454414\ncpu: 100.52781680759865 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 103.2432289388395,
            "unit": "ns/iter",
            "extra": "iterations: 6478822\ncpu: 103.22965100754396 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 9846.34959922282,
            "unit": "ns/iter",
            "extra": "iterations: 70987\ncpu: 9845.892712750232 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 10284.566442953643,
            "unit": "ns/iter",
            "extra": "iterations: 68540\ncpu: 10283.30522322725 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 9867.47724666444,
            "unit": "ns/iter",
            "extra": "iterations: 71506\ncpu: 9866.814547031112 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 13497.542087996024,
            "unit": "ns/iter",
            "extra": "iterations: 51820\ncpu: 13496.15411038202 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 18378.15708852416,
            "unit": "ns/iter",
            "extra": "iterations: 38125\ncpu: 18377.190032786857 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 2550316.2007298935,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 2550072.963503679 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 2526393.1043166183,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 2526089.92805755 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 2428209.2264807844,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 2428146.1777003407 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 3888685.497175028,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 3888081.570621506 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 37027278.47368243,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 37023230.0526314 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 104337.98787425032,
            "unit": "ns/iter",
            "extra": "iterations: 6680\ncpu: 104297.74700598823 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 104435.54775621033,
            "unit": "ns/iter",
            "extra": "iterations: 6596\ncpu: 104390.70163735574 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 105808.02408536721,
            "unit": "ns/iter",
            "extra": "iterations: 6560\ncpu: 105774.5362804869 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 146429.64053100836,
            "unit": "ns/iter",
            "extra": "iterations: 4821\ncpu: 146409.0315287282 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 171836.27836574565,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 171813.48560177136 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 190.86998706463783,
            "unit": "ns/iter",
            "extra": "iterations: 3665143\ncpu: 190.85575760618525 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 210.65961038780577,
            "unit": "ns/iter",
            "extra": "iterations: 3302874\ncpu: 210.63778333657388 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 249.8979292623791,
            "unit": "ns/iter",
            "extra": "iterations: 2833966\ncpu: 249.88394956043908 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 412.49088584272937,
            "unit": "ns/iter",
            "extra": "iterations: 1717438\ncpu: 412.4562336456962 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 610.4081158986,
            "unit": "ns/iter",
            "extra": "iterations: 1308937\ncpu: 610.3580248705559 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 328.2529729993532,
            "unit": "ns/iter",
            "extra": "iterations: 2131097\ncpu: 328.223658988779 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 376.65428358150325,
            "unit": "ns/iter",
            "extra": "iterations: 1819202\ncpu: 376.60856793253265 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 438.9041899572483,
            "unit": "ns/iter",
            "extra": "iterations: 1616532\ncpu: 438.85484296012095 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 924.453642467228,
            "unit": "ns/iter",
            "extra": "iterations: 757083\ncpu: 924.3966962671176 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 1692.668607040248,
            "unit": "ns/iter",
            "extra": "iterations: 469669\ncpu: 1692.5612186454748 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 1119.0670015225242,
            "unit": "ns/iter",
            "extra": "iterations: 625941\ncpu: 1118.9835974956166 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 1459.0298592027466,
            "unit": "ns/iter",
            "extra": "iterations: 448304\ncpu: 1458.9463399835977 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 1807.9467530351953,
            "unit": "ns/iter",
            "extra": "iterations: 368190\ncpu: 1807.891319699056 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 5366.417399251449,
            "unit": "ns/iter",
            "extra": "iterations: 137868\ncpu: 5366.119142948275 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 7927.196263715519,
            "unit": "ns/iter",
            "extra": "iterations: 73549\ncpu: 7926.751730139051 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 22220.50526445407,
            "unit": "ns/iter",
            "extra": "iterations: 32482\ncpu: 22217.900652668937 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 32993.33834032223,
            "unit": "ns/iter",
            "extra": "iterations: 21703\ncpu: 32991.85877528467 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 75708.71099999863,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 75702.39450000002 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 152136.516433118,
            "unit": "ns/iter",
            "extra": "iterations: 3925\ncpu: 152124.76535031805 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 446973.0436665355,
            "unit": "ns/iter",
            "extra": "iterations: 2771\ncpu: 446944.89714904514 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/16",
            "value": 5326131.900763372,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 5325754.709923602 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/16",
            "value": 6099244.130434825,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 6098689.486956519 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/16",
            "value": 11778733.750000063,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 11777466.660714252 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/16",
            "value": 108189987.33333273,
            "unit": "ns/iter",
            "extra": "iterations: 6\ncpu: 108182652.6666679 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/16",
            "value": 320063002.5999999,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 320001977.9999991 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 51.329770118128295,
            "unit": "ns/iter",
            "extra": "iterations: 13680809\ncpu: 51.321856843407566 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 54.77561394345466,
            "unit": "ns/iter",
            "extra": "iterations: 12793442\ncpu: 54.771345115724415 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 52.95884033504293,
            "unit": "ns/iter",
            "extra": "iterations: 13244860\ncpu: 52.95395413768027 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 59.58412641100355,
            "unit": "ns/iter",
            "extra": "iterations: 11748534\ncpu: 59.57765360341961 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 67.02580632197729,
            "unit": "ns/iter",
            "extra": "iterations: 10451005\ncpu: 67.01726513383083 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 81.3327506371176,
            "unit": "ns/iter",
            "extra": "iterations: 8735827\ncpu: 81.15034775757415 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 88.79876213081775,
            "unit": "ns/iter",
            "extra": "iterations: 7886940\ncpu: 88.7912366519831 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 85.02072185246746,
            "unit": "ns/iter",
            "extra": "iterations: 8242072\ncpu: 85.01223939805499 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 101.08663117265701,
            "unit": "ns/iter",
            "extra": "iterations: 6924736\ncpu: 101.07698040762867 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 119.45921352772316,
            "unit": "ns/iter",
            "extra": "iterations: 5925727\ncpu: 119.44137065376111 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 307.32215604364416,
            "unit": "ns/iter",
            "extra": "iterations: 2364646\ncpu: 307.29315762274496 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 326.4178232068315,
            "unit": "ns/iter",
            "extra": "iterations: 2143318\ncpu: 326.3973689391811 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 323.7533720979709,
            "unit": "ns/iter",
            "extra": "iterations: 2263576\ncpu: 323.73558519793244 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 542.7150680779034,
            "unit": "ns/iter",
            "extra": "iterations: 1293151\ncpu: 542.6345422924351 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 773.922351619303,
            "unit": "ns/iter",
            "extra": "iterations: 888222\ncpu: 773.8162711574307 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 9730.470866270187,
            "unit": "ns/iter",
            "extra": "iterations: 73626\ncpu: 9729.65926439029 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 9543.444579343453,
            "unit": "ns/iter",
            "extra": "iterations: 72482\ncpu: 9542.401934273294 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 9045.118661727192,
            "unit": "ns/iter",
            "extra": "iterations: 77742\ncpu: 9044.218491934855 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 10324.08055777349,
            "unit": "ns/iter",
            "extra": "iterations: 70136\ncpu: 10322.781510208764 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 19020.09032812439,
            "unit": "ns/iter",
            "extra": "iterations: 37242\ncpu: 19018.00778690784 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/16",
            "value": 2264151.5836064587,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 2263905.508196659 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/16",
            "value": 2426936.0381945246,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 2426602.3680555983 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/16",
            "value": 2206888.342948551,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2206511.3525640685 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/16",
            "value": 4190595.099378991,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 4189800.1118013104 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/16",
            "value": 39249321.333335906,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 39245226.77777828 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 52.9423518156748,
            "unit": "ns/iter",
            "extra": "iterations: 13158038\ncpu: 52.93328336641155 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 61.69108180179395,
            "unit": "ns/iter",
            "extra": "iterations: 11344971\ncpu: 61.68558994112972 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 125.23300143618808,
            "unit": "ns/iter",
            "extra": "iterations: 5582854\ncpu: 125.22208443924954 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 195.24459721091912,
            "unit": "ns/iter",
            "extra": "iterations: 3589211\ncpu: 195.19160144109776 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 271.95223883663465,
            "unit": "ns/iter",
            "extra": "iterations: 2530131\ncpu: 271.9011991869139 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 86.09423096451144,
            "unit": "ns/iter",
            "extra": "iterations: 8144117\ncpu: 86.08645393969707 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 103.80304368102551,
            "unit": "ns/iter",
            "extra": "iterations: 6730863\ncpu: 103.77741962657622 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 169.24463523660918,
            "unit": "ns/iter",
            "extra": "iterations: 4145756\ncpu: 169.22531089625122 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 318.61440694810346,
            "unit": "ns/iter",
            "extra": "iterations: 2238531\ncpu: 318.58868829602943 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 464.55337009211837,
            "unit": "ns/iter",
            "extra": "iterations: 1500775\ncpu: 464.5265339574523 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 308.680668045876,
            "unit": "ns/iter",
            "extra": "iterations: 2268467\ncpu: 308.66970469485335 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 378.1932268325141,
            "unit": "ns/iter",
            "extra": "iterations: 1852693\ncpu: 378.172797112095 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 465.3657629407822,
            "unit": "ns/iter",
            "extra": "iterations: 1505877\ncpu: 465.3270399906576 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 1252.549969621708,
            "unit": "ns/iter",
            "extra": "iterations: 576070\ncpu: 1252.4281858107754 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 1986.1386157465836,
            "unit": "ns/iter",
            "extra": "iterations: 351872\ncpu: 1986.0180349672382 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 9356.170259398608,
            "unit": "ns/iter",
            "extra": "iterations: 74827\ncpu: 9355.646036858447 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 10615.777489751366,
            "unit": "ns/iter",
            "extra": "iterations: 66352\ncpu: 10615.056034482881 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 10849.363996043488,
            "unit": "ns/iter",
            "extra": "iterations: 64704\ncpu: 10848.181225271956 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 19428.96996178494,
            "unit": "ns/iter",
            "extra": "iterations: 35588\ncpu: 19426.74041811805 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 37155.744161015675,
            "unit": "ns/iter",
            "extra": "iterations: 18582\ncpu: 37151.921536971226 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/16",
            "value": 2314792.7913908307,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 2314584.8741722717 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/16",
            "value": 2621125.1902985033,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 2620878.1977611952 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/16",
            "value": 2560590.8566177506,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 2560225.5220588055 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/16",
            "value": 7063767.262135994,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 7063117.72815527 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/16",
            "value": 45407972.39999771,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 45402393.333332226 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.372183844274907,
            "unit": "ns/iter",
            "extra": "iterations: 160077174\ncpu: 4.371874206124989 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.393546338242539,
            "unit": "ns/iter",
            "extra": "iterations: 160057970\ncpu: 4.393387664481659 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.379027598813185,
            "unit": "ns/iter",
            "extra": "iterations: 159173438\ncpu: 4.377856498896435 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.38501350943861,
            "unit": "ns/iter",
            "extra": "iterations: 159967418\ncpu: 4.383931889180218 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.372803120547025,
            "unit": "ns/iter",
            "extra": "iterations: 159937599\ncpu: 4.372563233239465 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 6.024807716914906,
            "unit": "ns/iter",
            "extra": "iterations: 119195612\ncpu: 6.023415853597228 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 6.023195067383872,
            "unit": "ns/iter",
            "extra": "iterations: 120558822\ncpu: 6.022448917093675 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 6.009184018387498,
            "unit": "ns/iter",
            "extra": "iterations: 120490068\ncpu: 6.008572922375662 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 6.011912851840513,
            "unit": "ns/iter",
            "extra": "iterations: 120311158\ncpu: 6.011192403284688 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 6.010300195973051,
            "unit": "ns/iter",
            "extra": "iterations: 120669840\ncpu: 6.009722048193431 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 59.571740393641235,
            "unit": "ns/iter",
            "extra": "iterations: 11755783\ncpu: 59.56701216754466 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 64.44677594148327,
            "unit": "ns/iter",
            "extra": "iterations: 10867219\ncpu: 64.44240527406362 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 63.384756662454464,
            "unit": "ns/iter",
            "extra": "iterations: 11083452\ncpu: 63.37540064232771 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 72.3313654657758,
            "unit": "ns/iter",
            "extra": "iterations: 9659356\ncpu: 72.32201608471672 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 83.22743123587752,
            "unit": "ns/iter",
            "extra": "iterations: 8436594\ncpu: 83.21847868938609 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.6239430844562249,
            "unit": "ns/iter",
            "extra": "iterations: 1121742775\ncpu: 0.6238909298970119 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.0659778226163834,
            "unit": "ns/iter",
            "extra": "iterations: 656441275\ncpu: 1.0658804475693615 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7297001923389129,
            "unit": "ns/iter",
            "extra": "iterations: 970718323\ncpu: 0.7296299155156606 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.8808204286858583,
            "unit": "ns/iter",
            "extra": "iterations: 788708551\ncpu: 0.8807198516096763 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.563019625205003,
            "unit": "ns/iter",
            "extra": "iterations: 107214776\ncpu: 6.554150717061775 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.8473864315695705,
            "unit": "ns/iter",
            "extra": "iterations: 825476760\ncpu: 0.8472848696552103 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.821931380905155,
            "unit": "ns/iter",
            "extra": "iterations: 851821583\ncpu: 0.8218412763556419 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.6795130908673548,
            "unit": "ns/iter",
            "extra": "iterations: 1031071562\ncpu: 0.6794517381908183 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 16.212852856375633,
            "unit": "ns/iter",
            "extra": "iterations: 44848630\ncpu: 16.21145270212236 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 24.27447043500938,
            "unit": "ns/iter",
            "extra": "iterations: 25982977\ncpu: 24.271533088760602 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 118.2030304757932,
            "unit": "ns/iter",
            "extra": "iterations: 6086239\ncpu: 118.19444372788878 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 2723.012556108879,
            "unit": "ns/iter",
            "extra": "iterations: 260431\ncpu: 2722.903333320618 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 6569.304544681482,
            "unit": "ns/iter",
            "extra": "iterations: 111757\ncpu: 6568.8510697319 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.9379110577733953,
            "unit": "ns/iter",
            "extra": "iterations: 746607034\ncpu: 0.9378485643895281 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.937641743512784,
            "unit": "ns/iter",
            "extra": "iterations: 746697753\ncpu: 0.9375939798763714 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 0.9379965293083318,
            "unit": "ns/iter",
            "extra": "iterations: 746942187\ncpu: 0.9379742344102123 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.9390092112929278,
            "unit": "ns/iter",
            "extra": "iterations: 724580907\ncpu: 0.9389431800195104 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.9393835035414374,
            "unit": "ns/iter",
            "extra": "iterations: 745483666\ncpu: 0.9393107910160534 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.2505691478876306,
            "unit": "ns/iter",
            "extra": "iterations: 215668902\ncpu: 3.250407993452768 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.1922326576843927,
            "unit": "ns/iter",
            "extra": "iterations: 589947142\ncpu: 1.1921720776807732 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.0099577684532883,
            "unit": "ns/iter",
            "extra": "iterations: 691717028\ncpu: 1.0098716074978507 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.9487305942091412,
            "unit": "ns/iter",
            "extra": "iterations: 738755256\ncpu: 0.9486747232022086 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.9446639350418219,
            "unit": "ns/iter",
            "extra": "iterations: 741126660\ncpu: 0.9445979139381961 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 24.655139552774106,
            "unit": "ns/iter",
            "extra": "iterations: 28374463\ncpu: 24.653468895605574 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 28.584295456434972,
            "unit": "ns/iter",
            "extra": "iterations: 22772034\ncpu: 28.582966413979108 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 30.326306354201932,
            "unit": "ns/iter",
            "extra": "iterations: 23602366\ncpu: 30.32368784553233 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.02601501241059,
            "unit": "ns/iter",
            "extra": "iterations: 19263262\ncpu: 36.02398306164381 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 41.647309060685586,
            "unit": "ns/iter",
            "extra": "iterations: 16789955\ncpu: 41.64517462971106 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 15.827025355702878,
            "unit": "ns/iter",
            "extra": "iterations: 44321548\ncpu: 15.826124981013526 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 8.168904825080746,
            "unit": "ns/iter",
            "extra": "iterations: 85697315\ncpu: 8.168358880321748 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 8.169539693109508,
            "unit": "ns/iter",
            "extra": "iterations: 85761132\ncpu: 8.1690312226755 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 8.166224797444677,
            "unit": "ns/iter",
            "extra": "iterations: 85791598\ncpu: 8.165729259408295 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 8.090527571889526,
            "unit": "ns/iter",
            "extra": "iterations: 84649658\ncpu: 8.089978284377601 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.2435675021169965,
            "unit": "ns/iter",
            "extra": "iterations: 560404343\ncpu: 1.2435048348652444 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 4.386574988741795,
            "unit": "ns/iter",
            "extra": "iterations: 159911851\ncpu: 4.386232869007272 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.179369416134492,
            "unit": "ns/iter",
            "extra": "iterations: 85599526\ncpu: 8.178877240511632 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 57.480527065798846,
            "unit": "ns/iter",
            "extra": "iterations: 12176696\ncpu: 57.47521068112565 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 115.81157814737125,
            "unit": "ns/iter",
            "extra": "iterations: 6046045\ncpu: 115.79797322051195 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.932955237011342,
            "unit": "ns/iter",
            "extra": "iterations: 751203640\ncpu: 0.932883216593578 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.3804962362915987,
            "unit": "ns/iter",
            "extra": "iterations: 208037908\ncpu: 3.380313942591698 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.401442206707803,
            "unit": "ns/iter",
            "extra": "iterations: 109332039\ncpu: 6.400980686000026 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.13724322671396,
            "unit": "ns/iter",
            "extra": "iterations: 18357926\ncpu: 38.134680464449346 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 72.43084911902884,
            "unit": "ns/iter",
            "extra": "iterations: 9673897\ncpu: 72.42671510767725 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.2486166770454272,
            "unit": "ns/iter",
            "extra": "iterations: 560415048\ncpu: 1.2485461685889734 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.2485534273485739,
            "unit": "ns/iter",
            "extra": "iterations: 560815075\ncpu: 1.248470902819414 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.2485675247098975,
            "unit": "ns/iter",
            "extra": "iterations: 560573893\ncpu: 1.248458245628687 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.2491066792405459,
            "unit": "ns/iter",
            "extra": "iterations: 560852577\ncpu: 1.2490317558084727 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.2486120107007719,
            "unit": "ns/iter",
            "extra": "iterations: 560724784\ncpu: 1.248535434809704 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.4740845792737325,
            "unit": "ns/iter",
            "extra": "iterations: 156632842\ncpu: 4.473758127941135 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.474369011748271,
            "unit": "ns/iter",
            "extra": "iterations: 156595269\ncpu: 4.474064315442432 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.4752473086232945,
            "unit": "ns/iter",
            "extra": "iterations: 156626160\ncpu: 4.474920753978824 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.4741059203201345,
            "unit": "ns/iter",
            "extra": "iterations: 156641520\ncpu: 4.473835570543543 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.47579443409197,
            "unit": "ns/iter",
            "extra": "iterations: 156609373\ncpu: 4.4754057217253065 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.093517273212923,
            "unit": "ns/iter",
            "extra": "iterations: 46586816\ncpu: 15.092383476046377 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.776565179728212,
            "unit": "ns/iter",
            "extra": "iterations: 39513689\ncpu: 17.775076581687646 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.72979130129021,
            "unit": "ns/iter",
            "extra": "iterations: 39733595\ncpu: 17.72777487161707 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 27.054384243535615,
            "unit": "ns/iter",
            "extra": "iterations: 26294730\ncpu: 27.05123209099249 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 40.02625603773202,
            "unit": "ns/iter",
            "extra": "iterations: 17823748\ncpu: 40.02324135193104 ns\nthreads: 1"
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
          "id": "a58930335b715a113734b355f57a5cfddeacd5d1",
          "message": "Added RuntimeMultiTruncators and other fixes for pyrauli\n\nFixes for pyrauli",
          "timestamp": "2025-08-15T21:32:15+02:00",
          "tree_id": "3dfe9c28504ea7fe137be563ec77dfc884b08605",
          "url": "https://github.com/zeFresk/ProPauli/commit/a58930335b715a113734b355f57a5cfddeacd5d1"
        },
        "date": 1755286643285,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 63.256962795287386,
            "unit": "ns/iter",
            "extra": "iterations: 11031130\ncpu: 63.234226683939 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 41.258323932361655,
            "unit": "ns/iter",
            "extra": "iterations: 13770745\ncpu: 41.25403520288843 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 82.05500919999622,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 82.04780110000003 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 72.7456815633493,
            "unit": "ns/iter",
            "extra": "iterations: 10681817\ncpu: 72.72558217389418 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 204.46450567476649,
            "unit": "ns/iter",
            "extra": "iterations: 3423829\ncpu: 204.40298507898623 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 1028.6483341938385,
            "unit": "ns/iter",
            "extra": "iterations: 679941\ncpu: 1028.4037938585845 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 7488.72215988598,
            "unit": "ns/iter",
            "extra": "iterations: 93579\ncpu: 7487.97883072056 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 14818.341286965504,
            "unit": "ns/iter",
            "extra": "iterations: 47274\ncpu: 14817.548356390407 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 650.797848926335,
            "unit": "ns/iter",
            "extra": "iterations: 1079089\ncpu: 650.5065226315902 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 1351.4626151966634,
            "unit": "ns/iter",
            "extra": "iterations: 517376\ncpu: 1351.0628324468084 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 2792.1165496241874,
            "unit": "ns/iter",
            "extra": "iterations: 250906\ncpu: 2791.122268897512 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 654.0315964261325,
            "unit": "ns/iter",
            "extra": "iterations: 1035845\ncpu: 653.8224628202096 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 1356.8572208719445,
            "unit": "ns/iter",
            "extra": "iterations: 503568\ncpu: 1356.7643853461695 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 2840.548932185913,
            "unit": "ns/iter",
            "extra": "iterations: 246719\ncpu: 2840.307925210462 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 12478.631172428235,
            "unit": "ns/iter",
            "extra": "iterations: 56319\ncpu: 12477.878034056013 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 502116.2625178949,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 502083.06366237457 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 288912565.49997026,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 288890149.50000024 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 11028.088316117828,
            "unit": "ns/iter",
            "extra": "iterations: 63318\ncpu: 11027.452430588477 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 118896.85194804361,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 118671.7090909087 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 4691511.132743504,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 4691343.64601769 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 12723.31067149284,
            "unit": "ns/iter",
            "extra": "iterations: 54997\ncpu: 12721.813826208674 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 393.54628887590064,
            "unit": "ns/iter",
            "extra": "iterations: 1766904\ncpu: 393.52753856463056 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 413.262605070294,
            "unit": "ns/iter",
            "extra": "iterations: 1708737\ncpu: 413.2352427553213 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 11363.029918862321,
            "unit": "ns/iter",
            "extra": "iterations: 61132\ncpu: 11362.57953281425 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 292384.1213942069,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 292355.233974359 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 424.7036565614352,
            "unit": "ns/iter",
            "extra": "iterations: 1626282\ncpu: 424.6937419217574 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 470.7721662470953,
            "unit": "ns/iter",
            "extra": "iterations: 1490047\ncpu: 470.7376472017327 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 740.2042146951336,
            "unit": "ns/iter",
            "extra": "iterations: 948918\ncpu: 740.1791587892732 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 1539.2085535078884,
            "unit": "ns/iter",
            "extra": "iterations: 453428\ncpu: 1539.1044796527776 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 15.878541927044699,
            "unit": "ns/iter",
            "extra": "iterations: 44084159\ncpu: 15.877420707969065 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 27.692486938583055,
            "unit": "ns/iter",
            "extra": "iterations: 28170953\ncpu: 27.690939884071412 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 111.00150680612413,
            "unit": "ns/iter",
            "extra": "iterations: 6239688\ncpu: 110.99501385325682 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 2688.4092437411705,
            "unit": "ns/iter",
            "extra": "iterations: 269458\ncpu: 2688.2378960728583 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 6384.303981543079,
            "unit": "ns/iter",
            "extra": "iterations: 104457\ncpu: 6383.889523918984 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 3.738985196495122,
            "unit": "ns/iter",
            "extra": "iterations: 187150615\ncpu: 3.7386819701340452 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 3.738205306350236,
            "unit": "ns/iter",
            "extra": "iterations: 187232523\ncpu: 3.738058382089957 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 3.738794831001832,
            "unit": "ns/iter",
            "extra": "iterations: 187222589\ncpu: 3.7385046470006924 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 3.739881133475181,
            "unit": "ns/iter",
            "extra": "iterations: 187195176\ncpu: 3.7396880996548734 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 3.7401317172789414,
            "unit": "ns/iter",
            "extra": "iterations: 187216895\ncpu: 3.739864796924424 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 3.7378912631586405,
            "unit": "ns/iter",
            "extra": "iterations: 187293669\ncpu: 3.7375909166475942 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 3.742517868723292,
            "unit": "ns/iter",
            "extra": "iterations: 187117039\ncpu: 3.742373322827097 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 3.7415927532884226,
            "unit": "ns/iter",
            "extra": "iterations: 187081491\ncpu: 3.7411299603123163 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 3.779883736875353,
            "unit": "ns/iter",
            "extra": "iterations: 187140334\ncpu: 3.7796734722083083 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 3.7401648285723468,
            "unit": "ns/iter",
            "extra": "iterations: 187166336\ncpu: 3.7399171611715576 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.0489192533285205,
            "unit": "ns/iter",
            "extra": "iterations: 172708605\ncpu: 4.048731897290222 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.0489740963735885,
            "unit": "ns/iter",
            "extra": "iterations: 172774806\ncpu: 4.048805483827346 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.05107466646638,
            "unit": "ns/iter",
            "extra": "iterations: 172050032\ncpu: 4.050924181170748 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.052449319525297,
            "unit": "ns/iter",
            "extra": "iterations: 172658751\ncpu: 4.052124789203429 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.05162565629468,
            "unit": "ns/iter",
            "extra": "iterations: 171451709\ncpu: 4.051617729864699 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 74.5400141768255,
            "unit": "ns/iter",
            "extra": "iterations: 9413951\ncpu: 74.53755336096386 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 79.80879603965325,
            "unit": "ns/iter",
            "extra": "iterations: 8775995\ncpu: 79.80588354938646 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 81.24649774747475,
            "unit": "ns/iter",
            "extra": "iterations: 8637227\ncpu: 81.238580738934 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 89.81113039483951,
            "unit": "ns/iter",
            "extra": "iterations: 7629343\ncpu: 89.8076684977988 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 104.38745331005015,
            "unit": "ns/iter",
            "extra": "iterations: 6948765\ncpu: 104.38724938891966 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 73.63304394344452,
            "unit": "ns/iter",
            "extra": "iterations: 9533275\ncpu: 73.63048217952407 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 79.61246479221259,
            "unit": "ns/iter",
            "extra": "iterations: 8709010\ncpu: 79.60966539250727 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 79.85613573591816,
            "unit": "ns/iter",
            "extra": "iterations: 8810402\ncpu: 79.85213841547717 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 92.63997193159366,
            "unit": "ns/iter",
            "extra": "iterations: 7719712\ncpu: 92.63817976629137 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 100.84668865299444,
            "unit": "ns/iter",
            "extra": "iterations: 7030432\ncpu: 100.8456749172723 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 9818.765844231933,
            "unit": "ns/iter",
            "extra": "iterations: 71414\ncpu: 9818.277998711725 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 10428.573676024766,
            "unit": "ns/iter",
            "extra": "iterations: 67505\ncpu: 10427.664765572796 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 10040.090577263558,
            "unit": "ns/iter",
            "extra": "iterations: 69587\ncpu: 10040.069581962149 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 11259.557439552043,
            "unit": "ns/iter",
            "extra": "iterations: 62161\ncpu: 11258.973665159903 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 16829.564066472936,
            "unit": "ns/iter",
            "extra": "iterations: 40497\ncpu: 16828.79452798985 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 2508154.5161290993,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 2508001.204301064 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 2498386.6999999043,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 2498341.749999966 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 2414601.337931078,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 2414524.593103414 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 3328411.423809658,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 3328024.833333353 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 33340641.761908174,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 33340223.619047396 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 105041.62457939015,
            "unit": "ns/iter",
            "extra": "iterations: 6241\ncpu: 105022.50136196185 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 104899.26577724537,
            "unit": "ns/iter",
            "extra": "iterations: 6671\ncpu: 104891.41253185428 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 123020.02497343841,
            "unit": "ns/iter",
            "extra": "iterations: 5646\ncpu: 123010.17977329133 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 146074.91956657078,
            "unit": "ns/iter",
            "extra": "iterations: 4799\ncpu: 146067.14794748896 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 173045.44685573288,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 173035.54771886492 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 191.03644978562124,
            "unit": "ns/iter",
            "extra": "iterations: 3670584\ncpu: 191.0265036844263 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 210.45024542550516,
            "unit": "ns/iter",
            "extra": "iterations: 3304058\ncpu: 210.44660142164662 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 249.9120999281529,
            "unit": "ns/iter",
            "extra": "iterations: 2840521\ncpu: 249.90523111781175 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 414.71138159213297,
            "unit": "ns/iter",
            "extra": "iterations: 1706589\ncpu: 414.6998170033879 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 604.957931511655,
            "unit": "ns/iter",
            "extra": "iterations: 1287781\ncpu: 604.914434985453 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 331.8073365848756,
            "unit": "ns/iter",
            "extra": "iterations: 2113681\ncpu: 331.7938582028282 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 379.79767860329133,
            "unit": "ns/iter",
            "extra": "iterations: 1805034\ncpu: 379.7279447367677 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 437.40678755922715,
            "unit": "ns/iter",
            "extra": "iterations: 1626623\ncpu: 437.3559238987765 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 965.4111723084042,
            "unit": "ns/iter",
            "extra": "iterations: 765285\ncpu: 965.3079976740764 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 1683.5886660442159,
            "unit": "ns/iter",
            "extra": "iterations: 475368\ncpu: 1683.527435586754 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 1108.7654623188753,
            "unit": "ns/iter",
            "extra": "iterations: 631988\ncpu: 1108.6564713254136 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 1412.5889536087952,
            "unit": "ns/iter",
            "extra": "iterations: 459245\ncpu: 1412.5338501235776 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 1822.1419619911126,
            "unit": "ns/iter",
            "extra": "iterations: 363865\ncpu: 1822.022563313297 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 5663.627767725645,
            "unit": "ns/iter",
            "extra": "iterations: 130432\ncpu: 5663.316463751224 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 7996.815070104946,
            "unit": "ns/iter",
            "extra": "iterations: 72249\ncpu: 7995.986934075311 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 21647.577724135434,
            "unit": "ns/iter",
            "extra": "iterations: 32313\ncpu: 21646.23037167723 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 32533.269135032933,
            "unit": "ns/iter",
            "extra": "iterations: 22498\ncpu: 32531.175837852254 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 76324.54380000127,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 76321.83990000101 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 152108.4829268374,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 152095.06803594445 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 449351.9880909511,
            "unit": "ns/iter",
            "extra": "iterations: 2771\ncpu: 449334.4492962821 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/16",
            "value": 5322736.5801527435,
            "unit": "ns/iter",
            "extra": "iterations: 131\ncpu: 5322252.9465649715 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/16",
            "value": 6096257.263636124,
            "unit": "ns/iter",
            "extra": "iterations: 110\ncpu: 6095999.0636364 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/16",
            "value": 12152835.509089693,
            "unit": "ns/iter",
            "extra": "iterations: 55\ncpu: 12109615.41818175 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/16",
            "value": 102199331.5714391,
            "unit": "ns/iter",
            "extra": "iterations: 7\ncpu: 102191433.14285718 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/16",
            "value": 321662535.8000101,
            "unit": "ns/iter",
            "extra": "iterations: 5\ncpu: 321617686.19999975 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 50.61381586670303,
            "unit": "ns/iter",
            "extra": "iterations: 13895053\ncpu: 50.612666248916156 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 54.7976200121053,
            "unit": "ns/iter",
            "extra": "iterations: 12602333\ncpu: 54.794217308810865 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 52.98142605512818,
            "unit": "ns/iter",
            "extra": "iterations: 13244467\ncpu: 52.978107310773986 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 59.748445782958036,
            "unit": "ns/iter",
            "extra": "iterations: 11758332\ncpu: 59.74547580388177 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 67.83877102120744,
            "unit": "ns/iter",
            "extra": "iterations: 10119068\ncpu: 67.83265929233742 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 80.03439877340737,
            "unit": "ns/iter",
            "extra": "iterations: 8754004\ncpu: 80.03187387165883 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 88.79318807201594,
            "unit": "ns/iter",
            "extra": "iterations: 7883172\ncpu: 88.78991540461226 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 84.98985306997966,
            "unit": "ns/iter",
            "extra": "iterations: 8243380\ncpu: 84.98591354517166 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 102.33916046021835,
            "unit": "ns/iter",
            "extra": "iterations: 6910953\ncpu: 102.33471939398274 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 121.08196252330887,
            "unit": "ns/iter",
            "extra": "iterations: 5652315\ncpu: 121.07430796054393 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 308.0541236521728,
            "unit": "ns/iter",
            "extra": "iterations: 2351726\ncpu: 308.0309585385396 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 330.33513416225054,
            "unit": "ns/iter",
            "extra": "iterations: 2116803\ncpu: 330.29703803329704 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 326.2648262366876,
            "unit": "ns/iter",
            "extra": "iterations: 2235311\ncpu: 326.2532797449671 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 556.1302503327009,
            "unit": "ns/iter",
            "extra": "iterations: 1292680\ncpu: 556.077896308445 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 726.5991593920567,
            "unit": "ns/iter",
            "extra": "iterations: 952406\ncpu: 726.4565783919908 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 9632.157608548081,
            "unit": "ns/iter",
            "extra": "iterations: 74114\ncpu: 9631.477008392296 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 9611.451628222596,
            "unit": "ns/iter",
            "extra": "iterations: 73700\ncpu: 9611.008100407067 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 9104.49655837896,
            "unit": "ns/iter",
            "extra": "iterations: 77725\ncpu: 9103.929250562898 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 10284.197204377537,
            "unit": "ns/iter",
            "extra": "iterations: 70825\ncpu: 10282.167186727778 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 19922.966002410325,
            "unit": "ns/iter",
            "extra": "iterations: 35679\ncpu: 19921.668236217585 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/16",
            "value": 2275424.828947486,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 2275211.3552631894 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/16",
            "value": 2474655.795139095,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 2474471.770833375 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/16",
            "value": 2178245.9458596194,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2178107.2579617766 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/16",
            "value": 4309195.19753085,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 4308846.395061582 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/16",
            "value": 39770838.55555621,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 39767111.77777758 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 52.942634907223116,
            "unit": "ns/iter",
            "extra": "iterations: 13227016\ncpu: 52.93558494221273 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 61.62971698590786,
            "unit": "ns/iter",
            "extra": "iterations: 11343075\ncpu: 61.61294939863998 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 125.21035792555392,
            "unit": "ns/iter",
            "extra": "iterations: 5591023\ncpu: 125.17566481125303 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 196.59652429810103,
            "unit": "ns/iter",
            "extra": "iterations: 3559166\ncpu: 196.55276517027116 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 271.1143081273432,
            "unit": "ns/iter",
            "extra": "iterations: 2538061\ncpu: 271.0640752921208 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 86.12516730414474,
            "unit": "ns/iter",
            "extra": "iterations: 8148334\ncpu: 86.12073560067718 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 103.88300980648607,
            "unit": "ns/iter",
            "extra": "iterations: 6729735\ncpu: 103.86569991240304 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 168.39129884575678,
            "unit": "ns/iter",
            "extra": "iterations: 4124947\ncpu: 168.36947214109938 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 314.25671725199095,
            "unit": "ns/iter",
            "extra": "iterations: 2190293\ncpu: 314.2229016848387 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 463.1821555151302,
            "unit": "ns/iter",
            "extra": "iterations: 1502156\ncpu: 463.17015476422176 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 308.5131678447522,
            "unit": "ns/iter",
            "extra": "iterations: 2267911\ncpu: 308.499656732563 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 377.675374204082,
            "unit": "ns/iter",
            "extra": "iterations: 1855672\ncpu: 377.65523918020057 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 465.1167115141279,
            "unit": "ns/iter",
            "extra": "iterations: 1507332\ncpu: 465.10263299657134 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 1217.1718319864688,
            "unit": "ns/iter",
            "extra": "iterations: 574311\ncpu: 1217.1073407961765 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 1997.91165356368,
            "unit": "ns/iter",
            "extra": "iterations: 355136\ncpu: 1997.7769981077947 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 9296.546273023914,
            "unit": "ns/iter",
            "extra": "iterations: 75195\ncpu: 9296.325540262023 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 10580.199629763254,
            "unit": "ns/iter",
            "extra": "iterations: 66984\ncpu: 10579.142332497418 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 10830.612964567046,
            "unit": "ns/iter",
            "extra": "iterations: 64684\ncpu: 10830.124358419303 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 19562.096006701046,
            "unit": "ns/iter",
            "extra": "iterations: 35810\ncpu: 19560.790756771497 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 36739.96390840086,
            "unit": "ns/iter",
            "extra": "iterations: 18647\ncpu: 36738.561859815316 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/16",
            "value": 2302591.8704318358,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 2302390.568106312 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/16",
            "value": 2587934.211111234,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 2587772.096296282 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/16",
            "value": 2544784.447272832,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 2544584.7345454036 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/16",
            "value": 6847914.524271499,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 6846981.359223423 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/16",
            "value": 44239785.187500045,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 44234573.2499998 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.402273029810257,
            "unit": "ns/iter",
            "extra": "iterations: 160190508\ncpu: 4.401427767492956 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.378247496961196,
            "unit": "ns/iter",
            "extra": "iterations: 160227979\ncpu: 4.377936415212462 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.369559384845137,
            "unit": "ns/iter",
            "extra": "iterations: 160117257\ncpu: 4.3693497946945765 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.379457751245224,
            "unit": "ns/iter",
            "extra": "iterations: 159455931\ncpu: 4.3787912849725945 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.371192604370941,
            "unit": "ns/iter",
            "extra": "iterations: 160097166\ncpu: 4.370842554452342 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 6.01008615651411,
            "unit": "ns/iter",
            "extra": "iterations: 120547009\ncpu: 6.00940282143383 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 6.013584885141663,
            "unit": "ns/iter",
            "extra": "iterations: 120574446\ncpu: 6.01268267075426 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 6.015044123615546,
            "unit": "ns/iter",
            "extra": "iterations: 120521743\ncpu: 6.014428906823924 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 6.011964044609075,
            "unit": "ns/iter",
            "extra": "iterations: 120254901\ncpu: 6.011506799211575 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 6.0162784458941765,
            "unit": "ns/iter",
            "extra": "iterations: 120529872\ncpu: 6.016009964733113 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 59.598621960098704,
            "unit": "ns/iter",
            "extra": "iterations: 11768890\ncpu: 59.598534271285224 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 64.61533244771707,
            "unit": "ns/iter",
            "extra": "iterations: 9879388\ncpu: 64.60929988780762 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 63.31801557535619,
            "unit": "ns/iter",
            "extra": "iterations: 11091114\ncpu: 63.31572869957095 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 71.99388690338954,
            "unit": "ns/iter",
            "extra": "iterations: 9695250\ncpu: 71.98877470926568 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 82.06573175471466,
            "unit": "ns/iter",
            "extra": "iterations: 8413270\ncpu: 82.05915238664697 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.6250486973412259,
            "unit": "ns/iter",
            "extra": "iterations: 1108733529\ncpu: 0.6250329099590349 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.065208504499009,
            "unit": "ns/iter",
            "extra": "iterations: 657560104\ncpu: 1.0651658239898554 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7294719731281972,
            "unit": "ns/iter",
            "extra": "iterations: 967941969\ncpu: 0.7294507301191223 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.8688825353960759,
            "unit": "ns/iter",
            "extra": "iterations: 790321185\ncpu: 0.8688243932117277 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.5325908759108104,
            "unit": "ns/iter",
            "extra": "iterations: 107263794\ncpu: 6.532404074761631 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.8472836570825601,
            "unit": "ns/iter",
            "extra": "iterations: 811927955\ncpu: 0.8472429145514674 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.8213455144844495,
            "unit": "ns/iter",
            "extra": "iterations: 852358420\ncpu: 0.8213055524224167 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.677892194307367,
            "unit": "ns/iter",
            "extra": "iterations: 1033226681\ncpu: 0.6778715502411871 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 15.878532163357248,
            "unit": "ns/iter",
            "extra": "iterations: 44024790\ncpu: 15.878265836134887 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 24.70903431677847,
            "unit": "ns/iter",
            "extra": "iterations: 24990545\ncpu: 24.70816090645535 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 117.49743084069824,
            "unit": "ns/iter",
            "extra": "iterations: 6173031\ncpu: 117.49380911905033 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 2727.130899985895,
            "unit": "ns/iter",
            "extra": "iterations: 258793\ncpu: 2726.928784781685 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 6623.978466532362,
            "unit": "ns/iter",
            "extra": "iterations: 115216\ncpu: 6623.839076170097 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.9384238149866192,
            "unit": "ns/iter",
            "extra": "iterations: 746988856\ncpu: 0.9383796014755825 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.9382447904573789,
            "unit": "ns/iter",
            "extra": "iterations: 746544289\ncpu: 0.9382341065635136 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 0.9382990663048941,
            "unit": "ns/iter",
            "extra": "iterations: 746018192\ncpu: 0.9382440314538277 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.9391025133927,
            "unit": "ns/iter",
            "extra": "iterations: 745252547\ncpu: 0.9390729126887383 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.9391649257986897,
            "unit": "ns/iter",
            "extra": "iterations: 744484980\ncpu: 0.9390493049302165 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.253709805388491,
            "unit": "ns/iter",
            "extra": "iterations: 215125166\ncpu: 3.253674881533778 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.1913229049364251,
            "unit": "ns/iter",
            "extra": "iterations: 587701133\ncpu: 1.1912478616916244 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.0124864422874402,
            "unit": "ns/iter",
            "extra": "iterations: 690248255\ncpu: 1.0124782423390664 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.9494522404157608,
            "unit": "ns/iter",
            "extra": "iterations: 738271336\ncpu: 0.9493784193187446 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.944916247475321,
            "unit": "ns/iter",
            "extra": "iterations: 740690805\ncpu: 0.9448822103306794 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 24.673543807883366,
            "unit": "ns/iter",
            "extra": "iterations: 28363239\ncpu: 24.672608547987267 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 28.691025326197686,
            "unit": "ns/iter",
            "extra": "iterations: 22820796\ncpu: 28.690422630305378 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 30.15001283455437,
            "unit": "ns/iter",
            "extra": "iterations: 23752281\ncpu: 30.147527346952003 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.18575596390245,
            "unit": "ns/iter",
            "extra": "iterations: 19285868\ncpu: 36.184475181516646 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 42.53576158126635,
            "unit": "ns/iter",
            "extra": "iterations: 16756334\ncpu: 42.53382780505595 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 15.818703561121646,
            "unit": "ns/iter",
            "extra": "iterations: 44268404\ncpu: 15.818674759541443 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 8.161446022338051,
            "unit": "ns/iter",
            "extra": "iterations: 85755826\ncpu: 8.161090967743647 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 8.164443814201752,
            "unit": "ns/iter",
            "extra": "iterations: 85850502\ncpu: 8.164118155068945 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 8.162535944417492,
            "unit": "ns/iter",
            "extra": "iterations: 85651688\ncpu: 8.162172624081906 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 8.167584156961148,
            "unit": "ns/iter",
            "extra": "iterations: 85500087\ncpu: 8.167209689505983 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.2452025186035527,
            "unit": "ns/iter",
            "extra": "iterations: 563517662\ncpu: 1.245200783076756 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 4.38700019248595,
            "unit": "ns/iter",
            "extra": "iterations: 159648210\ncpu: 4.386828308316106 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.165719110099552,
            "unit": "ns/iter",
            "extra": "iterations: 86090023\ncpu: 8.165641063889735 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 57.47500935351787,
            "unit": "ns/iter",
            "extra": "iterations: 12193282\ncpu: 57.47097565692244 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 115.79080625528564,
            "unit": "ns/iter",
            "extra": "iterations: 6046720\ncpu: 115.786327628864 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.9322810788697067,
            "unit": "ns/iter",
            "extra": "iterations: 750871797\ncpu: 0.9322547294981404 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.3825199539320274,
            "unit": "ns/iter",
            "extra": "iterations: 207846752\ncpu: 3.382337622480583 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.40161509889176,
            "unit": "ns/iter",
            "extra": "iterations: 109340797\ncpu: 6.401443113680668 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.123963699004406,
            "unit": "ns/iter",
            "extra": "iterations: 18360375\ncpu: 38.122734312343205 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 72.42078968245167,
            "unit": "ns/iter",
            "extra": "iterations: 9676877\ncpu: 72.41783986713793 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.2496745210647644,
            "unit": "ns/iter",
            "extra": "iterations: 560355772\ncpu: 1.249634298404248 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.2623967524846715,
            "unit": "ns/iter",
            "extra": "iterations: 559736230\ncpu: 1.2623599905262488 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.2501584001769714,
            "unit": "ns/iter",
            "extra": "iterations: 560460232\ncpu: 1.2500963511715926 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.2495123295693527,
            "unit": "ns/iter",
            "extra": "iterations: 560261055\ncpu: 1.2494665294913265 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.249326453499385,
            "unit": "ns/iter",
            "extra": "iterations: 560214105\ncpu: 1.2493005241273059 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.23333134967141,
            "unit": "ns/iter",
            "extra": "iterations: 165132311\ncpu: 4.233009383608839 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.232381027321234,
            "unit": "ns/iter",
            "extra": "iterations: 165515879\ncpu: 4.23237153578487 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.233536621089269,
            "unit": "ns/iter",
            "extra": "iterations: 165517921\ncpu: 4.23334505270888 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.233562900171772,
            "unit": "ns/iter",
            "extra": "iterations: 165511710\ncpu: 4.233399256161332 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.234356545946918,
            "unit": "ns/iter",
            "extra": "iterations: 165512424\ncpu: 4.234254517352799 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.087460311099779,
            "unit": "ns/iter",
            "extra": "iterations: 46623868\ncpu: 15.086348691618658 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.768046053540942,
            "unit": "ns/iter",
            "extra": "iterations: 39535029\ncpu: 17.767589724039087 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.70158008320956,
            "unit": "ns/iter",
            "extra": "iterations: 39761830\ncpu: 17.70059051607989 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 27.230388602360854,
            "unit": "ns/iter",
            "extra": "iterations: 26194334\ncpu: 27.229640387115502 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 40.31589056987195,
            "unit": "ns/iter",
            "extra": "iterations: 17811073\ncpu: 40.3138180950692 ns\nthreads: 1"
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
          "id": "32f0dfbbffa2428378b765c77c901bc82591a76b",
          "message": "Merge pull request #8 from zeFresk/optimize. (Perf ~x9, RAM usage divided by up to 4)\n\nMassive rework of the memory usage, merge algorithm and more. (see PR for full details)",
          "timestamp": "2025-08-28T22:14:39+02:00",
          "tree_id": "051e4149b378d461e8b97506d6e1784cad76bfb9",
          "url": "https://github.com/zeFresk/ProPauli/commit/32f0dfbbffa2428378b765c77c901bc82591a76b"
        },
        "date": 1756412465887,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 64.98555929140464,
            "unit": "ns/iter",
            "extra": "iterations: 11025013\ncpu: 64.97714769134514 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 40.68819880215826,
            "unit": "ns/iter",
            "extra": "iterations: 13822224\ncpu: 40.683904920076536 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 82.31400439999561,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 82.30835779999998 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 72.39383623047321,
            "unit": "ns/iter",
            "extra": "iterations: 9715678\ncpu: 72.38615730163143 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 224.71763545126444,
            "unit": "ns/iter",
            "extra": "iterations: 3148051\ncpu: 224.70173704301476 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 1199.2923053459363,
            "unit": "ns/iter",
            "extra": "iterations: 583561\ncpu: 1199.179408836437 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 8334.042839453834,
            "unit": "ns/iter",
            "extra": "iterations: 83988\ncpu: 8331.051626422824 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 16696.94711493233,
            "unit": "ns/iter",
            "extra": "iterations: 42564\ncpu: 16691.211728221042 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 465.8002555209087,
            "unit": "ns/iter",
            "extra": "iterations: 1490289\ncpu: 465.79201685042284 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 928.7722958166892,
            "unit": "ns/iter",
            "extra": "iterations: 755265\ncpu: 928.5719581868608 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 1892.8924143938173,
            "unit": "ns/iter",
            "extra": "iterations: 369687\ncpu: 1892.7447056564044 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 470.7438602552462,
            "unit": "ns/iter",
            "extra": "iterations: 1487684\ncpu: 470.6950918340189 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 933.065063418881,
            "unit": "ns/iter",
            "extra": "iterations: 755217\ncpu: 932.9730726400484 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 1880.5099190135209,
            "unit": "ns/iter",
            "extra": "iterations: 368333\ncpu: 1880.3990736643168 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 3813.8779111670055,
            "unit": "ns/iter",
            "extra": "iterations: 185922\ncpu: 3813.4509095212034 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 64065.35375331189,
            "unit": "ns/iter",
            "extra": "iterations: 10937\ncpu: 64061.245222638805 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 31439285.999999296,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 31437894.181818184 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 4201.07531543728,
            "unit": "ns/iter",
            "extra": "iterations: 174599\ncpu: 4200.778687163162 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 29587.21460986968,
            "unit": "ns/iter",
            "extra": "iterations: 38782\ncpu: 29584.896833582676 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 3023919.5125000505,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 3023731.115624995 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 3985.1258176756105,
            "unit": "ns/iter",
            "extra": "iterations: 172440\ncpu: 3984.6841220134565 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 367.565171044798,
            "unit": "ns/iter",
            "extra": "iterations: 1929699\ncpu: 367.5466805962987 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 394.83889198728406,
            "unit": "ns/iter",
            "extra": "iterations: 1758969\ncpu: 394.79300431104787 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 3836.0006003238273,
            "unit": "ns/iter",
            "extra": "iterations: 193229\ncpu: 3835.798798317008 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 30928.869910222278,
            "unit": "ns/iter",
            "extra": "iterations: 17265\ncpu: 30928.093368085574 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 400.2513285674949,
            "unit": "ns/iter",
            "extra": "iterations: 1681134\ncpu: 400.2461439718674 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 462.889604662836,
            "unit": "ns/iter",
            "extra": "iterations: 1530744\ncpu: 462.8549522323784 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 768.8908031391704,
            "unit": "ns/iter",
            "extra": "iterations: 929926\ncpu: 768.846270563466 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 1602.252194962444,
            "unit": "ns/iter",
            "extra": "iterations: 437479\ncpu: 1602.2112878561045 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 15.879373959248497,
            "unit": "ns/iter",
            "extra": "iterations: 43158724\ncpu: 15.878220635067962 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 27.74970711213597,
            "unit": "ns/iter",
            "extra": "iterations: 23444126\ncpu: 27.746485793498902 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 140.87772385486528,
            "unit": "ns/iter",
            "extra": "iterations: 5475099\ncpu: 140.86776038204997 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 3821.895165449071,
            "unit": "ns/iter",
            "extra": "iterations: 186160\ncpu: 3821.626740438332 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 8568.595276862821,
            "unit": "ns/iter",
            "extra": "iterations: 77999\ncpu: 8568.197040987758 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 4.686759989343706,
            "unit": "ns/iter",
            "extra": "iterations: 149566934\ncpu: 4.683611800185725 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 4.684746192831392,
            "unit": "ns/iter",
            "extra": "iterations: 149347535\ncpu: 4.684384265197257 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 4.6834245076576915,
            "unit": "ns/iter",
            "extra": "iterations: 149443754\ncpu: 4.682949111409481 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 4.718922651646221,
            "unit": "ns/iter",
            "extra": "iterations: 149058454\ncpu: 4.718539902473423 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 4.685525902087461,
            "unit": "ns/iter",
            "extra": "iterations: 149491002\ncpu: 4.68528392096803 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 5.002115510000067,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.00139058000002 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 4.325740084556325,
            "unit": "ns/iter",
            "extra": "iterations: 161751889\ncpu: 4.325499462945951 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 4.3482066758713085,
            "unit": "ns/iter",
            "extra": "iterations: 161104786\ncpu: 4.3477648268003515 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 4.104381441670908,
            "unit": "ns/iter",
            "extra": "iterations: 170986688\ncpu: 4.1040372160433884 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 4.093443204408016,
            "unit": "ns/iter",
            "extra": "iterations: 171197864\ncpu: 4.0931818051187765 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.6821519888770595,
            "unit": "ns/iter",
            "extra": "iterations: 149439620\ncpu: 4.681612807901935 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.684239074411129,
            "unit": "ns/iter",
            "extra": "iterations: 149354604\ncpu: 4.683661870912273 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.693203054445317,
            "unit": "ns/iter",
            "extra": "iterations: 149470419\ncpu: 4.6928942776296125 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.686187375566616,
            "unit": "ns/iter",
            "extra": "iterations: 149438118\ncpu: 4.685936080913441 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.842093338212308,
            "unit": "ns/iter",
            "extra": "iterations: 148927086\ncpu: 4.841503445518275 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 65.291631201294,
            "unit": "ns/iter",
            "extra": "iterations: 10745222\ncpu: 65.28739285237661 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 72.9400219991953,
            "unit": "ns/iter",
            "extra": "iterations: 9419437\ncpu: 72.93539295395297 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 73.9566711679525,
            "unit": "ns/iter",
            "extra": "iterations: 9449897\ncpu: 73.9499299304533 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 83.3924276581015,
            "unit": "ns/iter",
            "extra": "iterations: 8383800\ncpu: 83.38383918986642 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 115.64936914383354,
            "unit": "ns/iter",
            "extra": "iterations: 6063585\ncpu: 115.63851879705011 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 111.55804364338043,
            "unit": "ns/iter",
            "extra": "iterations: 6287872\ncpu: 111.5539169690459 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 115.87952716784648,
            "unit": "ns/iter",
            "extra": "iterations: 6094594\ncpu: 115.8709300406241 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 116.80851382047746,
            "unit": "ns/iter",
            "extra": "iterations: 5984129\ncpu: 116.80379584063292 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 128.51665329496282,
            "unit": "ns/iter",
            "extra": "iterations: 5434360\ncpu: 128.49836595293488 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 162.90773721524215,
            "unit": "ns/iter",
            "extra": "iterations: 4261404\ncpu: 162.88801132208772 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 2931.765803697025,
            "unit": "ns/iter",
            "extra": "iterations: 236084\ncpu: 2931.6384718997915 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 3732.2122811316253,
            "unit": "ns/iter",
            "extra": "iterations: 187784\ncpu: 3731.7922346951614 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 3675.4086150883236,
            "unit": "ns/iter",
            "extra": "iterations: 191153\ncpu: 3675.1448159328147 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 14463.567980951477,
            "unit": "ns/iter",
            "extra": "iterations: 49558\ncpu: 14462.944832317753 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 25720.563497009618,
            "unit": "ns/iter",
            "extra": "iterations: 27269\ncpu: 25717.68939088344 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 827765.4324645103,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 827701.9774881594 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 937667.7882822971,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 937615.1770971955 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 1244611.240641715,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1244477.4955436606 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 1513029.138322061,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 1512890.532879815 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 2412139.9468437624,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 2411801.368770797 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 81792.37457448027,
            "unit": "ns/iter",
            "extra": "iterations: 8519\ncpu: 81786.99460030516 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 81787.59605738753,
            "unit": "ns/iter",
            "extra": "iterations: 8573\ncpu: 81775.622652514 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 83824.74695950007,
            "unit": "ns/iter",
            "extra": "iterations: 8469\ncpu: 83818.5500059028 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 141103.24833568817,
            "unit": "ns/iter",
            "extra": "iterations: 4957\ncpu: 141090.8236836785 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 163625.68175645111,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 163608.064735174 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 123.6782558527687,
            "unit": "ns/iter",
            "extra": "iterations: 5610719\ncpu: 123.66744030488852 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 129.18556105378624,
            "unit": "ns/iter",
            "extra": "iterations: 5408608\ncpu: 129.17302585064277 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 140.30783634975768,
            "unit": "ns/iter",
            "extra": "iterations: 5002278\ncpu: 140.29771935905964 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 164.9838990474609,
            "unit": "ns/iter",
            "extra": "iterations: 4249997\ncpu: 164.96703174143397 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 227.82172911871953,
            "unit": "ns/iter",
            "extra": "iterations: 2988239\ncpu: 227.79924731589472 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 149.1732214677803,
            "unit": "ns/iter",
            "extra": "iterations: 4763099\ncpu: 149.16781742306708 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 167.45664539384262,
            "unit": "ns/iter",
            "extra": "iterations: 4180294\ncpu: 167.45086517838263 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 168.99850104061127,
            "unit": "ns/iter",
            "extra": "iterations: 3781957\ncpu: 168.99147901470226 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 220.2037937899871,
            "unit": "ns/iter",
            "extra": "iterations: 3042762\ncpu: 220.18155281287238 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 325.1675031918787,
            "unit": "ns/iter",
            "extra": "iterations: 2242411\ncpu: 325.13607362789065 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 282.42585314694037,
            "unit": "ns/iter",
            "extra": "iterations: 2485709\ncpu: 282.4010863701249 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 400.5034323067738,
            "unit": "ns/iter",
            "extra": "iterations: 1623398\ncpu: 400.4939029122869 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 806.4392447769803,
            "unit": "ns/iter",
            "extra": "iterations: 1249909\ncpu: 805.3471284709558 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 1049.6838222774816,
            "unit": "ns/iter",
            "extra": "iterations: 681332\ncpu: 1049.6266357664033 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 2796.864251847977,
            "unit": "ns/iter",
            "extra": "iterations: 292748\ncpu: 2796.736083594066 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 3012.915961828907,
            "unit": "ns/iter",
            "extra": "iterations: 232323\ncpu: 3012.6832082919072 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 5772.247956349053,
            "unit": "ns/iter",
            "extra": "iterations: 151200\ncpu: 5771.43470899468 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 154368.40332378444,
            "unit": "ns/iter",
            "extra": "iterations: 8725\ncpu: 154356.01822349604 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 89127.39181780019,
            "unit": "ns/iter",
            "extra": "iterations: 7113\ncpu: 89120.77168564496 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 144546.70957050732,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 144529.80334207942 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 84.65385345194802,
            "unit": "ns/iter",
            "extra": "iterations: 8242402\ncpu: 84.64854711041781 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 85.31591182840937,
            "unit": "ns/iter",
            "extra": "iterations: 8200918\ncpu: 85.30646983666948 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 85.70689853273016,
            "unit": "ns/iter",
            "extra": "iterations: 8163736\ncpu: 85.70179621192996 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 95.69676796506235,
            "unit": "ns/iter",
            "extra": "iterations: 7334667\ncpu: 95.68863371711379 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 126.99238898152045,
            "unit": "ns/iter",
            "extra": "iterations: 5501629\ncpu: 126.97971346304864 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 86.49349288228844,
            "unit": "ns/iter",
            "extra": "iterations: 8121645\ncpu: 86.48728391846862 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 86.1392904852461,
            "unit": "ns/iter",
            "extra": "iterations: 8131783\ncpu: 86.12999732039003 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 87.3967558362508,
            "unit": "ns/iter",
            "extra": "iterations: 7985047\ncpu: 87.39017278170154 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 96.39563377110231,
            "unit": "ns/iter",
            "extra": "iterations: 7261415\ncpu: 96.38281340482476 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 128.09731312127596,
            "unit": "ns/iter",
            "extra": "iterations: 5476466\ncpu: 128.0890820832262 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 92.30934920059624,
            "unit": "ns/iter",
            "extra": "iterations: 7696519\ncpu: 92.30632328718966 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 89.8303912287194,
            "unit": "ns/iter",
            "extra": "iterations: 7629629\ncpu: 89.81765129077635 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 93.0677978778537,
            "unit": "ns/iter",
            "extra": "iterations: 7273384\ncpu: 93.06006942573042 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 132.99655488993372,
            "unit": "ns/iter",
            "extra": "iterations: 4766466\ncpu: 132.98932983052612 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 1496.4187407960087,
            "unit": "ns/iter",
            "extra": "iterations: 467867\ncpu: 1496.2639339812529 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 644.7583543218112,
            "unit": "ns/iter",
            "extra": "iterations: 1486925\ncpu: 644.6953437463279 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 831.1297639225465,
            "unit": "ns/iter",
            "extra": "iterations: 2510405\ncpu: 831.0562510829948 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 1885.7183324889747,
            "unit": "ns/iter",
            "extra": "iterations: 380903\ncpu: 1885.6099794435881 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 11886.656266284956,
            "unit": "ns/iter",
            "extra": "iterations: 59485\ncpu: 11885.487887702859 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 1886.5979620654623,
            "unit": "ns/iter",
            "extra": "iterations: 271942\ncpu: 1886.3824344896768 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 86.74272411581909,
            "unit": "ns/iter",
            "extra": "iterations: 8072043\ncpu: 86.73534989840718 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 88.50927247511362,
            "unit": "ns/iter",
            "extra": "iterations: 7910671\ncpu: 88.49802564156703 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 159.11216682811585,
            "unit": "ns/iter",
            "extra": "iterations: 4412062\ncpu: 159.10037982240596 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 242.51571992102518,
            "unit": "ns/iter",
            "extra": "iterations: 2882330\ncpu: 242.4898987971498 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 365.5792606115302,
            "unit": "ns/iter",
            "extra": "iterations: 1913933\ncpu: 365.5525261333646 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 88.51926493080897,
            "unit": "ns/iter",
            "extra": "iterations: 7889543\ncpu: 88.51286595433706 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 90.98511376768582,
            "unit": "ns/iter",
            "extra": "iterations: 7697045\ncpu: 90.97944574833596 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 179.71898949401486,
            "unit": "ns/iter",
            "extra": "iterations: 3893495\ncpu: 179.6923168002043 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 333.5794543477051,
            "unit": "ns/iter",
            "extra": "iterations: 2098186\ncpu: 333.5493969552739 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 545.1254918904012,
            "unit": "ns/iter",
            "extra": "iterations: 1286872\ncpu: 545.0621134036644 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 107.79646442596275,
            "unit": "ns/iter",
            "extra": "iterations: 6500274\ncpu: 107.79147571317532 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 119.13904306370485,
            "unit": "ns/iter",
            "extra": "iterations: 5886536\ncpu: 119.1283000732531 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 300.04360927502,
            "unit": "ns/iter",
            "extra": "iterations: 2334962\ncpu: 300.0027375177914 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 949.3902082745955,
            "unit": "ns/iter",
            "extra": "iterations: 737296\ncpu: 949.3094930665295 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 3003.5482231542946,
            "unit": "ns/iter",
            "extra": "iterations: 233166\ncpu: 3003.244315208832 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 504.1416681840322,
            "unit": "ns/iter",
            "extra": "iterations: 1389451\ncpu: 504.083197608269 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 685.2916540019731,
            "unit": "ns/iter",
            "extra": "iterations: 1023185\ncpu: 685.2044390799152 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 4113.275834307788,
            "unit": "ns/iter",
            "extra": "iterations: 170171\ncpu: 4112.867903461866 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 22849.544852558025,
            "unit": "ns/iter",
            "extra": "iterations: 30656\ncpu: 22847.531086899045 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 24065.93393114754,
            "unit": "ns/iter",
            "extra": "iterations: 29106\ncpu: 24063.022916236863 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.683110261068742,
            "unit": "ns/iter",
            "extra": "iterations: 149356234\ncpu: 4.682659312365967 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.694765655785058,
            "unit": "ns/iter",
            "extra": "iterations: 149156125\ncpu: 4.694447117072626 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.688003916849967,
            "unit": "ns/iter",
            "extra": "iterations: 149526281\ncpu: 4.687054618846657 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.684772641250203,
            "unit": "ns/iter",
            "extra": "iterations: 149443028\ncpu: 4.684117515338271 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.683577613481037,
            "unit": "ns/iter",
            "extra": "iterations: 149288704\ncpu: 4.68323630835457 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 7.77754893000008,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.776619720000042 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 7.781402140000182,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.780850009999938 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 7.801587700000141,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.800264579999805 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 7.783350560000031,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.7823560300001295 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 7.774467849999951,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.773480179999979 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 54.94749750797806,
            "unit": "ns/iter",
            "extra": "iterations: 12776784\ncpu: 54.942031656793134 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 57.61044191042109,
            "unit": "ns/iter",
            "extra": "iterations: 12158618\ncpu: 57.607135778096385 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 56.99224875056107,
            "unit": "ns/iter",
            "extra": "iterations: 12294147\ncpu: 56.983396896099485 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 66.53437077205871,
            "unit": "ns/iter",
            "extra": "iterations: 10531128\ncpu: 66.53129569785888 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 97.5362399663601,
            "unit": "ns/iter",
            "extra": "iterations: 7219212\ncpu: 97.31832864861046 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.6232110684796458,
            "unit": "ns/iter",
            "extra": "iterations: 1124352359\ncpu: 0.6231573077528522 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.067935136240618,
            "unit": "ns/iter",
            "extra": "iterations: 656625709\ncpu: 1.0678363493684115 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7344379487466686,
            "unit": "ns/iter",
            "extra": "iterations: 962187793\ncpu: 0.7343350655042136 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.8768703505472313,
            "unit": "ns/iter",
            "extra": "iterations: 796553019\ncpu: 0.876818446908684 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.612319211399596,
            "unit": "ns/iter",
            "extra": "iterations: 105944249\ncpu: 6.611110821126211 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.8491409870312523,
            "unit": "ns/iter",
            "extra": "iterations: 823588439\ncpu: 0.8490114939556426 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.8224890194231627,
            "unit": "ns/iter",
            "extra": "iterations: 851674519\ncpu: 0.8223458450093623 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.6811047920948196,
            "unit": "ns/iter",
            "extra": "iterations: 1029685934\ncpu: 0.681040591936436 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 16.539887686170303,
            "unit": "ns/iter",
            "extra": "iterations: 43940804\ncpu: 16.53728793856413 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 29.266181089417444,
            "unit": "ns/iter",
            "extra": "iterations: 23944834\ncpu: 29.26278849959875 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 134.2970209330008,
            "unit": "ns/iter",
            "extra": "iterations: 5285816\ncpu: 134.2778889768352 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 3909.592148070677,
            "unit": "ns/iter",
            "extra": "iterations: 177969\ncpu: 3909.3847692576223 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 8956.546755281503,
            "unit": "ns/iter",
            "extra": "iterations: 81702\ncpu: 8955.775794962121 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.9380570701865742,
            "unit": "ns/iter",
            "extra": "iterations: 747083487\ncpu: 0.9378463347028915 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.937853368288484,
            "unit": "ns/iter",
            "extra": "iterations: 745901503\ncpu: 0.9377452239830226 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 0.9374750672552697,
            "unit": "ns/iter",
            "extra": "iterations: 746743898\ncpu: 0.9373596126794221 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.9375047834233958,
            "unit": "ns/iter",
            "extra": "iterations: 747085242\ncpu: 0.9374219615490633 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.9384214336270432,
            "unit": "ns/iter",
            "extra": "iterations: 746483569\ncpu: 0.9383252841564158 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.264562202079062,
            "unit": "ns/iter",
            "extra": "iterations: 213656371\ncpu: 3.2642049695770616 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.190142838632723,
            "unit": "ns/iter",
            "extra": "iterations: 585688048\ncpu: 1.19001862575142 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.0088206948399565,
            "unit": "ns/iter",
            "extra": "iterations: 693841711\ncpu: 1.008756193096621 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.9479134806594425,
            "unit": "ns/iter",
            "extra": "iterations: 738921212\ncpu: 0.947842719394009 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.9444726173344759,
            "unit": "ns/iter",
            "extra": "iterations: 741556076\ncpu: 0.9443474009104927 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 24.615952411695762,
            "unit": "ns/iter",
            "extra": "iterations: 28253496\ncpu: 24.613818268719868 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 30.714836185790254,
            "unit": "ns/iter",
            "extra": "iterations: 22834191\ncpu: 30.71195581222947 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 30.14384918303159,
            "unit": "ns/iter",
            "extra": "iterations: 23230914\ncpu: 30.14095997256122 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.24925954383781,
            "unit": "ns/iter",
            "extra": "iterations: 19520737\ncpu: 36.24478230509303 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 42.46164075202423,
            "unit": "ns/iter",
            "extra": "iterations: 16556920\ncpu: 42.4596580765017 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 15.676206272119495,
            "unit": "ns/iter",
            "extra": "iterations: 44667326\ncpu: 15.675049632476203 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 7.557215956872082,
            "unit": "ns/iter",
            "extra": "iterations: 92835990\ncpu: 7.556614810699767 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 7.549582792492381,
            "unit": "ns/iter",
            "extra": "iterations: 92672110\ncpu: 7.548903871941422 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 7.657694685638884,
            "unit": "ns/iter",
            "extra": "iterations: 92474746\ncpu: 7.65723605231645 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 7.54432799629647,
            "unit": "ns/iter",
            "extra": "iterations: 92931586\ncpu: 7.543507037531872 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.2458244004224432,
            "unit": "ns/iter",
            "extra": "iterations: 562857311\ncpu: 1.2456922674670414 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 4.512881523695129,
            "unit": "ns/iter",
            "extra": "iterations: 155202680\ncpu: 4.51223281711375 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.12423015547634,
            "unit": "ns/iter",
            "extra": "iterations: 86225852\ncpu: 8.123407861484386 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 57.710590594360085,
            "unit": "ns/iter",
            "extra": "iterations: 12131406\ncpu: 57.70703263908612 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 115.06189553663266,
            "unit": "ns/iter",
            "extra": "iterations: 6082668\ncpu: 115.05214784039097 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.9329093650839786,
            "unit": "ns/iter",
            "extra": "iterations: 747263505\ncpu: 0.9328525109760477 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.371142596814027,
            "unit": "ns/iter",
            "extra": "iterations: 209235355\ncpu: 3.370727623923858 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.415881742796049,
            "unit": "ns/iter",
            "extra": "iterations: 109268134\ncpu: 6.415108113770719 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.12965831196928,
            "unit": "ns/iter",
            "extra": "iterations: 18368510\ncpu: 38.12620446623012 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 72.47144598637482,
            "unit": "ns/iter",
            "extra": "iterations: 9660831\ncpu: 72.46345847474329 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.2489947776629666,
            "unit": "ns/iter",
            "extra": "iterations: 560833389\ncpu: 1.2488015366717207 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.2484896439198854,
            "unit": "ns/iter",
            "extra": "iterations: 560713802\ncpu: 1.2483146776544056 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.24820441329966,
            "unit": "ns/iter",
            "extra": "iterations: 561062437\ncpu: 1.2480335588746927 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.2486024511689138,
            "unit": "ns/iter",
            "extra": "iterations: 560801156\ncpu: 1.2484909999008584 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.2632341436027985,
            "unit": "ns/iter",
            "extra": "iterations: 557902345\ncpu: 1.2630937319326194 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.475685143191794,
            "unit": "ns/iter",
            "extra": "iterations: 156573511\ncpu: 4.475349179594112 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.474386721960312,
            "unit": "ns/iter",
            "extra": "iterations: 156569319\ncpu: 4.474225189674683 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.475830832997658,
            "unit": "ns/iter",
            "extra": "iterations: 156581648\ncpu: 4.475319182998912 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.475756716311858,
            "unit": "ns/iter",
            "extra": "iterations: 156577304\ncpu: 4.475215686431776 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.475726434414682,
            "unit": "ns/iter",
            "extra": "iterations: 156576420\ncpu: 4.475310318118075 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.653916168385065,
            "unit": "ns/iter",
            "extra": "iterations: 45720723\ncpu: 15.633824731949451 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.770946149868067,
            "unit": "ns/iter",
            "extra": "iterations: 39087983\ncpu: 17.768136897726244 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.752988308359363,
            "unit": "ns/iter",
            "extra": "iterations: 39695368\ncpu: 17.75211611591577 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 27.778269113522455,
            "unit": "ns/iter",
            "extra": "iterations: 26112943\ncpu: 27.775883055387826 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 39.85065675042533,
            "unit": "ns/iter",
            "extra": "iterations: 14548525\ncpu: 39.847752675958766 ns\nthreads: 1"
          },
          {
            "name": "Memory_vector_int_resize64x2p16",
            "value": 442608.69930071785,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 442548.45263825526 ns\nthreads: 1"
          },
          {
            "name": "Memory_vector_Pauli_resize64x2p16",
            "value": 443708.45949365903,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 443670.5487341789 ns\nthreads: 1"
          },
          {
            "name": "Memory_PauliTermContainer_insert64x2p16",
            "value": 642933.00365965,
            "unit": "ns/iter",
            "extra": "iterations: 1093\ncpu: 642894.3641354159 ns\nthreads: 1"
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
          "id": "2e9b4caad8e94b2399830042b3176b5401111bec",
          "message": "Various fixes for python\n\nFix bug in AdapterIt + ctor from sting iterators",
          "timestamp": "2025-08-28T23:12:33+02:00",
          "tree_id": "0980131512c6614222b9df9f30ff8a6231d8c695",
          "url": "https://github.com/zeFresk/ProPauli/commit/2e9b4caad8e94b2399830042b3176b5401111bec"
        },
        "date": 1756415850096,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 61.44451850065161,
            "unit": "ns/iter",
            "extra": "iterations: 11048665\ncpu: 61.42090795584807 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 41.319004181924136,
            "unit": "ns/iter",
            "extra": "iterations: 13595897\ncpu: 41.31551754179956 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 82.3985589000003,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 82.39629820000002 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 72.38775096810274,
            "unit": "ns/iter",
            "extra": "iterations: 9656257\ncpu: 72.37183103142344 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 222.6276645581083,
            "unit": "ns/iter",
            "extra": "iterations: 3148599\ncpu: 222.59579514571396 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 1144.2878321965798,
            "unit": "ns/iter",
            "extra": "iterations: 613003\ncpu: 1144.124487155854 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 8317.863936450698,
            "unit": "ns/iter",
            "extra": "iterations: 84218\ncpu: 8317.064012443892 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 16471.04879767024,
            "unit": "ns/iter",
            "extra": "iterations: 42584\ncpu: 16470.429504039064 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 466.3185641080533,
            "unit": "ns/iter",
            "extra": "iterations: 1494820\ncpu: 466.27838602641083 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 911.0858607388124,
            "unit": "ns/iter",
            "extra": "iterations: 767091\ncpu: 911.0513263745762 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 1821.8580825944848,
            "unit": "ns/iter",
            "extra": "iterations: 385062\ncpu: 1820.626119949517 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 462.155593999675,
            "unit": "ns/iter",
            "extra": "iterations: 1490186\ncpu: 462.1161022852176 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 903.8584323107366,
            "unit": "ns/iter",
            "extra": "iterations: 780397\ncpu: 901.8683400884432 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 1831.9341507366382,
            "unit": "ns/iter",
            "extra": "iterations: 385122\ncpu: 1831.8546953952264 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 3788.1888075342026,
            "unit": "ns/iter",
            "extra": "iterations: 185607\ncpu: 3786.5817937901074 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 64229.76580062562,
            "unit": "ns/iter",
            "extra": "iterations: 10854\ncpu: 64226.108992076646 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 31854953.499999736,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 31852420.7727273 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 3429.8907176313805,
            "unit": "ns/iter",
            "extra": "iterations: 207307\ncpu: 3429.7163723366907 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 28992.14759127163,
            "unit": "ns/iter",
            "extra": "iterations: 43031\ncpu: 28990.334526271734 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 3017951.8940809797,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 3017698.7227414306 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 3908.7231673107144,
            "unit": "ns/iter",
            "extra": "iterations: 177526\ncpu: 3908.344372091984 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 364.62060851508755,
            "unit": "ns/iter",
            "extra": "iterations: 1920051\ncpu: 364.5894306974128 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 395.57234527549883,
            "unit": "ns/iter",
            "extra": "iterations: 1774525\ncpu: 395.5458384638139 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 3750.4454286120044,
            "unit": "ns/iter",
            "extra": "iterations: 197008\ncpu: 3750.1175129943913 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 30795.642960143326,
            "unit": "ns/iter",
            "extra": "iterations: 17337\ncpu: 30791.81288573569 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 400.6258704647856,
            "unit": "ns/iter",
            "extra": "iterations: 1749640\ncpu: 400.5934866601119 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 458.8381489430014,
            "unit": "ns/iter",
            "extra": "iterations: 1528813\ncpu: 458.7880447118127 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 758.4049314766405,
            "unit": "ns/iter",
            "extra": "iterations: 925159\ncpu: 758.3385223512905 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 1609.7563822296372,
            "unit": "ns/iter",
            "extra": "iterations: 434566\ncpu: 1609.5700837157056 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 17.14372930110241,
            "unit": "ns/iter",
            "extra": "iterations: 42405640\ncpu: 17.142258553343346 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 30.50099949404503,
            "unit": "ns/iter",
            "extra": "iterations: 24164226\ncpu: 30.49830087667589 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 133.7525031880206,
            "unit": "ns/iter",
            "extra": "iterations: 5129359\ncpu: 133.74246470173009 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 3121.885564399524,
            "unit": "ns/iter",
            "extra": "iterations: 226267\ncpu: 3121.7159241073355 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 7074.862589742089,
            "unit": "ns/iter",
            "extra": "iterations: 96805\ncpu: 7073.98155053974 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 4.6803015819458835,
            "unit": "ns/iter",
            "extra": "iterations: 149474465\ncpu: 4.680020831651742 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 4.690751357346399,
            "unit": "ns/iter",
            "extra": "iterations: 149449141\ncpu: 4.690482336061106 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 4.6839756874520475,
            "unit": "ns/iter",
            "extra": "iterations: 149447603\ncpu: 4.68339047231156 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 4.688067887359829,
            "unit": "ns/iter",
            "extra": "iterations: 149345858\ncpu: 4.68772554776847 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 4.68718371460867,
            "unit": "ns/iter",
            "extra": "iterations: 149457385\ncpu: 4.686836565486522 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 5.006260110000085,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.006096430000042 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 4.348346281172857,
            "unit": "ns/iter",
            "extra": "iterations: 161777955\ncpu: 4.347870697215802 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 4.14458567395667,
            "unit": "ns/iter",
            "extra": "iterations: 168928652\ncpu: 4.144252983206176 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 4.100555178459396,
            "unit": "ns/iter",
            "extra": "iterations: 170593074\ncpu: 4.10007400417673 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 4.09036121487322,
            "unit": "ns/iter",
            "extra": "iterations: 170984100\ncpu: 4.090126754476012 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.690371489945863,
            "unit": "ns/iter",
            "extra": "iterations: 149446871\ncpu: 4.689930416810148 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.686059140269812,
            "unit": "ns/iter",
            "extra": "iterations: 149357790\ncpu: 4.685753176985314 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.688132600544693,
            "unit": "ns/iter",
            "extra": "iterations: 149321619\ncpu: 4.687709841935181 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.683507331465587,
            "unit": "ns/iter",
            "extra": "iterations: 149489823\ncpu: 4.683249795539603 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.688694412723078,
            "unit": "ns/iter",
            "extra": "iterations: 149380316\ncpu: 4.688579283765866 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 65.44607631001335,
            "unit": "ns/iter",
            "extra": "iterations: 10754290\ncpu: 65.4424289283623 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 73.38804445595994,
            "unit": "ns/iter",
            "extra": "iterations: 9428747\ncpu: 73.38361290211753 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 74.64546152997433,
            "unit": "ns/iter",
            "extra": "iterations: 9389596\ncpu: 74.63482433109975 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 82.9759384153372,
            "unit": "ns/iter",
            "extra": "iterations: 8422097\ncpu: 82.96666602153884 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 115.70839674277059,
            "unit": "ns/iter",
            "extra": "iterations: 6060481\ncpu: 115.70637363601993 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 112.35451847728393,
            "unit": "ns/iter",
            "extra": "iterations: 6283743\ncpu: 112.35156339143697 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 115.98188484351395,
            "unit": "ns/iter",
            "extra": "iterations: 6088272\ncpu: 115.97556909415219 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 116.37314725741464,
            "unit": "ns/iter",
            "extra": "iterations: 5984439\ncpu: 116.36223612606112 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 127.77509492044491,
            "unit": "ns/iter",
            "extra": "iterations: 5476955\ncpu: 127.7684969111479 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 162.53909092304934,
            "unit": "ns/iter",
            "extra": "iterations: 4298338\ncpu: 162.53518825182945 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 2946.2356533332413,
            "unit": "ns/iter",
            "extra": "iterations: 237773\ncpu: 2946.1405121691178 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 3914.805328475718,
            "unit": "ns/iter",
            "extra": "iterations: 178963\ncpu: 3914.7318496001913 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 3673.567151680108,
            "unit": "ns/iter",
            "extra": "iterations: 191060\ncpu: 3673.3125457971037 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 14092.104595529569,
            "unit": "ns/iter",
            "extra": "iterations: 49744\ncpu: 14090.540909456338 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 25642.845324532143,
            "unit": "ns/iter",
            "extra": "iterations: 27270\ncpu: 25641.25661899531 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 828090.849704118,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 828048.5112425914 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 932559.9999999986,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 932497.6844207855 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 1245773.6498194889,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1245752.6552346647 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 1579043.699316641,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 1578889.3872437428 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 2400271.695035441,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 2399983.826241145 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 81810.18558747921,
            "unit": "ns/iter",
            "extra": "iterations: 8562\ncpu: 81801.57323055313 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 81762.42166276289,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 81759.68653395811 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 82746.36126275813,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 82734.39912176579 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 143687.42519346598,
            "unit": "ns/iter",
            "extra": "iterations: 4652\ncpu: 143678.02257093828 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 160584.71302531313,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 160571.39702809625 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 123.38335567939441,
            "unit": "ns/iter",
            "extra": "iterations: 5665428\ncpu: 123.3688383296029 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 131.75719679835092,
            "unit": "ns/iter",
            "extra": "iterations: 5316635\ncpu: 131.74629215660033 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 150.89587246939396,
            "unit": "ns/iter",
            "extra": "iterations: 4658960\ncpu: 150.87701225166342 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 170.0265211987236,
            "unit": "ns/iter",
            "extra": "iterations: 4118479\ncpu: 170.02138143717488 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 232.92244220305844,
            "unit": "ns/iter",
            "extra": "iterations: 3006171\ncpu: 232.9009770235959 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 151.49632736965648,
            "unit": "ns/iter",
            "extra": "iterations: 4725496\ncpu: 151.48580106723205 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 169.82312104455357,
            "unit": "ns/iter",
            "extra": "iterations: 4223131\ncpu: 169.79938936300863 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 168.50812185416228,
            "unit": "ns/iter",
            "extra": "iterations: 3813969\ncpu: 168.48622707735743 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 218.72443204675335,
            "unit": "ns/iter",
            "extra": "iterations: 3045013\ncpu: 218.6975076953696 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 325.4195229479054,
            "unit": "ns/iter",
            "extra": "iterations: 2246044\ncpu: 325.40234652571365 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 282.6795479932685,
            "unit": "ns/iter",
            "extra": "iterations: 2473503\ncpu: 282.6536220089494 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 403.3206570320189,
            "unit": "ns/iter",
            "extra": "iterations: 1623239\ncpu: 403.3037827454824 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 814.0229286416185,
            "unit": "ns/iter",
            "extra": "iterations: 1248613\ncpu: 813.9680917946627 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 1048.4563062884704,
            "unit": "ns/iter",
            "extra": "iterations: 680979\ncpu: 1048.4091873611287 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 2819.265252505963,
            "unit": "ns/iter",
            "extra": "iterations: 292706\ncpu: 2818.9669771032877 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 3015.536996520003,
            "unit": "ns/iter",
            "extra": "iterations: 232184\ncpu: 3015.3229120008186 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 5763.331793012588,
            "unit": "ns/iter",
            "extra": "iterations: 151700\ncpu: 5762.9085827290355 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 154189.4282903107,
            "unit": "ns/iter",
            "extra": "iterations: 8639\ncpu: 154180.33696029516 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 89214.85393258558,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 89207.1171348303 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 144343.10203235172,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 144333.0935987829 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 84.43682250458119,
            "unit": "ns/iter",
            "extra": "iterations: 8277639\ncpu: 84.43008966687142 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 85.23552842012454,
            "unit": "ns/iter",
            "extra": "iterations: 8213616\ncpu: 85.23309404773576 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 85.05064686026341,
            "unit": "ns/iter",
            "extra": "iterations: 8214448\ncpu: 85.04056316382952 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 95.65322624355957,
            "unit": "ns/iter",
            "extra": "iterations: 7324571\ncpu: 95.64751150613438 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 127.18004830279341,
            "unit": "ns/iter",
            "extra": "iterations: 5489538\ncpu: 127.17254147799015 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 86.70767478173444,
            "unit": "ns/iter",
            "extra": "iterations: 8125091\ncpu: 86.7038062712156 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 86.2554374664904,
            "unit": "ns/iter",
            "extra": "iterations: 8124188\ncpu: 86.25340169380583 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 87.49472699336624,
            "unit": "ns/iter",
            "extra": "iterations: 7993542\ncpu: 87.48393490645226 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 96.5207297326309,
            "unit": "ns/iter",
            "extra": "iterations: 7262660\ncpu: 96.51473165479335 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 128.10095578587854,
            "unit": "ns/iter",
            "extra": "iterations: 5469949\ncpu: 128.08962789232646 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 94.40841083567719,
            "unit": "ns/iter",
            "extra": "iterations: 7715143\ncpu: 94.40066697402725 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 92.30478331981102,
            "unit": "ns/iter",
            "extra": "iterations: 7818712\ncpu: 92.2942267217416 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 92.69860518094862,
            "unit": "ns/iter",
            "extra": "iterations: 7118271\ncpu: 92.691647452028 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 133.29393334682032,
            "unit": "ns/iter",
            "extra": "iterations: 5018665\ncpu: 133.27017344253724 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 1497.557029557729,
            "unit": "ns/iter",
            "extra": "iterations: 467661\ncpu: 1497.4218589961606 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 647.0084715274452,
            "unit": "ns/iter",
            "extra": "iterations: 1487099\ncpu: 646.9810046271311 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 840.8115863297304,
            "unit": "ns/iter",
            "extra": "iterations: 2510821\ncpu: 840.7492055387478 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 1885.723293528612,
            "unit": "ns/iter",
            "extra": "iterations: 380273\ncpu: 1885.568467916456 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 11906.869866720772,
            "unit": "ns/iter",
            "extra": "iterations: 59124\ncpu: 11905.414078884764 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 1894.8116302850956,
            "unit": "ns/iter",
            "extra": "iterations: 276743\ncpu: 1894.5279374725992 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 90.12568811868177,
            "unit": "ns/iter",
            "extra": "iterations: 8062926\ncpu: 90.12265634088693 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 88.97184149536406,
            "unit": "ns/iter",
            "extra": "iterations: 7913737\ncpu: 88.76648705914538 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 159.09040016408534,
            "unit": "ns/iter",
            "extra": "iterations: 4407492\ncpu: 159.08106673817989 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 242.32752439032552,
            "unit": "ns/iter",
            "extra": "iterations: 2888133\ncpu: 242.29958073260056 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 368.21116558499017,
            "unit": "ns/iter",
            "extra": "iterations: 1913863\ncpu: 368.17095110779053 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 88.52501194326834,
            "unit": "ns/iter",
            "extra": "iterations: 7908222\ncpu: 88.51643125344671 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 90.94026374359203,
            "unit": "ns/iter",
            "extra": "iterations: 7707865\ncpu: 90.93056987894897 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 179.5490176447791,
            "unit": "ns/iter",
            "extra": "iterations: 3905461\ncpu: 179.5300844125718 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 333.3893949403464,
            "unit": "ns/iter",
            "extra": "iterations: 2101016\ncpu: 333.3498221812701 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 544.9501721601702,
            "unit": "ns/iter",
            "extra": "iterations: 1282817\ncpu: 544.9372724246734 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 108.16297205731559,
            "unit": "ns/iter",
            "extra": "iterations: 6478583\ncpu: 108.1517211402579 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 119.72995763735001,
            "unit": "ns/iter",
            "extra": "iterations: 5882540\ncpu: 119.7265897044446 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 299.9117780867998,
            "unit": "ns/iter",
            "extra": "iterations: 2334318\ncpu: 299.886647834617 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 950.3546342841374,
            "unit": "ns/iter",
            "extra": "iterations: 736446\ncpu: 950.3052199346686 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 3005.950941874749,
            "unit": "ns/iter",
            "extra": "iterations: 233152\ncpu: 3005.5205402484326 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 504.8237517866555,
            "unit": "ns/iter",
            "extra": "iterations: 1390868\ncpu: 504.78825596677956 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 684.1336725639185,
            "unit": "ns/iter",
            "extra": "iterations: 1022117\ncpu: 684.0705026919668 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 4111.494649059537,
            "unit": "ns/iter",
            "extra": "iterations: 170157\ncpu: 4111.163231603759 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 22860.988388401536,
            "unit": "ns/iter",
            "extra": "iterations: 30659\ncpu: 22858.786098698158 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 24071.93803272003,
            "unit": "ns/iter",
            "extra": "iterations: 29096\ncpu: 24068.63424525665 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.684829547713402,
            "unit": "ns/iter",
            "extra": "iterations: 149559918\ncpu: 4.684234414998745 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.700311043142983,
            "unit": "ns/iter",
            "extra": "iterations: 149401461\ncpu: 4.699559966150471 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.686351035473228,
            "unit": "ns/iter",
            "extra": "iterations: 149308352\ncpu: 4.6859568311355035 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.690050017924919,
            "unit": "ns/iter",
            "extra": "iterations: 149113143\ncpu: 4.689117464313633 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.685780656023367,
            "unit": "ns/iter",
            "extra": "iterations: 149396407\ncpu: 4.685288622771094 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 5.051869729999794,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.051369319999992 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 5.052444899999955,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.052045600000099 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 5.072664459999885,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.072294929999828 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 5.050187139999878,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.0496664600001395 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 5.05091230000005,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.050374889999887 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 54.97724280686224,
            "unit": "ns/iter",
            "extra": "iterations: 12709476\ncpu: 54.97084466739784 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 57.662579995494525,
            "unit": "ns/iter",
            "extra": "iterations: 12159122\ncpu: 57.65837171466732 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 57.00644418333303,
            "unit": "ns/iter",
            "extra": "iterations: 12296981\ncpu: 57.00436830796239 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 66.08477287628139,
            "unit": "ns/iter",
            "extra": "iterations: 10577605\ncpu: 66.08267353526425 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 96.9803944773807,
            "unit": "ns/iter",
            "extra": "iterations: 7224546\ncpu: 96.97441652389018 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.6239512491551537,
            "unit": "ns/iter",
            "extra": "iterations: 1123577164\ncpu: 0.62392328578867 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.0670920852906136,
            "unit": "ns/iter",
            "extra": "iterations: 655986169\ncpu: 1.0670120089071502 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7337618677226813,
            "unit": "ns/iter",
            "extra": "iterations: 962571679\ncpu: 0.7337260999967434 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.8724753333959782,
            "unit": "ns/iter",
            "extra": "iterations: 798492164\ncpu: 0.8723897433262664 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.631056027012316,
            "unit": "ns/iter",
            "extra": "iterations: 106157758\ncpu: 6.630402330086788 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.8481969529080372,
            "unit": "ns/iter",
            "extra": "iterations: 826003828\ncpu: 0.8481625886605402 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.8218402535868042,
            "unit": "ns/iter",
            "extra": "iterations: 851927773\ncpu: 0.8217193043664504 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.6770860817858199,
            "unit": "ns/iter",
            "extra": "iterations: 1034764128\ncpu: 0.6770219483294475 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 17.439596229751917,
            "unit": "ns/iter",
            "extra": "iterations: 43262821\ncpu: 17.438421757102006 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 29.35514702103883,
            "unit": "ns/iter",
            "extra": "iterations: 21854321\ncpu: 29.353351952686047 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 134.9679740202028,
            "unit": "ns/iter",
            "extra": "iterations: 4993727\ncpu: 134.94862534535517 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 3160.5268071029814,
            "unit": "ns/iter",
            "extra": "iterations: 210392\ncpu: 3160.2301560896594 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 7243.643416127599,
            "unit": "ns/iter",
            "extra": "iterations: 99926\ncpu: 7243.218751876506 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.9377498115116204,
            "unit": "ns/iter",
            "extra": "iterations: 747384243\ncpu: 0.9376212591626613 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.9379855147982351,
            "unit": "ns/iter",
            "extra": "iterations: 746334100\ncpu: 0.9379284518823302 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 0.9382196391221216,
            "unit": "ns/iter",
            "extra": "iterations: 746015584\ncpu: 0.9381473658330616 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.941303275476026,
            "unit": "ns/iter",
            "extra": "iterations: 745566918\ncpu: 0.9412389070085054 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.9389636916550174,
            "unit": "ns/iter",
            "extra": "iterations: 745875418\ncpu: 0.9389202246104787 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.2544727687280455,
            "unit": "ns/iter",
            "extra": "iterations: 215025817\ncpu: 3.254360777524718 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.170344478510405,
            "unit": "ns/iter",
            "extra": "iterations: 599624748\ncpu: 1.1702830567626836 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.0045517218897093,
            "unit": "ns/iter",
            "extra": "iterations: 698036716\ncpu: 1.0044976659938072 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.9484884017899796,
            "unit": "ns/iter",
            "extra": "iterations: 737900285\ncpu: 0.9484041329513763 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.9451093599166986,
            "unit": "ns/iter",
            "extra": "iterations: 740659809\ncpu: 0.9450324838673625 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 24.619999467180524,
            "unit": "ns/iter",
            "extra": "iterations: 28264713\ncpu: 24.618075407311554 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 30.65241571129649,
            "unit": "ns/iter",
            "extra": "iterations: 22863473\ncpu: 30.650009296487973 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 30.65619083398883,
            "unit": "ns/iter",
            "extra": "iterations: 23128249\ncpu: 30.588347652258197 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.27359603445596,
            "unit": "ns/iter",
            "extra": "iterations: 19494727\ncpu: 36.26820385840696 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 42.38170654733287,
            "unit": "ns/iter",
            "extra": "iterations: 16554513\ncpu: 42.375752642194584 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 15.667233299057942,
            "unit": "ns/iter",
            "extra": "iterations: 44700939\ncpu: 15.666518660827167 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 7.5525611466110165,
            "unit": "ns/iter",
            "extra": "iterations: 92759801\ncpu: 7.552225828945137 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 7.554728222828571,
            "unit": "ns/iter",
            "extra": "iterations: 92685268\ncpu: 7.553896731463244 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 7.550937529985111,
            "unit": "ns/iter",
            "extra": "iterations: 92192358\ncpu: 7.550800468733156 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 7.556224563988894,
            "unit": "ns/iter",
            "extra": "iterations: 92560700\ncpu: 7.555412707553059 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.2455248270652803,
            "unit": "ns/iter",
            "extra": "iterations: 562694456\ncpu: 1.245479697777608 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 4.523326893806816,
            "unit": "ns/iter",
            "extra": "iterations: 154929093\ncpu: 4.522853399780873 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.12371237502349,
            "unit": "ns/iter",
            "extra": "iterations: 86025436\ncpu: 8.123276201703947 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 57.68162714374375,
            "unit": "ns/iter",
            "extra": "iterations: 12144176\ncpu: 57.67862710487577 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 115.08318331209654,
            "unit": "ns/iter",
            "extra": "iterations: 6084694\ncpu: 115.07560544540182 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.9350385778774374,
            "unit": "ns/iter",
            "extra": "iterations: 744621060\ncpu: 0.9350045968348215 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.3737947797354684,
            "unit": "ns/iter",
            "extra": "iterations: 206794461\ncpu: 3.3736325848689757 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.407842669758754,
            "unit": "ns/iter",
            "extra": "iterations: 109259605\ncpu: 6.407582573632916 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.11125643183702,
            "unit": "ns/iter",
            "extra": "iterations: 18344099\ncpu: 38.10871528767931 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 72.44179237434662,
            "unit": "ns/iter",
            "extra": "iterations: 9660839\ncpu: 72.43989719733523 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.2485225435898544,
            "unit": "ns/iter",
            "extra": "iterations: 560896074\ncpu: 1.2484139084917185 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.249378196111506,
            "unit": "ns/iter",
            "extra": "iterations: 560434337\ncpu: 1.249308539423052 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.2493803712212388,
            "unit": "ns/iter",
            "extra": "iterations: 560254804\ncpu: 1.2492513924074957 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.2495091549345965,
            "unit": "ns/iter",
            "extra": "iterations: 560102911\ncpu: 1.2494887497558573 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.2494055241440358,
            "unit": "ns/iter",
            "extra": "iterations: 560237639\ncpu: 1.2493373066638915 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.473637476846693,
            "unit": "ns/iter",
            "extra": "iterations: 156614201\ncpu: 4.473431793072224 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.4796955499885005,
            "unit": "ns/iter",
            "extra": "iterations: 156610669\ncpu: 4.4795668486673605 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.479535048720987,
            "unit": "ns/iter",
            "extra": "iterations: 156572276\ncpu: 4.47898679712621 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.475191953798734,
            "unit": "ns/iter",
            "extra": "iterations: 156513313\ncpu: 4.4749891595484526 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.4767586477197785,
            "unit": "ns/iter",
            "extra": "iterations: 156521981\ncpu: 4.4764513298613755 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.3720052901178,
            "unit": "ns/iter",
            "extra": "iterations: 45631507\ncpu: 15.371411292640495 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.76756641412114,
            "unit": "ns/iter",
            "extra": "iterations: 39491526\ncpu: 17.766463645897225 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.79311748142028,
            "unit": "ns/iter",
            "extra": "iterations: 39411619\ncpu: 17.79279739814802 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 27.795859804022754,
            "unit": "ns/iter",
            "extra": "iterations: 26094900\ncpu: 27.794466083411223 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 39.861099208096135,
            "unit": "ns/iter",
            "extra": "iterations: 14571472\ncpu: 39.85832735361161 ns\nthreads: 1"
          },
          {
            "name": "Memory_vector_int_resize64x2p16",
            "value": 468156.16689007,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 468129.54222520697 ns\nthreads: 1"
          },
          {
            "name": "Memory_vector_Pauli_resize64x2p16",
            "value": 469537.92809141625,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 469480.7768817161 ns\nthreads: 1"
          },
          {
            "name": "Memory_PauliTermContainer_insert64x2p16",
            "value": 643169.6648301309,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 643145.878787896 ns\nthreads: 1"
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
          "id": "26d328f074ad261a46ec5e56c7d1273497415a53",
          "message": "Merge pull request #11 from zeFresk/v2_python\n\nFinal fixes for pyrauli",
          "timestamp": "2025-08-28T23:38:07+02:00",
          "tree_id": "32519cd5d0f24f4dde218f604e7f14c607d8e662",
          "url": "https://github.com/zeFresk/ProPauli/commit/26d328f074ad261a46ec5e56c7d1273497415a53"
        },
        "date": 1756417411731,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 64.4346265347089,
            "unit": "ns/iter",
            "extra": "iterations: 11202045\ncpu: 64.43358752799153 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 40.650906972623375,
            "unit": "ns/iter",
            "extra": "iterations: 13911776\ncpu: 40.64879653036392 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 81.82843680000076,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 81.8208311 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 72.22266271193419,
            "unit": "ns/iter",
            "extra": "iterations: 9682910\ncpu: 72.2181585907542 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 222.37063635533403,
            "unit": "ns/iter",
            "extra": "iterations: 3143731\ncpu: 222.35485097166392 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 1141.6002517072593,
            "unit": "ns/iter",
            "extra": "iterations: 613411\ncpu: 1141.5454597325459 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 8546.422037965558,
            "unit": "ns/iter",
            "extra": "iterations: 84182\ncpu: 8534.503444916965 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 16422.889381672838,
            "unit": "ns/iter",
            "extra": "iterations: 42615\ncpu: 16422.622316085868 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 465.64311413031334,
            "unit": "ns/iter",
            "extra": "iterations: 1495904\ncpu: 465.60675150277024 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 903.7591219867937,
            "unit": "ns/iter",
            "extra": "iterations: 767870\ncpu: 903.7036777058607 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 1824.1605273167074,
            "unit": "ns/iter",
            "extra": "iterations: 378596\ncpu: 1824.1042668173977 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 463.3198759680755,
            "unit": "ns/iter",
            "extra": "iterations: 1490584\ncpu: 463.2998690446158 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 901.5989194503064,
            "unit": "ns/iter",
            "extra": "iterations: 775161\ncpu: 901.5405793119113 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 1824.4256341116097,
            "unit": "ns/iter",
            "extra": "iterations: 384948\ncpu: 1824.392440017875 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 3647.972177461971,
            "unit": "ns/iter",
            "extra": "iterations: 188660\ncpu: 3647.8116876921526 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 62661.97763664034,
            "unit": "ns/iter",
            "extra": "iterations: 11179\ncpu: 62656.208784327675 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 31533346.863635745,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 31531234.863636374 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 3420.1882888980963,
            "unit": "ns/iter",
            "extra": "iterations: 208281\ncpu: 3420.0805930449765 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 28948.955627807456,
            "unit": "ns/iter",
            "extra": "iterations: 42752\ncpu: 28946.43616672907 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 3019515.0312499306,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 3019365.900000004 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 3873.4958307142347,
            "unit": "ns/iter",
            "extra": "iterations: 179767\ncpu: 3873.158655370563 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 365.93950929608474,
            "unit": "ns/iter",
            "extra": "iterations: 1913170\ncpu: 365.9021425173934 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 396.26165478506255,
            "unit": "ns/iter",
            "extra": "iterations: 1756639\ncpu: 396.2199370502418 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 3728.6066765466458,
            "unit": "ns/iter",
            "extra": "iterations: 199055\ncpu: 3727.9884253095843 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 31053.476483210765,
            "unit": "ns/iter",
            "extra": "iterations: 17243\ncpu: 31049.57408803568 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 403.26076083769505,
            "unit": "ns/iter",
            "extra": "iterations: 1736691\ncpu: 403.2027251825461 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 461.801191434799,
            "unit": "ns/iter",
            "extra": "iterations: 1516323\ncpu: 461.7835698594573 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 763.0761991790217,
            "unit": "ns/iter",
            "extra": "iterations: 920338\ncpu: 762.962196497373 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 1610.799560952925,
            "unit": "ns/iter",
            "extra": "iterations: 434122\ncpu: 1610.6683605069472 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 17.134681510663466,
            "unit": "ns/iter",
            "extra": "iterations: 40137796\ncpu: 17.13341395227581 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 29.91307366938967,
            "unit": "ns/iter",
            "extra": "iterations: 23195699\ncpu: 29.90923369026321 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 130.13076824854238,
            "unit": "ns/iter",
            "extra": "iterations: 5270599\ncpu: 130.110361459865 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 3108.9913450862964,
            "unit": "ns/iter",
            "extra": "iterations: 225190\ncpu: 3108.5635418979305 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 7167.783940025358,
            "unit": "ns/iter",
            "extra": "iterations: 97908\ncpu: 7167.086826408472 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 4.683085900255175,
            "unit": "ns/iter",
            "extra": "iterations: 149327717\ncpu: 4.682719565048964 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 4.697956784754948,
            "unit": "ns/iter",
            "extra": "iterations: 148526104\ncpu: 4.697476485345656 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 4.682345261430977,
            "unit": "ns/iter",
            "extra": "iterations: 148983186\ncpu: 4.6819608556364525 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 4.684344780083685,
            "unit": "ns/iter",
            "extra": "iterations: 149388339\ncpu: 4.684138405207121 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 4.680035826150267,
            "unit": "ns/iter",
            "extra": "iterations: 149557794\ncpu: 4.679691484350191 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 5.001709500000118,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.001732190000041 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 4.3329197332692475,
            "unit": "ns/iter",
            "extra": "iterations: 161956777\ncpu: 4.332419834459924 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 4.346663397823006,
            "unit": "ns/iter",
            "extra": "iterations: 160823428\ncpu: 4.346564997980249 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 4.102012129105684,
            "unit": "ns/iter",
            "extra": "iterations: 170484786\ncpu: 4.1017017436382845 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 4.088954394379788,
            "unit": "ns/iter",
            "extra": "iterations: 171176490\ncpu: 4.088873717412957 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.687120208064087,
            "unit": "ns/iter",
            "extra": "iterations: 149447453\ncpu: 4.6870351681403175 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.6824694764733765,
            "unit": "ns/iter",
            "extra": "iterations: 149162482\ncpu: 4.682150642947847 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.683527353617836,
            "unit": "ns/iter",
            "extra": "iterations: 149385669\ncpu: 4.683089045174744 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.6892002801171335,
            "unit": "ns/iter",
            "extra": "iterations: 149390421\ncpu: 4.688843222417887 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.687892669475051,
            "unit": "ns/iter",
            "extra": "iterations: 149290316\ncpu: 4.687700848593554 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 65.28319796864632,
            "unit": "ns/iter",
            "extra": "iterations: 10717591\ncpu: 65.27621486955415 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 72.7915777175464,
            "unit": "ns/iter",
            "extra": "iterations: 9445943\ncpu: 72.78755789654899 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 74.31141150954484,
            "unit": "ns/iter",
            "extra": "iterations: 9428367\ncpu: 74.30753660734626 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 83.6291131405853,
            "unit": "ns/iter",
            "extra": "iterations: 8385320\ncpu: 83.62706980771182 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 119.9961594684941,
            "unit": "ns/iter",
            "extra": "iterations: 5824975\ncpu: 119.99264237185412 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 111.94756123086114,
            "unit": "ns/iter",
            "extra": "iterations: 6230028\ncpu: 111.94192032523813 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 116.32450387111302,
            "unit": "ns/iter",
            "extra": "iterations: 6068282\ncpu: 116.31735604904343 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 116.42184857319339,
            "unit": "ns/iter",
            "extra": "iterations: 5972866\ncpu: 116.413403716071 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 128.6309691466296,
            "unit": "ns/iter",
            "extra": "iterations: 5439827\ncpu: 128.62513624054574 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 163.45671883324957,
            "unit": "ns/iter",
            "extra": "iterations: 4288505\ncpu: 163.4513668516195 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 2937.605028841647,
            "unit": "ns/iter",
            "extra": "iterations: 238544\ncpu: 2937.2665671741624 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 3916.5029452778117,
            "unit": "ns/iter",
            "extra": "iterations: 179270\ncpu: 3915.893373124334 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 3667.6587871803836,
            "unit": "ns/iter",
            "extra": "iterations: 190960\ncpu: 3667.24375261838 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 14054.97085228888,
            "unit": "ns/iter",
            "extra": "iterations: 49678\ncpu: 14053.895084343121 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 25697.793617020812,
            "unit": "ns/iter",
            "extra": "iterations: 27260\ncpu: 25695.42270726342 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 825930.0566706178,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 825860.5643447333 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 981157.6902654336,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 981072.0604719803 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 1241981.9165185904,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1241917.758436947 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 1553343.9189188888,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 1553266.8288288217 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 2288958.881188204,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 2288819.2706270637 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 83135.24947491649,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 83125.1885647623 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 81691.44930767389,
            "unit": "ns/iter",
            "extra": "iterations: 8522\ncpu: 81687.98967378613 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 82515.09628318706,
            "unit": "ns/iter",
            "extra": "iterations: 8475\ncpu: 82510.94277286054 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 133828.17589009737,
            "unit": "ns/iter",
            "extra": "iterations: 5168\ncpu: 133813.29450464426 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 152350.12023524195,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 152348.95578305406 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 122.05007233279726,
            "unit": "ns/iter",
            "extra": "iterations: 5731149\ncpu: 122.04264014074656 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 129.6535456606471,
            "unit": "ns/iter",
            "extra": "iterations: 5439903\ncpu: 129.65064707955418 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 140.2958679066246,
            "unit": "ns/iter",
            "extra": "iterations: 4993377\ncpu: 140.2890234404497 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 171.93778753734256,
            "unit": "ns/iter",
            "extra": "iterations: 4047083\ncpu: 171.93255240873577 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 223.54325281636196,
            "unit": "ns/iter",
            "extra": "iterations: 3128409\ncpu: 223.5379130414224 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 147.57027915351802,
            "unit": "ns/iter",
            "extra": "iterations: 4696663\ncpu: 147.56304295198402 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 170.03684819429964,
            "unit": "ns/iter",
            "extra": "iterations: 4158467\ncpu: 170.03423881925517 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 168.81940386684528,
            "unit": "ns/iter",
            "extra": "iterations: 3772949\ncpu: 168.81167914011317 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 226.05655682025304,
            "unit": "ns/iter",
            "extra": "iterations: 2939893\ncpu: 226.04570166328898 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 330.19518116148606,
            "unit": "ns/iter",
            "extra": "iterations: 2247056\ncpu: 330.1801423729556 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 281.93242544869764,
            "unit": "ns/iter",
            "extra": "iterations: 2467127\ncpu: 281.9302301827145 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 400.0339024457389,
            "unit": "ns/iter",
            "extra": "iterations: 1629145\ncpu: 400.0174692860325 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 845.5199616399302,
            "unit": "ns/iter",
            "extra": "iterations: 1206464\ncpu: 845.4856879276927 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 1036.4010864591644,
            "unit": "ns/iter",
            "extra": "iterations: 681848\ncpu: 1036.3337914021931 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 2791.024590135801,
            "unit": "ns/iter",
            "extra": "iterations: 292597\ncpu: 2790.9373438551956 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 3016.8349985985,
            "unit": "ns/iter",
            "extra": "iterations: 231895\ncpu: 3016.6647016969046 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 5629.211473698464,
            "unit": "ns/iter",
            "extra": "iterations: 152331\ncpu: 5629.022004713485 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 162215.05436613053,
            "unit": "ns/iter",
            "extra": "iterations: 8314\ncpu: 162208.95224921822 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 89102.96505262905,
            "unit": "ns/iter",
            "extra": "iterations: 7125\ncpu: 89097.50540350926 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 144272.19914376337,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 144269.62132302197 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 84.61273086760367,
            "unit": "ns/iter",
            "extra": "iterations: 8293119\ncpu: 84.60941112746721 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 85.26936472867492,
            "unit": "ns/iter",
            "extra": "iterations: 8190768\ncpu: 85.26754157851853 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 86.68262252241846,
            "unit": "ns/iter",
            "extra": "iterations: 8207457\ncpu: 86.6799040189911 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 102.140723556471,
            "unit": "ns/iter",
            "extra": "iterations: 6835707\ncpu: 102.13538643479058 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 126.30322354561234,
            "unit": "ns/iter",
            "extra": "iterations: 5544609\ncpu: 126.29951796420853 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 86.33213348414618,
            "unit": "ns/iter",
            "extra": "iterations: 8116020\ncpu: 86.32776163686127 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 86.0325979218887,
            "unit": "ns/iter",
            "extra": "iterations: 8136715\ncpu: 86.03012210701827 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 86.79594861082869,
            "unit": "ns/iter",
            "extra": "iterations: 8047610\ncpu: 86.79343022338243 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 103.26665808120104,
            "unit": "ns/iter",
            "extra": "iterations: 6763369\ncpu: 103.26179837297117 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 128.75224199380412,
            "unit": "ns/iter",
            "extra": "iterations: 5426420\ncpu: 128.7511453223301 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 92.23104874038594,
            "unit": "ns/iter",
            "extra": "iterations: 7753139\ncpu: 92.22465158950426 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 89.28392772799961,
            "unit": "ns/iter",
            "extra": "iterations: 7774408\ncpu: 89.2829585223726 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 92.88856241635486,
            "unit": "ns/iter",
            "extra": "iterations: 7364921\ncpu: 92.88374077603835 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 134.00089987195216,
            "unit": "ns/iter",
            "extra": "iterations: 4771790\ncpu: 133.9937956196743 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 1496.8083376101713,
            "unit": "ns/iter",
            "extra": "iterations: 467640\ncpu: 1496.7730305362966 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 635.3372678251458,
            "unit": "ns/iter",
            "extra": "iterations: 1519383\ncpu: 635.2914683131266 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 801.7173453950676,
            "unit": "ns/iter",
            "extra": "iterations: 2604380\ncpu: 801.6690194979221 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 1875.4535217890063,
            "unit": "ns/iter",
            "extra": "iterations: 382760\ncpu: 1875.303270979198 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 11879.561956120793,
            "unit": "ns/iter",
            "extra": "iterations: 59526\ncpu: 11878.492541074518 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 1950.3785036835352,
            "unit": "ns/iter",
            "extra": "iterations: 273926\ncpu: 1950.2652395172413 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 86.65870646593157,
            "unit": "ns/iter",
            "extra": "iterations: 8072242\ncpu: 86.65397965026028 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 88.08925112872578,
            "unit": "ns/iter",
            "extra": "iterations: 7938387\ncpu: 88.08317886240832 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 158.61683979745033,
            "unit": "ns/iter",
            "extra": "iterations: 4417951\ncpu: 158.60709614026825 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 252.84146234664433,
            "unit": "ns/iter",
            "extra": "iterations: 2797613\ncpu: 252.66321753580854 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 365.9004387886023,
            "unit": "ns/iter",
            "extra": "iterations: 1912994\ncpu: 365.8634757871709 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 88.55473647069492,
            "unit": "ns/iter",
            "extra": "iterations: 7910183\ncpu: 88.54919437388483 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 91.02508085294654,
            "unit": "ns/iter",
            "extra": "iterations: 7694834\ncpu: 91.01453234728704 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 180.66878491325537,
            "unit": "ns/iter",
            "extra": "iterations: 3867979\ncpu: 180.66284847978383 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 342.46691609376757,
            "unit": "ns/iter",
            "extra": "iterations: 2044151\ncpu: 342.43257469726973 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 544.1956261418012,
            "unit": "ns/iter",
            "extra": "iterations: 1286873\ncpu: 544.1344514959807 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 107.85041633014815,
            "unit": "ns/iter",
            "extra": "iterations: 6494245\ncpu: 107.83997893519438 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 119.03259054841803,
            "unit": "ns/iter",
            "extra": "iterations: 5839914\ncpu: 119.0225032423397 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 299.85780872698103,
            "unit": "ns/iter",
            "extra": "iterations: 2334004\ncpu: 299.84396599149085 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 950.9179225729192,
            "unit": "ns/iter",
            "extra": "iterations: 736719\ncpu: 950.8300776822803 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 3023.9243324142785,
            "unit": "ns/iter",
            "extra": "iterations: 233191\ncpu: 3023.730928723645 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 513.8469616768714,
            "unit": "ns/iter",
            "extra": "iterations: 1357196\ncpu: 513.7996928962302 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 694.3537655495936,
            "unit": "ns/iter",
            "extra": "iterations: 1009109\ncpu: 694.3370280118414 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 4141.033545752351,
            "unit": "ns/iter",
            "extra": "iterations: 169947\ncpu: 4140.7793606241285 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 23269.720064076624,
            "unit": "ns/iter",
            "extra": "iterations: 29964\ncpu: 23268.906921638983 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 24305.703299368048,
            "unit": "ns/iter",
            "extra": "iterations: 28854\ncpu: 24304.51244194926 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.802899296047057,
            "unit": "ns/iter",
            "extra": "iterations: 145743792\ncpu: 4.802697380070882 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.800577801364308,
            "unit": "ns/iter",
            "extra": "iterations: 146330911\ncpu: 4.800210886406708 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.6983961485673404,
            "unit": "ns/iter",
            "extra": "iterations: 145466279\ncpu: 4.698319065410344 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.742893814490701,
            "unit": "ns/iter",
            "extra": "iterations: 149447548\ncpu: 4.742862278342582 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.693027694707218,
            "unit": "ns/iter",
            "extra": "iterations: 149491489\ncpu: 4.692802946126274 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 5.045009989999585,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.045020969999996 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 5.0434697200000755,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.043149990000018 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 5.190228210000214,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.189813519999973 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 5.044186760000002,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.04420094000011 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 5.041256289999865,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.0409554899999875 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 54.979123431528805,
            "unit": "ns/iter",
            "extra": "iterations: 12756311\ncpu: 54.976730655124726 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 57.63589048108428,
            "unit": "ns/iter",
            "extra": "iterations: 12165716\ncpu: 57.63351281585107 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 57.23187279009019,
            "unit": "ns/iter",
            "extra": "iterations: 12305079\ncpu: 57.22884087131652 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 62.253065092354866,
            "unit": "ns/iter",
            "extra": "iterations: 11261814\ncpu: 62.25218521634207 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 97.52247022326983,
            "unit": "ns/iter",
            "extra": "iterations: 7187156\ncpu: 97.51901155338858 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.6228621844364844,
            "unit": "ns/iter",
            "extra": "iterations: 1123413271\ncpu: 0.6228328951260914 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.0669875972227527,
            "unit": "ns/iter",
            "extra": "iterations: 655338866\ncpu: 1.0669385538931575 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7310080696061171,
            "unit": "ns/iter",
            "extra": "iterations: 965277719\ncpu: 0.7309181690538948 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.8763622080461816,
            "unit": "ns/iter",
            "extra": "iterations: 793793487\ncpu: 0.8762769314583837 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.629490589620762,
            "unit": "ns/iter",
            "extra": "iterations: 106261714\ncpu: 6.629151003530737 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.8489585042074446,
            "unit": "ns/iter",
            "extra": "iterations: 826174677\ncpu: 0.8489160955002076 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.8233822762366451,
            "unit": "ns/iter",
            "extra": "iterations: 852246676\ncpu: 0.8233155396900514 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.6751300974738713,
            "unit": "ns/iter",
            "extra": "iterations: 1035306036\ncpu: 0.6750519766118708 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 16.499201380498018,
            "unit": "ns/iter",
            "extra": "iterations: 44102354\ncpu: 16.498059582034582 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 31.120010564206254,
            "unit": "ns/iter",
            "extra": "iterations: 22494828\ncpu: 31.116341987588502 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 132.10031227019894,
            "unit": "ns/iter",
            "extra": "iterations: 5212473\ncpu: 132.08905638456142 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 3197.1386813993417,
            "unit": "ns/iter",
            "extra": "iterations: 209783\ncpu: 3197.0108922076474 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 7300.955218200939,
            "unit": "ns/iter",
            "extra": "iterations: 99862\ncpu: 7300.09012437167 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.9363521034993552,
            "unit": "ns/iter",
            "extra": "iterations: 747605021\ncpu: 0.9362990460707579 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.9367627277918932,
            "unit": "ns/iter",
            "extra": "iterations: 747064814\ncpu: 0.9366710195509207 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 0.9363664036673586,
            "unit": "ns/iter",
            "extra": "iterations: 746900297\ncpu: 0.9363165268630392 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.9368557223755407,
            "unit": "ns/iter",
            "extra": "iterations: 747126482\ncpu: 0.9367726186420945 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.9374924208128194,
            "unit": "ns/iter",
            "extra": "iterations: 747194238\ncpu: 0.9373875511604057 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.2515933003489574,
            "unit": "ns/iter",
            "extra": "iterations: 215568427\ncpu: 3.2511871926402085 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.1865595213570952,
            "unit": "ns/iter",
            "extra": "iterations: 592117380\ncpu: 1.1864915179486946 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.0074816784655558,
            "unit": "ns/iter",
            "extra": "iterations: 695385671\ncpu: 1.0074100664061758 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.9472666578918351,
            "unit": "ns/iter",
            "extra": "iterations: 736671818\ncpu: 0.947226274916354 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.9441212700375866,
            "unit": "ns/iter",
            "extra": "iterations: 740631221\ncpu: 0.9440233130544867 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 24.60645179336747,
            "unit": "ns/iter",
            "extra": "iterations: 28278556\ncpu: 24.605819901128665 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 30.654223645795085,
            "unit": "ns/iter",
            "extra": "iterations: 22831460\ncpu: 30.653017196447426 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 30.18560366888966,
            "unit": "ns/iter",
            "extra": "iterations: 23095815\ncpu: 30.183614390745852 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.05078381087245,
            "unit": "ns/iter",
            "extra": "iterations: 19317160\ncpu: 35.97036013575549 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 42.351907294155325,
            "unit": "ns/iter",
            "extra": "iterations: 16485606\ncpu: 42.34690838783814 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 15.6755737761023,
            "unit": "ns/iter",
            "extra": "iterations: 44592394\ncpu: 15.674422032600365 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 7.54941478613828,
            "unit": "ns/iter",
            "extra": "iterations: 92736696\ncpu: 7.549365280384689 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 7.5525607554232455,
            "unit": "ns/iter",
            "extra": "iterations: 92692960\ncpu: 7.55224546718539 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 7.552292233103228,
            "unit": "ns/iter",
            "extra": "iterations: 92302589\ncpu: 7.552132725117803 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 7.614476710067771,
            "unit": "ns/iter",
            "extra": "iterations: 92705787\ncpu: 7.614289666728184 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.2436562168846133,
            "unit": "ns/iter",
            "extra": "iterations: 561548044\ncpu: 1.2435742363657991 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 4.507236281497709,
            "unit": "ns/iter",
            "extra": "iterations: 155155932\ncpu: 4.506985076149114 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.261095435931958,
            "unit": "ns/iter",
            "extra": "iterations: 86088686\ncpu: 8.260400791806905 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 57.690224086444445,
            "unit": "ns/iter",
            "extra": "iterations: 12149463\ncpu: 57.686059293321335 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 115.07411728361966,
            "unit": "ns/iter",
            "extra": "iterations: 6085760\ncpu: 115.06421728757255 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.9333807316143647,
            "unit": "ns/iter",
            "extra": "iterations: 750716395\ncpu: 0.9333347888319128 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.389297490221576,
            "unit": "ns/iter",
            "extra": "iterations: 206922287\ncpu: 3.3891069887507603 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.401418349007304,
            "unit": "ns/iter",
            "extra": "iterations: 109257594\ncpu: 6.401140903762006 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.10845212212679,
            "unit": "ns/iter",
            "extra": "iterations: 18383679\ncpu: 38.106452576767055 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 72.5185391143386,
            "unit": "ns/iter",
            "extra": "iterations: 9671147\ncpu: 72.51219839797663 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.2470931421509885,
            "unit": "ns/iter",
            "extra": "iterations: 561149989\ncpu: 1.2469638950665942 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.2474765862935453,
            "unit": "ns/iter",
            "extra": "iterations: 561235360\ncpu: 1.2474011936810363 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.2475137670597125,
            "unit": "ns/iter",
            "extra": "iterations: 560853421\ncpu: 1.2474590807568917 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.2478038108917002,
            "unit": "ns/iter",
            "extra": "iterations: 561019197\ncpu: 1.2477632828667835 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.2480236601786263,
            "unit": "ns/iter",
            "extra": "iterations: 560956035\ncpu: 1.2479396446818207 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.475973076416467,
            "unit": "ns/iter",
            "extra": "iterations: 156608127\ncpu: 4.475697139267843 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.474656157434577,
            "unit": "ns/iter",
            "extra": "iterations: 156612518\ncpu: 4.47424316362755 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.473851894915383,
            "unit": "ns/iter",
            "extra": "iterations: 156626952\ncpu: 4.4735927568839 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.474030846567664,
            "unit": "ns/iter",
            "extra": "iterations: 156602448\ncpu: 4.473917406450843 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.474479517268694,
            "unit": "ns/iter",
            "extra": "iterations: 156611536\ncpu: 4.4740960014593725 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.366848484845422,
            "unit": "ns/iter",
            "extra": "iterations: 45762934\ncpu: 15.365964275804853 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.74965478013942,
            "unit": "ns/iter",
            "extra": "iterations: 39537847\ncpu: 17.748948317798003 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.73445003602169,
            "unit": "ns/iter",
            "extra": "iterations: 39693227\ncpu: 17.734309180757855 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 27.14989204028315,
            "unit": "ns/iter",
            "extra": "iterations: 25199677\ncpu: 27.148666230920394 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 48.70825950994153,
            "unit": "ns/iter",
            "extra": "iterations: 17757470\ncpu: 48.70679483056943 ns\nthreads: 1"
          },
          {
            "name": "Memory_vector_int_resize64x2p16",
            "value": 469697.36400267173,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 469664.0577568883 ns\nthreads: 1"
          },
          {
            "name": "Memory_vector_Pauli_resize64x2p16",
            "value": 469869.4989939853,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 469852.4258886657 ns\nthreads: 1"
          },
          {
            "name": "Memory_PauliTermContainer_insert64x2p16",
            "value": 643473.6538461687,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 643441.6172161101 ns\nthreads: 1"
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
          "id": "c072ac3b3fbed38ea51f87929b6934d17e11a685",
          "message": "Merge pull request #12 from zeFresk/better\n\nAdd KeepNTruncator + various fixes",
          "timestamp": "2025-09-01T21:54:42+02:00",
          "tree_id": "7b3a7640d4c1c5fb880189dda650ec2d53019f5d",
          "url": "https://github.com/zeFresk/ProPauli/commit/c072ac3b3fbed38ea51f87929b6934d17e11a685"
        },
        "date": 1756756785449,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 62.1883665161221,
            "unit": "ns/iter",
            "extra": "iterations: 11315355\ncpu: 62.175582118280865 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 41.28939073362702,
            "unit": "ns/iter",
            "extra": "iterations: 13760254\ncpu: 41.28541435354318 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 84.01767430000291,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 84.00563029999999 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 71.19115066720278,
            "unit": "ns/iter",
            "extra": "iterations: 9821441\ncpu: 71.16704524315729 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 222.38183098429903,
            "unit": "ns/iter",
            "extra": "iterations: 2914203\ncpu: 222.30170924949303 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 1161.8927124197608,
            "unit": "ns/iter",
            "extra": "iterations: 603369\ncpu: 1161.7994626836978 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 8465.623775698446,
            "unit": "ns/iter",
            "extra": "iterations: 82496\ncpu: 8465.099253297134 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 16829.36621909411,
            "unit": "ns/iter",
            "extra": "iterations: 41781\ncpu: 16828.588209951893 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 463.1052506816023,
            "unit": "ns/iter",
            "extra": "iterations: 1506014\ncpu: 463.05672457228206 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 908.2922084096045,
            "unit": "ns/iter",
            "extra": "iterations: 778352\ncpu: 908.2682796472563 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 1815.2932484679245,
            "unit": "ns/iter",
            "extra": "iterations: 389008\ncpu: 1815.1619221198503 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 464.5544380578771,
            "unit": "ns/iter",
            "extra": "iterations: 1478800\ncpu: 464.54145591019795 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 918.6235007675913,
            "unit": "ns/iter",
            "extra": "iterations: 761473\ncpu: 918.5503858968073 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 1831.8915234358192,
            "unit": "ns/iter",
            "extra": "iterations: 385392\ncpu: 1831.7351501847472 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 3728.2613045008375,
            "unit": "ns/iter",
            "extra": "iterations: 190433\ncpu: 3728.023877164152 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 62467.77587590189,
            "unit": "ns/iter",
            "extra": "iterations: 11217\ncpu: 62461.70696264605 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 31130041.999997206,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 31126944.13043479 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 3429.6716943719603,
            "unit": "ns/iter",
            "extra": "iterations: 207782\ncpu: 3429.46027567355 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 28660.733374313266,
            "unit": "ns/iter",
            "extra": "iterations: 43923\ncpu: 28659.137877649446 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 2986869.375776271,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2986613.7049689465 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 3894.283191577215,
            "unit": "ns/iter",
            "extra": "iterations: 178946\ncpu: 3894.103528438758 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 345.61457019192153,
            "unit": "ns/iter",
            "extra": "iterations: 2020495\ncpu: 345.5848794478584 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 380.3075848331812,
            "unit": "ns/iter",
            "extra": "iterations: 1864484\ncpu: 380.28396113884565 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 3769.1000507918257,
            "unit": "ns/iter",
            "extra": "iterations: 200818\ncpu: 3768.7857263791166 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 30782.099797631323,
            "unit": "ns/iter",
            "extra": "iterations: 17295\ncpu: 30778.644926279252 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 396.2970708649409,
            "unit": "ns/iter",
            "extra": "iterations: 1801385\ncpu: 396.26224987995323 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 466.5839974510282,
            "unit": "ns/iter",
            "extra": "iterations: 1500236\ncpu: 466.5298299734169 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 780.5071426102493,
            "unit": "ns/iter",
            "extra": "iterations: 896661\ncpu: 780.4561567861209 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 1668.8999191319506,
            "unit": "ns/iter",
            "extra": "iterations: 419201\ncpu: 1668.796768137482 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 15.885718855450907,
            "unit": "ns/iter",
            "extra": "iterations: 42440702\ncpu: 15.884842974557744 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 28.96386721971498,
            "unit": "ns/iter",
            "extra": "iterations: 23159884\ncpu: 28.962358274333255 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 143.36176170620246,
            "unit": "ns/iter",
            "extra": "iterations: 5106436\ncpu: 143.35381585121112 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 2952.508802732924,
            "unit": "ns/iter",
            "extra": "iterations: 230667\ncpu: 2952.368626634927 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 6869.669478675616,
            "unit": "ns/iter",
            "extra": "iterations: 98269\ncpu: 6869.524824715854 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 4.3711767895007005,
            "unit": "ns/iter",
            "extra": "iterations: 159684217\ncpu: 4.371025328069855 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 4.375760163243244,
            "unit": "ns/iter",
            "extra": "iterations: 159968107\ncpu: 4.375437805237043 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 4.374745468740578,
            "unit": "ns/iter",
            "extra": "iterations: 160069239\ncpu: 4.3746494852768265 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 4.383213573378819,
            "unit": "ns/iter",
            "extra": "iterations: 160102210\ncpu: 4.383146278867729 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 4.383024739138005,
            "unit": "ns/iter",
            "extra": "iterations: 160063661\ncpu: 4.382626822461604 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 5.040748898480148,
            "unit": "ns/iter",
            "extra": "iterations: 138689025\ncpu: 5.040472705032019 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 4.3263619019362265,
            "unit": "ns/iter",
            "extra": "iterations: 161789347\ncpu: 4.325912749990905 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 4.119353350263347,
            "unit": "ns/iter",
            "extra": "iterations: 170242519\ncpu: 4.119067276019328 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 4.091525795756633,
            "unit": "ns/iter",
            "extra": "iterations: 171419706\ncpu: 4.0911490421060455 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 4.118638841738607,
            "unit": "ns/iter",
            "extra": "iterations: 170637733\ncpu: 4.11826331518365 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.685185527404371,
            "unit": "ns/iter",
            "extra": "iterations: 149406095\ncpu: 4.684874636473163 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.688725088019754,
            "unit": "ns/iter",
            "extra": "iterations: 149468750\ncpu: 4.688253370687843 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.685284850272092,
            "unit": "ns/iter",
            "extra": "iterations: 149368402\ncpu: 4.685001410137586 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.685678732541767,
            "unit": "ns/iter",
            "extra": "iterations: 149439748\ncpu: 4.68524052917965 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.686128517445225,
            "unit": "ns/iter",
            "extra": "iterations: 148843809\ncpu: 4.685895205758945 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 65.79314930804622,
            "unit": "ns/iter",
            "extra": "iterations: 10717078\ncpu: 65.78583033547046 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 74.35409461630064,
            "unit": "ns/iter",
            "extra": "iterations: 9308882\ncpu: 74.34923560101001 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 74.10462383516597,
            "unit": "ns/iter",
            "extra": "iterations: 9463551\ncpu: 74.09916975139716 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 83.32856929625001,
            "unit": "ns/iter",
            "extra": "iterations: 8394561\ncpu: 83.32468273206888 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 117.37761310528394,
            "unit": "ns/iter",
            "extra": "iterations: 6065102\ncpu: 117.36520144261407 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 110.96267183717056,
            "unit": "ns/iter",
            "extra": "iterations: 6307061\ncpu: 110.95340428767084 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 117.05936626537816,
            "unit": "ns/iter",
            "extra": "iterations: 6024162\ncpu: 117.04878969058358 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 115.86973675716791,
            "unit": "ns/iter",
            "extra": "iterations: 6010268\ncpu: 115.85957381600947 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 127.53041229899166,
            "unit": "ns/iter",
            "extra": "iterations: 5486892\ncpu: 127.52087721063123 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 161.386995439059,
            "unit": "ns/iter",
            "extra": "iterations: 4336617\ncpu: 161.3773176187817 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 2957.985094793322,
            "unit": "ns/iter",
            "extra": "iterations: 236092\ncpu: 2957.6838139369083 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 3842.055917287772,
            "unit": "ns/iter",
            "extra": "iterations: 182609\ncpu: 3841.6025880432826 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 3615.9481422507656,
            "unit": "ns/iter",
            "extra": "iterations: 193433\ncpu: 3615.750885319487 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 11498.100416893474,
            "unit": "ns/iter",
            "extra": "iterations: 60687\ncpu: 11497.677888180151 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 24317.23962006951,
            "unit": "ns/iter",
            "extra": "iterations: 28637\ncpu: 24300.574885637234 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 786708.7946128313,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 786637.0628507283 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 941875.6966759429,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 941788.6246537522 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 1054596.132530023,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1054464.402108432 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 1566464.3393257505,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 1566184.1550561693 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 2259678.845394762,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 2259524.121710558 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 81597.42813848577,
            "unit": "ns/iter",
            "extra": "iterations: 8579\ncpu: 81589.53409488425 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 81708.49713952461,
            "unit": "ns/iter",
            "extra": "iterations: 8565\ncpu: 81702.33473438483 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 82762.32051585392,
            "unit": "ns/iter",
            "extra": "iterations: 8452\ncpu: 82757.19628490154 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 123263.75911001589,
            "unit": "ns/iter",
            "extra": "iterations: 5708\ncpu: 123249.79537491147 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 157116.6105939679,
            "unit": "ns/iter",
            "extra": "iterations: 4512\ncpu: 157103.6046099303 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 121.24736403714931,
            "unit": "ns/iter",
            "extra": "iterations: 5780715\ncpu: 121.23387712419591 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 129.1899855869257,
            "unit": "ns/iter",
            "extra": "iterations: 5413837\ncpu: 129.18838745976328 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 139.51836032809788,
            "unit": "ns/iter",
            "extra": "iterations: 5001708\ncpu: 139.50577502724943 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 166.1672531393489,
            "unit": "ns/iter",
            "extra": "iterations: 4196274\ncpu: 166.14999735479518 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 224.1128551939398,
            "unit": "ns/iter",
            "extra": "iterations: 3118226\ncpu: 224.09206260226148 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 148.4668140970306,
            "unit": "ns/iter",
            "extra": "iterations: 4724491\ncpu: 148.4570316675392 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 170.27271306359395,
            "unit": "ns/iter",
            "extra": "iterations: 4139468\ncpu: 170.26225423170126 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 170.4463357800032,
            "unit": "ns/iter",
            "extra": "iterations: 3759777\ncpu: 170.4280533127348 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 218.19646026811904,
            "unit": "ns/iter",
            "extra": "iterations: 3030399\ncpu: 218.18488489469362 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 322.2594040612947,
            "unit": "ns/iter",
            "extra": "iterations: 2273858\ncpu: 322.2319872217177 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 283.35754621014297,
            "unit": "ns/iter",
            "extra": "iterations: 2471426\ncpu: 283.34389376821713 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 388.2255630494181,
            "unit": "ns/iter",
            "extra": "iterations: 1686575\ncpu: 388.19651008700896 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 871.1799513293241,
            "unit": "ns/iter",
            "extra": "iterations: 1042104\ncpu: 871.1352744063937 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 1028.1440266270777,
            "unit": "ns/iter",
            "extra": "iterations: 691025\ncpu: 1028.0414152888977 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 2725.371529431682,
            "unit": "ns/iter",
            "extra": "iterations: 296025\ncpu: 2725.2136711426583 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 3058.531871336397,
            "unit": "ns/iter",
            "extra": "iterations: 229093\ncpu: 3058.2582793886854 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 5411.067616078164,
            "unit": "ns/iter",
            "extra": "iterations: 152656\ncpu: 5410.724799549317 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 160066.47724074032,
            "unit": "ns/iter",
            "extra": "iterations: 8524\ncpu: 160058.05478648475 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 89623.56323827218,
            "unit": "ns/iter",
            "extra": "iterations: 6942\ncpu: 89618.30164217774 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 147575.93715341383,
            "unit": "ns/iter",
            "extra": "iterations: 7033\ncpu: 147568.5027726417 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 83.98403625144981,
            "unit": "ns/iter",
            "extra": "iterations: 8376604\ncpu: 83.97384596430689 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 85.0209059415512,
            "unit": "ns/iter",
            "extra": "iterations: 8229096\ncpu: 85.01431870523689 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 86.29942689889519,
            "unit": "ns/iter",
            "extra": "iterations: 8099967\ncpu: 86.29355403546698 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 96.27118059851225,
            "unit": "ns/iter",
            "extra": "iterations: 7273260\ncpu: 96.26600245281966 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 128.30257499473592,
            "unit": "ns/iter",
            "extra": "iterations: 5395545\ncpu: 128.29628962412605 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 85.86373616047842,
            "unit": "ns/iter",
            "extra": "iterations: 8152016\ncpu: 85.85470097212644 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 86.2676544845531,
            "unit": "ns/iter",
            "extra": "iterations: 8167160\ncpu: 86.26111500203288 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 86.66494235475012,
            "unit": "ns/iter",
            "extra": "iterations: 8095983\ncpu: 86.6586549156547 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 96.70910318686025,
            "unit": "ns/iter",
            "extra": "iterations: 7250351\ncpu: 96.70214242041529 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 128.58588146081286,
            "unit": "ns/iter",
            "extra": "iterations: 5433140\ncpu: 128.58402249896073 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 93.08925662993224,
            "unit": "ns/iter",
            "extra": "iterations: 7682701\ncpu: 93.08105925246757 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 90.71756971688909,
            "unit": "ns/iter",
            "extra": "iterations: 7686874\ncpu: 90.70898131021801 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 95.24862150715886,
            "unit": "ns/iter",
            "extra": "iterations: 7218028\ncpu: 95.24310808990957 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 134.59973983326694,
            "unit": "ns/iter",
            "extra": "iterations: 4823830\ncpu: 134.58463606719386 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 1488.7044341996,
            "unit": "ns/iter",
            "extra": "iterations: 470254\ncpu: 1488.6431588035227 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 627.9508445719458,
            "unit": "ns/iter",
            "extra": "iterations: 1589977\ncpu: 627.8917235909723 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 797.9468055715911,
            "unit": "ns/iter",
            "extra": "iterations: 2635088\ncpu: 797.887112308964 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 1852.8824260261365,
            "unit": "ns/iter",
            "extra": "iterations: 392774\ncpu: 1852.7210329604102 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 11888.482344812626,
            "unit": "ns/iter",
            "extra": "iterations: 59331\ncpu: 11888.098902765727 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 1936.7917845611194,
            "unit": "ns/iter",
            "extra": "iterations: 260826\ncpu: 1936.73772553342 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 85.44095805052963,
            "unit": "ns/iter",
            "extra": "iterations: 8187543\ncpu: 85.43328065575044 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 87.1235392032034,
            "unit": "ns/iter",
            "extra": "iterations: 8043641\ncpu: 87.11778210887152 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 157.62205015559576,
            "unit": "ns/iter",
            "extra": "iterations: 4413665\ncpu: 157.60712083948994 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 241.73118470391276,
            "unit": "ns/iter",
            "extra": "iterations: 2890680\ncpu: 241.72651279283545 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 367.6953570929371,
            "unit": "ns/iter",
            "extra": "iterations: 1903678\ncpu: 367.6595711039432 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 87.40228341259896,
            "unit": "ns/iter",
            "extra": "iterations: 8007576\ncpu: 87.39904073342558 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 89.52113707456645,
            "unit": "ns/iter",
            "extra": "iterations: 7828827\ncpu: 89.51170654300967 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 179.44496598636533,
            "unit": "ns/iter",
            "extra": "iterations: 3904022\ncpu: 179.43268916005533 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 335.81219069865784,
            "unit": "ns/iter",
            "extra": "iterations: 2085951\ncpu: 335.7857691767349 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 547.9213485081477,
            "unit": "ns/iter",
            "extra": "iterations: 1277026\ncpu: 547.882867694172 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 106.53658779043076,
            "unit": "ns/iter",
            "extra": "iterations: 6558841\ncpu: 106.5318480810876 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 118.2636242871719,
            "unit": "ns/iter",
            "extra": "iterations: 5948458\ncpu: 118.25176289384693 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 302.613396350345,
            "unit": "ns/iter",
            "extra": "iterations: 2318527\ncpu: 302.59773856418457 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 989.0501428211792,
            "unit": "ns/iter",
            "extra": "iterations: 707878\ncpu: 988.9721491556452 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 2963.3745049785293,
            "unit": "ns/iter",
            "extra": "iterations: 236101\ncpu: 2963.275488032595 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 505.26652820495985,
            "unit": "ns/iter",
            "extra": "iterations: 1384739\ncpu: 505.22569090636335 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 670.2834687750383,
            "unit": "ns/iter",
            "extra": "iterations: 1044115\ncpu: 670.2360908520673 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 4104.472464396701,
            "unit": "ns/iter",
            "extra": "iterations: 170561\ncpu: 4104.075527230885 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 22937.4213925113,
            "unit": "ns/iter",
            "extra": "iterations: 30506\ncpu: 22935.47157936092 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 24038.562296149878,
            "unit": "ns/iter",
            "extra": "iterations: 29127\ncpu: 24036.401723487215 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/64/4",
            "value": 86.55861839013447,
            "unit": "ns/iter",
            "extra": "iterations: 8088622\ncpu: 86.55246505523168 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/512/4",
            "value": 124.48322376210315,
            "unit": "ns/iter",
            "extra": "iterations: 5629063\ncpu: 124.47756704801087 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/1024/4",
            "value": 1486.2656248011333,
            "unit": "ns/iter",
            "extra": "iterations: 471078\ncpu: 1486.1343195818927 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/64/8",
            "value": 1494.1072885896813,
            "unit": "ns/iter",
            "extra": "iterations: 468568\ncpu: 1494.0650599272462 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/512/8",
            "value": 10959.82553464282,
            "unit": "ns/iter",
            "extra": "iterations: 63921\ncpu: 10959.267658516113 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/1024/8",
            "value": 1460.3727761559499,
            "unit": "ns/iter",
            "extra": "iterations: 480924\ncpu: 1460.227609767855 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.5790760326813285,
            "unit": "ns/iter",
            "extra": "iterations: 152819193\ncpu: 4.578805935717666 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.581126382350028,
            "unit": "ns/iter",
            "extra": "iterations: 152794777\ncpu: 4.580799617253984 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.578991325150179,
            "unit": "ns/iter",
            "extra": "iterations: 152860855\ncpu: 4.578670373131253 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.579685335112247,
            "unit": "ns/iter",
            "extra": "iterations: 152848576\ncpu: 4.579218572504061 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.578631386397727,
            "unit": "ns/iter",
            "extra": "iterations: 152672909\ncpu: 4.578617827999815 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 5.057283239999606,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.056877659999941 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 5.060577499999681,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.05992765000002 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 5.05939278000028,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.059302800000012 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 5.066242929999589,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.065652739999962 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 5.0660769099999925,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.065553379999983 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 54.71223981258001,
            "unit": "ns/iter",
            "extra": "iterations: 12836324\ncpu: 54.71135404497605 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 57.23011981860286,
            "unit": "ns/iter",
            "extra": "iterations: 12294669\ncpu: 57.22650402381807 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 56.52819424708847,
            "unit": "ns/iter",
            "extra": "iterations: 12435090\ncpu: 56.52250228989188 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 61.94902635659585,
            "unit": "ns/iter",
            "extra": "iterations: 11330483\ncpu: 61.94406813901986 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 95.46268319205792,
            "unit": "ns/iter",
            "extra": "iterations: 7336426\ncpu: 95.45293771108486 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.6238730965144834,
            "unit": "ns/iter",
            "extra": "iterations: 1123478866\ncpu: 0.623845061274183 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.0655586801421515,
            "unit": "ns/iter",
            "extra": "iterations: 656796917\ncpu: 1.065455500607965 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7350586016720653,
            "unit": "ns/iter",
            "extra": "iterations: 941439947\ncpu: 0.7350290936825993 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.8576018826318477,
            "unit": "ns/iter",
            "extra": "iterations: 804233273\ncpu: 0.8575246898544958 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.537713926512395,
            "unit": "ns/iter",
            "extra": "iterations: 106886179\ncpu: 6.537321134849346 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.848728562985487,
            "unit": "ns/iter",
            "extra": "iterations: 823174556\ncpu: 0.8486833101289418 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.8220816306016432,
            "unit": "ns/iter",
            "extra": "iterations: 851762949\ncpu: 0.8220008910014023 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.6782436748896516,
            "unit": "ns/iter",
            "extra": "iterations: 1032104130\ncpu: 0.6781961486773692 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 15.886568793307811,
            "unit": "ns/iter",
            "extra": "iterations: 44098279\ncpu: 15.88554521594802 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 30.80364330423615,
            "unit": "ns/iter",
            "extra": "iterations: 23879532\ncpu: 30.800467320716166 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 137.17475741620947,
            "unit": "ns/iter",
            "extra": "iterations: 4902842\ncpu: 137.16304278212536 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 3244.4176137238906,
            "unit": "ns/iter",
            "extra": "iterations: 226755\ncpu: 3244.165579590369 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 6973.374402104245,
            "unit": "ns/iter",
            "extra": "iterations: 100352\ncpu: 6973.005371093564 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.9383779748299145,
            "unit": "ns/iter",
            "extra": "iterations: 747316270\ncpu: 0.9382853192798869 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.9380783470405012,
            "unit": "ns/iter",
            "extra": "iterations: 746301476\ncpu: 0.9380688495381947 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 0.9381462429672898,
            "unit": "ns/iter",
            "extra": "iterations: 746503288\ncpu: 0.9380791032764858 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.9386185777062633,
            "unit": "ns/iter",
            "extra": "iterations: 745785749\ncpu: 0.9385743679583407 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.9392524791943839,
            "unit": "ns/iter",
            "extra": "iterations: 745295617\ncpu: 0.9391654345392232 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.24710468817731,
            "unit": "ns/iter",
            "extra": "iterations: 216040288\ncpu: 3.2469962408122477 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.1870350695634024,
            "unit": "ns/iter",
            "extra": "iterations: 590198508\ncpu: 1.1869588020035993 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.0109351075079493,
            "unit": "ns/iter",
            "extra": "iterations: 693275580\ncpu: 1.0108792696838094 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.9491947438467521,
            "unit": "ns/iter",
            "extra": "iterations: 738367658\ncpu: 0.9491056662723011 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.9445837447616235,
            "unit": "ns/iter",
            "extra": "iterations: 740738522\ncpu: 0.9444999918608361 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 24.75520203353881,
            "unit": "ns/iter",
            "extra": "iterations: 28354921\ncpu: 24.753161682234946 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 29.971860896032823,
            "unit": "ns/iter",
            "extra": "iterations: 22812951\ncpu: 29.96905985551795 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 29.354420655392918,
            "unit": "ns/iter",
            "extra": "iterations: 23321327\ncpu: 29.351286957213063 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.442013515968405,
            "unit": "ns/iter",
            "extra": "iterations: 19265067\ncpu: 36.43889471030631 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 42.45604272559297,
            "unit": "ns/iter",
            "extra": "iterations: 16718598\ncpu: 42.45200991135708 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 15.625158307720955,
            "unit": "ns/iter",
            "extra": "iterations: 44470352\ncpu: 15.624665012770858 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 7.564074552307957,
            "unit": "ns/iter",
            "extra": "iterations: 92760375\ncpu: 7.563514959916856 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 7.55325471974501,
            "unit": "ns/iter",
            "extra": "iterations: 92816947\ncpu: 7.553030418033486 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 7.555336358580207,
            "unit": "ns/iter",
            "extra": "iterations: 92690857\ncpu: 7.555115344332388 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 7.561451984022408,
            "unit": "ns/iter",
            "extra": "iterations: 92794685\ncpu: 7.560888966862469 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.2433787129404934,
            "unit": "ns/iter",
            "extra": "iterations: 562780690\ncpu: 1.2433331872136542 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 4.392282334851299,
            "unit": "ns/iter",
            "extra": "iterations: 159541905\ncpu: 4.392028125776852 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.181516109225234,
            "unit": "ns/iter",
            "extra": "iterations: 85515567\ncpu: 8.181232546817998 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 57.511135450414756,
            "unit": "ns/iter",
            "extra": "iterations: 12157748\ncpu: 57.50778622817179 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 115.86927392229397,
            "unit": "ns/iter",
            "extra": "iterations: 6045565\ncpu: 115.86684983124051 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.9328449842539759,
            "unit": "ns/iter",
            "extra": "iterations: 749737327\ncpu: 0.932832913359803 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.385919063525067,
            "unit": "ns/iter",
            "extra": "iterations: 207163977\ncpu: 3.3858035994356652 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.430022371900721,
            "unit": "ns/iter",
            "extra": "iterations: 109318831\ncpu: 6.429889988486996 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.169544528611794,
            "unit": "ns/iter",
            "extra": "iterations: 18348112\ncpu: 38.167458646426475 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 72.64912324977938,
            "unit": "ns/iter",
            "extra": "iterations: 9668033\ncpu: 72.64816752280366 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.2489692521435756,
            "unit": "ns/iter",
            "extra": "iterations: 560928889\ncpu: 1.2488686761148313 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.2490466328169842,
            "unit": "ns/iter",
            "extra": "iterations: 560580183\ncpu: 1.2490210771506716 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.2491006604976918,
            "unit": "ns/iter",
            "extra": "iterations: 560428791\ncpu: 1.2490098282620168 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.2492845852507777,
            "unit": "ns/iter",
            "extra": "iterations: 560504589\ncpu: 1.2492790616563423 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.250111071196552,
            "unit": "ns/iter",
            "extra": "iterations: 560298276\ncpu: 1.250046623381011 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.475137469024342,
            "unit": "ns/iter",
            "extra": "iterations: 156578910\ncpu: 4.474967203437649 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.475092947293201,
            "unit": "ns/iter",
            "extra": "iterations: 156566959\ncpu: 4.474965972865443 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.475190866991299,
            "unit": "ns/iter",
            "extra": "iterations: 156532697\ncpu: 4.475021816049126 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.477338931843531,
            "unit": "ns/iter",
            "extra": "iterations: 156518306\ncpu: 4.477193083088952 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.475904615814723,
            "unit": "ns/iter",
            "extra": "iterations: 156498480\ncpu: 4.4755855264535995 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.096158995863817,
            "unit": "ns/iter",
            "extra": "iterations: 46612030\ncpu: 15.095603817297812 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.760809905135062,
            "unit": "ns/iter",
            "extra": "iterations: 39535939\ncpu: 17.760034661121924 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.73040448512473,
            "unit": "ns/iter",
            "extra": "iterations: 39470920\ncpu: 17.729591734876927 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 27.573503002667113,
            "unit": "ns/iter",
            "extra": "iterations: 25979238\ncpu: 27.572514944434005 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 40.36716521049163,
            "unit": "ns/iter",
            "extra": "iterations: 17981769\ncpu: 40.364831847188384 ns\nthreads: 1"
          },
          {
            "name": "Memory_vector_int_resize64x2p16",
            "value": 475242.70788039576,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 475231.1929347803 ns\nthreads: 1"
          },
          {
            "name": "Memory_vector_Pauli_resize64x2p16",
            "value": 475570.1142080803,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 475547.42828008166 ns\nthreads: 1"
          },
          {
            "name": "Memory_PauliTermContainer_insert64x2p16",
            "value": 620423.9336870067,
            "unit": "ns/iter",
            "extra": "iterations: 1131\ncpu: 620414.3934571177 ns\nthreads: 1"
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
          "id": "95808776262ee757c0f0efc8b8cbcacaa06182fc",
          "message": "Merge pull request #13 from zeFresk/symbolic\n\nAdded full symbolic support",
          "timestamp": "2025-09-13T19:57:16+02:00",
          "tree_id": "30391c46203caf8ff45ade0f8d4a6b34ebfd58b5",
          "url": "https://github.com/zeFresk/ProPauli/commit/95808776262ee757c0f0efc8b8cbcacaa06182fc"
        },
        "date": 1757786684173,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 64.22209419631295,
            "unit": "ns/iter",
            "extra": "iterations: 11017735\ncpu: 64.21755161110701 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 41.90378301142914,
            "unit": "ns/iter",
            "extra": "iterations: 13777463\ncpu: 41.90137189989188 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 81.02381470000068,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 81.01443969999998 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 71.03204573724,
            "unit": "ns/iter",
            "extra": "iterations: 9855601\ncpu: 71.02442793696703 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 222.3160925763627,
            "unit": "ns/iter",
            "extra": "iterations: 3149011\ncpu: 222.28891801267122 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 1159.8128132368095,
            "unit": "ns/iter",
            "extra": "iterations: 604375\ncpu: 1159.7336686659762 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 8495.889162352396,
            "unit": "ns/iter",
            "extra": "iterations: 82481\ncpu: 8495.300626811028 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 16748.440600670398,
            "unit": "ns/iter",
            "extra": "iterations: 39689\ncpu: 16747.668296001404 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 465.26508638888384,
            "unit": "ns/iter",
            "extra": "iterations: 1503955\ncpu: 465.2446708844351 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 916.8065035682092,
            "unit": "ns/iter",
            "extra": "iterations: 759337\ncpu: 916.7761336534368 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 1807.775412527587,
            "unit": "ns/iter",
            "extra": "iterations: 387368\ncpu: 1807.6556891637929 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 460.9547870231393,
            "unit": "ns/iter",
            "extra": "iterations: 1500609\ncpu: 460.9323501325131 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 901.2551029619692,
            "unit": "ns/iter",
            "extra": "iterations: 775432\ncpu: 901.1917614955264 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 1932.2541372420587,
            "unit": "ns/iter",
            "extra": "iterations: 383891\ncpu: 1932.1675319296382 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 3651.3127461482813,
            "unit": "ns/iter",
            "extra": "iterations: 193227\ncpu: 3651.229144995266 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 62377.05119026502,
            "unit": "ns/iter",
            "extra": "iterations: 11174\ncpu: 62372.408537676856 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 31150530.59090914,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 31149007.772727285 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 3394.457548998485,
            "unit": "ns/iter",
            "extra": "iterations: 208935\ncpu: 3394.2918132433547 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 28701.263905216594,
            "unit": "ns/iter",
            "extra": "iterations: 43383\ncpu: 28699.638983011817 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 2980802.279874221,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2980696.924528306 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 3868.1853181892643,
            "unit": "ns/iter",
            "extra": "iterations: 179610\ncpu: 3868.003836089314 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 343.2117486727204,
            "unit": "ns/iter",
            "extra": "iterations: 2039890\ncpu: 343.1877929692282 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 372.02658345561434,
            "unit": "ns/iter",
            "extra": "iterations: 1897985\ncpu: 372.01107437624756 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 3697.3794918563967,
            "unit": "ns/iter",
            "extra": "iterations: 201754\ncpu: 3697.3036866679317 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 30940.32701807356,
            "unit": "ns/iter",
            "extra": "iterations: 17207\ncpu: 30940.311559249036 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 390.18543564198296,
            "unit": "ns/iter",
            "extra": "iterations: 1795534\ncpu: 390.16848970835457 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 448.07620382577943,
            "unit": "ns/iter",
            "extra": "iterations: 1561667\ncpu: 448.0541607141609 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 744.9165770324576,
            "unit": "ns/iter",
            "extra": "iterations: 918548\ncpu: 744.8947589020933 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 1596.532089604977,
            "unit": "ns/iter",
            "extra": "iterations: 438413\ncpu: 1596.539083010766 ns\nthreads: 1"
          },
          {
            "name": "MaxCutQAOAN4P1/run",
            "value": 13299.218262636941,
            "unit": "ns/iter",
            "extra": "iterations: 52643\ncpu: 13297.851509222524 ns\nthreads: 1"
          },
          {
            "name": "MaxCutQAOAN4P1/ev",
            "value": 180.1435924359814,
            "unit": "ns/iter",
            "extra": "iterations: 3889411\ncpu: 180.13519784872312 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 16.193416564700772,
            "unit": "ns/iter",
            "extra": "iterations: 43272788\ncpu: 16.19268060564983 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 27.998878064263884,
            "unit": "ns/iter",
            "extra": "iterations: 23380127\ncpu: 27.996974054075977 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 133.7668275078889,
            "unit": "ns/iter",
            "extra": "iterations: 5125759\ncpu: 133.75987673240112 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 3166.086184601943,
            "unit": "ns/iter",
            "extra": "iterations: 223497\ncpu: 3165.9453236508975 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 7056.986706768906,
            "unit": "ns/iter",
            "extra": "iterations: 97418\ncpu: 7056.828584039946 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 4.367933373682676,
            "unit": "ns/iter",
            "extra": "iterations: 160112347\ncpu: 4.367646075414779 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 4.367549670713789,
            "unit": "ns/iter",
            "extra": "iterations: 160204211\ncpu: 4.367277280869959 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 4.3692931690064105,
            "unit": "ns/iter",
            "extra": "iterations: 160216305\ncpu: 4.3690396305169665 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 4.3702618757078815,
            "unit": "ns/iter",
            "extra": "iterations: 160191529\ncpu: 4.370056490315411 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 4.372527679458942,
            "unit": "ns/iter",
            "extra": "iterations: 160195146\ncpu: 4.372160296292599 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 5.021135151540689,
            "unit": "ns/iter",
            "extra": "iterations: 139836660\ncpu: 5.020647003439573 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 4.33271207665143,
            "unit": "ns/iter",
            "extra": "iterations: 161003768\ncpu: 4.332480628652117 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 4.358242113577812,
            "unit": "ns/iter",
            "extra": "iterations: 160788818\ncpu: 4.357997152513411 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 4.106110511636495,
            "unit": "ns/iter",
            "extra": "iterations: 170302826\ncpu: 4.105782953948144 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 4.0949523625807,
            "unit": "ns/iter",
            "extra": "iterations: 170958674\ncpu: 4.094876320811873 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.683081732542272,
            "unit": "ns/iter",
            "extra": "iterations: 146825850\ncpu: 4.68284579997328 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.682607914401077,
            "unit": "ns/iter",
            "extra": "iterations: 149581704\ncpu: 4.6823091144890245 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.683736379757693,
            "unit": "ns/iter",
            "extra": "iterations: 149466777\ncpu: 4.683484491004999 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.6831511919289,
            "unit": "ns/iter",
            "extra": "iterations: 149153987\ncpu: 4.682908938934384 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.683199321625613,
            "unit": "ns/iter",
            "extra": "iterations: 149147168\ncpu: 4.682916882471382 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 69.22567362255394,
            "unit": "ns/iter",
            "extra": "iterations: 10130896\ncpu: 69.22058493148118 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 78.49309442822758,
            "unit": "ns/iter",
            "extra": "iterations: 8780446\ncpu: 78.4861753036231 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 73.98653093628991,
            "unit": "ns/iter",
            "extra": "iterations: 9473487\ncpu: 73.98082796756889 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 83.24577976982339,
            "unit": "ns/iter",
            "extra": "iterations: 8384673\ncpu: 83.23851854449296 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 129.97451501596595,
            "unit": "ns/iter",
            "extra": "iterations: 5383837\ncpu: 129.96701868945934 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 116.32297956891613,
            "unit": "ns/iter",
            "extra": "iterations: 6019260\ncpu: 116.31394972139401 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 122.42571534338693,
            "unit": "ns/iter",
            "extra": "iterations: 5734973\ncpu: 122.42266423922212 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 116.86992952216275,
            "unit": "ns/iter",
            "extra": "iterations: 5951658\ncpu: 116.86297750979459 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 128.3160622226025,
            "unit": "ns/iter",
            "extra": "iterations: 5467145\ncpu: 128.30676120717422 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 173.2883657249542,
            "unit": "ns/iter",
            "extra": "iterations: 4058766\ncpu: 173.2802004353063 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 2895.003107078503,
            "unit": "ns/iter",
            "extra": "iterations: 242028\ncpu: 2894.6841770373553 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 3843.8562922512997,
            "unit": "ns/iter",
            "extra": "iterations: 182391\ncpu: 3843.72296878681 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 3630.1388275910194,
            "unit": "ns/iter",
            "extra": "iterations: 193499\ncpu: 3629.798805161774 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 14180.422839757339,
            "unit": "ns/iter",
            "extra": "iterations: 49300\ncpu: 14179.159229208892 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 25964.96225224442,
            "unit": "ns/iter",
            "extra": "iterations: 26942\ncpu: 25962.31122411104 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 775267.5613259905,
            "unit": "ns/iter",
            "extra": "iterations: 905\ncpu: 775224.791160227 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 869198.8617683343,
            "unit": "ns/iter",
            "extra": "iterations: 803\ncpu: 869090.2353673625 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 1051282.4632683916,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1051172.3478261046 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 1504650.7149219566,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 1504544.3853006875 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 2303080.438709656,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2302864.080645174 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 81643.78216782781,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 81637.8850815843 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 81765.6350390514,
            "unit": "ns/iter",
            "extra": "iterations: 8579\ncpu: 81756.17333022486 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 83052.40735468741,
            "unit": "ns/iter",
            "extra": "iterations: 8430\ncpu: 83047.88956109143 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 104992.35482899101,
            "unit": "ns/iter",
            "extra": "iterations: 6637\ncpu: 104986.12957661622 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 144428.15840362487,
            "unit": "ns/iter",
            "extra": "iterations: 4861\ncpu: 144414.54926969693 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 121.76756367968359,
            "unit": "ns/iter",
            "extra": "iterations: 5732284\ncpu: 121.7643457651443 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 129.29774494527754,
            "unit": "ns/iter",
            "extra": "iterations: 5416720\ncpu: 129.28440975350406 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 139.92695684244634,
            "unit": "ns/iter",
            "extra": "iterations: 5005219\ncpu: 139.9238045328289 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 165.53762960304525,
            "unit": "ns/iter",
            "extra": "iterations: 4240159\ncpu: 165.52953438774418 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 233.5799808936954,
            "unit": "ns/iter",
            "extra": "iterations: 3000054\ncpu: 233.5687990949497 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 147.3276438616491,
            "unit": "ns/iter",
            "extra": "iterations: 4759903\ncpu: 147.32108280357616 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 168.43941345814818,
            "unit": "ns/iter",
            "extra": "iterations: 4130447\ncpu: 168.4271031682525 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 168.86141453391096,
            "unit": "ns/iter",
            "extra": "iterations: 3775901\ncpu: 168.8518035827734 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 219.79731058311643,
            "unit": "ns/iter",
            "extra": "iterations: 3028017\ncpu: 219.78161186017195 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 330.25564673319735,
            "unit": "ns/iter",
            "extra": "iterations: 2198882\ncpu: 330.23081365894683 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 282.7291978698368,
            "unit": "ns/iter",
            "extra": "iterations: 2480383\ncpu: 282.7124992390325 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 408.6950952015114,
            "unit": "ns/iter",
            "extra": "iterations: 1546404\ncpu: 408.67856071247263 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 817.3339323662759,
            "unit": "ns/iter",
            "extra": "iterations: 1210284\ncpu: 817.3127257734557 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 1041.4587777529111,
            "unit": "ns/iter",
            "extra": "iterations: 687226\ncpu: 1041.4044317298842 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 2792.858144550535,
            "unit": "ns/iter",
            "extra": "iterations: 293503\ncpu: 2792.6603646299977 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 2998.3176886499537,
            "unit": "ns/iter",
            "extra": "iterations: 233647\ncpu: 2998.118482154686 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 5551.842467248133,
            "unit": "ns/iter",
            "extra": "iterations: 151213\ncpu: 5551.665769477504 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 161938.707261633,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 161925.2104318689 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 89166.18014603027,
            "unit": "ns/iter",
            "extra": "iterations: 7122\ncpu: 89164.21510811511 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 146897.46176847653,
            "unit": "ns/iter",
            "extra": "iterations: 7023\ncpu: 146888.33176705198 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 84.2047216793061,
            "unit": "ns/iter",
            "extra": "iterations: 8317761\ncpu: 84.20278137349763 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 85.27282817708048,
            "unit": "ns/iter",
            "extra": "iterations: 8219305\ncpu: 85.26645805211017 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 85.1377681953374,
            "unit": "ns/iter",
            "extra": "iterations: 8219662\ncpu: 85.1319186847333 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 94.47790098065194,
            "unit": "ns/iter",
            "extra": "iterations: 7471146\ncpu: 94.47312299880188 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 136.9356560080861,
            "unit": "ns/iter",
            "extra": "iterations: 5126446\ncpu: 136.92548521919605 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 84.59388774524915,
            "unit": "ns/iter",
            "extra": "iterations: 8230547\ncpu: 84.59172081758393 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 86.40414818661266,
            "unit": "ns/iter",
            "extra": "iterations: 8111448\ncpu: 86.40074657447201 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 86.97740643003162,
            "unit": "ns/iter",
            "extra": "iterations: 8048042\ncpu: 86.9714438617481 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 95.8827700105108,
            "unit": "ns/iter",
            "extra": "iterations: 7296290\ncpu: 95.87655137062781 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 138.76512565607098,
            "unit": "ns/iter",
            "extra": "iterations: 5055665\ncpu: 138.75712670835463 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 92.61029563885928,
            "unit": "ns/iter",
            "extra": "iterations: 7719249\ncpu: 92.60644500520665 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 89.93541653458513,
            "unit": "ns/iter",
            "extra": "iterations: 6814128\ncpu: 89.93271817024811 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 101.56803519895516,
            "unit": "ns/iter",
            "extra": "iterations: 6721337\ncpu: 101.56320743923548 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 143.57850897282165,
            "unit": "ns/iter",
            "extra": "iterations: 4661015\ncpu: 143.57104343152747 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 1489.121556408701,
            "unit": "ns/iter",
            "extra": "iterations: 470185\ncpu: 1489.0491870221267 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 638.0270179100685,
            "unit": "ns/iter",
            "extra": "iterations: 1511886\ncpu: 637.9925358128847 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 829.214231816165,
            "unit": "ns/iter",
            "extra": "iterations: 2609421\ncpu: 829.1806730305344 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 1865.5067188843925,
            "unit": "ns/iter",
            "extra": "iterations: 386076\ncpu: 1865.4231653871418 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 11867.326784424005,
            "unit": "ns/iter",
            "extra": "iterations: 59501\ncpu: 11866.478244063052 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 2322.9239234674465,
            "unit": "ns/iter",
            "extra": "iterations: 342024\ncpu: 2322.815466166091 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 86.23086241214284,
            "unit": "ns/iter",
            "extra": "iterations: 8117337\ncpu: 86.22719778666468 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 87.69984863703012,
            "unit": "ns/iter",
            "extra": "iterations: 7988083\ncpu: 87.696350300814 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 159.5349948229264,
            "unit": "ns/iter",
            "extra": "iterations: 4405966\ncpu: 159.52213385214537 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 241.3701388033957,
            "unit": "ns/iter",
            "extra": "iterations: 2899569\ncpu: 241.36094743735424 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 367.6377265803866,
            "unit": "ns/iter",
            "extra": "iterations: 1904567\ncpu: 367.6157945611856 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 88.80706061886636,
            "unit": "ns/iter",
            "extra": "iterations: 7887099\ncpu: 88.80525906927255 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 90.63305824589249,
            "unit": "ns/iter",
            "extra": "iterations: 7710518\ncpu: 90.62972280201988 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 180.64667366364026,
            "unit": "ns/iter",
            "extra": "iterations: 3873105\ncpu: 180.6383888378966 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 334.2663428668257,
            "unit": "ns/iter",
            "extra": "iterations: 2095945\ncpu: 334.24360515185214 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 544.7196773062732,
            "unit": "ns/iter",
            "extra": "iterations: 1286421\ncpu: 544.6858322430958 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 107.78454413848117,
            "unit": "ns/iter",
            "extra": "iterations: 6493200\ncpu: 107.77908704490459 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 118.4321181840297,
            "unit": "ns/iter",
            "extra": "iterations: 5341703\ncpu: 118.4265398132394 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 310.3864332241502,
            "unit": "ns/iter",
            "extra": "iterations: 2258429\ncpu: 310.3807637964352 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 945.7980168235662,
            "unit": "ns/iter",
            "extra": "iterations: 739319\ncpu: 945.765500413233 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 2963.031074499138,
            "unit": "ns/iter",
            "extra": "iterations: 236110\ncpu: 2962.911426877328 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 507.0651891379218,
            "unit": "ns/iter",
            "extra": "iterations: 1381135\ncpu: 507.0376393328698 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 684.7302113915764,
            "unit": "ns/iter",
            "extra": "iterations: 1024213\ncpu: 684.6913317835246 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 4097.650106815557,
            "unit": "ns/iter",
            "extra": "iterations: 170855\ncpu: 4097.382019841248 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 22845.035656454656,
            "unit": "ns/iter",
            "extra": "iterations: 30261\ncpu: 22844.52007534491 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 24382.24848589681,
            "unit": "ns/iter",
            "extra": "iterations: 28895\ncpu: 24380.358262674552 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/64/4",
            "value": 95.77625918120079,
            "unit": "ns/iter",
            "extra": "iterations: 7309234\ncpu: 95.7705996278163 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/512/4",
            "value": 136.29170920625418,
            "unit": "ns/iter",
            "extra": "iterations: 5147167\ncpu: 136.28394590655557 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/1024/4",
            "value": 1482.979241451003,
            "unit": "ns/iter",
            "extra": "iterations: 472191\ncpu: 1482.8863891942353 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/64/8",
            "value": 1492.4657224508271,
            "unit": "ns/iter",
            "extra": "iterations: 469243\ncpu: 1492.4482666763608 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/512/8",
            "value": 10927.419803153669,
            "unit": "ns/iter",
            "extra": "iterations: 64111\ncpu: 10927.159504609142 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/1024/8",
            "value": 1459.6595550149455,
            "unit": "ns/iter",
            "extra": "iterations: 480151\ncpu: 1459.5814108478658 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.57947492004588,
            "unit": "ns/iter",
            "extra": "iterations: 152809490\ncpu: 4.579246897558544 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.583194226699679,
            "unit": "ns/iter",
            "extra": "iterations: 152802442\ncpu: 4.582788807786195 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.5792864264861555,
            "unit": "ns/iter",
            "extra": "iterations: 152967589\ncpu: 4.579066759037318 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.577815840457326,
            "unit": "ns/iter",
            "extra": "iterations: 150545248\ncpu: 4.577530404679435 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.57721193984113,
            "unit": "ns/iter",
            "extra": "iterations: 152877146\ncpu: 4.576851454304187 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 7.687252059999992,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.6869863600001045 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 7.691505499999494,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.69129592000013 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 7.702500010000222,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.702174119999938 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 7.688700639999978,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.688302349999958 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 7.684164060000285,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.683779729999856 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 56.5694541933421,
            "unit": "ns/iter",
            "extra": "iterations: 12398841\ncpu: 56.566990334016054 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 59.22255569241954,
            "unit": "ns/iter",
            "extra": "iterations: 11837473\ncpu: 59.220992520953416 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 56.93656684486153,
            "unit": "ns/iter",
            "extra": "iterations: 12281385\ncpu: 56.9335473157136 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 62.17917327525897,
            "unit": "ns/iter",
            "extra": "iterations: 11247347\ncpu: 62.176377593755355 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 107.54724270147119,
            "unit": "ns/iter",
            "extra": "iterations: 6503195\ncpu: 107.53874441716572 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.6236504970840502,
            "unit": "ns/iter",
            "extra": "iterations: 1123980528\ncpu: 0.6236178025674909 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.0667440733600653,
            "unit": "ns/iter",
            "extra": "iterations: 656443663\ncpu: 1.06668401336977 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7341165751298229,
            "unit": "ns/iter",
            "extra": "iterations: 946754974\ncpu: 0.734070417463668 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.8566551155677171,
            "unit": "ns/iter",
            "extra": "iterations: 809231229\ncpu: 0.8566273682450747 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.59864379381153,
            "unit": "ns/iter",
            "extra": "iterations: 105496348\ncpu: 6.598353935436824 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.8498056779030997,
            "unit": "ns/iter",
            "extra": "iterations: 822321818\ncpu: 0.8497802401735388 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.8216049802889152,
            "unit": "ns/iter",
            "extra": "iterations: 852146216\ncpu: 0.8215374097254771 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.6260109639362161,
            "unit": "ns/iter",
            "extra": "iterations: 1120362047\ncpu: 0.625986867261313 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 17.436478897433595,
            "unit": "ns/iter",
            "extra": "iterations: 42426688\ncpu: 17.43442903202758 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 30.179162944642588,
            "unit": "ns/iter",
            "extra": "iterations: 24713252\ncpu: 30.17714180230101 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 156.51425769424722,
            "unit": "ns/iter",
            "extra": "iterations: 5116746\ncpu: 156.50669370729122 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 3095.5376137773987,
            "unit": "ns/iter",
            "extra": "iterations: 215772\ncpu: 3095.3449659826347 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 7056.848118155697,
            "unit": "ns/iter",
            "extra": "iterations: 97431\ncpu: 7056.578963574116 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.9374635220018092,
            "unit": "ns/iter",
            "extra": "iterations: 746717236\ncpu: 0.9374056714555358 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.9375770088824303,
            "unit": "ns/iter",
            "extra": "iterations: 746536447\ncpu: 0.9375344068097495 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 0.9377544968320078,
            "unit": "ns/iter",
            "extra": "iterations: 746573144\ncpu: 0.9377272590453939 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.9382101610335264,
            "unit": "ns/iter",
            "extra": "iterations: 746348328\ncpu: 0.9381698902928304 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.9718730198298626,
            "unit": "ns/iter",
            "extra": "iterations: 746403662\ncpu: 0.9718021600488903 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.2435002695082886,
            "unit": "ns/iter",
            "extra": "iterations: 214535126\ncpu: 3.24326292376012 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.185828732731971,
            "unit": "ns/iter",
            "extra": "iterations: 589122260\ncpu: 1.1857735947712829 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.0177491675667543,
            "unit": "ns/iter",
            "extra": "iterations: 692411064\ncpu: 1.0177015181259725 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.9488306404439993,
            "unit": "ns/iter",
            "extra": "iterations: 737576048\ncpu: 0.9488033266503597 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.9469527639062885,
            "unit": "ns/iter",
            "extra": "iterations: 741138783\ncpu: 0.9468620143711892 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 25.092087437886644,
            "unit": "ns/iter",
            "extra": "iterations: 28128310\ncpu: 25.0906814877968 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 30.27388483126905,
            "unit": "ns/iter",
            "extra": "iterations: 22616017\ncpu: 30.27131740306015 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 30.192803117543047,
            "unit": "ns/iter",
            "extra": "iterations: 23155943\ncpu: 30.189948817891636 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.26223318967291,
            "unit": "ns/iter",
            "extra": "iterations: 19190927\ncpu: 36.25978666898253 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 42.02786454110178,
            "unit": "ns/iter",
            "extra": "iterations: 16687158\ncpu: 42.0244887715455 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 15.500045113987712,
            "unit": "ns/iter",
            "extra": "iterations: 45296373\ncpu: 15.499497432167034 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 7.539137804593563,
            "unit": "ns/iter",
            "extra": "iterations: 92808706\ncpu: 7.538798353680501 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 7.5475246701817476,
            "unit": "ns/iter",
            "extra": "iterations: 92941655\ncpu: 7.547063757364851 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 7.539478625736709,
            "unit": "ns/iter",
            "extra": "iterations: 92718539\ncpu: 7.539396592519448 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 7.544157964831557,
            "unit": "ns/iter",
            "extra": "iterations: 92884523\ncpu: 7.54386784114726 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.2478621919501032,
            "unit": "ns/iter",
            "extra": "iterations: 563258591\ncpu: 1.2477803805037624 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 5.600789719987238,
            "unit": "ns/iter",
            "extra": "iterations: 125261867\ncpu: 5.600542070796345 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.141772497002407,
            "unit": "ns/iter",
            "extra": "iterations: 85991333\ncpu: 8.141160737675817 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 57.78375870062268,
            "unit": "ns/iter",
            "extra": "iterations: 12119683\ncpu: 57.78192903230092 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 115.53052787540386,
            "unit": "ns/iter",
            "extra": "iterations: 6046048\ncpu: 115.52588401547207 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.9335442174024899,
            "unit": "ns/iter",
            "extra": "iterations: 749794586\ncpu: 0.9335034382336732 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.375006660220269,
            "unit": "ns/iter",
            "extra": "iterations: 207969845\ncpu: 3.37483562580917 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.467984462723351,
            "unit": "ns/iter",
            "extra": "iterations: 108288734\ncpu: 6.467745287335368 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.9716020513015,
            "unit": "ns/iter",
            "extra": "iterations: 17958938\ncpu: 38.9703592161183 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 73.88582779776412,
            "unit": "ns/iter",
            "extra": "iterations: 9488483\ncpu: 73.88232744897041 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.2494414117074335,
            "unit": "ns/iter",
            "extra": "iterations: 560287432\ncpu: 1.2494057942745282 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.2496436106138211,
            "unit": "ns/iter",
            "extra": "iterations: 560370925\ncpu: 1.2495636421535963 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.248412448143761,
            "unit": "ns/iter",
            "extra": "iterations: 560749242\ncpu: 1.2483579852971494 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.2482419130784244,
            "unit": "ns/iter",
            "extra": "iterations: 560976103\ncpu: 1.2481839177381404 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.2484737690301981,
            "unit": "ns/iter",
            "extra": "iterations: 560859573\ncpu: 1.248367048911933 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.439024236815046,
            "unit": "ns/iter",
            "extra": "iterations: 157854859\ncpu: 4.438866427291898 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.439515388926256,
            "unit": "ns/iter",
            "extra": "iterations: 157736800\ncpu: 4.439294146958652 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.43909389592306,
            "unit": "ns/iter",
            "extra": "iterations: 157833392\ncpu: 4.438855828429395 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.4390838126215675,
            "unit": "ns/iter",
            "extra": "iterations: 157815228\ncpu: 4.438801729577008 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.439996602345954,
            "unit": "ns/iter",
            "extra": "iterations: 157838312\ncpu: 4.439855628967966 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.351231831700037,
            "unit": "ns/iter",
            "extra": "iterations: 45783040\ncpu: 15.350254635777631 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.442922427904975,
            "unit": "ns/iter",
            "extra": "iterations: 40303913\ncpu: 17.441199741573186 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.395488256964367,
            "unit": "ns/iter",
            "extra": "iterations: 40052547\ncpu: 17.39439636635345 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 27.301738992864465,
            "unit": "ns/iter",
            "extra": "iterations: 26124489\ncpu: 27.300543945567878 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 39.760082038996146,
            "unit": "ns/iter",
            "extra": "iterations: 17875402\ncpu: 39.75954358956612 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/run",
            "value": 103705.49435028233,
            "unit": "ns/iter",
            "extra": "iterations: 6726\ncpu: 103695.9855783496 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/ev",
            "value": 5426.4080011249225,
            "unit": "ns/iter",
            "extra": "iterations: 128007\ncpu: 5426.156733616085 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/ev_evaluate",
            "value": 5817.4886911030235,
            "unit": "ns/iter",
            "extra": "iterations: 125388\ncpu: 5817.297588285938 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/ev_simplify",
            "value": 222664.6332169089,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 222638.66687837034 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/ev_simplified_evaluate",
            "value": 885.6707489576273,
            "unit": "ns/iter",
            "extra": "iterations: 781179\ncpu: 885.6695238863325 ns\nthreads: 1"
          },
          {
            "name": "Memory_vector_int_resize64x2p16",
            "value": 484005.56363637204,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 483961.25909090677 ns\nthreads: 1"
          },
          {
            "name": "Memory_vector_Pauli_resize64x2p16",
            "value": 480946.00823043566,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 480941.92592594156 ns\nthreads: 1"
          },
          {
            "name": "Memory_PauliTermContainer_insert64x2p16",
            "value": 682520.4466019179,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 682434.3368931985 ns\nthreads: 1"
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
          "id": "774039036fc4e1b7c964b8404e14325efc8eab18",
          "message": "Update CMakeLists.txt to v3.0.0",
          "timestamp": "2025-09-13T19:57:56+02:00",
          "tree_id": "01877e048963bf287105087ce90f20ac16622d08",
          "url": "https://github.com/zeFresk/ProPauli/commit/774039036fc4e1b7c964b8404e14325efc8eab18"
        },
        "date": 1757786693867,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 61.14919011757132,
            "unit": "ns/iter",
            "extra": "iterations: 11374614\ncpu: 61.145472365040256 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 42.54489152180761,
            "unit": "ns/iter",
            "extra": "iterations: 13704091\ncpu: 42.53601957254954 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 81.86378290000107,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 81.83688330000001 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 71.1085618363895,
            "unit": "ns/iter",
            "extra": "iterations: 9824668\ncpu: 71.10008826761373 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 222.2502149064569,
            "unit": "ns/iter",
            "extra": "iterations: 3118799\ncpu: 222.18355623430696 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 1159.0496920145963,
            "unit": "ns/iter",
            "extra": "iterations: 593697\ncpu: 1158.7580803002209 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 8494.676353532466,
            "unit": "ns/iter",
            "extra": "iterations: 82414\ncpu: 8492.579282646158 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 16769.85959224879,
            "unit": "ns/iter",
            "extra": "iterations: 41643\ncpu: 16753.594625747424 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 465.33558398696704,
            "unit": "ns/iter",
            "extra": "iterations: 1500453\ncpu: 465.2477258534587 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 902.5654095003401,
            "unit": "ns/iter",
            "extra": "iterations: 770622\ncpu: 902.3117014567455 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 1821.6728360875882,
            "unit": "ns/iter",
            "extra": "iterations: 382802\ncpu: 1821.3209805591393 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 460.93008824941734,
            "unit": "ns/iter",
            "extra": "iterations: 1499047\ncpu: 460.8296777886225 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 905.0244477938905,
            "unit": "ns/iter",
            "extra": "iterations: 780234\ncpu: 904.8268609160854 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 1834.9093776075244,
            "unit": "ns/iter",
            "extra": "iterations: 385898\ncpu: 1834.8101389486326 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 3682.1351053326916,
            "unit": "ns/iter",
            "extra": "iterations: 190444\ncpu: 3681.807035138939 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 62454.052890200604,
            "unit": "ns/iter",
            "extra": "iterations: 11193\ncpu: 62448.16796211927 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 31685436.181817293,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 31683622.454545487 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 3442.57056734512,
            "unit": "ns/iter",
            "extra": "iterations: 206682\ncpu: 3442.290891320959 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 28815.89863115113,
            "unit": "ns/iter",
            "extra": "iterations: 43248\ncpu: 28814.473756011812 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 2975872.7106919712,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2975725.0880503133 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 3915.1189306349443,
            "unit": "ns/iter",
            "extra": "iterations: 178087\ncpu: 3914.8767793269694 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 344.7888506214479,
            "unit": "ns/iter",
            "extra": "iterations: 2041190\ncpu: 344.7693110391492 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 386.35688992176813,
            "unit": "ns/iter",
            "extra": "iterations: 1820623\ncpu: 386.32316080814076 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 3985.5819558880053,
            "unit": "ns/iter",
            "extra": "iterations: 198314\ncpu: 3985.3055205381347 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 30901.80172264516,
            "unit": "ns/iter",
            "extra": "iterations: 17299\ncpu: 30899.808659460065 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 389.5010173709134,
            "unit": "ns/iter",
            "extra": "iterations: 1798754\ncpu: 389.3619549977381 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 447.02537098815134,
            "unit": "ns/iter",
            "extra": "iterations: 1566829\ncpu: 446.98388081915846 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 741.8199173324007,
            "unit": "ns/iter",
            "extra": "iterations: 938941\ncpu: 741.73399180566 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 1596.23798152109,
            "unit": "ns/iter",
            "extra": "iterations: 438013\ncpu: 1596.0785867086154 ns\nthreads: 1"
          },
          {
            "name": "MaxCutQAOAN4P1/run",
            "value": 13391.807450919043,
            "unit": "ns/iter",
            "extra": "iterations: 52262\ncpu: 13390.834430370076 ns\nthreads: 1"
          },
          {
            "name": "MaxCutQAOAN4P1/ev",
            "value": 180.26714070004974,
            "unit": "ns/iter",
            "extra": "iterations: 3882849\ncpu: 180.25863148425282 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 17.122937398249828,
            "unit": "ns/iter",
            "extra": "iterations: 39865306\ncpu: 17.12149998296774 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 29.87072428839384,
            "unit": "ns/iter",
            "extra": "iterations: 23370028\ncpu: 29.869238368049828 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 141.4020019172929,
            "unit": "ns/iter",
            "extra": "iterations: 5451474\ncpu: 141.3937815717362 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 3015.66450266929,
            "unit": "ns/iter",
            "extra": "iterations: 227203\ncpu: 3015.5330387362706 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 6925.07516480314,
            "unit": "ns/iter",
            "extra": "iterations: 97692\ncpu: 6924.501115751524 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 4.370248143756079,
            "unit": "ns/iter",
            "extra": "iterations: 160058793\ncpu: 4.369845979033462 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 4.370452392929706,
            "unit": "ns/iter",
            "extra": "iterations: 160134355\ncpu: 4.370054520780391 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 4.373667994665512,
            "unit": "ns/iter",
            "extra": "iterations: 160213510\ncpu: 4.373336206166372 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 4.370598276780134,
            "unit": "ns/iter",
            "extra": "iterations: 160124533\ncpu: 4.370085650772849 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 4.371162920324701,
            "unit": "ns/iter",
            "extra": "iterations: 160216376\ncpu: 4.370755446372092 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 5.020715890000247,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.020164849999986 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 4.3519733396707165,
            "unit": "ns/iter",
            "extra": "iterations: 160941147\ncpu: 4.351622664898759 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 4.3572821759800044,
            "unit": "ns/iter",
            "extra": "iterations: 160724343\ncpu: 4.357034366598683 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 4.105998376206224,
            "unit": "ns/iter",
            "extra": "iterations: 170578264\ncpu: 4.105847084948675 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 4.0952602636074,
            "unit": "ns/iter",
            "extra": "iterations: 170743061\ncpu: 4.0947064958616455 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.683741802461542,
            "unit": "ns/iter",
            "extra": "iterations: 149238696\ncpu: 4.683249590977357 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.685690153949893,
            "unit": "ns/iter",
            "extra": "iterations: 149403557\ncpu: 4.685293068357134 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.684050181407696,
            "unit": "ns/iter",
            "extra": "iterations: 149532591\ncpu: 4.683633302388256 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.682699478026589,
            "unit": "ns/iter",
            "extra": "iterations: 149529026\ncpu: 4.682320394436345 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.68239264686102,
            "unit": "ns/iter",
            "extra": "iterations: 149282523\ncpu: 4.681905677598982 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 65.05050353483237,
            "unit": "ns/iter",
            "extra": "iterations: 10716339\ncpu: 65.04700177924614 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 73.37679726441324,
            "unit": "ns/iter",
            "extra": "iterations: 9256081\ncpu: 73.3685153576332 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 73.90340869334229,
            "unit": "ns/iter",
            "extra": "iterations: 9475449\ncpu: 73.89721584697436 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 83.04232253463768,
            "unit": "ns/iter",
            "extra": "iterations: 8424968\ncpu: 83.03253947077255 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 130.13439697300228,
            "unit": "ns/iter",
            "extra": "iterations: 5384593\ncpu: 130.1251223630079 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 111.41671838043965,
            "unit": "ns/iter",
            "extra": "iterations: 5791494\ncpu: 111.41000318743373 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 116.08977370807344,
            "unit": "ns/iter",
            "extra": "iterations: 6065395\ncpu: 116.0802936989261 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 117.11944934695947,
            "unit": "ns/iter",
            "extra": "iterations: 5961213\ncpu: 117.11414941891638 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 128.2587796037961,
            "unit": "ns/iter",
            "extra": "iterations: 5457621\ncpu: 128.24488783666007 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 172.5997131199611,
            "unit": "ns/iter",
            "extra": "iterations: 4056748\ncpu: 172.58717425879192 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 2891.596004370796,
            "unit": "ns/iter",
            "extra": "iterations: 242515\ncpu: 2891.386289507864 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 3834.820829868505,
            "unit": "ns/iter",
            "extra": "iterations: 182776\ncpu: 3834.5981912286115 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 3628.1529020454996,
            "unit": "ns/iter",
            "extra": "iterations: 193019\ncpu: 3627.7816588004234 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 14015.052900818016,
            "unit": "ns/iter",
            "extra": "iterations: 49848\ncpu: 14014.415121970576 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 25965.22396922686,
            "unit": "ns/iter",
            "extra": "iterations: 26776\ncpu: 25962.34486106945 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 772779.1797132889,
            "unit": "ns/iter",
            "extra": "iterations: 907\ncpu: 772716.9988974615 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 938724.264339092,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 938629.9052369075 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 1049017.8671641762,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1048950.573134341 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 1498542.8558758008,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 1498362.4235033097 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 2117364.2222222188,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2117082.2037036777 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 81607.87625262959,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 81600.20181775768 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 81588.15276804985,
            "unit": "ns/iter",
            "extra": "iterations: 8562\ncpu: 81580.389395002 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 82634.93248391386,
            "unit": "ns/iter",
            "extra": "iterations: 8398\ncpu: 82630.53095975291 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 114145.96411960336,
            "unit": "ns/iter",
            "extra": "iterations: 6020\ncpu: 114138.54900332275 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 125890.38945270445,
            "unit": "ns/iter",
            "extra": "iterations: 5518\ncpu: 125878.94690105112 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 126.89845544325397,
            "unit": "ns/iter",
            "extra": "iterations: 5522620\ncpu: 126.88932445107649 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 135.58468538787457,
            "unit": "ns/iter",
            "extra": "iterations: 5073390\ncpu: 135.57030644204366 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 142.62763878585892,
            "unit": "ns/iter",
            "extra": "iterations: 4886575\ncpu: 142.6142701176167 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 169.26871247362712,
            "unit": "ns/iter",
            "extra": "iterations: 4148583\ncpu: 169.26377030422293 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 234.06106786884678,
            "unit": "ns/iter",
            "extra": "iterations: 2995012\ncpu: 234.05066724273973 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 153.1884127449595,
            "unit": "ns/iter",
            "extra": "iterations: 4574457\ncpu: 153.17567921176055 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 168.3113742139437,
            "unit": "ns/iter",
            "extra": "iterations: 3991933\ncpu: 168.2997292289196 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 178.53306472284837,
            "unit": "ns/iter",
            "extra": "iterations: 3514879\ncpu: 178.52192749736278 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 236.0871035278008,
            "unit": "ns/iter",
            "extra": "iterations: 2839575\ncpu: 236.06890432546848 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 330.57983462427785,
            "unit": "ns/iter",
            "extra": "iterations: 2198025\ncpu: 330.55339725435437 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 281.7601389820166,
            "unit": "ns/iter",
            "extra": "iterations: 2477443\ncpu: 281.73550229006463 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 397.4006231266965,
            "unit": "ns/iter",
            "extra": "iterations: 1638832\ncpu: 397.38575644117316 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 800.838293738843,
            "unit": "ns/iter",
            "extra": "iterations: 1261120\ncpu: 800.7833766810519 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 1045.639083012988,
            "unit": "ns/iter",
            "extra": "iterations: 686989\ncpu: 1045.5401556648021 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 2793.4195113480732,
            "unit": "ns/iter",
            "extra": "iterations: 293706\ncpu: 2793.1538307014725 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 2993.8256517968734,
            "unit": "ns/iter",
            "extra": "iterations: 210917\ncpu: 2993.7370624463556 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 5623.163485038323,
            "unit": "ns/iter",
            "extra": "iterations: 151390\ncpu: 5622.899412114344 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 162414.25320091174,
            "unit": "ns/iter",
            "extra": "iterations: 8357\ncpu: 162403.7793466559 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 89169.48493804972,
            "unit": "ns/iter",
            "extra": "iterations: 7104\ncpu: 89158.61486486382 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 143944.85371054595,
            "unit": "ns/iter",
            "extra": "iterations: 7034\ncpu: 143931.13050895516 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 84.32288486936126,
            "unit": "ns/iter",
            "extra": "iterations: 8337972\ncpu: 84.31756654975548 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 85.53997273640282,
            "unit": "ns/iter",
            "extra": "iterations: 7101040\ncpu: 85.53556788864645 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 85.89698066457396,
            "unit": "ns/iter",
            "extra": "iterations: 8199354\ncpu: 85.88992327932243 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 94.58067629486594,
            "unit": "ns/iter",
            "extra": "iterations: 7409283\ncpu: 94.57372056108423 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 137.8345274809923,
            "unit": "ns/iter",
            "extra": "iterations: 5081309\ncpu: 137.82146962524772 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 84.62497961455887,
            "unit": "ns/iter",
            "extra": "iterations: 8271833\ncpu: 84.61578890676321 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 86.5793015047496,
            "unit": "ns/iter",
            "extra": "iterations: 8102589\ncpu: 86.57259648736866 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 86.98233945398242,
            "unit": "ns/iter",
            "extra": "iterations: 8053828\ncpu: 86.97268081712201 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 95.94740388593117,
            "unit": "ns/iter",
            "extra": "iterations: 7289645\ncpu: 95.94044168131767 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 140.1924420377242,
            "unit": "ns/iter",
            "extra": "iterations: 4995447\ncpu: 140.17818825822812 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 93.01689086290345,
            "unit": "ns/iter",
            "extra": "iterations: 7679359\ncpu: 93.0112179935856 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 102.54967345330927,
            "unit": "ns/iter",
            "extra": "iterations: 7746059\ncpu: 102.54617735289615 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 93.29935816138016,
            "unit": "ns/iter",
            "extra": "iterations: 7366026\ncpu: 93.29433971587932 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 146.16487854215998,
            "unit": "ns/iter",
            "extra": "iterations: 4615264\ncpu: 146.1571231894848 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 1485.4905612753355,
            "unit": "ns/iter",
            "extra": "iterations: 471462\ncpu: 1485.3402140575486 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 637.1893515148032,
            "unit": "ns/iter",
            "extra": "iterations: 1512309\ncpu: 637.1358088856116 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 831.3578816621417,
            "unit": "ns/iter",
            "extra": "iterations: 2610103\ncpu: 831.298416959025 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 1863.1714007376918,
            "unit": "ns/iter",
            "extra": "iterations: 384940\ncpu: 1863.0455109886716 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 11888.15404610419,
            "unit": "ns/iter",
            "extra": "iterations: 58476\ncpu: 11887.123315548019 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 2204.5731247367958,
            "unit": "ns/iter",
            "extra": "iterations: 342032\ncpu: 2204.453173972012 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 86.24664509087529,
            "unit": "ns/iter",
            "extra": "iterations: 8119594\ncpu: 86.23909766917045 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 87.62312217298037,
            "unit": "ns/iter",
            "extra": "iterations: 7941027\ncpu: 87.61688204812754 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 159.10784954860796,
            "unit": "ns/iter",
            "extra": "iterations: 4405489\ncpu: 159.09556510071698 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 241.57247358701773,
            "unit": "ns/iter",
            "extra": "iterations: 2895924\ncpu: 241.55355803535946 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 371.2137643711527,
            "unit": "ns/iter",
            "extra": "iterations: 1881815\ncpu: 371.18224161248366 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 88.84620296562919,
            "unit": "ns/iter",
            "extra": "iterations: 7869352\ncpu: 88.83999470350182 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 90.6952422486662,
            "unit": "ns/iter",
            "extra": "iterations: 7722829\ncpu: 90.69260034114659 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 181.17392389088585,
            "unit": "ns/iter",
            "extra": "iterations: 3863874\ncpu: 181.1662228116128 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 334.14641198646353,
            "unit": "ns/iter",
            "extra": "iterations: 2093763\ncpu: 334.1371649991017 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 548.3648188553727,
            "unit": "ns/iter",
            "extra": "iterations: 1277349\ncpu: 548.3466014378156 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 107.90626300239624,
            "unit": "ns/iter",
            "extra": "iterations: 6508412\ncpu: 107.8975295356234 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 131.4534088509301,
            "unit": "ns/iter",
            "extra": "iterations: 5867241\ncpu: 131.43991767169587 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 301.7522637695458,
            "unit": "ns/iter",
            "extra": "iterations: 2322785\ncpu: 301.7311580710265 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 951.9403475319338,
            "unit": "ns/iter",
            "extra": "iterations: 735242\ncpu: 951.839364454117 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 2975.7531307807053,
            "unit": "ns/iter",
            "extra": "iterations: 235165\ncpu: 2975.414900176534 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 509.2451226647023,
            "unit": "ns/iter",
            "extra": "iterations: 1387848\ncpu: 509.21406811121165 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 687.2388562188102,
            "unit": "ns/iter",
            "extra": "iterations: 1019111\ncpu: 687.189839968371 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 4118.405736020605,
            "unit": "ns/iter",
            "extra": "iterations: 170362\ncpu: 4118.12011481441 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 22845.504993470047,
            "unit": "ns/iter",
            "extra": "iterations: 30640\ncpu: 22843.93945822419 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 24231.7650642003,
            "unit": "ns/iter",
            "extra": "iterations: 28893\ncpu: 24230.02703076874 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/64/4",
            "value": 86.89244025813586,
            "unit": "ns/iter",
            "extra": "iterations: 8060553\ncpu: 86.88760535412528 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/512/4",
            "value": 136.3567535934743,
            "unit": "ns/iter",
            "extra": "iterations: 5136621\ncpu: 136.34655019320988 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/1024/4",
            "value": 1551.9901125011895,
            "unit": "ns/iter",
            "extra": "iterations: 472617\ncpu: 1551.9068780851753 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/64/8",
            "value": 1491.8282236566122,
            "unit": "ns/iter",
            "extra": "iterations: 469273\ncpu: 1491.7395716352723 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/512/8",
            "value": 10952.382762396519,
            "unit": "ns/iter",
            "extra": "iterations: 63930\ncpu: 10951.430502111843 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/1024/8",
            "value": 1463.5063414409217,
            "unit": "ns/iter",
            "extra": "iterations: 480569\ncpu: 1463.39733524219 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.57714567810802,
            "unit": "ns/iter",
            "extra": "iterations: 153003367\ncpu: 4.576792313335215 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.57568024582278,
            "unit": "ns/iter",
            "extra": "iterations: 152982821\ncpu: 4.575468391970695 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.575774754183424,
            "unit": "ns/iter",
            "extra": "iterations: 153056676\ncpu: 4.575505357244167 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.5879026876187625,
            "unit": "ns/iter",
            "extra": "iterations: 152931291\ncpu: 4.587426388756513 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.573744725475994,
            "unit": "ns/iter",
            "extra": "iterations: 152903844\ncpu: 4.573455099009826 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 5.084403609999981,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.084068740000021 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 5.073841269999093,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.073446460000071 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 5.07515124000065,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.074914880000279 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 5.0721699300004275,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.071773729999904 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 5.077511360000244,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 5.077109869999958 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 54.51151189822598,
            "unit": "ns/iter",
            "extra": "iterations: 12838847\ncpu: 54.50742282387283 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 57.19202397386138,
            "unit": "ns/iter",
            "extra": "iterations: 12092839\ncpu: 57.18699885113758 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 57.27816173600341,
            "unit": "ns/iter",
            "extra": "iterations: 12219790\ncpu: 57.273844149531925 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 62.57634134349904,
            "unit": "ns/iter",
            "extra": "iterations: 11204643\ncpu: 62.57055624173059 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 108.80998557222316,
            "unit": "ns/iter",
            "extra": "iterations: 6420944\ncpu: 108.80264054631357 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.6234369153186873,
            "unit": "ns/iter",
            "extra": "iterations: 1123515345\ncpu: 0.6234053581172885 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.0658063236470092,
            "unit": "ns/iter",
            "extra": "iterations: 656535111\ncpu: 1.0657390294546076 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7333196689035774,
            "unit": "ns/iter",
            "extra": "iterations: 947725852\ncpu: 0.7332691891156765 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.8593290962472288,
            "unit": "ns/iter",
            "extra": "iterations: 809684277\ncpu: 0.8592612364634231 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.596297788547215,
            "unit": "ns/iter",
            "extra": "iterations: 107044291\ncpu: 6.595902765145909 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.8501796131859904,
            "unit": "ns/iter",
            "extra": "iterations: 822260065\ncpu: 0.8501127961261429 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.8215778584376989,
            "unit": "ns/iter",
            "extra": "iterations: 852126102\ncpu: 0.8215160706343672 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.625432139849828,
            "unit": "ns/iter",
            "extra": "iterations: 1119597626\ncpu: 0.6253937573104406 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 16.18863120869747,
            "unit": "ns/iter",
            "extra": "iterations: 42456633\ncpu: 16.187267205102852 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 29.282794614415906,
            "unit": "ns/iter",
            "extra": "iterations: 24704689\ncpu: 29.280604260996967 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 138.73266375474174,
            "unit": "ns/iter",
            "extra": "iterations: 5121928\ncpu: 138.72111771192678 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 3124.384294371193,
            "unit": "ns/iter",
            "extra": "iterations: 215184\ncpu: 3124.232647408726 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 7053.635428901172,
            "unit": "ns/iter",
            "extra": "iterations: 97062\ncpu: 7053.17659846289 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.9369792173508276,
            "unit": "ns/iter",
            "extra": "iterations: 747532465\ncpu: 0.9368881550850127 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.9370286339444392,
            "unit": "ns/iter",
            "extra": "iterations: 747108979\ncpu: 0.9369362685708207 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 1.017786364418702,
            "unit": "ns/iter",
            "extra": "iterations: 745702027\ncpu: 1.0176496060403155 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.9375097611864818,
            "unit": "ns/iter",
            "extra": "iterations: 747014732\ncpu: 0.9374125382041079 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.9373060782156134,
            "unit": "ns/iter",
            "extra": "iterations: 746955792\ncpu: 0.9371905318862848 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.2555710414738583,
            "unit": "ns/iter",
            "extra": "iterations: 215730040\ncpu: 3.255232729758045 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.1880999405057766,
            "unit": "ns/iter",
            "extra": "iterations: 589521372\ncpu: 1.1879615689318581 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.0076336102525494,
            "unit": "ns/iter",
            "extra": "iterations: 693488510\ncpu: 1.0075221520252828 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.9481013444820383,
            "unit": "ns/iter",
            "extra": "iterations: 738918217\ncpu: 0.9480210866150303 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.9438101096353386,
            "unit": "ns/iter",
            "extra": "iterations: 742094525\ncpu: 0.9437333889506758 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 25.060188230812468,
            "unit": "ns/iter",
            "extra": "iterations: 28100394\ncpu: 25.058833694644573 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 30.150433704874,
            "unit": "ns/iter",
            "extra": "iterations: 22608577\ncpu: 30.148406244232234 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 30.10287749471572,
            "unit": "ns/iter",
            "extra": "iterations: 23117019\ncpu: 30.09921352748871 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.40061449927474,
            "unit": "ns/iter",
            "extra": "iterations: 19175287\ncpu: 36.39687823186067 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 42.05663177788491,
            "unit": "ns/iter",
            "extra": "iterations: 16614700\ncpu: 42.05100976845794 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 15.530255292457628,
            "unit": "ns/iter",
            "extra": "iterations: 45111595\ncpu: 15.52895256751576 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 7.540561942624627,
            "unit": "ns/iter",
            "extra": "iterations: 92543398\ncpu: 7.539633394486119 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 7.5447035833899125,
            "unit": "ns/iter",
            "extra": "iterations: 92940659\ncpu: 7.544511848146277 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 7.692573728223927,
            "unit": "ns/iter",
            "extra": "iterations: 92943205\ncpu: 7.692070636040599 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 7.536680447967662,
            "unit": "ns/iter",
            "extra": "iterations: 92812716\ncpu: 7.536151264014075 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.242832185460389,
            "unit": "ns/iter",
            "extra": "iterations: 562820261\ncpu: 1.2427448680636362 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 5.598564838895726,
            "unit": "ns/iter",
            "extra": "iterations: 124420596\ncpu: 5.598272194420262 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.1407390297763,
            "unit": "ns/iter",
            "extra": "iterations: 86059347\ncpu: 8.140479999226669 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 57.744791652915275,
            "unit": "ns/iter",
            "extra": "iterations: 12121120\ncpu: 57.74255365840805 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 115.62059711100851,
            "unit": "ns/iter",
            "extra": "iterations: 6060481\ncpu: 115.61315545746032 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.9329600079303083,
            "unit": "ns/iter",
            "extra": "iterations: 750527371\ncpu: 0.932850803385304 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.321845755253108,
            "unit": "ns/iter",
            "extra": "iterations: 209530792\ncpu: 3.3215027173667693 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.461983746219132,
            "unit": "ns/iter",
            "extra": "iterations: 107982260\ncpu: 6.461530171715101 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.9571356711156,
            "unit": "ns/iter",
            "extra": "iterations: 17975366\ncpu: 38.95375982886744 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 73.81556105138607,
            "unit": "ns/iter",
            "extra": "iterations: 9493266\ncpu: 73.80796082191391 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.247027001018513,
            "unit": "ns/iter",
            "extra": "iterations: 561291901\ncpu: 1.2469262851522906 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.2472795980467124,
            "unit": "ns/iter",
            "extra": "iterations: 561329916\ncpu: 1.247160443520745 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.247252098542701,
            "unit": "ns/iter",
            "extra": "iterations: 561130566\ncpu: 1.2471413043644526 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.2473634604978305,
            "unit": "ns/iter",
            "extra": "iterations: 561136292\ncpu: 1.2472665232637952 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.247975028014287,
            "unit": "ns/iter",
            "extra": "iterations: 561128627\ncpu: 1.247848648791164 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.4398427181624704,
            "unit": "ns/iter",
            "extra": "iterations: 157805634\ncpu: 4.439523971621946 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.439772788985556,
            "unit": "ns/iter",
            "extra": "iterations: 157804850\ncpu: 4.4393231133263535 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.439000929116318,
            "unit": "ns/iter",
            "extra": "iterations: 157823076\ncpu: 4.438679493232011 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.438502787175324,
            "unit": "ns/iter",
            "extra": "iterations: 157864504\ncpu: 4.438074546511183 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.438126304594595,
            "unit": "ns/iter",
            "extra": "iterations: 157832548\ncpu: 4.437743506491535 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.357779011514952,
            "unit": "ns/iter",
            "extra": "iterations: 45810197\ncpu: 15.35686598335286 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.42929840452884,
            "unit": "ns/iter",
            "extra": "iterations: 40259339\ncpu: 17.427609256078128 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.395818725342444,
            "unit": "ns/iter",
            "extra": "iterations: 39989528\ncpu: 17.39433223617919 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 27.173755538203725,
            "unit": "ns/iter",
            "extra": "iterations: 26112031\ncpu: 27.170184042749757 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 39.785210628199955,
            "unit": "ns/iter",
            "extra": "iterations: 17875242\ncpu: 39.78208776138586 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/run",
            "value": 103745.3007529802,
            "unit": "ns/iter",
            "extra": "iterations: 6773\ncpu: 103735.73601063198 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/ev",
            "value": 5437.404014267425,
            "unit": "ns/iter",
            "extra": "iterations: 128691\ncpu: 5436.882291691072 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/ev_evaluate",
            "value": 5447.567206840549,
            "unit": "ns/iter",
            "extra": "iterations: 123849\ncpu: 5447.068365509579 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/ev_simplify",
            "value": 222936.76472460342,
            "unit": "ns/iter",
            "extra": "iterations: 3141\ncpu: 222919.25278573722 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/ev_simplified_evaluate",
            "value": 892.6847696252863,
            "unit": "ns/iter",
            "extra": "iterations: 785286\ncpu: 892.6260929139116 ns\nthreads: 1"
          },
          {
            "name": "Memory_vector_int_resize64x2p16",
            "value": 502589.1044444372,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 502526.3074074044 ns\nthreads: 1"
          },
          {
            "name": "Memory_vector_Pauli_resize64x2p16",
            "value": 501430.35315190995,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 501391.4075931243 ns\nthreads: 1"
          },
          {
            "name": "Memory_PauliTermContainer_insert64x2p16",
            "value": 681215.3631068054,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 681190.56504855 ns\nthreads: 1"
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
          "id": "25a48a0dabca509bcb841e9d5d8b31c044098dc9",
          "message": "Merge pull request #14 from zeFresk/hotfix\n\nhotfix: fix compile error in gcc",
          "timestamp": "2025-09-13T20:08:09+02:00",
          "tree_id": "83ec9fc0234e5f885402601c9139b5663eb10c45",
          "url": "https://github.com/zeFresk/ProPauli/commit/25a48a0dabca509bcb841e9d5d8b31c044098dc9"
        },
        "date": 1757787220235,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Circuit_init/1024",
            "value": 63.672138972721974,
            "unit": "ns/iter",
            "extra": "iterations: 11040440\ncpu: 63.66832164297801 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_pauli_string",
            "value": 42.02992887484253,
            "unit": "ns/iter",
            "extra": "iterations: 13671112\ncpu: 42.02823223158437 ns\nthreads: 1"
          },
          {
            "name": "Circuit_add_random_string",
            "value": 81.47730760000087,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 81.4669405 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1",
            "value": 72.04815045248914,
            "unit": "ns/iter",
            "extra": "iterations: 9724000\ncpu: 72.0346982723159 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/8",
            "value": 222.99099078428918,
            "unit": "ns/iter",
            "extra": "iterations: 3138120\ncpu: 222.89919346615167 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/64",
            "value": 1160.9759837076685,
            "unit": "ns/iter",
            "extra": "iterations: 603965\ncpu: 1160.628470192809 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/512",
            "value": 8460.863168450807,
            "unit": "ns/iter",
            "extra": "iterations: 82766\ncpu: 8459.832382862527 ns\nthreads: 1"
          },
          {
            "name": "Circuit_run_paulis/512/1024",
            "value": 16749.662844146544,
            "unit": "ns/iter",
            "extra": "iterations: 41770\ncpu: 16736.92475460857 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/2",
            "value": 465.56644724355465,
            "unit": "ns/iter",
            "extra": "iterations: 1501665\ncpu: 465.52694242723857 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/4",
            "value": 919.8786045579034,
            "unit": "ns/iter",
            "extra": "iterations: 767986\ncpu: 919.7998934876409 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/GlobalObservable/8",
            "value": 1854.0388623899396,
            "unit": "ns/iter",
            "extra": "iterations: 380728\ncpu: 1853.931302662272 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/2",
            "value": 460.3257026817531,
            "unit": "ns/iter",
            "extra": "iterations: 1500964\ncpu: 460.2877304185839 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/4",
            "value": 905.9121228245695,
            "unit": "ns/iter",
            "extra": "iterations: 768641\ncpu: 905.8504685542395 ns\nthreads: 1"
          },
          {
            "name": "Circuit_ZZ_feature_map/ZLocal/8",
            "value": 1830.9623782331641,
            "unit": "ns/iter",
            "extra": "iterations: 381056\ncpu: 1830.8189767383278 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/2",
            "value": 3659.889896366252,
            "unit": "ns/iter",
            "extra": "iterations: 192891\ncpu: 3659.624601458862 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/4",
            "value": 62547.222261895186,
            "unit": "ns/iter",
            "extra": "iterations: 11203\ncpu: 62542.97822011962 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/GlobalObservable/8",
            "value": 31519262.952381644,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 31517427.761904772 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/2",
            "value": 3391.398410918453,
            "unit": "ns/iter",
            "extra": "iterations: 208674\ncpu: 3391.2192894179393 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/4",
            "value": 28709.69710746714,
            "unit": "ns/iter",
            "extra": "iterations: 43111\ncpu: 28707.549372549853 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withCoefficientTruncation01/8",
            "value": 2988333.9750000457,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2988289.862500004 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/2",
            "value": 3883.4471767102536,
            "unit": "ns/iter",
            "extra": "iterations: 179135\ncpu: 3883.4057163591624 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/4",
            "value": 344.9867148413886,
            "unit": "ns/iter",
            "extra": "iterations: 2038967\ncpu: 344.98166963957715 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withWeightTruncation4/8",
            "value": 375.90410773532284,
            "unit": "ns/iter",
            "extra": "iterations: 1869619\ncpu: 375.8882317734266 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/2",
            "value": 3710.1699010177203,
            "unit": "ns/iter",
            "extra": "iterations: 199834\ncpu: 3709.890879429917 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/4",
            "value": 31006.034526632873,
            "unit": "ns/iter",
            "extra": "iterations: 17291\ncpu: 31005.4224741195 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/8",
            "value": 390.05583299556247,
            "unit": "ns/iter",
            "extra": "iterations: 1793581\ncpu: 390.0289292761244 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/16",
            "value": 448.45512235275964,
            "unit": "ns/iter",
            "extra": "iterations: 1558649\ncpu: 448.43411441575415 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/32",
            "value": 744.2457461672437,
            "unit": "ns/iter",
            "extra": "iterations: 936861\ncpu: 744.1861994468762 ns\nthreads: 1"
          },
          {
            "name": "Circuit_Efficient_SU2/withMultiTruncation6001/64",
            "value": 1598.7148125215326,
            "unit": "ns/iter",
            "extra": "iterations: 436050\ncpu: 1598.6787914230038 ns\nthreads: 1"
          },
          {
            "name": "MaxCutQAOAN4P1/run",
            "value": 13339.313757238468,
            "unit": "ns/iter",
            "extra": "iterations: 52496\ncpu: 13338.59065452608 ns\nthreads: 1"
          },
          {
            "name": "MaxCutQAOAN4P1/ev",
            "value": 180.389769150891,
            "unit": "ns/iter",
            "extra": "iterations: 3884702\ncpu: 180.38575108206476 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1",
            "value": 16.204988118971524,
            "unit": "ns/iter",
            "extra": "iterations: 43228159\ncpu: 16.204094465369096 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/8",
            "value": 29.59123372598576,
            "unit": "ns/iter",
            "extra": "iterations: 23401801\ncpu: 29.589318702436824 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/64",
            "value": 133.62937562901908,
            "unit": "ns/iter",
            "extra": "iterations: 5091268\ncpu: 133.613298494599 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/512",
            "value": 3099.3231913303744,
            "unit": "ns/iter",
            "extra": "iterations: 223493\ncpu: 3099.0593262428865 ns\nthreads: 1"
          },
          {
            "name": "Observable_init_from_string/1024",
            "value": 6949.032525292161,
            "unit": "ns/iter",
            "extra": "iterations: 96571\ncpu: 6948.500512576219 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1",
            "value": 4.370420533335511,
            "unit": "ns/iter",
            "extra": "iterations: 160163165\ncpu: 4.369962325607136 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/8",
            "value": 4.3710468632782185,
            "unit": "ns/iter",
            "extra": "iterations: 160074055\ncpu: 4.370882926655411 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/64",
            "value": 4.378545020983865,
            "unit": "ns/iter",
            "extra": "iterations: 160094680\ncpu: 4.378255436095706 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/512",
            "value": 4.371812636198185,
            "unit": "ns/iter",
            "extra": "iterations: 159998013\ncpu: 4.371345449146309 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_pauli/1024",
            "value": 4.3943730235926495,
            "unit": "ns/iter",
            "extra": "iterations: 159940141\ncpu: 4.383916592895819 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1",
            "value": 5.238771975424114,
            "unit": "ns/iter",
            "extra": "iterations: 135977637\ncpu: 5.238095834832039 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/8",
            "value": 4.3473938109581685,
            "unit": "ns/iter",
            "extra": "iterations: 149787254\ncpu: 4.347133902327891 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/64",
            "value": 4.157105093130316,
            "unit": "ns/iter",
            "extra": "iterations: 168726395\ncpu: 4.156767001392982 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/512",
            "value": 4.112958540997392,
            "unit": "ns/iter",
            "extra": "iterations: 170551353\ncpu: 4.112535870647695 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_clifford/1024",
            "value": 4.095716504145615,
            "unit": "ns/iter",
            "extra": "iterations: 170901321\ncpu: 4.095447360526844 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1",
            "value": 4.684730690880574,
            "unit": "ns/iter",
            "extra": "iterations: 149493378\ncpu: 4.684270282527166 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/8",
            "value": 4.6829230903787655,
            "unit": "ns/iter",
            "extra": "iterations: 149424829\ncpu: 4.682394557065171 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/64",
            "value": 4.692799346077513,
            "unit": "ns/iter",
            "extra": "iterations: 149147954\ncpu: 4.692618518923872 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/512",
            "value": 4.68147979058361,
            "unit": "ns/iter",
            "extra": "iterations: 149576462\ncpu: 4.681182604787108 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_unital_noise/1024",
            "value": 4.680303178321743,
            "unit": "ns/iter",
            "extra": "iterations: 149592094\ncpu: 4.679986403559506 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1",
            "value": 65.02124977826159,
            "unit": "ns/iter",
            "extra": "iterations: 10761477\ncpu: 65.01804817312666 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/8",
            "value": 73.22587329044778,
            "unit": "ns/iter",
            "extra": "iterations: 9451237\ncpu: 73.22508217707396 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/64",
            "value": 73.89123226864137,
            "unit": "ns/iter",
            "extra": "iterations: 9483833\ncpu: 73.886124734588 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/512",
            "value": 83.48564456098626,
            "unit": "ns/iter",
            "extra": "iterations: 8357355\ncpu: 83.4815860999079 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_once/1024",
            "value": 129.9580168288579,
            "unit": "ns/iter",
            "extra": "iterations: 5384205\ncpu: 129.94423819301025 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/1",
            "value": 111.667056214315,
            "unit": "ns/iter",
            "extra": "iterations: 6253407\ncpu: 111.65622371932602 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/1",
            "value": 115.87218015534339,
            "unit": "ns/iter",
            "extra": "iterations: 6075379\ncpu: 115.80468346089953 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/1",
            "value": 117.27011045268345,
            "unit": "ns/iter",
            "extra": "iterations: 5953409\ncpu: 117.26453028844556 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/1",
            "value": 128.17203283871086,
            "unit": "ns/iter",
            "extra": "iterations: 5448204\ncpu: 128.15930589236444 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/1",
            "value": 172.44647710407762,
            "unit": "ns/iter",
            "extra": "iterations: 4060963\ncpu: 172.43798872336438 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/8",
            "value": 2910.8777180928096,
            "unit": "ns/iter",
            "extra": "iterations: 240150\ncpu: 2910.6920716218933 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/8",
            "value": 3832.3702303647665,
            "unit": "ns/iter",
            "extra": "iterations: 182797\ncpu: 3832.138372073913 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/8",
            "value": 3633.12826492293,
            "unit": "ns/iter",
            "extra": "iterations: 192539\ncpu: 3633.0484888775995 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/8",
            "value": 13949.003205256264,
            "unit": "ns/iter",
            "extra": "iterations: 50230\ncpu: 13947.97712522382 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/8",
            "value": 25929.919450410653,
            "unit": "ns/iter",
            "extra": "iterations: 27002\ncpu: 25927.81205095912 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1/16",
            "value": 769911.4735682651,
            "unit": "ns/iter",
            "extra": "iterations: 908\ncpu: 769878.8744493328 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/8/16",
            "value": 937737.2010796204,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 937597.033738195 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/64/16",
            "value": 1043037.9656716201,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1042896.3597015046 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/512/16",
            "value": 1540926.8988764014,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 1540762.9393258295 ns\nthreads: 1"
          },
          {
            "name": "Observable_apply_rz_ntimes/1024/16",
            "value": 2207345.200000032,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2206955.158730141 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1/16",
            "value": 81586.66966686424,
            "unit": "ns/iter",
            "extra": "iterations: 8555\ncpu: 81585.83717124438 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/8/16",
            "value": 81623.82740524874,
            "unit": "ns/iter",
            "extra": "iterations: 8575\ncpu: 81614.3364431478 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/64/16",
            "value": 82448.20336787251,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 82440.80817239836 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/512/16",
            "value": 127901.03909275755,
            "unit": "ns/iter",
            "extra": "iterations: 5423\ncpu: 127881.62677484662 ns\nthreads: 1"
          },
          {
            "name": "Observable_ev_after_nrz/1024/16",
            "value": 157517.06479383993,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 157495.2077480733 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/1",
            "value": 124.08811483596129,
            "unit": "ns/iter",
            "extra": "iterations: 5632173\ncpu: 124.08576157018 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/1",
            "value": 131.3581808779459,
            "unit": "ns/iter",
            "extra": "iterations: 5188239\ncpu: 131.34642525141976 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/1",
            "value": 142.30888690602097,
            "unit": "ns/iter",
            "extra": "iterations: 4952421\ncpu: 142.29429747592224 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/1",
            "value": 169.53079317538885,
            "unit": "ns/iter",
            "extra": "iterations: 4145464\ncpu: 169.50937916720477 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/1",
            "value": 234.26334001834522,
            "unit": "ns/iter",
            "extra": "iterations: 2992762\ncpu: 234.2488767900713 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/2",
            "value": 148.11439118051447,
            "unit": "ns/iter",
            "extra": "iterations: 4738145\ncpu: 148.09785031906048 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/2",
            "value": 167.50268137883452,
            "unit": "ns/iter",
            "extra": "iterations: 4160546\ncpu: 167.48580667056726 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/2",
            "value": 169.60671417443092,
            "unit": "ns/iter",
            "extra": "iterations: 3783101\ncpu: 169.59580222679628 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/2",
            "value": 219.3933983895801,
            "unit": "ns/iter",
            "extra": "iterations: 3027534\ncpu: 219.38070489051336 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/2",
            "value": 330.3358010548899,
            "unit": "ns/iter",
            "extra": "iterations: 2192846\ncpu: 330.3100518686677 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/4",
            "value": 286.38731508328357,
            "unit": "ns/iter",
            "extra": "iterations: 2447994\ncpu: 286.3501209561803 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/4",
            "value": 415.5563191978575,
            "unit": "ns/iter",
            "extra": "iterations: 1537078\ncpu: 415.5280011814637 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/4",
            "value": 864.4023427616472,
            "unit": "ns/iter",
            "extra": "iterations: 1201488\ncpu: 863.6887892346857 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/4",
            "value": 1051.6273054308601,
            "unit": "ns/iter",
            "extra": "iterations: 679103\ncpu: 1051.4962148598881 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/4",
            "value": 2799.673236992822,
            "unit": "ns/iter",
            "extra": "iterations: 292781\ncpu: 2799.326735682973 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1/8",
            "value": 3001.1585034188324,
            "unit": "ns/iter",
            "extra": "iterations: 233118\ncpu: 3000.913357183895 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/8/8",
            "value": 5628.412870009374,
            "unit": "ns/iter",
            "extra": "iterations: 151888\ncpu: 5628.000263351894 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/64/8",
            "value": 161820.8436041653,
            "unit": "ns/iter",
            "extra": "iterations: 8357\ncpu: 161805.28096206635 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/512/8",
            "value": 89184.18081077228,
            "unit": "ns/iter",
            "extra": "iterations: 7129\ncpu: 89180.54776265935 ns\nthreads: 1"
          },
          {
            "name": "Observable_merge_after_nrz/1024/8",
            "value": 143291.38466784605,
            "unit": "ns/iter",
            "extra": "iterations: 7331\ncpu: 143278.9510298733 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/1",
            "value": 84.46147846768666,
            "unit": "ns/iter",
            "extra": "iterations: 8312390\ncpu: 84.45641903231221 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/1",
            "value": 85.40088244779082,
            "unit": "ns/iter",
            "extra": "iterations: 8189493\ncpu: 85.39022781996287 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/1",
            "value": 85.16771593790382,
            "unit": "ns/iter",
            "extra": "iterations: 8222850\ncpu: 85.16109803778518 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/1",
            "value": 94.72255280624653,
            "unit": "ns/iter",
            "extra": "iterations: 7387431\ncpu: 94.72005626854596 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/1",
            "value": 138.51370636540102,
            "unit": "ns/iter",
            "extra": "iterations: 5071950\ncpu: 138.50634312246703 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/2",
            "value": 85.14705996533463,
            "unit": "ns/iter",
            "extra": "iterations: 8242896\ncpu: 85.14346147276393 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/2",
            "value": 86.3245591087533,
            "unit": "ns/iter",
            "extra": "iterations: 8088616\ncpu: 86.31908536639644 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/2",
            "value": 86.40333855755443,
            "unit": "ns/iter",
            "extra": "iterations: 8103919\ncpu: 86.39694214613951 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/2",
            "value": 96.17361613767537,
            "unit": "ns/iter",
            "extra": "iterations: 7293193\ncpu: 96.17106375767207 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/2",
            "value": 140.26517189398484,
            "unit": "ns/iter",
            "extra": "iterations: 4992554\ncpu: 140.2571365277179 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/4",
            "value": 92.93609853958384,
            "unit": "ns/iter",
            "extra": "iterations: 7702813\ncpu: 92.93163017199034 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/4",
            "value": 89.68569151420265,
            "unit": "ns/iter",
            "extra": "iterations: 6833099\ncpu: 89.67860088080013 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/4",
            "value": 94.232790427484,
            "unit": "ns/iter",
            "extra": "iterations: 7182645\ncpu: 94.22993785715344 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/4",
            "value": 145.10093398691765,
            "unit": "ns/iter",
            "extra": "iterations: 4567837\ncpu: 145.09792796897182 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/4",
            "value": 1486.0907157215568,
            "unit": "ns/iter",
            "extra": "iterations: 470602\ncpu: 1485.9934169425505 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1/8",
            "value": 637.7208719105272,
            "unit": "ns/iter",
            "extra": "iterations: 1511256\ncpu: 637.6769270064145 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/8/8",
            "value": 830.6312692379443,
            "unit": "ns/iter",
            "extra": "iterations: 2595132\ncpu: 830.5916230850661 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/64/8",
            "value": 1862.948767869379,
            "unit": "ns/iter",
            "extra": "iterations: 385227\ncpu: 1862.917438289584 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/512/8",
            "value": 11894.583347361948,
            "unit": "ns/iter",
            "extra": "iterations: 59402\ncpu: 11893.76643884034 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_coeff_after_nrz/1024/8",
            "value": 2223.85913766248,
            "unit": "ns/iter",
            "extra": "iterations: 340957\ncpu: 2223.7788049519463 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/1",
            "value": 86.31835240145905,
            "unit": "ns/iter",
            "extra": "iterations: 8104013\ncpu: 86.31247309203384 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/1",
            "value": 87.77884533948834,
            "unit": "ns/iter",
            "extra": "iterations: 8005366\ncpu: 87.77777705603984 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/1",
            "value": 159.28424042334944,
            "unit": "ns/iter",
            "extra": "iterations: 4401070\ncpu: 159.27049944673024 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/1",
            "value": 241.64973412764124,
            "unit": "ns/iter",
            "extra": "iterations: 2903837\ncpu: 241.64200952050277 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/1",
            "value": 367.82940136163745,
            "unit": "ns/iter",
            "extra": "iterations: 1903286\ncpu: 367.80639063178836 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/2",
            "value": 88.86691508831633,
            "unit": "ns/iter",
            "extra": "iterations: 7881224\ncpu: 88.86369553764533 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/2",
            "value": 90.77218618024509,
            "unit": "ns/iter",
            "extra": "iterations: 7710915\ncpu: 90.76516846574131 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/2",
            "value": 180.96763165497325,
            "unit": "ns/iter",
            "extra": "iterations: 3866679\ncpu: 180.9550883329108 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/2",
            "value": 335.154676475886,
            "unit": "ns/iter",
            "extra": "iterations: 2089736\ncpu: 335.1198146560117 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/2",
            "value": 546.5019835155668,
            "unit": "ns/iter",
            "extra": "iterations: 1281815\ncpu: 546.4918525684321 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/4",
            "value": 108.01873063722745,
            "unit": "ns/iter",
            "extra": "iterations: 6468600\ncpu: 108.01671258077559 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/4",
            "value": 119.38984083765338,
            "unit": "ns/iter",
            "extra": "iterations: 5331286\ncpu: 119.38004095071727 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/4",
            "value": 318.82049063483015,
            "unit": "ns/iter",
            "extra": "iterations: 2193607\ncpu: 318.80158615467684 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/4",
            "value": 947.2397285285947,
            "unit": "ns/iter",
            "extra": "iterations: 739378\ncpu: 947.1644842015983 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/4",
            "value": 2968.556657055725,
            "unit": "ns/iter",
            "extra": "iterations: 235840\ncpu: 2968.465629240137 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1/8",
            "value": 505.03784407882387,
            "unit": "ns/iter",
            "extra": "iterations: 1388381\ncpu: 504.9941226507626 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/8/8",
            "value": 685.5813465498488,
            "unit": "ns/iter",
            "extra": "iterations: 1021752\ncpu: 685.5532820097159 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/64/8",
            "value": 4095.3191669835956,
            "unit": "ns/iter",
            "extra": "iterations: 170945\ncpu: 4095.1607710081234 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/512/8",
            "value": 22843.851427638656,
            "unit": "ns/iter",
            "extra": "iterations: 30645\ncpu: 22843.404340023324 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_weight10_after_nrz/1024/8",
            "value": 24252.80815845927,
            "unit": "ns/iter",
            "extra": "iterations: 28878\ncpu: 24251.588683426842 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/64/4",
            "value": 86.73920343232908,
            "unit": "ns/iter",
            "extra": "iterations: 8091993\ncpu: 86.73482811959992 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/512/4",
            "value": 136.32935366574782,
            "unit": "ns/iter",
            "extra": "iterations: 5121282\ncpu: 136.32390190581586 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/1024/4",
            "value": 1487.3270114967647,
            "unit": "ns/iter",
            "extra": "iterations: 470222\ncpu: 1487.2509027650424 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/64/8",
            "value": 1498.5963250538439,
            "unit": "ns/iter",
            "extra": "iterations: 467381\ncpu: 1498.5467958688434 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/512/8",
            "value": 10935.530180519068,
            "unit": "ns/iter",
            "extra": "iterations: 63816\ncpu: 10934.807947850402 ns\nthreads: 1"
          },
          {
            "name": "Observable_truncate_keepn1024_after_nrz/1024/8",
            "value": 1460.8315776758673,
            "unit": "ns/iter",
            "extra": "iterations: 480162\ncpu: 1460.7385049212344 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1",
            "value": 4.578367749845958,
            "unit": "ns/iter",
            "extra": "iterations: 152879667\ncpu: 4.577970221507603 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/8",
            "value": 4.5779060155116325,
            "unit": "ns/iter",
            "extra": "iterations: 152617759\ncpu: 4.577668520214591 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/64",
            "value": 4.579112214102671,
            "unit": "ns/iter",
            "extra": "iterations: 152863861\ncpu: 4.5789403029666795 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/512",
            "value": 4.580764903381101,
            "unit": "ns/iter",
            "extra": "iterations: 152957776\ncpu: 4.580542632889609 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_i/1024",
            "value": 4.575281594196549,
            "unit": "ns/iter",
            "extra": "iterations: 152783866\ncpu: 4.575103944548691 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1",
            "value": 7.696685969999635,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.696194029999788 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/8",
            "value": 7.699684780000098,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.699364350000052 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/64",
            "value": 7.708490849999521,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.70801136000017 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/512",
            "value": 7.715250979999837,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.714980140000023 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_xy/1024",
            "value": 7.688784720000399,
            "unit": "ns/iter",
            "extra": "iterations: 100000000\ncpu: 7.688476129999913 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1",
            "value": 54.48289468553191,
            "unit": "ns/iter",
            "extra": "iterations: 12821980\ncpu: 54.478735577499684 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/8",
            "value": 57.57625948050742,
            "unit": "ns/iter",
            "extra": "iterations: 12166802\ncpu: 57.573067598205924 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/64",
            "value": 56.99999682751683,
            "unit": "ns/iter",
            "extra": "iterations: 12293210\ncpu: 56.995944590549335 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/512",
            "value": 62.36062749088319,
            "unit": "ns/iter",
            "extra": "iterations: 11203350\ncpu: 62.3578553736146 ns\nthreads: 1"
          },
          {
            "name": "Observable_appy_amplitude_damping_z/1024",
            "value": 108.24217956285132,
            "unit": "ns/iter",
            "extra": "iterations: 6483557\ncpu: 108.23664186186613 ns\nthreads: 1"
          },
          {
            "name": "pauli_empty_benchmark",
            "value": 0.6235414040914437,
            "unit": "ns/iter",
            "extra": "iterations: 1121983128\ncpu: 0.6235197174908145 ns\nthreads: 1"
          },
          {
            "name": "pauli_commutes",
            "value": 1.0661570102884197,
            "unit": "ns/iter",
            "extra": "iterations: 656001470\ncpu: 1.0661084646654762 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_pauli",
            "value": 0.7344487006025847,
            "unit": "ns/iter",
            "extra": "iterations: 946353991\ncpu: 0.7344093231599089 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_clifford",
            "value": 0.8491617190273495,
            "unit": "ns/iter",
            "extra": "iterations: 813150927\ncpu: 0.8491576250764007 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_cx",
            "value": 6.59365207438278,
            "unit": "ns/iter",
            "extra": "iterations: 107326998\ncpu: 6.593184997124391 ns\nthreads: 1"
          },
          {
            "name": "pauli_equality",
            "value": 0.8511832981581833,
            "unit": "ns/iter",
            "extra": "iterations: 822647186\ncpu: 0.8511073907691 ns\nthreads: 1"
          },
          {
            "name": "pauli_weight",
            "value": 0.821380747384899,
            "unit": "ns/iter",
            "extra": "iterations: 852355929\ncpu: 0.8213271606162579 ns\nthreads: 1"
          },
          {
            "name": "pauli_apply_unital_noise",
            "value": 0.6260365826384567,
            "unit": "ns/iter",
            "extra": "iterations: 1119727055\ncpu: 0.6259956172980166 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1",
            "value": 17.439714502152093,
            "unit": "ns/iter",
            "extra": "iterations: 40086747\ncpu: 17.438257012972198 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/8",
            "value": 27.456808950760077,
            "unit": "ns/iter",
            "extra": "iterations: 22854909\ncpu: 27.454414454242855 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/64",
            "value": 138.14914541690197,
            "unit": "ns/iter",
            "extra": "iterations: 5146018\ncpu: 138.13864797985033 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/512",
            "value": 3085.5437522405655,
            "unit": "ns/iter",
            "extra": "iterations: 217566\ncpu: 3085.354218949578 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_init_from_string/1024",
            "value": 7035.606018073018,
            "unit": "ns/iter",
            "extra": "iterations: 97606\ncpu: 7035.3090486239425 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1",
            "value": 0.936367827125474,
            "unit": "ns/iter",
            "extra": "iterations: 747872261\ncpu: 0.9363164025680986 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/8",
            "value": 0.9364041319710209,
            "unit": "ns/iter",
            "extra": "iterations: 747360520\ncpu: 0.936321533280878 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/64",
            "value": 0.9363819066219715,
            "unit": "ns/iter",
            "extra": "iterations: 745737077\ncpu: 0.9363327150220325 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/512",
            "value": 0.9367520390845243,
            "unit": "ns/iter",
            "extra": "iterations: 747363082\ncpu: 0.9366489834187481 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_pauli/1024",
            "value": 0.936818290876495,
            "unit": "ns/iter",
            "extra": "iterations: 747061019\ncpu: 0.9367868449846231 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1",
            "value": 3.2594560627339577,
            "unit": "ns/iter",
            "extra": "iterations: 215694212\ncpu: 3.259151627119235 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/8",
            "value": 1.1857053025813187,
            "unit": "ns/iter",
            "extra": "iterations: 591489470\ncpu: 1.1856319978105387 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/64",
            "value": 1.0095940700093224,
            "unit": "ns/iter",
            "extra": "iterations: 693990975\ncpu: 1.009523876012962 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/512",
            "value": 0.9483304566769298,
            "unit": "ns/iter",
            "extra": "iterations: 739130086\ncpu: 0.9482979089556635 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_clifford/1024",
            "value": 0.9436113088484808,
            "unit": "ns/iter",
            "extra": "iterations: 740380281\ncpu: 0.943541728389136 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1",
            "value": 25.08862570745423,
            "unit": "ns/iter",
            "extra": "iterations: 28097220\ncpu: 25.086330747312296 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/8",
            "value": 30.17183211213777,
            "unit": "ns/iter",
            "extra": "iterations: 22603278\ncpu: 30.169285224912464 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/64",
            "value": 30.439952076493935,
            "unit": "ns/iter",
            "extra": "iterations: 23275426\ncpu: 30.43833724031598 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/512",
            "value": 36.53813750029154,
            "unit": "ns/iter",
            "extra": "iterations: 19237050\ncpu: 36.53665026602294 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_rz/1024",
            "value": 42.136649892228554,
            "unit": "ns/iter",
            "extra": "iterations: 16631656\ncpu: 42.13548831216938 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1",
            "value": 15.54225844183079,
            "unit": "ns/iter",
            "extra": "iterations: 45008155\ncpu: 15.541293527806678 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/8",
            "value": 7.545505966639456,
            "unit": "ns/iter",
            "extra": "iterations: 92770395\ncpu: 7.545094499166569 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/64",
            "value": 7.545090556168795,
            "unit": "ns/iter",
            "extra": "iterations: 92935303\ncpu: 7.544432528508633 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/512",
            "value": 7.544724542593597,
            "unit": "ns/iter",
            "extra": "iterations: 92865265\ncpu: 7.544258415673544 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_expectation_value_worst_case/1024",
            "value": 7.545233508013733,
            "unit": "ns/iter",
            "extra": "iterations: 92932014\ncpu: 7.544967205811184 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1",
            "value": 1.243985929516376,
            "unit": "ns/iter",
            "extra": "iterations: 561258886\ncpu: 1.2439244730282846 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/8",
            "value": 5.599391988837218,
            "unit": "ns/iter",
            "extra": "iterations: 124600344\ncpu: 5.599364613311144 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/64",
            "value": 8.150095672839518,
            "unit": "ns/iter",
            "extra": "iterations: 85769901\ncpu: 8.149468354872058 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/512",
            "value": 57.79878290736678,
            "unit": "ns/iter",
            "extra": "iterations: 12119209\ncpu: 57.79716052425583 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_phash/1024",
            "value": 115.65533178388779,
            "unit": "ns/iter",
            "extra": "iterations: 6050761\ncpu: 115.64910479855283 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1",
            "value": 0.934450213931367,
            "unit": "ns/iter",
            "extra": "iterations: 749368197\ncpu: 0.934348175974161 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/8",
            "value": 3.3746009242613746,
            "unit": "ns/iter",
            "extra": "iterations: 207525457\ncpu: 3.3744280828157724 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/64",
            "value": 6.465238582003025,
            "unit": "ns/iter",
            "extra": "iterations: 107982160\ncpu: 6.464774431257884 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/512",
            "value": 38.97498302493651,
            "unit": "ns/iter",
            "extra": "iterations: 17923350\ncpu: 38.97268317585676 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_pauli_weight/1024",
            "value": 73.87424975400579,
            "unit": "ns/iter",
            "extra": "iterations: 9481890\ncpu: 73.86695806426839 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1",
            "value": 1.247650123141615,
            "unit": "ns/iter",
            "extra": "iterations: 561078869\ncpu: 1.2475992586347238 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/8",
            "value": 1.2476608738414248,
            "unit": "ns/iter",
            "extra": "iterations: 561160840\ncpu: 1.2475701119842832 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/64",
            "value": 1.2474438039693987,
            "unit": "ns/iter",
            "extra": "iterations: 561043141\ncpu: 1.2474067800786266 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/512",
            "value": 1.2480105051572883,
            "unit": "ns/iter",
            "extra": "iterations: 561005978\ncpu: 1.2479058164332328 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_unital_noise/1024",
            "value": 1.2477290827827017,
            "unit": "ns/iter",
            "extra": "iterations: 560804018\ncpu: 1.247681499314791 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1",
            "value": 4.440382208880787,
            "unit": "ns/iter",
            "extra": "iterations: 157814334\ncpu: 4.440198087456318 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/8",
            "value": 4.440387806351771,
            "unit": "ns/iter",
            "extra": "iterations: 157780706\ncpu: 4.440154184631357 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/64",
            "value": 4.444517536707677,
            "unit": "ns/iter",
            "extra": "iterations: 157788398\ncpu: 4.444441973484149 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/512",
            "value": 4.440307101629794,
            "unit": "ns/iter",
            "extra": "iterations: 157797925\ncpu: 4.439846810406413 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_xy/1024",
            "value": 4.4394450322737935,
            "unit": "ns/iter",
            "extra": "iterations: 157835845\ncpu: 4.439294103313554 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1",
            "value": 15.351459889326502,
            "unit": "ns/iter",
            "extra": "iterations: 45756311\ncpu: 15.350146321891922 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/8",
            "value": 17.437621224996956,
            "unit": "ns/iter",
            "extra": "iterations: 40205198\ncpu: 17.436982153401896 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/64",
            "value": 17.609928515034238,
            "unit": "ns/iter",
            "extra": "iterations: 40438293\ncpu: 17.608470664179677 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/512",
            "value": 27.50392851022643,
            "unit": "ns/iter",
            "extra": "iterations: 25891367\ncpu: 27.50283590665489 ns\nthreads: 1"
          },
          {
            "name": "PauliTerm_apply_amplitude_damping_z/1024",
            "value": 39.80519018153986,
            "unit": "ns/iter",
            "extra": "iterations: 17799493\ncpu: 39.80369457714318 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/run",
            "value": 103517.33160544353,
            "unit": "ns/iter",
            "extra": "iterations: 6752\ncpu: 103514.62899881635 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/ev",
            "value": 5449.812808727365,
            "unit": "ns/iter",
            "extra": "iterations: 128147\ncpu: 5449.425206988882 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/ev_evaluate",
            "value": 5840.473752940042,
            "unit": "ns/iter",
            "extra": "iterations: 123290\ncpu: 5840.1678157190445 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/ev_simplify",
            "value": 221394.7557106542,
            "unit": "ns/iter",
            "extra": "iterations: 3152\ncpu: 221373.35310913573 ns\nthreads: 1"
          },
          {
            "name": "SymbolicMaxCutQAOAN4P1/ev_simplified_evaluate",
            "value": 891.5631309716807,
            "unit": "ns/iter",
            "extra": "iterations: 783910\ncpu: 891.5269035986387 ns\nthreads: 1"
          },
          {
            "name": "Memory_vector_int_resize64x2p16",
            "value": 502421.92652459315,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 502390.3453342944 ns\nthreads: 1"
          },
          {
            "name": "Memory_vector_Pauli_resize64x2p16",
            "value": 502198.7315147278,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 502148.55061020015 ns\nthreads: 1"
          },
          {
            "name": "Memory_PauliTermContainer_insert64x2p16",
            "value": 682168.0174757317,
            "unit": "ns/iter",
            "extra": "iterations: 1030\ncpu: 682156.1233009595 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}