// 实现一个批量请求函数 multiRequest(urls, maxNum)
function PromiseLimit(funcArray, limit = 5) {
  let i = 0;
  const result = [];
  const executing = [];
  const queue = function() {
    if (i === funcArray.length) return Promise.all(executing);
    const p = funcArray[i++]();
    result.push(p);
    const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    executing.push(e);
    if (executing.length >= limit) {
      return Promise.race(executing).then(
        () => queue(),
        e => Promise.reject(e)
      );
    }
    return Promise.resolve().then(() => queue());
  };
  return queue().then(() => Promise.all(result));
}

// 测试代码
const result = [];
for (let index = 0; index < 10; index++) {
  result.push(function() {
    return new Promise((resolve, reject) => {
      console.log("开始" + index, new Date().toLocaleString());
      setTimeout(() => {
        resolve(index);
        console.log("结束" + index, new Date().toLocaleString());
      }, parseInt(Math.random() * 10000));
    });
  });
}

PromiseLimit(result).then(data => {
  console.log(data);
});
