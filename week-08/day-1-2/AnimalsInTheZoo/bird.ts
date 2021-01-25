import { Animal } from './animal';

export class Bird extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
    this.age = 5;
    this.gender = 'male';
  }

  getName(): void {
    console.log(`The name of the reptile is: ${this.name}.`);
  }

  breed(): string {
    return 'laying eggs';
  }

  askInfo(): void {
    console.log(`How does a ${this.name} breed?`);
  }

  getInfo(): void {
    console.log(`A ${this.name} is breeding by ${this.breed()}.`);
  }
}

let mammal_1 = new Bird('Parrot');
mammal_1.getName();
mammal_1.askInfo();
mammal_1.getInfo();
