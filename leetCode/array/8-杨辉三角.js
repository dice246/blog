/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [];

  for(let i = 0; i < numRows; i++) {
    let item = []
    for (let j = 0; j <= i; j++) {
      if (j > 0 && j < i) {
        item.push(result[i - 1][j - 1] + result[i - 1][j])
      } else {
        item.push(1)
      }
    }
    result.push(item)
  }

  return result;
};

console.log(generate(5))
