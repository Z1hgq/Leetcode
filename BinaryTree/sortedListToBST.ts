class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return new TreeNode(head.val);
    }
    if (!head.next.next) {
        let t = new TreeNode(head.val);
        t.left = new TreeNode(head.next.val);
        return t;
    }
    let pre: ListNode = head;
    let p: ListNode = pre.next;
    let q = p.next;
    // 一次跳两个元素，找到链表的中间元素p
    while (p && q) {
        pre = pre.next;
        p = p.next;
        q = q.next.next;
    }
    console.log(p);
    // 
    pre.next = null;
    let root = new TreeNode(p.val);
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(p.next);
    return root;
}

const LL = {
    val: -10,
    next: {
        val: -3,
        next: {
            val: 0,
            next: {
                val: 5,
                next: {
                    val: 9,
                    next: null
                }
            }
        }
    }
}
console.log(JSON.stringify(sortedListToBST(LL)));
