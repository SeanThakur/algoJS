const { DoublyLinkedList } = require("../../algorithms/LinkedList/double");

describe("DoublyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  test("should insert elements to the head correctly", () => {
    list.insertToHead(1);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
    expect(list.size).toBe(1);

    list.insertToHead(2);
    expect(list.head.value).toBe(2);
    expect(list.tail.value).toBe(1);
    expect(list.size).toBe(2);
  });

  test("should insert elements to the tail correctly", () => {
    list.insertToTail(1);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
    expect(list.size).toBe(1);

    list.insertToTail(2);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(2);
    expect(list.size).toBe(2);
  });

  test("should insert elements at a specific index correctly", () => {
    list.insertToHead(1);
    list.insertToTail(3);
    list.insertTo(2, 1);

    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
    expect(list.tail.value).toBe(3);
    expect(list.size).toBe(3);
  });

  test("should not insert at an invalid index", () => {
    list.insertTo(1, -1);
    expect(list.size).toBe(0);

    list.insertTo(1, 2);
    expect(list.size).toBe(0);
  });

  test("should delete elements by value correctly", () => {
    list.insertToHead(1);
    list.insertToTail(2);
    list.insertToTail(3);

    list.deleteByValue(2);
    expect(list.size).toBe(2);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(3);

    list.deleteByValue(1);
    expect(list.size).toBe(1);
    expect(list.head.value).toBe(3);
    expect(list.tail.value).toBe(3);

    list.deleteByValue(3);
    expect(list.size).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test("should not delete a non-existing value", () => {
    list.insertToHead(1);
    list.insertToTail(2);
    list.deleteByValue(3);

    expect(list.size).toBe(2);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(2);
  });

  test("should print the list in correct order", () => {
    const consoleSpy = jest.spyOn(console, "log");

    list.insertToHead(1);
    list.insertToTail(2);
    list.insertToTail(3);

    list.printList();
    expect(consoleSpy).toHaveBeenCalledWith("1 <-> 2 <-> 3");

    consoleSpy.mockRestore();
  });

  test("should print the list in reverse order", () => {
    const consoleSpy = jest.spyOn(console, "log");

    list.insertToHead(1);
    list.insertToTail(2);
    list.insertToTail(3);

    list.printReverse();
    expect(consoleSpy).toHaveBeenCalledWith("3 <-> 2 <-> 1");

    consoleSpy.mockRestore();
  });
});
