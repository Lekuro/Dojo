SLQueue.prototype.enqueue = function(value) {
  console.log(
    "enqueue(val) to add the given value to end of queue: ",
    value,
    this
  );
  display(queue);
  let newNode = new SLNode(value);
  if (!this.tail) {
    this.head = newNode;
  } else {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  return this;
};
console.log(queue.enqueue(5));
display(queue);
console.log("-----------------------------------------");
