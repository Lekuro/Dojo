SLQueue.prototype.dequeue = function() {
  console.log("dequeue() to remove and return value at front of queue: ", this);
  display(queue);
  if (this.head && this.tail) {
    var temp = this.head;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      temp.next = null;
    }
    return temp;
  }
  return null;
};
console.log(queue.dequeue());
display(queue);
console.log("-----------------------------------------");
