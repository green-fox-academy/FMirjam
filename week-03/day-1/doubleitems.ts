// - Create an array variable named `drinks` with the following content:
//   `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of
//   a loop
// - It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']

let drinks_1: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

//USE BUILT IN ARRAY METHOD!! 'map'??

drinks_1.map(c => console.log(c += c));