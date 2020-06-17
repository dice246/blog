const Node = require('./Node');

class LinkedList {
  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  push(element) {
    const node = new Node(element);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  removeAt(index) {
    if (index > 0 && index < this.count) {
      let current = this.head;

      if (index == 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      this.count--;
      return current.element;
    } else {
      return undefined;
    }
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head; // {2}
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(element, index) {
    if (index > 0 && index <= this.head) {
      const node = new Node(element);
      if (index == 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }

      this.count++;
      return true;
    }

    return false;
  }

  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.count && current !== null; i++) {
      if (element === current.element) {
        return i;
      }

      current = current.next;
    }

    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index)
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next; // {3}
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

