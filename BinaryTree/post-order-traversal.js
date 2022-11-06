

function postOrderTraversal1(Tree, res) {
  if (!Tree) return
  postOrderTraversal1(Tree.left, res)
  postOrderTraversal1(Tree.right, res)
  res.push(Tree.val)
}

function postOrderTraversal2(Tree) {
  const res = []
  const stack = []
  let lastVisited = Tree
  while (Tree || stack.length) {
    while (Tree) {
      stack.push(Tree)
      Tree = Tree.left
    }
    const node = stack[stack.length - 1]
    // 重点：先遍历了右儿子才能遍历自身
    if (!node.right || node.right === lastVisited) {
      stack.pop()
      lastVisited = node
      res.push(node.val)
    } else {
      Tree = node.right
    }
  }
  return res
}

const data = require('./generateBTree')
const r = []
postOrderTraversal1(data, r)
const res = postOrderTraversal2(data)

console.log(res)