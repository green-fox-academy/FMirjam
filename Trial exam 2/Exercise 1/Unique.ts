// Unique Characters
// Create a function that takes a string as parameter 
//and returns a list with the unique letters of the given string.


function Unique(word: string, parameter: string): string[] {
  word.toLowerCase().split('');

  let uniqueArray: string[] = [];
  for (let i: number = 0; i < word.length; i++)
    if (word[i] !== parameter) {
      uniqueArray.push(word[i]);
    }
  return uniqueArray;
}

console.log(Unique('daddy', 'd'));
