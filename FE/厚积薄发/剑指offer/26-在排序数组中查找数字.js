/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let map = {};

  nums.forEach(item => {
    if (map[item]) {
      map[item]++
    } else {
      map[item] = 1;
    }
  })

  return map[target] || 0
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search1 = function(nums, target) {
  let idx = nums.indexOf(target);
  let times = 0;

  if (idx === -1) {
    return times;
  }

  for (let i = idx; i < nums.length; i++) {
    if (nums[i] === target) {
      times++;
    } else {
      break;
    }
  }

  return times;
};

console.log(search1([1], 1))
