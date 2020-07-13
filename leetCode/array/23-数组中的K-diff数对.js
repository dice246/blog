/**
 * 两数之和的变形，对于任何一个n，寻找n - k和n + k，我们只需要记录diff对中左值(最小)即可
 * @param nums
 * @param k
 * @returns {number}
 */
var findPairs = function (nums, k) {
  if (k < 0) return 0;

  let visit = new Set();
  let map = new Set();

  for (let n of nums) {
    if (visit.has(n - k)) {
      map.add(n - k);
    }
    if (visit.has(n + k)) {
      map.add(n);
    }
    visit.add(n);
  }
  return map.size;
}

findPairs([3, 1, 4, 1, 5], 2)
