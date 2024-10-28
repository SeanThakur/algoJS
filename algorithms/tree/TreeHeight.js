// For both Binary and N-ary trees, the height can be calculated recursively
// by exploring all children and finding the maximum depth.

// Binary

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const dfsTreeHeight = (node) => {
  if (node === null) {
    return -1;
  }

  // Calculate the height of left and right subtrees
  const leftHeight = dfsTreeHeight(node.left);
  const rightHeight = dfsTreeHeight(node.right);

  // Height of the tree is 1 + max of left and right subtree heights
  return 1 + Math.max(leftHeight, rightHeight);
};

class NaryTreeNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

const dfsNaryTreeHeight = (node) => {
  if (node === null) return -1;

  let maxChildHeight = -1;

  for (let child of node.children) {
    const childHeight = dfsNaryTreeHeight(child);
    maxChildHeight = Math.max(childHeight, maxChildHeight);
  }
  return 1 + maxChildHeight;
};
