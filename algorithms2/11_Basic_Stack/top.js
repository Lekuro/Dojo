SLStack.prototype.topVal = function() {
  console.log("topVal() return (not remove) the stack’s top value", this);
  display(stack);
  if (this.top) {
    console.log("result", this.top.val);
    return this.top.val;
  }
  return null;
};
console.log(stack.topVal());
console.log("-----------------------------------------");
