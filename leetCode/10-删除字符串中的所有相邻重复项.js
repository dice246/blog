/**
 * https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let arr = S.split("");
  let result = [];

  arr.forEach((item, index) => {
    if (!result.length) {
      result.push(item);
    }else {
      if (item === result[result.length -1]) {
        result.pop();
      } else {
        result.push(item);
      }
    }
  });

  return result.join('')
};

console.log(removeDuplicates("aababaab"));