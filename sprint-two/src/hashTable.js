

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[index] === undefined){
  	this._storage[index] = []
  }
  this._storage[index].push([k, v])
  this._storage.set(index, this._storage[index])
  this.count++;
    if((this._limit - this.count) === 1){
  	this._limit *= 2
  	this.count = this._limit/2
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
  this.count--;
  
  if(this.count < (this._limit/2)){
  	this._limit /= 2
  	this.count = this._limit*2
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


