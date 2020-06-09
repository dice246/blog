// 实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据
// 字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
// 示例一: 'abc' --> {value: 'abc'}
// 示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}

const normalize = (str) => {
  let result = {};
  let tmp = str.split(/[\[\]]/g);
  tmp = tmp.filter(Boolean);

  tmp.reduce((obj, item, index, a) => {
    obj.value = item
    if(index !== a.length -1) {
      return (obj.children = {})
    }
  }, result)
  return result
}

console.log(normalize('[abc[def[gh]]]'))
