import { Plant } from './plant';

export class Tree extends Plant {
  amountOfWater: number;
  needsWater: boolean;

  constructor(color: string, type: string) {
    super(color, type);
    this.amountOfWater = 0;
    this.needsWater = true;
  }

  watering(totalAmount: number) {
    let waterUsage: number = totalAmount * 0.40;
    if (this.amountOfWater < 10) {
      super.watering(waterUsage);
    } else {
      this.needsWater = false;
    }
  }
}