// Extend Helicopter class from Vehicle
// implement your Flyable interface
import { flyable } from './flyable';
import { Vehicle } from './vehicle';

export class Helicopter extends Vehicle implements flyable{
  constructor(type: string, numberOfPassengers: number, safetyLevel: string) {
    super(type, numberOfPassengers, safetyLevel);
  }
  land(): void {
    console.log(`It has landed 300 times successfully.`);
  }

  fly(): void {
    console.log(`It can fly 10 hours in a row.`);
  }

  takeoff(): void {
    console.log('It is time to take off.');
  }
}

let helicopter_1 = new Helicopter('Airbus A 321', 185, 'safe');
helicopter_1.land();
helicopter_1.fly();
helicopter_1.takeoff();
