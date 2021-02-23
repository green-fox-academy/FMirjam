// Write a method which can read and parse a file containing information
//about the average temperature of three European countries to raise awareness of climate change.
//Each line represents the average temperature of each country in the given year.
// The actual year can be found at the end of each line.
// The method should return the first coldest and hottest year in each country.
// The application should write the data to the console as key => value pairs.

const fs = require('fs');

// function AverageTempreature()  {
let input: string;
try {
  input = fs.readFileSync('input.txt', 'utf-8');
} catch (err) {
  console.error(err.message);
}

console.log(input.split('\n').join(' ').split(' '));

// let franceArray: string[] = [];

// for (let i: number = 0; i < input.length; i + 4)  {
//   franceArray.push(input);
//   console.log(franceArray);
//   break
// }

// }
