function length(current) {
  console.log("length() data---", current.head);
  if (current && current.head) {
    var temp = current.head,
      count = 0;
    while (temp) {
      count++;
      temp = temp.next;
    }
    console.log("result", count);
    return count;
  }
  console.log("result", current);
  return null;
}
length(list);
console.log("------------------------------------------");
