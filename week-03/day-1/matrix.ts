// - Create a two dimensional list dynamically with the following content.
 //   Note that a two dimensional list is often called matrix if every
 //   internal list has the same length.
 //   Use a loop!
 //
 //   1 0 0 0
 //   0 1 0 0
 //   0 0 1 0
 //   0 0 0 1
 //
 //   Its length should depend on a variable
 //  
 // - Print this two dimensional list to the output


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