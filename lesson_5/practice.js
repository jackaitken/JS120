class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }
}

let node1 = new TreeNode(10);
let node2 = new TreeNode(20);
let root = new TreeNode(15, node1, node2);
let tree1 = new Tree(root);

console.log(tree1);
