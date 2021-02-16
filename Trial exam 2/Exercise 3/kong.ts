// Kong
// Kong, gains 2 grams when fed.

import { Feed } from './feed';
import { Fish } from './fish';
import { Status } from './status';


export class Kong extends Fish implements Status, Feed {
  constructor(name: string, weight: number, color: string) {
    super();
    this.name = name;
    this.weight = weight;
    this.color = color;
  }

  status(): void {
    console.log(`${this.name}, weight: ${this.weight}, color: ${this.color}`);
  }

  feed(): void {
    this.weight++;
  }
}
