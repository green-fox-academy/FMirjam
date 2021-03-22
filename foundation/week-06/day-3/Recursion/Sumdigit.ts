// Given a non-negative integer n, return the sum of its digits recursively (without loops).

function sumdigit(inputNumber: number):number {
  if (inputNumber === 0) {
    return 0;
  } else {
    return (inputNumber % 10) + sumdigit(inputNumber / 10);
  }
}


console.log(Math.floor(sumdigit(123)));