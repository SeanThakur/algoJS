// The algorithm works for finding the kth smallest/largest element in an array of numbers or an array of JSON objects.
// it has major disadvantage of o(n)square
// best case is o(n)

//How the partition algorithm works
// 1. take the first index of the array and take the right most element as pivot
// 2. assign i be equal to left index
// 3. itrate through left to right
// check if arr[j] <= pivot then swap i and j element and increment i
// 4. after the loop swap i and right element and retur index

const partitionForNumbers = (arr, l, r) => {
  let pivot = arr[r];
  let i = l;
  for (let j = l; j < r; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swaping i and j
      i += 1;
    }
  }
  [arr[i], arr[r]] = [arr[r], arr[i]]; // swap arr[i] with arr[r]
  return i;
};

const quickSelectForNumbers = (arr, l, r, k) => {
  if (l <= r) {
    let pivot = partitionForNumbers(arr, l, r);

    if (pivot === k - 1) {
      return arr[pivot]; // fount this mf
    }

    if (pivot > k - 1) {
      return quickSelectForNumbers(arr, l, pivot - 1, k); // search on left part of the partition
    } else {
      return quickSelectForNumbers(arr, pivot + 1, r, k); // search on right part of the partition
    }
  }
  return -1; // if array is empty
};

const partitionForJson = (arr, l, r, key) => {
  let pivot = arr[r][key];
  let i = l;

  for (let j = l; j < r; j++) {
    if (arr[j][key] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i += 1;
    }
  }

  [arr[i], arr[r]] = [arr[r], arr[i]];
  return i;
};

const quickSelectForJSON = (arr, l, r, k, key) => {
  if (l <= r) {
    let pivot = partitionForJson(arr, l, r, key);

    if (pivot === k - 1) {
      return arr[pivot];
    }

    if (pivot > k - 1) {
      return quickSelectForJSON(arr, l, pivot - 1, k, key);
    } else {
      return quickSelectForJSON(arr, pivot + 1, r, k, key);
    }
  }
  return null;
};

module.exports = {
  quickSelectForNumbers,
  quickSelectForJSON,
};
