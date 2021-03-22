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

let bird_1 = new Bird('Parrot');
bird_1.getName();
bird_1.askInfo();
bird_1.getInfo();
