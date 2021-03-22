// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you test your method with:
// an empty list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed

export class Sum {
  public sum(a: number, b: number): number {
    return a + b;
  }
}

export class SumMultipleItems {
  public sumMultiple(numbers: number[]): number {
    let sum: number = 0;
    for (let i: number = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
}
