class Node {
  constructor(data, leftChild = null, rightChild = null) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let node = new Node(data);
    if (this.root === null) {
      this.root === data;
    } else if ()
  }
}

let node1 = new Node(15);
console.log(node1);