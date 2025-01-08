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
        Node left = sortList(head);
        Node right = sortList(mid);
        
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
        if(left == null) return right;
        if(right == null) return left;
        
        if(left.data < right.data) {
            left.next = merge(left.next, right);
            return left;
        }else {
            right.next = merge(left, right.next);
            return right;
        }
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
        // you can't directly modify a primitive int within a helper function in Java, because Java passes primitives by value. This means that when you pass maxDiameter into calculateHeight, the function will only receive a copy of the value, and any changes to it won't reflect back to the caller.
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
            Math.abs(leftHeight - rightHeight) > -1
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
}

//BST operations and implementation
// 1. Construct Binary Search Tree from Preorder Traversal

//DFS

//BFS


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
        int right = 2* i + 2;
        
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
    
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
        int[] arr = {4,5,6,-1,-2,0,1,2,3};
        ArrayList<Integer> sortArr = new ArrayList<>(Arrays.asList(4,5,6,-1,-2,0,1,2,3));
        int[] index = heapSort(arr);
        // System.out.println(Arrays.toString(index));
        
        CustomStack stack = new CustomStack(5);
        
        stack.push(4);
        stack.push(3);
        
        CustomQueueSameAsCircularQueue queue = new CustomQueueSameAsCircularQueue(5);
        
        queue.enqueue(4);
        queue.enqueue(2);
        queue.display();
    
    }
}