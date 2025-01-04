// Pre-order, In-order, and Post-order traversals are methods for visiting all the nodes in a binary tree.

// 1. Pre-order Traversal:
// Visit the Root, traverse the Left subtree, then traverse the Right subtree.
// Pre-order is useful when you want to create a copy of a tree. It’s also used in prefix expression evaluation in mathematical expressions.

// 2. In-order Traversal:
// Traverse the Left subtree, visit the Root, then traverse the Right subtree.
// In-order traversal is used when you want to retrieve the elements of a binary search tree in sorted order. It’s also helpful for generating infix expressions in mathematical trees.

// 3. Post-order Traversal:
// Traverse the Left subtree, traverse the Right subtree, then visit the Root.
// Post-order traversal is useful when you want to delete or free nodes in a tree, or evaluate postfix expressions.
// It’s also ideal for solving tasks where child nodes need to be processed before their parent node, like calculating the height of the tree.

// Pre-order: Root → Left → Right
// In-order: Left → Root → Right
// Post-order: Left → Right → Root

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeTraversal {
  constructor() {
    this.root = null;
  }

  // Method to insert a new node in to Tree
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        // go to left part of the tree
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        // go to right part of the tree
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  preOrder(node = this.root) {
    if (!node) return;
    console.log("Node", node.value); // visiting root
    this.preOrder(node.left); // visiting left side of the tree
    this.preOrder(node.right); // visiting right side of the tree
  }

  // inorder of any Binary Tree is always sorted
  inOrder(node = this.root) {
    if (!node) return;
    this.inOrder(node.left); // visiting left side of the tree
    console.log(node.value); // visiting root
    this.inOrder(node.right); // visiting right side of the tree
  }

  postOrder(node = this.root) {
    if (!node) return;
    this.postOrder(node.left); // visiting left side of the tree
    this.postOrder(node.right); // visiting right side of the tree
    console.log(node.value);
  }
}

module.exports = {
  BinaryTreeTraversal,
};
