// The idea of Kadane’s algorithm is to maintain a maximum subarray sum ending at every index ‘i’ of the
// given array and update the maximum sum obtained by comparing it with the maximum sum of the subarray ending at every index ‘i’.

// At any given index ‘i’ of the array, we can either:

// Append the element at index ‘i’ to the maximum sum subarray(so just add the element at index ‘i’ to the maximum you’ve found so far).
// Start a new subarray starting from index ‘i’. Appending an element at index ‘i’ to the maximum sum subarray obtained
// so far is beneficial if the sum till index ‘i-1’ is non-negative, otherwise it is better to start a new subarray
// starting from index ‘i’ and update the maximum sum obtained accordingly.

function kadanesAlgoToFindMaxSum(arr) {
  let currSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];

    maxSum = Math.max(maxSum, currSum);

    if (currSum < 0) {
      currSum = 0;
    }
  }

  return maxSum;
}

function kadanesAlgoToFindMaxSumSubarrays(arr) {
  let currSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];

    if (currSum > maxSum) {
      maxSum = currSum;
      start = tempStart;
      end = i;
    }

    if (currSum < 0) {
      currSum = 0;
      tempStart = i + 1;
    }
  }

  const maxSubArray = arr.slice(start, end + 1);

  return {
    maxSubArray,
    maxSum,
  };
}

function kadanesAlgoMultipleMaxSubarrays(arr) {
  let currSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let tempStart = 0;
  let maxSubArray = [];

  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];

    if (currSum > maxSum) {
      maxSum = currSum;
      maxSubArray = [[...arr.slice(tempStart, i + 1)]];
    } else if (currSum == maxSum) {
      maxSubArray.push([...arr.slice(tempStart, i + 1)]);
    }

    if (currSum < 0) {
      currSum = 0;
      tempStart = i + 1;
    }
  }

  return {
    maxSum,
    maxSubArray,
  };
}
