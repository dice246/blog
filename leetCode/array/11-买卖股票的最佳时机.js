/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    let next = prices[i + 1];
    let curr = prices[i];
    if (next > curr) {
      profit += next - curr;
    }
  }
  return profit;
};

console.log(maxProfit([1,2,3,4,5]));


