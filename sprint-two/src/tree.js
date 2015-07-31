var Tree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.leaf = 0;
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var child = new Tree(value);
  this.children[this.leaf++] = child;

};

treeMethods.contains = function(target) {
  var flag = false;
  var recContains = function(node) {
    if (node.value === target) {
      flag = true;
    } else {
      if (node.children.length > 0) { //true if there are nested children
        for (var i = 0; i < node.children.length; i++) {
          flag = recContains(node.children[i]);
        } // end for loop
      } // end if loop
    } // end else
    return flag;
  }; // end recContains
  flag = recContains(this);
  return flag;
};

/*
 * Complexity: What is the time complexity of the above functions?

.addChild: O(1)
.contains: O(n)
 */
