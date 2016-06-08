var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  	if(list.head === null){
  		list.head = Node(value)
  		list.tail = list.head
  	} else {
  		list.tail.next = Node(value)
  		list.tail = list.tail.next
  	}
  };

  list.removeHead = function() {
  	if(list.head !== null){
  		var prevHead = list.head.value
  		delete list.head.value
  		list.head = list.head.next
  		return prevHead
  	}	
  };

  list.contains = function(target) {
  	if(list.head.value === target){
  		return true 
  	} else {
  		var nextNode = list.head.next
  		if(nextNode === null){
  			return false
  		}
  		while(true){
  			if(nextNode.value === target){
  				return true
  			}
  			if(nextNode.next === null){
  				return false
  			}
  			nextNode = nextNode.next
  		}
  	}
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
