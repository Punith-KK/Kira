pragma circom 2.0.0;

include "../circomlib/babyjub.circom";
include "../circomlib/escalarmulany.circom";

// a = g^x, b = h^x
template SameExponent() {
    signal input x;
    signal input h[2];
    signal input a[2];
    signal input b[2];

    signal g_x[2];
    (g_x[0], g_x[1]) <== BabyPbk()(in <== x);
    g_x === a;

     // calculate h^x
    signal h_x[2];

    component pvkBits = Num2Bits(253);
    pvkBits.in <== x;

    component mulAny = EscalarMulAny(253);
    mulAny.p <== h;
    for (var i = 0; i < 253; i++) {
        mulAny.e[i] <== pvkBits.out[i];
    }
    h_x  <== mulAny.out;

    h_x === b;
}
