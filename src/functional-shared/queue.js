var makeQueue = function(){
  // Use an object with numeric keys to store values

  // Implement the methods below
  var queue = {
    storage : {},
    first : 0,
    last : 0
  };


  _.extend(queue, queueMethods);

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
