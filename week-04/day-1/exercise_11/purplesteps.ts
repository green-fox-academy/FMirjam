'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]



let size: number = 15;

for (let i: number = 1; i <= 19; i++) {

    ctx.fillStyle = 'purple';
    ctx.fillRect(i * size + 10, i * size + 10, size, size );
    ctx.beginPath();
    ctx.moveTo(i * size + 10, i * size + 10);
}
