'use strict';

const mapWith = (array, callback) => {
  let output = [];

    // The mapWith() function should iterate over the given array and call the callback function on every element.
    // It stores the callback return values in the output.
    // The mapWith() should return with the output array.

  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
};

const addOne = (number) => {
  return number + 1;
};

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (string) => {
    let splittedString = string.split('');
    for (let i = 1; i < splittedString.length; i+=2){
        splittedString[i] = '';
    }
    return splittedString.join('');
}

console.log(mapWith(words, removeSecondLetter));

