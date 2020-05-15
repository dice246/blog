/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */

//node结构
let node = {
  val: 1,
  right:
    {
      val: 2,
      right: null,
      left: { val: 3, right: null, left: null }
    },
  left: {
    val: 5,
    left: null,
    right: {
      val: 8,
      left: null,
      right: null,
    }
  }
};


var BSTIterator = function(root) {
  this.root = root;
  this.result = this.init();
};

BSTIterator.prototype.init = function() {
  let res = [], stack = [];

  while (this.root || stack.length) {
    //如果left节点存在, 就入栈, 然后跳left
    if (this.root.left) {
      stack.push(this.root)
      this.root = this.root.left
    }
    // 如果left和right都不存在, 则保存当前节点, 然后出栈, 并让left等于null
    else if (!this.root.left && !this.root.right) {
      res.push(this.root.val)
      this.root = stack.pop()
      this.root && (this.root.left = null)
    }
    // 如果right节点存在, 并且left为null, 则保存当前节点, 然后跳right
    else if (this.root.right) {
      res.push(this.root.val)
      this.root = this.root.right
    }
  }

  res = res.sort((x, y) => x - y);
  return res;
};

/**
 * @return Array next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  if (this.result) {
    return this.result.shift();
  }
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  if (this.result.length) {
    return true;
  } else {
    return false;
  }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

new BSTIterator(node).result;