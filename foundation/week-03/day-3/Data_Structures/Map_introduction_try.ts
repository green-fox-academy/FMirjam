
// We are going to play with maps. Feel free to use the built-in methods where possible.

// Create an empty map where the keys are integers and the values are characters

// Print out whether the map is empty or not

// Add the following key-value pairs to the map

// Key	Value
// 97	a
// 98	b
// 99	c
// 65	A
// 66	B
// 67	C
// Print all the keys

// Print all the values

// Add value D with the key 68

// Print how many key-value pairs are in the map

// Print the value that is associated with key 99

// Remove the key-value pair where with key 97

// Print whether there is an associated value with key 100 or not

// Remove all the key-value pairs


// console.log(Object.keys(objektum));

// if (objektum !== 0) {
//     console.log('The map is not empty');
// }

// else {
//     console.log('It is empty');
// }
let objektum = {};
objektum [97] = 'a';
objektum [98] = 'b';
objektum [99] = 'c';
objektum [65] = 'A';
objektum [66] = 'B';
objektum [67] = 'C';


console.log(Object.keys(objektum));
console.log(Object.values(objektum)); //Miért húzza alá?

console.log(Object.entries(objektum).length);



