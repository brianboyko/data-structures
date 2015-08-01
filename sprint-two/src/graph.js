

var Graph = function() {
 this.storage = {};
};



// method that takes a new node and adds it to the graph
Graph.prototype.addNode = function(node) { // needs to add values, edges, and index
  this.storage[node] = {
    edges: []
  };

};
//if node doesn't already exist in graph:
//this.storage[node] = {edges:[]}
//else
//push to edges array

// method that takes any node and returns a boolean
// reflecting whether it can be found in the graph
Graph.prototype.contains = function(node) {
  for(var key in this.storage){
    if(key === node){
      return true;
    }
  }
  return false;
};

// method that takes any node and removes it from
// the graph, if present. All edges connected to that
// Node are removed as well.
Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};


 // method that creates a edge (connection) between two
 // nodes if they both are present within the graph
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (_.contains(this.storage[fromNode].edges, toNode) && _.contains(this.storage[
    toNode].edges, fromNode)) {
    return true;
  }

  return false;
};

  // method that returns a boolean reflecting whether
  // or not two nodes are connected
Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edges.push(toNode);
  this.storage[toNode].edges.push(fromNode);
};


// method that removes the connection between two nodes
   // Return a copy of the object without the blacklisted properties.

Graph.prototype.removeEdge = function(fromNode, toNode){
   //On the fromnode

   var removeIt = function (collection, it){
     for(var i = 0; i < collection.length; i++){
       if (collection[i] === it){
         collection = collection.slice(0, i).concat(collection.slice(i+1));  // -- bb this was where the problem was, I was using concat incorrectly
       }
     }
     return collection;
   };
   this.storage[fromNode].edges = removeIt(this.storage[fromNode].edges, toNode);
   this.storage[toNode].edges = removeIt(this.storage[toNode].edges, fromNode);

    //search it's edges
    //remove any entries that match toNode
  //on the to node
    //search it's edges
    //remove any entries that match fromNode -- bb -- possible DRY solution here?sx

};


// method that traverses through the graph,
// calling a passed in function once on each node
Graph.prototype.forEachNode = function(cb){
  // for var key in this.storage?
    // _.each() ??
    // _.each(this.storage, cb)?
    for(var key in this.storage){
      cb(key);
    }

};

/*
 * Complexity: What is the time complexity of the above functions?
.contains O(n)
.removeNode O(1)
.hasEdge = O(n)
.addEdge = O(1)

 */



