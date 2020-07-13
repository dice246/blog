/**
 * 最大连续1的个数
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let current = 0;

  nums.forEach(item => {
    if (item === 0) {
      max = Math.max(max, current);
      current = 0;
    } else {
      current++
    }
  })

  max = Math.max(max, current);
  console.log(max)
  return max;
};

findMaxConsecutiveOnes([1])
