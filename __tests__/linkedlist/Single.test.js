const { SingleLinkedList } = require("../../algorithms/LinkedList/Single");

describe("SingleLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new SingleLinkedList();
  });

  test("insertNodeAtHead() should insert a node at the head", () => {
    list.insertNodeAtHead(10);
    list.insertNodeAtHead(20);
    expect(list.head.value).toBe(20);
    expect(list.head.next.value).toBe(10);
    expect(list.printSize()).toBe(2);
  });

  test("insertNodeAtTail() should insert a node at the tail", () => {
    list.insertNodeAtTail(10);
    list.insertNodeAtTail(20);
    expect(list.head.value).toBe(10);
    expect(list.head.next.value).toBe(20);
    expect(list.printSize()).toBe(2);
  });

  test("deleteHead() should remove the head node", () => {
    list.insertNodeAtHead(10);
    list.insertNodeAtHead(20);
    list.deleteHead();
    expect(list.head.value).toBe(10);
    expect(list.printSize()).toBe(1);
    list.deleteHead();
    expect(list.head).toBe(null);
    expect(list.printSize()).toBe(0);
  });

  test("deleteTail() should remove the tail node", () => {
    list.insertNodeAtHead(10);
    list.insertNodeAtTail(20);
    list.insertNodeAtTail(30);
    list.deleteTail();
    expect(list.head.next.value).toBe(20);
    expect(list.printSize()).toBe(2);
    list.deleteTail();
    expect(list.head.value).toBe(10);
    expect(list.printSize()).toBe(1);
    list.deleteTail();
    expect(list.head).toBe(null);
    expect(list.printSize()).toBe(0);
  });

  test("deleteNode() should remove a node with a given value", () => {
    list.insertNodeAtTail(10);
    list.insertNodeAtTail(20);
    list.insertNodeAtTail(30);
    list.deleteNode(20);
    expect(list.head.value).toBe(10);
    expect(list.head.next.value).toBe(30);
    expect(list.printSize()).toBe(2);
    list.deleteNode(10);
    expect(list.head.value).toBe(30);
    expect(list.printSize()).toBe(1);
    list.deleteNode(30);
    expect(list.head).toBe(null);
    expect(list.printSize()).toBe(0);
  });

  test("findValue() should return the node with the given value", () => {
    list.insertNodeAtTail(10);
    list.insertNodeAtTail(20);
    list.insertNodeAtTail(30);
    const node = list.findValue(20);
    expect(node).not.toBe(null);
    expect(node.value).toBe(20);
    const nonExistentNode = list.findValue(40);
    expect(nonExistentNode).toBe(null);
  });

  test("printList() should display the correct linked list sequence", () => {
    console.log = jest.fn();
    list.insertNodeAtTail(10);
    list.insertNodeAtTail(20);
    list.insertNodeAtTail(30);
    list.printList();
    expect(console.log).toHaveBeenCalledWith("10 -> 20 -> 30");
  });

  test("printSize() should return the correct size of the list", () => {
    expect(list.printSize()).toBe(0);
    list.insertNodeAtHead(10);
    expect(list.printSize()).toBe(1);
    list.insertNodeAtTail(20);
    expect(list.printSize()).toBe(2);
    list.deleteHead();
    expect(list.printSize()).toBe(1);
  });
});
