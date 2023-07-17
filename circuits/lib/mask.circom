pragma circom 2.0.0;

include "../circomlib/babyjub.circom";
include "../circomlib/escalarmulany.circom";
include "./encode.circom";

// (c1, c2) = (g^r, g^M * h^r)
template Mask() {
    signal input M;
    signal input h[2];
    signal input r;
    signal output c1[2];
    signal output c2[2];

    signal m[2];
    m <== Encode()(M <== M);

    // calculate c1
    (c1[0], c1[1]) <== BabyPbk()(in <== r);

    // calculate h^r
    signal h_r[2];

    component pvkBits = Num2Bits(253);
    pvkBits.in <== r;

    component mulAny = EscalarMulAny(253);
    mulAny.p <== h;
    var i;
    for (var i = 0; i < 253; i++) {
        mulAny.e[i] <== pvkBits.out[i];
    }
    h_r  <== mulAny.out;

    // calculate c2
    (c2[0], c2[1]) <== BabyAdd()(x1 <== m[0], y1 <== m[1], x2 <== h_r[0], y2 <== h_r[1]);
}
