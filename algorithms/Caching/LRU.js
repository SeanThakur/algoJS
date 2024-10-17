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
    (this.key = key), (this.value = value), (this.ttl = new Date.now() + ttl); // Expiration Time
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity, ttl) {
    (this.capacity = capacity), (this.ttl = ttl);
    this.size = 0;
    this.head = new Node(null, null, 0);
    this.tail = new Node(null, null, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _removeNode(node) {}

  _addMoveToHead(node) {}

  _moveToHead(node) {}

  _popTail() {}

  _isExpired(node) {}

  get(key) {}

  put(key, value) {}

  peek(key) {}

  remove(key) {}

  size() {}

  clear() {}

  updateTTL(key, newTtl) {}

  isExpired(key) {}

  getAllItems() {}

  getAllKeys() {}
}
