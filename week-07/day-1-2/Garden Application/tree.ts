import { Plant } from './plant';

export class Tree extends Plant {
  constructor(color: string) {
    super(color);
    this.maximumWaterNeeded = 10;
    this.type = 'Tree';
  }

  Watering(amount: number): void {
    amount *= 0.40;
    super.Watering(amount);
  }
}