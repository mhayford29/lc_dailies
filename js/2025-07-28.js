// LC 23 Merge k Sorted Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null;
  lists.sort((a, b) => {
    if (a == null && b == null) return 0;
    if (a == null) return 1;
    if (b == null) return -1;
    return a.val - b.val;
  });
  let result = lists[0];
  for (let i = 1; i < lists.length; i++) {
    const currList = lists[i];
    let p1 = result;
    let p2 = currList;
    while (p1 && p1.next && p2) {
      if (p2.val > p1.next.val) {
        p1 = p1.next;
        continue;
      }
      const temp = p2;
      p2 = p2.next;
      temp.next = p1.next;
      p1.next = temp;
      p1 = p1.next;
    }
    if (p2) {
      p1.next = p2;
    }
  }
  return result;
};
