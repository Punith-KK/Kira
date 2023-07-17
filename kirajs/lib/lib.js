// TODO: public key
export function publicKeyFromPrivateKey(privateKey) {
    return [1, 1];
}

// TODO: encode
export function encode(cardNumber, publicKeys) {
    return [cardNumber, 0, 0, 0, 0];
}

// TODO: decode
export function decode(card, publicKeys) {
    return card[0];
}

// TODO: remask
export function remask(card, randomness) {
    return card;
}

// TODO: unmask
export function unmask(card, privateKey) {
    return card;
}
