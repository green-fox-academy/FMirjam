// Create an abstract Vehicle class
// it should have at least 3 fields

export abstract class Vehicle {
  type: string;
  numberOfPassengers: number;
  safetyLevel: string;

  constructor(type: string, numberOfPassengers: number, safetyLevel: string) {
    this.type = type;
    this.numberOfPassengers = numberOfPassengers;
    this.safetyLevel = safetyLevel;
  }
}
