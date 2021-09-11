function streetFighters(
  fighters: string[][],
  position: number[] = [0, 0],
  moves: string[]
) {
  let newFighters: string[] = [];
  for (let move of moves) {
    if (move === 'up') {
      if (position[0] === 0) {
        newFighters.push(fighters[position[0]][position[1]]);
      } else {
        position[0]--;
        newFighters.push(fighters[position[0]][position[1]]);
      }
    }
    if (move === 'down') {
      if (position[0] === fighters.length - 1) {
        newFighters.push(fighters[position[0]][position[1]]);
      } else {
        position[0]++;
        newFighters.push(fighters[position[0]][position[1]]);
      }
    }
    if (move === 'left') {
      if (position[1] === 0) {
        position[1] = 5;
        newFighters.push(fighters[position[0]][position[1]]);
      } else {
        position[1]--;
        newFighters.push(fighters[position[0]][position[1]]);
      }
    }
    if (move === 'right') {
      if (position[1] === 5) {
        position[1] = 0;
        newFighters.push(fighters[position[0]][position[1]]);
      } else {
        position[1]++;
        newFighters.push(fighters[position[0]][position[1]]);
      }
    }
  }

  return newFighters;
}

const fighters: string[][] = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];
const initial_position: number[] = [0, 0];
const moves: string[] = ['up', 'left', 'right', 'left', 'left'];

console.log(streetFighters(fighters, initial_position, moves));
