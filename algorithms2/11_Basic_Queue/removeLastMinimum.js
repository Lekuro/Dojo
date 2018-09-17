function removeLastMinimum(queue) {
  console.log(
    "removeLastMinimum(). to remove only the last minimum value",
    queue
  );
  display(queue);
  if (queue.head && queue.tail) {
    if (queue.head === queue.tail) {
      queue.head = null;
      queue.tail = null;
    } else {
      var temp = queue.head.next,
        min = queue.head.val;
      while (temp) {
        if (temp.val < min) {
          min = temp.val;
        }
        temp = temp.next;
      }
      //console.log("min", min);
      temp = queue.head;
      var countMin = 0;
      while (temp) {
        if (temp.val === min) {
          countMin++;
        }
        temp = temp.next;
      }
      //console.log("countMin", countMin);
      temp = queue.head;
      while (temp && temp.next) {
        if (temp.val === min) {
          //console.log("countMin", countMin, "temp.val", temp.val);
          if (countMin === 1) {
            temp.val = temp.next.val;
            temp.next = temp.next.next;
          } else {
            countMin--;
            temp = temp.next;
          }
        } else {
          temp = temp.next;
        }
      }
      //display(queue);
      //console.log(queue.tail.val);
      if (queue.tail.val === min && countMin === 1) {
        temp = queue.head;
        while (temp && temp.next) {
          if (temp.next === queue.tail) {
            temp.next = null;
            queue.tail = temp;
          }
          temp = temp.next;
        }
      }
    }
    console.log("result:", queue);
    display(queue);
    return queue;
  }
  return null;
}
//queue.enqueue(3);
//queue.enqueue(3);
console.log(removeLastMinimum(queue));
console.log("-----------------------------------------");
