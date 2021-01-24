import { Instrument } from './Instrument';

// Next, we add another abstract class, StringedInstrument which extends Instrument. It

// introduces numberOfStrings and
// sound() method what's implementation is yet unknown
// but with the help of the sound() the play() method is fully implementable

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;
  constructor() {
    super();
  }

  sound(): void {}

  play(): void {
    console.log(
      `${this.name}, a ${
        this.numberOfStrings
      }-stringed instrument that goes ${this.sound()}.`
    );
  }
}
