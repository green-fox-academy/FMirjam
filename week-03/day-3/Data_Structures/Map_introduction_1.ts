
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


let tárgy = {};

if (Object.keys(tárgy).length !== 0) {
    console.log('The map is not empty');
}

else {
    console.log('It is empty');
}

tárgy [97] = 'a';
tárgy [98] = 'b';
tárgy [99] = 'c';
tárgy [65] = 'A';
tárgy [66] = 'B';
tárgy [67] = 'C';


console.log(Object.keys(tárgy));
console.log(Object.values(tárgy)); 

console.log(Object.entries(tárgy).length); // meglévő párok száma
console.log(tárgy[99]);

delete tárgy[97];
console.log(tárgy);

tárgy[98] = null; //értéket törlünk

console.log(tárgy);

console.log(tárgy.hasOwnProperty(100)); // van e értéke a 100 key-nek? Válasz: false

for(let i in tárgy) {  //Összes key-pair törlése az object-ből
    delete tárgy[i];
};

console.log(tárgy); //vagy tárgy = {} -> felülírjuk


