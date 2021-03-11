export function addWords(array) {
  let words = ['Arrgh', 'Uhmm', 'Err'];
  let randomNumber = Math.floor(Math.random() * 3);
  array.push(words[randomNumber] + '.');
  return array;
}
