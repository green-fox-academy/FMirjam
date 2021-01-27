// Create a new class called Todo that has three fields representing the task as a string, the priority as string and whether it is done or not as a boolean

import { Printable } from './printable';

export class Todo implements Printable {
  task: string;
  priority: string;
  isItDone: boolean;

  constructor(task: string, priority: string) {
    this.task = task;
    this.priority = priority;
    this.isItDone = true;
  }

  public printAllFields(): void {
    console.log(
      `The task is: ${this.task}, the priority of ${this.task} is ${this.priority}, and to be done is ${this.isItDone}.`
    );
  }
}
