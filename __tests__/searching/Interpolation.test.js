const {
  interpolationSearch,
} = require("../../algorithms/searching/Interpolation");

describe("Interpolation Search", () => {
  test("should return the index of the target element in a uniformly distributed array", () => {
    const arr = [10, 13, 15, 26, 28, 30, 50, 56, 58];
    expect(interpolationSearch(arr, 30)).toBe(5); // Target exists
  });

  test("should return -1 if the target element is not in the array", () => {
    const arr = [10, 13, 15, 26, 28, 30, 50, 56, 58];
    expect(interpolationSearch(arr, 100)).toBe(-1); // Target does not exist
  });

  test("should return -1 for an empty array", () => {
    expect(interpolationSearch([])).toBe(-1); // Empty array
  });

  test("should return the index when all elements are the same and target matches", () => {
    const arr = [5, 5, 5, 5, 5];
    expect(interpolationSearch(arr, 5)).toBe(0); // Target exists
  });

  test("should return -1 when all elements are the same but target does not match", () => {
    const arr = [5, 5, 5, 5, 5];
    expect(interpolationSearch(arr, 10)).toBe(-1); // Target does not exist
  });

  test("should handle targets at the boundaries of the array", () => {
    const arr = [10, 20, 30, 40, 50];
    expect(interpolationSearch(arr, 10)).toBe(0); // First element
    expect(interpolationSearch(arr, 50)).toBe(4); // Last element
  });

  test("should handle a large array and return correct index", () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i * 2); // Even numbers
    expect(interpolationSearch(arr, 500)).toBe(250); // Target exists
    expect(interpolationSearch(arr, 999)).toBe(-1); // Target does not exist
  });
});
