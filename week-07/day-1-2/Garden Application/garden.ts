import { Plant } from './plant';
import { Flower } from './flower';
import { Tree } from './tree';

class Garden {
  plants: Plant[];
  flowers: Flower[];
  trees: Tree[];

  constructor() {
    this.plants = [];
    this.flowers = [];
    this.trees = [];
  }

  pushFlowers(flower: Flower): void {
    this.flowers.push(flower);
  }

  wateringFlowers(waterwithAmountOf: number): void {
    let filteredFlowers: Flower[] = this.flowers.filter(
      (flower) => flower.needsWater
    );

    for (let flower of filteredFlowers) {
      flower.watering(waterwithAmountOf / filteredFlowers.length);
    }
  }

  pushTrees(tree: Tree): void {
    this.trees.push(tree);
  }

  wateringTrees(waterwithAmountOf: number): void {
    let filteredTrees: Tree[] = this.trees.filter((tree) => tree.needsWater);

    for (let tree of filteredTrees) {
      tree.watering(waterwithAmountOf / filteredTrees.length);
    }
  }

  pushPlants(plant: Plant): void {
    this.plants.push(plant);
  }

  wateringPlants(waterwithAmountOf: number): void {
    let filteredPlants: Plant[] = this.plants.filter(
      (plant) => plant.needsWater
    );

    for (let plant of filteredPlants) {
      plant.watering(waterwithAmountOf / filteredPlants.length);
    }
  }
}
