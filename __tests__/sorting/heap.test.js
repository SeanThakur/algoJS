// heapSort.test.js
const { heapSort } = require("../../algorithms/sorting/heap");

describe("Heap Sort", () => {
  test("should sort an array of positive numbers", () => {
    const arr = [4, 10, 3, 5, 1];
    const sorted = heapSort(arr);
    expect(sorted).toEqual([1, 3, 4, 5, 10]);
  });

  test("should handle an empty array", () => {
    const arr = [];
    const sorted = heapSort(arr);
    expect(sorted).toEqual([]);
  });

  test("should handle an array with one element", () => {
    const arr = [5];
    const sorted = heapSort(arr);
    expect(sorted).toEqual([5]);
  });

  test("should handle an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    const sorted = heapSort(arr);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle an array sorted in reverse order", () => {
    const arr = [5, 4, 3, 2, 1];
    const sorted = heapSort(arr);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  test("should sort an array with duplicate elements", () => {
    const arr = [4, 2, 2, 8, 3, 3, 1];
    const sorted = heapSort(arr);
    expect(sorted).toEqual([1, 2, 2, 3, 3, 4, 8]);
  });

  test("should sort an array with negative numbers", () => {
    const arr = [3, -1, 0, -5, 10];
    const sorted = heapSort(arr);
    expect(sorted).toEqual([-5, -1, 0, 3, 10]);
  });

  test("should sort an array with all identical elements", () => {
    const arr = [7, 7, 7, 7, 7];
    const sorted = heapSort(arr);
    expect(sorted).toEqual([7, 7, 7, 7, 7]);
  });
});
