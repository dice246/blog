/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let idx = nums.indexOf(target);
  let next = nums.length;

  if (idx !== -1) {
    return idx; // 元素存在返回索引值
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      next = i;
      return next;  //
    }
  }

  return next;

};


console.log(searchInsert([1,2,3,4], 0))
