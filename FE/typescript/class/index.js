var Person = /** @class */ (function () {
    function Person(data) {
        if (data === void 0) { data = 'data'; }
        this.data = data;
        this.name = 'person'; // 只读属性(必须在声明时或者在构造函数初始化)
        this._foo = data;
        this.bar = data;
    }
    Person.prototype.haha = function () { };
    Object.defineProperty(Person.prototype, "foo", {
        get: function () {
            return this._foo;
        },
        set: function (name) {
            this._foo = name;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
