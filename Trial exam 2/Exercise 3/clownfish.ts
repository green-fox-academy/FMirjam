// Clownfish
// Clownfish, gains 1 gramm when fed and has an additional color (color of the stripes).

import { Feed } from './feed';
import { Fish } from './fish';
import { Status } from './status';

export class Clownfish extends Fish implements Status, Feed {
  constructor(name: string, weight: number, color: string) {
    super();
    this.name = name;
    this.weight = weight;
    this.color = color;
    this.colorStripes = 1;
  }

  status(): void {
    console.log(
      `${this.name}, weight: ${this.weight}, color: ${this.color}, color stripes: ${this.colorStripes}`
    );
  }

  feed(): void {
    this.weight++;
  }
}
