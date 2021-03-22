import * as test from 'tape';
import { Animal } from './animal';

let tiger = new Animal();

test('Huger value drops after eating', (t) => {
  tiger.eat();
  t.equal(tiger.hungerValue, 49);
  t.end();
});

test('Thirst value drops after drinking', (t) => {
  tiger.drink();
  t.equal(tiger.thirstValue, 49);
  t.end();
});
