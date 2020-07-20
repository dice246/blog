/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  let odd = [];
  let even = [];
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    let value = nums[i];

    if (value % 2 !== 0) {
      odd.push(value);
    } else {
      even.push(value)
    }
  }

  return  odd.concat(even);
};


console.log(exchange([2,16,3,5,13,1,16,1,12,18,11,8,11,11,5,1]))
