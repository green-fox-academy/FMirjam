'use strict';

// Swap the values of these variables
let numberToSwap_1: number = 123;
let numberToSwap_2: number = 526;
let swap: number;


// Mindig azt a változót adom meg elsőnek, amihez hozzá akarom rendelni egy másik változó értékét
swap = numberToSwap_1;
numberToSwap_1 = numberToSwap_2;
numberToSwap_2 = swap;

console.log(numberToSwap_1);
console.log(numberToSwap_2);