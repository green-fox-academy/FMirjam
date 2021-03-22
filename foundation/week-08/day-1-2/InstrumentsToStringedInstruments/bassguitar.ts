import { StringedInstrument } from './StringedInstrument';

class BassGuitar extends StringedInstrument {
  constructor() {
    super();
    this.name = 'Bass Guitar';
    this.numberOfStrings = 4;
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}

let bassguitar = new BassGuitar();
console.log('Test 2 Play');
bassguitar.play();
