'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let colours: string[] = ['purple', 'red', 'green', 'black' ];

for (let i: number = 0; i <= colours.length; i++) {
    ctx.fillStyle = colours[i];
    ctx.fillRect(i * 100 + 20, i * 100 + 20, i * 10 + 10, i * 10 + 10);
}