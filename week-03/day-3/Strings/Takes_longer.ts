'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let re: string = "Hofstadter's Law";
let newquote = quote.replace(re, 'Hofstadter\'s Law');

console.log(newquote);

let missing: string = ' always takes longer than';
let position = 20;

let completeQuote: string = [newquote.slice(0, position), missing, newquote.slice(position)].join('');

console.log(completeQuote);