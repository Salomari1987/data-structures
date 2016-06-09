var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  _.extend(newTree, treeMethods)		
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var child = Tree(value)
	child.parent = this
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

treeMethods.removeFromParent = function(value){
	for(var i = 0; i < this.children.length; i++){
		if(this.children[i].value === value){
			this.children[i].parent = null
			this.children.splice(i, 1)
		}
	}
}

treeMethods.traverse = function(callback) {
	callback(this.value)
	if(this.children.length > 0){
		_.each(this.children, (element, i) => {
			element.traverse(callback)
		})
	}
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
