function partitionStack(stack) {
  console.log(
    "partitionStack() Numerous values are stored in a Stack. Divide the values into a group of positive numbers and a group of zero-or-negative numbers. Rearrange the Stack’s values so that when popping, all non- positive values come before all positive numbers. The original order can otherwise be disregarded. Use only one Queue for additional storage.:",
    stack
  );
  displayS(stack);
  if (stack.top) {
    var firstTop = stack.top;
    var temp = stack.top;
    while (temp) {
      var newNode = new SLNode(temp.val);
      newNode.next = stack.top;
      stack.top = newNode;
      temp = temp.next;
    }
    //displayS(stack);
    temp = stack.top;
    while (temp) {
      if (temp.next === firstTop) {
        temp.next = null;
        break;
      }
      temp = temp.next;
    }
    console.log("result:", stack);
    displayS(stack);
    return stack;
  }
  return null;
}
console.log(partitionStack(stack3));
console.log("-----------------------------------------");
/*function partitionStack(stack) {
  console.log(
    "partitionStack() Numerous values are stored in a Stack. Divide the values into a group of positive numbers and a group of zero-or-negative numbers. Rearrange the Stack’s values so that when popping, all non- positive values come before all positive numbers. The original order can otherwise be disregarded. Use only one Queue for additional storage.:",
    stack
  );
  displayS(stack);
  if (stack.top) {
    var firstTop = stack.top;
    if (firstTop.val > 0) {
      var temp = stack.top;
      while (temp) {
        if (temp.val <= 0) {
          var newNode = new SLNode(temp.val);
          newNode.next = stack.top;
          stack.top = newNode;
        }
        temp = temp.next;
      }
      temp = firstTop;
      while (temp) {
        if (temp.next.val <= 0) {
          temp.next = null;
        }
        temp = temp.next;
      }
    }
    console.log("result:", stack);
    displayS(stack);
    return stack;
  }
  return null;
}
console.log(partitionStack(stack3));
console.log("-----------------------------------------");
*/
