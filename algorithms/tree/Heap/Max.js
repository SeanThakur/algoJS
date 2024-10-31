// A Max Heap is the opposite of a Min Heap. Here:

// The value of each node is greater than or equal to the values of its children.
// The root node contains the largest element.
// Like the Min Heap, it is a complete binary tree

// Operations

// 1.  Insert: Insert a new element and "bubble up" to ensure the parent is greater than the child
// Time complexity: O(logn)

// Algorithm step
// Step 1: Add the new element at the end of the heap.
// Step 2: Compare the newly added element with its parent.
// Step 3: If the new element is larger than its parent, swap them.
// Step 4: Repeat this process until the new element is in the correct position.

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  insert(value) {
    this.heap.push(value);
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIdx = this.getParent(index);
      if (this.heap[parentIdx] < this.heap[index]) {
        [this.heap[parentIdx], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIdx],
        ];
        index = parentIdx;
      } else {
        break;
      }
    }
  }

  heapifyDown(index) {
    let largestIdx = index;
    let leftIdx = 2 * index + 1;
    let rightIdx = 2 * index + 2;

    if (
      leftIdx < this.heap.length &&
      this.heap[leftIdx] > this.heap[largestIdx]
    ) {
      largestIdx = leftIdx;
    }

    if (
      rightIdx < this.heap.length &&
      this.heap[rightIdx] > this.heap[largestIdx]
    ) {
      largestIdx = rightIdx;
    }

    if (largestIdx !== index) {
      [this.heap[index], this.heap[largestIdx]] = [
        this.heap[largestIdx],
        this.heap[index],
      ];
      this.heapifyDown(largestIdx);
    }
  }
}
