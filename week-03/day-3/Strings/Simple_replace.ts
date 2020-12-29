'use strict';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away


export = example;

let example: string = ('In a dishwasher, far far away');
let re: string = ('dishwasher');
let newstr = example.replace(re, 'galaxy'); //With replace method only the first occurance will be replaced
                                            //változó meghatározása nélkül is kicseréli a 'dishwasher-t'
                                            // let newstr = example.replace('dishwasher', 'galaxy')

console.log(newstr);

