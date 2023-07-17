pragma circom 2.0.0;

include "../circomlib/comparators.circom";
include "./selector.circom";
include "./sum.circom";

template Permutation(n) {
    signal input in[2][2][n];
    signal input permutation[n];
    signal output out[2][2][n];

    signal permutationCheck[n][n];
    signal permutationSum[n];

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            permutationCheck[i][j] <== IsEqual()(in <== [i, permutation[j]]);
        }
        permutationSum[i] <== Sum(n)(in <== permutationCheck[i]);
        permutationSum[i] === 1;
    }

    for (var i = 0; i < n; i++) {
        out[0][0][i] <== Selector(n)(in <== in[0][0], index <== permutation[i]);
        out[0][1][i] <== Selector(n)(in <== in[0][1], index <== permutation[i]);
        out[1][0][i] <== Selector(n)(in <== in[1][0], index <== permutation[i]);
        out[1][1][i] <== Selector(n)(in <== in[1][1], index <== permutation[i]);
    }
}
