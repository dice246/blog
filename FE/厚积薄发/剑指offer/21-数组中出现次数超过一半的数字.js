/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = {};
  let half = nums.length / 2;

  nums.forEach(item => {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
  })

  let entries = Object.entries(map);

  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] >= half) {
      console.log(entries[i][0])
      return entries[i][0]
    }
  }
};

majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2])
