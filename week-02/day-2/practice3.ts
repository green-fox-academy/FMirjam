//Variables

//String

let welcome: string = "Hello world";

console.log(welcome);

//Boolean
let isAwesome: boolean = true;
console.log(isAwesome);

//Integer
let theMeaningOfLifeAndTheUniverseAndEverything: number = 42;
console.log(theMeaningOfLifeAndTheUniverseAndEverything);

//Floating point number
let pi: number = 3.141592;
console.log(pi);

//Assigning and creating a variable
let number: number = 12;


//Mutate a variable, (redefine its value)
number = 23;

//Any
let dynamic: any = 5;
dynamic = "true";
dynamic = "strange";
console.log(dynamic);

//Arithmetic Assignment Operators

let a: number = 12;
a = a + 4;
console.log(a);

let b: number = 12;
b = b -4;
console.log(b);

let c: number = 12;
c *= 3;
console.log(c);

let d: number = 12;
d /= 3;
console.log(d);

let e: number = 12;
e %= 7;
console.log(e);

let f: number = 12;
f++;
console.log(f);

let g: number = 12;
g--;
console.log(g);

let h: number = 10;
console.log(h);
console.log(h++);   //Ha a ++ a változó után írom, a változó csak a következő sorban változik
console.log(h);

let i: number = 10;
console.log(i);
console.log(++i);
console.log(i);

//Exercies
//Exercise 1
let favouriteNumber: number = 8;
let feeling: string = "My favourite number is: ";

console.log(feeling + 8 );

//Exercise 2 - Ideiglenes változó bevezetése

let numberToSwap1: number = 123;
let numberToSwap2: number = 526;
let temporaryToSwap;

temporaryToSwap = numberToSwap1;
numberToSwap1 = numberToSwap2;
numberToSwap2 = temporaryToSwap;

console.log(numberToSwap1);
console.log(numberToSwap2);

//Exercie 3
let myName: string = "Mirjam";
let myAge: number = 25;
let myHeight: number = 175;
let myMarriageStatus: boolean = false;

console.log(myName);
console.log(myAge);
console.log(myHeight);
console.log(myMarriageStatus);

//Exercise 4
let a1 : number = 3;
a1 = a1 + 10;
console.log(a1);

let b1: number = 100;
b1 = b1 -7;
console.log(b1);

let c1: number = 44;
c1 *= 2;
console.log(c1);

let d1: number = 125;
d1 /= 5;
console.log(d1);

let e1: number = 8;
e1 *= 8;
e1 *= 8;
console.log(e1);

let f2: number = 123;
let f3: number = 345;
if (f2 < f3) {
    console.log("true");
}

let g1: number = 350;
let g2: number = 200;
let check: boolean = true;

if (g2 < g1) {
    console.log(check);
}

//Divisor to check
let h1: number = 1357988018575474;
h1


let i1: number = 10;
let i2: number = 3;
let i2a: number = i2 * 3;
let i2b: number = i2a * 3;

if (i1 > i2a && i1 < i2b) {
    console.log(true);
}

//Divisibility to check
let j1: number = 1521;
let sumOfTheNumbers: number = 1 + 5 + 2 +1;
let endingNumber: number = 1;
let divisible: boolean = true;

if (sumOfTheNumbers == 9 || endingNumber == 0){
    console.log(divisible)
}








