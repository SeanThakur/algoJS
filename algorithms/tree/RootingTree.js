// Rooting a tree involves selecting a specific node as the root and reorienting the tree such that
// every node has a clear parent-child relationship relative to the new root.
// Once rooted, each node will know its parent, and we can explore paths from the root to any node.

// The most common use case of rooting a tree is transforming an unrooted representation (e.g., an adjacency list)
// into a tree-like structure with a clear root. This is particularly useful in scenarios involving tree traversals or
// when analyzing hierarchical relationships.

// Approach
// Use a Depth-First Search (DFS) or Breadth-First Search (BFS) starting from the selected root node.
// While traversing, mark each node’s parent as the node from which we came.
// Transform the adjacency list to show parent-child relationships.

// Assumptions
// The tree is represented using an adjacency list in the form of an object or map.
// The tree is connected and has no cycles (a valid tree).
// We choose a node to act as the root.

const rootTree = (adjList, root) => {
  // Create a new tree representation with a clear parent-child relationship
  let rootedTree = {};

  // DFS and construct the rooted tree
  const dfs = (node, parent) => {
    // Initialize the current node's entry in the rooted tree
    rootedTree[node] = [];

    for (let child of adjList[node]) {
      // If the neighbor is not the parent (to avoid going back in the tree)
      if (child !== parent) {
        // Add the neighbor to the current node's children in the rooted tree
        rootedTree[node].push(child);
        // Recursively call DFS on the neighbor with the current node as its parent
        dfs(child, node);
      }
    }
  };

  dfs(root, null);

  return rootedTree;
};

// Example Usage
const treeAdjList = {
  0: [1, 2],
  1: [0, 3, 4],
  2: [0],
  3: [1],
  4: [1, 5, 6],
  5: [4],
  6: [4],
};

//   console.log(rootTree(treeAdjList, 0));
