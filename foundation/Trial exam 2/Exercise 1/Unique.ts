// Unique Characters
// Create a function that takes a string as parameter
//and returns a list with the unique letters of the given string.

import { count } from 'console';

function Unique(word: string): string[] {
  const splittedWord = word.toLowerCase().split('');

  let counter: Object = {};

  for (let character of splittedWord) {
    if (counter[character]) {
      counter[character]++;
    } else {
      counter[character] = 1;
    }
  }
  return Object.keys(counter);

  // let uniqueArray: string[] = [];

  // for (let i: number = 0; i < Object.keys(counter).length; i++) {
  //   if (Object.values(counter)[i] > Object.values(counter)[i + 1]) {
  //     uniqueArray.push(Object.keys(counter)[i]);
  //   }
  // }
  // return uniqueArray;
}

console.log(Unique('lamafaalll'));
