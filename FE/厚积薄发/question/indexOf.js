// 用最简洁代码实现indexOf方法

/**
 * 数组
 * @param arr
 * @param val
 * @returns {number | *}
 */
const indexOf = (arr, val) => {
  return arr.findIndex(item => item === val);
}

console.log(indexOf(['aa', 'bb', 'sd'], 'sd'))

/**
 * 字符串
 * @param str
 * @param target
 * @param start
 * @returns {number|*}
 */
function strIndexOf(str, target, start = 0){
  if (start > str.length) {
    return -1;
  }

  if (start < 0) {
    start = 0;
  }

  for (let i = start; i < str.length; i++) {
    let current = str.substring(i, i + target.length);

    if (current === target) {
      return i;
    }
  }

  return -1;
}

console.log(strIndexOf('hello world', 'o', 5))
