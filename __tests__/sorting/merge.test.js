const { mergeSort } = require("../../algorithms/sorting/merge");

describe("Merge Sort", () => {
  test("sorts an unsorted array", () => {
    const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([3, 9, 10, 27, 38, 43, 82]);
  });

  test("returns the same array if it is already sorted", () => {
    const sortedArray = [1, 2, 3, 4, 5];
    const result = mergeSort(sortedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts an array that is in reverse order", () => {
    const reverseArray = [5, 4, 3, 2, 1];
    const sortedArray = mergeSort(reverseArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles an empty array", () => {
    const emptyArray = [];
    const result = mergeSort(emptyArray);
    expect(result).toEqual([]);
  });

  test("handles an array with one element", () => {
    const singleElementArray = [42];
    const result = mergeSort(singleElementArray);
    expect(result).toEqual([42]);
  });

  test("sorts an array with duplicate elements", () => {
    const duplicateArray = [4, 1, 3, 2, 4, 5, 4];
    const sortedArray = mergeSort(duplicateArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 4, 4, 5]);
  });

  test("sorts an already sorted array with duplicates", () => {
    const alreadySortedDupes = [1, 1, 2, 2, 3, 3];
    const result = mergeSort(alreadySortedDupes);
    expect(result).toEqual([1, 1, 2, 2, 3, 3]);
  });
});
