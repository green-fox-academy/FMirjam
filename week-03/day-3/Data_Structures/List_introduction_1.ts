`use strict`;
// We are going to play with lists. Feel free to use the built-in methods where possible.

// Create an empty list which will contain names (strings)
// Print out the number of elements in the list
// Add William to the list
// Print out whether the list is empty or not
// Add John to the list
// Add Amanda to the list
// Print out the number of elements in the list
// Print out the 3rd element
// Iterate through the list and print out each name
    // William
    // John
    // Amanda
// Iterate through the list and print
    // 1. William
    // 2. John
    // 3. Amanda
// Remove the 2nd element
// Iterate through the list in a reversed order and print out each name
    // Amanda
    // William
// Remove all elements

let names: string[] = [];
console.log('Number of the elements in the list:' + ' ' + names.length);

names.push('William');
console.log(names);

if (names.length !== 0) {
    console.log('The list is not empty');
}
else {console.log('The list is empty');
}

names.push('John');
names.push('Amanda');
console.log(names);
console.log(names.length);
console.log(names[2]);

names.map(a => console.log(a)); //Iterate through the list and print out the elements
names.map(a => console.log (names.indexOf(a)+ 1)); //How to insert the names as well?

names.splice(1, 1); // remove one element - index of where we want to start the removing and how many elements do we want to remove
console.log(names);
names.reverse().map(a => console.log(a));
names.splice(0, names.length);
console.log(names);


