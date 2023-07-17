pragma circom 2.0.0;

include "../circomlib/babyjub.circom";
include "../circomlib/escalarmulany.circom";

// h = g^x
template BabyPower() {
    signal input x;
    signal input g[2];
    signal output h[2];

    component pvkBits = Num2Bits(253);
    pvkBits.in <== x;

    component mulAny = EscalarMulAny(253);
    mulAny.p <== g;
    var i;
    for (var i = 0; i < 253; i++) {
        mulAny.e[i] <== pvkBits.out[i];
    }
    h  <== mulAny.out;
}
