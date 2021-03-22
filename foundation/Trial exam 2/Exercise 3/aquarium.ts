// Aquarium
// It has an addFish() method where you can add fishes to the aquarium.
// It has a feed() method that feeds all the fishes in the aquarium:
// Increases the weight of every fish with the amount of grams they gain when fed.
// It has a removeFish() a method that removes the big fishes:
// A big fish's weight is at least 11 grams.
// The aquarium has a getStatus() method it should print the status for each fish.

import { Clownfish } from './clownfish';
import { Fish } from './fish';
import { Kong } from './kong';
import { Tang } from './tang';

export class Aquarium {
  aquarium: Fish[];
  bigFishWeight: number;

  constructor() {
    this.aquarium = [];
    this.bigFishWeight = 11;
  }

  addFish(type: string, name: string, weight: number, color: string): void {
    if (type === 'Clownfish') {
      this.aquarium.push(new Clownfish(name, weight, color));
    } else if (type === 'Tang') {
      this.aquarium.push(new Tang(name, weight, color));
    } else {
      this.aquarium.push(new Kong(name, weight, color));
    }
  }

  feed(): void {
    for (let i: number = 0; i < this.aquarium.length; i++) {
      this.aquarium[i].feed();
    }
  }

  removeFish(): void {
    this.aquarium = this.aquarium.filter(
      (fish) => fish.weight <= this.bigFishWeight
    );
  }

  getStatus(): void {
    for (let i: number = 0; i < this.aquarium.length; i++) {
      this.aquarium[i].status();
    }
  }
}
