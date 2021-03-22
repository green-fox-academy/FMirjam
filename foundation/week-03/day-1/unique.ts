//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)

let numbers: number[] = [1, 11, 34, 11, 52, 61, 1, 34];
let sortedNumbers: number[] = numbers.sort();

function findUniqueItems(arrayNumbers: number[]) {
  return arrayNumbers.filter((a, b) => arrayNumbers.indexOf(a) === b);
}

console.log(findUniqueItems(sortedNumbers));
