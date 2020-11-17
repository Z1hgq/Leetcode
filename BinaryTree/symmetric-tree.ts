// Definition for a binary tree node.
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

// 递归
function isSymmetric(root: TreeNode | null): boolean {
    return isMirror(root, root);
}

function isMirror(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true;
    }
    if (!p || !q) {
        return false;
    }
    return (
        p.val === q.val &&
        isMirror(p.left, q.right) &&
        isMirror(p.right, q.left)
    );
}

// 非递归
function isMirror2 (u: TreeNode | null, v: TreeNode | null): boolean { 
    const q:(TreeNode | null)[] = [];
    q.push(u);
    q.push(v);
    while (q.length) {
        u = q.shift();
        v = q.shift();

        if (!u && !v) continue;
        if ((!u || !v) || (u.val !== v.val)) return false;
        
        q.push(u.left);
        q.push(v.right);
        q.push(u.right);
        q.push(v.left);
    }
    return true;
}
