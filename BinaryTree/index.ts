/**
 * 二叉树相关算法实现
 */

type TreeNode = {
    left: TreeNode | null;
    right: TreeNode | null;
    val: number;
};

/**
 * * 前序递归
 */
function getPreorderTraversalRec(node: TreeNode | null): Array<number> {
    const result = [];
    preorderTraversalRec(node, result);
    return result;
}
function preorderTraversalRec(node: TreeNode | null, result: Array<number>) {
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
function preorderTraversal(node: TreeNode | null): Array<number> {
    if (!node) {
        return;
    }
    const result = [];
    const stack = [];
    while (node || stack.length) {
        while (node) {
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
function inorderTraversal(node: TreeNode | null): Array<number> {
    if (!node) {
        return;
    }
    const result = [];
    const stack = [];
    while (node || stack.length) {
        // 持续向栈中加入左儿子
        while (node) {
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
function postorderTraversal(node: TreeNode | null): Array<number> {
    if (!node) {
        return;
    }
    const result = [];
    const stack = [];
    let lastVisit;
    while (node || stack.length) {
        // 持续向栈中加入左儿子
        while (node) {
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

/**
 * Deep First Search, 将结果通过参数传入
 */
function dfsRes(node: TreeNode | null): Array<number> {
    const result = [];
    dfsRec(node, result);
    return result;
}
function dfsRec(node: TreeNode | null, result: Array<number>): void {
    if (!node) {
        return;
    }
    result.push(node.val);
    dfsRec(node.left, result);
    dfsRec(node.right, result);
}
/**
 * 分治, 递归返回结果然后合并
 */
function dfs(node: TreeNode | null): Array<number> {
    let result = [];
    if (!node) {
        return result;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    result.push(node.val);
    result = result.concat(left).concat(right);
    return result;
}
/**
 * BFS 广度优先遍历
 */
function bfs(node: TreeNode | null): Array<number> {
    let result = [];
    if (!node) {
        return result;
    }
    // 队列先进先出, 保证先进去的节点先遍历
    const queue = [];
    queue.push(node);
    while (queue.length) {
        const list = [], l = queue.length;
        for (let i = 0; i < l; i++) {
            const level = queue[0];
            queue.shift();
            list.push(level.val);
            if (level.left) {
                queue.push(level.left);
            }
            if (level.right) {
                queue.push(level.right);
            }
        }
        result.push(list);
    }
    return result;
}
/**
 * 二叉树最大深度
 */
function maxDepth(BTree: TreeNode | null): number {
    if (!BTree) {
        return 0;
    }
    let left = maxDepth(BTree.left);
    let right = maxDepth(BTree.right);
    // +1是因为计算出来的高度是从0开始的
    if (left > right) {
        return left + 1;
    }
    return right + 1;
}
/**
 * 平衡二叉树判断
 * 思路：左边平衡 && 右边平衡 && 左右高度差 <= 1
 */
function isBalancedBTree(BTree: TreeNode | null): boolean {
    function maxDepth(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }
        let left = maxDepth(root.left);
        let right = maxDepth(root.right);
        if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
            return -1;
        }
        // +1是因为计算出来的高度是从0开始的
        if (left > right) {
            return left + 1;
        }
        return right + 1;
    }
    if (maxDepth(BTree) == -1) {
        return false;
    }
    return true;
}

/**
 * 最大子路径和
 * 思路：左边最大 / 右边最大 / (左右最大 + 根结点) 最大
 */
type Result = {
    maxPath: number,
    singlePath: number
}
function maxPathSum(root: TreeNode): number {
    const result:Result = maxPathSumHelper(root);
    return result.maxPath;
}

function maxPathSumHelper(root: TreeNode): Result {
    let result: Result = {
        singlePath: 0,
        maxPath: Number.MIN_VALUE
    };
    if (!root) {
        return {
            singlePath: 0,
            maxPath: Number.MIN_VALUE
        };
    }
    const left = maxPathSumHelper(root.left);
    const right = maxPathSumHelper(root.right);
    // 单边最大值
    if (left.singlePath > right.singlePath) {
        result.singlePath = Math.max(left.singlePath + root.val, 0);
    } else {
        result.singlePath = Math.max(right.singlePath + root.val, 0);
    }
    // 两边加根结点最大值
    const maxPath = Math.max(left.maxPath, right.maxPath);
    result.maxPath = Math.max(maxPath, left.singlePath + right.singlePath + root.val);
    return result;
}


export {
    TreeNode,
    getPreorderTraversalRec,
    preorderTraversal,
    inorderTraversal,
    postorderTraversal,
    dfsRes,
    dfs,
    bfs,
    maxDepth,
    isBalancedBTree,
    maxPathSum
};
