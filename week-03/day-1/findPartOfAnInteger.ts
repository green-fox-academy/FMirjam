//  Create a function that takes a number and an array of numbers as a parameter
//  and returns the indices of the numbers of the array which contain the given number
//  or returns an empty list (if the number is not part of any of the numbers in the array)

let listOfNumbers: string[] = ['1', '11', '34', '52', '1', '61'];

function FindMatchingIndexes(
  numberA: string,
  arrayNumbers: string[]
): string[] {
  let newArray: string[] = [];
  for (let i: number = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] === numberA || arrayNumbers[i].includes(numberA)) {
      newArray.push(i.toString());
    }
  }
  return newArray;
}

console.log(FindMatchingIndexes('1', listOfNumbers));
