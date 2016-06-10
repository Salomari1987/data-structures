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
}

BinarySearchTree.prototype.contains = function(value){
	if(value === this.value){
		return this;
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

BinarySearchTree.prototype.breadthFirstLog = function(func){
	 var callArray = [];
	if (arguments[1] === undefined){
		func(this.value);	
		if (this.right){
			callArray.push(this.right);
			}
		if (this.left){
			callArray.push(this.left);
		}
			console.log(arguments, "b")

		this.breadthFirstLog.call(this, func, callArray);
	} else {
		func = arguments[0]
		var args = arguments[1]
		for (var i = 0; i<args.length; i++){
			func(args[i].value);
			console.log(args[i].value)
			if (args[i].right){
				callArray.push(args[i].right);
			}
			if (args[i].left){
				callArray.push(args[i].left);
			}
		}
		if (callArray.length === 0){
			return true;
		}
		this.breadthFirstLog.call(this, func, callArray);
	}
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
