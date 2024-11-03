// A Stack is a Last-In-First-Out (LIFO) data structure, meaning the last element added is the first one to be removed.
// This makes it ideal for tasks like reversing, tracking previous states, and maintaining function calls.

// Key Stack Operations:
// Push: Add an element to the top of the stack.
// Pop: Remove the top element from the stack.
// Peek: Get the top element without removing it.
// isEmpty: Check if the stack is empty.
// size: Get the number of elements in the stack.

class Stack {
  constructor() {
    this.item = [];
  }

  push(value) {
    this.item.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return "stack is empty";
    }

    return this.item.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "stack is empty";
    }

    return this.isEmpty[this.item.length - 1];
  }

  isEmpty() {
    return this.item.length === 0;
  }

  size() {
    return this.item.length;
  }

  print() {
    console.log(this.item.join(" "));
  }
}
