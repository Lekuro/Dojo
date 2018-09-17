SLQueue.prototype.contains = function(value) {
  console.log(
    "contains(val) to return whether given value is found within queue: ",
    value,
    this
  );
  display(queue);
  if (this.head && this.tail) {
    var temp = this.head;
    while (temp) {
      if (temp.val === value) {
        return true;
      }
      temp = temp.next;
    }
  }
  return false;
};
console.log(queue.contains(8));
display(queue);
console.log("-----------------------------------------");
