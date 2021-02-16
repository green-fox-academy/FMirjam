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
  aquariumBalance: number;
  bigFishWeight: number = 11;

  constructor() {
    this.aquarium = [];
  }

  addFish(type: string, name: string, weight: number, color: string): void {
    if (type === 'Clownfish') {
      this.aquarium.push(new Clownfish(name, weight, color));
      this.aquariumBalance++;
    } else if (type === 'Tang') {
      this.aquarium.push(new Tang(name, weight, color));
      this.aquariumBalance++;
    } else {
      this.aquarium.push(new Kong(name, weight, color));
      this.aquariumBalance++;
    }
  }

  feed(): void {
    for (let i: number = 0; i < this.aquarium.length; i++) {
      this.aquarium[i].feed();
    }
  }

  removeFish(): void {
    for (let i: number = 0; i < this.aquarium.length; i++) {
      if (this.aquarium[i].weight >= 11) {
        this.aquarium.splice(i, 1);
      }
    }
  }

  getStatus(): void {
    for (let i: number = 0; i < this.aquarium.length; i++) {
      this.aquarium[i].status();
    }
  }
}



