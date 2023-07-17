pragma circom 2.0.0;

include "../circomlib/comparators.circom";
include "./sum.circom";

template Selector(choices) {
    signal input in[choices];
    signal input index;
    signal output out;

    var x = choices;
    var num_bits = 0;
    while (x > 0) {
        num_bits += 1;
        x >>= 1;
    }
    
    // Ensure that index < choices
    component lessThan = LessThan(num_bits);
    lessThan.in[0] <== index;
    lessThan.in[1] <== choices;
    lessThan.out === 1;

    component sum = Sum(choices);
    component eqs[choices];

    for (var i = 0; i < choices; i ++) {
        eqs[i] = IsEqual();
        eqs[i].in[0] <== i;
        eqs[i].in[1] <== index;
        sum.in[i] <== eqs[i].out * in[i];
    }

    out <== sum.out;
}
