

var Graph = function() {
  this.value = null;
  this.edges = [];
  this.nodes = []; // store values as key in nodes?
  var index = 0;
};
//this.storage = {}

// method that takes a new node and adds it to the graph
Graph.prototype.addNode = function(node) { // needs to add values, edges, and index
  var myGraph = new Graph;  // --bb removed ()
  myGraph.value = node;

  return myGraph; // create edges here?
};
//if node doesn't already exist in graph:
//this.storage[node] = {edges:[]}
//else
//push to edges array

// method that takes any node and returns a boolean
// reflecting whether it can be found in the graph
Graph.prototype.contains = function(node) {
  if (this.value === node) {
    return true;
  } else {
    return false;
  }
};

// method that takes any node and removes it from
// the graph, if present. All edges connected to that
// Node are removed as well.
Graph.prototype.removeNode = function(node){
};


 // method that creates a edge (connection) between two
 // nodes if they both are present within the graph
Graph.prototype.hasEdge = function(fromNode, toNode){
};

  // method that returns a boolean reflecting whether
  // or not two nodes are connected
Graph.prototype.addEdge = function(fromNode, toNode){
};


// method that removes the connection between two nodes
Graph.prototype.removeEdge = function(fromNode, toNode){
};


// method that traverses through the graph,
// calling a passed in function once on each node
Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



