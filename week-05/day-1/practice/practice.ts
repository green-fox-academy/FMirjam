// let fs = require('fs');


//Read a file

// let readMe = fs.readFileSync('readme.txt', 'utf8');
// console.log(readMe);




//Write a file

// fs.writeFileSync('writeme.txt', readMe); //where we want to write, data we want to write)



// //Asyncronous code

// fs.readFile('readme.txt', 'utf8', function(err, data) {
//     // console.log(data); //first read the file, then filing the function once the file is read
//     // and then passing the data and console it

//     fs.writeFile('writemee.txt', data); //write a file
  
// });

// console.log('test'); //this will be printed first even it is after the readFile
