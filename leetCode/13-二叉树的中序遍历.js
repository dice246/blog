/**'
 * url: https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * @param root
 */
let node = {
  val: 1,
  right:
    {
      val: 3,
      right: null,
      left: { val: 4, right: null, left: null }
    },
  left: {
    val: 2
  }
};

const inorderTraversal = root => {
  let res = [], stack = []
  while (root || stack.length) {
    //如果left节点存在, 就入栈, 然后跳left
    if (root.left) {
      stack.push(root)
      root = root.left
    }
    // 如果left和right都不存在, 则保存当前节点, 然后出栈, 并让left等于null
    else if (!root.left && !root.right) {
      res.push(root.val)
      root = stack.pop()
      root && (root.left = null)
    }
    // 如果right节点存在, 并且left为null, 则保存当前节点, 然后跳right
    else if (root.right) {
      res.push(root.val)
      root = root.right
    }
  }
  return res
};

console.log(inorderTraversal(node));