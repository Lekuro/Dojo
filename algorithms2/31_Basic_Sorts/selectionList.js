function selectionList(list) {
  console.log("selectionList() data:", list.head);
  display(list);
  if (list.head) {
    var count = 0;
    var change = 0;
    var curr = list.head;
    while (curr.next) {
      var min = curr.val;
      var temp = curr.next;
      var finded = false;
      while (temp) {
        count++;
        if (temp.val < min) {
          min = temp.val;
          finded = true;
        }
        temp = temp.next;
      }
      if (finded) {
        change++;
        temp = curr.next;
        while (temp) {
          count++;
          if (temp.val === min) {
            temp.val = curr.val;
            curr.val = min;
            break;
          }
          temp = temp.next;
        }
      }
      curr = curr.next;
    }
    console.log("result: ", list.head, "count: ", count, "change:", change);
    display(list);
    return list;
  }
  return null;
}
console.log(
  "selectionList() create a function that sorts a singly linked list using selection sort. Nodes contain .val , .next and other attributes you should not reference."
);
selectionList(list);
var node11 = new Node(1);
var node22 = new Node(2);
var node33 = new Node(3);
var node44 = new Node(4);
var node55 = new Node(5);
var node66 = new Node(6);
var node77 = new Node(7);
var node88 = new Node(8);
var listRev = new SList();
node88.next = node77;
node77.next = node66;
node66.next = node55;
node55.next = node44;
node44.next = node33;
node33.next = node22;
node22.next = node11;
listRev.head = node88;
//console.log(listRev);
//display(listRev);
selectionList(listRev);
console.log("------------------------------------------");
