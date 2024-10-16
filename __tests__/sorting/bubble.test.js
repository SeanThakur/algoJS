const { bubbleSort } = require("../../algorithms/sorting/bubble");

describe("Bubble Sort", () => {
  test("should sort an unsorted array of numbers", () => {
    const arr = [64, 34, 25, 12, 22, 11, 90];
    const sortedArr = [11, 12, 22, 25, 34, 64, 90];
    expect(bubbleSort(arr)).toEqual(sortedArr);
  });

  test("should sort an array with negative numbers", () => {
    const arr = [-3, 8, 7, -5, 0, 6];
    const sortedArr = [-5, -3, 0, 6, 7, 8];
    expect(bubbleSort(arr)).toEqual(sortedArr);
  });

  test("should sort an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = [1, 2, 3, 4, 5];
    expect(bubbleSort(arr)).toEqual(sortedArr);
  });

  test("should handle an array with duplicate elements", () => {
    const arr = [3, 3, 2, 1, 4, 4, 5];
    const sortedArr = [1, 2, 3, 3, 4, 4, 5];
    expect(bubbleSort(arr)).toEqual(sortedArr);
  });

  test("should handle an empty array", () => {
    const arr = [];
    const sortedArr = [];
    expect(bubbleSort(arr)).toEqual(sortedArr);
  });

  test("should handle a single-element array", () => {
    const arr = [1];
    const sortedArr = [1];
    expect(bubbleSort(arr)).toEqual(sortedArr);
  });

  test("should sort an array that is sorted in reverse order", () => {
    const arr = [5, 4, 3, 2, 1];
    const sortedArr = [1, 2, 3, 4, 5];
    expect(bubbleSort(arr)).toEqual(sortedArr);
  });
});
