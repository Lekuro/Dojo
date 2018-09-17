function compareQueues(queue1, queue2) {
  console.log(
    "compareQueues() returns whether queue1 and queue2 are equal:",
    queue1,
    queue2
  );
  display(queue1);
  display(queue2);
  if (queue1 && queue2) {
    if (!queue1.head && !queue1.tail && !queue2.head && !queue2.tail)
      return true;
    if (queue1.head && queue1.tail && queue2.head && queue2.tail) {
      var temp1 = queue1.head,
        temp2 = queue2.head;
      while (temp1 && temp2) {
        if (temp1.val === temp2.val) {
          temp1 = temp1.next;
          temp2 = temp2.next;
        } else return false;
      }
      //if (temp1 === null && temp2 === null) return true;
      return temp1 === temp2;
    }
  }
  return false;
}
console.log(compareQueues(queue, queue3));
display(queue);
display(queue3);
console.log("-----------------------------------------");
