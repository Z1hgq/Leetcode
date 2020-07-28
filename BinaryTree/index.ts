/**
 * 二叉树相关算法实现
 */

type TreeNode = {
    left: TreeNode | null,
    right: TreeNode | null,
    val: number
}

/**
 * * 前序递归
 */
function getPreorderTraversalRec(node: TreeNode):Array<number> {
    const result = [];
    preorderTraversalRec(node, result);
    return result;
}
function preorderTraversalRec(node: TreeNode, result: Array<number>) {
    if (!node) {
        return;
    }
    // 先访问根结点，再递归访问左节点和右节点
    result.push(node.val);
    preorderTraversalRec(node.left, result);
    preorderTraversalRec(node.right, result);
}

/**
 * 先序非递归遍历
 */
function preorderTraversal(node: TreeNode):Array<number> {
    if (!node) {
        return;
    }
    const result = [];
    const stack = [];
    while (node || stack.length) {
        while(node) {
            stack.push(node);
            result.push(node.val);
            node = node.left;
        }
        // pop
        const preNode = stack[stack.length - 1];
        stack.pop();
        node = preNode.right;
    }
    return result;
}
/**
 * 中序非递归遍历
 */
function inorderTraversal(node: TreeNode):Array<number> {
    if (!node) {
        return;
    }
    const result = [];
    const stack = [];
    while (node || stack.length) {
        // 持续向栈中加入左儿子
        while(node) {
            stack.push(node);
            node = node.left;
        }
        const preNode = stack[stack.length - 1];
        // 从最左儿子开始往回遍历, 先遍历父节点再遍历兄弟节点
        result.push(preNode.val);
        node = preNode.right;
        // pop
        stack.pop();
    }
    return result;
}

/**
 * 后续遍历节点
 * 关键点在于先遍历左儿子，再遍历有儿子，最后遍历自己
 */
function postorderTraversal(node: TreeNode):Array<number> {
    if (!node) {
        return;
    }
    const result = [];
    const stack = [];
    let lastVisit;
    while (node || stack.length) {
        // 持续向栈中加入左儿子
        while(node) {
            stack.push(node);
            node = node.left;
        }
        const preNode = stack[stack.length - 1];
        if (!preNode.right || preNode.right == lastVisit) {
            // 如果当前遍历的节点没有右儿子或者右儿子已经遍历过了，那么直接输出该节点
            stack.pop();
            result.push(preNode.val);
            // 记录当前遍历的节点
            lastVisit = preNode;
        } else {
            // 如果当前遍历的节点有右儿子，则先遍历右儿子
            node = preNode.right;
        }
    }
    return result;
}

export {
    TreeNode,
    getPreorderTraversalRec,
    preorderTraversal,
    inorderTraversal,
    postorderTraversal
}