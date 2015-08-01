var HashTable = function() {
  this.limit = 8;
  this.storage = LimitedArray(this.limit);
};

HashTable.prototype.insert = function(k, v) {
  var i = getIndexBelowMaxForKey(k, this.limit);
  var bucket = this.storage.get(i);
  // if the bucket is empty, create bucket and add first value tuple [k, v]
  if (bucket === undefined) {
    this.storage.set(i, [[k, v]]);
    return;
  }
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket[j][1] = v;
      return;
    }

  }
  bucket.push([k, v]);
  return;
};

HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this.limit);
  var bucket = this.storage.get(i); // possibly refactor into global variable?
  console.log('bucket', bucket)
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      return bucket[j][1];
    }
  }
  return null;


};

HashTable.prototype.remove = function(k) {
  var i = getIndexBelowMaxForKey(k, this.limit);
  var bucket = this.storage.get(i); // possibly refactor into global variable?
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket.splice(j, 1);
    }
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
