SLStack.prototype.contains = function(value) {
  console.log(
    "contains(val) return whether given val is within the stack",
    value,
    this
  );
  display(stack);
  if (this.top) {
    var temp = this.top;
    while (temp) {
      if (value === temp.val) {
        return true;
      }
      temp = temp.next;
    }
  }
  return false;
};
console.log(stack.contains(8));
console.log("-----------------------------------------");
