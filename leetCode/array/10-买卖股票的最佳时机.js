/**
 * 循环遍历，如果当前元素小于最小值，则赋给min.否则比较（当前元素-min）和max，取出最大值
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;

  prices.forEach(item => {
    if (item < min) {
      min = item;
    } else {
      max = Math.max(max, item - min)
    }
  })

  return max;
};

console.log(maxProfit([2,4,1]));
