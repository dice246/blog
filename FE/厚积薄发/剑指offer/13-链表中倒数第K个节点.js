/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  //双指针
  var p = head, q = head
  while(p){
    if(k > 0){
      p = p.next//p先走k步，保证p、q之间相差k步
      k--
    }else{
      p = p.next;//当p走到结尾时，此时的q就是倒数的第k个
      q = q.next
    }
  }
  return q
};
