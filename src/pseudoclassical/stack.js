var Stack = function(){
  // Use an object with numeric keys to store values
 // Hint: set an initial value here
  // Implement the methods below
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function(){
  var result;
  if(this.stackSize){
    this.stackSize--;
  }
  result = this.storage[this.stackSize];
  return result;
};

Stack.prototype.size = function(){
  return this.stackSize;
};

var newStack = new Stack();