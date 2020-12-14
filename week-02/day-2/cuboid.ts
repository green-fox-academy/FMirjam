'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000


let l: number = 10; //length
let w: number = 10; //width
let h: number = 10; //height

//Surface Area = 2 * (length * width + length * height + height * width)
// Volume = length * width * height
//négyzet alapú doboz -> minden oldala egyenlő

console.log('Suface Area: ' + (2 * (l * w + l * h + h * w)));
console.log('Volume: ' + (l * h * w));