//Binary Search Tree

// A Binary Search Tree (BST) is a binary tree with the following properties:

// Node Structure: Each node contains a key (or value), and references to its left and right children.
// Left Subtree: The left subtree of a node contains only nodes with values less than the node’s key.
// Right Subtree: The right subtree of a node contains only nodes with values greater than the node’s key.
// No Duplicate Values: Typically, BSTs don’t contain duplicate values, but this can be customized.

// Time Complexity:
// Search/Insert/Delete: O(h) where h is the height of the tree. In a balanced BST, this results in O(log n).
// Space Complexity:
// Recursive Traversal: O(h) due to stack space for recursion. In an iterative approach, it’s O(1) additional space.
// If a BST is unbalanced (all nodes have only one child), it degenerates into a linked list, resulting in O(n) operations.
// For this reason, balanced BSTs such as AVL or Red-Black Trees are often used in practice.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const insertNode = (root, value) => {
  if (!root) return new TreeNode(value); //If the child node does not exist, insert the value at that position.

  if (value < root.value) {
    root.left = insertNode(root.left, value);
  }
  if (value > root.value) {
    root.right = insertNode(root.right, value);
  }

  return root;
};

const searchNode = (root, value) => {
  if (!root || root.value === value) return root;

  if (value < root.value) {
    return searchNode(root.left, value);
  } else if (value > root.value) {
    return searchNode(root.right, value);
  }
};

const deleteNode = (root, value) => {
  if (!root) return null; // Base case: if the root is null, return null.

  // 1. Search for the node to be deleted
  if (value < root.value) {
    root.left = deleteNode(root.left, value);
  } else if (value > root.value) {
    root.right = deleteNode(root.right, value);
  } else {
    // Node to be deleted found

    // Case 1: Node with no children (leaf node)
    if (!root.left && !root.right) {
      return null; // Remove the node
    }

    // Case 2: Node with one children

    if (!root.left) return root.right; // Only right child exists
    if (!root.right) return root.left; // Only left child exists

    // Case 3: Node with two children
    // Find the in-order successor (minimum value in the right subtree)
    let successor = getMinimumValue(root.right);
    root.value = successor.value; // Replace the node's value with successor's value
    // Delete the successor node
    root.right = deleteNode(root.right, successor.value);
  }
  return root;
};

const getMinimumValue = (node) => {
  while (node.left) {
    // iterate towards end of the left side of the tree to find the minimum value
    node = node.left;
  }

  return node;
};

const validBST = (root) => {
  return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

const isValid = (root, minVal, maxVal) => {
  if (root == null) return true;
  if (root.value >= maxVal || root.value <= minVal) {
    return false;
  }

  return (
    isValid(root.left, minVal, root.value) &&
    isValid(root.right, root.value, maxVal)
  );
};
