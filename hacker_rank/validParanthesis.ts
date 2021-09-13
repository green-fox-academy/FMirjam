function validParanthesis(parens: string): boolean {
  let parensArray: string[] = parens.split('');
  let object: { [key: string]: number } = {};

  if (parensArray.length === 0) {
    return false;
  }
  
  for (let paren of parensArray) {
    if (object[paren]) {
      object[paren]++;
    } else {
      object[paren] = 1;
    }
  }

  for (let i: number = 0; i < Object.values(object).length; i++) {
    if (Object.values(object)[i] === Object.values(object)[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
}

const parens: string = '(())((()())())';
const parens2: string = '()(';
const parens3: string = '';
console.log(validParanthesis(parens));
console.log(validParanthesis(parens2));
console.log(validParanthesis(parens3));
