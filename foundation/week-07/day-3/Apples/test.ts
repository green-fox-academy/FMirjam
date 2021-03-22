import * as test from 'tape';
import { Apple } from './apples';

let golden = new Apple();

test('get an apple', (t) => {
  let actual: string = golden.getApple();
  let expected: string = 'apple';

  t.equal(actual, expected);
  t.end();
});
