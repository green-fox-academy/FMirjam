// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

let numbers_6: number[] = [3, 4, 5, 6, 7];

// do it with the built in method

// numbers_6 = numbers_6.reverse();

// console.log(numbers_6);

// do it with creating a new temp array and a loop

let newArray: number[] = [];

for (let i: number = 0; i < numbers_6.length; i++) {
    newArray.unshift(numbers_6[i]); // newArray-be beleteszem a régi array elemeit az indexük alapján
}

console.log(newArray);