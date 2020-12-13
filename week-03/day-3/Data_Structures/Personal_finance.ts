// We are going to represent our expenses in a list containing integers.

// Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120
// Create an application which solves the following problems.
// How much did we spend?
// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings?

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];

// How much did we spend?
let sum: number = 0;

for (let i: number = 0; i < expenses.length; i++) {
    sum += expenses[i];
}

console.log('We have spent' + ' ' + sum);

// Which was our greatest expense?

let maximum: number = Math.max(...expenses) ; //use of spread operator for referring all the elements in the array

console.log('The greatest amoun we have spent' + ' ' + maximum);

// Which was our greatest expense?

let minimum: number = Math.min(...expenses) ;

console.log('The cheapest item that we have bought was' + ' ' + minimum);

// What was the average amount of our spendings?

let average: number = sum/expenses.length;

console.log('The average amount we have spent' + ' ' + average);




