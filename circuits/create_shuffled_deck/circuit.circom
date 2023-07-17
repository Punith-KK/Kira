pragma circom 2.0.0;

include "../lib/create_card.circom";
include "../lib/shuffle.circom";

template CreateShuffledDeck(n) {
    signal input permutation[n];
    signal input randomness[n];
    signal input h[2];
    signal output D[2][2][n];

    signal unshuffled[2][2][n];
    component create_cards[n];
    for (var i = 0; i < n; i++) {
        create_cards[i] = CreateCard();
        create_cards[i].M <== i;
        create_cards[i].h <== h;
        unshuffled[0][0][i] <== create_cards[i].c1[0];
        unshuffled[0][1][i] <== create_cards[i].c1[1];
        unshuffled[1][0][i] <== create_cards[i].c2[0];
        unshuffled[1][1][i] <== create_cards[i].c2[1];
    }

    component shuffle = Shuffle(n);
    shuffle.D <== unshuffled;
    shuffle.permutation <== permutation;
    shuffle.randomness <== randomness;
    shuffle.h <== h;
    D <== shuffle.E;
}

component main {public [h]}= CreateShuffledDeck(4);
