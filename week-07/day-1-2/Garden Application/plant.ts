export class Plant {
  color: string;
  type: string;
  needsWater: boolean;
  amountOfWater: number;
  maximumWaterNeeded: number;

  constructor(color: string) {
    this.color = color;
    this.needsWater = true;
    this.amountOfWater = 0;
  }

  get Color() {
    return this.color;
  }

  get Type() {
    return this.type;
  }

  get NeedsWater() {
    return this.needsWater;
  }

  Watering(amount: number) {
    this.amountOfWater += amount;
    if (this.amountOfWater >= this.maximumWaterNeeded) {
      this.needsWater = false;
    }
  }
}
