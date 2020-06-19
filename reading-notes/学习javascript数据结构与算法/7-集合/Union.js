const SetCustom = require('./Set')

class Union extends SetCustom {
  constructor() {
    super();
  }

  union(otherSet) {
    let union = new Set();
    this.values().forEach(item => union.add(item));
    otherSet.values().forEach(item => union.add(item));

    return union;
  }
}

const u1 = new Union();
u1.add(1);
u1.add(2);
u1.add(3);

const s1 = new SetCustom();
s1.add(3);
s1.add(4);
s1.add(5);

const union  = u1.union(s1)
console.log(union.values());
