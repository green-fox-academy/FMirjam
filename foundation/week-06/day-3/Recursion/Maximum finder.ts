// Write a function that finds the largest element of an array using recursion.

function maxfinder(A: number[], n: number) {
  if (n === 1) {
    return A[0];
  } else {
    return Math.max(A[n - 1], maxfinder(A, n - 1));
  }
}
let list: number[] = [10, 20, 666];

console.log(maxfinder(list, 3));
