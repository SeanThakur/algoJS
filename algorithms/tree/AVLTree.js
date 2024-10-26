// AVL Tree is a type of self-balancing Binary Search Tree (BST) where the height of two child subtrees of any node differs by at most 1.
//  If at any time this property is violated, rotations are performed to regain balance.
//  This property ensures that operations such as insertion, deletion, and lookup in an AVL tree take logarithmic time,
//  i.e., 𝑂(log𝑛) where n is the number of nodes in the tree.

// balance factor is between -1 to 1

// Operations in an AVL Tree

// Insertion: After inserting a node, the tree might become unbalanced. To restore balance, one of the following rotations is applied based on the type of imbalance:
// Left-Left (LL) Rotation
// Right-Right (RR) Rotation
// Left-Right (LR) Rotation
// Right-Left (RL) Rotation

// Deletion: When a node is deleted, the balance factor (difference between heights of the left and right subtrees) of nodes may be disturbed. Depending on the imbalance, rotations are performed.

// Searching: Similar to a regular BST, searching for a node in an AVL tree involves traversing left or right based on the value. Since the tree is balanced, the worst-case time complexity remains o(logn)

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  getHeight(node) {
    if (!node) return 0;
    return node.height;
  }

  getBalanceFactor(node) {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  rotateRight(node) {
    const x = node.left;
    const temp = x.right;

    // Perform rotation
    x.right = node;
    node.left = temp;

    // update the height
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));

    // return the new node
    return x;
  }

  rotateLeft(node) {
    const x = node.right;
    const temp = x.left;

    //perform rotation
    x.left = node;
    node.right = temp;

    // update the height
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));

    // return new node
    return x;
  }

  getMinValueNode(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  insert(root, value) {
    if (!root) return new TreeNode(value);

    if (value < root.value) {
      root.left = this.insert(root.left, value);
    } else if (value > root.value) {
      root.right = this.insert(root.right, value);
    } else {
      return root;
    }

    // update the height of the current node
    root.height =
      1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

    // get the balance factor
    const balanceFactor = this.getBalanceFactor(root);

    //rotational conditions to balance tree
    // Case 1: LEFT LEFT Rotation
    if (balanceFactor > 1 && value < root.left.value) {
      return this.rotateRight(root);
    }

    // Case 2: RIGHT RIGHT Roatation
    if (balanceFactor < -1 && value > root.right.value) {
      return this.rotateLeft(root);
    }

    // Case 3: LEFT RIGHT Rotation
    if (balanceFactor > 1 && value > root.left.value) {
      root.left = this.rotateLeft(root.left);
      return this.rotateRight(root);
    }

    // Case 4: RIGHT LEFT Rotation
    if (balanceFactor < -1 && value < root.right.value) {
      root.right = this.rotateRight(root.right);
      return this.rotateLeft(root);
    }

    return root;
  }

  deleteNode(root, value) {
    if (!root) return root;

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // Node has no children (it's a leaf)
      if (!root.left && !root.right) {
        return null;
      }
      // Node to be deleted found
      if (!root.left || !root.right) {
        const temp = root.left ? root.left : root.right;
        root = temp;
      } else {
        // Node with two children, find the inorder successor (smallest in right subtree)
        const temp = this.getMinValueNode(root.right);
        root.value = temp.value;
        root.right = this.deleteNode(root.right, temp.value);
      }
    }

    // If only one child existed and root was deleted, return null
    if (!root) return root;

    root.height =
      1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    const balanceFactor = this.getBalanceFactor(root);

    if (balanceFactor > 1 && this.getBalanceFactor(root.left) >= 0) {
      return this.rotateRight(root);
    }

    if (balanceFactor < -1 && this.getBalanceFactor(root.right) <= 0) {
      return this.rotateLeft(root);
    }

    if (balanceFactor > 1 && this.getBalanceFactor(root.left) < 0) {
      root.left = this.rotateLeft(root.left);
      return this.rotateRight(root);
    }

    if (balanceFactor < -1 && this.getBalanceFactor(root.right) > 0) {
      root.right = this.rotateRight(root.right);
      return this.rotateLeft(root);
    }

    return root;
  }
}
