function duplicates(arr: string[]) {
  let newArray: string[] = arr.join(',').split('');
  for (let i: number = 0; i < newArray.length; i++) {
    if (newArray[i] === newArray[i - 1]) {
      newArray.splice(i, 1);
    }
  }

  return newArray.join('').split(',');
}

const array: string[] = ['abracadabra', 'allottee'];
console.log(duplicates(array));
