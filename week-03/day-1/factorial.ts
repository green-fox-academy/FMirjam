// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input




function calculateFactorial (factorialANumber: number) {

    if (factorialANumber === 0 || factorialANumber === 1) {
            return 1;
    }

    return factorialANumber * calculateFactorial(factorialANumber -1);


}

console.log(calculateFactorial(5));