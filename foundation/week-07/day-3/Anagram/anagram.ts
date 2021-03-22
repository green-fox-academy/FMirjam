// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

export function Anagram(stringOne: string, stringTwo: string): boolean {
  let result: boolean = false;
  if (stringOne === stringTwo.split('').reverse().join('')) {
    result = true;
  }
  return result;
}
