import { Plant } from './plant';

export class Flower extends Plant {
  amountOfWater: number;
  needsWater: boolean;

  constructor(color: string, type: string) {
    super(color, type);
    this.amountOfWater = 0;
    this.needsWater = true;
  }

  watering(totalAmount: number) {
    let waterUsage: number = totalAmount * 0.75;
    if (this.amountOfWater < 5) {
      super.watering(waterUsage);
    } else {
      this.needsWater = false;
    }
  }
}
