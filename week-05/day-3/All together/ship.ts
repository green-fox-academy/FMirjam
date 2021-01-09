import { Pirate } from './pirates';

export class Ship {
  // The Ship stores Pirate-s instances in a list as the crew and has one captain who is also a Pirate.
  crewOfPirates: Pirate[];
  numberOfLivePirate: number;

  constructor() {
    this.numberOfLivePirate = 0;
  }

  // The ship can be filled with pirates and a captain via fillShip() method.
  // Filling the ship with a captain and random number of pirates.
  fillShip(): void {
    let numberOfPirates = Math.floor(Math.random() * 20 + 1);
    let pirates = [];
    for (let i: number = 0; i < numberOfPirates; i++) {
      let pirate = new Pirate();
      if (i === 0) {
        pirate.isCaptain = true;
      }
    }
    this.crewOfPirates = pirates;
    this.numberOfLivePirate = this.crewOfPirates.length;
  }

  // Ships should have a method to battle other ships: ship.battle(otherShip)
  // should return true if the actual ship (this) wins
  // the ship should win if its calculated score is higher
  // calculate score: Number of Alive pirates in the crew - Number of consumed rum by the captain

  battle(otherShip: Ship): void {
    let win = true;
    let score_1 = this.crewOfPirates.length - this.crewOfPirates[0].soberPirate;
    let score_2 =
      otherShip.crewOfPirates.length - otherShip.crewOfPirates[0].soberPirate;
    let winnerShip: Pirate[];
    let looserShip: Pirate[];

    if (score_1 > score_2) {
      winnerShip = this.crewOfPirates;
      looserShip = otherShip.crewOfPirates;
    } else {
      winnerShip = otherShip.crewOfPirates;
      looserShip = this.crewOfPirates;
    }

    // The loser crew has a random number of losses (deaths).
    // The winner captain and crew has a party, including a random number of rum :)

    let numberOfDeathsOfLoserCrew = Math.floor(Math.random() * looserShip.length);

  }
}


