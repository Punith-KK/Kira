pragma circom 2.0.0;

include "../circomlib/babyjub.circom";

// we use g^M as natural encoding
template Encode() {
    signal input M;
    signal output m[2];

    (m[0], m[1]) <== BabyPbk()(in <== M);
}
