var getRow = function(rowIndex) {
  let result = [];

  for(let i = 0; i <= rowIndex; i++) {
    let item = []
    for (let j = 0; j <= i; j++) {
      if (j > 0 && j < i) {
        item.push(result[j - 1] + result[j])
      } else {
        item.push(1)
      }
    }
    result = item;
  }

  return result;
};

console.log(getRow(3))
