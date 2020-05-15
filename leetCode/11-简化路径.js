/**
 * url: https://leetcode-cn.com/problems/simplify-path/
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let arr = path.split('/');
  let result = [];

  arr.forEach((item) => {
    if (item === '..') {
      result.pop();
    } else if (item !== '.' && item !== '') {
      result.push( '/' + item);
    }
  });

  return (result.length ? result.join('') : '/');
};

console.log(simplifyPath("/../"));