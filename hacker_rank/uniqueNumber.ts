function findUnique(array: number[]) {
  let object: { [key: number]: number } = {};
  for (let number of array) {
    if (object[number]) {
      object[number]++;
    } else {
      object[number] = 1;
    }
  }

  return Object.keys(object).find((k) => object[k] === 1);
}

const numbers: number[] = [1, 8, 4, 6, 1, 8, 6];
console.log(findUnique(numbers));
