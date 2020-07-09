/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const len = nums.length;

  if (len <= 1) {
    return false;
  }

  const set = new Set(nums);
  const size = set.size;

  if (len === size) {
    return false;
  }

  return Object.values(set).length !== len;
};

console.log(containsDuplicate([3,1]))
