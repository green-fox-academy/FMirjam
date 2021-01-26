// Extend Bird from your abstract Animal class (zoo exercise)
// implement your Flyable interface

import { Bird } from '../AnimalsInTheZoo/bird';
import { flyable } from './flyable';

class Bird2 extends Bird implements flyable {
  constructor(name: string) {
    super(name);
    
  }
  land(): void {
    console.log(`Yeees it is landing time for ${this.name}!!`);
  }

  fly(): void {
    console.log(`Let's fly!`);
  }

  takeoff(): void {
    console.log('It is time to take off.');
  }
}

let bird_2 = new Bird2('Dove');
bird_2.land();
bird_2.fly();
bird_2.takeoff();