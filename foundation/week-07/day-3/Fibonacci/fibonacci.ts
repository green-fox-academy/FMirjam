// Write a function that computes a member of the fibonacci sequence by a given index
// Create tests for multiple test cases.

export function fibonacci(n: number): number {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
