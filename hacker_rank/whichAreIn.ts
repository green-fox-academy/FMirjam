function whichAreIn(array1: string[], array2: string[]) {
  return array1.filter((x) => array2.some((y) => y.includes(x))).sort();
}

const array1: string[] = ['arp', 'live', 'strong', 'bull'];
const array2: string[] = ['lively', 'alive', 'harp', 'sharp', 'armstrong', 'redbull'];
console.log(whichAreIn(array1, array2));
