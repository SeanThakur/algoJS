// Finding the center of a tree involves identifying one or two nodes that are equidistant from the tree's farthest leaves.
// For a given tree, the center can help minimize the maximum distance to other nodes in the tree.

// Steps for the Algorithm
// Identify all leaf nodes.
// Remove the leaf nodes and their edges.
// Repeat the above two steps until the number of nodes left is one or two. If two nodes are left, those are the centers of the tree.

// Explanation
// Step 1: We create an adjacency list of the tree and initialize the degrees of each node based on the number of connections (neighbors).
// Step 2: We find all the nodes with only one neighbor, which are the leaves.
// Step 3: We iteratively remove the leaves from the tree. After removing each leaf, we decrease the degree of its connected nodes. If any of these nodes become leaves (with a degree of 1), we add them to the new list of leaves.
// Step 4: We continue this process until the number of remaining nodes is less than or equal to 2.
// Step 5: The remaining nodes are the centers of the tree. If there’s only one node left, the tree has a single center. If two nodes are left, it’s bicentric, and both are considered centers.

const findCenterOfTree = (adjList) => {
  // Step 1: Calculate the degrees (number of edges) for each node
  let degree = {};
  let leaves = [];

  // Initialize the degree of each node and find the initial leaves
  for (let node in adjList) {
    degree[node] = adjList[node].length;
    if (degree[node] === 1) {
      leaves.push(node);
    }
  }

  let remainingLeaves = Object.keys(adjList).length;

  // Step 2: Remove leaves layer-by-layer
  while (remainingLeaves > 2) {
    let newLeaves = [];

    // For each current leaf, reduce the degree of its connected nodes
    for (let leaf of leaves) {
      remainingLeaves--;

      // For each neighbor of the leaf node, reduce the degree
      for (let node of adjList[leaf]) {
        degree[node]--;
        if (degree[node] === 1) {
          newLeaves.push(node);
        }
      }
    }
    // Update the leaves with the new leaves found in this iteration
    leaves = newLeaves;
  }

  // The remaining nodes are the center(s)
  return leaves;
};

// Example Usage
const treeAdjList = {
  0: [1],
  1: [0, 2, 3],
  2: [1],
  3: [1, 4, 5],
  4: [3],
  5: [3],
};

//   console.log(findTreeCenter(treeAdjList));
