/**
 *
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let map = {};

  nums.forEach(item => {
    if(map[item]) {
      map[item] = map[item] + 1;
    } else {
      map[item] = 1;
    }
  })

  let values = Object.entries(map).find(item => item[1] > 1);
  return values[0]
};

findRepeatNumber([2, 3, 1, 0, 2, 5, 3])
