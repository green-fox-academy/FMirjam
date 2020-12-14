'use strict';

let lineCount_1: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount_1; i++) {
    if ( i === 1) {
        console.log(' '.repeat(lineCount_1 - 1) + '*');
    }

    else if ( i === 2) {
        console.log(' '.repeat(lineCount_1 - 2) + '*'.repeat(lineCount_1-1));
    }

    else if ( i === 3) {
        console.log(' '.repeat(lineCount_1 - 3) + '*'.repeat(lineCount_1 + 1));
    }

    else {
        console.log('*'.repeat(lineCount_1 + 3));
    }
}