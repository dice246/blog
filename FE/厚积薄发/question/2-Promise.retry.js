// 实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject 
Promise.retry = function(fn, num = 1){
  return new Promise(async function(resolve, reject){
     while(num>0){
         try{
            const res = await fn();
            console.log('res: ', res);
            resolve(res)
            num = 0
          } catch(e){
            console.log('reject....');
            if(num === 1) reject(e);
            num--
          }
      }
  })
}

const test = () => {
  return new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10);
    if (num > 5) {
      resolve(num);
    } else {
      reject(`num 小于等于8`);
    }
  
  })
}

Promise
.retry(test, 5)
.then(res => {
  console.log('result: ', res);
})
.catch(err => {
  console.log('err: ', err);
})