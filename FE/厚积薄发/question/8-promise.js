// 实现一个批量请求函数 multiRequest(urls, maxNum)
function PromiseLimit(funcArray, limit = 5) {
  let i = 0;
  const result = [];
  const executing = [];
  const queue = function() {
    // 处理边界情况
    if (i === funcArray.length) return Promise.all(executing);

    const p = funcArray[i++]();
    result.push(p);

    // 将此promise的状态保存在executing中， 执行完之后 从数组中删除。
    const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    executing.push(e);

    // 数量不够就重复调用queue， 够了的话就比较
    if (executing.length >= limit) {
      return Promise.race(executing).then(// 最后用all 处理剩余数组中的，等处理完再执行callback
        () => queue(),
        e => Promise.reject(e)
      );
    }

    return Promise.resolve().then(() => queue());
  };

  // 最后用all 处理剩余数组中的，等处理完再执行callback
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
