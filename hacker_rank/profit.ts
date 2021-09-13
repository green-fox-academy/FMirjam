function getMostProfitFromStockQuotes(quotes) {
  let profit: number = 0;
  let max = quotes[quotes.length - 1];
  for (let i: number = quotes.length - 2; i >= 0; i--) {
    max = Math.max(max, quotes[i]);
    if (quotes[i] < max) {
      profit += max - quotes[i];
    }
  }
  return profit;
}

const stockQuotes: number[] = [1, 6, 5, 10, 8, 7];
console.log(getMostProfitFromStockQuotes(stockQuotes));
