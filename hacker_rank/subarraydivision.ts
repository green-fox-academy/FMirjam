function birthday(s: number[], d: number, m: number): number {
  let count: number = 0;
  let sum: number;

  for (let i: number = 0; i < s.length; i++) {
    sum = s.slice(i, m + i).reduce((prev, curr) => prev + curr);
    if (sum === d) {
      count++;
    }
  }

  return count;
}

console.log(birthday([1,2,1,3,2], 3, 2))
