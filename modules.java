// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.ArrayList;
import java.util.Arrays;

class CustomStack {
        private int[] stack;
        private int capacity;
        private int top;
        
        public CustomStack(int capacity) {
            this.capacity = capacity;
            stack = new int[capacity];
            top = -1;
        }
        
        public void push(int value) {
            if(top == capacity - 1) {
                System.out.println("Stack overflow");
                return;
            }
            stack[++top] = value;
        }
        
        public int pop() {
            if(isEmpty()) {
                System.out.println("stack underflow");
                return -1;
            }
            return stack[top--];
        }
        
        public boolean isEmpty() {
            return top == -1;
        }
        
        public int peek() {
            if(isEmpty()) {
                System.out.println("stack is empty");
                return -1;
            }
            return stack[top];
        }
        
        public int size() {
            return top + 1;
        }
}

class CustomQueueSameAsCircularQueue {
    private int[] queue;
    private int front;
    private int rear;
    private int size;
    private int capacity;
    
    public CustomQueueSameAsCircularQueue(int capacity) {
        this.capacity = capacity;
        queue = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }
    
    public void enqueue(int value) {
        if(size == capacity) {
            System.out.println("queue overflow");
            return;
        }
        rear = (rear + 1) % capacity;
        queue[rear] = value;
        size++;
    }
    
    public int dequeue() {
        if(isEmpty()) {
            System.out.println("queue underflow");
            return -1;
        }
        int item = queue[front];
        front = (front + 1) % capacity;
        size--;
        return item;
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public int peek() {
        if(isEmpty()) {
            System.out.println("empty");
            return -1;
        }
        
        return queue[front];
    }
    
    public int size() {
        return size;
    }
    
    public void display() {
        if(isEmpty()) {
            System.out.println("empty");
            return;
        }
        for(int i = 0; i < size; i++) {
            System.out.println(queue[(front + i) % capacity]);
        }
    }
}

class CustomLinkedList {
    static class Node {
        int data;
        Node next;
        
        public Node(int data) {
            this.data = data;
            this.next = null;
        }
    }
    
    private Node head;
    public CustomLinkedList() {
        this.head = null;
    }
    
    public boolean isEmpty() {
        return head == null;
    }
    
    public void append(int data) {
        // Method to add a node at the end of the list
        Node newNode = new Node(data);
        Node current = head;
        
        if(head == null) {
            head = newNode;
            return;
        }
        
        while(current.next != null) {
            current = current.next;
        }
        
        current.next = newNode;
    }
    
    public void prepend(int data) {
        //Method to add a node at the beginning of the list
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }
    
    public void deleteValue(int data) {
        // Method to delete a node with a specific value
        if(head == null) return;
        
        if(head.data == data) {
            head = head.next;
            return;
        }
        
        Node current = head;
        
        while(current.next != null && current.next.data != data) {
            current = current.next;
        }
        
        // If the value was not found
        if(current.next == null) {
            return;
        }
        
        // Delete the node
        current.next = current.next.next;
    }
    
    public boolean findValue(int data) {
        Node current = head;
        
        while(current != null) {
            if(current.data == data) {
                return true;
            }
            current = current.next;
        }
        
        return false;
    }
    
    public void printList() {
        Node current = head;
        if(current == null) {
            return;
        }
        
        while(current != null) {
            System.out.println(current.data + " -> ");
            current = current.next;
        }
        
        System.out.println("null");
    }
    
    public int length() {
        int count = 0;
        Node current = head;
        while(current != null) {
            count++;
            current = current.next;
        }
        return count;
    }
    
    public void reverse() {
        Node prev = null;
        Node current = head;
        Node next = null;
        
        while(current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        
        head = prev;
    }
    
    // common operations 

    public void removeDuplicates() {
        // Given a sorted linked list, remove duplicate nodes such that each element appears only once.
        if(head == null) return;
        Node current = head;
        while(current != null && current.next != null) {
            if(current.data == current.next.data) {
                current.next = current.next.next;
            }else {
                current = current.next;
            }
        }
    }
    
    public boolean hasCycle() {
        if(head == null) return false;
        Node slow = head;
        Node fast = head;
        
        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            
            if(slow == fast) {
                return true;
            }
        }
        
        return false;
    }
    
    public Node detectCycleStart() {
        // Detect a Cycle and Find the Starting Point of the Cycle
        //  If a cycle is detected, reset one pointer to the head and move both pointers one step at a time until they meet. The meeting point will be the start of the cycle.
        if(head == null) return null;
        Node slow = head;
        Node fast = head;
        
        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            
            if(slow == fast) {
                // Cycle detected, find the starting point of the cycle
                slow = head; // Reset slow pointer to head
                while(slow != fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow; // Starting point of the cycle
            }
        }
        
        return null;
    }
    
    public int findMiddle() {
        //Finds the middle element of the list in O(n) time.
        if(head == null) return -1;
        Node slow = head;
        Node fast = head;
        
        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next;
        }
        
        return slow.data;
    }
    
    public Node sortList(Node head) {
        // Sort a linked list using Merge Sort.
        // O(n log n), where n is the number of nodes in the list.
        if(head == null || head.next == null) return head;
         // Split the list into two halves
        Node mid = getMiddle(head);
        Node right = mid;
        Node left = sortList(head);
        right = sortList(right);
        
        return merge(left, right);
    }
    
    public Node getMiddle(Node head) {
        Node slow = head;
        Node fast = head;
        
        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        // `slow` is now at the middle of the list, so split the list
        Node mid = slow.next;
        slow.next = null; // Disconnect the left part from the right part
        
        return mid;
    }
    
    public Node merge(Node left, Node right) {
        Node dummy = new Node(-1);
        Node current = dummy;

        while(left != null && right != null) {
            if(left.val < right.val) {
                current.next = left;
                left = left.next;
            } else {
                current.next = right;
                right = right.next;
            }
            current = current.next;
        }

        if(left != null) {
            current.next = left;
        }else if(right != null) {
            current.next = right;
        }

        return dummy.next;
    }
    
    public Node mergeSortedLists(Node head1, Node head2) {
        if(head1 == null) return head2;
        if(head2 == null) return head1;
        
        Node dummy = new Node(0);
        Node current = dummy;
        
        while(head1 != null && head2 != null) {
            if(head1.data < head2.data) {
                current.next = head1;
                head1 = head1.next;
            }else {
                current.next = head2;
                head2 = head2.next;
            }
            current = current.next;
        }
        
        if(head1 != null) current.next = head1;
        if(head2 != null) current.next = head2;
        
        return dummy.next;
    }

    public Node getIntersectionNode(Node head1, Node head2) {
        if(head1 == null || head2 == null) return null;
        
         // Find the lengths of both lists
        Node curr1 = head1;
        Node curr2 = head2;
        int len1 = 0;
        int len2 = 0;
        
        while(curr1 != null) {
            len1++;
            curr1 = curr1.next;
        }
        
        while(curr2 != null) {
            len2++;
            curr2 = curr2.next;
        }
        
        // Align both lists by moving the pointer of the longer list
        curr1 = head1;
        curr2 = head2;
        
        if(len1 > len2) {
            for(int i = 0; i < len1 - len2; i++) {
                 curr1 = curr1.next;
            }
        }else {
            for(int i = 0; i < len2 - len1; i++) {
                curr2 = curr2.next;
            }
        }
        
        // Move both pointers and check for intersection
        while(curr1 != null && curr2 != null) {
            if(curr1 == curr2) return curr1;
            curr1 = curr1.next;
            curr2 = curr2.next;
        }
        
        return null;
    }
}

class CustomDoubleLinkedList {
    static class Node {
        int data;
        Node next;
        Node prev;
        
        public Node(int data) {
            this.data = data;
            this.next = null;
            this.prev = null;
        }
    }
    
    private Node head;
    private Node tail;
    
    CustomDoubleLinkedList() {
        this.head = null;
        this.tail = null;
    }
    
    public boolean isEmpty() {
        return head == null;
    }
    
    public void append(int data) {
        Node newNode = new Node(data);
        if(head == null) {
            head = newNode;
            tail = newNode;
        }
        newNode.next = head;
        head.prev = newNode;
        head = newNode;
    }
    
    public void prepend(int data) {
        Node newNode = new Node(data);
        if(tail == null) {
            head = newNode;
            tail = newNode;
        }
        tail.next = newNode;
        newNode.prev = tail;
        tail = newNode;
    }
    
    public void deleteValue(int data) {
        if(head == null) return;
        Node current = head;
        while(current != null) {
            if(current.data == data) {
                if(current == head && tail == current) {
                    head = null;
                    prev = null;
                } else if(current == head) {
                    head = head.next;
                    head.prev = null;
                } else if(current == tail) {
                    tail = tail.prev;
                    tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
            }else {
                current = current.next;
            }
        }
    }
    
    public void reverse() {
        if(head == null) return;
        Node current = head;
        Node temp = null;
        
        while(current != null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.next;
        }
        
        if(temp != null) {
            head = temp.prev;
        }
    }
    
}

class CustomMaxHeap {
    private int[] heap;
    private int size;
    
    customMaxHeap(int capacity) {
        heap = new int[capacity];
        size = 0;
    }
    
    private int getParent(int index) {
        return (index - 1) / 2;
    }
    
    private int leftChild(int index) {
        return 2 * i + 1;
    }
    
    private int rightChild(int index) {
        return 2 * i + 2;
    }
    
    private void swap(int i, int j) {
        int temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }
    
    public void heapifyDown(int index) {
        // Heapify down operation to maintain max-heap property
        int largest = index;
        int left = leftChild(index);
        int right = rightChild(index);
        
        if(left < size && heap[left] > heap[largest]) {
            largest = left;
        }
        
        if(right < size && heap[right] > heap[largest]) {
            largest = right;
        }
        
        if(largest != index) {
            swap(largest, index);
            heapifyDown(largest);
        }
    }
    
    public void heapifyUp(int index) {
        // Heapify up operation
        int parent = getParent(index);
        while(index > 0 && heap[parent] < heap[index]) {
            swap[index, parent];
            index = parent;
        }
    }
    
    public int extractMax() {
        // Extract the maximum value
        int max = heap[0];
        heap[0] = heap[size - 1];
        size--;
        heapifyDown(0);
        return max;
    }
    
    public int getMax() {
        // Get the maximum value without removing it
        return heap[0];
    }
    
    public void buildHeap(int[] arr) {
        // Build the heap from an unsorted array
        heap = arr;
        size = arr.length;
        for(int i = size / 2 - 1; i >= 0; i++) {
            heapifyDown(i);
        }
    }
    
    public void insert(int val) {
        if(size >= heap.length) return;
        heap[size] = val;
        size++;
        heapifyUp(size - 1);
    }
    
}

class BinaryTreeOperations {
    static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        
        public TreeNode(int val) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }
    
    public void inOrderTraversal(TreeNode root) {
        if(root == null) return;
        inOrderTraversal(root.left);
        System.out.println(root.val);
        inOrderTraversal(root.right);
    }
    
    public void preOrderTraversal(TreeNode root) {
        if(root == null) return;
        System.out.println(root.val);
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
    }
    
    public void postOrderTraversal(TreeNode root) {
        if(root == null) return;
        postOrderTraversal(root.left);
        postOrderTraversal(root.right);
        System.out.println(root.val);
    }

    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if(root == null) return result;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        boolean leftToRight = true;

        while(!queue.isEmpty()) {
            List<Integer> level = new ArrayList<>();
            int size = queue.size();

            for(int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                
                if(leftToRight) {
                    level.add(node.val);
                }else {
                    level.add(0, node.val);
                }

                if(root.left != null) queue.offer(root.left);
                if(root.right != null) queue.offer(root.right);
            }

            result.add(level);
            leftToRight = !leftToRight;
        }

        return result;
    }
    
    public int height(TreeNode root) {
        if(root == null) return 0;
        int leftHeight = height(root.left);
        int rightHeight = height(root.right);
        
        return 1 + Math.max(leftHeight, rightHeight);
    }
    
    public int diameter(TreeNode root) {
        // The diameter is the longest path between two nodes in the tree, which might or might not pass through the root.
        // we can't use normal count variable instead of in[] because
        // you can't directly modify a primitive int within a helper function in Java, because Java passes primitives by value. 
        // This means that when you pass maxDiameter into calculateHeight, the function will only receive a copy of the value, 
        // and any changes to it won't reflect back to the caller.
        int[] maxDiameter = new int[1];
        calculateHeight(root, maxDiameter);
        return maxDiameter[0];
    }
    
    private int calculateHeight(TreeNode root, int[] maxDiameter) {
        if(root == null) return 0;
        int leftHeight = calculateHeight(root.left, maxDiameter);
        int rightHeight = calculateHeight(root.right, maxDiameter);
        
        maxDiameter[0] = Math.max(maxDiameter[0], leftHeight + rightHeight);
        return 1 + Math.max(leftHeight, rightHeight);
    }
    
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // The LCA is the lowest node that is an ancestor of both nodes. This problem is commonly asked in interviews.
        // that is an ancestor of both a given pair of nodes. For example, in a family tree, 
        // the LCA of two people would be the most recent common ancestor of both individuals.
        if(root == null || p == null || q == null) {
            return root;
        }
        
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        
        if(left == null) {
            return right;
        } else if(right == null) {
            return left;
        }else {
            return root;
        }
    }

    public int leafSum(TreeNode root) {
        if(root == null) return 0;
        if(root.left == null && root.right == null) return root.val;
        return leafSum(root.left) + leafSum(root.right);
    }
    
    public boolean isBalanced(TreeNode root) {
        return checkBalance(root) != -1;
    }
    
    private int checkBalance(TreeNode root) {
        if(root == null) return 0;
        int leftHeight = checkBalance(root.left);
        int rightHeight = checkBalance(root.right);
        
        if(
            leftHeight == -1 ||
            rightHeight == -1 ||
            Math.abs(leftHeight - rightHeight) > 1
        ) {
            return -1;
        }
        
        return 1 + Math.max(leftHeight, rightHeight);
    }

    public boolean isBST(TreeNode root) {
        // Check if Tree is a Binary Search Tree
        return isBSTUtil(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }
    
    private boolean isBSTUtil(TreeNode root, int min, int max) {
        if(root == null) return true;
        if(root.val <= min || root.val >= max) {
            return false;
        }
        return isBSTUtil(root.left, min, root.val) && isBSTUtil(root.right, root.val, max);
    }

    //BST operations and implementation
    public TreeNode BSTInseart(TreeNode root, int val) {
        if(root == null) return new TreeNode(val);

        if(val < root.val) {
            root.left = BSTInseart(root.left, val);
        } else {
            root.right = BSTInseart(root.right, val);
        }

        return root;
    }

    public boolean BSTSearch(TreeNode root, int val) {
        if(root == null) return false;
        if(root.val == val) return true;
        if(val < root.val) return BSTSearch(root.left, val);
        return BSTSearch(root.right, val);
    }

    public TreeNode BSTDelete(TreeNode root, int key) {
        if (root == null) return null;

        if (key < root.val) {
            root.left = BSTDelete(root.left, key);
        } else if (key > root.val) {
            root.right = BSTDelete(root.right, key);
        } else {
            if (root.left == null) return root.right;
            if (root.right == null) return root.left;

            root.val = minValue(root.right);
            root.right = BSTDelete(root.right, root.val);
        }
        return root;
    }

    public int minValue(TreeNode root) {
        int min = root.val;
        while (root.left != null) {
            min = root.left.val;
            root = root.left;
        }
        return min;
    }

    //DFS in Binary Tree is a preorder traversal

    //BFS in level order traversal in Binary Tree
    public void levelOrderTraversal(TreeNode root) {
        if(root == null) return;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while(!queue.isEmpty()) {
            TreeNode current = queue.poll();
            System.out.println(current.val, " ");
            if(current.left != null) queue.add(current.left);
            if(current.right != null) queue.add(current.right);
        }
    }

    // Construct Binary Search Tree (BST) from Preorder Traversal
    public TreeNode constructBST(int[] preorder) {
        int[] index = {0};  
        return buildTree(preorder, Integer.MIN_VALUE, Integer.MAX_VALUE, index);
    }

    public TreeNode buildTree(int[] preorder, int min, int max, int[] index) {
        if (index[0] >= preorder.length) return null;
        
        int val = preorder[index[0]];
        if (val < min || val > max) return null;
        
        TreeNode node = new Node(val);
        index[0]++;
        node.left = buildTree(preorder, min, val, index);
        node.right = buildTree(preorder, val, max, index);
        
        return node;
    }

}


class Main {
    public static int BSearch(int[] arr, int target, int left, int right) {
        int n = arr.length;
        
        while(left <= right) {
            int mid = left + (right - left) / 2;
            
            if(arr[mid] == target) {
                return mid;
            }
            
            if(arr[mid] > target) {
                right = mid - 1;
            }else {
                left = mid + 1;
            }
        }
        
        return -1;
    }
    public static int exponentialSearch(int[] arr, int target) {
        int n = arr.length;
        int i = 1;
        
        if(arr[0] == target) {
            return 0;
        }
        
        while(i < n && arr[i] <= target) {
            i *= 2;
        }
        
        return BSearch(arr, target, i/2, Math.min(i, n-1));
    }
    public static int jumpSearch(int[] arr, int target) {
        int n = arr.length;
        int prev = 0;
        int step = (int) Math.floor(Math.sqrt(n));
        
        while(target > arr[Math.min(step, n) - 1]) {
            prev = step;
            step += (int) Math.floor(Math.sqrt(n));
            if(prev >= n) {
                return -1;
            }
        }
        
        for(int i = prev; i < Math.min(step, n); i++) {
            if(arr[i] == target) {
                return i;
            }
        }
        
        return -1;
    }
    public static int rotatedSearchWithDistinctValue(int[] arr, int target) {
        int n = arr.length;
        int left = 0;
        int right = n - 1;
        
        while(left <= right) {
            int mid = left + (right - left) / 2;
            
            if(arr[mid] == target) {
                return mid;
            }
            
            if(arr[left] <= arr[mid]) {
                if(arr[left] <= target && target <= arr[mid]) {
                    right = mid - 1;
                }else {
                    left = mid + 1;
                }
            }else {
                if(arr[mid] <= target && target <= arr[right]) {
                    left = mid + 1;
                }else {
                    right = mid - 1;
                }
            }
        }
        
        return -1;
    }
    public static boolean searchRotatedArrDuplicateVal(int[] arr, int target) {
        int n = arr.length;
        int left = 0;
        int right = n - 1;
        
        while(left <= right) {
            int mid = left + (right - left) / 2;
            
            if(arr[mid] == target) {
                return true;
            }
            
            if(arr[left] == arr[mid] && arr[mid] == arr[right]) {
                left++;
                right--;
                continue;
            }else if(arr[left] <= arr[mid]) {
                if(arr[left] <= target && target <= arr[mid]) {
                    right = mid - 1;
                }else {
                    left = mid + 1;
                }
            }else {
                if(arr[mid] <= target && target <= arr[right]) {
                    left = mid + 1;
                }else {
                    right = mid - 1;
                }
            }
        }
        
        return false;
    }
    public static int findMinValRotatedArr(int[] arr) {
        int n = arr.length;
        int left = 0;
        int right = n - 1;
        int ans = Integer.MAX_VALUE;
        
        while(left <= right) {
            int mid = left + (right - left) / 2;
            
            if(arr[left] <= arr[right]) {
                ans = Math.min(ans, arr[left]);
                break;
            }
            
            if(arr[left] <= arr[mid]) {
                ans = Math.min(ans, arr[left]);
                left = mid + 1;
            }else {
                ans = Math.min(ans, arr[mid]);
                right = mid - 1;
            }
        }
        
        return ans;
    }
    public static int ArrRotatedCount(int[] arr) {
        int n = arr.length;
        int left = 0;
        int right = n - 1;
        int minVal = Integer.MAX_VALUE;
        int index = -1;
        
        while(left <= right) {
            int mid = left + (right - left) / 2;
            
            if(arr[left] <= arr[right]) {
                if(arr[left] < minVal) {
                    minVal = arr[left];
                    index = left;
                }
                break;
            }
            
            if(arr[left] <= arr[mid]) {
                if(arr[left] < minVal) {
                    minVal = arr[left];
                    index = left;
                }
                left = mid + 1;
            }else {
                right = mid - 1;
                if(arr[mid] < minVal) {
                    index = mid;
                    minVal = arr[mid];
                }
            }
        }
        
        return index;
    }
    public static ArrayList<Integer> bubbleSort(ArrayList<Integer> arr) {
        int n = arr.size();
        boolean swapped = false;
        
        for(int i = 0; i < n - 1; i++) {
            swapped = false;
            for(int j = 0; j < n - 1 - i; j++) {
                if(arr.get(j) > arr.get(j+1)) {
                    swapped = true;
                    swap(arr, j, j+1);
                }
            }
            
            if(!swapped) {
                break;
            }
        }
        
        return arr;
    }
    
    public static void swap(ArrayList<Integer> arr, int a, int b) {
        int temp = arr.get(a);
        arr.set(a, arr.get(b));
        arr.set(b, temp);
    }
    
    public static int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        int i = 0, j = 0, k = 0;
        
        while(i < left.length && j < right.length) {
            if(left[i] <= right[j]) {
                result[k] = left[i];
                i++;
            }else {
                result[k] = right[j];
                j++;
            }
            k++;
        }
        
        while(i < left.length) {
            result[k] = left[i];
            i++;
            k++;
        }
        
        while(j < right.length) {
            result[k] = right[j];
            j++;
            k++;
        }
        
        return result;
    }
    
    public static int[] mergeSort(int[] arr) {
        int n = arr.length;
        
        if(n < 2) {
            return arr;
        }
        
        int mid = n / 2;
        int[] left = Arrays.copyOfRange(arr, 0, mid);
        int[] right = Arrays.copyOfRange(arr, mid, n);
        
        left = mergeSort(left);
        right = mergeSort(right);
        
        return merge(left, right);
    }
    
    public static void heapify(int[] arr, int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        
        if(left < n && arr[left] > arr[largest]) {
            largest = left;
        }
        
        if(right < n && arr[right] > arr[largest]) {
            largest = right;
        }
        
        if(largest != i) {
            swapElement(arr, largest, i);
            heapify(arr, n, largest);
        }
    }
    
    public static void swapElement(int[] arr, int i , int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    public static int[] heapSort(int[] arr) {
        int n = arr.length;
        
        for(int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }
        
        for(int i = n - 1; i > 0; i--) {
            swapElement(arr, 0, i);
            heapify(arr, i, 0);
        }
        
        return arr;
    }

    public static void countingSort(int[] arr, int pos) {
        int n = arr.length;
        int[] output = new int[n];
        int[] count = new int[10]; // Count arr to store the frequency of item occure in array

        for(int i = 0; i < n; i++) {
            count[(arr[i] / pos) % 10]++; // (arr[i] / pos) % 10 it is used for finding right position of array item
        }

        for(int i = 1; i < 10; i++) {
            count[i] += count[i-1]; // Change count[i] so that it now contains the actual position of this digit in output[]
        }

        for(int i = n-1; i >= 0; i--) {
            output[count[(arr[i] / pos) % 10] - 1] = arr[i];
            count[(arr[i] / pos) % 10]--;
        }

        System.arraycopy(output, 0, arr, 0, n);
    }

    public static void radixSort(int[] arr) {
        int max = Arrays.stream(arr).max().getAsInt();

        for(int pos = 1; max / pos > 0; pos *= 10) {
            countingSort(arr, pos);
        }
    }

     public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println(); 
    }

    // BFS on Adjecent List
    public static ArrayList<Integer> bfsOfGraph(int V, ArrayList<ArrayList<Integer>> adj) {
        // code here
        ArrayList<Integer> bfs = new ArrayList<>();
        boolean visited[] = new boolean[V];
        Queue<Integer> que = new LinkedList<>();
        
        visited[0] = true;
        que.add(0);
        
        while(!que.isEmpty()) {
            int node = que.poll();
            bfs.add(node);
            
            for(int it : adj.get(node)) {
                if(visited[it] != true) {
                    visited[it] = true;
                    que.add(it);
                }
            }
        }
        
        return bfs;
    }

    // DFS on Adjecent List
    public static void dfs(
        int node, 
        boolean visited[], 
        ArrayList<ArrayList<Integer>> adj,
        ArrayList<Integer> list
    ) 
    {
        list.add(node);
        visited[node] = true;
        
        for(int it : adj.get(node)) {
            if(!visited[it] == true) {
                dfs(it, visited, adj, list);
            }
        }
        
    }
    // Function to return a list containing the DFS traversal of the graph.
    public static ArrayList<Integer> dfsOfGraph(ArrayList<ArrayList<Integer>> adj) {
        // Code here
        boolean visited[] = new boolean[adj.size() + 1];
        ArrayList<Integer> list = new ArrayList<>();
        
        visited[0] = true;
        dfs(0, visited, adj, list);
        return list;
    }

    // Function to detect cycle in an undirected graph.
    class Pair {
        int node;
        int parent;
        Pair(int _node, int _parent) {
            this.node = _node;
            this.parent = _parent;
        }
    }

    class Solution {
        public static boolean checkCycle(
            int node, 
            int n, 
            ArrayList<ArrayList<Integer>> adj,
            boolean[] visited
        ) {
            visited[node] = true;
            Queue<Pair> que = new LinkedList<>();
            que.add(new Pair(node, -1));
            
            while(!que.isEmpty()) {
                int srcNode = que.peek().node;
                int parentNode = que.peek().parent;
                que.remove();
                
                for(int adjNode : adj.get(srcNode)) {
                    if(!visited[adjNode]) {
                        visited[adjNode] = true;
                        que.add(new Pair(adjNode, srcNode));
                    }
                    
                    else if(parentNode != adjNode) {
                        return true;
                    }
                }
            }
            
            return false;
    }
    
    public static boolean isCycle(ArrayList<ArrayList<Integer>> adj) {
        int n = adj.size();
        boolean[] visited = new boolean[n + 1];
        
        for(int i = 0; i < n; i++) {
            if(!visited[i]) {
                if(checkCycle(i, n, adj, visited)) {
                    return true;
                }
            }
        }
        
        return false;
    }

    public static boolean dfsDCG(
        int node, 
        ArrayList<ArrayList<Integer>> adj,
        boolean[] visited,
        boolean[] pathVisited
    ) {
        
        visited[node] = true;
        pathVisited[node] = true;
            
        for(int it : adj.get(node)) {
            if(!visited[it]) {
                if(dfsDCG(it, adj, visited, pathVisited) == true) {
                    return true;
                }
            }
            
            else if(pathVisited[it]) {
                return true;
            }
        }
        
        pathVisited[node] = false;
        return false;
        
    }
    // Function to detect cycle in a directed graph using DFS
    // Through kahan's algorithm can be used for detecting cycle in a directed graph using BFS by comparing
    // total size of the adjecent list and total output of topological array
    // if total_size of output is < total_size of adjList then it's an cycle 
    // because topological sort algorithm only works for a-cyclic graph and if the output is then the actual input then it's cyclic
    public static boolean isCyclic(ArrayList<ArrayList<Integer>> adj) {
        // code here
        int V = adj.size();
        boolean[] visited = new boolean[V];
        boolean[] pathVisited = new boolean[V];
        
        for(int i = 0; i < V; i++) {
            if(!visited[i]) {
                if(dfsDCG(i, adj, visited, pathVisited) == true) {
                    return true;
                }
            }
        }
        
        return false;
    }

    // Topological Sort it's only valid of DAG(Directed A-cyclic Graph)
    public static void dfsTOPO(
        int i, 
        boolean[] visited, 
        ArrayList<ArrayList<Integer>> adj, 
        Stack<Integer> st
    ) {
        visited[i] = true;
        
        for(int it : adj.get(i)) {
            if(!visited[it]) {
                dfs(it, visited, adj, st);
            }
        }
        
        st.push(i);
        
    }
    
    public static ArrayList<Integer> topologicalSort(ArrayList<ArrayList<Integer>> adj) {
        // Your code here
        int V = adj.size();
        boolean[] visited = new boolean[V];
        Stack<Integer> st = new Stack<>();
        ArrayList<Integer> ans = new ArrayList<Integer>();
        
        for(int i = 0; i < V; i++) {
            if(!visited[i]) {
                dfsTOPO(i, visited, adj, st);
            }
        }
        
        while(!st.isEmpty()) {
            ans.add(st.peek());
            st.pop();
        }
        
        return ans;
    }

    // Topological Sort using BFS with Kah's algorithm
    public static ArrayList<Integer> topologicalSort(ArrayList<ArrayList<Integer>> adj) {
        int V = adj.size();
        // First step:- calculate all the degree
        int[] indegree = new int[V];
        for(int i = 0; i < V; i++) {
            for(int it : adj.get(i)) {
                indegree[it] += 1;
            }
        }

        // Second step:- is to add into queue who's indegree is 0
        Queue<Integer> que = new LinkedList<>();
        for(int i = 0; i < V; i++) {
            if(indegree[i] == 0) {
                que.add(i);
            }
        }

        //Third step:- loop until queue is empty and decrement the indegree 
        //if the same is found and if the indegree is 0 then add it to the queue
        ArrayList<Integer> ans = new  ArrayList<Integer>();
        while(!que.isEmpty()) {
            int node = que.peek();
            que.remove();
            ans.add(node);

            for(int it : adj.get(node)) {
                indegree[it]--;
                if(indegree[it] == 0) {
                    que.add(it);
                }
            }
        }

        return ans;
    }

    // Shortest Path in Undirected
    public static int[] shortestPath(ArrayList<ArrayList<Integer>> adj, int src) {
        // code here
        int n = adj.size();
        int[] distance = new int[n];
        Queue<Integer> que = new LinkedList<>();

        for(int i = 0; i < n; i++) {
            distance[i] = (int) 1e9;
        }
        distance[src] = 0;
        que.add(src);
        
        while(!que.isEmpty()) {
            int node = que.peek();
            que.remove();
            for(int it : adj.get(node)) {
                if(distance[node] + 1 < distance[it]) {
                    distance[it] = 1 + distance[node];
                    que.add(it);
                }
            }
        }
        
        for(int i = 0; i < n; i++) {
            if(distance[i] == (int) 1e9) {
                distance[i] = -1;
            }   
        }
        
        return distance;
    }

    // Shortest path in Directed Acyclic Graph
    static class Pair {
        int vertices;
        int weight;
        Pair(int _vertices, int _weight) {
            this.vertices = _vertices;
            this.weight = _weight;
        }
    }
    
    public void topoSort(int node, ArrayList<ArrayList<Pair>> adj, boolean[] visited, Stack<Integer> st) {
        visited[node] = true;
        for(int i = 0; i < adj.get(node).size(); i++) {
            int v = adj.get(node).get(i).vertices;
            if(!visited[v]) {
                topoSort(v, adj, visited, st);
            }
        }
        st.add(node);
    }

    public int[] shortestPath(int V, int E, int[][] edges) {
        // Code here
        // Created an adjecent List
        ArrayList<ArrayList<Pair>> adj = new ArrayList<ArrayList<Pair>>();
        for(int i = 0; i < V; i++) {
            ArrayList<Pair> newPair = new ArrayList<Pair>();
            adj.add(newPair);
        }
        for(int i = 0; i < E; i++) {
            int u = edges[i][0];
            int v = edges[i][1];
            int weight = edges[i][2];
            adj.get(u).add(new Pair(v, weight));
        }
        
        // visited array with stack for topological output
        boolean[] visited = new boolean[V];
        Stack<Integer> st = new Stack<Integer>();
        for(int i = 0; i < V; i++) {
            if(!visited[i]) {
                topoSort(i, adj, visited, st);
            }
        }
        
        // create an distance array and maintain the distance logic
        int[] distance = new int[V];
        for(int i = 0; i < V; i++) {
            distance[i] = (int) 1e9;
        }
        distance[0] = 0;
        while(!st.isEmpty()) {
            int node = st.peek();
            st.pop();
            
            for(int i = 0; i < adj.get(node).size(); i++) {
                int v = adj.get(node).get(i).vertices;
                int weight = adj.get(node).get(i).weight;
                if(distance[node] + weight < distance[v]) {
                    distance[v] = distance[node] + weight;
                }
            }
        }
        
        // remove infinite and add -1 instead
        for(int i = 0; i < V; i++) {
            if(distance[i] == (int) 1e9) {
                distance[i] = -1;
            }
        }
        
        return distance;
    }
}

    public static List<Integer> extractAllSubset(int[] arr, int i) {
        List<Integer> subset = new ArrayList<>();
        int j = 0;
        while(i > 0) {
            int i_bit = i & 1;
            if(i_bit != 0) {
                subset.add(arr[j]);
            }
            j++;
            i = i >> 1;
        }
        return subset;
    }

    
    public static void main(String[] args) {
        int[] arr = {4,5,6,-1,-2,0,1,2,3};
        ArrayList<Integer> sortArr = new ArrayList<>(Arrays.asList(4,5,6,-1,-2,0,1,2,3));
        int[] index = heapSort(arr);
        int[] arr2 = {170, 45, 75, 90, 802, 24, 2, 66};
        // System.out.println(Arrays.toString(index));
        // radixSort(arr2);
        // printArray(arr2);
        
        // CustomStack stack = new CustomStack(5);
        
        // stack.push(4);
        // stack.push(3);
        
        // CustomQueueSameAsCircularQueue queue = new CustomQueueSameAsCircularQueue(5);
        
        // queue.enqueue(4);
        // queue.enqueue(2);
        // queue.display();

        // Finding all the subset within the given array
        
        // int[] subset = new int[]{1,2,3,4};
        // List<List<Integer>> subset_list = new ArrayList<>();
        // int subset_length = subset.length;
        // for(int i = 0; i < (1 << subset_length); i++) {
        //     subset_list.add(extract(subset, i));
        // }
        // System.out.println(subset_list);
    }
}