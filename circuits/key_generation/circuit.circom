pragma circom 2.0.0;

include "../circomlib/babyjub.circom";

// y = g^x
template KeyGeneration() {
    signal input x;
    signal output y[2];

    (y[0], y[1]) <== BabyPbk()(in <== x);
}

component main = KeyGeneration();
