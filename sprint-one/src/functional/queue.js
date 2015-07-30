/*

Requirements:
  No arrays! Instead, use an object with numeric keys.
  Pass all the tests (open SpecRunner.html in a browser).

Functional instantiation: a simple "maker" pattern
Do:
  Work within the src/functional/ folder.
  Define all functions and properties within the maker function.
Don't:
  Use the keyword new, the keyword this, or any prototype chains.
  Capitalize the maker function name.
  Example: The provided classes Stack and Queue already follow this pattern

*/



var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var tail = 0;
  var head = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function() {
    var output = storage[head]; // -bb Why does this not work without declaring an output?
    if (storage[head]) {
      head++
    }
    return output;
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};


