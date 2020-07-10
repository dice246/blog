/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  nums.sort((a, b) => b === 0 ? -1 : 0)
};

var arr = [0,1,0,3,12];
moveZeroes(arr);
