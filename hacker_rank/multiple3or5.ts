function solution(number: number[]) {
  let sum: number = 0;
  for (let i: number = 0; i < number.length - 1; i++) {
    if (number[i] % 3 === 0 || number[i] % 5 === 0) {
      sum += number[i];
    }
  }

  return sum;
}

const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(solution(numberArray));
