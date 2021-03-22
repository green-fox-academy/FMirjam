import * as test from 'tape';
import { Sum, SumMultipleItems } from './sum';


test('sum of two numbers', (t) => {
  let operations = new Sum();
  let actual: number = operations.sum(1, 4);
  let expected: number = 5;

  t.equal(actual, expected);
  t.end();
});

test('sum of multiple numbers', (t) => {
  let operations_2 = new SumMultipleItems();
  let actual_2: number = operations_2.sumMultiple([1, 4, 6, 10]);
  let expected_2: number = 21;

  t.equal(actual_2, expected_2);
  t.end();
});
