// MRU (Most Recently Used)
// the Most Recently Used (MRU) caching algorithm is a strategy where the cache evicts the most recently accessed item first when the cache reaches its capacity.
// MRU is suitable for scenarios where the most recently accessed data is unlikely to be needed again. Typical use cases include:
// File System cache
// Database buffer cache
// media streaming
// we can use a doubly linked list to store the cache items and a hash map to maintain key-node references. This will allow O(1) operations for insertion, deletion, and accessing the most recently used item.

class Node {
  constructor(key, value, expirationTime = null) {
    this.key = key;
    this.value = value;
    this.expirationTime = expirationTime;
    this.prev = null;
    this.next = null;
  }
}

class MRUCache {
  constructor(capacity, defaultTtl = null) {
    this.capacity = capacity;
    this.defaultTTL = defaultTtl;
    this.cache = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _addNode(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  _removeNode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }

  _isExpired(key) {
    let currNode = this.cache.get(key);
    return (
      currNode.expirationTime !== null && Date.now() > currNode.expirationTime
    );
  }

  get(key) {
    if (!this.cache.get(key)) {
      return -1;
    }
    let curr = this.cache.get(key);
    if (this._isExpired(curr)) {
      this._removeNode(curr);
      this.cache.delete(key);
      return -1;
    }
    // update the node as the most recently used
    this._removeNode(curr);
    this._addNode(curr);
    return curr.value;
  }

  put(key, value, ttl = this.defaultTTL) {
    if (this.cache.get(key)) {
      // if key exist the remove it first
      this._removeNode(this.cache.get(key));
    } else if (this.cache.size >= this.capacity) {
      // If the cache is full, remove the most recently used item
      let currMRU = this.head.next;
      this._removeNode(currMRU);
      this.cache.delete(currMRU.key);
    }
    // calculate expiration time
    let expiryTime = ttl ? Date.now() + ttl : null;
    let newNode = new Node(key, value, expiryTime);
    this._addNode(newNode);
    this.cache.set(key, newNode);
  }

  resize(newCapacity) {
    this.capacity = newCapacity;
    // remove if our current size is larger than the capacity;

    while (this.cache.size > this.capacity) {
      let currMRU = this.head.next;
      this._removeNode(currMRU);
      this.cache.delete(currMRU.key);
    }
  }

  display() {
    let currNode = this.head.next;
    let listNode = [];
    while (currNode != this.tail) {
      listNode.push([currNode.key, currNode.value]);
      currNode = currNode.next;
    }
    console.log(listNode);
    return;
  }
}
