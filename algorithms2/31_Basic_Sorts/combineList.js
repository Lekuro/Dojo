function combineList(list1, list2) {
  console.log("combineList() data:", list1, list2);
  display(list1);
  display(list2);
  if (list1 && list2 && list2.head) {
    if (list1.head) {
      var temp1 = list1.head,
        temp2 = list2.head;
      if (temp2.val < list1.head.val) {
        var newNode = new Node(temp2.val);
        newNode.next = list1.head;
        list1.head = newNode;
        temp1 = newNode;
        temp2 = temp2.next;
      }
      while (temp2 && temp1 && temp1.next) {
        if (temp2.val < temp1.next.val) {
          newNode = new Node(temp2.val);
          newNode.next = temp1.next;
          temp1.next = newNode;
          temp1 = temp1.next;
          temp2 = temp2.next;
        } else temp1 = temp1.next;
      }
      while (temp2) {
        newNode = new Node(temp2.val);
        temp1.next = newNode;
        temp2 = temp2.next;
      }
    }
    if (list1.head === null && list2.head) {
      newNode = new Node(list2.head.val);
      list1.head = newNode;
      temp1 = list1.head;
      temp2 = list2.head.next;
      while (temp2) {
        newNode = new Node(temp2.val);
        temp1.next = newNode;
        temp1 = newNode;
        temp2 = temp2.next;
      }
    }
    console.log("result: ", list1);
    display(list1);
    return list1;
  }
  return null;
}
console.log(
  "combineList() create Create a function that combines two already-sorted linked lists, returning a sorted list with both inputs. List nodes contain .val , .next and other attributes that you should not reference."
);

var node1 = new Node(1);
var node3 = new Node(3);
var node5 = new Node(5);
var node6 = new Node(6);
var node9 = new Node(9);
var list = new SList();
node1.next = node3;
node3.next = node5;
node5.next = node6;
node6.next = node9;
list.head = node1;
console.log(list);
var node2 = new Node(2);
var node33 = new Node(3);
var node4 = new Node(4);
var node7 = new Node(7);
var node8 = new Node(8);
var node10 = new Node(10);
var listRev = new SList();
node2.next = node33;
node33.next = node4;
node4.next = node7;
node7.next = node8;
node8.next = node10;
listRev.head = node2;
console.log(listRev);

combineList(list, listRev);
console.log("------------------------------------------");
