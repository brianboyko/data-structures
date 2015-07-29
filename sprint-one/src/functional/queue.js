var Queue = function(){
  console.log("quote new queue");
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var tail = 0;
  var head = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function(){
    var output = storage[head];
    head++;

    return output;
  };

  someInstance.size = function(){
    return tail - head;
  };

  return someInstance;
};
