import { Flower } from './flower';
import { Plant } from './plant';
import { Tree } from './tree';

export class Garden {
  tree: Tree[];
  flower: Flower[];

  constructor() {
    this.tree = [];
    this.flower = [];
  }

  exampleGarden() {
    this.tree.push(new Tree('purple'));
    this.flower.push(new Flower('yellow'));
  }

  treeSituation() {
    for (let i: number = 0; i < this.tree.length; i++) {
      if (this.tree[i].needsWater) {
        console.log(
          `The ${this.tree[i].color} ${this.tree[i].type} needs water.`
        );
      } else {
        console.log(
          `This ${this.tree[i].color} ${this.tree[i].type} does not need water. `
        );
      }
    }
  }

  flowerSituation() {
    for (let j: number = 0; j < this.flower.length; j++) {
      if (this.flower[j].needsWater) {
        console.log(
          `The ${this.flower[j].color} ${this.flower[j].type} needs water.`
        );
      } else {
        console.log(
          `This ${this.flower[j].color} ${this.flower[j].type} does not need water. `
        );
      }
    }
  }
}
