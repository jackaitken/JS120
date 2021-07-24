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

  search(targetValue, node) {
    if (node === null || targetValue === node.data) {
      return node;
    } else if (targetValue < node.data) {
      return this.search(targetValue, node.left);
    } else {
      return this.search(targetValue, node.right);
    }
  }

  insert(value, node) {
    if (value < node.data) {
      if (node.left === null) {
        node.left = new TreeNode(value);
      } else {
        this.insert(value, node.left);
      }
    } else if (value > node.data) {
      if (node.right === null) {
        node.right = new TreeNode(value);
      } else {
        this.insert(value, node.right);
      }
    }
  }
}

let node1 = new TreeNode(10);
let node2 = new TreeNode(20);
let root = new TreeNode(15, node1, node2);
let tree1 = new Tree(root);

for (let i = 0; i < 1000; i ++) {
  let randNum = Math.floor(Math.random() * 100);
  tree1.insert(randNum, root);
}

console.log(tree1.search(32, root));