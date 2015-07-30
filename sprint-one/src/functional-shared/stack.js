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

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.mySize = 0;

  _.extend(stack, stackMethods);


  return stack;
};

var stackMethods = {
  push: function(value) {
    this[this['mySize']] = value;
    this['mySize']++;
  },
  pop: function() {
    if (this['mySize'] > 0) {
      this['mySize']--;
    }
    return this[this['mySize']];
  },
  size: function() {
    return this['mySize'];
  }

};
// FUN FACT:  this[size] is equal to this[0], this[1], etc. this.size = 0, 1, etc.
