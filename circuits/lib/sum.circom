pragma circom 2.0.0;

template Sum(n) {
    signal input in[n];
    signal output out;

    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum = sum + in[i];
    }
    out <== sum;
}
