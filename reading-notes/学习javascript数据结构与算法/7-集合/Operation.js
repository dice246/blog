const SetCustom = require('./Set')

class Operation extends SetCustom {
  constructor() {
    super();
  }

  union(otherSet) {
    let union = new Set();
    this.values().forEach(item => union.add(item));
    otherSet.values().forEach(item => union.add(item));

    return union;
  }

  intersection (otherSet) {
    let intersection = new SetCustom();
    let values = this.values();

    values.forEach(item => {
      if (otherSet.has(item)) {
        intersection.add(item)
      }
    })

    return intersection;
  }

  improveIntersection (otherSet) {
    const ii = new SetCustom();
    const values = this.values();
    const otherValues = otherSet.values();

    let bigValues, smallValues;

    if (values.length > otherValues.length) {
      bigValues = values;
      smallValues = otherValues;
    } else {
      bigValues = otherValues;
      smallValues = values;
    }

    smallValues.forEach(item => {
      if (bigValues.includes(item)) {
        ii.add(item)
      }
    })

    return ii;
  }

  difference(otherSet) {
    let result = new SetCustom();
    let values = this.values();

    values.forEach(item => {
      if (!otherSet.has(item)) {
        result.add(item)
      }
    })

    return result;
  }
}

const o1 = new Operation();
o1.add(1);
o1.add(2);
o1.add(3);

const s1 = new SetCustom();
s1.add(3);
s1.add(4);
s1.add(5);

const union  = o1.union(s1) // 并集
console.log('并集：', union.values());

const intersection = o1.intersection(s1);
console.log('交集：', intersection.values());

const ii = o1.improveIntersection(s1);
console.log('优化之后的交集: ', ii.values());

const d = o1.difference(s1);
console.log('差集： ', d.values());
