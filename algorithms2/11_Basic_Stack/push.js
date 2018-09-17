SLStack.prototype.push = function(value) {
  console.log("push(val) that adds val to stack", value, this);
  display(stack);
  var newNode = new SLNode(value);
  if (this.top) {
    newNode.next = this.top;
  }
  this.top = newNode;
  console.log("result", this);
  display(stack);
  return this;
};
console.log(stack.push(5));
console.log("-----------------------------------------");
