function maxProfit(prices: number[]): number {
  let leftPointer = 0;
  let rightPointer = 1;
  let profit = 0;
  while (rightPointer < prices.length) {
    const newProfit = prices[rightPointer] - prices[leftPointer];
    if (newProfit > profit) {
      profit = newProfit;
    } else if (prices[rightPointer] < prices[leftPointer]) {
      leftPointer = rightPointer;
    }
    rightPointer++;
  }
  return profit;
}
