/**
 *
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let map = {};
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    let item = nums[i];

    if(map[item]) {
      return item;
    } else {
      map[item] = 1;
    }
  }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))
