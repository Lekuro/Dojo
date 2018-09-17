function swichPairsStack(stack) {
  console.log(
    "swichPairsStack() Given Stack containing integers, switch successive pairs of values starting at bottom of stack. If there is an odd number of values, the top value is unaffected. For example, assuming we list top values first, Stack (1,2,3,4,5,6,7) should become (1,3,2,5,4,7,6). Use only one additional Queue for storage.:",
    stack
  );
  displayS(stack);
  if (stack) {
    if (!stack.top) return newStack;
    if (stack.top) {
      var length = 0;
      var temp = stack.top;
      while (temp) {
        length++;
        temp = temp.next;
      }
      console.log(length);
      if (length > 1) {
        if (length % 2 === 1) {
          var head = stack.top;
          temp = stack.top.next;
        } else {
          temp = stack.top;
          stack.top = stack.top.next;
          temp.next = stack.top.next;
          stack.top.next = temp;
          head = temp;
          temp = temp.next;
        }
        displayS(stack);
        while (temp && temp.next) {
          var temp2 = temp.next;
          temp.next = temp.next.next;
          temp2.next = temp;
          head.next = temp2;
          head = head.next.next;
          temp = head.next;
        }
      }
      console.log("result:", stack);
      displayS(stack);
      return stack;
    }
  }
  return null;
}
console.log(swichPairsStack(stack));
console.log("-----------------------------------------");
