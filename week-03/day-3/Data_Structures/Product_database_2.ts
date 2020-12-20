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

// Which products cost less than 201? (just the name)
// Which products cost more than 150? (name + price)

let foodList_2 = {
    'Eggs' : 200,
    'Milk' : 200,
    'Fish' : 400,
    'Apples' : 150,
    'Bread' : 50,
    'Chicken' : 550,
}

function calculationFoodList (objektum_1) {
    let lessThan201Name = Object.keys(objektum_1).filter(x => (objektum_1[x] < 201));
    let moreThan150Name = Object.keys(objektum_1).filter(x => (objektum_1[x] > 150));
    let answer = ``;
        for (let j: number = 0; j < moreThan150Name.length; j++) {
                answer += `The price of ${moreThan150Name[j]} is ${objektum_1[moreThan150Name[j]]}. `
            }

    return `${lessThan201Name} products are less than 201 and ${answer}`

}

console.log(calculationFoodList(foodList_2));