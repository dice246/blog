/**
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

majorityElement([2,2,1,1,1,2,2])
