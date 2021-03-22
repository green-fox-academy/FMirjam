// Find the greatest common divisor of two numbers using recursion.

function divisor(n1: number, n2: number): number {
  if (n2 != 0) {
    return divisor(n2, n1 % n2);
  } else {
    return n1;
  }
}

console.log(divisor(120, 10000));
