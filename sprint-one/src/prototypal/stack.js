var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods)
  someInstance.storage = {}
  return someInstance
};

var stackMethods = {
	push : function(value) {
  		this.storage[this.size()] = value
  	},

  	pop : function() {
  		var item = this.storage[this.size() - 1]
  		delete this.storage[this.size() - 1]
  		return item
  	},

  	size : function() {
  		var count = 0;
  		for(var key in this.storage){
  			count++;
  		}
  		return count;
  	}
}

// var stackMethods = {}

