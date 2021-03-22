// Given a string, compute recursively a new string where all the adjacent chars are now separated by a *

function seperatedCharacter(newString: string): string {
  if (newString.length === 0) {
    return newString;
  } else {
    return (
      newString.charAt(0) + '*' + seperatedCharacter(newString.substring(1))
    );
  }
}

console.log(seperatedCharacter('ThanxXxXxX'));
