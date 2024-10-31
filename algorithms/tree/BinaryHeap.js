// A Binary Heap is used to efficiently implement a priority queue.
// We can use a Min Heap or Max Heap for the underlying structure.

// Algorithm Steps:

// Insert Operation:
// Add the new element at the end of the heap and "bubble up" to maintain the heap property.

// Extract Min/Max Operation:
// Remove the root (min or max) and replace it with the last element, then "bubble down" to maintain the heap property.

// Binary Heap Real-World Example:
// Heap Sort: We build a binary heap from the input array and repeatedly remove the root to place it in a sorted position.
// This is an efficient comparison-based sorting algorithm.

class PriorityQueue {
  // priority queue for min priority
  constructor() {
    this.heap = [];
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIdx(index) {
    return 2 * index + 1;
  }

  getRightChildIdx(index) {
    return 2 * index + 2;
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  insert(priority, value) {
    this.heap.push({ priority, value });
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIdx = this.getParent(index);
      if (this.heap[parentIdx].priority > this.heap[index].priority) {
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
    let smallestIdx = index;
    let leftIdx = this.getLeftChildIdx(index);
    let rightIdx = this.getRightChildIdx(index);

    if (
      leftIdx < this.heap.length &&
      this.heap[leftIdx].priority < this.heap[smallestIdx].priority
    ) {
      smallestIdx = leftIdx;
    }

    if (
      rightIdx < this.heap.length &&
      this.heap[rightIdx].priority < this.heap[smallestIdx].priority
    ) {
      smallestIdx = rightIdx;
    }

    if (smallestIdx !== index) {
      [this.heap[index], this.heap[smallestIdx]] = [
        this.heap[smallestIdx],
        this.heap[index],
      ];
      this.heapifyDown(smallestIdx);
    }
  }
}
