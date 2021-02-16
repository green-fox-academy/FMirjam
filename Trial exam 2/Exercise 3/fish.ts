// Fish
// Each fish has a name, weight and a color.
// The fish has a status() method. It should print the status for a fish. The implementation should depend on the type of the fish.
// For example: Dory, weight: 9, color: blue, short-term memory loss: true
// The fish has a feed() method. The implementation should depend on the type of the fish.

import { Feed } from './feed';
import { Status } from './status';

export abstract class Fish implements Status, Feed {
  name: string;
  weight: number;
  color: string;
  shortTermMemoryLoss: boolean;
  colorStripes: number;

  status(): void {}

  feed(): void {}
}
