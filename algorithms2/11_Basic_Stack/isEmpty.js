SLStack.prototype.isEmpty = function() {
  console.log("isEmpty() return whether the stack is empty", this);
  display(stack);
  if (!this.top) {
    console.log("result", true);
    //display(stack);
    return true;
  } else {
    console.log("result", false);
    //display(stack);
    return false;
  }
};
console.log(stack.isEmpty());
console.log("-----------------------------------------");
