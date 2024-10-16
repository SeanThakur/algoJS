// Time Complexity: O(n log n) for all cases (best, average, and worst case)
// Explanation:
// - This algorithm uses the divide-and-conquer approach.
// - It divides the array into two halves, recursively sorts them, and then merges the sorted halves

const merge = (left, right) => {
  let result = [];
  let i = 0; // pointer to the left halve
  let j = 0; // pointer to the right halve

  // iterate through left and right subarray with comparision
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  //append remaining left value in result
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  //append remaining right value in result
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
};

const mergeSort = (arr) => {
  let n = arr.length;

  // if array has 0 or one element it's already sorted
  if (n <= 1) {
    return arr;
  }

  // Divide the array into two halves

  let mid = Math.floor(n / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively sort the left and right halves and merge them
  return merge(mergeSort(left), mergeSort(right));
};

module.exports = {
  mergeSort,
};
