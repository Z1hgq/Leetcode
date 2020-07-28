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
        // 持续向栈中加入左节点
        while (node) {
            stack.push(node);
            node = node.left;
        }
        var preNode = stack[stack.length - 1];
        // 从最左节点开始往回遍历, 先遍历父节点再遍历兄弟节点
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
 */
function postorderTraversal(node) {
    if (!node) {
        return;
    }
    var result = [];
    var stack = [];
    var lastVisit;
    while (node || stack.length) {
        // 持续向栈中加入左节点
        while (node) {
            stack.push(node);
            node = node.left;
        }
        var preNode = stack[stack.length - 1];
        if (!preNode.right || preNode.right == lastVisit) {
            stack.pop();
            result.push(preNode.val);
            lastVisit = preNode;
        }
        else {
            node = preNode.right;
        }
    }
    return result;
}
exports.postorderTraversal = postorderTraversal;
