//var node1 = { val: 1, next: { val: 2, next: { val: 3, next: null } } };
//var list = { head: node1 };
function average(current) {
  console.log("average() data---", current.head);
  if (current && current.head) {
    var temp = current.head,
      sum = 0,
      count = 0;
    while (temp) {
      sum += temp.val;
      count++;
      temp = temp.next;
    }
    var avg = sum / count;
    console.log("result", avg);
    return avg;
  }
  console.log("result", current);
  return null;
}
average(list);
console.log("------------------------------------------");
