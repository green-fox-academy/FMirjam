let matrixLength: number = 4;
let matrix: number [][] = ([]) ;

for (let i: number = 1; i <= matrixLength; i++){
matrix.push([]);
  for (let j: number = 1;j <= matrixLength; j++){
    if (i === j) {
      matrix[ i - 1 ].push(1);
    } 
    else {
      matrix[ i - 1 ].push(0);
    }
  } 
};

console.log(matrix);