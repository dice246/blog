# 谈一谈 nextTick 的原理
Vue.js在默认情况下，每次触发某个数据的 setter 方法后，对应的 Watcher 对象其实会被 push 进一个队列 queue 中，
在下一个 tick 的时候将这个队列 queue 全部拿出来 run（ Watcher 对象的一个方法，用来触发 patch 操作） 一遍。

因为目前浏览器平台并没有实现 nextTick 方法，所以 Vue.js 源码中分别用 Promise、setTimeout、setImmediate 等方式在 microtask（或是task）中创建一个事件
，目的是在当前调用栈执行完毕以后（不一定立即）才会去执行这个事件。


说道底，其实是微任务和宏任务的应用
