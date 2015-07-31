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

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.head = 0;
  this.tail = 0;

};


Queue.prototype.enqueue = function(value){
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function(){
  var output = this.storage[this.head];
  if (this.tail - this.head > 0){ this.head++;}
  return output;
};

Queue.prototype.size = function(){
  return this.tail - this.head;
};
