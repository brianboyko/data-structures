/*

Requirements:
  No arrays! Instead, use an object with numeric keys.
  Pass all the tests (open SpecRunner.html in a browser).

Functional instantiation with shared methods: same as step 1, but with shared methods
Do:
  Work within the src/functional-shared/ folder.
   Create an object that holds the methods that will be shared by all instances of the class.
   You'll need to use the keyword this in your methods.
   Use _.extend to copy the methods onto the instance.
Don't:
   Use the keyword new or prototype chains

Example: https://github.com/makersquare/giraffeMaker/blob/master/src/giraffeExtend.js

*/
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.head = 0;
  queue.tail = 0;

  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this[this['tail']] = value;
    this['tail']++;
  }, // end enque
  dequeue: function() {
    if (this['tail'] - this['head'] > 0) {
      var output = this[this['head']];
      this['head']++;
      return output;
    }
  }, // end deque
  size: function() {
    return this['tail'] - this['head'];
  }

}; // end queueMethods
