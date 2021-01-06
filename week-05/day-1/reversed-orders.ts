// Create a method that decrypts reversed-order.txt

export {};

let fs = require('fs');

let readFile = fs.readFileSync('reversed-order.txt', 'utf8');

function reversedOrderRead (file: string) {

    let split = file.split(`\n`);
    let outcome = '';

    for (let i: number = split.length - 1; i > 0; i--) {
        outcome += split[i];
        outcome += `\n`;
    }
    return outcome
}

console.log(reversedOrderRead(readFile))

