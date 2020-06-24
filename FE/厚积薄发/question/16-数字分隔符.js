// 德国以 . 分割金钱, 转到德国当地格式化方案即可
function f1(val) {
  return val.toLocaleString('de-DE')
}

// 寻找字符空隙加 .
function f2(val) {
  return val.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

// 寻找数字并在其后面加 .
function f3(val) {
  return val.replace(/(\d)(?=(\d{3})+\b)/g, '$1.')
}

let r1 = f1('10000000000');
let r2 = f2('10000000000');
let r3 = f3('10000000000');

console.log(r1, r2, r3)
