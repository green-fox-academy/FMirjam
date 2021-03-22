'use strict';

let a_1: number = 3;
// make it bigger by 10

a_1 = a_1 + 10;

console.log(a_1);

let b_1: number = 100;
// make it smaller by 7

b_1 = b_1 - 7;

console.log(b_1);

let c_1: number = 44;
// double c's value

c_1 = c_1 * 2;

console.log(c_1);

let d_1: number = 125;
// divide d's value by 5

d_1 = d_1 / 5;

console.log(d_1);

let e_1: number = 8;
// what's the cube of e's value?

e_1 *= e_1;

console.log(e_1);

let f1_1: number = 123;
let f2_2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)

console.log(f1_1 > f2_2);

let g1_1: number = 350;
let g2_2: number = 200;
// tell if the double of g2 is bigger than g1 (as a boolean)

console.log((g2_2 * 2) > g1_1);

let h_1: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)

console.log((h_1 % 11) === 0);

let i1_1: number = 10;
let i2_2: number = 3;

// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)- egybe vizsgáljuk (és &&)
console.log((i1_1 > i2_2 **2) && (i1_1 < i2_2 **3)); //önmagával való szorzásnál ** és a szám amennyivel önmagával szeretném megszorozni (négyzetre emelés: **2; köbre emelés **3)


let j_1: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)

console.log((j_1 % 3 === 0) || (j_1 % 5 === 0));

