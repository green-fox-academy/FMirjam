
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let colours: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function drawRainbowSquare (size: number, colour: string) {
    ctx.fillStyle = colour;
    ctx.fillRect(canvas.width/2-size/2, canvas.height/2-size/2, size, size);

}



// for (let i: number = 6; i >= 0; i--) {
//     drawRainbowSquare((((i + 1) * 40)), colours[i]);
// }




// drawRainbowSquare(100, 'purple')


for (let i: number = 0; i < colours.length; i++) {
    drawRainbowSquare(300 - (i * 20), colours[i]);
}