/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const len = nums.length;
  let i = 0;

  if (len <= 1) {
    return false
  }

  while (i < len) {
    let range = nums.slice(i + 1, i + k + 1);

    if (range.indexOf(nums[i]) !== -1) {
      return true;
    }

    i++
  }

  return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate2 = function(nums, k) {
  const set = new Set();
  for(let i = 0; i < nums.length; i++) {
    if(set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
    if(set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
