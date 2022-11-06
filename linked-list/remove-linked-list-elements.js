/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function removeElements(head, val) {
  let cur = { val: null, next: head }
  let result = cur
  let pre = cur
  cur = cur.next
  while(cur) {
      if (cur.val === val) {
          pre.next = cur.next
          cur = pre.next
      } else {
          pre = pre.next
          cur = cur.next
      }
  }
  return result.next
};