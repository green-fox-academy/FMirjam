
// We are going to represent a shopping list in a list containing strings.

// Create a list with the following items.
// Eggs, milk, fish, apples, bread and chicken
// Create an application which solves the following problems.
// Do we have milk on the list?
// Do we have bananas on the list?

let shoppingList: string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chcicken'];

function checkList (product: any, list: string[]) { 
    return list.indexOf(product) !== -1 ? `${product} is on the list`: `${product} is not on the list` //!== -1 nem nincsen a listán = listán van

}

console.log(checkList('eggs', shoppingList));
console.log(checkList('bananas', shoppingList));