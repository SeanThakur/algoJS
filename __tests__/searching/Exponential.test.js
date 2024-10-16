const {
  exponentialSearchForNumber,
  exponentialSearchForJSON,
} = require("../../algorithms/searching/Exponential");

describe("Exponential Search Tests", () => {
  test("exponentialSearchForNumber should find the target in a sorted array", () => {
    const arr = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18];
    expect(exponentialSearchForNumber(arr, 10)).toBe(5);
    expect(exponentialSearchForNumber(arr, 1)).toBe(0);
    expect(exponentialSearchForNumber(arr, 18)).toBe(9);
    expect(exponentialSearchForNumber(arr, 5)).toBe(-1);
  });

  test("exponentialSearchForJSON should find the target in an array of objects", () => {
    const arr = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
      { id: 4, name: "David" },
      { id: 5, name: "Eve" },
      { id: 6, name: "Frank" },
      { id: 7, name: "Grace" },
      { id: 8, name: "Hannah" },
    ];

    expect(exponentialSearchForJSON(arr, 4, "id")).toBe(3);
    expect(exponentialSearchForJSON(arr, 1, "id")).toBe(0);
    expect(exponentialSearchForJSON(arr, 8, "id")).toBe(7);
    expect(exponentialSearchForJSON(arr, 9, "id")).toBe(-1);
    expect(exponentialSearchForJSON(arr, "Charlie", "name")).toBe(2);
    expect(exponentialSearchForJSON(arr, "Alice", "name")).toBe(0);
    expect(exponentialSearchForJSON(arr, "Hannah", "name")).toBe(7);
    expect(exponentialSearchForJSON(arr, "Zoe", "name")).toBe(-1);
  });
});
