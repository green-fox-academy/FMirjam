function maximumToys(prices: number[], k: number): number {
  let counter: number = 0;
  let sortedPrices: number[] = prices.sort((a, b) => a - b);

  for (let i: number = 0; i < sortedPrices.length; i++) {
      if(k > sortedPrices[i]){
          k = k - sortedPrices[i]
          counter++
      }
  }
  return counter
}

console.log(maximumToys([1, 2, 3, 4], 7));
