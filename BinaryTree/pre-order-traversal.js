

function preOrderTranversal1(Tree, res) {
  if (!Tree) return
  res.push(Tree.val)
  preOrderTranversal1(Tree.left, res)
  preOrderTranversal1(Tree.right, res)
}

function preOrderTranversal2(Tree) {
  const res = []
  const stack = []
  while (Tree || stack.length) {
    while (Tree) {
      stack.push(Tree)
      res.push(Tree.val)
      Tree = Tree.left
    }
    const node = stack.pop()
    Tree = node.right
  }
  return res
}

const data = require('./generateBTree')

const res = preOrderTranversal2(data)

console.log(res)