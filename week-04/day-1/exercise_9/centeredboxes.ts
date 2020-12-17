'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let colors = ['red', 'purple', 'pink'];

function centeredBox (a: number) {
    for (let i: number = 0; i < colors.length; i++) {
        ctx.fillStyle = colors[i];
        ctx.fillRect(canvas.width/2 + (i * a), canvas.height/2 + (i * a), a, a);
        
    }

}

//záró pontból akarom indítani a követkexő négyzetet

centeredBox(30);

