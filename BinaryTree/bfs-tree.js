function bfsTree(Tree) {
  const res = []
  const stack = [Tree]
  while (stack.length) {
    const node = stack.shift()
    res.push(node.val)
    node.left && stack.push(node.left)
    node.right && stack.push(node.right)
  }
  return res
}

const data = require('./generateBTree')

console.log(bfsTree(data))