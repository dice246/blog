/**
 * https://leetcode-cn.com/problems/build-an-array-with-stack-operations/
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  const result = []

  for (let i = 1; i <=n; i++) {
    if (target[target.length - 1] < i) {
      break;
    }

    if (target.includes(i)) {
      result.push('Push')
    } else {
      result.push('Push', 'Pop')
    }
  }

  return result;
};

console.log(buildArray([1,2,3], 3))
