SLQueue.prototype.sizeQueue = function() {
  console.log(
    "sizeQueue() to return amount of values are found within queue: ",
    this
  );
  display(queue);
  if (this.head && this.tail) {
    var temp = this.head;
    var count = 0;
    while (temp) {
      count++;
      temp = temp.next;
    }
    console.log("result", count);
    return count;
  }
  return null;
};
console.log(queue.sizeQueue(queue));
display(queue);
console.log("-----------------------------------------");
