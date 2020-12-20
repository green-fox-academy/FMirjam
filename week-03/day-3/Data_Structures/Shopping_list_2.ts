// Represent the following products with their prices

// Product	Amount
// Milk	1.07
// Rice	1.59
// Eggs	3.14
// Cheese	12.60
// Chicken Breasts	9.40
// Apples	2.31
// Tomato	2.58
// Potato	1.75
// Onion	1.10
// Represent Bob's shopping list

// Product	Amount
// Milk	3
// Rice	2
// Eggs	2
// Cheese	1
// Chicken Breasts	4
// Apples	1
// Tomato	2
// Potato	1
// Represent Alice's shopping list

// Product	Amount
// Rice	1
// Eggs	5
// Chicken Breasts	2
// Apples	1
// Tomato	10
// Create an application which solves the following problems.

// How much does Bob pay?
// How much does Alice pay?
// Who buys more Rice?
// Who buys more Potato?
// Who buys more different products?
// Who buys more products? (piece)

let priceList = {
    'Milk' : 1.07,
    'Rice' : 1.59,
    'Eggs' : 3.14,
    'Cheese' : 12.60,
    'Chicken breats' : 9.40,
    'Apples' : 2.31,
    'Tomato' : 2.58,
    'Potato' : 1.75,
    'Onion' : 1.10,
}

let bobList = {
    'Milk' : 3,
    'Rice' : 2,
    'Eggs' : 2,
    'Cheese' : 1,
    'Chicken breasts' : 4,
    'Apples' : 1,
    'Tomato' : 2,
    'Potato' : 1,
}

let aliceList = {
    'Rice' : 1,
    'Eggs' : 5,
    'Chicken breasts' : 2,
    'Apples' : 1,
    'Tomato' : 10,
}

function shop (price, objektumA, objektumB) {
    let bob_price = 0;
    let alice_price = 0;
    let bob_item = 0;
    let alice_item = 0;

        for (let i: number = 0; i < Object.keys(objektumA).length; i++) {
            bob_price += objektumA(Object.keys(objektumA[i])) * price(Object.keys(objektumA[i]));
            
        }
}