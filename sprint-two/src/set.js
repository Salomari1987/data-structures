var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	if(this._storage === undefined){
		this._storage = {}
	}
	if(!this.contains(item)){
		this._storage[item] = item
	}
};

setPrototype.contains = function(item) {
	if(this._storage[item] === item){
		return true
	}
	return false
	// return _.reduce(this._storage, (acc, element) => {
	// 	item === element ? acc = true : 0; return acc
	// }, false)
};

setPrototype.remove = function(item) {
	if(this.contains(item)){
		delete this._storage[item]
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
