function findOdd(numberArray: number[]) {
  let object: { [key: number]: number } = {};

  for (let num of numberArray) {
    if (object[num]) {
      object[num]++;
    } else {
      object[num] = 1;
    }
  }

  const oddValue: number[] = Object.values(object).filter((k) => k % 2 !== 0);
  return Object.keys(object).find((z) => object[z] === oddValue[0]);
}

const numberA: number[] = [1, 1, 2, 3];
console.log(findOdd(numberA));
