var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    size && size--;
    var output = storage[0];
    for(var key in storage){
      storage[key] = storage[key+1];
    }
    return output;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
