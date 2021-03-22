// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function removeCharacter(text: string): string {
  if (text.length === 0) {
    return text;
  } else if (text.charAt(0) === 'x') {
    return removeCharacter(text.substring(1));
  } else {
    return text.charAt(0) + removeCharacter(text.substring(1));
  }
}

console.log(removeCharacter('ThanxXxXxX'));
