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

function shoppingList_1 (prices, ListA_1, ListB_2) {
    let bobKeys: string[] = Object.keys(ListA_1);
    let aliceKeys: string[] = Object.keys(ListB_2);
    let bobPrice = 0;
    let bobItem = 0;
    let alicePrice = 0;
    let aliceItem = 0;

    for (let k : number = 0; k < ListA_1.length; k++) {
        bobPrice += ListA_1[bobKeys[k]] * prices[bobKeys[k]];
        bobItem += ListA_1[bobKeys[k]];
    }

    for (let k : number = 0; k < ListB_2.length; k++) {
        alicePrice = alicePrice + (ListB_2[aliceKeys[k]] * prices[aliceKeys[k]]);
        aliceItem = aliceItem + ListB_2[aliceKeys[k]];

    }

    let buysMoreRice = (ListA_1.Rice > ListB_2.Rice ?  'Bob' : 'Alice');
    let buysMorePotato = (ListA_1.Potato > ListB_2.Potato ? 'Bob' : 'Alice');
    let buysMoreDiffProduct = (bobKeys.length > aliceKeys.length ? 'Bob' : 'Alice');
    let buysMoreProducts = (bobItem > aliceItem ? 'Bob' : 'Alice');


    return `How much does Bob pay?: ${bobPrice} \n How much does Alice pay?: ${alicePrice} \n Who buys more Rice?: ${buysMoreRice} \n Who buys more Potato?: ${buysMorePotato} \n Who buys more different products?: ${buysMoreDiffProduct} \n Who buys more products?: ${buysMoreProducts} .`

}

console.log(shoppingList_1(priceList, bobList, aliceList));



