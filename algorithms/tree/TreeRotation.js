// Tree rotation is a crucial operation used in balancing binary search trees (BSTs) like AVL Trees,
// Red-Black Trees, or Splay Trees. Rotations are performed to maintain the tree's height balance,
// ensuring that operations like insertions, deletions, and lookups are efficient.

// Tree rotations are of two main types:

// Left Rotation (LL Rotation)
// Right Rotation (RR Rotation)
// There are also combinations of these basic rotations:

// Left-Right Rotation (LR Rotation)
// Right-Left Rotation (RL Rotation)

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const leftRotation = (node) => {
  if (!node) return node;

  let x = node.right; // new root
  let temp = x.left;

  // perform rotation
  x.left = node;
  node.right = temp;

  return x; // return new node
};

const rightRotation = (node) => {
  if (!node) return node;

  let x = node.left; // new root
  let temp = x.right;

  // perform rotation
  x.right = node;
  node.left = temp;

  // return new node
  return x;
};

// Example Usage
// Constructing a simple BST
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(25);

// Perform a left rotation on root
let newRoot = leftRotation(root);
// console.log(newRoot.value);

// Perform a right rotation on the new root
newRoot = rightRotation(newRoot);
// console.log(newRoot.value);
