const {
  quickSelectForNumbers,
  quickSelectForJSON,
} = require("../../algorithms/searching/QuickSelect");

// Tests for quickSelectForNumbers
describe("quickSelectForNumbers", () => {
  test("should find the kth smallest element in an array of numbers", () => {
    const arr = [3, 2, 1, 5, 4];
    const k = 2;
    const result = quickSelectForNumbers(arr, 0, arr.length - 1, k);
    expect(result).toBe(2); // The 2nd smallest element is 2
  });

  test("should find the kth largest element in an array of numbers", () => {
    const arr = [7, 10, 4, 3, 20, 15];
    const k = 3;
    const result = quickSelectForNumbers(arr, 0, arr.length - 1, k);
    expect(result).toBe(7); // The 3rd smallest element is 7
  });

  test("should return -1 for an empty array", () => {
    const arr = [];
    const k = 1;
    const result = quickSelectForNumbers(arr, 0, arr.length - 1, k);
    expect(result).toBe(-1);
  });
});

// Tests for quickSelectForJSON
describe("quickSelectForJSON", () => {
  test("should find the kth smallest object based on a specified key", () => {
    const arr = [
      { value: 10 },
      { value: 4 },
      { value: 15 },
      { value: 7 },
      { value: 3 },
      { value: 20 },
    ];
    const k = 3;
    const key = "value";
    const result = quickSelectForJSON(arr, 0, arr.length - 1, k, key);
    expect(result).toEqual({ value: 7 }); // The 3rd smallest element based on 'value' is 7
  });

  test("should return null for an empty array", () => {
    const arr = [];
    const k = 1;
    const key = "value";
    const result = quickSelectForJSON(arr, 0, arr.length - 1, k, key);
    expect(result).toBeNull();
  });

  test("should handle case when all elements have the same key value", () => {
    const arr = [{ value: 5 }, { value: 5 }, { value: 5 }, { value: 5 }];
    const k = 2;
    const key = "value";
    const result = quickSelectForJSON(arr, 0, arr.length - 1, k, key);
    expect(result).toEqual({ value: 5 }); // All values are the same, so the result should be 5
  });
});
