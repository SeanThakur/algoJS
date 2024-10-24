// Depth-First Search
// DFS explores as far as possible along each branch before backtracking. It can be implemented using recursion or a stack.
// Use Cases
// Pathfinding: Finding a path between two nodes in a maze or puzzle.
// Used in scheduling problems, such as task scheduling in project management.
// Cycle Detection: Identifying cycles in a graph, which is crucial for checking the validity of dependencies in a system.
// exploring all possible moves

// Data Structure	    Stack (or recursion)
// Time Complexity	    O(V + E)
// Space Complexity	    O(V) for stack space

// 1. For adjacencyList input

// Example adjacencyList input
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B"],
  E: ["C"],
};

const dfsForAdjanceyList = (graph, start, visited = new Set(), result = []) => {
  if (!start || visited.has(start)) return result;

  visited.add(start); // Mark the current node as visited
  result.push(start); // Add the current node to the result

  graph[start].forEach((neighbor) => {
    dfsForAdjanceyList(graph, neighbor, visited, result);
  });

  return result;
};

// console.log(dfsForAdjacencyList(graph, 'A'));

// 2. For Normal Array based input

// For this approach we first need to create an tree based structure from array based input.

// Function to create a new tree node
const createTreeNode = (value) => ({
  value,
  left: null,
  right: null,
});

const createTreeFromArray = (arr) => {
  if (!arr.length) return null;

  const createNode = (index) => {
    if (index >= arr.length || arr[index] === null) return null;

    let node = createTreeNode(arr[index]);
    node.left = createNode(2 * index + 1); // For left side of the tree
    node.right = createNode(2 * index + 2); // For right side of the tree
    return node;
  };

  return createNode(0); // start with 0 index i mean root node
};

const root = createTreeFromArray([1, 2, 3, 4, 5]);

// it's an normal preorder tree traversal technique
const dfsForArray = (node) => {
  if (!node) return;
  console.log(node.value);
  dfsForArray(node.left);
  dfsForArray(node.right);
};

dfsForArray(root);
