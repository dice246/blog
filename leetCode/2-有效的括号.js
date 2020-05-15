/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  while (s.length) {
    let temp = s;
    s = s.replace('[]', '');
    s = s.replace('{}', '');
    s = s.replace('()', '');

    // 如果temp === s,说明存在无法去除的符号
    if (s === temp) {
      return false;
    }
  }

  return true;
};

console.log(isValid("()"));