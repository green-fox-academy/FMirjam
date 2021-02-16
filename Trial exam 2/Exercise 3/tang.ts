// Tang
// Tang, gains 1 gramm when fed and can suffer short-term memory loss.

import { Feed } from './feed';
import { Fish } from './fish';
import { Status } from './status';

export class Tang extends Fish implements Status, Feed {
  protected shortTermMemoryLoss: boolean;
  
  constructor(name: string, weight: number, color: string) {
    super();
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.shortTermMemoryLoss = true;
  }

  status(): void {
    console.log(
      `${this.name}, weight: ${this.weight}, color: ${this.color}, short-term memory loss: ${this.shortTermMemoryLoss}`
    );
  }

  feed(): void {
    this.weight++;
  }
}
