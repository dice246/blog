/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let arr = n.toString(2).split('');
  let num = 0;

  arr.forEach(item => {
    if (+item === 1) {
      num++
    }
  })

  console.log(num);
  return num;
};
