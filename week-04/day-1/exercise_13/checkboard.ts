'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let size = 25;
let numberColumns = canvas.width/size;
let numberRows = canvas.height/size;

for (let i: number = 0; i < numberColumns; i++) {
    for (let j: number = 0; j < numberRows/2; j++) {
        ctx.fillRect(i * size * 2, j * size * 2, size, size);
        ctx.fillRect(i * size * 2 + size, j * size * 2 + size, size, size);
    }
}