import { addWords } from './addWords.js';
import { capitalizeFirstLetter } from './capitalize.js';
import { append } from './append.js';

export function generateSithText(line) {
  let part1 = [];
  let part2 = [];

  for (let i = 0; i < line.length; i += 2) {
    part1.push(line[i].toLowerCase());
  }

  for (let j = 1; j < line.length; j += 2) {
    part2.push(line[j]);
  }

  let upperLetterWord = capitalizeFirstLetter(part2[0]);
  part2.shift(part2[0]);
  part2.unshift(upperLetterWord);

  let result = append(part2, part1);
  result[result.length - 1] += '.';
  result = addWords(result);
  return result.join(' ');
}
