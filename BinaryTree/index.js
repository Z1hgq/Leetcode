"use strict";
/**
 * 二叉树相关算法实现
 */
exports.__esModule = true;
/**
 * * 前序递归
 */
function getPreorderTraversalRec(node) {
    var result = [];
    preorderTraversalRec(node, result);
    return result;
}
exports.getPreorderTraversalRec = getPreorderTraversalRec;
function preorderTraversalRec(node, result) {
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
function preorderTraversal(node) {
    if (!node) {
        return;
    }
    var result = [];
    var stack = [];
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            result.push(node.val);
            node = node.left;
        }
        // pop
        var preNode = stack[stack.length - 1];
        stack.pop();
        node = preNode.right;
    }
    return result;
}
exports.preorderTraversal = preorderTraversal;
/**
 * 中序非递归遍历
 */
function inorderTraversal(node) {
    if (!node) {
        return;
    }
    var result = [];
    var stack = [];
    while (node || stack.length) {
        // 持续向栈中加入左儿子
        while (node) {
            stack.push(node);
            node = node.left;
        }
        var preNode = stack[stack.length - 1];
        // 从最左儿子开始往回遍历, 先遍历父节点再遍历兄弟节点
        result.push(preNode.val);
        node = preNode.right;
        // pop
        stack.pop();
    }
    return result;
}
exports.inorderTraversal = inorderTraversal;
/**
 * 后续遍历节点
 * 关键点在于先遍历左儿子，再遍历有儿子，最后遍历自己
 */
function postorderTraversal(node) {
    if (!node) {
        return;
    }
    var result = [];
    var stack = [];
    var lastVisit;
    while (node || stack.length) {
        // 持续向栈中加入左儿子
        while (node) {
            stack.push(node);
            node = node.left;
        }
        var preNode = stack[stack.length - 1];
        if (!preNode.right || preNode.right == lastVisit) {
            // 如果当前遍历的节点没有右儿子或者右儿子已经遍历过了，那么直接输出该节点
            stack.pop();
            result.push(preNode.val);
            // 记录当前遍历的节点
            lastVisit = preNode;
        }
        else {
            // 如果当前遍历的节点有右儿子，则先遍历右儿子
            node = preNode.right;
        }
    }
    return result;
}
exports.postorderTraversal = postorderTraversal;
/**
 * Deep First Search, 将结果通过参数传入
 */
function dfsRes(node) {
    var result = [];
    dfsRec(node, result);
    return result;
}
exports.dfsRes = dfsRes;
function dfsRec(node, result) {
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
function dfs(node) {
    var result = [];
    if (!node) {
        return result;
    }
    var left = dfs(node.left);
    var right = dfs(node.right);
    result.push(node.val);
    result = result.concat(left).concat(right);
    return result;
}
exports.dfs = dfs;
/**
 * BFS 广度优先遍历
 */
function bfs(node) {
    var result = [];
    if (!node) {
        return result;
    }
    // 队列先进先出, 保证先进去的节点先遍历
    var queue = [];
    queue.push(node);
    while (queue.length) {
        var list = [], l = queue.length;
        for (var i = 0; i < l; i++) {
            var level = queue[0];
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
exports.bfs = bfs;
/**
 * 二叉树最大深度
 */
function maxDepth(BTree) {
    if (!BTree) {
        return 0;
    }
    var left = maxDepth(BTree.left);
    var right = maxDepth(BTree.right);
    // +1是因为计算出来的高度是从0开始的
    if (left > right) {
        return left + 1;
    }
    return right + 1;
}
exports.maxDepth = maxDepth;
/**
 * 平衡二叉树判断
 * 思路：左边平衡 && 右边平衡 && 左右高度差 <= 1
 */
function isBalancedBTree(BTree) {
    function maxDepth(root) {
        if (!root) {
            return 0;
        }
        var left = maxDepth(root.left);
        var right = maxDepth(root.right);
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
exports.isBalancedBTree = isBalancedBTree;
function maxPathSum(root) {
    var result = maxPathSumHelper(root);
    return result.maxPath;
}
exports.maxPathSum = maxPathSum;
function maxPathSumHelper(root) {
    var result = {
        singlePath: undefined,
        maxPath: undefined
    };
    if (!root) {
        return {
            singlePath: 0,
            maxPath: 0
        };
    }
    var left = maxPathSumHelper(root.left);
    var right = maxPathSumHelper(root.right);
    // 单边最大值
    if (left.singlePath > right.singlePath) {
        result.singlePath = Math.max(left.singlePath + root.val, 0);
    }
    else {
        result.singlePath = Math.max(right.singlePath + root.val, 0);
    }
    // 两边加根结点最大值
    var maxPath = Math.max(left.maxPath, right.maxPath);
    result.maxPath = Math.max(maxPath, left.singlePath + right.singlePath + root.val);
    console.log(root, result.maxPath);
    return result;
}
