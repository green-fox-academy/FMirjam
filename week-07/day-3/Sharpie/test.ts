import * as test from 'tape';
import { Sharpie } from './sharpie';

let sharpie01 = new Sharpie('blue', 66.66);

test('Sharpie', (t) => {
  let actual = sharpie01.getInkAmount();
  let expected: number = 100;

  t.equal(actual, expected);
  t.end();
});

test('Sharpie', (t) => {
    let actual = sharpie01.getInkAmount();
    let expected: number = 50;
  
    t.equal(actual, expected);
    t.end();
  });
