var LinkedList = function(){  // -bb this is a class!
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){ // --bb takes a value and adds it to the end of the list.
    myNode = new Node(value);
    if(list.head === null){
      list.head = myNode;
      list.tail = myNode;
    } else {
      var oldTail = list.tail;
      list.tail = myNode;
      oldTail.next = list.tail;
    }
  };

  list.removeHead = function(){ // --bb removes first node from the list, and returns it's value.
    var output = list.head.value;
    list.head = list.head.next;

     return output;
  };

  list.contains = function(target){ //--bb returns boolean reflecting whether or not the passed-in value is in the linked list
    var flag = false;
    var breaker = false;
    var searchNode = list.head;
    do{
      if(searchNode.value === target){
        flag = true;
      } else {
        if(searchNode.next === null){ breaker = true;}
        searchNode = searchNode.next; // -- bb added
      }
    } while(!flag && !breaker) // -- bb changed from "tail" to "next"

    return flag; // -- bb added
  };

  return list;
};

var Node = function(value){  // --bb this is a class!
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
