// 如何模拟实现Array.prototype.splice
Array.prototype.splice = function (start, deleteCount, ...item) {
  if (start < 0) {
    start = Math.abs(start) > this.length ? 0 : this.length + start;
  } else {
    start = start > this.length - 1 ? this.length : start;
  }

  if ( typeof deleteCount === 'undefined') {
    deleteCount = this.length;
  }

  const removeList =  this.slice(start, start + deleteCount)

  const right = this.slice(start + deleteCount)

  let addIndex = start
  item.concat(right).forEach(item => {
      this[addIndex] = item
      addIndex++
  })
  this.length = addIndex

  return removeList;
}

let arr = [1,2,3,4]
arr.splice(2, 1, 3.5);
console.log('arr: ', arr);