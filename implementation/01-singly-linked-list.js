// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list
    // Your code here
    const newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
    // Write your hypothesis on the time complexity of this method here
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this;
    }

    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.length++;

    return this;
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromHead() {
    // Remove node at head
    // Your code here
    if (!this.head) {
      return undefined;
    }

    const removedNode = this.head;

    this.head = this.head.next;
    this.length--;

    return removedNode;
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    if (!this.head) {
      return undefined;
    }

    let curr = this.head;
    let prev = null;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    if (prev === null) {
      // If there is only one node in the list
      this.head = null;
    } else {
      prev.next = null;
    }
    this.length--;
    return curr;
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    if (!this.head) {
      return undefined;
    }
    return this.head.value;
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    if (!this.head) {
      return;
    }

    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
