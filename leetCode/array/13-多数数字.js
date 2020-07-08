/**
 * 1. 通过对象遍历出每个item的次数
 * 2. 遍历对象取出大于 N / 2 的值
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = {};
  let val = nums.length / 2;
  let result;

  nums.forEach(item => {
    if (map[item]) {
      map[item] += 1;
    } else {
      map[item] = 1;
    }
  })

  let entries = Object.entries(map);

  result = entries.find(item => item[1] > val);
  return result[0];
};

/**
 * 因为大于一半, 所以排序后的 中间那个数必是
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement2 = function(nums) {
  nums.sort((a,b) => a - b)
  console.log(nums);
  return nums[Math.floor(nums.length / 2)]
};


majorityElement2([2,2,1,1,1,2,2])
