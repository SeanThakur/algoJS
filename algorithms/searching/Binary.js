// Binary search will only work for sorted arrays or sorted JSON like value in Object should be sorted!!!

const binarySearchInArraysOfNumber = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return target; // return this mf out, we know we got it!!
    }

    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1; // we lost him
};

const binarySearchInJson = (arr, target, key) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midValue = arr[mid][key];

    if (midValue === target) {
      return target; // return this mf out, we know we got it!!
    }

    if (target < midValue) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1; // we lost him
};

module.exports = {
  binarySearchInArraysOfNumber,
  binarySearchInJson,
};
