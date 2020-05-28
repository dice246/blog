class Person {
  private _foo: string; // 私有属性，不能再类的外部使用
  protected bar: string; // 保护属性，可以在派生类中使用
  readonly name = 'person'; // 只读属性(必须在声明时或者在构造函数初始化)

  constructor(private data = 'data') {
    this._foo = data;
    this.bar = data;
  }

  private haha() {}

  get foo() {
    return this._foo    
  }

  set foo(name) {
    this._foo = name;
  }
}