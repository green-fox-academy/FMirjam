// -  Create an array variable named `animals`
//    with the following content:
//    `["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill",
//      "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"]`
//
// -  Add all elements an `"a"` at the end

let animals_1: string[] = ['koal', 'pand', 'zebr', 'anacond', 'bo'];


for (let i: number = 0; i < animals_1.length; i++) {
    console.log(animals_1[i] + 'a');
}



animals_1.map(a => console.log(a + 'a'));