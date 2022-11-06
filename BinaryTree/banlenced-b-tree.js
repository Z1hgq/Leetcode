
function getDepth(Tree) {
  if (!Tree) return 0
  const left = getDepth(Tree.left)
  const right = getDepth(Tree.right)
  // 左平衡 && 右平衡 && 左右高度 <= 1
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1
  }
  if (left > right) {
    return left + 1
  }
  return right + 1
}

function banlencedBTree(Tree) {
  return getDepth(Tree) !== -1
}

const data = require('./generateBTree')

console.log(banlencedBTree(data))
