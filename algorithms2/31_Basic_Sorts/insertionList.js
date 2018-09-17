function insertionList(list) {
  console.log("insertionList() data:", list.head);
  display(list);
  if (list.head) {
    var count = 0;
    var prevTemp = list.head;
    var temp = list.head.next;
    while (temp) {
      count++;
      var curr = list.head;
      if (temp.val < curr.val) {
        count++;
        var newNode = new Node(temp.val);
        newNode.next = list.head;
        list.head = newNode;
        prevTemp.next = temp.next;
      } else {
        var prevCurr = curr;
        curr = curr.next;
        while (curr !== temp) {
          count++;
          if (temp.val < curr.val) {
            var newNode = new Node(temp.val);
            newNode.next = curr;
            prevCurr.next = newNode;
            prevTemp.next = temp.next;
            break;
          }
          prevCurr = curr;
          curr = curr.next;
        }
      }
      temp = temp.next;
    }
    console.log("result: ", list.head, "count: ", count);
    display(list);
    return list;
  }
  return null;
}
console.log(
  "insertionList() use InsertionSort to sort singly linked lists. Only reference ListNode attributes .val and .next . What are the run-time and space complexities?"
);
insertionList(list);
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

insertionList(listRev);
console.log("------------------------------------------");
