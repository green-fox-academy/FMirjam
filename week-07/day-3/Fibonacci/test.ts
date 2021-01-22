import * as test from 'tape';
import { fibonacci } from './fibonacci';


test('Calculate Fibonacci sequence', (t) => {
  let actual: number = fibonacci(5);
  let expected: number = 5;

  t.equal(actual, expected);
  t.end();
});

test('Calculate Fibonacci sequence', (t) => {
    let actual: number = fibonacci(10);
    let expected: number = 55;
  
    t.equal(actual, expected);
    t.end();
  });



test('Calculate Fibonacci sequence', (t) => {
    let actual: number = fibonacci(1);
    let expected: number = 1;
  
    t.equal(actual, expected);
    t.end();
  });


test('Calculate Fibonacci sequence', (t) => {
    let actual: number = fibonacci(0);
    let expected: number = 0;
  
    t.equal(actual, expected);
    t.end();
  });
