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


var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    size && size--;
    return storage[size];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
