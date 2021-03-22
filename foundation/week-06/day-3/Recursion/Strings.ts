// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

function replaceCharacter(word: string): string {
  if (word.length === 0) {
    return word;
  } else if (word.charAt(0) === 'x') {
    return 'y' + replaceCharacter(word.substring(1));
  } else {
    return word.charAt(0) + replaceCharacter(word.substring(1));
  }
}

console.log(replaceCharacter('ThanxXxX'));
