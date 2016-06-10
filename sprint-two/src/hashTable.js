

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[index] === undefined){
  	this._storage[index] = []
  }
  this._storage[index].push([k, v])
  this._storage.set(index, this._storage[index])
  
  this._count = this._count + 1;
  if(this._count >= this._limit*(0.75)){
  	this._limit = this._limit * 2
  	this._storage = LimitedArray(this._limit)
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var coll = this._storage.get(index)
  return _.reduce(coll, (acc, element) => {element[0] === k ? acc = element[1] : 0; return acc}, undefined)

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined)
  this._count = this._count - 1;
  if(this._count <= this._limit*(0.25) && this._limit > 8){
  	this._limit = this._limit / 2
  	this._storage = LimitedArray(this._limit)
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


