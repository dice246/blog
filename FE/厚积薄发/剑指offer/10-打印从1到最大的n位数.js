/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let len = Math.pow(10, n) - 1
  return Array.from({length: len}, (item, index) => index + 1)
};

console.log(printNumbers(10))
