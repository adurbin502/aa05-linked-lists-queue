const {
  SinglyLinkedNode,
} = require("./01-singly-linked-list");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.length;
  }

  dequeue() {
    if (!this.head) return null;

    const dequeuedNode = this.head;

    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.length--;
    return dequeuedNode.value;
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode,
};
