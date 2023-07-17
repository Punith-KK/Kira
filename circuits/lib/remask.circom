pragma circom 2.0.0;

include "../circomlib/babyjub.circom";
include "../circomlib/escalarmulany.circom";

// (c1', c2') = (c1 * g^r, c2 * h^r)
template Remask() {
    signal input c1[2];
    signal input c2[2];
    signal input h[2];
    signal input r;
    signal output c1_prime[2];
    signal output c2_prime[2];

    // calculate g_r
    signal g_r[2];
    (g_r[0], g_r[1]) <== BabyPbk()(in <== r);

    // calculate c1_prime
    (c1_prime[0], c1_prime[1]) <== BabyAdd()(x1 <== c1[0], y1 <== c1[1], x2 <== g_r[0], y2 <== g_r[1]);

    // calculate h^r
    signal h_r[2];

    component pvkBits = Num2Bits(253);
    pvkBits.in <== r;

    component mulAny = EscalarMulAny(253);
    mulAny.p <== h;
    for (var i = 0; i < 253; i++) {
        mulAny.e[i] <== pvkBits.out[i];
    }
    h_r  <== mulAny.out;

    // calculate c2_prime
    (c2_prime[0], c2_prime[1]) <== BabyAdd()(x1 <== c2[0], y1 <== c2[1], x2 <== h_r[0], y2 <== h_r[1]);
}
