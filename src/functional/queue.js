var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var queue = {};

  var first = 0;
  var last = 0;
  queue.enqueue = function(value){
    storage[last] = value;
    last++;
  };

  queue.dequeue = function(){
    if(first < last){
        first++;
      }
    return storage[first];
  };

  queue.size = function(){
    return last - first;
  };

  return queue;
};
