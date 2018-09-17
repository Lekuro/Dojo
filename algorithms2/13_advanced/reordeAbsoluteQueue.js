function reordeAbsoluteQueue(queue) {
  console.log(
    "reordeAbsoluteQueue() accepts a Queue of numbers, sequenced in absolute-value order, such as (10,-20,30,-40,50). Using only an additional Stack for storage, reorder the Queue values so that they are in increasing order, such as (-40,-20,10,30,50).:",
    queue
  );
  displayQ(queue);
  if (queue) {
    if (queue.head && queue.tail) {
      var newStack = new SLStack();
      var temp = queue.head;
      while (temp && temp.next) {
        if (temp.val < 0) {
          var node = new SLNode(temp.val);
          node.next = newStack.top;
          newStack.top = node;
          temp.val = temp.next.val;
          temp.next = temp.next.next;
        } else {
          temp = temp.next;
        }
      }
      if (queue.tail.val < 0) {
        temp = queue.head;
        if (queue.head.val === queue.tail.val) {
          var node = new SLNode(queue.tail.val);
          node.next = newStack.top;
          newStack.top = node;
          queue.tail = null;
          queue.head = null;
          var empty = true;
        } else {
          while (temp && temp.next) {
            if (temp.next.val < 0) {
              var node = new SLNode(temp.next.val);
              node.next = newStack.top;
              newStack.top = node;
              temp.next = null;
              queue.tail = temp;
            } else {
              temp = temp.next;
            }
          }
        }
      }
      displayS(newStack);
      displayQ(queue);
      node = new SLNode(newStack.top.val);
      node.next = queue.head;
      queue.head = node;
      var tempS = newStack.top.next;
      temp = queue.head;
      while (tempS) {
        node = new SLNode(tempS.val);
        node.next = temp.next;
        temp.next = node;
        tempS = tempS.next;
        temp = temp.next;
      }
      if (empty) queue.tail = node;
      console.log("result", queue);
      displayQ(queue);
      return queue;
    }
  }
  return null;
}
console.log(reordeAbsoluteQueue(queue));
console.log("-----------------------------------------");
