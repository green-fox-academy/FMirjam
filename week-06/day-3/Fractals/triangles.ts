const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


const sizeCanvasX: number = 600;
const sizeCanvasY: number = calculateHeight(sizeCanvasX);

function calculateHeight(a: number): number {
  return Math.sqrt(3) * a / 2;
}

function drawTriangle(startX: number, startY: number, a: number): void {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + a, startY);
  ctx.lineTo(startX + a/2, startY + calculateHeight(a));
  ctx.lineTo(startX, startY);
  ctx.stroke();
}

function fractalTriangles(x: number, y: number, a: number): void {
  drawTriangle(x, y, a);
  if (a > minSize) {
  const m: number = calculateHeight(a);
  fractalTriangles(x, y, a / 2);
  fractalTriangles(x + a / 2, y, a / 2);
  fractalTriangles(x + a / 4, y + m / 2, a / 2);
  }
}

let minSize: number = 18;
fractalTriangles(0, 0, 600)

