function interleaveQueue(queue) {
  console.log(
    "interleaveQueue(). Reorder SLQueue values to alternate first half values with second half values, in order. For example: (1,2,3,4,5) becomes (1,4,2,5,3). (may create one additional SLQueue):",
    queue
  );
  display(queue);
  if (queue.head && queue.tail) {
    var temp = queue.head,
      tempT = queue.tail,
      length = 0;
    while (temp) {
      length++;
      temp = temp.next;
    }
    if (length > 2) {
      temp = queue.head;
      //console.log(length, temp.val);
      for (var i = 0; i < length / 2; i++) {
        var newNode = new SLNode(temp.val);
        temp = temp.next;
        tempT.next = newNode;
        tempT = newNode;
        newNode = new SLNode(0);
        tempT.next = newNode;
        tempT = newNode;
        //display(queue);
      }
      tempT = queue.tail.next.next;
      while (temp) {
        tempT.val = temp.val;
        if (temp === queue.tail) break;
        temp = temp.next;
        tempT = tempT.next.next;
        //display(queue);
      }
      if (length % 2 === 1) {
        tempT.next.next = null;
        tempT = tempT.next;
        //console.log(tempT.val);
        //display(queue);
      }
      queue.head = queue.tail.next;
      queue.tail = tempT;
    }
    return queue;
  }
  return null;
}
//queue.enqueue(6);
console.log(interleaveQueue(queue));
display(queue);
console.log("-----------------------------------------");
