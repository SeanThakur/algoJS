// Example 1:
// Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
// Output: 6 7 1 2 3 4 5
// Explanation: array is rotated to right by 2 position .

// Example 2:
// Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left
// Output: 9 10 11 3 7 8
// Explanation: Array is rotated to right by 3 position.

function rotateArrRight(arr, k) {
  let n = arr.length;

  let temp = [];

  for (let i = n - k; i < n; i++) {
    temp.push(arr[i]);
  }

  for (let i = 0; i <= n - k - 1; i++) {
    temp.push(arr[i]);
  }

  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }
  return arr;
}

function rotateArrLeft(arr, k) {
  let n = arr.length;
  let temp = [];

  for (let i = k; i < n; i++) {
    temp.push(arr[i]);
  }

  for (let i = 0; i <= k - 1; i++) {
    temp.push(arr[i]);
  }

  return arr;
}
