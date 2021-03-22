'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]


ctx.fillStyle = 'purple';

ctx.strokeStyle = 'black';

let size: number = 10;

for (let i = 1; i < 20; i++) {
    ctx.fillRect(i * size + 10, i * size + 10, size, size);
    ctx.beginPath();
    ctx.moveTo((i * size) + 10, (i * size) + 10);
    ctx.lineTo((i * size) + 10 + size, (i * size) + 10);
    ctx.lineTo((i * size) + 10 + size, (i * size) + 10 + size);
    ctx.lineTo((i * size) + 10 + size, (i * size) + 10 + size);
    ctx.lineTo((i * size) + 10, (i * size) + 10 + size);
    ctx.closePath();
    ctx.stroke();
}