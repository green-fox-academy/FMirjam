//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

let numbersList: number[] = [34, 120, 24, 50];

function Sorting(numbers: number[], condition: boolean): number[] {
  if (condition === false) {
    numbers.sort((a, b) => a - b);
    return numbers;
  } else {
    return numbers.sort((a, b) => b - a);
  }
}

console.log(Sorting(numbersList, false));
