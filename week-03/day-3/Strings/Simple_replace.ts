'use strict';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away


export = example;

let example: string = ('In a diswasher far far away');
let re: string = ('diswasher');
let newstr = example.replace(re, 'galaxy');

console.log(newstr);