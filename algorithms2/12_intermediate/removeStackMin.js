function removeStackMin(stack) {
  console.log(
    "removeStackMin() remove a Stack’s minimum value, otherwise leaving values in order. If duplicate min values are found, remove them all (see below). Use only one additional Queue (plus primitive local vars) for storage:",
    stack
  );
  displayS(stack);
  if (stack.top) {
    var min = stack.top.val;
    var temp = stack.top.next;
    while (temp) {
      if (min > temp.val) {
        min = temp.val;
      }
      temp = temp.next;
    }
    //console.log(min);
    temp = stack.top;
    while (temp && temp.next) {
      if (temp.val === min) {
        temp.val = temp.next.val;
        temp.next = temp.next.next;
      } else {
        temp = temp.next;
      }
    }
    //displayS(stack);
    temp = stack.top;
    while (temp && temp.next) {
      if (temp.next.val === min) {
        temp.next = null;
      } else {
        temp = temp.next;
      }
    }
    if (stack.top.val === min) {
      stack.top = null;
    }
    console.log("result:", stack);
    displayS(stack);
    return stack;
  }
  return null;
}
console.log(removeStackMin(stack));
console.log("-----------------------------------------");
