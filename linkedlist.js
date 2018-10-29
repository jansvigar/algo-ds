(function(global) {
  'use strict';
  function LinkedList() {
    this.head = undefined;
    this.size = 0;
  }

  LinkedList.prototype.insertAtBeginning = function(value) {
    const _node = new Node(value);
    if (!this.head) {
      this.head = _node;
    } else {
      const _oldHead = this.head;
      this.head = _node;
      this.head.next = _oldHead;
    }
  };

  function Node(item) {
    this.item = item;
    this.next = null;
  }

  global.LinkedList = LinkedList;
})(global);

const linked_list = new LinkedList();
linked_list.insertAtBeginning(1);
console.log(linked_list);
