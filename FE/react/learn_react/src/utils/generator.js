function * hello() {
  yield 'hello';
  yield 'world';
  yield 'end';
}

let hw = hello();

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
