'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverseString(toBeReversed) {
    let splitString = toBeReversed.split('');
    let  reverseArray = splitString.reverse();
    let joinArray = reverseArray.join('');
    return joinArray;
}

console.log(reverseString(toBeReversed));

// Step 1. Use the split() method to return a new array

// Step 2. Use the reverse() method to reverse the new created array

// Step 3. Use the join() method to join all elements of the array into a string

//Step 4. Return the reversed string