'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let secondsInADay: number = 24 * 60 * 60;

let convertCurrentHours: number = currentHours * 60 * 60;
let convertCurrentMinutes: number = currentMinutes * 60;

let remainingSeconds: number = secondsInADay - (convertCurrentHours + convertCurrentMinutes + currentSeconds);

console.log(remainingSeconds);