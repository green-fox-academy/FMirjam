function makeAnagram(a: string, b: string): number {
  let aSort: string[] = a.split('').sort((a, b) => a.localeCompare(b));
  let bSort: string[] = b.split('').sort((a, b) => a.localeCompare(b));
  let counterA: number = 0;
  let counterB: number = 0;

  if (aSort.length === bSort.length) {
    for (let i: number = 0; i < aSort.length; i++) {
      if (bSort.includes(aSort[i])) {
        counterA++;
        counterB++;
      }
    }
  }
  return counterA + counterB;
}
console.log(makeAnagram('showman', 'woman'));
