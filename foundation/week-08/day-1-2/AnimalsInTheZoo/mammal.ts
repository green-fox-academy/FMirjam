import { Animal } from './animal';

export class Mammal extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
    this.age = 6;
    this.gender = 'female';
  }

  getName(): void {
    console.log(`The name of the mammal is: ${this.name}.`);
  }

  breed(): string {
    return 'pushing miniature versions out';
  }

  askInfo(): void {
    console.log(`How does a ${this.name} breed?`);
  }

  getInfo(): void {
    console.log(`A ${this.name} is breeding by ${this.breed()}.`);
  }
}

let mammal_1 = new Mammal('Koala');
mammal_1.getName();
mammal_1.askInfo();
mammal_1.getInfo();
