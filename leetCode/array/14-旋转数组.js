/**
 * 通过splice实现
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let next = nums.splice(nums.length - k);
  return nums.splice(0, 0, ...next);
};

rotate([-1,-100,3,99], 2)
