(function(global) {
  'use strict';
  function LinkedList() {
    this.head = null;
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
    this.size++;
  };

  LinkedList.prototype.removeFromBeginning = function() {
    if (!head) return;
    const _oldHead = this.head;
    this.head = _oldHead.next;
    this.size--;
    return _oldHead.item;
  };

  LinkedList.prototype.getSize = function() {
    return this.size;
  };

  function Node(item) {
    this.item = item;
    this.next = null;
  }

  global.LinkedList = LinkedList;
})(global);
