pragma circom 2.0.0;

include "../circomlib/babyjub.circom";

template AddKey() {
    signal input sum[2];
    signal input pk[2];
    signal output new_sum[2];

    (new_sum[0], new_sum[1]) <== BabyAdd()(x1 <== pk[0], y1 <== pk[1], x2 <== sum[0], y2 <== sum[1]);
}

component main {public [sum, pk]} = AddKey();
