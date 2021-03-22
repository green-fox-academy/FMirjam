'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

function horizontalLine (x1: number, y1: number) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + 50, y1);
    ctx.strokeStyle = 'blue';
    ctx.stroke();

}

for (let i: number = 0; i <= 4; i++) {
    horizontalLine (i * 100, i * 50);
}