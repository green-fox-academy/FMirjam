'use strict';

// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

let givenNumber: number = 5;
let sum_1: number = 0;

for (let i: number = 1; i <= 5; i++) {
    
    sum_1 = sum_1 + i;
    
}

console.log(sum_1); 

console.log(sum_1 / givenNumber);


