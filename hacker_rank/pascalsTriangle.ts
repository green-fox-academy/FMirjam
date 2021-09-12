function pascalTriangle(n: number) {
  if (n === 0) return [];
  if (n === 1) return [[1]];
  let result: number[][] = [];
  for (let row: number = 1; row <= n; row++) {
    let arr: number[] = [];
    for (let col: number = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        arr.push(1);
      } else {
        arr.push(result[row - 2][col - 1] + result[row - 2][col]);
      }
    }
    result.push(arr);
  }
  return result;
}

const n: number = 4;
console.log(pascalTriangle(n));
