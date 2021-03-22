import * as test from 'tape';
import { Anagram } from './anagram';



test('Check Anagram', (t) => {
  let actual: boolean = Anagram('cat', 'dog');
  let expected: boolean = false;

  t.equal(actual, expected);
  t.end();
});


test('Check Anagram', (t) => {
    let actual: boolean = Anagram('cat', 'tac');
    let expected: boolean = true;
  
    t.equal(actual, expected);
    t.end();
  });