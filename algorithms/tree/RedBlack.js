// Red-Black Tree
// A Red-Black Tree is a type of self-balancing binary search tree with additional properties that ensure the tree remains
// approximately balanced, thus providing guaranteed logarithmic time complexity for insertions, deletions, and lookups.

// Properties of a Red-Black Tree: To be remembered

// Node Color: Every node in the tree is either red or black.
// Root Node: The root node is always black.
// Red Nodes Constraint: No two consecutive red nodes can be adjacent. In other words, a red node cannot have a red parent or child.
// Black Height: Every path from a node to its descendant leaves must contain the same number of black nodes (known as the black height).
// Leaves are black: All leaf nodes (NIL or NULL nodes) are considered black.

// To maintain balance, Red-Black Trees use rotations similar to those in AVL Trees:

// Left Rotation: Rotates nodes left to maintain balance.
// Right Rotation: Rotates nodes right to maintain balance.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = "red"; // New nodes are always red by default
  }
}

// Condition for inserting Node into Red-black tree

// 1. If the tree is empty create a new node as root node with color black
// 2. If tree is not empty create a new node as leaf node with color red
// 3. If parent of new node is black then exit
// 4. If parent of new node is red then check the color of parent sibling of new node:
// 4 a. If color is black or null then do suitable rotation and recolor
// 4 b. If color is red then recolor and also check if parent's parent of new node is root node then recolor it and recheck

// Condition for Deletion of Node in Red-black tree

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  rotateLeft(node) {
    // Set new parent-child relationship
    let rightChild = node.right;
    node.right = rightChild.left;

    if (rightChild.left !== null) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;

    // Update root if needed
    if (node.parent === null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    // Perform rotation
    rightChild.left = node;
    node.parent = rightChild;
  }

  rotateRight(node) {
    // Set the parent-child relationship
    let leftChild = node.left;
    node.left = leftChild.right;

    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    // Update root if needed
    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.left) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }

    // Perform rotation
    leftChild.right = node;
    node.parent = leftChild;
  }

  // Utility function to fix Red-Black Tree properties after insertion
  fixInsert(node) {
    // Loop until the inserted node and its parent satisfy Red-Black properties
    while (node !== this.root && node.parent.color === "red") {
      let parent = node.parent;
      let grandparent = node.parent.parent;

      // If parent is the left child of the grandparent
      if (parent === grandparent.left) {
        let uncle = grandparent.right;

        // Case 1: Uncle is red (recoloring)
        if (uncle.color === "red" && uncle !== null) {
          grandparent.color = "red";
          parent.color = "black";
          uncle.color = "black";
          node = grandparent; // Move up the tree
        } else {
          // Case 2: Node is the right child (left-rotate parent)
          if (node === parent.right) {
            this.rotateLeft(parent);
            node = parent; // Move up the tree
            parent = node.parent; // Update parent reference
          }
          // Case 3: Node is the left child (right-rotate grandparent)
          parent.color = "black";
          grandparent.color = "red";
          this.rotateRight(grandparent);
        }
      } else {
        // Parent is the right child of the grandparent
        let uncle = grandparent.left;

        // Mirror Case 1: Uncle is red (recoloring)
        if (uncle !== null && uncle.color === "red") {
          grandparent.color = "red";
          uncle.color = "black";
          parent.color = "black";
          node = grandparent;
        } else {
          // Mirror Case 2: Node is the left child (right-rotate parent)
          if (node == parent.left) {
            this.rotateRight(parent);
            node = parent; // Move up the tree
            parent = node.parent; // Update parent reference
          }

          // Mirror Case 3: Node is the right child (left-rotate grandparent)
          parent.color = "black";
          grandparent.color = "red";
          this.rotateLeft(grandparent);
        }
      }
    }
    // Ensure that the root is always black
    this.root.color = "black";
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root == null) {
      // If tree is empty, make the new node the root
      newNode.color = "black";
      this.root = newNode;
      return;
    }

    let current = this.root;
    let parent = null;

    // Traverse the tree to find the correct position for the new node
    while (current != null) {
      parent = current;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    // Set the new node's parent
    newNode.parent = parent;

    // Determine whether to place the new node as the left or right child
    if (value < parent.value) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    // Fix the tree properties if violated
    this.fixInsert(newNode);
  }

  delete() {}
}
