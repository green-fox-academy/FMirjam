function areTheSame(arr1: number[], arr2: number[]) {
  arr1 = arr1.map((k) => k * k);
  const arr1Red: number = arr1.reduce((a, b) => a + b, 0);
  const arr2Red: number = arr2.reduce((a, b) => a + b, 0);

  if (arr1Red === arr2Red) {
    return arr2;
  } else {
    return false;
  }
}

const arr1: number[] = [131, 144, 19, 161, 19, 144, 19, 11];
const arr2: number[] = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(areTheSame(arr1, arr2));
