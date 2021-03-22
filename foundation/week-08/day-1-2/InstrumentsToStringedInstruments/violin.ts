import { StringedInstrument } from './StringedInstrument';

class Violin extends StringedInstrument {
  constructor() {
    super();
    this.name = 'Violin';
    this.numberOfStrings = 4;
  }

  sound(): string {
    return 'Screech';
  }
}

let violin = new Violin();
console.log('Test 3 Play');
violin.play();
