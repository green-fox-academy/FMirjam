'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let space: string = '';
let star: string = '*';

for (let i: number = 1; i <= lineCount; i++) {
    space = space + star;
    console.log(space);
}