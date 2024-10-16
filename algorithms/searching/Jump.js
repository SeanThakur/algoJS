// Jump Search Algorithm
// It works on sorted arrays with time complexity O(√n).
// It divides the array into blocks of size √n and performs a linear search within the block.

// Returns the index of the target if found, otherwise returns -1.

const jumpSearch = (arr, target) => {
  let n = arr.length;
  if (n === 0) {
    return -1; //array is empty
  }
  let prev = 0;
  let step = Math.floor(Math.sqrt(n)); // calculate the square root of arr size

  // Jump ahead in steps until we find a block where the target may reside
  while (target > arr[Math.min(step, n) - 1]) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) {
      return -1; // target not present in array
    }
  }

  // Perform linear search within the identified block
  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) {
      return i; // target found
    }
  }

  return -1; // not found
};

module.exports = {
  jumpSearch,
};
