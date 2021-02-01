// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method
// -  Print the fourth element as a test

let numbers_3: number[] = [1, 2, 3, 8, 5, 6];

// numbers_3 = numbers_3.map(function replace (b: number) {
//         if (b === 8) {
//             b = 4;
//         } return b;
//     }
// )

// console.log(numbers_3);

for (let i: number = 0; i < numbers_3.length; i++) {
  if (numbers_3[i] === 8) {
    numbers_3[i] = 4;
  }
}

console.log(numbers_3);
