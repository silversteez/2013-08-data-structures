var Queue = function(){
  // Use an object with numeric keys to store values

  // Implement the methods below
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.first = 0;
  queue.last = 0;

  return queue;
};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.last] = value;
    this.last++;
  },

  dequeue : function(){
    var result = this.first;
    if(this.first < this.last){
      this.first++;
    }
    return this.storage[result];
  },

  size : function(){
    return this.last - this.first;
  }
};
