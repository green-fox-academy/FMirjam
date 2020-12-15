// -  Create a variable named `numbers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `numbers` to the console*
// *hint: use a loop, console.log(numbers) won't cut it
// -  bonus for using the correct built in array method

let numbers_2: number[] = [4, 5, 6, 7];


for (let i: number = 0; i < numbers_2.length; i++) {
    console.log(numbers_2[i]);
};

//Built in array method: 'map' maybe??

numbers_2.map(a => console.log(a)); //WORKS!!!!!

