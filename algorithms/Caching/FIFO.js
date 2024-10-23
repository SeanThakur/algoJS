// First-In-First-Out (FIFO) Caching
// The FIFO caching strategy is a simple approach where the cache evicts the oldest item (first inserted) when it reaches its capacity.
// The optimal approach for FIFO caching can be achieved using a queue data structure. A queue efficiently supports adding to the back (enqueue) and removing from the front (dequeue), which aligns perfectly with FIFO behavior.
// 1. Use an Array: JavaScript arrays can act as queues using push() for insertion and shift() for removal.
// 2. Linked List: Alternatively, using a linked list can be more efficient for large caches because shift() operation in arrays involves shifting elements, which can be costly for large arrays. A linked list avoids this overhead by simply updating pointers.

// Linked List Implementation
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class FIFOCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.cache = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  //add a node at the tail
  _addNode(node) {
    node.next = this.tail;
    node.prev = this.tail.prev;
    this.tail.prev.next = node;
    this.tail.prev = node;
  }

  _removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.cache.delete(node.key);
  }

  put(key, value) {
    if (this.cache.get(key)) {
      this._removeNode(this.cache.get(key));
      this.size--;
    }

    if (this.size >= this.capacity) {
      // remove head if capacity is full
      this._removeNode(this.head.next);
      this.size--;
    }

    const newNode = new Node(key, value);
    this._addNode(newNode);
    this.cache.set(key, newNode);
    this.size++;
  }

  get(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
  }

  display() {
    let curr = this.head.next;
    let list = [];
    while (curr != this.tail) {
      list.push(curr.value);
      curr = curr.next;
    }
    console.log(list);
    return;
  }
}
