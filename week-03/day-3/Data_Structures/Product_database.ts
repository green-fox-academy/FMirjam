
// We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

// Create a map with the following key-value pairs.

// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550
// Create an application which solves the following problems.

// How much is the fish?
// What is the most expensive product?
// What is the average price? //Need to ask
// How many products' price is below 300?
// Is there anything we can buy for exactly 125?
// What is the cheapest product?

let foodList = {
    'Eggs' : 200,
    'Milk' : 200,
    'Fish' : 400,
    'Apples' : 150,
    'Bread' : 50,
    'Chicken' : 550,

};

function foodListDescription (objektum) {
    let fishPrice = objektum['Fish'];
    let expensiveProductPrice = Math.max(...Object.keys(objektum).map(x => objektum[x]));
    let expensiveProduct = Object.keys(objektum).filter(x => (objektum[x] === expensiveProductPrice));
    let cheaperThan300 = Object.keys(objektum).filter(x => (objektum[x] < 300));
    let cheaperThan300Number = cheaperThan300.length;
    let exactly125 = Object.keys(objektum).filter(x => (objektum[x] === 125));
    let cheapestProductPrice = Math.min(...Object.keys(objektum).map(x => objektum[x]));
    let cheapestProduct = Object.keys(objektum).filter(x => (objektum[x] === cheapestProductPrice));

    //Average Price calculation
        let sum = 0
             for (let key in objektum) {
            sum = sum + objektum[key];
         }
  
        let lengthOfEntries = Object.entries(objektum).length
        
    let averagePrice = sum / lengthOfEntries;

    return `\n Fish price is ${fishPrice} \n The most expensive product is ${expensiveProduct} \n ${cheaperThan300Number} products have a price of less than 300 \n We can buy ${exactly125.length !== 0? exactly125 : 'nothing'} for 125 \n The chepaest product is ${cheapestProduct} \n The average price is ${averagePrice}`

}

console.log(foodListDescription(foodList));

