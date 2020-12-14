'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare (x2: number, y2: number) {
    ctx.fillRect(x2, y2, 50, 50);
}

for (let i: number = 1; i <= 3; i++) {
    drawSquare(i * 60, i * 70);
}