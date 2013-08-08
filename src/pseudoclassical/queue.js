var Queue = function(){
  // Use an object with numeric keys to store values

  // Implement the methods below
  this.storage = {};
  this.first = 0;
  this.last = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function(){
  var result = this.first;
  if(this.first < this.last){
    this.first++;
  }
  return this.storage[result];
};

Queue.prototype.size = function(){
  return this.last - this.first;
};

var newQueue = new Queue();