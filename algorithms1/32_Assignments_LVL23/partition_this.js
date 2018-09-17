node2.next = node5;
node5.next = node4;
node4.next = node1;
node1.next = node3;
node3.next = node6;
list.head = node2;
function partition(current, value) {
  console.log("partition() data---", value, current);
  display(current);
  if (current && current.head) {
    var temp = current.head;
    var findVal = false;
    while (temp) {
      var need = true;
      if (temp.val === value) findVal = true;
      //console.log(temp.val, findVal);
      if (temp.val < value && findVal) {
        prependVal(current, temp.val, value);
        //display(current);
        temp.removeSelf(); //temp.val = temp.next.val;temp.next = temp.next.next;
        need = false;
        display(current);
      }
      if (temp.val > value && !findVal) {
        appendVal(current, temp.val, value);
        //display(current);
        temp.removeSelf(); //temp.val = temp.next.val;temp.next = temp.next.next;
        need = false;
        display(current);
      }
      if (need) temp = temp.next;
    }
    console.log("partition() result---", current.head);
    display(current);
    return current;
  }
  console.log("result", current);
  return null;
}
partition(list, 4);
console.log("------------------------------------------");
