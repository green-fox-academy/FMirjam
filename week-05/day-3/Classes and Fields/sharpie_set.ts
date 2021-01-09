// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

import { Sharpie } from './sharpie';

('use strict');

class SharpieSet {
  sharpie: Sharpie[];

  constructor() {
    this.sharpie = [];
  }

  countUsable(newSharpie: Sharpie): boolean {
    for (let i: number = 0; i < this.sharpie.length; i++) {
      if (i > 0) {
        return newSharpie[i].getInkAmount;
      }
    }
  }

  removeTrash(trashSharpie: Sharpie): void {
    for (let i: number = 0; i < this.sharpie.length; i++) {
      if (i > 0 && this.sharpie[i].inkAmount === 0) {
        console.log(`The ${trashSharpie} is unusable`);
      }
    }
  }
}

let sharpie_1 = new Sharpie('brown', 1.55);

console.log(sharpie_1);
