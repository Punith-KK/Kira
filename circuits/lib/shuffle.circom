pragma circom 2.0.0;

include "./permutation.circom";
include "./remask.circom";

// proof of knowledge: correct masking values and permutation to go from D to E
// D -(shuffle)-> permuted -(remask)-> E
template Shuffle(n) {
    signal input D[2][2][n]; // (c1, c2) of ith card
    signal input permutation[n];
    signal input randomness[n];
    signal input h[2];
    signal output E[2][2][n]; // (c1, c2) of ith card after shuffled

    signal permuted[2][2][n];
    permuted <== Permutation(n)(in <== D, permutation <== permutation);

    component remasks[n];

    for (var i = 0; i < n; i++) {
        remasks[i] = Remask();
        remasks[i].c1[0] <== permuted[0][0][i];
        remasks[i].c1[1] <== permuted[0][1][i];
        remasks[i].c2[0] <== permuted[1][0][i];
        remasks[i].c2[1] <== permuted[1][1][i];
        remasks[i].h <== h;
        remasks[i].r <== randomness[i];

        E[0][0][i] <== remasks[i].c1_prime[0];
        E[0][1][i] <== remasks[i].c1_prime[1];
        E[1][0][i] <== remasks[i].c2_prime[0];
        E[1][1][i] <== remasks[i].c2_prime[1];
    }
}
