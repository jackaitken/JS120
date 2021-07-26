class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  read(index) {
    currentNode = this.head;
    currentIndex = 0;

    while (currentIndex < index) {
      if (currentNode === null) {
        return currentNode
      } else {
        currentNode = currentNode.next;
        currentIndex += 1;
      }
    }
  }
}

let first_node = new ListNode(10);
let list = new LinkedList(first_node);

console.log(list);