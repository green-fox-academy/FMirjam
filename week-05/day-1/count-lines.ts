// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

import { count } from "console";

let fs = require('fs');

function countLines (fileName_1: string) {
    try {

       let lines = fs.readFileSync(fileName_1, 'utf8');
        return console.log(lines.split(`\n`).length);
    }

    catch {
        let error_1 = new Error ('0');
        console.log(error_1.message);
    }
}

console.log(countLines('my-file.txt'));