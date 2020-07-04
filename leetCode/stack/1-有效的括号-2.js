/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let map = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  let leftArr = [];

  for (let ch of s) {
    if (ch in map) {
      leftArr.push(ch);
    } else {
      if (ch !== map[leftArr.pop()]) {
        return false;
      }
    }
  }

  return !leftArr.length;

};

console.log(isValid('{}[()]'));