pragma circom 2.0.0;

include "./encode.circom";
include "./mask.circom";

template CreateCard() {
    signal input M;
    signal input h[2];
    signal output c1[2];
    signal output c2[2];

    signal m[2];
    m <== Encode()(M <== M);

    (c1, c2) <== Mask()(M <== M, h <== h, r <== 1);
}
