export function timestamp() {
    return Math.floor(Date.now());
}

export async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}

export function randomBool() {
    return Math.random() > 0.5;
}

export function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

export function randomPermutation(num) {
    let array = [...Array(num).keys()];
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex != 0) {
        randomIndex = randomNumber(currentIndex);
        currentIndex--;
        // swap
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

// winner : 0 (A), 1 (B), 2 (Draw)
// multiple : 0x, 1x, 2x
export function calculateResult(cardA, cardB, choiceA, choiceB) {
    let winner, multiple;
    if (choiceA && choiceB) {
        multiple = 2;
        if (cardA > cardB) {
            winner = 0;
        } else {
            winner = 1;
        }
    } else if (choiceA && !choiceB) {
        winner = 0;
        if (cardB == 3) {
            multiple = 2;
        } else {
            multiple = 1;
        }
    } else if (!choiceA && choiceB) {
        winner = 1;
        if (cardA == 3) {
            multiple = 2;
        } else {
            multiple = 1;
        }
    } else {
        if (cardA == 3) {
            winner = 1;
            multiple = 2;
        } else if (cardB == 3) {
            winner = 0;
            multiple = 2;
        } else {
            winner = 2;
            multiple = 0;
        }
    }
    return [winner, multiple];
}

export function resultMessage(winner, multiple, bet) {
    if (winner == 0) {
        return `You won ${multiple * bet} wei!`;
    } else if (winner == 1) {
        return `You lose ${multiple * bet} wei!`;
    } else {
        return "Draw!";
    }
}
