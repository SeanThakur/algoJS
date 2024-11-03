// A deque (pronounced "deck") stands for double-ended queue. It’s a data structure that allows insertion and deletion of elements
// from both ends, making it more flexible than a stack, queue, or circular queue.
// Deques are commonly implemented in applications where both ends need access, such as
// sliding windows, palindrome checks, or when simulating back-and-forth browsing history.

// Types of Deque Operations
// In a deque, you have four primary operations:

// Add to Front: Insert an element at the front.
// Add to Back: Insert an element at the back.
// Remove from Front: Remove an element from the front.
// Remove from Back: Remove an element from the back.

// When to Use Deques
// Deques are particularly useful when you need both FIFO (First In, First Out) and LIFO (Last In, First Out) capabilities. Some use cases include:

// Sliding Window problems in arrays or strings.
// Palindrome Checker, where you need to check characters from both ends.
// Back-and-Forth Navigation, as in browser history.

class Deque {
  constructor() {
    this.item = [];
  }

  addFront(value) {
    this.item.unshift(value);
  }

  addBack(value) {
    this.item.push(value);
  }

  removeFront() {
    if (this.isEmpty()) {
      return "Empty";
    }

    return this.item.shift();
  }

  removeBack() {
    if (this.isEmpty()) {
      return "Empty";
    }

    return this.item.pop();
  }

  size() {
    return this.item.length;
  }

  isEmpty() {
    return this.item.length === 0;
  }

  peekFront() {
    return this.item[0];
  }

  peekBack() {
    return this.item[this.item.length - 1];
  }
}
