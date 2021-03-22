import * as test from 'tape';
import { Apple } from './apples';

let pinkPearl = new Apple();

test('get an apple', (t) => {
  let actual: string = pinkPearl.getApple();
  let expected: string = 'apple';

  t.equal(actual, expected);
  t.end();
});
