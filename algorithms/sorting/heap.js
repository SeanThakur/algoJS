// heap sort has 0(n log n) for all the cases

const heapify = (arr, n, i) => {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // left = 2*i + 1
  let right = 2 * i + 2; // left = 2*i + 2

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; //swap largest and current
    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
};

const heapSort = (arr) => {
  let n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // One by one extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // swap last and first
    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
};

module.exports = {
  heapSort,
};
