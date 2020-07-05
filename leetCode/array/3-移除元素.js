/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let idx = nums.indexOf(val);

  while (idx !== -1) {
    nums.splice(idx, 1);
    idx = nums.indexOf(val);
  }

  return nums.length;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))
