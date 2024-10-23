// LFU (Least Frequently Used)
// The LFU cache eviction policy removes the least frequently used items first.
// It's based on the idea that items used less frequently in the past are less likely to be accessed in the future.
// LFU tracks how often each item is used and evicts the item with the lowest frequency count when the cache is full.
// For the reference watch:- https://www.youtube.com/watch?v=0PSB9y8ehbk

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.minFreq = 0;
    this.keyToValue = new Map();
    this.keyToFreq = new Map();
    this.freqToKey = new Map();
  }

  _updateFreq(key) {
    const freq = this.keyToFreq.get(key);

    // Update frequency of the key
    this.keyToFreq.set(key, freq + 1);

    // remove the existing key from the frequency list
    this.freqToKey.get(freq).delete(key);

    // if the frequency list is empty the delete it
    if (this.freqToKey.get(freq).size === 0) {
      this.freqToKey.delete(freq);
      // Update minFreq if necessary
      if (this.minFreq === freq) {
        this.minFreq++;
      }
    }

    // Add the key to the new frequency set
    if (!this.freqToKey.has(freq + 1)) {
      this.freqToKey.set(freq + 1, new Set());
    }

    this.freqToKey.get(freq + 1).add(key);
  }

  removeLFU() {
    // get the key from mini frequency
    const leastFreq = this.freqToKey.get(this.minFreq);

    // take the first key from the set of list
    const removeKey = leastFreq.keys().next().value;

    // remove this key
    this.removeNode(removeKey);
  }

  removeNode(key) {
    // check if key exist
    if (!this.keyToValue.has(key)) return;

    // Get the frequency of the key to be removed
    const freq = this.keyToFreq.get(key);

    // Remove the key from the frequency set in freqToKeys
    this.keyToValue.delete(key);
    this.keyToFreq.delete(key);

    // Remove the key from the frequency set in freqToKeys
    this.freqToKey.get(freq).delete(key);

    // If the frequency set is now empty, remove it
    if (this.freqToKey.get(freq).size === 0) {
      this.freqToKey.delete(freq);
      if (this.minFreq === freq) {
        this.minFreq++;
      }
    }
  }

  put(key, value) {
    // if the capacity is zero?
    if (this.capacity == 0) return;

    // if the key is already present, then update the value and frequency
    if (this.keyToValue.has(key)) {
      this.keyToValue.set(key, value);
      this._updateFreq(key);
      return;
    }

    // if the size is full
    if (this.capacity === this.keyToValue.size) {
      this.removeLFU();
    }

    this.keyToValue.set(key, value);
    this.minFreq = 1;
    this.keyToFreq.set(key, 1);

    //check if frequency map doesn't exist for this?
    if (!this.freqToKey.has(1)) {
      this.freqToKey.set(1, new Set());
    }

    this.freqToKey.get(1).add(key);
  }

  get(key) {
    if (!this.keyToValue.has(key)) return -1;

    this._updateFreq(key);

    return this.keyToValue.get(key);
  }

  update(key, value) {
    if (!this.keyToValue.has(key)) return -1;

    this.keyToValue.set(key, value);
    return value;
  }
}
