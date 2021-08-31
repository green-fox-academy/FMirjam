let A: number[] = [5, 6, 7];
let B: number[] = [3, 6, 10];

function compareTriplets(a: number[], b: number[]): number[] {
  let aWinner: number = 0;
  let bWinner: number = 0;
  for (let i: number = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
      bWinner++;
    } else if (a[i] > b[i]) {
      aWinner++;
    }
  }

  return [aWinner, bWinner];
}
console.log(compareTriplets(A, B));
