// LC 143 Reorder List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // Set halfway pointer
  let p1 = head;
  let p2 = head;
  while (p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  const half = p1.next;
  p1.next = null;

  // Reverse 2nd half
  let reversed = null;
  let curr = half;
  while (curr) {
    const temp = curr;
    curr = curr.next;
    temp.next = reversed;
    reversed = temp;
  }

  // Merge
  p1 = head;
  p2 = reversed;
  while (p2) {
    const tempH = p1.next;
    p1.next = p2;
    const tempR = p2.next;
    p1.next.next = tempH;
    p2 = tempR;
    p1 = p1.next.next;
  }
};
