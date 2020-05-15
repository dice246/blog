/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
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
  left: null
};


var preorderTraversal = function(root) {
  let res = [];

  if (!root) {
    return res;
  }

  let stack = [root];

  while(stack.length !== 0){
    var node = stack.pop();
    res.push(node.val);

    if(node.right){
      stack.push(node.right);
    }
    if(node.left){
      stack.push(node.left);
    }
  }

  return res;
};

console.log(preorderTraversal(node));