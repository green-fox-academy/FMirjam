'use strict';

let A_1: number = 24;
let output1: number = 0;

// if a is even increment output1 by one

if (A_1 % 2 === 0) {
    output1++;
}

console.log(output1);




let B_1: number = 13;
let output2: string = '';

// if b is between 10 and 20 set output2 to "Sweet!"
// if less than 10 set output2 to "Less!",
// if more than 20 set output2 to "More!"

if (10 < B_1 && B_1 < 20) {
    output2 = 'Sweet';
}

else if ( 10 > B_1) {
    output2 = 'Less';
}

else if (20 < B_1) {
    output2 = 'More';
}

console.log(output2);




let C_1: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

if (credits >= 50 && !isBonus) {
    C_1 -= 2;
}

else if ( credits < 50 && !isBonus) {
    C_1 -= 1;
}

else {
    C_1;
}

console.log(C_1);



let D_1: number =  8;
let time: number = 120;
let output3: string = '';

// if d is dividable by 4
// and time is not more than 200
// set output3 to "check"
// if time is more than 200
// set output3 to "Time out"
// otherwise set output3 to "Run Forest Run!"

if (D_1 % 4 === 0 && time <= 200) {
    output3 = 'Check';
}

else if (time > 200) {
    output3 = 'Time out';
}

else {
    output3 = 'Run Forest Run!';
}

console.log(output3);