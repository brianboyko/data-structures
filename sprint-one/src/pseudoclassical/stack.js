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

  this.storage = {};
  this.mySize = 0;

  // -bb what if we did this:   this.storage = {}; -- this would remove the this.this.mySize problem, by using this.storage[mySize]
};




Stack.prototype.push = function(value) {
    // - bbwould this.storage[mySize] work?
    this.storage[this.mySize] = value;
    this.mySize++;
  };
Stack.prototype.pop = function(){
    if (this.mySize > 0){this.mySize--;}
    var output = this.storage[this.mySize];
    return output;
  };
Stack.prototype.size = function() {
    return this.mySize;
  };

