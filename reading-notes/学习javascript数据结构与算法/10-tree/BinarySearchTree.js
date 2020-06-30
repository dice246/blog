const Node = require('./Node')
const {compare, defaultCompare} = require('../utils')

/**
 * 二叉搜索树
 */
class BinarySearchTree {
  constructor() {
    this.compareFn = defaultCompare;
    this.root = null;
  }

  insert(key) {
    if (this.root) {
      this.insertNode(this.root, key)
    } else {
      this.root = new Node(key)
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === compare.LESS_THAN) {
      if (node.left) {
        this.insertNode(node.left, key)
      } else {
        node.left = new Node(key)
      }
    } else {
      if (node.right) {
        this.insertNode(node.right, key)
      } else {
        node.right = new Node(key)
      }
    }
  }

  search(key) {
  }

  /**
   * 中序遍历
   * @param cb
   */
  inOrderTraverse(cb) {
    this.inOrderTraverseNode(this.root, cb)
  }

  inOrderTraverseNode(node, cb) {
    if (node) {
      this.inOrderTraverseNode(node.left, cb);
      cb(node.key);
      this.inOrderTraverseNode(node.right, cb);
    }
  }

  /**
   * 先序遍历
   * @param cb
   */
  preOrderTraverse(cb) {
    this.preOrderTraverseNode(this.root, cb)
  }

  preOrderTraverseNode(node, cb) {
    if (node) {
      cb(node.key)
      this.preOrderTraverseNode(node.left, cb);
      this.preOrderTraverseNode(node.right, cb);
    }
  }

  /**
   * 后序遍历
   * @param cb
   */
  postOrderTraverse(cb) {
    this.postOrderTraverseNode(this.root, cb)
  }

  postOrderTraverseNode(node, cb) {
    if (node) {
      this.postOrderTraverseNode(node.left, cb)
      this.postOrderTraverseNode(node.right, cb)
      cb(node.key)
    }
  }

  min() {
    return this.minNode(this.root);
  }

  minNode (node) {
    let current = node;

    while (current && current.left) {
      current = current.left;
    }

    return current;
  }

  max() {
  }

  remove(key) {
  }
}


let bs = new BinarySearchTree();
bs.insert(11);
bs.insert(7);
bs.insert(15);
bs.insert(5);
bs.insert(3);
bs.insert(9);
bs.insert(8);
bs.insert(10);
bs.insert(13);
bs.insert(12);
bs.insert(14);
bs.insert(20);
bs.insert(18);
bs.insert(25);

console.log('中序遍历.......')
bs.inOrderTraverse(function (item) {
  console.log(item)
})

console.log('先序遍历.......')
bs.preOrderTraverse(function (item) {
  console.log(item)
})


console.log('后序遍历....')
bs.postOrderTraverse(function (item) {
  console.log(item)
})

console.log('min......')
console.log(bs.min());
