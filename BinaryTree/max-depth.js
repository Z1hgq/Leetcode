function maxDepth(Tree) {
  if (!Tree) return 0
  const left = maxDepth(Tree.left)
  const right = maxDepth(Tree.right)
  if (left > right) {
    return left + 1
  }
  return right + 1
}