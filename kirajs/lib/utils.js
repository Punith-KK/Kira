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
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
