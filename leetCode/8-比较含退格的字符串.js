/**
 * url: https://leetcode-cn.com/problems/backspace-string-compare/
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  if(S === T) {
    return true;
  }

  let s = deal(S);
  let t = deal(T);

  if (s === t) {
    return true;
  } else {
    return false;
  }

  function deal(str) {
    let arr = str.split("");
    let result = [];

    arr.forEach((item) => {
      if (item === '#') {
        result.pop();
      } else {
        result.push(item);
      }
    })

    return result.join('');
  }
};