// A Circular Linked List is a variation of a linked list where the last node points back to the first node
// instead of having a null reference
// This structure is particularly useful in applications like circular queues, round-robin scheduling, and buffering.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  // Check if the list is empty
  isEmpty() {
    return this.head === null;
  }

  // Insert at the end
  insertEnd(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.head.next = this.head; // Points to itself
    } else {
      let temp = this.head;
      while (temp.next !== this.head) {
        temp = temp.next;
      }
      temp.next = newNode;
      newNode.next = this.head; // Points back to the head
    }
  }

  // Insert at the beginning
  insertBegin(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.head.next = this.head; // Points to itself
    } else {
      newNode.next = this.head;
      let temp = this.head;
      while (temp.next !== this.head) {
        temp = temp.next;
      }
      temp.next = newNode; // Update last node to point to new node
      this.head = newNode; // Update head to new node
    }
  }

  // Delete a node
  deleteNode(value) {
    if (this.isEmpty()) {
      console.log("List is empty.");
      return;
    }

    let temp = this.head;
    let prev = null;

    // If the head is the node to be deleted
    if (temp.data === value) {
      if (temp.next === this.head) {
        this.head = null; // Only one element in the list
      } else {
        prev = this.head;
        while (prev.next !== this.head) {
          prev = prev.next;
        }
        prev.next = temp.next;
        this.head = temp.next;
      }
      return;
    }

    // Traverse and find the node
    while (temp.next !== this.head && temp.data !== value) {
      prev = temp;
      temp = temp.next;
    }

    if (temp.data === value) {
      prev.next = temp.next;
    } else {
      console.log("Node with value", value, "not found.");
    }
  }

  // Search for a node
  search(value) {
    if (this.isEmpty()) {
      return false;
    }
    let temp = this.head;
    do {
      if (temp.data === value) {
        return true;
      }
      temp = temp.next;
    } while (temp !== this.head);
    return false;
  }

  // Traverse the list
  traverse() {
    if (this.isEmpty()) {
      console.log("List is empty.");
      return;
    }
    let temp = this.head;
    do {
      console.log(temp.data);
      temp = temp.next;
    } while (temp !== this.head);
  }

  // Reverse the list
  reverse() {
    if (this.isEmpty() || this.head.next === this.head) {
      return; // No need to reverse if empty or only one node
    }

    let prev = null;
    let current = this.head;
    let next = null;

    do {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    } while (current !== this.head);

    // Fix the head node
    this.head.next = prev;
    this.head = prev;
  }
}
