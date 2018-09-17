var node1 = new dNode(1);
var node2 = new dNode(2);
var node3 = new dNode(3);
var node4 = new dNode(4);
var node5 = new dNode(5);
var node6 = new dNode(6);
node2.next = node5;
node5.next = node4;
node4.next = node1;
node1.next = node3;
node3.next = node6;
node6.prev = node3;
node3.prev = node1;
node1.prev = node4;
node4.prev = node5;
node5.prev = node2;
var dlist = new dList();
dlist.head = node2;
dlist.tail = node6;
//-----here live bug i really tried find this bug but cannot!
function partition(list, value) {
  console.log("partition() data", value, list);
  display(list);
  displayBack(list);
  if (list) {
    var temp = list.head;
    var findVal = false;
    while (temp) {
      var need = true;
      if (temp.val === value) findVal = true;
      //console.log(temp.val, findVal);
      if (temp.val < value && findVal) {
        prependValue(list, temp.val, value);
        //display(list);
        //displayBack(list);
        temp.val = temp.next.val;
        temp.next.prev = temp.prev;
        temp.next = temp.next.next;
        need = false;
        //display(list);
        //displayBack(list);
      }
      if (temp.val > value && !findVal) {
        appendValue(list, temp.val, value);
        //display(list);
        //displayBack(list);
        temp.val = temp.next.val;
        temp.next.prev = temp.prev;
        temp.next = temp.next.next;
        need = false;
        // display(list);
        // displayBack(list);
      }
      if (need) temp = temp.next;
    }
    console.log("result", list);
    display(list);
    displayBack(list);
    return list;
  }
  return null;
}
console.log(partition(dlist, 4));
console.log("------------------------------------------");
