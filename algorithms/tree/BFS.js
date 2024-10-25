// Breadth-First Search
// BFS explores all neighbors of a node before moving to the next level. It uses a queue for its traversal.

// Use Cases
// Shortest Path in Unweighted Graphs: Finding the shortest path between two nodes (e.g., social networks, GPS navigation).
// Web Crawling: Crawlers use BFS to explore web pages starting from a root page.
// Finding Connected Components: Identifying connected nodes in a graph, useful in network analysis.
// Level Order Traversal: In binary trees, BFS can be used to print nodes level by level.

// Data Structure		Queue
// Time Complexity		O(V + E)
// Space Complexity	    O(V) for queue

// 1. For adjacencyList input

// Example adjacencyList input
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B"],
  E: ["C"],
};

const bfsForAdjecentList = (graph, start) => {
  let queue = [start]; // Initialize the queue with the start node
  let visited = new Set(); // Create a set to track visited nodes
  let result = []; // Result array to hold the traversal order

  visited.add(start); // Mark the start node as visited

  while (queue.length) {
    const vertex = queue.shift(); // Remove the first node from the queue
    result.push(vertex); // Add it to the result

    // Add unvisited neighbors to the queue
    graph[vertex].forEach((neighbour) => {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    });
  }

  return result;
};

// 2. For Normal Array based input

// function for tree node

const TreeNode = (value) => ({
  value,
  left: null,
  right: null,
});

const creteTreeFromArray = (arr) => {
  if (!arr.length) return;

  const createNode = (index) => {
    if (index >= arr.length || arr[index] === null) return null;
    let node = TreeNode(arr[index]);
    node.left = creteTreeFromArray(2 * index + 1); // adding node to the left of the tree
    node.right = creteTreeFromArray(2 * index + 2); // adding node to the right of the tree
    return node;
  };

  return createNode(0);
};

const root = creteTreeFromArray([1, 2, 3, 4, 5]);

// taking root node as input for the graph
const bfsForArrayInput = (root) => {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length) {
    const vertex = queue.shift();
    result.push(vertex.value);

    if (vertex.left) queue.push(vertex.left);
    if (vertex.right) queue.push(vertex.right);
  }

  return result;
};
