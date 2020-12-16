// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter


function Sum (numbers: number) {
    
    let sum_1: number = 0;

    for (let i: number = 0; i <= numbers; i++) {
        sum_1 += i;
    }

    return sum_1;
}

console.log(Sum(6));