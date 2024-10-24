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
