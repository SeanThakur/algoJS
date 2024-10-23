// LRU (Least Recently Used)
// Hashmap and doubly linked list is used as a data structure and to keep track of usage
// This approach ensures that both get and put operations can be performed in O(1) time
// When an entry exceeds its time-to-live (TTL), it is automatically evicted from the cache
// This allows the cache to automatically evict items not only based on their usage but also based on how long they've been in the cache.
// In an LRU cache, a doubly linked list is used to maintain the order of usage. The most recently accessed item is placed near the "head,"
// and the least recently accessed item is near the "tail."
// The "head" and "tail" are typically dummy nodes (sentinels) that help in easily managing the actual nodes in the list.
// These dummy nodes do not hold any real data but serve as boundary markers for the list.

// For an LRU cache, the main operations involve:

// 1. Accessing an item: If found in the cache, move it to the "head" to mark it as recently used.
// 2. Inserting a new item: Insert it right after the "head" (making it the most recently used).
// 3. Evicting an item: Remove the item right before the "tail" (which is the least recently used).

class Node {
  constructor(key, value, ttl) {
    (this.key = key), (this.value = value), (this.expiry = Date.now() + ttl); // Expiration Time
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity, ttl) {
    (this.capacity = capacity), (this.ttl = ttl);
    this.size = 0;
    this.cache = new Map();
    this.head = new Node(null, null, 0);
    this.tail = new Node(null, null, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _removeNode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }

  _addNodeToHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  _moveToHead(node) {
    this._removeNode(node);
    this._addNodeToHead(node);
  }

  _popTail() {
    let currTail = this.tail.prev;
    this._removeNode(currTail);
    return currTail;
  }

  _isExpired(node) {
    return Date.now() > node.expiry;
  }

  get(key) {
    let currNode = this.cache.get(key);
    if (!currNode || this._isExpired(currNode)) {
      if (currNode) {
        this.remove(key); // remove expired node
      }
      return -1;
    }
    this._moveToHead(currNode);
    return currNode.value;
  }

  put(key, value) {
    let node = this.cache.get(key);
    if (node) {
      node.expiry = this.ttl + Date.now();
      node.value = value;
      this._moveToHead(node);
    } else {
      const newNode = new Node(key, value, this.ttl);
      this.cache.set(key, newNode);
      this._addNodeToHead(newNode);
      this.size++;
      if (this.size > this.capacity) {
        let lruNode = this._popTail();
        this.cache.delete(lruNode.key);
        this.size--;
      }
    }
  }

  peek(key) {
    let node = this.cache.get(key);
    if (!node || this._isExpired(node)) {
      return -1;
    }
    return node.value;
  }

  remove(key) {
    const node = this.cache.get(key);
    if (!node) return false;
    this._removeNode(node);
    this.cache.delete(key);
    this.size--;
    return true;
  }

  getSize() {
    return this.size;
  }

  clear() {
    this.size = 0;
    this.cache.clear();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  updateTTL(key, newTtl) {
    const node = this.cache.get(key);
    if (!node || this._isExpired(node)) {
      return false;
    }
    node.expiry = Date.now() + newTtl;
    this._moveToHead(node);
    return true;
  }

  isExpired(key) {
    const node = this.cache.get(key);
    if (!node) {
      return true;
    }
    return this._isExpired(node);
  }
}
