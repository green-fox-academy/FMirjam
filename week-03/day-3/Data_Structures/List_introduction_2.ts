// Create a list ('List A') which contains the following values
// Apple, Avocado, Blueberries, Durian, Lychee
// Create a new list ('List B') with the values of List A
// Print out whether List A contains Durian or not
// Remove Durian from List B
// Add Kiwifruit to List A after the 4th element
// Compare the size of List A and List B
// Get the index of Avocado from List A
// Get the index of Durian from List B
// Add Passion Fruit and Pomelo to List B in a single statement
// Print out the 3rd element from List A

let ListA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee' ];
let ListB = ListA;

console.log(ListA.indexOf('Durian')); //tartalmazza e a ListA?

if (ListA.indexOf('Durian') >= 0) {

    console.log('The list contains')

}
else {

    console.log('The list does not contain it')

}

//Remove Durian  from ListB
ListB.splice(3,1);

console.log(ListB);

//Add element

ListA.splice(5,0, 'Kiwifruit');

console.log(ListA);

//Compare the size of the lists

if (ListA.length === ListB.length) {

    console.log('They are equal')

}

else {

    console.log('They are not equal')

};

// Get the index of Avocado from List A

console.log(ListA.indexOf('Avocado'));

// Get the index of Durian from List B

console.log(ListB.indexOf('Durian'));

// Add Passion Fruit and Pomelo to List B in a single statement

console.log(ListB.length);
ListB.splice(ListB.length,0, 'Passion fruit');
ListB.splice(ListB.length,0, 'Pomelo');

console.log(ListB);

// Print out the 3rd element from List A

console.log(ListA[2]);





