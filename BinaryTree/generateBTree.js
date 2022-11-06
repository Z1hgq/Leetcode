


function genTree(Tree, depth) {
  if (depth === 0) {
    Tree = null;
    return;
  }
  if (!Tree.val) {
    Tree.val = Math.ceil(Math.random() * 10);
    Tree.left = {};
    Tree.right = {};
    genTree(Tree.left, depth - 1);
    genTree(Tree.right, depth - 1);
  }
}

const tree = {}
genTree(tree, 3)

module.exports = {
  "val": 1,
  "left": {
    "val": 2,
    "left": { "val": 4, "left": null, "right": null },
    "right": { "val": 5, "left": null, "right": null }
  },
  "right": {
    "val": 3,
    "left": { "val": 6, "left": null, "right": null },
    "right": { "val": 7, "left": null, "right": null }
  }
}