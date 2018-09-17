function removeMinimums(queue) {
  console.log(
    "removeMinimums(). to remove an SLQueue’s lowest value and all duplicates of this value, otherwise leaving values in the same sequence. Use only local variables; allocate no other objects. ",
    queue
  );
  display(queue);
  if (queue.head && queue.tail) {
    var temp = queue.head.next,
      min = queue.head.val;
    while (temp) {
      if (temp.val < min) {
        min = temp.val;
      }
      temp = temp.next;
    }
    //console.log(min);
    //display(queue);
    temp = queue.head;
    while (temp && temp.next) {
      if (temp.val === min) {
        temp.val = temp.next.val;
        temp.next = temp.next.next;
      } else {
        temp = temp.next;
      }
    }
    //display(queue);
    //console.log(queue.tail.val);
    if (queue.tail.val === min) {
      temp = queue.head;
      while (temp && temp.next) {
        if (temp.next.val === min) {
          temp.next = null;
          queue.tail = temp;
        }
        temp = temp.next;
      }
    }
    if (queue.tail.val === min) {
      queue.head = null;
      queue.tail = null;
    }
    console.log("result:", queue);
    display(queue);
    return queue;
  }
  return null;
}
//queue.enqueue(2);
//queue.enqueue(2);
console.log(removeMinimums(queue));
console.log("-----------------------------------------");
