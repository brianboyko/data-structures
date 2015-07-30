/*

Prototypal instantiation: using Object.create
Do:
  Work within the src/protoypal/ folder.
  Use Object.create with the object from step 2 to create instances of your class
Don't:
  Use the keyword new
  Example: https://github.com/makersquare/giraffeMaker/blob/master/src/giraffePrototype.js

*/
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = Object.create(stackMethods);
  stack.mySize = 0;

  return stack;
};

var stackMethods = {
  push: function(value) {
    this[this['mySize']] = value;  // this['foo'] is the same as this.foo
    this.mySize++;
  },

  pop: function() {
    if(this.mySize >0) {this.mySize--;}
    var output = this[this['mySize']];
    return output;
  },
  size: function() {
    return this.mySize;
  }

};
