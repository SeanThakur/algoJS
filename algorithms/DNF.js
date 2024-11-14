// Dutch National Flag Algorithm

// The solution involves iterating through the original array and counting the number of 0s, 1s, and 2s,
// and just overwriting the original array in a second pass. The only disadvantage is that we need to traverse the array
// twice to get a sorted array.

// Steps:

// Traverse the array once and keep track of the count of 0s, 1s and 2s encountered.
// Now traverse the array again and overwrite the array starting from the beginning, first with 0s, then 1s, and finally all 2s.

function dnf(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      swap(arr, low, mid);
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      swap(arr, mid, high);
      high--;
    }
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
