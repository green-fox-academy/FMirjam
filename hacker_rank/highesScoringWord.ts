function high(word: string) {
  let splittedWord: string[] = word.split(' ');
  let sum: number = 0;
  for (let i: number = 0; i < splittedWord.length; i++) {
    let value: string = splittedWord[i];
    for (let j: number = 0; j < value.length; j++) {
      sum += value.charCodeAt(j)-96;
    }
  }
  return sum;
}

const word: string = 'abcd';
console.log(high(word));
