// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams (...a) {
    console.log(...a);
}

printParams(6, 'Christmas', false, 'New Year', 2021, true);

//if I put it like this:

console.log(printParams(6, 'Christmas', false, 'New Year', 2021, true));
//in th second line there will be undefined written