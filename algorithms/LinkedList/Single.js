class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class SingleLinkedList {
  constructor() {
    (this.head = null), (this.size = 0);
  }

  insertNodeAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertNodeAtTail(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  deleteHead() {
    if (!this.head) return;
    let current = this.head;
    this.head = current.next;
    this.size--;
  }

  deleteTail() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next && current.next.next) {
      // iterating till second last node is found
      current = current.next;
    }

    current.next = null; // setting null to last node
    this.size--;
  }

  deleteNode(value) {
    if (!this.head) return;

    if (this.head.value == value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value == value) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  reverList() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }

  findValue(value) {
    if (!this.head) return;

    let current = this.head;
    while (current) {
      if (current.value == value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  printList() {
    let listValue = [];
    let current = this.head;

    while (current) {
      listValue.push(current.value);
      current = current.next;
    }

    console.log(listValue.join(" -> "));
  }

  printSize() {
    console.log(`Size of the list: ${this.size}`);
    return this.size;
  }
}

module.exports = {
  SingleLinkedList,
};
