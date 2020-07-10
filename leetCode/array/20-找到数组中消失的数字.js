/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let len = nums.length;
  let result = [];

  for (let i = 0; i < len; i++) {
    if (nums.indexOf(i + 1) === -1) {
      result.push(i + 1)
    }
  }

  return result
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
