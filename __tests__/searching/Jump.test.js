// jumpSearch.test.js
const { jumpSearch } = require("../../algorithms/searching/Jump");

describe("Jump Search", () => {
  test("should return the correct index when the target is present", () => {
    const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const target = 7;
    expect(jumpSearch(arr, target)).toBe(3); // 7 is at index 3
  });

  test("should return -1 when the target is not present", () => {
    const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const target = 8;
    expect(jumpSearch(arr, target)).toBe(-1); // 8 is not in the array
  });

  test("should handle an empty array", () => {
    const arr = [];
    const target = 5;
    expect(jumpSearch(arr, target)).toBe(-1); // array is empty
  });

  test("should handle single element array where the element is the target", () => {
    const arr = [5];
    const target = 5;
    expect(jumpSearch(arr, target)).toBe(0); // target found at index 0
  });

  test("should handle single element array where the element is not the target", () => {
    const arr = [5];
    const target = 3;
    expect(jumpSearch(arr, target)).toBe(-1); // target not found
  });

  test("should handle large arrays", () => {
    const arr = Array.from({ length: 100000 }, (_, i) => i * 2);
    const target = 198000;
    expect(jumpSearch(arr, target)).toBe(99000); // target found at index 99000
  });

  test("should find the first element", () => {
    const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const target = 1;
    expect(jumpSearch(arr, target)).toBe(0); // 1 is at index 0
  });

  test("should find the last element", () => {
    const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const target = 19;
    expect(jumpSearch(arr, target)).toBe(9); // 19 is at index 9
  });
});
