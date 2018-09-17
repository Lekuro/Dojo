node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.prev = node5;
node5.prev = node4;
node4.prev = node3;
node3.prev = node2;
node2.prev = node1;
dlist.head = node1;
dlist.tail = node6;
dList.prototype.kToLastVal = function(k) {
  console.log("kToLastVal data", k, this);
  display(this);
  if (this.tail) {
    var temp = this.tail;
    var countKth = 0;
    while (temp) {
      if (k === countKth) {
        console.log("kToLastVal result", temp.val);
        return temp.val;
      } else {
        countKth++;
        temp = temp.prev;
      }
    }
  }
  return null;
};
dlist.kToLastVal(2);
console.log("------------------------------------------");
/*function kToLastVal(list, k) {
  if (!list) {
    throw "Error";
  }
  console.log("kToLastVal data", k, list);
  display(list);
  var temp = list.tail;
  if (k < 0) return null;
  while (temp) {
    if (k) {
      k--;
      temp = temp.prev;
    } else {
      console.log("kToLastVal result", temp.val);
      return temp.val;
    }
  }
  return null;
}
kToLastVal(dlist, 2);*/
