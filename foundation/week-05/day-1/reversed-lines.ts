
// Create a method that decrypts reversed-lines.txt

// export {};

// let fs = require('fs');

// let readReversedLines = fs.readFileSync('reversed-lines.txt', 'utf8');

// function reverseRead (text: string) {

//     let split = text.split(`\n`);
//     let output = '';

//     for (let i: number = 0; i < split.length; i++ ) {
//         for (let j: number = split[i].length; j > 0; j--) {
//             output += split[i].slice(j-1,j);
//         }
//         output += `\n`;
//     }

//     return output
// }

// console.log(reverseRead(readReversedLines));