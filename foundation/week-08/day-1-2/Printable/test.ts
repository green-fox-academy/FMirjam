import { Domino } from './domino';
import { Todo } from './todo';
import { Printable } from './printable';

let dominoes: Domino[] = [];
let todos: Todo[] = [];

dominoes.push(
  ...[new Domino(1, 2)],
  ...[new Domino(2, 3)],
  ...[new Domino(3, 4)]
);

todos.push(
  ...[new Todo('Buy milk', 'high')],
  ...[new Todo('Bake a cake', 'intermediate')]
);
todos[0].isItDone;
todos[1].isItDone;

for (let domino of dominoes) {
  domino.printAllFields();
}

for (let todo of todos) {
  todo.printAllFields();
}
