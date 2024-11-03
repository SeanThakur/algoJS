// This implementation uses a divide-and-conquer approach to achieve an average time complexity of 0(n log n)
// with the worst case of 0(n sqr)

// Explanation
// Base Case: If the array has one or no elements, it is already sorted.
// Pivot Selection: The last element of the array is chosen as the pivot.
// Partitioning: The array is divided into two sub-arrays:
// left contains elements less than the pivot.
// right contains elements greater than or equal to the pivot.
// Recursive Sorting: Recursively apply quick sort to the left and right sub-arrays.
// Concatenation: Combine the sorted left sub-array, pivot, and sorted right sub-array.

const quickSort = (arr) => {
  let n = arr.length;
  if (n <= 1) {
    return arr;
  }

  let pivot = arr[n - 1]; // let the pivot be the last element
  let left = []; // it will contain all the element which is smaller than pivot
  let right = []; // it will contain all the element which is greater than pivot

  // iterating through each element to compare with pivot and partioning them
  // Iterate until the second last element
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort left and right sub-arrays, combining left, pivot and right
  return [...quickSort(left), pivot, ...quickSort(right)];
};

const quickSortWithRandomPivot = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotIdx = Math.floor(Math.random() * arr.length);
  let pivot = arr[pivotIdx];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== pivotIdx) {
      // skip pivot idx
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }

  return [
    ...quickSortWithRandomPivot(left),
    pivot,
    ...quickSortWithRandomPivot(right),
  ];
};

module.exports = {
  quickSort,
};
