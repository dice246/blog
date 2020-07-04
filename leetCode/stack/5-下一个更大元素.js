/**
 * url: https://leetcode-cn.com/problems/next-greater-element-i/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let result = [];

  nums1.forEach((item) => {
    let idx = nums2.indexOf(item);
    let nextVal = checkNext(idx, nums2);
    result.push(nextVal);
  });

  return result;

  function checkNext(idx, nums2) {
    let current = nums2[idx];

    for(let i = idx + 1; i < nums2.length; i++) {
      if (nums2[i] > current) {
        return nums2[i];
      }
    }

    return -1;
  }
};

nextGreaterElement([2,4], [1,2,3,4])