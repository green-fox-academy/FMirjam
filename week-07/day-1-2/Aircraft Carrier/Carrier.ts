import { Aircraft } from './Aircraft';
import { F16 } from './F16';
import { F35 } from './F35';

export class Carrier {
  aircrafts: Aircraft[];
  storeAmmo: number;
  healthPoint: number;

  constructor(storeAmo: number, healthPoint: number) {
    this.aircrafts = [];
    this.storeAmmo = storeAmo;
    this.healthPoint = healthPoint;
  }

  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill() {
      if (this.storeAmmo === 0) {
          console.log('Storage is empty')
      }
  }

  fight(carrier: Carrier) {}

  getStatus() {}
}
