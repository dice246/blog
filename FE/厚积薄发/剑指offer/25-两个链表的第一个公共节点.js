/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let setA = new Set();

  if (!headA || !headB) {
    return null
  }

  let nodeA = headA;

  while (nodeA) {
    setA.add(nodeA);
    nodeA = nodeA.next;
  }

  let nodeB = headB;

  while (nodeB) {
    if (setA.has(nodeB)) {
      return nodeB;
    }

    nodeB = nodeB.next;
  }

  return null;
};
