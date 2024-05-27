/*You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.*/

function maxProfit(prices: number[]): number {
  let minPrice = Infinity
  let maxProfit = 0

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    const potentialProfit = prices[i] - minPrice
    maxProfit = Math.max(maxProfit, potentialProfit)
  }

  return maxProfit
}

console.log(maxProfit([7, 6, 4, 3, 1]))
