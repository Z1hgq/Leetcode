/**
 * https://leetcode-cn.com/problems/sum-lists-lcci
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 缓存加数
    let addNum = 0;
    let head = new ListNode(-1);
    let pre = head;
    // 停止加的条件是两个数字都遍历完成了并且加数为0
    while (l1 || l2 || addNum != 0) { 
        // sum是本次相加的结果
        let sum = addNum;
        // l1没有遍历完成的话，那么就加上当前l1节点的值
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        // 同理l2
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        // next 下一个节点值是sum % 10, 注意用new ListNode去生成这个节点
        pre.next = new ListNode(sum % 10);
        // 把pre赋值为pre.next
        pre = pre.next;
        // 下一次的加数是sum / 10向下取整
        addNum = Math.floor(sum / 10); 
    }
    return head.next;
};