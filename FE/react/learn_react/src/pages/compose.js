function f1() {
  console.log('f1')
}

function f2() {
  console.log('f2')
}

function f3() {
  console.log('f3')
}

function compose(...funcs) {
  const len = funcs.length;

  if (len === 0) {
    return args => args
  }

  if (len === 1) {
    return funcs[0]
  }

  // 如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。
  return funcs.reduce((left, right) => {
    console.log('out-left: ', left);
    console.log('out-right: ', right);
    return (...args) => {
      console.log('args: ', args);
      console.log('left: ', left);
      console.log('right:', right);
      return right(left(...args))
    }
  })
}

compose(
  f1,
  f2,
  f3
)(12131)
