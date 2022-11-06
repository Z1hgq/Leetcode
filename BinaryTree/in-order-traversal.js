

function inOrderTraversal1(Tree, res) {
  if (!Tree) return
  inOrderTraversal1(Tree.left, res)
  res.push(Tree.val)
  inOrderTraversal1(Tree.right, res)
}

function inOrderTraversal2(Tree) {
  const res = []
  const stack = []
  while (Tree || stack.length) {
    while (Tree) {
      stack.push(Tree)
      Tree = Tree.left
    }
    const node = stack.pop()
    res.push(node.val)
    Tree = node.right
  }
  return res
}

const data = require('./generateBTree')
const r = []
inOrderTraversal1(data, r)
const res = inOrderTraversal2(data)

console.log(res)