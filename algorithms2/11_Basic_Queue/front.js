SLQueue.prototype.front = function() {
  console.log("front() to return the value at front of queue: ", this);
  display(queue);
  if (this.head && this.tail) {
    return this.head.val;
  }
  return null;
};
console.log(queue.front());
display(queue);
console.log("-----------------------------------------");
