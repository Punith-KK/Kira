pragma circom 2.0.0;

include "../circomlib/babyjub.circom";
include "../lib/babyjub.circom";

template DecryptionKey() {
    signal input x;
    signal input y[2];
    signal input c[2];
    signal output d[2];

    signal y_[2];
    (y_[0], y_[1]) <== BabyPbk()(in <== x);
    y === y_;

    d <== BabyPower()(x <== x, g <== c);
}

component main {public [y, c]} = DecryptionKey();
