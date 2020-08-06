/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let map = {};

  nums.forEach(item => {
    if (map[item]) {
      map[item]++
    } else {
      map[item] = 1;
    }
  })

  return map[target] || 0
};
