class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertToHead(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.size++;
    return newNode;
  }

  insertToTail(value) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.size++;
    return;
  }

  insertTo(value, idx) {
    if (idx > this.size || idx < 0) {
      console.log("not gona happen!");
      return;
    }

    if (idx == 0) {
      this.insertToHead(value);
      return;
    } else if (idx === this.size) {
      this.insertToTail(value);
      return;
    }

    let current = this.head;
    const newNode = new Node(value);
    let currentIdx = 0;
    while (current) {
      if (currentIdx === idx) {
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
        this.size++;
        return;
      }
      current = current.next;
      currentIdx++;
    }
  }

  deleteByValue(value) {
    if (!this.head) return;

    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (current == this.head && this.tail === current) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (this.tail === current) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  printList() {
    let listValue = [];
    let current = this.head;

    while (current) {
      listValue.push(current.value);
      current = current.next;
    }

    console.log(listValue.join(" <-> "));
    return;
  }

  printReverse() {
    let listValue = [];
    let current = this.tail;

    while (current) {
      listValue.push(current.value);
      current = current.prev;
    }

    console.log(listValue.join(" <-> "));
    return;
  }
}

module.exports = {
  DoublyLinkedList,
};
