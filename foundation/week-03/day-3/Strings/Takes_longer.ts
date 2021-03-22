'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
// let re_1: string = "Hofstadter's Law"; gyakorlás az ' miatt
// let newquote = quote.replace(re_1, 'Hofstadter\'s Law');

console.log(quote);

let missing_1: string = ' always takes longer than';
let position_1 = 20;

let completeQuote: string = [quote.slice(0, position_1), missing_1, quote.slice(position_1)].join('');

console.log(completeQuote);