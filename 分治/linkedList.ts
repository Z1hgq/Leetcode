type ListNode = {
    val: number,
    next: ListNode | null
}

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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    if (l1.val <= l2.val) {
        // 前者数更小的话，那么将l1的next指向l2
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        // 后者的数更小的话，则将后者的next指向l1
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};