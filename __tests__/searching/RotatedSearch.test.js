const {
  searcElementInRotatedArrWithDuplicatesValues,
  searchElementInRotatedArrWithUniqueValues,
  findHowManyTimesDoesArrIsRotated,
  findMinElementInRotatedArr,
} = require("../../algorithms/searching/RotatedSearch");

describe("Rotated Array Search Tests", () => {
  test("Search an element in a rotated array with unique values", () => {
    const arr = [15, 18, 2, 3, 6, 12];
    expect(searchElementInRotatedArrWithUniqueValues(arr, 3)).toBe(3);
    expect(searchElementInRotatedArrWithUniqueValues(arr, 15)).toBe(0);
    expect(searchElementInRotatedArrWithUniqueValues(arr, 12)).toBe(5);
    expect(searchElementInRotatedArrWithUniqueValues(arr, 1)).toBe(-1);
  });

  test("Search an element in a rotated array with duplicate values", () => {
    const arr = [2, 5, 6, 0, 0, 1, 2];
    expect(searcElementInRotatedArrWithDuplicatesValues(arr, 0)).toBe(true);
    expect(searcElementInRotatedArrWithDuplicatesValues(arr, 3)).toBe(false);
    expect(searcElementInRotatedArrWithDuplicatesValues(arr, 2)).toBe(true);
    expect(searcElementInRotatedArrWithDuplicatesValues(arr, 7)).toBe(false);
  });

  test("Find the minimum element in a rotated array", () => {
    const arr1 = [3, 4, 5, 1, 2];
    const arr2 = [4, 5, 6, 7, 0, 1, 2];
    const arr3 = [11, 13, 15, 17];
    expect(findMinElementInRotatedArr(arr1)).toBe(1);
    expect(findMinElementInRotatedArr(arr2)).toBe(0);
    expect(findMinElementInRotatedArr(arr3)).toBe(11);
  });

  test("Find how many times the array has been rotated", () => {
    const arr1 = [15, 18, 2, 3, 6, 12];
    const arr2 = [7, 9, 11, 12, 5];
    const arr3 = [2, 3, 6, 12, 15, 18];
    const arr4 = [5];
    expect(findHowManyTimesDoesArrIsRotated(arr1)).toBe(2); // Array rotated 2 times
    expect(findHowManyTimesDoesArrIsRotated(arr2)).toBe(4); // Array rotated 4 times
    expect(findHowManyTimesDoesArrIsRotated(arr3)).toBe(0); // Array not rotated
    expect(findHowManyTimesDoesArrIsRotated(arr4)).toBe(0); // Single element array
  });
});
