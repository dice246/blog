/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
  let index = 0
  for( let i=0,len=nums.length; i<len; i++ ){
    if( nums[i] != nums[i+1] ) {
      nums[index] = nums[i]
      index++
    }
  }
  return index
};
