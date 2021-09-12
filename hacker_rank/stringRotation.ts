function rotate(first: string, second: string) {
  for (let i: number = 0; i < first.length; i++) {
    if (first === second) {
      return i; // ha megegyezik a két szó akkor 0-at ad vissza mert nem kell rotálni
    }
    first = rotateLeft(first, first.length - 1); 
  }
  return -1; //Ha szintaktikailag nem egyezik meg akkor -1
}

function rotateLeft(arr: string, n: number) {
  let arrSplit: string[] = arr.split('');
  for (let i: number = 0; i < n; i++) {
    let arrShift: string = arrSplit.shift(); //kiszedi az első elemet az array-ből offee
    arrSplit.push(arrShift); //visszapusholja a tömbbe, és ilyenkor a tömb végére kerül offeec
  }

  return arrSplit.join('');
}

const first: string = 'coffee';
const second: string = 'eecoff';
console.log(rotate(first, second));
