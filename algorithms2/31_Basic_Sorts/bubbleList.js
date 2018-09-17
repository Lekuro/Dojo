function bubbleList(list) {
  console.log("bubbleList() data:", list.head);
  display(list);
  if (list.head) {
    var listLength = 0;
    var temp = list.head;
    while (temp) {
      listLength++;
      temp = temp.next;
    }
    var count = 0;
    var notSorted = true;
    var iteration = 1;
    while (notSorted) {
      notSorted = false;
      var prev = list.head;
      var curr = list.head.next;
      //while (prev && curr) {
      for (var i = 0; i < listLength - iteration; i++) {
        count++;
        if (prev.val > curr.val) {
          notSorted = true;
          var temp = prev.val;
          prev.val = curr.val;
          curr.val = temp;
        }
        prev = prev.next;
        curr = curr.next;
        //display(list);
      }
      iteration++;
    }
    //}
    console.log("result: ", list.head, "count: ", count);
    display(list);
    return list;
  }
  return null;
}
console.log(
  "bubbleList() create a function that uses BubbleSort to sort a linked list. The list nodes contain .val , .next and other attributes you should not reference."
);
bubbleList(list);
bubbleList(listRev);
console.log("------------------------------------------");
