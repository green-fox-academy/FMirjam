// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnies_2(orderOfBunnies: number): number {
  if (orderOfBunnies === 1) {
    return 2;
  } else if (orderOfBunnies % 2 !== 0) {
    return 2 + bunnies_2(orderOfBunnies - 1);
  } else {
    return 3 + bunnies_2(orderOfBunnies - 1);
  }
}

console.log(bunnies_2(3));
