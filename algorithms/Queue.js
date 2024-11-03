// A Queue is a First-In-First-Out (FIFO) data structure, meaning the first element added is the first one to be removed.
// Queues are used in scenarios where we need to process items in the order they arrive, such as task scheduling and buffering.

// Key Queue Operations:
// Enqueue: Add an element to the back of the queue.
// Dequeue: Remove the front element from the queue.
// Front: Get the front element without removing it.
// isEmpty: Check if the queue is empty.
// size: Get the number of elements in the queue.

class Queue {
  constructor() {
    this.item = [];
  }

  enqueue(value) {
    this.item.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    return this.item.shift();
  }

  font() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    return this.item[0];
  }

  isEmpty() {
    return this.item.length === 0;
  }

  size() {
    return this.item.length;
  }
}
