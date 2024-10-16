// Import the functions from the module
const {
  binarySearchInArraysOfNumber,
  binarySearchInJson,
} = require("../../algorithms/searching/Binary");

describe("binarySearchInArraysOfNumber", () => {
  test("should return the target when it exists in the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(binarySearchInArraysOfNumber(arr, 5)).toBe(5); // Target exists
  });

  test("should return -1 when the target does not exist in the array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(binarySearchInArraysOfNumber(arr, 10)).toBe(-1); // Target does not exist
  });

  test("should return -1 for an empty array", () => {
    const arr = [];
    expect(binarySearchInArraysOfNumber(arr, 1)).toBe(-1); // Empty array
  });

  test("should return the target for a single-element array", () => {
    const arr = [5];
    expect(binarySearchInArraysOfNumber(arr, 5)).toBe(5); // Single-element array
  });

  test("should return -1 when target is not in single-element array", () => {
    const arr = [5];
    expect(binarySearchInArraysOfNumber(arr, 1)).toBe(-1); // Single-element array, target not present
  });
});

describe("binarySearchInJson", () => {
  test("should return the target when it exists in the array of objects", () => {
    const arr = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
      { id: 4, name: "Dave" },
    ];
    expect(binarySearchInJson(arr, "Charlie", "name")).toBe("Charlie"); // Target exists
  });

  test("should return -1 when the target does not exist in the array of objects", () => {
    const arr = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
      { id: 4, name: "Dave" },
    ];
    expect(binarySearchInJson(arr, "Eve", "name")).toBe(-1); // Target does not exist
  });

  test("should return -1 for an empty array of objects", () => {
    const arr = [];
    expect(binarySearchInJson(arr, "Alice", "name")).toBe(-1); // Empty array
  });

  test("should return the target for a single-object array", () => {
    const arr = [{ id: 1, name: "Alice" }];
    expect(binarySearchInJson(arr, "Alice", "name")).toBe("Alice"); // Single-object array
  });

  test("should return -1 when target is not in a single-object array", () => {
    const arr = [{ id: 1, name: "Alice" }];
    expect(binarySearchInJson(arr, "Bob", "name")).toBe(-1); // Single-object array, target not present
  });
});
