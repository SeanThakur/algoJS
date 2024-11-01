// A Trie (or prefix tree) is a special kind of tree data structure that is used to store strings,
// making it very efficient for search operations like prefix matching, autocomplete, and spell checking

// Trie Structure and Basic Operations
// We can create a basic Trie structure that supports the following operations:

// Insert a word
// Delete a word
// Search for a word
// Prefix search
// Prefix Start with count
// Prefix end with count
// Longest common prefix
// Longest common string
// Count number of strings
// Count Distinct Sub-string with empty substring
// Autocomplete suggestions
// Spell checker

class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.wordCount = 0;
  }

  insert(word) {
    let rootNode = this.root; // taking root as a reference
    for (let child of word) {
      // loop through entire word
      if (!rootNode.children[child]) {
        rootNode.children[child] = new TrieNode(); // if character doesn't exist then create a reference to it
      }
      rootNode = rootNode.children[child]; // add character to the root
    }
    // mark the endofword boolean to true to indicate the word is added and last character is end of the word
    if (!rootNode.endOfWord) {
      rootNode.endOfWord = true;
      this.wordCount++;
    }
  }

  search(word) {
    let rootNode = this.root;
    for (let char of word) {
      if (!rootNode.children[char]) {
        return false; // Character not found, word doesn't exist
      }
      rootNode = rootNode.children[char];
    }
    return rootNode.endOfWord; // Return true if it's the end of a word
  }

  prefix(word) {
    let rootNode = this.root;
    for (let char of word) {
      if (!rootNode.children[char]) {
        return false; // Character not found, prefix doesn't exist
      }
      rootNode = rootNode.children[char];
    }
    return true; // Prefix exists
  }

  delete(word) {
    this._deleteHelper(this.root, word, 0);
  }

  _deleteHelper(node, word, idx) {
    if (idx === word.length) {
      if (!node.endOfWord) return false; // word not present;
      node.endOfWord = false;
      this.wordCount--;
      return Object.keys(node.children).length === 0;
    }

    let char = word[idx];
    let childNode = node.children[char];

    if (!childNode) return false; // word not present

    // Recurse down the Trie
    const shoudNodebeDeleted = this._deleteHelper(childNode, word, idx + 1);

    // If true, delete the mapping for 'char' in 'node'
    if (shoudNodebeDeleted) {
      delete node.children[char];
      return Object.keys(node.children).length === 0 && !node.endOfWord;
    }

    return false;
  }

  countWords() {
    return this.wordCount;
  }

  // Count words starting with a given prefix
  prefixStartCount(prefix) {
    let rootNode = this.root;
    for (let char of prefix) {
      if (!rootNode.children[char]) return 0;
      rootNode = rootNode.children[char];
    }
    return this._countWord(rootNode);
  }

  _countWord(node) {
    let count = node.endOfWord ? 1 : 0;
    for (let char in node.children) {
      count += this._countWord(node.children[char]);
    }
    return count;
  }

  autoComplete(prefix) {
    let rootNode = this.root;
    for (let char of prefix) {
      if (!rootNode.children[char]) return [];
      rootNode = rootNode.children[char];
    }
    return this._collectionOfWord(rootNode, prefix);
  }

  _collectionOfWord(node, prefix) {
    let result = [];
    if (node.endOfWord) result.push(prefix);
    for (let char in node.children) {
      result.push(
        ...this._collectionOfWord(node.children[char], prefix + char)
      );
    }
    return result;
  }
}

// Usage Example
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
trie.insert("banana");

// console.log(trie.search("apple")); // true
// console.log(trie.prefixStartCount("app")); // 2
// console.log(trie.countWords()); // 4
// console.log(trie.autoComplete("ap")); // ["apple", "app", "apricot"]
