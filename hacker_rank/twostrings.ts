let s1: string = 'hello';
let s2: string = 'world';

function twoStrings(s1: string, s2: string): string {
  let s1Array: string[] = s1.split('');
  let s2Array: string[] = s2.split('');
  let object: { [key: string]: number } = {};

  for (let s1Letter of s1Array) {
    if (!object[s1Letter]) {
      object[s1Letter] = 1;
    }
  }

  for (let s2Letter of s2Array) {
    if (object[s2Letter]) {
     return 'YES'
    }
  }
  return 'NO'
}

console.log(twoStrings(s1, s2))
