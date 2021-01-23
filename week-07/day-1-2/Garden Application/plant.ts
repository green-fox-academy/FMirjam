export class Plant {
  color: string;
  type: string;
  needsWater: boolean;
  amountOfWater: number;

  constructor(color: string, type: string) {
    (this.color = color),
      (this.type = type),
      (this.needsWater = true),
      (this.amountOfWater = 0);
  }

  watering(additionalWater: number): void {
    this.amountOfWater += additionalWater;
  }
}
