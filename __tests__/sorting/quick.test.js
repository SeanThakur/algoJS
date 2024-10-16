const { quickSort } = require("../../algorithms/sorting/quick");

describe("Quick Sort", () => {
  test("should sort an array of numbers in ascending order", () => {
    const arr = [5, 3, 8, 4, 2];
    const sortedArr = quickSort(arr);
    expect(sortedArr).toEqual([2, 3, 4, 5, 8]);
  });

  test("should return an already sorted array as is", () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = quickSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle an array with negative numbers", () => {
    const arr = [-3, -1, -7, -4, -2];
    const sortedArr = quickSort(arr);
    expect(sortedArr).toEqual([-7, -4, -3, -2, -1]);
  });

  test("should handle an array with duplicate elements", () => {
    const arr = [5, 1, 5, 3, 1];
    const sortedArr = quickSort(arr);
    expect(sortedArr).toEqual([1, 1, 3, 5, 5]);
  });

  test("should handle an empty array", () => {
    const arr = [];
    const sortedArr = quickSort(arr);
    expect(sortedArr).toEqual([]);
  });

  test("should handle an array with one element", () => {
    const arr = [1];
    const sortedArr = quickSort(arr);
    expect(sortedArr).toEqual([1]);
  });

  test("should handle an array with all identical elements", () => {
    const arr = [2, 2, 2, 2, 2];
    const sortedArr = quickSort(arr);
    expect(sortedArr).toEqual([2, 2, 2, 2, 2]);
  });
});
