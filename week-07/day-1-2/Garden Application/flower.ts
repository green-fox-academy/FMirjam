import { Plant } from './plant';

export class Flower extends Plant {
  constructor(color: string) {
    super(color);
    this.maximumWaterNeeded = 5;
    this.type = 'Flower';
  }

  Watering(amount: number): void {
    amount *= 0.75;
    super.Watering(amount);
  }
}
