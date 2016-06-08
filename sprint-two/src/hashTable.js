

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[index] === undefined){
  	this._storage[index] = []
  }
  this._storage[index].push([k, v])
  this._storage.set(index, this._storage[index])
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var coll = this._storage.get(index)
  return _.reduce(coll, (acc, element) => {element[0] === k ? acc = element[1] : 0; return acc},undefined)

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


