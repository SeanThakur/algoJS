// It works only in sorted array, it's says that it works better than binary search
// it has o(log n) time compolexity
// it's a combination of linear and binary search
// it's uses best for the array which has inifite size, or we don't the size of the array;

const binarySearch = (arr, l, r, target) => {
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index of the target
    }

    if (target < arr[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1; // Return -1 if the target is not found
};

const binarySearchJSON = (arr, l, r, target, key) => {
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let midValue = arr[mid][key];

    if (midValue === target) {
      return mid;
    }

    if (target < midValue) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};

const exponentialSearchForNumber = (arr, target) => {
  let i = 1;
  let n = arr.length;

  if (arr[0] === target) {
    return 0; // Return the index 0 if the target is the first element
  }

  // Exponentially find the range where the target may exist
  while (i < n && arr[i] <= target) {
    i *= 2;
  }

  // Perform binary search within the found range
  return binarySearch(arr, i / 2, Math.min(i, n - 1), target);
};

const exponentialSearchForJSON = (arr, target, key) => {
  let i = 1;
  let n = arr.length;

  if (arr[0][key] === target) {
    return 0;
  }

  while (i < n && arr[i][key] <= target) {
    i *= 2;
  }

  return binarySearchJSON(arr, i / 2, Math.min(i, n - 1), target, key);
};

module.exports = {
  exponentialSearchForJSON,
  exponentialSearchForNumber,
};
