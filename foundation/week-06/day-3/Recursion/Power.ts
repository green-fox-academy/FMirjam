// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function power(n_2: number, p: number): number {
  if (n_2 === 1) {
    return 1;
  } else if (p === 1) {
    return n_2;
  } else {
    return n_2 * power(n_2, p - 1);
  }
}

console.log(power(3, 1));
