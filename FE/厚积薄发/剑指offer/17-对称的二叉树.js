/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  let isMirror = (r1, r2) => {
    if (!r1 && !r2) { //如果都为null 对称
      return true;
    }

    if (!r1 || !r2) { //只要其中一个为空，另一个不为，则不对称
      return false;
    }

    return r1.val === r2.val && isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left)
  }

  return isMirror(root, root)
};
