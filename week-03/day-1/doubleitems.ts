// - Create an array variable named `drinks` with the following content:
//   `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of
//   a loop
// - It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']

let drinks_1: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

// drinks_1.map((c) => console.log((c += c)));

for (let i: number = 0; i < drinks_1.length; i++) {
  console.log((drinks_1[i] += drinks_1[i]));
}

console.log(drinks_1);
