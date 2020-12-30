// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'Cannot divide by zero!' if the parameter is 0

function dividebyTen (number: number)  {

    if (number === 0) {

        throw new Error ('Cannot divide by zero'); //thoriw allows you to create custom error

    }

    return 10 / number

}


//try and catch an error
try {
    console.log(dividebyTen(0));
} 

catch (e) {
    console.log(e.message);
}