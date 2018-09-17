SLQueue.prototype.isEmpty = function() {
  console.log(
    "isEmpty() thatreturns whether our queue contains no values: ",
    this
  );
  display(queue);
  if (!this.tail && !this.head) return true;
  else return false;
};
console.log(queue.isEmpty());
display(queue);
console.log("-----------------------------------------");
