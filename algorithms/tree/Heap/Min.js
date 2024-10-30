// A Min Heap is a binary tree where:

// The value of each node is less than or equal to the values of its children.
// The root node contains the smallest element.
// A Min Heap is a complete binary tree, meaning every level except possibly the last is completely filled, and all nodes are as far left as possible.

// 1. Insert: Insert a new element and ensure the heap property is maintained by "bubbling up"
// the newly inserted element if it is smaller than its parent.
// Time complexity: O(logn)

// Algorithm Steps:

// Step 1: Add the new element at the end of the heap.
// Step 2: Compare the newly added element with its parent.
// Step 3: If the new element is smaller than its parent, swap them.
// Step 4: Repeat this process until the new element is in the correct position.

// 2. Extract Min: Remove the smallest element (root) and replace it with the last element in the heap,
// then "bubble down" this element to restore the heap property.
// Time complexity: O(logn)

// Algorithm Steps:

// Step 1: Remove the root node (minimum element).
// Step 2: Replace the root with the last element.
// Step 3: Compare the new root with its children and swap with the smaller child.
// Step 4: Repeat until the heap property is restored.

// 3. Peek Min: Get the smallest element (root) without removing it.
// Time complexity: O(1)

// Algorithm Steps:
// Step 1: Return the root element (smallest element) without removing it.

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParent(index) {
    return Math.floor((index - 1) / 2); // Formula for getting parent index in tree
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0]; // taking first value in the heap to return minimum value
    this.heap[0] = this.heap.pop(); // initializing last element to the the root element
    this.heapifyDown(0); // heapifing the tree with downward operation to satisfy min heap properties
    return min;
  }

  insert(value) {}

  heapifyDown(index) {}
}
