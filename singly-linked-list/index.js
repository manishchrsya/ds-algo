/**
 * It is a data-structure that contains a head, tail and length property.
 *
 * Linked list consists on nodes, and each node has a value and a pointer to another node or null.
 *
 *
 *   [4] -next-> [6] --next-> [8] --next-> [2] ---> null
 *   head-------------length=4-------------tail
 *
 *   The Above is the representation of singly linked list
 *
 *
 * the bellow are some properties of the linked list
 *
 * 1. Do not have indexes
 * 2. Connected via nodes with a next pointer
 * 3. Random access is not allowed
 *
 *
 *
 * bellow are an example to create a linked list
 *
 *
 *
 * */

/**
 * traditional way of creating
 * */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let list = new Node("Hi");
list.next = new Node("There");
list.next.next = new Node("How");
list.next.next.next = new Node("Are");
list.next.next.next.next = new Node("You");

console.log("list", list);

/**
 * The above method of creating the singly-linked list is very complex.
 *
 * here is another way of creating
 * */

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.value = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {}
}

let linkedList = new SinglyLinkedList();

linkedList.push("Hi");
linkedList.push("There");
linkedList.push("My");
linkedList.push("name");
linkedList.push("is");
linkedList.push("manish");

console.log("linkedlist", linkedList);
