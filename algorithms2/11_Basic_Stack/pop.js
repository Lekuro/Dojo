SLStack.prototype.pop = function() {
  console.log("pop() to remove and return the top val", this);
  display(stack);
  if (this.top) {
    var temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    console.log("result", temp);
    display(stack);
    return temp;
  }
  console.log("result", null);
  display(stack);
  return null;
};
console.log(stack.pop());
console.log("-----------------------------------------");
