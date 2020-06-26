// 求多个数组之间的交集
function intersection(arr1, arr2) {
  let s1 = new Set([...arr1]);
  let s2 = new Set([...arr2]);
  let result = []

  for (let item of s1.values()) {
    if (s2.has(item)) {
      result.push(item)
    }
  }

  return result;
}

const arr1 = [1,2,3,4,5];
const arr2 = [3,6,7];
const result = intersection(arr1, arr2);
console.log(result);

