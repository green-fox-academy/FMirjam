// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let names_1: string[] = ['Arthur', 'Boe', 'Chloe'];

let swap: string;

swap = names_1[0];
names_1[0] = names_1[2];
names_1[2] = swap;

console.log(names_1);
