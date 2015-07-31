/*
Pseudoclassical instantiation: create instances with the keyword new
Do:
  Work within the src/pseudoclassical/ folder.
  Capitalize your function name to indicate that it is intended to be run with the keyword new
  Use the keyword new when instantiating your class
  Use the keyword this in your constructor
Don't:
  Declare the instance explicitly
  Return the instance explicitly
Example: https://github.com/makersquare/giraffeMaker/blob/master/src/giraffePseudoClassical.js
*/
/// maybe this might help: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
/// maybe class Stack, not var stack? ???

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.mySize = 0;
  this.stackMethods = stackMethods; // ?

  // what if we did this:   this.storage = {}; -- this would remove the this.this.mySize problem, by using this.storage[mySize]
};




var stackMethods = {
  push: function(value) {
    // would this.storage[mySize] work?
    this.this.mySize = value;
    this.mySize++;
  },
  pop: function(){
    if (this.mySize > 0){this.mySize--;}
    var output = this.this.mySize;
    return output;
  },
  size: function() {
    return this.mySize;
  }
}

// test uses the keyword new - but maybe we don't use the keyword new... delete this line?
var stack = new Stack;
