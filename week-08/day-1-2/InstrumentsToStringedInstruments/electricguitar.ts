import { StringedInstrument } from './StringedInstrument';

class ElectricGuitar extends StringedInstrument {
  constructor() {
    super();
    this.name = 'Electric Guitar';
    this.numberOfStrings = 6;
  }

  sound(): string {
    return 'Twang';
  }
}

let guitar = new ElectricGuitar();
console.log('Test 1 play');
guitar.play();
