import { writable } from "svelte/store"

function createTableStore() {
    const tableStore = writable({
        cards: []
    });

    function createDeck() {
        tableStore.update(table => {
            table.cards = [
                {
                    index: 0,
                    number: 1,
                    hidden: false,
                    owner: 0,
                },
                {
                    index: 1,
                    number: 2,
                    hidden: false,
                    owner: 0,
                },
                {
                    index: 2,
                    number: 3,
                    hidden: false,
                    owner: 0,
                },
                {
                    index: 3,
                    number: 4,
                    hidden: false,
                    owner: 0,
                },
            ];
            return table;
        });
    }

    function draw(me) {
        tableStore.update(table => {
            let player = me ? 1 : 2;
            for (let i = 0; i < 4; i++) {
                if (table.cards[i].owner === 0) {
                    table.cards[i].owner = player;
                    break;
                }
            }
            return table;
        });
    }

    function reset() {
        tableStore.update(table => {
            table.cards = [];
            return table;
        });
    }

    function flip(i) {
        tableStore.update(table => {
            table.cards[i].hidden = !table.cards[i].hidden;
            return table;
        });
    }

    function flipAll() {
        tableStore.update(table => {
            for (let i = 0; i < 4; i++) {
                table.cards[i].hidden = !table.cards[i].hidden;
            }
            return table;
        });
    }

    function setNumber(i, number) {
        tableStore.update(table => {
            table.cards[i].number = number;
            return table;
        });
    }

    function swap(i, j) {
        tableStore.update(table => {
            let index1 = table.cards[i].index;
            let index2 = table.cards[j].index;
            table.cards[i].index = index2;
            table.cards[j].index = index1;
            return table;
        });
    }

    function unshuffle() {
        let ret = false;
        tableStore.update(table => {
            for (let i = 0; i < 4; i++) {
                if (table.cards[i].index === i) {
                    continue;
                }
                ret = true;
                let index = table.cards[i].index;
                for (let j = 0; j < 4; j++) {
                    if (table.cards[j].index === i) {
                        table.cards[j].index = index;
                        break;
                    }
                }
                table.cards[i].index = i;
                break;
            }
            return table;
        });
        return ret;
    }

    return {
        subscribe: tableStore.subscribe,
        createDeck,
        draw,
        flip,
        flipAll,
        setNumber,
        reset,
        swap,
        unshuffle,
    };
}

export const tableStore = createTableStore();
