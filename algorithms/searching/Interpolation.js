// all the elements should be in sorted order
// interval between element should be uniform
// for example :- [10,13,15,26,28,30,50,56,58]
// Worst case time complexity is o(n) and best case is o(log2(log2 n ))
// Formula for this algorithm to find the nearest index = l + ((r - l) / (arr[r] - arr[l])) * (target - arr[l])
// For this formula l is first index and r is last index

const interpolationSearch = (arr, target) => {
  if (arr.length == 0) {
    return -1;
  }
  let l = 0;
  let r = arr.length - 1; // last index of the array

  while (l <= r && target >= arr[l] && target <= arr[r]) {
    // If all elements are the same, we can only compare the target with one of them
    if (arr[l] === arr[r]) {
      return arr[l] === target ? l : -1;
    }
    // i.e arr[r] >= target >= arr[l]
    let nearestIdx =
      l + Math.floor(((r - l) / (arr[r] - arr[l])) * (target - arr[l]));

    // Ensure nearestIdx is within bounds
    nearestIdx = Math.max(l, Math.min(r, nearestIdx));

    if (arr[nearestIdx] === target) {
      return nearestIdx; // wem found the index of our target
    }

    if (target < arr[nearestIdx]) {
      r = nearestIdx - 1;
    } else {
      l = nearestIdx + 1;
    }
  }
  return -1; // target not found
};

module.exports = {
  interpolationSearch,
};
