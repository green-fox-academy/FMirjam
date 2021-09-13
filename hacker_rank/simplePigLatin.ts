function pigIt(text: string) {
  let textArray: string[] = text.split(' ');
  let pigLatin: string[] = [];

  for (let word of textArray) {
    if (/([a-zA-z])/.test(word)) {
      pigLatin.push(word.substring(1) + word[0] + 'ay');
    } else {
      pigLatin.push(word);
    }
  }

  return pigLatin;
}

const text2: string = 'Pig latin is cool';
console.log(pigIt(text2));
