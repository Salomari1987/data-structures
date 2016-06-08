var BinarySearchTree = function(value) {
	var newBinaryTree = Object.create(BinarySearchTree.prototype)
	newBinaryTree.value = value
	newBinaryTree.left;
	newBinaryTree.right;
	return newBinaryTree
};

BinarySearchTree.prototype.insert = function(value){
	if(value > this.value){
		if(!this.right){
			this.right = BinarySearchTree(value)
		} else {
			this.right.insert(value)
		}
	} else if (value < this.value){
		if(!this.left){
			this.left = BinarySearchTree(value)
		} else {
			this.left.insert(value)
		}
	}
	console.log(this)
}

BinarySearchTree.prototype.contains = function(value){
	if(value === this.value){
		return true
	} else if (value > this.value){
		while(true){
			if(value === this.right){
				return true
			} else if (this.right && this.right.contains(value)) {
				return true
			}
			break;
		}
	} else if (value < this.value){
		while(true){
			if(value === this.left){
				return true
			} else if (this.left && this.left.contains(value)) {
				return true
			}
			break;
		}
	}
	return false 
}

BinarySearchTree.prototype.depthFirstLog = function(callback){
	while(true){
		callback(this.value)
		if(this.right){
			this.right.depthFirstLog(callback)
		}
		if(this.left){
			this.left.depthFirstLog(callback)
		}
		break;
	}
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
