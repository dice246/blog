// 输出以下代码运行结果，为什么？如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法
/**
 * forEach不能阻塞，所以默认是并行发起请求。所以结果是同时输出1，4，9
 */
const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

function test() {
  list.forEach(async x=> {
    const res = await square(x)
    console.log(res)
  })
}

/**
 * 方案1：通过for of 实现穿行
 */
async function test1() {
    for (let item of list) {
			const result = await square(item);
			console.log("test1: ", result);		
		}
}

/**
 * 方案2： for循环
 */
async function test2() {
	for (let i = 0; i < list.length; i++) {
		const result = await square(list[i]);
		console.log("test2: ", result);		
	}
}

test();
test1();
test2();