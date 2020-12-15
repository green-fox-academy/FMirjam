// -  Create a variable named `numbers` with the following content:
//   `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements of `numbers` to the console

let numbers_5: number[] = [3, 4, 5, 6, 7];
let sum: number = 0;

for (let i: number = 0; i < numbers_5.length; i++) {
    sum = sum + numbers_5[i];
}

console.log(sum);