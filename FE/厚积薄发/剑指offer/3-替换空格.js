/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  const regexp = /\s/g;
  const result = s.replace(regexp, '%20')

  return result;
};

console.log(replaceSpace("We are happy."))
