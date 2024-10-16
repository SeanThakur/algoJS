// Best-case time complexity: O(n) when the array is already sorted.
// Worst-case time complexity: O(n²) when the array is sorted in reverse order.

const bubbleSort = (arr) => {
  let n = arr.length;
  let swapped;

  // loop through all the element of the array
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    // loop thorugh all the adjecent element
    for (let j = 0; j < n - 1 - i; j++) {
      // if current element is greater than swapped
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // break the loop if array is already sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
};

module.exports = {
  bubbleSort,
};
