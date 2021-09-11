function bonAppetit(bill: number[], k: number, b: number): void {
  const annaNeedToPay: number = sumOfTheBill(bill) / 2;
 
  if (b > annaNeedToPay) {
    console.log(b - annaNeedToPay);
  } else {
    console.log('Bon appetit');
  }
}

function sumOfTheBill(array: number[]) {
  let sum: number = 0;
  for (let i: number = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(bonAppetit([3, 10, 2, 9], 4, 1));
