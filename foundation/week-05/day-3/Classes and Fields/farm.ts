// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

import { Animal } from "../Encapsulation and Constructor/animal";

class Farm {
  animals: Animal[];
  slots: number;

  constructor(slots: number = 30) {
    this.animals = [];
    this.slots = slots;
  }

  breed(): void {
    if (this.slots > 0) {
      let littleBabyAnimal = new Animal();
      this.animals.push(littleBabyAnimal);
      this.slots--;
    }
  }

  slaughter(): void {
    let index: number = 0;
    let theLeastHungry: Animal = this.animals[index];
    for (let i: number = 0; i < this.animals.length; i++) {
      if (this.animals[index].getHungry < this.animals[i].getHungry) {
        index = i;
      }
    }

    this.animals.splice(index, 1);
    this.slots--;
  }
}

let myFarm = new Farm();
