// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!

    // Add node of val to head of linked list
    let newNode = new DoublyLinkedNode(val);

    if (this.length > 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
    // Write your hypothesis on the time complexity of this method here
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (this.length > 0) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromHead() {
    if (!this.head) return undefined;

    let value = this.head.value;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;

    return value;
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    if (!this.tail) return undefined;

    let value = this.tail.value;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;

    return value;
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    return this.head ? this.head.value : undefined;
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtTail() {
    return this.tail ? this.tail.value : undefined;
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
