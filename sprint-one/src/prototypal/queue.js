/*

Prototypal instantiation: using Object.create
Do:
  Work within the src/protoypal/ folder.
  Use Object.create with the object from step 2 to create instances of your class
Don't:
  Use the keyword new
  Example: https://github.com/makersquare/giraffeMaker/blob/master/src/giraffePrototype.js

*/


var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.head = 0;
  queue.tail = 0;

  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.tail] = value;
    this.tail++;
  },

  dequeue: function() {
    var output = this[this.head];
    if (this.tail - this.head > 0){this.head++};

    return output;
  },

  size: function() {
    return this.tail - this.head;
  }
};

