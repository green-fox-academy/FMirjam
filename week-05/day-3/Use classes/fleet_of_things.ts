
import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch


let getMilk = new Thing ('Get milk');
let removeTheObstacles = new Thing ('Remove the obstacles');
let standUp = new Thing ('Stand up');
let eatLunch = new Thing ('Eat lunch');

fleet.add(getMilk);
fleet.add(removeTheObstacles);
fleet.add(standUp);
fleet.add(eatLunch);

standUp.complete();
eatLunch.complete();

console.log(fleet);