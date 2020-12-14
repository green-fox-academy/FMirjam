'use strict';

let lineCount_3: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount_3; i++) {
    if (i === 1 || i === lineCount_3) { //ha az első indexnél áll vagy ha az utolsónál akkor ezt consolozza ki
        console.log('%'.repeat(lineCount_3)); //annyiszor amennyi a lineCount szám
    }

    else { //minden más esetben 
        console.log('%' + ' '.repeat(lineCount_3 - 2) + '%');
    }                       // ismételje a szóközt annyiszor ahány helyen azt akarjuk látni
}