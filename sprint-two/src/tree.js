var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods)		
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var child = Tree(value)
	this.children.push(child)
};

treeMethods.contains = function(target) {
	if(this.value === target){
		return true
	} else {
		for(var i = 0; i < this.children.length; i++){
			if(this.children[i].value === target){
				return true
			} else if (this.children[i].children.length > 0 && this.contains.call(this.children[i], target)) {
				return true
			}
		}
	}
	return false
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
