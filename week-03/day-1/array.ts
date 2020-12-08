//Array methods


console.log(['apple', 'pear', 'melon'].indexOf('pear')); // 1

['apple', 'pear', 'melon'].forEach(function(e, i) {
  console.log(e, i);
});

let triples = [1, 2, 3, 4, 5].map(function(e) {
  return e * 3;
});
console.log(triples); /** [3, 6, 9, 12, 15] */

let evens = [1, 2, 3, 4, 5].filter(function(e) {
  return e % 2 == 0;
});
console.log(evens); /** [2, 4] */

let isAllEven = [2, 6, 14, 5, 4].every(function(e) {
  return e % 2 == 0;
});
console.log(isAllEven); /** false */

let isAnyEven = [2, 6, 14, 5, 4].some(function(e) {
  return e % 2 == 0;
});
console.log(isAnyEven); /** true */

let letters = 'apple'.split('');
console.log(letters); /** ['a', 'p', 'p', 'l', 'e'] */
console.log(letters.join('@')); /** Worms in the apple! */

//Exercise 1

let numbers = [1, 3, 5, 7]

console.log(numbers[3]);


//Exercise 2

let firstList = [1, 2, 3]
let secondList = [4, 5]

if (secondList.length > firstList.length) {
    console.log(secondList + ' is longer');
}
else {
    console.log(firstList + ' is the longer one');
}

//Exercise 3

let numbers = [54, 23, 66, 12]

console.log(numbers [2] + numbers[3]);


//Exercise 4

let numbers = ['Arthur', 'Boe', 'Chloe']

let temporary = numbers[2]

numbers[2] = numbers[0]
numbers[0] = temporary

console.log(numbers);


//Exercise 5

let numbers = [4, 5, 6, 7]

numbers.forEach(function (number) {
    console.log(number);
});

//Exercise 6

let numbers = [1, 2, 3, 8, 5, 6]

numbers.splice(3, 1, 4);

console.log(numbers);

//Exercise 7

let numbers = [1, 2, 3, 4, 5]
numbers[3] += 1

console.log(numbers);

//Exercise 8
let animals = ['koal', 'pand', 'zebr']

animals.forEach(function (string) {
    console.log(string + 'a')
});

//Exercise 9

let drinks = ['Gin', 'Whiskey', 'Wine'];

let drinks2 = ['Gin', 'Whiskey', 'Wine'];


//Exercise 10

colors[0] = []

//Exercise 11

let numbers = [1, 2, 3, 4, 5].reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(numbers);

//Exercise 12
let colors = [['lime', 'forest green', 'olive', 'pale greem'], ['orange red', 'red', 'tomato'], ['orchid', 'violet', 'pink', 'hot pink']];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

//Exercise 13

let numbers = [3, 4, 5, 6, 7].reverse();
console.log(numbers);

//Exercise 14

let numbers = [3, 4, 5, 6, 7];
let temp = numbers [3];
let temp2 = numbers [4];

numbers [3] = numbers [1];
numbers [1] = temp;
numbers [4] = numbers [0];
numbers [0] = temp2;

console.log(numbers);



    


