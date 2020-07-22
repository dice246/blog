/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  var json = JSON.stringify(root);

  json = json.replace(/left/g, 'left1')
  json = json.replace(/right/g, 'left')
  json = json.replace(/left1/g, 'right')

  return JSON.parse(json)
};
