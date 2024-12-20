// Search element for rotated array has multiple scnarios, such as:-
// 1. search an element through rotated array with unique values?
// 2. search an element through rotated array with duplicates values?
// 3. find minimum value present in rotated array?
// 4. find how many times does an array has rotated?

// For Every scnarios of question will use binary search technique with different implentation method for every question

const searchElementInRotatedArrWithUniqueValues = (arr, target) => {
  // For this rotated unique values of array, either left or right part of the sub array will always be sorted.
  let n = arr.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // we found that mf!!
    }

    if (arr[left] <= arr[mid]) {
      // left to mid sub array is sorted
      if (arr[left] <= target && target <= arr[mid]) {
        //   arr[left] < target < arr[mid] it implies that target is within our left sub array
        right = mid - 1; // eliminate right subarray
      } else {
        left = mid + 1; // eliminate left subarray
      }
    } else {
      if (arr[mid] <= target && target <= arr[right]) {
        // arr[mid] < target < arr[right] it implies that target is within our right sub array
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1; // not found
};

const searcElementInRotatedArrWithDuplicatesValues = (arr, target) => {
  let n = arr.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return true; // we found the element it exist
    }

    // all three element i.e left , mid and right is same
    if (arr[left] == arr[mid] && arr[mid] == arr[right]) {
      left++; // move one pointer forward
      right--; // move one pointer backward
      continue; // continue till all the elements are not same
    }

    if (arr[left] <= arr[mid]) {
      // left to mid sub array is sorted
      if (arr[left] <= target && target <= arr[mid]) {
        // arr[left] <= target <= arr[mid] i.e it should always be in range of left and mid
        right = mid - 1; // Target is in the left half
      } else {
        left = mid + 1; // Target is in the right half
      }
    } else {
      if (arr[mid] <= target && target <= arr[right]) {
        // target should is in the range of mid and right
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
  }
  return false; // not found
};

//Finding min value within the rotated array
const findMinElementInRotatedArr = (arr) => {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  let ans = Number.MAX_SAFE_INTEGER; // default value for now, it will be used to store min value between subarray's

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // if arr[left] is already smaller than arr[right] that means the sub array is already sorted
    // we don't need to perform the search any more and return the min value
    if (arr[left] <= arr[right]) {
      ans = Math.min(ans, arr[left]);
      break;
    }

    // check left side of the array is sorted or not
    if (arr[left] <= arr[mid]) {
      ans = Math.min(ans, arr[left]); // store the min value of the sub array
      left = mid + 1; // after storing the min value, eleminate the sub array
    } else {
      ans = Math.min(ans, arr[mid]); // storing the min value of the right sub arrays
      right = mid - 1; // eleminating the right sub array
    }
  }

  return ans;
};

// Find how many time does the array is rotated? for this question the value will be unique.
// In short, the answer of this question will be determined by the min value index.
const findHowManyTimesDoesArrIsRotated = (arr) => {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  let index = -1; // it will be used to locate the index of min value
  let ans = Number.MAX_SAFE_INTEGER; // it will be used to store min value of the sub arrays

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // if arr[left] is already smaller than arr[right] that means the sub array is already sorted
    // we don't need to perform the search any more and return the min value
    // update the index with min value i.e arr[left] and answer with min value and break the array
    if (arr[left] <= arr[right]) {
      if (arr[left] < ans) {
        index = left;
        ans = arr[left];
      }
      break;
    }

    // check if left subarrays is sorted
    if (arr[left] <= arr[mid]) {
      if (arr[left] < ans) {
        // check value of left is smaller than ans
        index = left; // update the min value index
        ans = arr[left]; // update the min value to ans
      }
      left = mid + 1; // eliminate the left sub arrays
    } else {
      right = mid - 1; // eliminate the right sub arrays
      if (arr[mid] < ans) {
        // check value of mid is smaller than ans
        index = mid; // update the index with mid
        ans = arr[mid]; // update the ans with mid value
      }
    }
  }

  return index;
};

module.exports = {
  searcElementInRotatedArrWithDuplicatesValues,
  searchElementInRotatedArrWithUniqueValues,
  findHowManyTimesDoesArrIsRotated,
  findMinElementInRotatedArr,
};
