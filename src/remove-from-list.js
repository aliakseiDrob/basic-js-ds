const { NotImplementedError } = require("../lib/errors");
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, value) {
  let prevElement = null;
  let firstElment = list;
  let current = list;
  while (current) {
    if (current.value === value) {
      if (prevElement) {
        prevElement.next = current.next;
      } else {
        firstElment = current.next;
      }
    } else {
      prevElement = current;
    }
    current = current.next;
  }
  return firstElment;
}

module.exports = {
  removeKFromList,
};
