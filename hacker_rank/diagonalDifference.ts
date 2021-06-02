let arr: number[][] = [
  [-1, 1, -7, -8],
  [-10, -8, -5, -2],
  [0, 9, 7, -1],
  [4, 4, -2, 1],
];

function diagonalDifference(): number {
  let sum: number = 0;
  let sum2: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    sum += arr[i][i];
    console.log(`sum: ${arr[i][i]}`)
    sum2 += arr[arr.length - 1 - i][i];
    console.log(`sum2: ${arr[arr.length - 1 - i][i]}`)
  }
  return Math.abs(sum - sum2);
}

// function diagonalDifference(): number {
//   let sum: number = 0;
//   let sum2: number = 0;
//   for (let i: number = 0; i < arr.length; i++) {
//     for (let j: number = arr.length - 1; j >= 0; j--) {
//       if (i === j) {
//         sum += arr[i][i];
//         console.log(`sum: ${arr[i][i]}`);
//         if (i === Math.floor(arr.length / 2)) {
//           sum2 += arr[i][i];
//           console.log(`sum2*: ${arr[i][i]}`);
//         }
//       } else {
//         if (j === arr.length - 1 - i) {
//           sum2 += arr[i][j];
//           console.log(`sum2: ${arr[i][j]}`);
//         }
//       }
//     }
//   }
//   return Math.abs(sum - sum2);
// }

console.log(diagonalDifference());
