/**
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/
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
    let curA = headA,
        curB = headB,
        lenA = 0,
        lenB = 0;
    // 求两个链表的长度
    while (curA) {
        lenA++;
        curA = curA.next;
    }
    while (curB) {
        lenB++;
        curB = curB.next;
    }
    // 把两个链表的位置从后往前对齐
    let toBeStart = Math.abs(lenA - lenB);
    curA = headA;
    curB = headB;
    if (lenA > lenB) {
        while (toBeStart > 0) {
            curA = curA.next;
            toBeStart--;
        }
    } else {
        while (toBeStart > 0) {
            curB = curB.next;
            toBeStart--;
        }
    }
    // 至此两个链表从后往前对齐了
    while (curA && curB) {
        if (curA == curB) return curA;
        curA = curA.next;
        curB = curB.next;
    }
    return null;
};