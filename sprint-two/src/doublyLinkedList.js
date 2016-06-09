var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  	if(list.head === null){
  		list.head = Node(value)
  		list.tail = list.head
  	} else {
  		list.tail.next = Node(value)
      list.tail.next.prev = list.tail
  		list.tail = list.tail.next
  	}
  };

  list.addToHead = function(value) {
    if(list.head === null){
      list.head = Node(value)
      list.tail = list.head
    } else {
      list.head.prev = Node(value)
      list.head.prev.next = list.head
      list.head = list.head.prev 
    }
  };

  list.removeTail = function(value) {
    if(list.tail !== null){
      var prevTail = list.tail.value
      delete list.tail.value
      if(list.tail.prev){
        list.tail.prev.next = null
        list.tail = list.tail.prev   
      }
      return prevTail
    } 
  };

  list.removeHead = function() {
  	if(list.head !== null){
  		var prevHead = list.head.value
  		delete list.head.value
      if(list.head.next){
        list.head.next.prev = null
    		list.head = list.head.next   
      }
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
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
