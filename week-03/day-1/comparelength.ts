// - Create a variable named `firstList`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `secondList`
//   with the following content: `[4, 5]`
// - Log "secondList is longer" to the console if `secondList` has more elements than
//   `firstList`
// - Otherwise log: "firstList is the longer one"

let firstList_1: number[] = [1, 2, 3];
let secondList_2: number[] = [4, 5];

if (secondList_2.length > firstList_1.length) {
    console.log('SecondList_2 is longer.');
}

else {
    console.log('FirsList_1 is the longer one.');
}