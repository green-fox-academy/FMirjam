// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberadder(n: number): number {
  if (n === 1) {
    return 1;
  } else {
    return n + numberadder(n - 1);
  }
}

console.log(numberadder(3));
