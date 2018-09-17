SLStack.prototype.size = function() {
  console.log("size(val) return the number of stacked values", this);
  display(stack);
  if (this.top) {
    var temp = this.top;
    var length = 0;
    while (temp) {
      length++;
      temp = temp.next;
    }
    console.log("result", length);
    display(stack);
    return length;
  }
  return null;
};
console.log(stack.size());
console.log("-----------------------------------------");
