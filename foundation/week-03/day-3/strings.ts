// //Exercise 1
// let example: string = ('In a diswasher far far away');
// let re: string = ('diswasher');
// let newstr = example.replace(re, 'galaxy');

// console.log(newstr);

// //Exercise 2
// let toBeReversed: string = (`.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`);

// function reverseString(toBeReversed) {
//     let splitString = toBeReversed.split('');
//     let  reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join('');
//     return joinArray;
// }

// console.log(reverseString(toBeReversed));

// Step 1. Use the split() method to return a new array

// Step 2. Use the reverse() method to reverse the new created array

// Step 3. Use the join() method to join all elements of the array into a string

//Step 4. Return the reversed string


//Exercise 3

// let url: string = 'https//www.reddit.com/r/nevertellmethebots';

// let re: string = 'bots';

// let newurl: string = url.replace(re, 'odds');

// console.log(newurl);

// let missing: string = ':';

// let position = 5;

// let completeurl: string = [newurl.slice(0, position), missing, newurl.slice(position)].join('');

// console.log(completeurl);

//Exercise 4

// let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
// let re: string = "Hofstadter's Law";
// let newquote = quote.replace(re, 'Hofstadter\'s Law');

// console.log(newquote);

// let missing: string = ' always takes longer than';
// let position = 20;

// let completeQuote: string = [newquote.slice(0, position), missing, newquote.slice(position)].join('');

// console.log(completeQuote);


//Exercise 5


let toDoList = {
  title: 'My todo:',
    firstask: ' - Buy milk',
    secondtask: ' - Download games',
    game: ' - Diablo',
};
console.log(toDoList.title)
console.log(toDoList.firstask);
console.log(toDoList.secondtask);
console.log('    ' + toDoList.game);


//Exercise 6
