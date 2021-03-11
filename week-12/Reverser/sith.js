import {generateSithText} from './generateSithText.js';

export function sithText(_text) {
  let splittedText = _text.split('.');
  let firstSplittedText = splittedText[0].split(' ');
  let secondSplittedText = splittedText[1].split(' ');
  let joinedText = generateSithText(firstSplittedText) + generateSithText(secondSplittedText);
  return joinedText;
}


