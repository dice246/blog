/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  console.log(nums1, nums2, len1, len2, len)
  while (len1 >= 0 && len2 >= 0) {
    // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    console.log(nums1, nums2, len1, len2, len)
  }

  function arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
  }

  // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
  arrayCopy(nums2, 0, nums1, 0, len2 + 1);
};

/**
 * 通俗易懂
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */
var merge2 = function(nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n)

  nums1.push(...nums2);

  nums1.sort((a,b) => a-b);
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)
