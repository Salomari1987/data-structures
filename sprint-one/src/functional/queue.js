var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage  
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value
  };

  someInstance.dequeue = function() {
    var item = storage[0]
    for(var i = 0; i < someInstance.size() - 1; i++){
      storage[i] = storage[i + 1]
    }
    delete storage[someInstance.size() - 1]
    return item
  };

  someInstance.size = function() {
    var count = 0;
    for(var key in storage){
      count++;
    }
    return count;
  };

  return someInstance;
};
