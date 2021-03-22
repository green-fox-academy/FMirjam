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

  add(): void {
    let random: number = Math.floor(Math.random());

    if (random) {
      this.aircrafts.push(new F16());
    } else {
      this.aircrafts.push(new F35());
    }
  }

  fill() {
    for (let i = 0; i < this.aircrafts.length; i++) {
      let basedAmount: number = 0;
      basedAmount += this.aircrafts[i].maxAmmo;
      if (basedAmount <= this.storeAmmo) {
        this.aircrafts[i].refill(this.aircrafts[i].maxAmmo);
      } else if (basedAmount > this.storeAmmo) {
        if (this.aircrafts[i].isPriority) {
          this.aircrafts[i].refill(this.aircrafts[i].maxAmmo);
        }
        this.storeAmmo -= basedAmount;
      } else {
        ('There is not enough Ammo.');
      }
    }
  }

  fight(carrier: Carrier) {}

  getStatus() {}
}
