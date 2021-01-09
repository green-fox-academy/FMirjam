// Private function for certain parts to call back them.

// Create a Pirate class. While you can add other fields and methods, you must have these methods:

export class Pirate {
  soberPirate: number;
  isCaptain: boolean;

  constructor() {
    this.soberPirate = 0;
    this.isCaptain = false;
  }

  // drinkSomeRum() - intoxicates the Pirate some
  drinkSomeRum(): void {
    if (this.soberPirate === -1) {
      console.log('The pirate is dead');
    } else {
      this.soberPirate++;
    }
  }

  // howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
  // 0 to 4 times, "Pour me anudder!"
  // else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.

  howsItGoingMate(): void {
    if (this.soberPirate === -1) {
      console.log('The pirate is dead.');
    } else if (this.soberPirate <= 4) {
      console.log('Pour me anudder!');
    } else {
      console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
    }
  }

  // die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead.
  die(): void {
    this.soberPirate === -1;
  }

  // brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.

  brawl(otherPirate: Pirate): void {
    let pirateDie = Math.floor(Math.random() * 3 + 1);
    if (pirateDie === 1) {
      this.die();
    } else if (pirateDie === 2) {
      otherPirate.die();
    } else {
      this.die();
      otherPirate.die();
    }
  }

  // Add a parrot.
  add(parrot: string): void {
    if (this.soberPirate === -1) {
      console.log('The pirate is dead.');
    } else {
      console.log(`I have a ${parrot}.`);
    }
  }
}



// BattleApp

// Create a BattleApp class, where you can fight with ships
// Create 2 ships, fill them with pirates
// Have a battle!
// Armada

// Create an Armada class
// Contains Ship-s as a list
// Have a armada.war(otherArmada) method where two armada can engage in war
// it should work like merge sort
// first ship from the first armada battles the first of the other
// the loser gets deleted so the next ship comes in play from that armada
// whichever armada gets to the end of its ships loses the war
// return true if this is the winner
// WarApp

// Create a WarApp class, where you can fight with armadas
// Create 2 armadas, fill them with ships
// Have a war!
