//  Create a function that takes a number and an array of numbers as a parameter
//  and returns the indices of the numbers of the array which contain the given number
//  or returns an empty list (if the number is not part of any of the numbers in the array)

let lisOfNumbers: number[] = [1, 11, 34, 52, 61];

function FindMatchingIndexes(numberA: number, arrayNumbers: number[]) {
  for (let i: number = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] === numberA || arrayNumbers.includes(numberA)) {
       return arrayNumbers.indexOf(numberA);
    } else {
      return ` The number is not available in the given array.`;
    }
  }
}

console.log(FindMatchingIndexes(1, lisOfNumbers));
