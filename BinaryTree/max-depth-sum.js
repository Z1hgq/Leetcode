// Math.max(左边最大深度 + 父节点, 右边最大深度 + 父节点)
function maxPathSum(Tree) {
  if (!Tree) return 0
  const left = Math.max(maxPathSum(Tree.left), 0)
  const right = Math.max(maxPathSum(Tree.right), 0)
  if (left > right) {
    return left + Tree.val
  }
  return right + Tree.val
}

const data = require('./generateBTree')

console.log(maxPathSum(data))