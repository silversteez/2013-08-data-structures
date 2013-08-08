var makeStack = function(){
  // Use an object with numeric keys to store values
 // Hint: set an initial value here
  // Implement the methods below
  var stack = {
    storage : {},
    stackSize : 0
  };

  _.extend(stack, stackMethods);

  return stack;
};

var stackMethods = {
  push : function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },

  pop : function(){
    var result;
    if(this.stackSize){
      this.stackSize--;
    }
    result = this.storage[this.stackSize];
    return result;
  },

  size : function(){
    return this.stackSize;
  }
};