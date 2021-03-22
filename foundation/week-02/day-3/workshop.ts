//Exercise
//Conditional variable mutation
// Exercise 1

let a: number = 24;
let output1: number = 0;

if (a % 2 === 0) {
    console.log(output1);
}
else { 
    console.log('it is odd');
}

//Exercise 2

let b: number = 21;
let output2: string = '';

if (10 < b && b < 20) {
    console.log('Sweet!');
}
else if ( b < 10) {
    console.log('Less!');
}
else if (b > 20) { 
    console.log('More!');
}

//Exercise 3

let c: number = 123;
let credits: number = 49;
let isBonus: boolean = true;

if (credits >= 50 && !isBonus) {
    c -= 2;
    console.log(c);
}
else if (credits < 50 && !isBonus) {
    c --;
    console.log(c);
}
else if (isBonus) {
    console.log(c);
}

//Exercise 4

let d: number =  8;
let time: number = 120;
let output3: string = '';

if (d % 4 ===0 && time <=200) {
    output3 = 'Check';
}
else if (time > 200) {
   output3 = 'Time out';
}

else {
    output3 = 'Run Forest Run';
}
console.log(output3)
    

//Exercise 5

let repeat: string = 'I won\'t cheat on the exam!'
for (let i: number = 0; i < 7; i++) {
    console.log(repeat);
}

//Exercise 6

for (let i: number = 0; i < 10; i++) {
    if (i % 2 === 0) {
      console.log(i)  
    }
}

//Exercise 7

let number: number = 15;

for (let i: number = 0; i <= 10; i++) {
    console.log(i + " * 15 = " + i * number);
}

//Exercise 8

let sum = 0;
let lengthofNumber: number = 6;
for (let i: number = 1; i <= lengthofNumber; i++) {
    sum = sum + i;
}
console.log(sum);
console.log(sum/lengthofNumber);

//Exercise 9


for (let i: number = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0 ) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }

}

//Exercise 10

//let lineCount: number = 4;

//for (let star: string = '*'; star.length <= lineCount; star += '*') { 
    //console.log(star);
//}

// Exercise 11

let lineCount: number = 30;
let freespace: number = lineCount - 2;
for (let i: number = 1; i <= lineCount; i++) {
    if (i === 1 || i === lineCount) {
        for (let percentage: string = '%'; percentage.length <= lineCount; percentage += '%' ) {
            if (lineCount === percentage.length) {
                console.log(percentage);
            }  
        }  
    }
    else {
        let row: string = '%'; 
        for (let space: string = ' '; space.length <= i - 2; space += ' ') {
            if (i - 2 === space.length) {
                row += space;
            }
        }
        row += '%';

        for (let space: string = ' '; space.length <= freespace - (i - 1); space += ' ') {
            if (freespace - (i - 1) === space.length) {
                row += space;
            }
        }
        row += '%';

        console.log(row);

    }
          
}
    
