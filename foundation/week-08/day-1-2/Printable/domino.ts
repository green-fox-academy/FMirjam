// Create a new class called Domino that has two integer fields that represents the two sides of a domino

import { Printable } from './printable';

export class Domino implements Printable {
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }
  public printAllFields(): void {
    console.log(
      `The Side A is: ${this.sideA}, and the Side B is: ${this.sideB}.`
    );
  }
}
