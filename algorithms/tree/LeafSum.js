// Problem Analysis
// Input: A tree structure where each node contains a value and potentially has zero or more children.
// Output: The sum of all leaf nodes' values.
// Algorithm
// Here, we’ll break down the problem for two different tree types:

// Binary Tree (where each node has at most two children).
// N-ary Tree (where each node can have zero or more children).

// 1. Binary Tree

// 1. a:) Recursive Approach

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const sumOfLeafBT = (node) => {
  if (node === null) {
    return 0;
  }

  if (node.left === null && node.right === null) {
    return node.value;
  }

  const leftSum = sumOfLeafBT(node.left);
  const rightSum = sumOfLeafBT(node.right);

  return leftSum + rightSum;
};

// Example Usage:
// Constructing a binary tree:
//       5
//     /   \
//    3     8
//   / \   / \
//  1   4 7   9

// const root = new TreeNode(5);
// root.left = new TreeNode(3, new TreeNode(1), new TreeNode(4));
// root.right = new TreeNode(8, new TreeNode(7), new TreeNode(9));

// console.log(sumOfLeafBT(root));

// 1. b:) Iterative Approach using stack

const sumOfLeafIterativeBT = (root) => {
  if (root === null) return 0;

  const stack = [root]; // Use stack to store nodes for traversal
  let leafSum = 0;

  while (stack.length > 0) {
    let node = stack.pop();

    if (node.left === null && node.right === null) {
      leafSum += node.value;
    }

    if (node.left !== null) {
      stack.push(node.left);
    }

    if (node.right !== null) {
      stack.push(node.right);
    }
  }

  return leafSum;
};

// console.log(sumOfLeafIterativeBT(root));

// 2. a:) For an N-ary Tree Recursive Approach

class NodeTree {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

const sumOfLeafNary = (node) => {
  if (node === null) return 0;

  if (node.children.length === 0) {
    return node.value;
  }

  let totalSum = 0;

  for (let child of node.children) {
    totalSum += sumOfLeafNary(child);
  }

  return totalSum;
};

// Example Usage:
// Constructing an N-ary tree:
//       10
//     /  |  \
//    2   3   4
//       / \
//      5   6

// const naryRoot = new NodeTree(10, [
//     new NodeTree(2),
//     new NodeTree(3, [new NodeTree(5), new NodeTree(6)]),
//     new NodeTree(4)
//   ]);

//   console.log(sumOfLeafNary(naryRoot));

const sumOfLeafNaryIterative = (root) => {
  if (root === null) return 0;

  const stack = [root];
  let leafSum = 0;

  while (stack.length > 0) {
    const node = stack.pop();

    if (!node.children.length) {
      leafSum += node.value;
    } else {
      // Push all children of the node onto the stack
      for (let child of node.children) {
        stack.push(child);
      }
    }
  }

  return leafSum;
};

// console.log(sumOfLeafNaryIterative(naryRoot));
