function rotLeft(a: number[], d: number): number[] {
  while (d) {
    a.push(a.shift());
    d--;
  }
  return a;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
console.log(rotLeft([1, 2, 3, 4, 5], 5));
console.log(rotLeft([1, 2, 3, 4, 5], 6));
