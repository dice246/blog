/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let idx = [];
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        idx = [i, j];
        return idx;
      }
    }
  }
};

var twoSum2 = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (end > start) {
    const frontNums = nums[start];
    const endNumbs = nums[end];

    if (frontNums + endNumbs > target) {
      end--;
    } else if (frontNums + endNumbs < target) {
      start++;
    } else {
      return [start + 1, end + 1]
    }
  }
}

console.log(twoSum2([2, 7, 11, 15], 9))
