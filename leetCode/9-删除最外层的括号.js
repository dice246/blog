/**
 * url: https://leetcode-cn.com/problems/remove-outermost-parentheses/
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let arr = S.split("");
  let left = 0;
  let right = 0;
  let result = '';
  let stack = [];

  arr.forEach((item, index) => {
    if (!stack.length) {
      stack.push(item);
      left = index;
    } else {
      if (item === ')') {
        stack.pop();

        if (!stack.length) {
          right = index;
          result += S.substring(left + 1, right)
        }
      } else {
        stack.push(item)
      }
    }
  })

  return result;
};

console.log(removeOuterParentheses("(()())(())"))